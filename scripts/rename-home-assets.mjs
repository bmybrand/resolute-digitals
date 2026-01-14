import fs from "fs/promises";
import path from "path";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const sharp = require("sharp");

const cwd = process.cwd();
const publicAssetsDir = path.join(cwd, "public", "assets");

const sectionFiles = [
  "components/Home/ui/floating-navbar.tsx",
  "components/Home/herobar.tsx",
  "components/Home/SecSection.tsx",
  "components/Home/bento.tsx",
  "components/Home/Thirdsec.tsx",
  "components/Home/Forthsec.tsx",
  "components/Home/Fifthsec.tsx",
  "components/Home/curvaturecards.tsx",
  "components/Home/revolvingicons.tsx",
  "components/Home/sevensection.tsx",
  "components/Home/eightsec.tsx",
  "components/Home/ninesec.tsx",
  "components/Home/rewiewcards.tsx",
  "components/Home/footersec.tsx",
];

const assetRegex = /\/assets\/[^"'`]+/g;
const quoteNormalizeRegex = /[“”]/g;

async function fileExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

function toAssetFilePath(assetPath) {
  const rel = assetPath.replace("/assets/", "");
  return path.join(publicAssetsDir, rel);
}

async function resolveAssetPath(assetPath) {
  const direct = toAssetFilePath(assetPath);
  if (await fileExists(direct)) {
    return direct;
  }

  const normalized = assetPath.replace(quoteNormalizeRegex, "\"");
  const normalizedFile = toAssetFilePath(normalized);
  if (await fileExists(normalizedFile)) {
    return normalizedFile;
  }

  return null;
}

async function collectAssetsInOrder() {
  const ordered = [];
  const seen = new Set();

  for (const file of sectionFiles) {
    const fullPath = path.join(cwd, file);
    const content = await fs.readFile(fullPath, "utf8");
    const matches = content.match(assetRegex) || [];
    for (const asset of matches) {
      if (asset.toLowerCase().endsWith(".mp4")) {
        continue;
      }
      if (!seen.has(asset)) {
        seen.add(asset);
        ordered.push(asset);
      }
    }
  }

  return ordered;
}

function buildMapping(assets) {
  const mapping = new Map();
  assets.forEach((asset, index) => {
    const ext = path.extname(asset);
    const base = `rd-image${String(index + 1).padStart(3, "0")}`;
    mapping.set(asset, `/assets/${base}${ext}`);
  });
  return mapping;
}

async function renameAssets(mapping) {
  for (const [oldAsset, newAsset] of mapping.entries()) {
    const oldFile = await resolveAssetPath(oldAsset);
    if (!oldFile) {
      continue;
    }
    const newFile = toAssetFilePath(newAsset);
    if (await fileExists(newFile)) {
      throw new Error(`Target already exists: ${newFile}`);
    }
    await fs.rename(oldFile, newFile);
  }
}

async function generateFormats(mapping) {
  for (const newAsset of mapping.values()) {
    const ext = path.extname(newAsset).toLowerCase();
    const base = newAsset.slice(0, -ext.length);
    const filePath = toAssetFilePath(newAsset);

    if (ext === ".svg") {
      const pngTarget = toAssetFilePath(`${base}.png`);
      const webpTarget = toAssetFilePath(`${base}.webp`);
      if (!(await fileExists(pngTarget))) {
        await sharp(filePath, { density: 300 }).png().toFile(pngTarget);
      }
      if (!(await fileExists(webpTarget))) {
        await sharp(filePath, { density: 300 }).webp().toFile(webpTarget);
      }
    }

    if (ext === ".png") {
      const webpTarget = toAssetFilePath(`${base}.webp`);
      if (!(await fileExists(webpTarget))) {
        await sharp(filePath).webp().toFile(webpTarget);
      }
    }
  }
}

async function replaceInFile(filePath, mapping) {
  const content = await fs.readFile(filePath, "utf8");
  let updated = content;
  for (const [oldAsset, newAsset] of mapping.entries()) {
    updated = updated.split(oldAsset).join(newAsset);
  }
  if (updated !== content) {
    await fs.writeFile(filePath, updated, "utf8");
  }
}

async function updateReferences(mapping) {
  const targets = [];
  const scanRoots = ["components", "app"];

  for (const root of scanRoots) {
    const rootPath = path.join(cwd, root);
    const stack = [rootPath];
    while (stack.length) {
      const current = stack.pop();
      const entries = await fs.readdir(current, { withFileTypes: true });
      for (const entry of entries) {
        const entryPath = path.join(current, entry.name);
        if (entry.isDirectory()) {
          stack.push(entryPath);
        } else if (/\.(tsx|ts|jsx|js)$/.test(entry.name)) {
          targets.push(entryPath);
        }
      }
    }
  }

  for (const file of targets) {
    await replaceInFile(file, mapping);
  }
}

async function main() {
  const assets = await collectAssetsInOrder();
  const missing = [];
  const existingAssets = [];
  const missingListPath = path.join(cwd, "public", "assets", "rd-image-missing.json");
  const hasMissingList = await fileExists(missingListPath);

  for (const asset of assets) {
    const resolved = await resolveAssetPath(asset);
    if (!resolved) {
      missing.push(asset);
      continue;
    }
    existingAssets.push(asset);
  }

  if (existingAssets.length === 0 && hasMissingList) {
    const cachedMissing = JSON.parse(await fs.readFile(missingListPath, "utf8"));
    const filtered = assets.filter((asset) => !cachedMissing.includes(asset));
    const mapping = buildMapping(filtered);
    await updateReferences(mapping);

    const manifest = Array.from(mapping.entries()).map(([from, to]) => ({
      from,
      to,
    }));
    await fs.writeFile(
      path.join(cwd, "public", "assets", "rd-image-manifest.json"),
      JSON.stringify(manifest, null, 2),
      "utf8"
    );
    return;
  }

  const mapping = buildMapping(existingAssets);

  await renameAssets(mapping);
  await generateFormats(mapping);
  await updateReferences(mapping);

  const manifest = Array.from(mapping.entries()).map(([from, to]) => ({
    from,
    to,
  }));
  await fs.writeFile(
    path.join(cwd, "public", "assets", "rd-image-manifest.json"),
    JSON.stringify(manifest, null, 2),
    "utf8"
  );

  if (missing.length) {
    await fs.writeFile(
      path.join(cwd, "public", "assets", "rd-image-missing.json"),
      JSON.stringify(missing, null, 2),
      "utf8"
    );
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
