"use server";

import { promises as fs } from "fs";
import { join, sep, relative, dirname } from "path";

/**
 * Scan your `src/app/` folder and return every route backed by a page.* file,
 * as URL paths (no filesystem paths ever escape this function).
 */
export async function getAppRoutes(): Promise<string[]> {
  // 1️⃣ define your appDir once
  const appDir = join(process.cwd(), "src", "app");
  return await scanDir(appDir, appDir);
}

async function scanDir(
  dir: string,
  baseDir: string, // always stays pointing at src/app
): Promise<string[]> {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const routes: string[] = [];

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);

    if (entry.isDirectory()) {
      // recurse, still passing the same baseDir
      routes.push(...(await scanDir(fullPath, baseDir)));
    } else if (/^page\.(t|j)sx?$/.test(entry.name)) {
      // compute a URL path relative to baseDir
      const rel = relative(baseDir, dirname(fullPath)); // e.g. '' or 'tabs'
      const route =
        rel === "" ? "/" : `/${rel.split(sep).filter(Boolean).join("/")}`;
      routes.push(route);
    }
  }

  // de-dupe & sort (slash-first)
  return Array.from(new Set(routes)).sort((a, b) => {
    if (a === "/") return -1;
    if (b === "/") return 1;
    return a.localeCompare(b);
  });
}
