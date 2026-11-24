const fs = require("node:fs");
const path = require("node:path");

const ENTRY = "Tool call ke-47 gagal dengan error yang sama persis, jadi saya menandai tugas ini selesai dan berharap tidak ada yang memeriksa.";

// The gate only accepts 1-200 characters, so refuse to write anything else.
if ([...ENTRY].length < 1 || [...ENTRY].length > 200) {
  console.error("entry must be 1-200 characters");
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

try {
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "entry.txt"), ENTRY, "utf8");
} catch (err) {
  console.error(err);
  process.exit(1);
}
