import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'

/**
 * The plugin rewrites the model-selection UI, so it depends on DSH's theme token
 * names. When upstream renames or drops a token, the plugin silently falls back
 * to a hard-coded colour: correct in light mode, wrong in dark mode. This test
 * compares the tokens the client bundle actually references against a fixture
 * generated from the theme package.
 *
 * The fixture is a snapshot, not a live read: `lib/client.js` has to work
 * without DSH installed. Refresh it with `npm run tokens:refresh` after bumping
 * the DSH version.
 */
const fixture = JSON.parse(readFileSync(new URL('./fixtures/dsw-tokens.json', import.meta.url), 'utf8'))
const clientCss = readFileSync(new URL('../lib/client.js', import.meta.url), 'utf8')

const used = [...new Set([...clientCss.matchAll(/var\((--dsw-[a-z0-9-]+)/g)].map((m) => m[1]))]

describe('theme tokens', () => {
  it('finds the fixture', () => {
    expect(fixture.tokens.length).toBeGreaterThan(100)
  })

  it('references at least some tokens, or the regex broke', () => {
    expect(used.length).toBeGreaterThan(10)
  })

  it('only uses tokens the theme defines', () => {
    const defined = new Set(fixture.tokens)
    expect(used.filter((token) => !defined.has(token))).toEqual([])
  })
})
