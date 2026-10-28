#!/usr/bin/env node
/**
 * Regenerates tests/fixtures/dsw-tokens.json from the installed DSH theme package.
 *
 * The fixture is committed so `npm test` works without DSH present. Run this
 * after bumping the DSH version, and pass the theme's directory if it is not in
 * node_modules (e.g. a local checkout).
 *
 *   node scripts/refresh-tokens.mjs [path-to-dsh-client-ui-theme]
 */
import { readFileSync, writeFileSync } from 'node:fs'
import { createRequire } from 'node:module'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))
const require = createRequire(import.meta.url)

const themeDir = process.argv[2] ?? dirname(require.resolve('@deepseek-ai/dsh-client-ui-theme/package.json'))
const pkg = JSON.parse(readFileSync(join(themeDir, 'package.json'), 'utf8'))
const css = readFileSync(join(themeDir, 'lib', 'client.js'), 'utf8')

const tokens = [...new Set([...css.matchAll(/(--dsw-[a-z0-9-]+)\s*:/g)].map((m) => m[1]))].sort()

if (tokens.length === 0) {
  console.error(`No tokens found in ${join(themeDir, 'lib', 'client.js')} — has the bundle layout changed?`)
  process.exit(1)
}

const fixture = {
  source: pkg.name,
  version: pkg.version,
  note: 'Generated from the theme package CSS. Refresh when bumping the DSH version.',
  tokens,
}

const out = join(here, '..', 'tests', 'fixtures', 'dsw-tokens.json')
writeFileSync(out, `${JSON.stringify(fixture, null, 2)}\n`)
console.log(`Wrote ${tokens.length} tokens from ${pkg.name}@${pkg.version} to ${out}`)
