import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("https://preview.example/", {
      headers: { accept: "text/html", host: "preview.example" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the Nu Body experience with verified business content", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Nu Body of Dallas \| Laser &amp; Aesthetic Care<\/title>/i);
  assert.match(html, /Confidence,/);
  assert.match(html, /What would you like to improve\?/);
  assert.match(html, /15\+ years of industry experience/);
  assert.match(html, /No packages/);
  assert.match(html, /972-248-BODY/);
  assert.match(html, /17110 Dallas Parkway/);
  assert.match(html, /Request a free consultation/);
  assert.match(html, /aria-label="Filter treatments by goal"/);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|Your site is taking shape/);
});

test("ships brand, photography, social metadata and no starter preview", async () => {
  const [experience, layout, packageJson, css] = await Promise.all([
    readFile(new URL("../app/NuBodyExperience.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);

  assert.match(experience, /Laser Hair Removal/);
  assert.match(experience, /GentleLASE/);
  assert.match(experience, /GentleYAG/);
  assert.match(experience, /aria-expanded=\{menuOpen\}/);
  assert.match(experience, /aria-pressed=\{activeFilter === filter\.id\}/);
  assert.match(layout, /og\.png/);
  assert.match(layout, /x-forwarded-host/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  assert.match(css, /prefers-reduced-motion/);
  assert.match(css, /@media \(max-width: 620px\)/);

  await Promise.all([
    access(new URL("../public/brand-logo.png", import.meta.url)),
    access(new URL("../public/favicon.png", import.meta.url)),
    access(new URL("../public/og.png", import.meta.url)),
    access(new URL("../public/images/hero-skin.jpg", import.meta.url)),
    assert.rejects(access(new URL("../app/_sites-preview/SkeletonPreview.tsx", import.meta.url))),
  ]);
});
