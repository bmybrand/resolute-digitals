import { mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const assets = path.join(process.cwd(), "public", "assets");
const output = path.join(assets, "muslim-app-showcase");

const screens = [
  ["1Home.png", "daily-home.webp"],
  ["2Home Extended .png", "extended-home.webp"],
  ["3Add Prayer Rakat(1).png", "prayer-rakat.webp"],
  ["4Qibla Finder.png", "qibla-finder.webp"],
  ["5Qadha Tracker.png", "qadha-tracker.webp"],
  ["6Group list.png", "groups.webp"],
  ["7Group.png", "group-detail.webp"],
  ["8Moment history.png", "moment-history.webp"],
  ["9Moment Details.png", "moment-details.webp"],
  ["11Quran UI Side Menu Open.png", "quran-menu.webp"],
  ["12Quran UI with Player.png", "quran-player.webp"],
  ["Quran UI with Translation and translitration.png", "quran-translation.webp"],
  ["14Achievements.png", "achievements.webp"],
  ["15Achievement Tier.png", "achievement-tier.webp"],
  ["16Achievement view UI.png", "achievement-detail.webp"],
  ["17User Profile.png", "user-profile.webp"],
  ["18Prayer Tracker.png", "prayer-tracker.webp"],
];

await mkdir(output, { recursive: true });

await Promise.all(
  screens.map(([source, destination]) =>
    sharp(path.join(assets, source))
      .resize(660, 1180, { fit: "cover", position: "top" })
      .webp({ quality: 78, effort: 5 })
      .toFile(path.join(output, destination)),
  ),
);

