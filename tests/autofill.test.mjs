import { describe, expect, it } from 'vitest'
import { buildAutofillPatch } from '../lib/index.js'

const route = (...models) => ({ r: { models } })

describe('buildAutofillPatch', () => {
  it('returns nothing when there is nothing to fill', () => {
    expect(buildAutofillPatch(undefined)).toBeUndefined()
    expect(buildAutofillPatch({})).toBeUndefined()
    expect(buildAutofillPatch(route())).toBeUndefined()
  })

  it('never overwrites a model that declares its own efforts', () => {
    const declared = { id: 'gpt-4o', reasoningEfforts: ['low', 'high'] }
    const patch = buildAutofillPatch(route(declared))
    expect(patch.providers.r.models[0].reasoningEfforts).toEqual(['low', 'high'])
  })

  it('honours an explicit false and the unset marker', () => {
    const off = { id: 'gpt-4o', reasoningEfforts: false }
    const unset = { id: 'gpt-4o', reasoningEffortsUnset: true }
    const models = buildAutofillPatch(route(off, unset)).providers.r.models
    expect(models[0].reasoningEfforts).toBe(false)
    expect(models[1].reasoningEffortsUnset).toBe(true)
    expect(models[1].reasoningEfforts).toBeUndefined()
  })

  it('fills a known model and stamps the revision it wrote', () => {
    const patch = buildAutofillPatch(route({ id: 'deepseek-v4-vision' }), () => true, {}, 7)
    const model = patch.providers.r.models[0]
    expect(model.reasoningEfforts).toBeTruthy()
    expect(model.reasoningEffortsAutofilled).toBe(7)
    expect(model.input).toContain('text')
  })

  it('respects the route filter', () => {
    const routes = { keep: { models: [{ id: 'gpt-4.1' }] }, drop: { models: [{ id: 'gpt-4.1' }] } }
    const patch = buildAutofillPatch(routes, (r) => r === 'keep')
    expect(Object.keys(patch.providers)).toEqual(['keep'])
  })
})
