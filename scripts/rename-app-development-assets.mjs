import fs from "fs/promises";
import path from "path";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const sharp = require("sharp");

const cwd = process.cwd();
const publicAssetsDir = path.join(cwd, "public", "assets");

const sectionFiles = [
  "components/Home/ui/floating-navbar.tsx",
  "components/services/AppDevelopment/herosec.tsx",
  "components/services/AppDevelopment/Secsec.tsx",
  "components/services/AppDevelopment/thirdsec.tsx",
  "components/services/AppDevelopment/forthsec.tsx",
  "components/services/AppDevelopment/CoreCapabilities.tsx",
  "components/services/AppDevelopment/data.tsx",
  "components/services/AppDevelopment/FaqSection.tsx",
  "components/services/workTogether.tsx",
  "components/services/rewiewcards.tsx",
  "components/About/ContactSection.tsx",
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
  const cleaned = assetPath.trim().replace(quoteNormalizeRegex, "\"").replace(/%20/g, " ");
  const direct = toAssetFilePath(cleaned);
  if (await fileExists(direct)) {
    return direct;
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
      const lower = asset.toLowerCase();
      if (lower.endsWith(".mp4")) {
        continue;
      }
      if (asset.includes("/assets/rd-image")) {
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

async function getNextIndex() {
  const files = await fs.readdir(publicAssetsDir);
  let max = 0;
  for (const file of files) {
    const match = file.match(/^rd-image(\d+)\./);
    if (match) {
      const value = Number(match[1]);
      if (value > max) {
        max = value;
      }
    }
  }
  return max + 1;
}

function buildMapping(assets, startIndex) {
  const mapping = new Map();
  assets.forEach((asset, index) => {
    const normalized = asset.trim().replace(/%20/g, " ");
    const ext = path.extname(normalized);
    const base = `rd-image${String(startIndex + index).padStart(3, "0")}`;
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
  const failures = [];
  for (const newAsset of mapping.values()) {
    const ext = path.extname(newAsset).toLowerCase();
    const base = newAsset.slice(0, -ext.length);
    const filePath = toAssetFilePath(newAsset);

    if (ext === ".svg") {
      const pngTarget = toAssetFilePath(`${base}.png`);
      const webpTarget = toAssetFilePath(`${base}.webp`);
      try {
        if (!(await fileExists(pngTarget))) {
          await sharp(filePath, { density: 300 }).png().toFile(pngTarget);
        }
        if (!(await fileExists(webpTarget))) {
          await sharp(filePath, { density: 300 }).webp().toFile(webpTarget);
        }
      } catch (error) {
        failures.push({ asset: newAsset, error: String(error) });
      }
    }

    if (ext === ".png") {
      const webpTarget = toAssetFilePath(`${base}.webp`);
      try {
        if (!(await fileExists(webpTarget))) {
          await sharp(filePath).webp().toFile(webpTarget);
        }
      } catch (error) {
        failures.push({ asset: newAsset, error: String(error) });
      }
    }
  }

  return failures;
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

  for (const asset of assets) {
    const resolved = await resolveAssetPath(asset);
    if (!resolved) {
      missing.push(asset);
      continue;
    }
    existingAssets.push(asset);
  }

  const startIndex = await getNextIndex();
  const mapping = buildMapping(existingAssets, startIndex);

  await renameAssets(mapping);
  const failures = await generateFormats(mapping);
  await updateReferences(mapping);

  const manifest = Array.from(mapping.entries()).map(([from, to]) => ({
    from,
    to,
  }));
  await fs.writeFile(
    path.join(cwd, "public", "assets", "rd-image-app-development-manifest.json"),
    JSON.stringify(manifest, null, 2),
    "utf8"
  );

  if (missing.length) {
    await fs.writeFile(
      path.join(cwd, "public", "assets", "rd-image-app-development-missing.json"),
      JSON.stringify(missing, null, 2),
      "utf8"
    );
  }

  if (failures.length) {
    await fs.writeFile(
      path.join(cwd, "public", "assets", "rd-image-app-development-format-failures.json"),
      JSON.stringify(failures, null, 2),
      "utf8"
    );
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
