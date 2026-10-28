window.__ModuleLoader__.load({
	id: "dsh-better-reasoning-effort",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;

"use strict";var nt=Object.defineProperty;var eo=Object.getOwnPropertyDescriptor;var to=Object.getOwnPropertyNames;var no=Object.prototype.hasOwnProperty;var oo=(e,t,n)=>t in e?nt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var ro=(e,t)=>{for(var n in t)nt(e,n,{get:t[n],enumerable:!0})},io=(e,t,n,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of to(t))!no.call(e,r)&&r!==n&&nt(e,r,{get:()=>t[r],enumerable:!(o=eo(t,r))||o.enumerable});return e};var so=e=>io(nt({},"__esModule",{value:!0}),e);var Gt=(e,t,n)=>oo(e,typeof t!="symbol"?t+"":t,n);var gr={};ro(gr,{EffortEditor:()=>ut,apply:()=>pr,baselineModelsOf:()=>Tn,compatOf:()=>At,createEditorApi:()=>Ht,defaultEffortOf:()=>Pt,describeNamespace:()=>fe,effortsOf:()=>It,findModelMenu:()=>jt,inject:()=>cr,inputOf:()=>Nt,name:()=>ur,nameOf:()=>Ot,providersOf:()=>ve,userProvidersOf:()=>_t,writeModelRows:()=>qe});module.exports=so(gr);var Zn=require("react");var X="dsh-better-reasoning-effort",Vt="/dsh-better-reasoning-effort/raw-models",Jt="/dsh-better-reasoning-effort/autofill-config",me="llm-pi-ai",ae="reasoningEffortsUnset",ke="inputUnset",Ae="reasoningEffortsAutofilled",Oe="defaultEffort",xt=X;var De=require("react");function $t(e){let{locale:t}=e,n=(0,De.useCallback)(r=>t.subscribe(r),[t]),o=(0,De.useCallback)(()=>t.getSnapshot().revision??0,[t]);return(0,De.useSyncExternalStore)(n,o),e.children()}var Xt={reasoningEffort:"Reasoning effort",autoAdapt:"Auto-adapt",apply:"Apply",reset:"Reset",pendingSave:"Modified \u2014 it will be written when you save this card.",pendingHint:"Cancel or reload discards it, exactly like the card's own fields.",appliedHint:"Applied suggestion from {source} \xB7 confidence: {confidence}",inputHintEndpoint:"Modality advice comes from the endpoint listing.",inputHintKnowledge:"Modality advice comes from the knowledge base.",inputHintHeuristic:"Modality guessed from the name alone (low confidence) \u2014 verify.",referenceTitle:"Reference capacities (hints only, never auto-filled)",contextWindowLabel:"Context window",maxTokensLabel:"Max output",inputModality:"Input modalities",modalityImage:"Image input",modalityInherit:"Not declared \u2014 the provider default applies (usually text-only).",clearDeclaration:"Clear declaration",confidence_high:"high",confidence_medium:"medium",confidence_low:"low \u2014 verify before relying on it",noSuggestion:"No suggestion is available for this model.",conflict:"The settings document kept changing under this edit. Wait a moment, then apply again.",writeError:"Failed: {message}",renderFailed:"Reasoning-effort editor failed to render",wirePlaceholder:"Wire value",wireValue:"value",reasoningDisabled:"No reasoning-effort control declared for this model (false) \u2014 do not arm thinking levels.",bareHint:"Clearing every level removes the declaration \u2014 requests go out bare (provider default), which some relays require.",defaultRiskDisabled:"No off level: Default and provider tests send thinking: disabled, which this model rejects (e.g. 1210).",defaultRiskQwen:"No off level: Default sends enable_thinking: false \u2014 only fails where the upstream requires thinking on.",stagedHint:"Not saved yet. Staged settings are applied automatically once the model is saved.",level_off:"off",level_minimal:"minimal",level_low:"low",level_medium:"medium",level_high:"high",level_xhigh:"xhigh",level_max:"max",sliderToggleTitle:"Reasoning effort slider",sliderToggleDescription:"Show a reasoning-effort slider with dynamic radiation effects in the model menu; the levels adapt to the current model.",sliderToggleAria:"Enable reasoning effort slider",settingOn:"On",settingOff:"Off",sliderEffortAria:"Reasoning effort",sliderNoLevels:"The current model exposes no reasoning-effort levels.",triggerFallback:"Select model",effortDefault:"Default",sliderEffortTitle:"Reasoning effort \xB7 {name}",sliderEffortTitleError:"Reasoning effort failed: {error}",sliderNoCurrent:"No model selected.",compatTitle:"Endpoint compatibility",budgetFieldLabel:"Thinking budget field",budgetFieldHint:"Which parameter carries the thinking-token budget: some vLLM and self-hosted endpoints read thinking_token_budget, others thinking_budget or thinking_budget_tokens. Unset sends none of them.",budgetUnset:"Not set",defaultEffortLabel:"Default effort",defaultEffortUnset:"Follow memory",defaultEffortHint:"The level every new session starts this model at \u2014 it outranks the remembered levels. Within a session, a level you pick by hand always wins. Empty follows the memory chain.",clearDefaultEffort:"Clear pick",priorityLabel:"vLLM priority",priorityPlaceholder:"e.g. 0",priorityHint:"Scheduler priority for endpoints started with --priority, where lower runs first. Leave empty to send nothing.",priorityInvalid:"Priority must be an integer \u2014 it is not saved until fixed.",maxOutputLabel:"max_output_tokens in requests",maxOutputUnset:"Unset \u2014 follow the protocol default",maxOutputOn:"Send it",maxOutputOff:"Omit it",maxOutputHint:'For Responses-protocol gateways only, and only when a request carries an output cap: some of them reject the parameter, so "Omit it" keeps the cap out of the request entirely. Unset is the safe choice.',aliasMigrated:"Legacy alias detected \u2014 saving writes the explicit budget field.",modelSearchPlaceholder:"Search models\u2026",modelSearchNoMatches:"No matching models",modelSearchClear:"Clear search",modelSearchFailed:"Model search failed to render"},Yt={reasoningEffort:"\u601D\u8003\u5F3A\u5EA6",autoAdapt:"\u81EA\u52A8\u9002\u914D",apply:"\u5E94\u7528",reset:"\u653E\u5F03\u4FEE\u6539",pendingSave:"\u5DF2\u4FEE\u6539\u2014\u2014\u70B9\u5361\u7247\u300C\u4FDD\u5B58\u300D\u65F6\u4E00\u8D77\u5199\u5165\u3002",pendingHint:"\u70B9\u300C\u53D6\u6D88\u300D\u6216\u5237\u65B0\u9875\u9762\u4F1A\u4E00\u5E76\u4E22\u5F03\uFF0C\u4E0E\u5361\u7247\u81EA\u8EAB\u7684\u5B57\u6BB5\u4E00\u81F4\u3002",appliedHint:"\u5DF2\u6309 {source} \u5E94\u7528\u5EFA\u8BAE \xB7 \u7F6E\u4FE1\u5EA6\uFF1A{confidence}",inputHintEndpoint:"\u6A21\u6001\u5EFA\u8BAE\u6765\u81EA\u7AEF\u70B9\u5217\u8868\u3002",inputHintKnowledge:"\u6A21\u6001\u5EFA\u8BAE\u6765\u81EA\u77E5\u8BC6\u5E93\u3002",inputHintHeuristic:"\u6A21\u6001\u5EFA\u8BAE\u4EC5\u6309\u547D\u540D\u63A8\u65AD\uFF08\u4F4E\u7F6E\u4FE1\u5EA6\uFF09\uFF0C\u8BF7\u6838\u5BF9\u3002",referenceTitle:"\u53C2\u8003\u5BB9\u91CF\uFF08\u4EC5\u63D0\u793A\uFF0C\u4E0D\u81EA\u52A8\u586B\u5145\uFF09",contextWindowLabel:"\u4E0A\u4E0B\u6587\u7A97\u53E3",maxTokensLabel:"\u6700\u5927\u8F93\u51FA",inputModality:"\u8F93\u5165\u6A21\u6001",modalityImage:"\u56FE\u7247\u8F93\u5165",modalityInherit:"\u672A\u58F0\u660E\u2014\u2014\u7EE7\u627F\u63D0\u4F9B\u65B9\u9ED8\u8BA4\uFF08\u901A\u5E38\u4EC5\u6587\u672C\uFF09\u3002",clearDeclaration:"\u6E05\u9664\u58F0\u660E",confidence_high:"\u9AD8",confidence_medium:"\u4E2D",confidence_low:"\u4F4E\uFF08\u5EFA\u8BAE\u6838\u5BF9\uFF09",noSuggestion:"\u6CA1\u6709\u9002\u7528\u4E8E\u8BE5\u6A21\u578B\u7684\u5EFA\u8BAE\u3002",conflict:"\u8BBE\u7F6E\u6587\u6863\u5728\u4FDD\u5B58\u671F\u95F4\u6301\u7EED\u53D8\u5316\uFF0C\u8BF7\u7A0D\u5019\u518D\u6B21\u5E94\u7528\u3002",writeError:"\u5199\u5165\u5931\u8D25\uFF1A{message}",renderFailed:"\u601D\u8003\u5F3A\u5EA6\u7F16\u8F91\u5668\u6E32\u67D3\u5931\u8D25",wirePlaceholder:"\u7EBF\u4E0A\u53D6\u503C",wireValue:"\u53D6\u503C",reasoningDisabled:"\u8BE5\u6A21\u578B\u58F0\u660E\u4E3A\u65E0 reasoning-effort \u63A7\u5236\uFF08false\uFF09\u2014\u2014\u8BF7\u52FF\u52FE\u9009\u601D\u8003\u6863\u3002",bareHint:"\u5168\u90E8\u53D6\u6D88\u5E76\u4FDD\u5B58\u5C06\u6E05\u9664\u58F0\u660E\u2014\u2014\u8BF7\u6C42\u4EE5\u88F8\u683C\u5F0F\u53D1\u51FA\uFF08\u8D70\u63D0\u4F9B\u65B9\u9ED8\u8BA4\uFF09\uFF0C\u90E8\u5206\u4E2D\u8F6C\u7AD9\u9700\u8981\u8FD9\u6837\u3002",defaultRiskDisabled:"\u65E0 off \u6863\uFF1ADefault \u4E0E\u63D0\u4F9B\u5546\u6D4B\u8BD5\u4F1A\u53D1\u9001 thinking: disabled\uFF0C\u8BE5\u6A21\u578B\u4F1A\u62A5\u9519\uFF08\u5982 1210\uFF09\u3002",defaultRiskQwen:"\u65E0 off \u6863\uFF1ADefault \u4F1A\u53D1\u9001 enable_thinking: false\u2014\u2014\u4EC5\u5728\u4E0A\u6E38\u8981\u6C42\u5F00\u542F\u601D\u8003\u65F6\u624D\u4F1A\u5931\u8D25\u3002",stagedHint:"\u5C1A\u672A\u4FDD\u5B58\u3002\u6682\u5B58\u7684\u914D\u7F6E\u5C06\u5728\u8BE5\u6A21\u578B\u4FDD\u5B58\u540E\u81EA\u52A8\u5E94\u7528\u3002",level_off:"off",level_minimal:"minimal",level_low:"low",level_medium:"medium",level_high:"high",level_xhigh:"xhigh",level_max:"max",sliderToggleTitle:"\u601D\u8003\u5F3A\u5EA6\u6ED1\u5757",sliderToggleDescription:"\u5728\u6A21\u578B\u83DC\u5355\u4E2D\u663E\u793A\u601D\u8003\u5F3A\u5EA6\u6ED1\u5757\u548C\u52A8\u6001\u8F90\u5C04\u7279\u6548\uFF0C\u6863\u4F4D\u968F\u5F53\u524D\u6A21\u578B\u81EA\u52A8\u9002\u914D",sliderToggleAria:"\u542F\u7528\u601D\u8003\u5F3A\u5EA6\u6ED1\u5757",settingOn:"\u542F\u7528",settingOff:"\u505C\u7528",sliderEffortAria:"\u601D\u8003\u5F3A\u5EA6",sliderNoLevels:"\u5F53\u524D\u6A21\u578B\u672A\u63D0\u4F9B\u601D\u8003\u5F3A\u5EA6\u6863\u4F4D",triggerFallback:"\u9009\u62E9\u6A21\u578B",effortDefault:"\u9ED8\u8BA4",sliderEffortTitle:"\u601D\u8003\u5F3A\u5EA6 \xB7 {name}",sliderEffortTitleError:"\u601D\u8003\u5F3A\u5EA6\u8BBE\u7F6E\u5931\u8D25\uFF1A{error}",sliderNoCurrent:"\u5F53\u524D\u65E0\u9009\u62E9\u4E2D\u7684\u6A21\u578B\u3002",compatTitle:"\u7AEF\u70B9\u517C\u5BB9",budgetFieldLabel:"\u601D\u8003\u9884\u7B97\u5B57\u6BB5",budgetFieldHint:"\u601D\u8003 token \u9884\u7B97\u7528\u54EA\u4E2A\u53C2\u6570\u53D1\u9001\uFF1A\u90E8\u5206 vLLM\uFF0F\u81EA\u5EFA\u7AEF\u70B9\u8BFB thinking_token_budget\uFF0C\u53E6\u4E00\u4E9B\u8BFB thinking_budget \u6216 thinking_budget_tokens\u3002\u672A\u8BBE\u7F6E\u8868\u793A\u4E09\u4E2A\u90FD\u4E0D\u53D1\u9001\u3002",budgetUnset:"\u672A\u8BBE\u7F6E",defaultEffortLabel:"\u9ED8\u8BA4\u601D\u8003\u5F3A\u5EA6",defaultEffortUnset:"\u8DDF\u968F\u8BB0\u5FC6",defaultEffortHint:"\u6BCF\u4E2A\u65B0\u4F1A\u8BDD\u6253\u5F00\u8BE5\u6A21\u578B\u65F6\u4F7F\u7528\u7684\u6863\u4F4D\u2014\u2014\u4F18\u5148\u4E8E\u8BB0\u4F4F\u7684\u4E0A\u6B21\u6863\u4F4D\u3002\u4F1A\u8BDD\u5185\u624B\u52A8\u9009\u62E9\u7684\u6863\u4F4D\u59CB\u7EC8\u6700\u9AD8\u3002\u7559\u7A7A\u5219\u8DDF\u968F\u8BB0\u5FC6\u94FE\u3002",clearDefaultEffort:"\u6E05\u9664\u9009\u62E9",priorityLabel:"vLLM \u4F18\u5148\u7EA7",priorityPlaceholder:"\u4F8B\u5982 0",priorityHint:"\u4EE5 --priority \u542F\u52A8\u7684\u7AEF\u70B9\u7684\u8C03\u5EA6\u4F18\u5148\u7EA7\uFF0C\u6570\u503C\u8D8A\u5C0F\u8D8A\u5148\u6267\u884C\u3002\u7559\u7A7A\u8868\u793A\u4E0D\u53D1\u9001\u3002",priorityInvalid:"\u4F18\u5148\u7EA7\u5FC5\u987B\u662F\u6574\u6570\u2014\u2014\u4FEE\u6B63\u524D\u4E0D\u4F1A\u4FDD\u5B58\u3002",maxOutputLabel:"\u8BF7\u6C42\u4E2D\u7684 max_output_tokens",maxOutputUnset:"\u672A\u8BBE\u7F6E\u2014\u2014\u8DDF\u968F\u534F\u8BAE\u9ED8\u8BA4",maxOutputOn:"\u53D1\u9001",maxOutputOff:"\u4E0D\u53D1\u9001",maxOutputHint:'\u4EC5\u5BF9 Responses \u534F\u8BAE\u7684\u7F51\u5173\u751F\u6548\uFF0C\u4E14\u53EA\u5728\u8BF7\u6C42\u5E26\u8F93\u51FA\u4E0A\u9650\u65F6\u624D\u8D77\u4F5C\u7528\uFF1A\u90E8\u5206\u7F51\u5173\u4F1A\u62D2\u6536\u8BE5\u53C2\u6570\uFF0C\u9009"\u4E0D\u53D1\u9001"\u53EF\u8BA9\u8BF7\u6C42\u5B8C\u5168\u4E0D\u643A\u5E26\u8F93\u51FA\u4E0A\u9650\u3002\u672A\u8BBE\u7F6E\u662F\u6700\u5B89\u5168\u7684\u9009\u62E9\u3002',aliasMigrated:"\u68C0\u6D4B\u5230\u65E7\u522B\u540D\u2014\u2014\u4FDD\u5B58\u65F6\u4F1A\u5199\u5165\u663E\u5F0F\u9884\u7B97\u5B57\u6BB5\u3002",modelSearchPlaceholder:"\u641C\u7D22\u6A21\u578B\u2026",modelSearchNoMatches:"\u672A\u627E\u5230\u5339\u914D\u6A21\u578B",modelSearchClear:"\u6E05\u7A7A\u641C\u7D22",modelSearchFailed:"\u6A21\u578B\u641C\u7D22\u6E32\u67D3\u5931\u8D25"};var ot="dsh-better-reasoning-effort.slider.enabled",ao=["dsh-reasoning-effort.enabled","@dsh-external/dsh-reasoning-effort.enabled"],We=lo();function lo(){try{let e=window.localStorage.getItem(ot),t=e===null?ao.map(n=>window.localStorage.getItem(n)).find(n=>n!==null):null;return(e??t??null)!=="false"}catch{return!0}}var yt=new Set;function Qt(){for(let e of[...yt])e()}function oe(){return We}function Zt(e){if(We!==e){We=e;try{window.localStorage.setItem(ot,String(e))}catch{}Qt()}}function en(e){We!==e&&(We=e,Qt())}function rt(e){return yt.add(e),()=>{yt.delete(e)}}var tn=`
/* The injector's mount wrapper. It \u2014 not the editor inside it \u2014 is the item
   placed into the official row disclosure's repeat(auto-fit, minmax(160px,1fr))
   grid (context window and max tokens take two cells), so the span belongs
   here: on the editor itself it would target the wrapper's block box and be
   ignored, squeezing the block into one cell. */
.bre-effort-slot {
  grid-column: 1 / -1;
}
.bre-effort-editor {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 8px 0 4px;
  padding: 10px 12px;
  border: 0.5px solid var(--dsw-alias-border-l2);
  border-radius: 8px;
  background: var(--dsw-alias-bg-layer-2);
  box-sizing: border-box;
}
.bre-effort-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}
.bre-effort-title {
  font-size: 12px;
  font-weight: 600;
  color: var(--dsw-alias-label-secondary);
}
.bre-link-button {
  background: none;
  border: none;
  padding: 2px 6px;
  font-size: 12px;
  color: var(--dsw-alias-link);
  cursor: pointer;
  border-radius: 4px;
}
.bre-link-button:hover { text-decoration: underline; }
.bre-link-button:disabled { opacity: 0.5; cursor: default; text-decoration: none; }
.bre-effort-grid {
  /* Exactly two equal columns mirroring the official capacity pair the editor
     sits under; an odd row count leaves the last cell in the left column,
     so the left side carries the extra level. */
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 4px 16px;
}
.bre-effort-row {
  display: grid;
  grid-template-columns: 20px 76px minmax(0, 1fr);
  align-items: center;
  gap: 6px;
  font-size: 12px;
}
.bre-effort-row input[type='checkbox'] {
  /* Bigger than the browser default (~13px): a tap/point target that does
     not require precision, in the theme accent when checked. */
  width: 18px;
  height: 18px;
  margin: 0;
  accent-color: var(--dsw-alias-brand-primary);
  cursor: pointer;
}
.bre-effort-level { color: var(--dsw-alias-label-tertiary); }
.bre-effort-wire {
  box-sizing: border-box;
  min-width: 0;
  height: 24px;
  padding: 0 6px;
  border: 0.5px solid var(--dsw-alias-border-l4);
  border-radius: 4px;
  background: var(--dsw-alias-bg-layer-1);
  color: var(--dsw-alias-label-primary);
  font: inherit;
  font-size: 12px;
}
.bre-effort-wire:focus {
  outline: none;
  border-color: var(--dsw-alias-brand-primary);
}
.bre-effort-empty { min-height: 24px; }
.bre-effort-actions {
  display: flex;
  gap: 8px;
  justify-content: flex-end;
}
.bre-secondary-button {
  height: 26px;
  padding: 0 12px;
  border-radius: 6px;
  font-size: 12px;
  cursor: pointer;
  border: 0.5px solid var(--dsw-alias-border-l3);
}
.bre-secondary-button:disabled { opacity: 0.5; cursor: default; }
.bre-secondary-button { background: transparent; color: inherit; }
.bre-effort-message { font-size: 12px; margin: 0; }
.bre-effort-message.bre-error { color: #c62828; }
.bre-effort-message.bre-info { color: var(--dsw-alias-link); }
.bre-effort-note { font-size: 11px; margin: 0; color: var(--dsw-alias-label-tertiary); }
/* ---- Input-modality section ---- */
.bre-modality {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.bre-modality-row {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
}
.bre-modality-row input[type='checkbox'] {
  width: 18px;
  height: 18px;
  margin: 0;
  accent-color: var(--dsw-alias-brand-primary);
  cursor: pointer;
}
.bre-modality-clear { margin-left: auto; }
.bre-modality-note { font-size: 11px; margin: 0; color: var(--dsw-alias-label-tertiary); }
/* ---- Endpoint-compatibility controls ----
   Same shape as the official capacity fields the editor sits under: a caption
   above the control, the control capped at the official enum width (a field
   width dropdown reads as a text field the user is expected to fill), and a
   hint line beneath. Tokens are the official ones \u2014 the plugin's own --dsh-*
   names are defined nowhere in this app, so their light-mode literals used to
   render in both themes. */
.bre-compat {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.bre-compat-row {
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
}
.bre-compat-field { display: flex; flex-direction: column; gap: 4px; min-width: 0; }
.bre-compat-label {
  font-size: 12px;
  line-height: 18px;
  color: var(--dsw-alias-label-tertiary);
}
.bre-compat-hint {
  font-size: 11px;
  line-height: 16px;
  color: var(--dsw-alias-label-tertiary);
}
.bre-select, .bre-text-input {
  box-sizing: border-box;
  width: 100%;
  max-width: 240px;
  height: 32px;
  padding: 0 10px;
  border: 0.5px solid var(--dsw-alias-border-l4);
  border-radius: 8px;
  background: var(--dsw-alias-bg-layer-1);
  color: var(--dsw-alias-label-primary);
  font: inherit;
  font-size: 14px;
  line-height: 22px;
}
.bre-text-input::placeholder { color: var(--dsw-alias-label-dimmed); }
.bre-select:focus, .bre-text-input:focus {
  outline: none;
  border-color: var(--dsw-alias-brand-primary);
}
.bre-select:disabled, .bre-text-input:disabled { opacity: 0.6; cursor: default; }
.bre-select {
  cursor: pointer;
  /* The OS arrow sits flush against the right edge; the official select swaps
     it for the shared 12px chevron inset on the same right pad. Data-URI SVGs
     cannot resolve CSS variables, so the stroke is the caption gray both
     themes share. */
  appearance: none;
  padding-right: 32px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12' fill='none'%3E%3Cpath d='M3 4.5L6 7.5L9 4.5' stroke='%2381858C' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 12px 12px;
}
.bre-error { color: var(--dsw-alias-state-error-primary); }
/* ---- Zoned suggestion display ---- */
.bre-suggestion {
  display: flex;
  flex-direction: column;
  gap: 3px;
}
.bre-reference {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 4px 14px;
  padding: 6px 8px;
  border: 1px dashed var(--dsw-alias-border-l3);
  border-radius: 6px;
  font-size: 11px;
  color: var(--dsw-alias-label-tertiary);
}
.bre-reference-title { font-weight: 600; }
.bre-reference-values { display: inline-flex; gap: 14px; }
/* ---- Composer model-menu slider (mounted inside the OFFICIAL menu) ----
   Visuals ported VERBATIM from HanaAyane's dsh-reasoning-effort (MIT) \u2014 the
   only deliberate difference is the chibi-runner "big fish" knob, which is
   dropped so the knob is always the white circle. Class names are re-
   prefixed bre- (the upstream's re- prefix would clash while both plugins
   are installed); every color/size/animation value stays upstream's. */
.bre-slider-body {
  /* upstream .re-model-menu content column (slider area + separator + row).
     The official menu shell carries padding: 4px (ModelSelect.module.css) while
     upstream's own menu has none \u2014 pull the replica flush to the box so the
     row hover spans full width and the bottom row sits at the radius. */
  overflow: hidden;
  margin: -4px;
}
/* The official menu is content-sized; while the replicated popover body is
   live, its box takes the upstream .re-model-menu width. The class is added
   by the mount and removed when the slider is switched off. */
.bre-model-menu-host {
  width: min(312px, calc(100vw - 32px));
  min-width: 0;
}
.bre-slider-advanced {
  /* upstream .re-advanced: the padded area that hosts the slider */
  padding: 14px;
}
.bre-effort {
  display: flex;
  align-items: center;
  width: 100%;
  min-width: 0;
  height: 32px;
  color: var(--dsw-alias-label-secondary);
  user-select: none;
  box-sizing: border-box;
}
.bre-effort-slider {
  --bre-progress: 50%;
  position: relative;
  width: 100%;
  height: 30px;
  flex: 1 1 auto;
  border-radius: 999px;
  isolation: isolate;
  transition: filter 180ms ease;
}
.bre-effort-track {
  position: absolute;
  inset: 0;
  overflow: hidden;
  border-radius: inherit;
  background: linear-gradient(100deg, #03040a 0%, #071126 22%, #101d4c 45%, #302262 70%, #5d35a0 100%);
  box-shadow:
    inset 0 1px 0 rgba(189, 199, 255, .15),
    inset 0 -1px 0 rgba(0, 0, 0, .55),
    0 3px 10px rgba(12, 17, 55, .34);
}
.bre-effort-track::after {
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 18% 45%, rgba(82, 130, 255, .12), transparent 24%),
    linear-gradient(90deg, rgba(0, 0, 0, .28), transparent 42%, rgba(168, 113, 255, .12));
  pointer-events: none;
}
.bre-effort-fx {
  position: absolute;
  z-index: 1;
  inset: 0;
  overflow: hidden;
  border-radius: inherit;
  pointer-events: none;
}
.bre-effort-canvas {
  position: absolute;
  z-index: 2;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 1;
  image-rendering: pixelated;
  mix-blend-mode: screen;
  transition: filter 140ms ease;
}
.bre-effort-flare {
  position: absolute;
  z-index: 3;
  top: 50%;
  left: var(--bre-progress);
  width: 78px;
  height: 46px;
  border-radius: 50%;
  background: radial-gradient(ellipse at 100% 50%, rgba(255,255,255,.96) 0 4%, rgba(188,189,255,.8) 11%, rgba(106,87,255,.5) 28%, rgba(105,31,255,.2) 49%, transparent 74%);
  filter: blur(2px) saturate(1.25);
  mix-blend-mode: screen;
  transform: translate(-100%, -50%);
  transition: left 70ms linear, filter 140ms ease;
  pointer-events: none;
}
.bre-effort-flare::before,
.bre-effort-flare::after {
  content: "";
  position: absolute;
  inset: 50% auto auto 100%;
  border-radius: 999px;
  transform: translate(-50%, -50%);
}
.bre-effort-flare::before {
  width: 52px;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(100,160,255,.42), #f1ecff, rgba(193,82,255,.65), transparent);
  box-shadow: 0 0 7px #9b7cff, 0 0 13px rgba(72,132,255,.64);
}
.bre-effort-flare::after {
  width: 1px;
  height: 20px;
  background: linear-gradient(180deg, transparent, rgba(196,190,255,.84), transparent);
  box-shadow: 0 0 7px #9c7cff;
}
.bre-effort-knob {
  position: absolute;
  z-index: 4;
  top: 50%;
  left: clamp(14px, var(--bre-progress), calc(100% - 14px));
  width: 28px;
  height: 28px;
  border: 1px solid rgba(255,255,255,.94);
  border-radius: 50%;
  background: #fff;
  box-shadow:
    0 0 0 2px rgba(92,105,255,.12),
    0 0 14px rgba(121,82,255,.48),
    0 2px 7px rgba(0,0,0,.3);
  transform: translate(-50%, -50%);
  transition: left 190ms cubic-bezier(.22,1,.36,1), transform 160ms ease, box-shadow 180ms ease;
  pointer-events: none;
}
.bre-effort-input {
  position: absolute;
  z-index: 5;
  inset: -5px 0;
  width: 100%;
  height: calc(100% + 10px);
  margin: 0;
  opacity: 0;
  cursor: grab;
  touch-action: none;
}
.bre-effort-input:active { cursor: grabbing; }
.bre-effort-input:focus-visible + .bre-effort-knob {
  outline: 2px solid var(--dsw-static-blue-400);
  outline-offset: 2px;
}
.bre-effort.is-dragging .bre-effort-canvas {
  filter: saturate(1.45) brightness(1.28) contrast(1.06);
}
.bre-effort.is-dragging .bre-effort-flare {
  filter: blur(1.5px) saturate(1.6) brightness(1.42);
  transition: none;
}
.bre-effort.is-dragging .bre-effort-knob {
  transform: translate(-50%, -50%) scale(1.07);
  transition: none;
  box-shadow:
    0 0 0 3px rgba(113,115,255,.25),
    0 0 20px rgba(74,145,255,.86),
    0 0 31px rgba(171,53,255,.66),
    0 3px 8px rgba(0,0,0,.32);
}
.bre-effort-slider[data-top] .bre-effort-track {
  animation: bre-effort-dark-breathe 1.9s ease-in-out infinite;
}
.bre-effort-slider[data-top] .bre-effort-knob {
  box-shadow:
    0 0 0 3px rgba(119,99,255,.18),
    0 0 22px rgba(135,78,255,.76),
    0 0 34px rgba(53,121,255,.34),
    0 3px 8px rgba(0,0,0,.3);
}
.bre-effort.is-error .bre-effort-slider {
  outline: 1px solid var(--dsw-alias-state-error-secondary);
  outline-offset: 2px;
}
.bre-effort.is-busy { opacity: .72; }
.bre-effort-sr {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
body:not([data-ds-dark-theme]) .bre-effort-slider {
  filter: none;
}
body:not([data-ds-dark-theme]) .bre-effort-track {
  background: var(--dsw-static-blue-75, #e5f0ff);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.9),
    inset 0 0 0 1px rgba(80,133,194,.14),
    0 3px 10px rgba(48,101,165,.13);
}
body:not([data-ds-dark-theme]) .bre-effort-track::before {
  content: "";
  position: absolute;
  z-index: 0;
  inset: 0 auto 0 0;
  width: var(--bre-progress);
  border-radius: inherit;
  background: linear-gradient(90deg, #fff 0%, #e2f0ff 20%, #a8d0fb 57%, #438fdf 100%);
  transition: width 190ms cubic-bezier(.22,1,.36,1);
}
body:not([data-ds-dark-theme]) .bre-effort-slider[data-top] .bre-effort-track::before {
  background: linear-gradient(90deg, #fff 0%, #d7eaff 18%, #75afea 54%, #0751ad 100%);
}
body:not([data-ds-dark-theme]) .bre-effort.is-dragging .bre-effort-track::before {
  transition: none;
}
body:not([data-ds-dark-theme]) .bre-effort-track::after {
  z-index: 1;
  background: linear-gradient(90deg, rgba(255,255,255,.48), transparent 34%, rgba(23,101,201,.07));
}
body:not([data-ds-dark-theme]) .bre-effort-canvas {
  opacity: .78;
  mix-blend-mode: multiply;
}
body:not([data-ds-dark-theme]) .bre-effort-flare {
  background: radial-gradient(ellipse at 100% 50%, rgba(255,255,255,.98) 0 5%, rgba(204,231,255,.88) 13%, rgba(91,162,241,.48) 31%, rgba(37,111,207,.16) 53%, transparent 75%);
  filter: blur(2px) saturate(1.12);
}
body:not([data-ds-dark-theme]) .bre-effort-flare::before {
  background: linear-gradient(90deg, transparent, rgba(116,177,244,.34), #fff, rgba(66,139,225,.58), transparent);
  box-shadow: 0 0 7px rgba(58,133,222,.5), 0 0 13px rgba(104,176,255,.38);
}
body:not([data-ds-dark-theme]) .bre-effort-flare::after {
  background: linear-gradient(180deg, transparent, rgba(255,255,255,.94), transparent);
  box-shadow: 0 0 7px rgba(64,137,224,.44);
}
body:not([data-ds-dark-theme]) .bre-effort-knob {
  border-color: rgba(126,160,197,.32);
  box-shadow:
    0 0 0 2px rgba(58,124,207,.09),
    0 0 13px rgba(48,118,207,.3),
    0 3px 8px rgba(39,77,119,.18);
}
body:not([data-ds-dark-theme]) .bre-effort-slider[data-top] .bre-effort-track {
  animation-name: bre-effort-light-breathe;
}
body:not([data-ds-dark-theme]) .bre-effort-slider[data-top] .bre-effort-knob,
body:not([data-ds-dark-theme]) .bre-effort.is-dragging .bre-effort-knob {
  box-shadow:
    0 0 0 3px rgba(36,105,192,.15),
    0 0 20px rgba(25,100,201,.45),
    0 3px 8px rgba(39,77,119,.18);
}
@keyframes bre-effort-dark-breathe {
  0%, 100% { box-shadow: inset 0 1px 0 rgba(196,204,255,.16), 0 3px 10px rgba(18,25,72,.4); }
  50% { box-shadow: inset 0 1px 0 rgba(220,214,255,.24), 0 0 21px rgba(111,66,255,.5); }
}
@keyframes bre-effort-light-breathe {
  0%, 100% { box-shadow: inset 0 1px 0 rgba(255,255,255,.9), inset 0 0 0 1px rgba(67,124,193,.16), 0 3px 10px rgba(48,101,165,.13); }
  50% { box-shadow: inset 0 1px 0 rgba(255,255,255,.96), inset 0 0 0 1px rgba(31,102,190,.22), 0 0 19px rgba(31,105,201,.24); }
}
.bre-slider-hint {
  /* upstream re-model-status */
  display: block;
  padding: 14px;
  color: var(--dsw-alias-label-tertiary, #9296a0);
  font-size: 12px;
  text-align: center;
}
/* upstream re-model-error: the directory/store error line under the row */
.bre-model-error {
  margin: 8px;
  padding: 8px 10px;
  border-radius: 8px;
  color: var(--dsw-alias-state-error-primary, #c83e4d);
  background: var(--dsw-alias-interactive-bg-hover-danger, rgba(220,55,70,.08));
  font-size: 11px;
}
/* upstream .re-menu-separator */
.bre-menu-separator {
  height: 1px;
  background: var(--dsw-alias-border-l3, rgba(121,126,145,.16));
}
/* upstream .re-model-row: name \xB7 current effort \u203A (click \u2192 official model list) */
.bre-model-row {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto auto;
  align-items: center;
  gap: 8px;
  min-height: 45px;
  padding: 0 14px;
  width: 100%;
  border: 0;
  color: inherit;
  background: transparent;
  font: inherit;
  text-align: left;
  cursor: pointer;
}
.bre-model-row:hover { background: var(--dsw-alias-interactive-bg-hover, rgba(120,125,140,.09)); }
.bre-model-row-name { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 13px; }
.bre-model-row-effort { color: var(--dsw-static-deepseek-500, #4d70ff); font-size: 12px; }
.bre-row-chevron { font-size: 20px; line-height: 1; opacity: .42; }
@media (prefers-reduced-motion: reduce) {
  .bre-effort-slider[data-top] .bre-effort-track { animation: none; }
  .bre-effort-knob,
  .bre-effort-flare,
  body:not([data-ds-dark-theme]) .bre-effort-track::before { transition: none; }
}
/* ---- Models-page slider toggle (boxed setting item) ----
   Item form ported VERBATIM from upstream .re-setting-row; the surrounding
   box is the requested container (border only, transparent background). */
.bre-slider-setting {
  margin-top: 12px;
  padding: 0 14px;
  border: 1px solid var(--dsw-alias-border-l3, rgba(121,126,145,.2));
  border-radius: 12px;
  background: transparent;
}
.bre-slider-setting-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 16px 0;
  /* Upstream .re-setting-row carries a list bottom border because the general
     settings list held TWO rows (the slider + the big-fish toggle). This box
     holds exactly one, so no divider: the box itself is the container. */
}
.bre-slider-setting-copy { min-width: 0; }
.bre-slider-setting-title {
  color: var(--dsw-alias-label-primary, #15171b);
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
}
.bre-slider-setting-description {
  margin-top: 3px;
  color: var(--dsw-alias-label-tertiary, #9296a0);
  font-size: 12px;
  line-height: 18px;
}
.bre-slider-setting-control { display: inline-flex; align-items: center; gap: 10px; flex: none; }
.bre-slider-setting-state { color: var(--dsw-alias-label-secondary, #686c75); font-size: 13px; }
.bre-slider-setting-switch {
  position: relative;
  width: 38px;
  height: 22px;
  padding: 0;
  border: 0;
  border-radius: 999px;
  background: var(--dsw-alias-state-idle-primary, #c7cbd3);
  cursor: pointer;
  transition: background 150ms ease;
}
.bre-slider-setting-switch:hover { filter: brightness(.97); }
.bre-slider-setting-switch:disabled { cursor: not-allowed; opacity: .45; }
.bre-slider-setting-switch:focus-visible {
  outline: 2px solid var(--dsw-static-blue-400, #5d83ff);
  outline-offset: 2px;
}
.bre-slider-setting-switch.is-on { background: var(--dsw-alias-state-business-primary, #4f73ff); }
.bre-slider-setting-switch-knob {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,0,0,.2);
  transition: transform 170ms cubic-bezier(.22,1,.36,1);
}
.bre-slider-setting-switch.is-on .bre-slider-setting-switch-knob { transform: translateX(16px); }

/* Model selection search box */
.bre-model-search-box {
  display: flex;
  flex-direction: column;
  padding: 6px 8px 4px;
  position: sticky;
  top: 0;
  z-index: 2;
  background: var(--dsw-specific-menu, var(--dsw-alias-bg-layer-1, #1e1f22));
}
.bre-model-search-box:has(.bre-search-empty),
.bre-model-search-box.has-empty {
  flex: 1 1 auto;
}
.bre-search-input-wrapper {
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  height: 32px;
  padding: 0 8px;
  box-sizing: border-box;
  border-radius: 8px;
  background: var(--dsw-alias-bg-layer-2, rgba(255, 255, 255, 0.06));
  border: 0.5px solid var(--dsw-alias-border-l4, rgba(255, 255, 255, 0.12));
  color: var(--dsw-alias-label-primary);
  transition: border-color 150ms ease, box-shadow 150ms ease;
}
.bre-search-input-wrapper:focus-within {
  border-color: var(--dsw-static-deepseek-500, #4d70ff);
  box-shadow: 0 0 0 2px rgba(77, 112, 255, 0.2);
}
.bre-search-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 16px;
  width: 16px;
  height: 16px;
  margin-right: 6px;
  color: var(--dsw-alias-label-tertiary, #81858c);
  pointer-events: none;
}
.bre-search-icon svg {
  width: 14px;
  height: 14px;
}
.bre-search-input {
  flex: 1 1 auto;
  min-width: 0;
  height: 100%;
  padding: 0;
  border: none;
  outline: none;
  background: transparent;
  color: inherit;
  font: inherit;
  font-size: 13px;
  line-height: 20px;
}
.bre-search-input::placeholder {
  color: var(--dsw-alias-label-tertiary, #81858c);
  opacity: 0.85;
}
.bre-search-clear {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 18px;
  width: 18px;
  height: 18px;
  margin-left: 4px;
  padding: 0;
  border: none;
  border-radius: 4px;
  background: transparent;
  color: var(--dsw-alias-label-tertiary, #81858c);
  cursor: pointer;
  transition: background 120ms ease, color 120ms ease;
}
.bre-search-clear:hover {
  background: var(--dsw-alias-interactive-bg-hover, rgba(255, 255, 255, 0.1));
  color: var(--dsw-alias-label-primary);
}
.bre-search-clear svg {
  width: 12px;
  height: 12px;
}
.bre-search-empty {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 1 auto;
  min-height: 180px;
  padding: 24px 16px;
  text-align: center;
  color: var(--dsw-alias-label-tertiary, #81858c);
  font-size: 13px;
  line-height: 20px;
  user-select: none;
}
`;var Ue=require("react"),En=require("react-dom");var v=require("react");var sn=["off","minimal","low","medium","high","xhigh","max"],fo=["text","image"];var uo=[{id:"deepseek-v4-vision",patterns:["deepseek-v4-flash-vision","deepseek-v4-vision"],efforts:{off:"none",low:"low",high:"high",max:"max"},defaultEffort:"high",compat:{thinkingFormat:"deepseek",supportsReasoningEffort:!0},input:["text","image"],contextWindow:1048576,maxTokens:384e3,note:"DeepSeek \u89C6\u89C9\u5B9E\u9A8C\u7248 id\uFF08deepseek-v4-flash-vision-exp\uFF09\u3002\u5B98\u65B9\u76EE\u5F55\u5DF2\u6807\u6CE8\u8BE5\u6A21\u578B\u9000\u5F79\uFF0C\u540D\u5B57\u4ECD\u88AB\u63A5\u53D7\u3001\u7531\u73B0\u884C deepseek-flash \u63D0\u4F9B\u670D\u52A1\u2014\u2014\u56FE\u7247\u8F93\u5165\u73B0\u5DF2\u7531 deepseek-flash \u539F\u751F\u63D0\u4F9B\u3002"},{id:"deepseek-v4",patterns:["deepseek-v4","deepseek-flash"],efforts:{off:"none",low:"low",high:"high",max:"max"},defaultEffort:"high",compat:{thinkingFormat:"deepseek",supportsReasoningEffort:!0},input:["text"],contextWindow:1048576,maxTokens:384e3,note:'DeepSeek \u5B98\u65B9\u679A\u4E3E Low / High / Max\uFF08\u9ED8\u8BA4 High\uFF1Bminimal\u3001medium\u3001xhigh \u517C\u5BB9\u6620\u5C04\uFF0Cultra\u2192max\uFF09\uFF0COff \u5373 thinking:"disabled"\uFF08Responses API \u4E0B off \u4EE5 reasoning.effort:"none" \u8868\u793A\uFF09\u3002\u5B98\u65B9\u6A21\u578B\u73B0\u4E3A deepseek-flash\uFF08= DeepSeek-V4.1-Flash\uFF0C2026-09-10 \u53D1\u5E03\uFF0C25 \u4E07\u5E76\u53D1\u3001\u539F\u751F\u56FE\u7247\u8F93\u5165\uFF09\u4E0E deepseek-v4-pro\uFF08= DeepSeek-V4-Pro-0813\uFF0C2026-09-14 \u8D77\u8BF7\u6C42\u5168\u91CF\u8DEF\u7531\u5230 V4.1-Flash\u3001\u4E0D\u652F\u6301\u56FE\u7247\uFF09\uFF1Bdeepseek-v4-flash \u4E0E deepseek-v4-flash-vision-exp \u662F\u5DF2\u9000\u5F79\u6A21\u578B\u7684\u517C\u5BB9\u522B\u540D\u3002\u5BB9\u91CF\uFF1A1,048,576 \u4E0A\u4E0B\u6587 / \u6700\u5927\u8F93\u51FA 384K\uFF08393,216\uFF1B\u9ED8\u8BA4\u975E\u601D\u8003 8K\u3001\u601D\u8003 64K\u3001effort=max \u65F6 128K\uFF09\u3002'},{id:"deepseek-v3",patterns:["deepseek-v3","deepseek-chat"],efforts:{off:"none",high:"high",max:"max"},compat:{thinkingFormat:"deepseek",supportsReasoningEffort:!0},input:["text"],contextWindow:163840,maxTokens:65536,note:"DeepSeek V3 \u6863\u4F4D\uFF1AOff / High / Max\u3002\u5B98\u65B9\u5DF2\u505C\u552E V3 \u4EE3\uFF08\u5B9A\u4EF7\u9875\u4EC5\u5269 V4 \u4E09\u578B\uFF09\uFF0C\u5BB9\u91CF\u53D6\u76EE\u5F55\u73B0\u5F79\u503C\u3002"},{id:"deepseek-r1",patterns:["deepseek-r1","deepseek-reasoner"],efforts:{high:"high"},defaultEffort:"high",compat:{thinkingFormat:"deepseek",supportsReasoningEffort:!0},input:["text"],contextWindow:163840,maxTokens:32768,note:"DeepSeek-R1 \u4E3A\u63A8\u7406\u6A21\u578B\uFF0C\u4EC5\u63D0\u4F9B High\u3002\u5B98\u65B9\u5DF2\u4E0B\u67B6 R1 \u4EE3\uFF0C\u5BB9\u91CF\u53D6\u76EE\u5F55 r1-0528 \u503C\u3002"},{id:"openai-gpt-5-2",patterns:["gpt-5.2"],efforts:{off:"none",low:"low",medium:"medium",high:"high",xhigh:"xhigh"},defaultEffort:"off",compat:{thinkingFormat:"openai",supportsReasoningEffort:!0},input:["text","image"],contextWindow:4e5,maxTokens:128e3,note:"GPT-5.2 \u6863\u4F4D\uFF1ANone / Low / Medium / High / XHigh\uFF08\u9ED8\u8BA4 None\uFF09\u3002\u5B98\u65B9\u53E6\u652F\u6301 PDF \u8F93\u5165\uFF08\u6838\u5FC3\u8BCD\u8868\u6682\u4E0D\u542B\uFF09\u3002gpt-5.2-pro \u5B98\u65B9\u9875\u672A\u5355\u5217\u6863\u4F4D\u884C\uFF0C\u6309\u672C\u6761\u76EE\u540C\u6863\u5904\u7406\uFF1Bgpt-5.2-codex \u89C1\u5355\u72EC\u6761\u76EE\u3002"},{id:"openai-gpt-5-2-codex",patterns:["gpt-5.2-codex"],efforts:{low:"low",medium:"medium",high:"high",xhigh:"xhigh"},defaultEffort:"medium",compat:{thinkingFormat:"openai",supportsReasoningEffort:!0},input:["text","image"],contextWindow:4e5,maxTokens:128e3,note:"GPT-5.2-Codex \u6863\u4F4D\uFF1ALow / Medium / High / XHigh\uFF08\u65E0 None \u6863\uFF0C\u52FF\u52FE Off\uFF09\uFF0C\u5E26\u56FE\u8F93\u5165\u3001400K\u3002"},{id:"openai-gpt-5-6",patterns:["gpt-5.6"],efforts:{off:"none",low:"low",medium:"medium",high:"high",xhigh:"xhigh",max:"max"},defaultEffort:"medium",compat:{thinkingFormat:"openai",supportsReasoningEffort:!0},input:["text","image"],contextWindow:105e4,maxTokens:128e3,note:"GPT-5.6\uFF08\u522B\u540D\u5373 sol\uFF09\u6863\u4F4D\uFF1ANone / Low / Medium(\u9ED8\u8BA4) / High / XHigh / Max\uFF1Bsol/luna/terra \u540C\u6863\uFF0C\u5E26\u56FE\u8F93\u5165\u3002"},{id:"openai-gpt-5-5",patterns:["gpt-5.5"],efforts:{off:"none",low:"low",medium:"medium",high:"high",xhigh:"xhigh"},defaultEffort:"medium",compat:{thinkingFormat:"openai",supportsReasoningEffort:!0},input:["text","image"],contextWindow:105e4,maxTokens:128e3,note:"GPT-5.5 \u6863\u4F4D\uFF1ANone / Low / Medium(\u9ED8\u8BA4) / High / XHigh\uFF0C\u5E26\u56FE\u8F93\u5165\u3002pro \u53D8\u4F53\u4EC5 Medium / High(\u9ED8\u8BA4) / XHigh \u4E14\u4EC5 Responses API\u3002"},{id:"openai-gpt-5-4",patterns:["gpt-5.4"],efforts:{off:"none",low:"low",medium:"medium",high:"high",xhigh:"xhigh"},defaultEffort:"off",compat:{thinkingFormat:"openai",supportsReasoningEffort:!0},input:["text","image"],contextWindow:105e4,maxTokens:128e3,note:"GPT-5.4 \u6863\u4F4D\uFF1ANone(\u9ED8\u8BA4) / Low / Medium / High / XHigh\uFF0C\u5E26\u56FE\u8F93\u5165\u3002pro \u53D8\u4F53\u4EC5 Medium/High/XHigh\uFF1Bmini/nano \u4E3A 400K \u4E0A\u4E0B\u6587\u3002"},{id:"openai-gpt-5-3",patterns:["gpt-5.3"],efforts:{low:"low",medium:"medium",high:"high",xhigh:"xhigh"},defaultEffort:"medium",compat:{thinkingFormat:"openai",supportsReasoningEffort:!0},input:["text","image"],contextWindow:4e5,maxTokens:128e3,note:"GPT-5.3-Codex \u6863\u4F4D\uFF1ALow / Medium / High / XHigh\uFF08\u65E0 None \u6863\uFF09\uFF0C\u5E26\u56FE\u8F93\u5165\u3001400K\uFF1Bgpt-5.3-chat \u4E3A\u975E\u63A8\u7406\u804A\u5929\u6A21\u578B\uFF08\u89C1 chat \u6761\u76EE\uFF09\u3002"},{id:"openai-gpt-5-1",patterns:["gpt-5.1"],efforts:{off:"none",low:"low",medium:"medium",high:"high"},defaultEffort:"off",compat:{thinkingFormat:"openai",supportsReasoningEffort:!0},input:["text","image"],contextWindow:4e5,maxTokens:128e3,note:"GPT-5.1 \u6863\u4F4D\uFF1ANone / Low / Medium / High\uFF08\u9ED8\u8BA4 None\uFF09\u3002"},{id:"openai-gpt-5-1-codex",patterns:["gpt-5.1-codex"],efforts:{low:"low",medium:"medium",high:"high"},compat:{thinkingFormat:"openai",supportsReasoningEffort:!0},input:["text","image"],contextWindow:4e5,maxTokens:128e3,note:"GPT-5.1-Codex \u7CFB\u5217\uFF1A\u5B98\u65B9\u6A21\u578B\u9875\u672A\u5355\u5217 effort \u503C\u57DF\uFF0C\u6309\u540C\u4EE3\u4FDD\u5B88\u6863 Low / Medium / High\uFF08\u65E0 None\uFF1Bxhigh \u672A\u8BC1\u5B9E\uFF09\u3002\u5982\u7AEF\u70B9\u652F\u6301 xhigh/none \u53EF\u624B\u8C03\u3002"},{id:"openai-gpt-5",patterns:["gpt-5"],efforts:{minimal:"minimal",low:"low",medium:"medium",high:"high"},defaultEffort:"medium",compat:{thinkingFormat:"openai",supportsReasoningEffort:!0},input:["text","image"],contextWindow:4e5,maxTokens:128e3,note:"GPT-5 \u521D\u4EE3\u6863\u4F4D\uFF1AMinimal / Low / Medium / High\uFF0C\u65E0\u5173\u95ED\u6863\u3002"},{id:"openai-chat",patterns:["gpt-5.1-chat-latest","gpt-5.2-chat-latest","gpt-5.3-chat-latest","gpt-5-chat-latest","gpt-chat-latest","gpt-5-chat","gpt-5.1-chat","gpt-5.2-chat","gpt-5.3-chat"],efforts:!1,input:["text","image"],contextWindow:128e3,maxTokens:16384,note:"-chat \u7CFB\u5217\uFF08\u5B98\u65B9 id \u4E3A gpt-5.x-chat-latest\uFF09\u4E3A\u975E\u63A8\u7406\u804A\u5929\u6A21\u578B\uFF0C\u4E0D\u652F\u6301 effort \u53C2\u6570\uFF08\u52FF\u52FE\u601D\u8003\u6863\uFF09\uFF1B\u5B98\u65B9\u652F\u6301\u56FE\u7247\u8F93\u5165\uFF0C128K / 16,384 \u8F93\u51FA\u3002gpt-5-chat-latest \u5DF2\u4E8E 2026-07-23 \u4E0B\u67B6\u3001gpt-chat-latest \u5DF2\u65E0\u5B98\u65B9\u9875\u9762\uFF08\u4FDD\u7559\u6A21\u5F0F\u4F9B\u7F51\u5173\uFF09\u3002"},{id:"openai-o",patterns:["o1","o3","o4"],efforts:{low:"low",medium:"medium",high:"high"},defaultEffort:"medium",compat:{thinkingFormat:"openai",supportsReasoningEffort:!0},input:["text","image"],contextWindow:2e5,maxTokens:1e5,note:"OpenAI o \u7CFB\u6863\u4F4D\uFF1ALow / Medium / High\u3002\u5B98\u65B9\u5DF2\u4E8E 2026-06 \u516C\u544A\u9000\u5F79\uFF08o1/o1-pro/o3-mini/o4-mini 2026-10-23 \u79FB\u9664\u3001o3/o3-pro 2026-12-11\uFF09\uFF0C\u7F51\u5173\u6B8B\u7559\u4ECD\u53EF\u547D\u4E2D\uFF1B\u591A\u6570 o \u7CFB\u7AEF\u70B9\u6536\u56FE\uFF08o3-mini \u4F8B\u5916\uFF09\u3002"},{id:"openai-gpt-oss",patterns:["gpt-oss"],efforts:{low:"low",medium:"medium",high:"high"},defaultEffort:"low",compat:{thinkingFormat:"openai",supportsReasoningEffort:!0},input:["text"],contextWindow:131072,maxTokens:131072,note:"GPT-OSS \u5F00\u6E90\u6743\u91CD\uFF08Ollama/vLLM \u5E38\u89C1\uFF09\uFF1Areasoning effort Low / Medium / High\uFF0C\u7EAF\u6587\u672C\uFF0C131K \u4E0A\u4E0B\u6587 / 131K \u8F93\u51FA\u30022026-09 \u590D\u6838\uFF1A\u5B98\u65B9\u6A21\u578B\u9875\u73B0\u5728\u5199 Chat Completions = Not supported\u3001\u65E0\u56FE\u7247\u8F93\u5165\uFF08\u9ED8\u8BA4 Low \u6765\u81EA\u5B98\u65B9 CLI\uFF0C\u4E0D\u662F API \u9875\uFF09\uFF0C\u56E0\u6B64\u8FD9\u91CC\u4E0D\u518D\u58F0\u660E Off\u3002"},{id:"openai-gpt-6-astra",patterns:["gpt-6-astra","gpt-6"],efforts:{low:"low",medium:"medium",high:"high",xhigh:"xhigh",max:"max"},compat:{thinkingFormat:"openai",supportsReasoningEffort:!0},input:["text","image"],contextWindow:105e4,maxTokens:128e3,note:"GPT-6 Astra \u6863\u4F4D\uFF1ALow / Medium / High / XHigh / Max\u2014\u2014**\u6CA1\u6709 None \u6863**\uFF08\u5B98\u65B9\u539F\u6587\uFF1A\u8BBE\u4E3A none \u8FD4\u56DE HTTP 400\uFF09\uFF0C\u56E0\u6B64\u672C\u6761\u76EE\u4E0D\u58F0\u660E Off\u3002\u5E26\u56FE\u8F93\u5165\uFF0C1,050,000 \u4E0A\u4E0B\u6587 / 128,000 \u8F93\u51FA\uFF1BAI \u5B98\u65B9\u9ED8\u8BA4\u6863\u4F4D\u672A\u516C\u5E03\uFF0C\u6545\u4E0D\u586B\u3002\u5DE5\u5177\u8C03\u7528\u9700\u8D70 Responses API\u3002"},{id:"openai-gpt-5-6-cyber",patterns:["gpt-5.6-cyber"],efforts:{low:"low",medium:"medium",high:"high",xhigh:"xhigh"},compat:{thinkingFormat:"openai",supportsReasoningEffort:!0},input:["text","image"],contextWindow:4e5,maxTokens:128e3,note:"GPT-5.6-Cyber\uFF1A\u5B98\u65B9\u6A21\u578B\u9875\u672A\u5355\u5217 effort \u503C\u57DF\uFF08\u4E0D\u7B49\u4E8E\u4E0D\u652F\u6301\uFF09\uFF0C\u6545\u6309\u540C\u4EE3\u4FDD\u5B88\u6863 Low / Medium / High / XHigh\uFF1B\u8BE5\u578B\u53F7\u4EC5 Responses API\uFF0C\u5E26\u56FE\u8F93\u5165\u3001400K \u4E0A\u4E0B\u6587\u3002\u5B98\u65B9\u652F\u6301\u7684\u5176\u4ED6\u6863\u4F4D\u53EF\u624B\u8C03\u540E\u5E94\u7528\u3002"},{id:"openai-gpt-4o",patterns:["gpt-4o"],efforts:!1,input:["text","image"],contextWindow:128e3,maxTokens:16384,note:"GPT-4o \u4EE3\u9645\uFF1A\u975E\u63A8\u7406\u6A21\u578B\uFF0C\u4E0D\u652F\u6301 effort \u53C2\u6570\uFF08\u52FF\u52FE\u601D\u8003\u6863\uFF09\uFF1B\u56FE\u7247\u8F93\u5165\u5168\u7CFB\u6807\u914D\uFF0C128K / 16,384 \u8F93\u51FA\u3002"},{id:"openai-gpt-4-1",patterns:["gpt-4.1"],efforts:!1,input:["text","image"],contextWindow:1047576,maxTokens:32768,note:"GPT-4.1 \u5168\u7CFB\uFF08\u542B mini/nano\uFF09\uFF1A\u975E\u63A8\u7406\u6A21\u578B\uFF0C\u4E0D\u652F\u6301 effort \u53C2\u6570\uFF1B\u5B98\u65B9 1,047,576 \u4E0A\u4E0B\u6587 / 32,768 \u8F93\u51FA\uFF0C\u5168\u7CFB\u5E26\u56FE\u8F93\u5165\u3002"},{id:"openai-gpt-4-turbo-preview",patterns:["gpt-4-turbo-preview"],efforts:!1,input:["text"],contextWindow:128e3,maxTokens:4096,note:"GPT-4 Turbo Preview\uFF1A\u975E\u63A8\u7406\u6A21\u578B\uFF0C\u7EAF\u6587\u672C\u8F93\u5165\uFF08\u6B63\u5F0F turbo \u5FEB\u7167\u652F\u6301\u56FE\u7247\uFF0C\u89C1\u4E0B\u6761\uFF09\uFF0C128K\u3002"},{id:"openai-gpt-4-turbo",patterns:["gpt-4-turbo"],efforts:!1,input:["text","image"],contextWindow:128e3,maxTokens:4096,note:"GPT-4 Turbo\uFF1A\u975E\u63A8\u7406\u6A21\u578B\uFF0C\u5B98\u65B9\u652F\u6301\u56FE\u7247\u8F93\u5165\uFF0C128K / 4,096 \u8F93\u51FA\u3002"},{id:"openai-gpt",patterns:["gpt-4","gpt-3.5"],efforts:!1,input:["text"],note:"GPT-4/3.5 \u4EE3\u9645\uFF1A\u975E\u63A8\u7406\u6A21\u578B\uFF0C\u4E0D\u652F\u6301 effort \u53C2\u6570\uFF08\u52FF\u52FE\u601D\u8003\u6863\uFF09\u3002gpt-4-turbo/4.1 \u8D77\u652F\u6301\u56FE\u7247\uFF0C\u89C1\u5355\u72EC\u6761\u76EE\uFF1B\u65B0\u4EE3\u8BF7\u7528 GPT-5 \u7CFB\uFF08\u89C1 openai-chat/gpt-5.x \u6761\u76EE\uFF09\u3002"},{id:"anthropic-claude-5",patterns:["claude-fable-5","claude-mythos-5","claude-opus-5","claude-sonnet-5"],efforts:{low:"low",medium:"medium",high:"high",xhigh:"xhigh",max:"max"},defaultEffort:"high",compat:{supportsReasoningEffort:!0},anthropicAdaptive:!0,input:["text","image"],contextWindow:1e6,maxTokens:128e3,note:"Claude 5 \u4EE3\uFF08Fable 5 / Mythos 5 / Opus 5 / Sonnet 5\uFF09\u6863\u4F4D\uFF1ALow / Medium / High(\u9ED8\u8BA4) / XHigh / Max\uFF1BFable 5.1 \u4E0E Mythos 5.1 \u89C1\u5355\u72EC\u6761\u76EE\uFF0CMythos Preview \u4EC5\u81F3 Max\u30021M \u4E0A\u4E0B\u6587 / 128K \u8F93\u51FA\uFF08Batch 300K\uFF09\u3002\u5B98\u65B9\u652F\u6301 PDF \u8F93\u5165\u3002\u6CE8\u610F\uFF1AAnthropic \u5B98\u65B9 OpenAI \u517C\u5BB9\u5C42\u4F1A\u5FFD\u7565 effort \u53C2\u6570\uFF0C\u58F0\u660E\u5728\u7B2C\u4E09\u65B9\u7F51\u5173\u6620\u5C04\u65F6\u751F\u6548\u3002"},{id:"anthropic-claude-5-1",patterns:["claude-fable-5-1","claude-mythos-5-1"],efforts:{low:"low",medium:"medium",high:"high",xhigh:"xhigh",max:"max"},defaultEffort:"high",compat:{supportsReasoningEffort:!0},anthropicAdaptive:!0,input:["text","image"],contextWindow:1e6,maxTokens:128e3,note:"Claude Fable 5.1 / Mythos 5.1\uFF1A\u5B98\u65B9\u6863\u4F4D Low / Medium / High(\u9ED8\u8BA4) / XHigh / Max\uFF0C\u81EA\u9002\u5E94\u601D\u8003\u5E38\u5F00\uFF08\u4E0D\u63A5\u53D7 enabled/disabled\uFF09\u30021M \u4E0A\u4E0B\u6587 / 128K \u8F93\u51FA\uFF1B\u8FD9\u4E24\u578B\u4E5F\u662F\u5B98\u65B9\u552F\u4E00\u5141\u8BB8\u4F1A\u8BDD\u4E2D\u9014\u6539\u6863\u7684\uFF08\u9700 beta header\uFF0C\u672C\u63D2\u4EF6\u4E0D\u6D89\u53CA\uFF09\u3002"},{id:"anthropic-claude-mythos-preview",patterns:["claude-mythos-preview"],efforts:{low:"low",medium:"medium",high:"high",max:"max"},defaultEffort:"high",compat:{supportsReasoningEffort:!0},anthropicAdaptive:!0,input:["text","image"],contextWindow:1e6,maxTokens:128e3,note:"Claude Mythos Preview\uFF1A\u5B98\u65B9\u6863\u4F4D Low / Medium / High / Max\uFF08\u65E0 XHigh\uFF09\uFF0C1M \u4E0A\u4E0B\u6587\u3002"},{id:"anthropic-claude-opus-4-high",patterns:["claude-opus-4-8","claude-opus-4-7"],efforts:{low:"low",medium:"medium",high:"high",xhigh:"xhigh",max:"max"},defaultEffort:"high",compat:{supportsReasoningEffort:!0},anthropicAdaptive:!0,input:["text","image"],contextWindow:1e6,maxTokens:128e3,note:"Claude Opus 4.7/4.8 \u6863\u4F4D\uFF1ALow / Medium / High(\u9ED8\u8BA4) / XHigh / Max\uFF1Bxhigh \u4E3A\u5B98\u65B9\u63A8\u8350\u7684\u7F16\u7801\u8D77\u6B65\u6863\u30021M \u4E0A\u4E0B\u6587\u3002"},{id:"anthropic-claude-4-6",patterns:["claude-opus-4-6","claude-sonnet-4-6"],efforts:{low:"low",medium:"medium",high:"high",max:"max"},defaultEffort:"high",compat:{supportsReasoningEffort:!0},anthropicAdaptive:!0,input:["text","image"],contextWindow:1e6,maxTokens:128e3,note:"Claude 4.6 \u4EE3\u6863\u4F4D\uFF1ALow / Medium / High / Max\uFF08\u65E0 XHigh\u2014\u2014\u5B98\u65B9\u660E\u8A00\u300C\u652F\u6301 max \u7684\u90E8\u5206\u578B\u53F7\u4E0D\u652F\u6301 xhigh\u300D\uFF09\u30021M \u4E0A\u4E0B\u6587\u3002"},{id:"anthropic-claude-opus-4-5",patterns:["claude-opus-4-5"],efforts:{low:"low",medium:"medium",high:"high"},defaultEffort:"high",compat:{supportsReasoningEffort:!0},input:["text","image"],contextWindow:2e5,maxTokens:64e3,note:"Claude Opus 4.5\uFF1A\u5B98\u65B9 effort \u652F\u6301\u5217\u8868\uFF0820251101 \u5FEB\u7167\uFF09\uFF0C\u6863\u4F4D Low / Medium / High\uFF08\u65E0 XHigh/Max\uFF09\uFF0C\u53EF\u4E0E budget_tokens \u5E76\u7528\uFF1B200K / 64K\u3002"},{id:"anthropic-claude",patterns:["claude"],efforts:!1,input:["text","image"],contextWindow:2e5,maxTokens:64e3,note:"Claude 3.x \u4E0E Sonnet 4.5 / Haiku 4.5\uFF1A\u5B98\u65B9 effort \u53C2\u6570\u4E0D\u652F\u6301\uFF08\u4EC5 Fable/Mythos 5\u3001Opus 5/4.6-4.8\u3001Sonnet 5/4.6\u3001Opus 4.5 \u652F\u6301\uFF09\uFF0C\u601D\u8003\u7531 thinking.type \u63A7\u5236\u2014\u2014\u52FF\u52FE\u601D\u8003\u6863\u3002\u53C2\u8003\u5BB9\u91CF 200K / 64K\uFF08Haiku 3.5 \u4E3A\u7EAF\u6587\u672C\uFF0C\u6309\u9700\u53D6\u6D88\u56FE\u7247\uFF09\u3002"},{id:"google-gemini",patterns:["gemini"],efforts:{low:"low",medium:"medium",high:"high"},compat:{thinkingFormat:"openai",supportsReasoningEffort:!0},input:["text","image"],contextWindow:1048576,maxTokens:65536,note:"Gemini \u901A\u7528\u5B89\u5168\u6863\uFF1ALow / Medium / High\uFF08\u5B98\u65B9 OpenAI \u517C\u5BB9\u6620\u5C04\u8868\u53E6\u6536 minimal\uFF1A2.5 \u7CFB\u6620\u5C04\u4E3A 1,024 \u9884\u7B97\u30013.1 Flash-Lite/3 Flash \u539F\u751F minimal\u30013.1 Pro \u843D low\uFF09\u3002none \u4EC5\u80FD\u5173 2.5 \u975E Pro\uFF1B2.5 Pro \u4E0E 3 \u4EE3\u4E0D\u53EF\u5173\uFF1B\u5404\u578B\u9ED8\u8BA4\u4E0D\u4E00\uFF08flash-lite \u9ED8\u8BA4\u5173\uFF09\u3002\u5B98\u65B9\u53E6\u6536\u97F3\u9891/\u89C6\u9891/PDF\u3002"},{id:"xai-grok-high",patterns:["grok-4.6"],efforts:{low:"low",medium:"medium",high:"high",xhigh:"xhigh"},defaultEffort:"high",compat:{thinkingFormat:"openai",supportsReasoningEffort:!0},input:["text","image"],contextWindow:5e5,note:"Grok 4.6 \u6863\u4F4D\uFF1ALow / Medium / High(\u9ED8\u8BA4) / XHigh\uFF0C\u601D\u8003\u4E0D\u53EF\u5173\u95ED\uFF1B\u5E26\u56FE\u8F93\u5165\u3001500K \u4E0A\u4E0B\u6587\u3002grok-4.7 \u4E0D\u5B58\u5728\uFF08\u5B98\u65B9 404 \u5DF2\u6838\uFF09\uFF0C\u5DF2\u9664\u540D\u3002"},{id:"xai-grok-4-5",patterns:["grok-4.5"],efforts:{low:"low",medium:"medium",high:"high"},defaultEffort:"high",compat:{thinkingFormat:"openai",supportsReasoningEffort:!0},input:["text","image"],contextWindow:5e5,note:"Grok 4.5 \u6863\u4F4D\uFF1ALow / Medium / High(\u9ED8\u8BA4)\uFF0C\u601D\u8003\u4E0D\u53EF\u5173\u95ED\uFF1B\u5E26\u56FE\u8F93\u5165\u3002\u4F20\u5165 xhigh \u4F1A\u88AB\u5B98\u65B9\u9759\u9ED8\u6309 High \u5904\u7406\u3002"},{id:"xai-grok-4-3",patterns:["grok-4.3"],efforts:{off:"none",low:"low",medium:"medium",high:"high",xhigh:"xhigh"},defaultEffort:"low",compat:{thinkingFormat:"openai",supportsReasoningEffort:!0},input:["text","image"],contextWindow:1e6,note:"Grok 4.3\uFF1A\u5B98\u65B9\u56DB\u7EA7 reasoning effort\uFF08None / Low / Medium / High\uFF09\uFF0C1M \u4E0A\u4E0B\u6587\u3001\u5E26\u56FE\u8F93\u5165\uFF1Bgrok-4-fast \u7B49\u65E7 slug 2026-05-15 \u8D77\u81EA\u52A8\u91CD\u5B9A\u5411\u5230\u672C\u578B\u53F7\u3002"},{id:"xai-grok",patterns:["grok"],efforts:{low:"low",medium:"medium",high:"high"},compat:{thinkingFormat:"openai",supportsReasoningEffort:!0},input:["text"],note:"Grok \u901A\u7528\u6863\u4F4D\uFF1ALow / Medium / High\u3002\u521D\u4EE3 grok-4\u3001grok-4.20 \u4E0E grok-build-0.1 \u4E0D\u63A5\u53D7\u8BE5\u53C2\u6570\uFF08grok-4 \u7CFB\u4E0E grok-3 \u5DF2\u4E8E 2026-05-15 \u9000\u5F79\u5E76\u91CD\u5B9A\u5411\u81F3 4.3\uFF09\uFF1Bgrok-4.20-multi-agent \u7684\u56DB\u6863\u63A7\u5236\u7684\u662F agent \u6570\u91CF\u800C\u975E\u601D\u8003\u6DF1\u5EA6\u3002\u65B0\u65E7\u4EE3\u9645\u8BF7\u4F18\u5148\u9009 4.5/4.6/4.3\uFF1B\u591A\u6A21\u6001\u53D8\u4F53\u6309\u9700\u52FE\u9009\u56FE\u7247\u3002"},{id:"mistral-magistral",patterns:["magistral"],efforts:!1,input:["text"],contextWindow:32768,maxTokens:32768,note:"Magistral \u539F\u751F\u601D\u8003\u7EBF\uFF08\u65E0 effort \u53C2\u6570\uFF0C\u4E3A prompt_mode \u8BED\u4E49\uFF09\uFF0C\u5B98\u65B9\u5DF2\u4E8E 2026-07-28 \u58F0\u660E\u5F03\u7528\u3001\u9010\u6B65\u64A4\u51FA\uFF1B\u73B0\u5F79\u63A8\u7406\u8D70 mistral-small-2603 / mistral-medium-3-5 \u7684 reasoning_effort\uFF08\u89C1\u4E0B\u6761\uFF09\u3002"},{id:"mistral-medium-3",patterns:["mistral-medium-3.5","mistral-small-latest","mistral-small-2603"],efforts:{off:"none",high:"high"},defaultEffort:"off",compat:{thinkingFormat:"openai",supportsReasoningEffort:!0},input:["text","image"],note:"Mistral \u73B0\u5F79\u63A8\u7406\u6863\uFF1ANone / High\u2014\u2014\u5B98\u65B9 reasoning_effort \u679A\u4E3E\uFF08mistral-common \u534F\u8BAE\u5E93\uFF09\u5373 none/high\uFF1Bmistral-small-2603\uFF08Small 4\uFF09\u4E0E mistral-medium-3-5 \u7ECF\u5B83\u63A7\u5236\uFF0CMedium 3.5 \u5E26\u89C6\u89C9\u3002\u5BB9\u91CF\u672A\u5728\u5B98\u65B9\u76EE\u5F55\u9875\u5355\u5217\uFF0C\u4E0D\u63D0\u4F9B\u3002"},{id:"qwen-vision",patterns:["qwen-vl","qwen2-vl","qwen2-5-vl","qwen3-vl","qvq"],efforts:{off:null,high:"high"},defaultEffort:"high",compat:{thinkingFormat:"qwen"},input:["text","image"],contextWindow:131072,maxTokens:8192,note:"\u901A\u4E49\u89C6\u89C9\u7EBF\uFF08Qwen-VL/QvQ\uFF09\uFF1Aenable_thinking \u5F00\u5173\uFF08\u5F00=High\uFF09\uFF0C\u6536\u56FE\u3002qwen3-vl \u5BB9\u91CF\u66F4\u5927\uFF0C\u6309\u9700\u4E0A\u8C03\u3002"},{id:"qwen-3-8",patterns:["qwen3.8"],efforts:{off:null,low:"low",medium:"medium",xhigh:"xhigh"},defaultEffort:"xhigh",compat:{thinkingFormat:"qwen",supportsReasoningEffort:!0},input:["text","image"],contextWindow:1e6,note:"Qwen 3.8 \u7CFB\uFF1A\u5B98\u65B9 reasoning_effort \u6863\u4F4D XHigh(\u9ED8\u8BA4) / Medium / Low\uFF0Cthinking \u9ED8\u8BA4\u5F00\u3001\u53EF\u6309\u8BF7\u6C42\u5173\u95ED\uFF1B\u539F\u751F\u591A\u6A21\u6001\uFF08qwen3.8-max \u56FE\u50CF/\u89C6\u9891\u7406\u89E3\uFF0C\u89C6\u9891\u672A\u5165\u6838\u5FC3\u8BCD\u8868\uFF09\u30021M \u6863\u4E0A\u4E0B\u6587\u300227B \u4E0E Flash-Next \u5F00\u6E90\u6B3E\u89C1\u5355\u72EC\u6761\u76EE\u3002"},{id:"qwen-3-8-27b",patterns:["qwen3.8-27b"],efforts:{off:null,low:"low",medium:"medium",xhigh:"xhigh"},defaultEffort:"xhigh",compat:{thinkingFormat:"qwen",supportsReasoningEffort:!0},input:["text","image"],contextWindow:262144,note:"Qwen3.8-27B\uFF08dense\uFF0C2026-08-14 \u5F00\u6E90\uFF09\uFF1A\u5B98\u65B9 reasoning_effort \u6863\u4F4D XHigh(\u9ED8\u8BA4) / Medium / Low\uFF0Cthinking \u9ED8\u8BA4\u5F00\u3001\u53EF\u6309\u8BF7\u6C42\u5173\uFF1B\u539F\u751F\u56FE\u50CF+\u89C6\u9891\u7406\u89E3\uFF08\u89C6\u9891\u672A\u5165\u6838\u5FC3\u8BCD\u8868\uFF09\u3002262,144 \u539F\u751F\u4E0A\u4E0B\u6587\u3001\u5B98\u65B9\u58F0\u660E\u53EF\u6269\u81F3 1M\u3002\u6765\u6E90\uFF1AHF Qwen/Qwen3.8-27B \u6A21\u578B\u5361\u3002"},{id:"qwen-3-8-flash-next",patterns:["qwen3.8-flash-next"],efforts:{off:null,low:"low",medium:"medium",xhigh:"xhigh"},defaultEffort:"xhigh",compat:{thinkingFormat:"qwen",supportsReasoningEffort:!0},input:["text","image"],contextWindow:262144,note:"Qwen3.8-Flash-Next\uFF08125B-A6B \u5B9E\u9A8C\u67B6\u6784\uFF0CQwen4 \u524D\u8EAB\uFF09\uFF1A\u5B98\u65B9 reasoning_effort \u6863\u4F4D XHigh(\u9ED8\u8BA4) / Medium / Low + enable_thinking \u5F00\u5173\uFF1B\u539F\u751F\u89C6\u89C9\uFF08Vision Encoder\uFF09\u3002262,144 \u539F\u751F\u4E0A\u4E0B\u6587\u3001\u53EF\u6269\u81F3 1M\u3002\u6765\u6E90\uFF1AHF \u6A21\u578B\u5361\u4E0E qwen.ai \u5B98\u65B9\u535A\u5BA2\u3002"},{id:"qwen",patterns:["qwen","qwq"],efforts:{off:null,high:"high"},defaultEffort:"high",compat:{thinkingFormat:"qwen"},input:["text"],contextWindow:1e6,maxTokens:65536,note:"\u901A\u4E49\u5343\u95EE\uFF1Aenable_thinking \u5F00\u5173\uFF08\u65E0 effort \u6863\uFF09\uFF0C\u5F00=High\uFF1B\u73B0\u5F79\u65D7\u8230\u4E3A qwen3.8 \u7CFB\uFF081M \u6863\u4E0A\u4E0B\u6587\uFF0C\u89C1 qwen-3-8 \u6761\u76EE\uFF09\u30023.6/3.7 \u4EE3\u7684 Plus/Flash \u4EA6\u9ED8\u8BA4\u591A\u6A21\u6001\uFF08\u56FE\u7247/\u89C6\u9891\uFF09\uFF0C\u5982\u63A5\u5165\u8BF7\u6309\u9700\u52FE\u9009\u56FE\u7247\uFF1B\u89C6\u89C9\u7EBF\u89C1 qwen-vision \u6761\u76EE\u3002"},{id:"glm-vision",patterns:["glm-4v","glm-4-6v","glm-4-5v","glm-5v"],efforts:{off:null,high:"high"},defaultEffort:"high",compat:{thinkingFormat:"zai"},input:["text","image"],contextWindow:131072,maxTokens:32768,note:"\u667A\u8C31\u89C6\u89C9\u7EBF\uFF08GLM-4V/4.5V/4.6V/5V\uFF09\uFF1Athinking \u5F00\u5173\uFF08\u5F00=High\uFF09\uFF0C\u6536\u56FE\u3002GLM-4.5V \u4E3A\u5F3A\u5236\u601D\u8003\uFF08\u4F20 disabled \u62A5\u9519\uFF0C\u8BF7\u624B\u52A8\u5220 Off \u6863\uFF09\u3002"},{id:"glm-5-3-flash",patterns:["glm-5.3-flash"],efforts:{low:"low",high:"high",max:"max"},defaultEffort:"max",compat:{thinkingFormat:"zai",supportsReasoningEffort:!0},input:["text","image"],contextWindow:1048576,maxTokens:131072,note:"GLM-5.3-Flash\uFF08320B\uFF0C\u5B98\u65B9\u6587\u6863 vlm \u5206\u7C7B\uFF09\uFF1A\u5F3A\u5236\u601D\u8003\uFF08thinking.type \u4EC5 enabled\uFF0C\u4E0D\u652F\u6301\u5173\u95ED\uFF09\uFF0C\u6587\u672C\u53C2\u6570\u4E0E GLM-5.3 \u4E00\u81F4\u2014\u2014\u6863\u4F4D Low / High / Max\u3002\u8F93\u5165\u6A21\u6001\uFF1A\u89C6\u9891\u3001\u56FE\u50CF\u3001\u6587\u672C\u3001\u6587\u4EF6\uFF08\u89C6\u9891/\u6587\u4EF6\u672A\u5165\u6838\u5FC3\u8BCD\u8868\uFF0C\u56FE\u7247\u53EF\u52FE\uFF09\u3002\u5B98\u65B9 1M \u4E0A\u4E0B\u6587 / 128K \u6700\u5927\u8F93\u51FA\u3002\u6765\u6E90\uFF1Adocs.bigmodel.cn \u6A21\u578B\u9875\u3002"},{id:"glm-5-3",patterns:["glm-5.3"],efforts:{low:"low",high:"high",max:"max"},defaultEffort:"max",compat:{thinkingFormat:"zai",supportsReasoningEffort:!0},input:["text"],contextWindow:1048576,maxTokens:131072,note:"GLM-5.3 \u6863\u4F4D\uFF1ALow / High / Max\uFF08\u5F3A\u5236\u601D\u8003\uFF0C\u5176\u4F59\u503C\u62A5\u9519\uFF09\u3002\u5B98\u65B9\u5BB9\u91CF 1M / 128K\u3002"},{id:"glm-5-2",patterns:["glm-5.2"],efforts:{off:"none",minimal:"minimal",low:"low",medium:"medium",high:"high",xhigh:"xhigh",max:"max"},defaultEffort:"max",compat:{thinkingFormat:"zai",supportsReasoningEffort:!0},input:["text"],contextWindow:1048576,maxTokens:131072,note:"GLM-5.2 \u6863\u4F4D\uFF1ANone / Minimal / Low / Medium / High / XHigh / Max\uFF08\u5B98\u65B9\u6620\u5C04\uFF1ALow\xB7Medium\u2192High\u3001XHigh\u2192Max\u3001None\xB7Minimal=\u505C\u6B62\u601D\u8003\uFF09\u3002\u89C6\u89C9\u7EBF\u89C1 glm-vision \u6761\u76EE\u3002"},{id:"glm",patterns:["glm","zhipu","chatglm"],efforts:{off:null,high:"high"},defaultEffort:"high",compat:{thinkingFormat:"zai"},input:["text"],note:"GLM \u901A\u7528\uFF1Athinking \u5F00\u5173\uFF08\u65E0 effort \u6863\uFF09\uFF0C\u5F00=High\uFF1Beffort \u9636\u68AF\u4EC5 GLM-5.2+ \u652F\u6301\uFF08\u89C1\u4E0A\u4E24\u6761\u76EE\uFF09\u3002\u6CE8\u610F GLM-4.7/GLM-4.5V \u4E3A\u5F3A\u5236\u601D\u8003\uFF0C\u4F20 disabled \u4F1A\u62A5\u9519\uFF08\u8BF7\u624B\u52A8\u5220 Off \u6863\uFF09\u3002\u89C6\u89C9\u7EBF\u89C1 glm-vision \u6761\u76EE\u3002"},{id:"kimi-k3",patterns:["kimi-k3"],efforts:{low:"low",high:"high",max:"max"},defaultEffort:"max",compat:{thinkingFormat:"openai",supportsReasoningEffort:!0},input:["text","image"],contextWindow:1048576,note:"Kimi K3 \u6863\u4F4D\uFF1ALow / High / Max(\u9ED8\u8BA4 Max)\uFF0C\u8D70\u9876\u5C42 reasoning_effort\uFF1B\u59CB\u7EC8\u63A8\u7406\u3001\u52FF\u4F20 thinking \u5BF9\u8C61\u3002\u539F\u751F\u89C6\u89C9\u7406\u89E3\uFF0C1M \u4E0A\u4E0B\u6587\uFF08\u6700\u5927\u8F93\u51FA\u5B98\u65B9\u672A\u5355\u72EC\u5217\uFF0C\u4E0D\u63D0\u4F9B\uFF09\u3002"},{id:"kimi-k2-vision",patterns:["kimi-k2.6","kimi-k2.5"],efforts:{off:null,high:"high"},defaultEffort:"high",compat:{thinkingFormat:"deepseek"},input:["text","image"],contextWindow:262144,note:"Kimi K2.5/K2.6 \u89C6\u89C9\u4EE3\uFF1Athinking.type \u5F00\u5173\uFF08\u9ED8\u8BA4\u5F00\u3001\u53EF\u5173\uFF09\uFF0C\u5F00=High\uFF1B\u5E26\u89C6\u89C9\uFF0C256K\u3002K2.7 Code \u59CB\u7EC8\u601D\u8003\uFF0C\u89C1\u5355\u72EC\u6761\u76EE\u3002"},{id:"kimi-k27-code",patterns:["kimi-k2.7"],efforts:{high:"high"},defaultEffort:"high",compat:{thinkingFormat:"deepseek"},input:["text","image"],contextWindow:262144,note:"Kimi K2.7 Code\uFF08\u542B\u9AD8\u901F\u7248\uFF09\uFF1A\u59CB\u7EC8\u601D\u8003\u2014\u2014thinking.type \u4EC5\u63A5\u53D7 enabled\uFF08\u4F20 disabled \u62A5\u9519\uFF09\uFF0C\u65E0 Off \u6863\uFF1B\u5E26\u89C6\u89C9\uFF0C256K\u3002"},{id:"kimi-moonshot-v1-vision",patterns:["moonshot-v1-8k-vision","moonshot-v1-32k-vision","moonshot-v1-128k-vision"],efforts:!1,input:["text","image"],note:"Moonshot V1 \u89C6\u89C9\u65E7\u4EE3\uFF088k/32k/128k \u5404\u4E00\uFF09\uFF1A\u65E0\u601D\u8003\u63A7\u4EF6\uFF08\u751F\u6210\u6A21\u578B\uFF09\u3001\u652F\u6301\u56FE\u7247\u8F93\u5165\uFF1B\u8BE5\u7EBF\u5DF2\u505C\u6B62\u5BF9\u65B0\u7528\u6237\u5F00\u653E\uFF082026-08-31 \u5168\u91CF\u4E0B\u7EBF\uFF0C\u7F51\u5173\u6B8B\u7559\u4ECD\u53EF\u547D\u4E2D\uFF09\u3002"},{id:"kimi",patterns:["kimi","moonshot"],efforts:{off:null,high:"high"},compat:{thinkingFormat:"deepseek"},input:["text"],contextWindow:262144,note:"Kimi \u901A\u7528\uFF1Athinking \u5F00\u5173\uFF08\u65E0 effort \u6863\uFF09\uFF0C\u5F00=High\u3002k2 \u7CFB\u5217 2026-05-25 \u4E0B\u7EBF\u3001kimi-latest 2026-01-28 \u4E0B\u7EBF\u3001moonshot-v1 \u7CFB 2026-08-31 \u5168\u91CF\u4E0B\u7EBF\uFF08\u7F51\u5173\u6B8B\u7559\u4ECD\u53EF\u547D\u4E2D\uFF1Bmoonshot-v1 \u672C\u8EAB\u975E\u601D\u8003\u6A21\u578B\uFF09\u3002\u89C6\u89C9\u4EE3\u4E0E K2.7 Code \u89C1\u5355\u72EC\u6761\u76EE\u3002"},{id:"hunyuan-hy3",patterns:["hy3"],efforts:{low:"low",high:"high"},compat:{thinkingFormat:"openai",supportsReasoningEffort:!0},input:["text"],contextWindow:262144,note:"\u6DF7\u5143 hy3\uFF1A\u5F00\u6E90\u5951\u7EA6\u7ECF chat_template_kwargs.reasoning_effort = no_think(\u9ED8\u8BA4)/low/high\uFF1B\u5B98\u65B9\u6A21\u578B\u5361 256K \u4E0A\u4E0B\u6587\uFF08295B MoE\uFF0C2026 \u5F00\u6E90\uFF09\u3002"},{id:"hunyuan-hy4",patterns:["hy4-preview","hy-4-preview"],efforts:{off:"no_think",high:"high"},defaultEffort:"high",compat:{thinkingFormat:"openai",supportsReasoningEffort:!0},contextWindow:1e6,note:"\u6DF7\u5143 Hy4 preview\uFF1A\u5B98\u65B9 README\u2014\u2014reasoning \u9ED8\u8BA4 high\uFF08\u6DF1\u5EA6\u601D\u8003\uFF09\uFF0C\u5173\u95ED\u7ECF chat_template_kwargs.reasoning_effort=no_think\uFF1B\u5B98\u65B9\u89C4\u683C\u8868 1M \u4E0A\u4E0B\u6587\uFF08770B-A49B MoE\uFF0CGated DSA\uFF09\u3002low \u6863\u5B98\u65B9\u672A\u5217\uFF0C\u5982\u6709\u8BF7\u624B\u8C03\uFF1B\u89C6\u89C9\u672A\u58F0\u660E\uFF0C\u6309\u9700\u624B\u52FE\u3002\u6765\u6E90\uFF1ATencent-Hunyuan/Hy4-preview \u5B98\u65B9 README\u3002"},{id:"step-3-7",patterns:["step-3.7","step-3.6"],efforts:{low:"low",medium:"medium",high:"high"},defaultEffort:"medium",compat:{thinkingFormat:"openai",supportsReasoningEffort:!0},input:["text","image"],contextWindow:262144,note:"\u9636\u8DC3 Step-3.6/3.7 \u6863\u4F4D\uFF1ALow / Medium(\u9ED8\u8BA4\u63A8\u8350) / High\uFF0C\u539F\u751F\u56FE\u7247+\u89C6\u9891\u7406\u89E3\u3002\u4E0A\u4E0B\u6587\u4E3A\u8F93\u5165+\u8F93\u51FA\u603B\u548C\u4E0A\u9650\u3002"},{id:"step-3-5",patterns:["step-3.5"],efforts:{low:"low",high:"high"},compat:{thinkingFormat:"openai",supportsReasoningEffort:!0},input:["text"],contextWindow:262144,note:"\u9636\u8DC3 Step-3.5 Flash \u6863\u4F4D\uFF1ALow / High\uFF08\u7EAF\u6587\u672C\u63A8\u7406\u65D7\u8230\uFF09\u3002\u4E0A\u4E0B\u6587\u4E3A\u8F93\u5165+\u8F93\u51FA\u603B\u548C\u4E0A\u9650\u3002"},{id:"step",patterns:["step-3","step-2"],efforts:{low:"low",medium:"medium",high:"high"},defaultEffort:"medium",compat:{thinkingFormat:"openai",supportsReasoningEffort:!0},input:["text"],note:"\u9636\u8DC3 Step \u6863\u4F4D\uFF1ALow / Medium / High\uFF08\u9ED8\u8BA4 Medium\uFF0C\u4E0D\u53EF\u5173\u95ED\uFF09\u30023.6/3.7 \u89C6\u89C9\u4EE3\u89C1\u5355\u72EC\u6761\u76EE\u3002"},{id:"doubao",patterns:["doubao","seed"],efforts:{off:null,low:"low",medium:"medium",high:"high"},compat:{thinkingFormat:"openai",supportsReasoningEffort:!0},input:["text","image"],note:"\u8C46\u5305\u6863\u4F4D\uFF1AOff / Low / Medium / High\u2014\u2014effort \u9636\u68AF\u4ECD\u662F\u793E\u533A\u8BC1\u636E\u3001\u5B98\u65B9 Ark \u6587\u6863\u660E\u5217\u7684\u4E3A thinking.type \u5F00\u5173\uFF082026-08-24 \u590D\u6838\u4ECD\u672A\u89C1\u5230 effort \u5B98\u65B9\u660E\u6587\uFF09\u3002seed \u4EE3\u6536\u56FE\uFF081.5-pro \u4F8B\u5916\uFF09\u3002"},{id:"minimax-m3",patterns:["minimax-m3"],efforts:{off:null,high:"high"},compat:{thinkingFormat:"deepseek"},input:["text","image"],contextWindow:1048576,note:"MiniMax-M3\uFF1A\u5B98\u65B9 thinking \u53C2\u6570 enabled/adaptive/disabled\uFF08\u65E0 effort \u6863\uFF09\uFF0C\u5F00=High\u3001\u5173=disabled\uFF1B\u539F\u751F\u591A\u6A21\u6001\uFF08\u56FE/\u89C6\u9891\uFF0C\u6838\u5FC3\u8BCD\u8868\u4EC5\u542B\u56FE\uFF09\uFF0C1M \u4E0A\u4E0B\u6587\u3002"},{id:"baidu-ernie",patterns:["ernie"],efforts:!1,input:["text"],contextWindow:131072,note:"\u767E\u5EA6\u5343\u5E06 ERNIE \u7CFB\uFF1A\u5B98\u65B9 OpenAI \u517C\u5BB9\u63A5\u53E3\u65E0 reasoning_effort \u53C2\u6570\u2014\u2014\u601D\u8003\u7531\u6A21\u578B\u53D8\u4F53\u51B3\u5B9A\uFF08-Thinking \u7CFB\u5217\u59CB\u7EC8\u601D\u8003\u3001\u666E\u901A\u7CFB\u5217\u4E0D\u601D\u8003\uFF09\uFF0C\u52FF\u52FE\u601D\u8003\u6863\u3002ERNIE 4.5 Turbo VL \u652F\u6301\u56FE\u7247\uFF0C\u6309\u9700\u624B\u52FE\uFF1B\u53C2\u8003\u5BB9\u91CF\u53D6 Turbo 128K \u6863\u3002"}],wt={off:null,low:"low",medium:"medium",high:"high"},co={"openai-completions":wt,"openai-responses":wt,"anthropic-messages":wt,deepseek:{off:"none",low:"low",high:"high",max:"max"}},po={low:"low",medium:"medium",high:"high"};function je(e){return(e??"").toLowerCase().trim()}function nn(e){return e!==void 0&&/[a-z0-9]/.test(e)}function Ke(e){return e.toLowerCase().trim().replace(/[^a-z0-9]+/g," ")}function an(e,t,n){let o=t===0?void 0:e[t-1],r=e[t+n];return!nn(o)&&!nn(r)}function go(e,t){let n=Ke(e)+" "+Ke(t??""),o;for(let r of uo)for(let f of r.patterns){let s=Ke(f),a=n.indexOf(s);for(;a>=0;){if(an(n,a,s.length)){(o===void 0||s.length>o.length)&&(o={entry:r,length:s.length});break}a=n.indexOf(s,a+1)}}return o?.entry}var mo={"deepseek.com":"deepseek","anthropic.com":"anthropic-messages"};function ho(e){let t=je(e.api);if(t.length>0)return t;let n=e.baseURL;if(n!==void 0&&n.length>0)try{let r=new URL(n).hostname.toLowerCase().split(".");if(r.length>=2){let f=mo[r.slice(-2).join(".")];if(f!==void 0)return f}}catch{}return"openai-completions"}var it="openai-completions",dn="anthropic-messages";function kt(e){if(e===void 0||e.length===0)return!1;let t="";try{t=new URL(e).hostname.toLowerCase()}catch{return!1}return t==="localhost"||t==="::1"||t.endsWith(".local")||t.endsWith(".internal")||/^(127\.|10\.|192\.168\.)/.test(t)||/^172\.(1[6-9]|2[0-9]|3[01])\./.test(t)?!0:t.includes(":")}function bo(e,t){let n=je(t),o={...e};if(delete o.supportsMidConvoEffort,delete o.allowedFallbackModels,n===dn){for(let r of["thinkingFormat","supportsReasoningEffort","thinkingTokenBudgetField","supportsThinkingTokenBudget","vllmPriority","supportsMaxOutputTokens"])delete o[r];return o.forceAdaptiveThinking===void 0?void 0:{forceAdaptiveThinking:o.forceAdaptiveThinking}}if(n==="openai-responses"){for(let r of["thinkingFormat","supportsReasoningEffort","thinkingTokenBudgetField","supportsThinkingTokenBudget","vllmPriority"])delete o[r];return o.supportsMaxOutputTokens===void 0?void 0:{supportsMaxOutputTokens:o.supportsMaxOutputTokens}}if(n===it)return delete o.forceAdaptiveThinking,delete o.supportsMaxOutputTokens,Object.keys(o).length===0?void 0:o}function xo(e,t){let n=je(t.api);if(n===it){let o=e.compat;return o!==void 0&&(o=bo(o,n)??void 0),o===void 0&&!kt(t.baseURL)?void 0:o===void 0?{thinkingTokenBudgetField:"thinking_token_budget"}:o.thinkingTokenBudgetField===void 0&&o.supportsThinkingTokenBudget!==!0&&kt(t.baseURL)?{...o,thinkingTokenBudgetField:"thinking_token_budget"}:o}if(n===dn&&e.anthropicAdaptive===!0)return{forceAdaptiveThinking:!0}}var yo=["openai.com","openai.azure.com","deepseek.com","openrouter.ai","z.ai","bigmodel.cn","moonshot.ai","moonshot.cn","aliyuncs.com","anthropic.com","x.ai","together.ai","together.xyz","nvidia.com","cerebras.ai","cloudflare.com","chutes.ai","opencode.ai","ant-ling.com"];function vt(e){if(je(e.api)!==it)return!1;let t=e.baseURL;if(t===void 0||t.length===0)return!1;try{let n=new URL(t).hostname.toLowerCase();return n.includes(".")?!yo.some(o=>n===o||n.endsWith("."+o)):!1}catch{return!1}}function on(e,t,n){return e===void 0||!n||e.supportsDeveloperRole!==void 0||!vt(t)?e:{...e,supportsDeveloperRole:!1}}var rn={off:null,low:"low",medium:"medium",high:"high"},wo=["vl","vision","omni","4o","pixtral","internvl"];function ko(e){let t=Ke(e);for(let n of wo){let o=Ke(n),r=t.indexOf(o);for(;r>=0;){if(an(t,r,o.length))return["text","image"];r=t.indexOf(o,r+1)}}}function vo(e){if(e===void 0)return;let t=e.map(n=>n.toLowerCase());if(t.some(n=>fo.includes(n)))return t.includes("image")?["text","image"]:["text"]}function de(e,t,n){let o=go(e,t.displayName),r,f,s,a;o?.input!==void 0&&(r=o.input,f="knowledge"),o?.contextWindow!==void 0&&(s=o.contextWindow),o?.maxTokens!==void 0&&(a=o.maxTokens);let l=vo(n?.input);if(l!==void 0&&(r=l,f="endpoint"),n?.contextLength!==void 0&&Number.isFinite(n.contextLength)&&n.contextLength>0&&(s=n.contextLength),r===void 0){let k=ko(e);k!==void 0&&(r=k,f="heuristic")}let c={...r===void 0?{}:{input:r},...f===void 0?{}:{inputSource:f},...s===void 0?{}:{contextWindow:s},...a===void 0?{}:{maxTokens:a}},g=n===void 0?{}:{endpoint:{reasoning:n.reasoning,source:n.source}};if(n?.reasoning===!1)return{efforts:!1,matched:!1,source:"endpoint:"+(n.source??"listing"),confidence:"high",...g,...c};if(o!==void 0){let k=on(xo(o,t),t,o.efforts!==!1);return{efforts:o.efforts,...o.efforts!==!1&&o.defaultEffort!==void 0&&o.efforts[o.defaultEffort]!==void 0?{defaultEffort:o.defaultEffort}:{},...k===void 0?{}:{compat:k},matched:!0,entryId:o.id,source:o.id,confidence:"high",...g,...c}}let u=ho(t),h=co[u]??po,d=je(t.api)===it?{thinkingFormat:"openai",supportsReasoningEffort:!0}:void 0,i=d!==void 0&&kt(t.baseURL)?{...d,thinkingTokenBudgetField:"thinking_token_budget"}:d,p=on(i,t,!0);return n?.reasoning===!0?{efforts:{...rn},...rn.medium!==void 0?{defaultEffort:"medium"}:{},...p===void 0?{}:{compat:p},matched:!1,source:"endpoint:"+(n.source??"listing"),confidence:"medium",...g,...c}:{efforts:h,...h.medium!==void 0?{defaultEffort:"medium"}:{},...p===void 0?{}:{compat:p},matched:!1,source:"protocol:"+u,confidence:"low",...g,...c}}var fn="dsh-better-reasoning-effort.slider.efforts",Et="breSelectWired";function Mt(e){return typeof e=="object"&&e!==null&&e.ok===!1}function un(e){if(!Mt(e))return;let t=e.error,n=typeof t?.code=="string"?t.code:"settings/rejected",o=typeof t?.message=="string"?t.message:"";return o.length>0?`${n}: ${o}`:n}function Le(e,t){return`${e}/${t}`}function cn(){try{let e=window.localStorage.getItem(fn);if(e===null)return{};let t=JSON.parse(e);if(typeof t!="object"||t===null||Array.isArray(t))return{};let n={};for(let[o,r]of Object.entries(t))o.length>0&&typeof r=="string"&&r.trim().length>0&&(n[o]=r);return n}catch{return{}}}function Eo(e){try{window.localStorage.setItem(fn,JSON.stringify(e))}catch{}}function Mo(e,t,n){let o=cn();o[Le(e,t)]=n,Eo(o)}function So(e,t){return cn()[Le(e,t)]}function st(e,t,n){let r=e.groups.find(f=>f.id===t)?.models.find(f=>f.id===n)?.reasoning?.efforts;return r===void 0?[]:r.map(f=>f.id)}function Lo(e,t){return e===null||e.provider!==t.provider||e.model!==t.model}async function ln(e,t,n,o,r){let f=st(e,t,n);if(f.length===0)return;let s=Le(t,n),a=o.get(s);if(a!==void 0&&f.includes(a))return a;let l=await r?.configuredEffort?.(t,n);if(l!==void 0&&f.includes(l))return l;let c=So(t,n);if(c!==void 0&&f.includes(c))return c;let g=de(n,{}).defaultEffort;return g!==void 0&&f.includes(g)?g:void 0}function pn(e,t){let n=e;if(n[Et]===!0)return()=>{};let o=Object.prototype.hasOwnProperty.call(n,"select"),r=e.select,f=new Map,s=new Set,a=new Map,l=3,c=0,g=async d=>{let i=++c;if(d.reasoningEffort!==void 0){let y=await r.call(e,d);return!Mt(y)&&oe()&&(f.set(Le(d.provider,d.model),d.reasoningEffort),Mo(d.provider,d.model,d.reasoningEffort)),y}let p=e.store.getSnapshot();if(!Lo(p.current,d)){if(oe()){let y=Le(d.provider,d.model);f.delete(y),s.add(y)}return r.call(e,d)}if(!oe())return r.call(e,d);let k=await ln(p,d.provider,d.model,f,t),x=e.store.getSnapshot();if(!(c!==i||((y,R)=>y===null||R===null||y.provider!==R.provider||y.model!==R.model||y.reasoningEffort!==R.reasoningEffort)(x.current,p.current)))return!oe()||k===void 0||!st(x,d.provider,d.model).includes(k)?r.call(e,d):r.call(e,{...d,reasoningEffort:k})},u=()=>{let d=e.store.getSnapshot(),i=d.current;if(i===null||i.reasoningEffort!==void 0||!oe())return;let p=Le(i.provider,i.model);if(s.has(p))return;if(st(d,i.provider,i.model).length===0){s.add(p);return}s.add(p);let k=c;ln(d,i.provider,i.model,f,t).then(async x=>{if(x===void 0){s.delete(p);return}if(!oe()){s.delete(p);return}let M=e.store.getSnapshot(),y=M.current;if(c!==k||y===null||y.reasoningEffort!==void 0||Le(y.provider,y.model)!==p||!st(M,y.provider,y.model).includes(x))return;let R=await r.call(e,{provider:y.provider,model:y.model,reasoningEffort:x});if(Mt(R))throw R}).catch(()=>{let x=(a.get(p)??0)+1;a.set(p,x),x<l&&(s.delete(p),u())})},h=e.store.subscribe(u);return u(),n[Et]=!0,e.select=g,()=>{delete n[Et],h(),o?e.select=r:delete n.select}}function gn(e){if(e.current===null)return[];let o=e.groups.find(r=>r.id===e.current?.provider)?.models.find(r=>r.id===e.current?.model)?.reasoning?.efforts;return o!==void 0&&o.length>=2?o:[]}function Ro(e){return e.current}function mn(e,t){let n=Ro(t),o=e.findIndex(a=>a.id===n?.reasoningEffort);if(o>=0)return o;let f=t.groups.find(a=>a.id===n?.provider)?.models.find(a=>a.id===n?.model)?.reasoning?.defaultEffort,s=f===void 0?-1:e.findIndex(a=>a.id===f);return s>=0?s:Math.floor((e.length-1)/2)}function To(e,t,n,o,r){let f=r.progress*t,s=document.body.hasAttribute("data-ds-dark-theme"),a=4,l=r.dragging?2.8:1;if(e.clearRect(0,0,t,n),f<=0)return;e.save(),e.beginPath(),e.rect(0,0,f,n),e.clip();for(let g=0;g<f;g+=a){let u=g+a*.5-f,h=Math.abs(u),d=h/10-o*.0074*l,i=h/23-o*.0041*l+1.7,p=h/40-o*.0022*l+3.4,k=Math.max(0,Math.sin(d)),x=Math.max(0,Math.sin(i)),M=Math.max(0,Math.sin(p)),y=Math.pow(k,2.6),R=Math.pow(x,3.2),T=Math.pow(M,4),L=Math.pow(k,15)+Math.pow(x,18)*.78,N=Math.min(1,y*.76+R*.58+T*.32),_=.38+.62*Math.exp(-h/Math.max(55,t*.72)),G=Math.pow(Math.max(0,Math.sin(g/20+o*.0016)),3)*.27,B=_*(N*1.04+G+L*.32);if(B>.012){let C=Math.max(0,1-h/Math.max(1,t*.78)),V=Math.round(s?42+124*C+75*N:28+58*C+15*N),J=Math.round(s?56+58*C+44*L:88+72*C+30*L),K=Math.round(s?175+72*C+8*N:182+62*C),j=s?Math.min(.88,B*.72):Math.min(.62,B*.54);e.fillStyle="rgba("+String(V)+", "+String(J)+", "+String(K)+", "+String(j)+")",e.fillRect(g,0,a-1,n)}for(let C=0;C<n;C+=a){let V=C+a*.5-n*.5,J=Math.hypot(u/38,V/11),K=Math.exp(-J*.96)*1.08,j=.58+.42*Math.cos(V/n*Math.PI),Y=.72+.28*Math.sin(g*.73+C*1.31+o*.006),$=Math.min(.96,(B*.88+K+L*.19)*j*Y);if($<.035)continue;let U=Math.max(0,1-J/2.4),F=Math.round(s?54+148*U+42*N+35*L:25+72*U+12*N),te=Math.round(s?68+78*U+46*L:98+72*U+24*L),Q=Math.round(s?186+64*U:194+56*U);e.fillStyle="rgba("+String(F)+", "+String(te)+", "+String(Q)+", "+String(s?$:$*.72)+")",e.fillRect(g,C,a-1,a-1)}}for(let g=0;g<14;g+=1){let u=(o*(r.dragging?.16:.065)*(.78+g%5*.09)+g*23)%Math.max(30,f+64),h=f-u;if(h<-24||h>t+16)continue;let d=3+(g*13+Math.sin(o*.003+g)*5)%Math.max(7,n-6),i=4+g%4*4+(r.dragging?6:0),p=.28+g%5*.1,k=e.createLinearGradient(h,0,h+i,0);k.addColorStop(0,s?"rgba(72,118,255,0)":"rgba(24,94,184,0)"),k.addColorStop(.68,s?"rgba(112,135,255,"+String(p)+")":"rgba(36,108,202,"+String(p*.72)+")"),k.addColorStop(1,s?"rgba(236,222,255,"+String(Math.min(1,p+.26))+")":"rgba(103,175,248,"+String(Math.min(.82,p+.18))+")"),e.fillStyle=k,e.fillRect(h,d,i,g%3===0?2:1)}let c=e.createRadialGradient(f,n/2,0,f,n/2,24);c.addColorStop(0,s?"rgba(255,255,255,.82)":"rgba(255,255,255,.86)"),c.addColorStop(.14,s?"rgba(183,190,255,.54)":"rgba(162,210,255,.48)"),c.addColorStop(.44,s?"rgba(103,74,255,.28)":"rgba(37,112,207,.22)"),c.addColorStop(1,s?"rgba(86,31,210,0)":"rgba(25,91,181,0)"),e.fillStyle=c,e.fillRect(f-26,0,52,n),e.restore()}function hn(e){let{directory:t,t:n}=e,o=(0,v.useSyncExternalStore)(m=>t.store.subscribe(m),()=>t.store.getSnapshot()),r=gn(o),[f,s]=(0,v.useState)(""),[a,l]=(0,v.useState)(0),[c,g]=(0,v.useState)(!1),[u,h]=(0,v.useState)(!1),[d,i]=(0,v.useState)(null),p=(0,v.useRef)(null),k=(0,v.useRef)(null),x=(0,v.useRef)(""),M=(0,v.useRef)(!1),y=(0,v.useRef)(0),R=(0,v.useRef)(!1),T=(0,v.useRef)(!1),L=(0,v.useRef)(null),N=(0,v.useRef)(null),_=(0,v.useRef)(null),G=(0,v.useRef)(null),B=(0,v.useRef)({progress:.5,dragging:!1}),C=(0,v.useRef)(null),V=o.current!==null&&r.length>=2,J=c||o.status==="selecting",K=d??o.error;(0,v.useEffect)(()=>{if(!V||M.current||R.current)return;let m=mn(r,o),E=r[m]?.id??"";x.current=E,y.current=m,s(E),l(m),i(null)},[V,r,o]),(0,v.useEffect)(()=>{t.load().catch(()=>{})},[t]),(0,v.useEffect)(()=>{y.current=a,B.current.progress=r.length>=2?a/(r.length-1):.5,C.current?.()},[a,r.length]),(0,v.useEffect)(()=>{B.current.dragging=u,C.current?.()},[u]),(0,v.useEffect)(()=>{let m=p.current;if(m===null)return;let E=m.getContext("2d");if(E===null)return;let P=(typeof window.matchMedia=="function"?window.matchMedia("(prefers-reduced-motion: reduce)"):void 0)??{matches:!1},H=1,D=1,q=0,ce=()=>{let Z=m.getBoundingClientRect(),xe=Math.min(window.devicePixelRatio||1,2);H=Math.max(1,Z.width),D=Math.max(1,Z.height),m.width=Math.max(1,Math.round(H*xe)),m.height=Math.max(1,Math.round(D*xe)),E.setTransform(xe,0,0,xe,0,0)},pe=(Z=performance.now())=>{To(E,H,D,Z,B.current)},ge=Z=>{pe(Z),q=window.requestAnimationFrame(ge)},be=()=>{P.matches&&pe()},se;typeof ResizeObserver=="function"&&(se=new ResizeObserver(()=>{ce(),pe()}),se.observe(m));let Ne=new MutationObserver(()=>pe());return Ne.observe(document.body,{attributes:!0,attributeFilter:["data-ds-dark-theme"]}),C.current=be,ce(),pe(),!P.matches&&typeof window.requestAnimationFrame=="function"&&(q=window.requestAnimationFrame(ge)),()=>{typeof window.cancelAnimationFrame=="function"&&window.cancelAnimationFrame(q),se?.disconnect(),Ne.disconnect(),C.current=null}},[]);let j=(m,E)=>m.findIndex(I=>I.id===E),Y=(0,v.useCallback)(()=>{let m=x.current;y.current=Math.max(0,j(r,m)),T.current=!1,L.current=null,R.current=!1,s(m),l(Math.max(0,j(r,m))),h(!1)},[r]),$=(0,v.useCallback)(async m=>{if(M.current)return;M.current=!0;let E=x.current;h(!1),g(!0),i(null);let I=(D,q)=>Math.max(0,Math.min(q-1,Math.round(D))),P=I(m,r.length),H=r[P]?.id;H!==void 0&&(y.current=P,l(P),s(H));try{let q=await t.load(),ce=q.current??null,pe={current:ce,routable:q.routable??o.routable,groups:q.groups??o.groups,failures:q.failures??o.failures,status:"ready",error:null},ge=gn(pe),be=I(m,ge.length),se=ge[be]?.id;if(se===void 0)throw new Error(n("sliderNoLevels"));if(y.current=be,l(be),s(se),ce===null)throw new Error(n("sliderNoCurrent"));let Ne=await t.select({provider:ce.provider,model:ce.model,reasoningEffort:se}),Z=un(Ne);if(Z!==void 0)throw new Error(Z);let xe=t.store.getSnapshot(),et=j(ge,xe.current?.reasoningEffort),Fe=et>=0?et:be,tt=ge[Fe]?.id??se;x.current=tt,y.current=Fe,s(tt),l(Fe)}catch(D){let q=Math.max(0,j(r,E));x.current=E,y.current=q,s(E),l(q),i(D instanceof Error?D.message:String(D))}finally{M.current=!1,g(!1)}},[t,r,o.groups]),U=(m,E)=>{let I=m.getBoundingClientRect();return I.width<=0||r.length<2?y.current:Math.max(0,Math.min(r.length-1,(E-I.left)/I.width*(r.length-1)))},F=m=>{let E=(I,P)=>Math.max(0,Math.min(P-1,Math.round(I)));y.current=m,l(m),s(r[E(m,r.length)]?.id??"")},te=(m,E,I)=>{T.current=!0,L.current=E,R.current=!0,h(!0),F(U(m,I));try{m.hasPointerCapture(E)||m.setPointerCapture(E)}catch{}},Q=(m,E,I)=>{!T.current||L.current!==E||F(U(m,I))},he=(m,E,I)=>{if(!T.current||E!==void 0&&L.current!==E)return;let P=I===void 0?y.current:U(m,I);T.current=!1,L.current=null,R.current=!1,E!==void 0&&m.hasPointerCapture(E)&&m.releasePointerCapture(E),F(P),$(P)};N.current=m=>{let E=k.current;E!==null&&Q(E,m.pointerId,m.clientX)},_.current=m=>{let E=k.current;E!==null&&he(E,m.pointerId,m.clientX)},G.current=m=>{L.current===m.pointerId&&Y()},(0,v.useEffect)(()=>{let m=P=>N.current?.(P),E=P=>_.current?.(P),I=P=>G.current?.(P);return window.addEventListener("pointermove",m,!0),window.addEventListener("pointerup",E,!0),window.addEventListener("pointercancel",I,!0),()=>{window.removeEventListener("pointermove",m,!0),window.removeEventListener("pointerup",E,!0),window.removeEventListener("pointercancel",I,!0)}},[]);let Me=m=>{let E=r.length,P=((D,q)=>Math.max(0,Math.min(q,Math.round(D))))(Number(m.currentTarget.value),E-1),H;m.key==="ArrowLeft"||m.key==="ArrowDown"||m.key==="PageDown"?H=Math.max(0,P-1):m.key==="ArrowRight"||m.key==="ArrowUp"||m.key==="PageUp"?H=Math.min(E-1,P+1):m.key==="Home"?H=0:m.key==="End"&&(H=E-1),H!==void 0&&(m.stopPropagation(),m.preventDefault(),$(H))},re=o.current,Ie=o.groups.find(m=>m.id===re?.provider)?.models.find(m=>m.id===re?.model)?.name??(re===null?n("triggerFallback"):re.model),He=r[mn(r,o)]?.name??n("effortDefault");if(!V)return(0,v.createElement)("div",{className:"bre-slider-body"},(0,v.createElement)("div",{className:"bre-slider-advanced"},(0,v.createElement)("span",{className:"bre-slider-hint"},n("sliderNoLevels"))),(0,v.createElement)("div",{className:"bre-menu-separator","aria-hidden":!0}),(0,v.createElement)("button",{type:"button",role:"menuitem",className:"bre-model-row",disabled:J,onClick:()=>{e.pickModel?.()}},(0,v.createElement)("span",{className:"bre-model-row-name"},Ie),(0,v.createElement)("span",{className:"bre-model-row-effort"},He),(0,v.createElement)("span",{className:"bre-row-chevron","aria-hidden":!0},"\u203A")),K===null?null:(0,v.createElement)("div",{className:"bre-model-error",role:"status"},K));let ie=r.length,Ce=r[j(r,f)]?.name??f,Ye=j(r,f)===ie-1,Qe=a/(ie-1)*100,Ze={"--bre-progress":String(Qe)+"%"},mt=K===null?n("sliderEffortTitle",{name:Ce}):n("sliderEffortTitleError",{error:K});return(0,v.createElement)("div",{className:"bre-slider-body"},(0,v.createElement)("div",{className:"bre-slider-advanced"},(0,v.createElement)("div",{className:"bre-effort"+(u?" is-dragging":"")+(J?" is-busy":"")+(K===null?"":" is-error"),title:mt},(0,v.createElement)("div",{className:"bre-effort-slider","data-top":Ye?"true":void 0,style:Ze},(0,v.createElement)("div",{className:"bre-effort-track","aria-hidden":!0}),(0,v.createElement)("div",{className:"bre-effort-fx","aria-hidden":!0},(0,v.createElement)("canvas",{ref:p,className:"bre-effort-canvas"}),(0,v.createElement)("span",{className:"bre-effort-flare"})),(0,v.createElement)("input",{ref:k,type:"range",className:"bre-effort-input",min:0,max:ie-1,step:"0.01",value:a,disabled:J,"aria-label":n("sliderEffortAria"),"aria-valuetext":Ce,onChange:m=>{let E=Number(m.currentTarget.value);F(E)},onPointerDown:m=>{m.preventDefault(),m.currentTarget.focus(),te(m.currentTarget,m.pointerId,m.clientX)},onPointerMove:m=>Q(m.currentTarget,m.pointerId,m.clientX),onPointerUp:m=>he(m.currentTarget,m.pointerId,m.clientX),onPointerCancel:m=>{m.currentTarget.hasPointerCapture(m.pointerId)&&m.currentTarget.releasePointerCapture(m.pointerId),Y()},onBlur:m=>{he(m.currentTarget)},onKeyDown:Me}),(0,v.createElement)("span",{className:"bre-effort-knob","aria-hidden":!0})),K===null?null:(0,v.createElement)("span",{className:"bre-effort-sr",role:"status"},K))),(0,v.createElement)("div",{className:"bre-menu-separator","aria-hidden":!0}),(0,v.createElement)("button",{type:"button",role:"menuitem",className:"bre-model-row",disabled:J,onClick:()=>{e.pickModel?.()}},(0,v.createElement)("span",{className:"bre-model-row-name"},Ie),(0,v.createElement)("span",{className:"bre-model-row-effort"},He),(0,v.createElement)("span",{className:"bre-row-chevron","aria-hidden":!0},"\u203A")),K===null?null:(0,v.createElement)("div",{className:"bre-model-error",role:"status"},K))}var A=require("react"),xn='section[role="group"]',Lt='button[role="menuitemradio"]';function yn(e){return e.querySelector(xn)!==null}function St(e){return Array.from(e.querySelectorAll(Lt)).filter(t=>!t.disabled&&t.style.display!=="none")}function _o(e){let t=e.getAttribute("aria-labelledby");return(t===null?null:e.ownerDocument.getElementById(t))?.textContent?.toLowerCase()??""}function bn(e,t,n=new Map){let o=l=>{n.has(l)||n.set(l,l.style.display),l.style.display="none"},r=l=>{let c=n.get(l);c!==void 0&&(l.style.display=c,n.delete(l))};for(let l of[...n.keys()])l.isConnected||n.delete(l);let f=t.trim().toLowerCase().split(/\s+/).filter(Boolean),s=Array.from(e.querySelectorAll(xn)),a=0;if(f.length===0){for(let l of[...n.keys()])r(l);for(let l of s)a+=l.querySelectorAll(Lt).length;return a}for(let l of s){let c=_o(l),g=Array.from(l.querySelectorAll(Lt)),u=0;for(let h of g){let d=(h.getAttribute("title")??"").toLowerCase(),i=(h.textContent??"").toLowerCase(),p=`${c} ${d} ${i}`;f.every(k=>p.includes(k))?(r(h),u+=1):o(h)}u>0?(r(l),a+=u):o(l)}return a}function wn({menu:e,t}){let[n,o]=(0,A.useState)(""),[r,f]=(0,A.useState)(0),s=(0,A.useRef)(null),a=(0,A.useRef)(""),l=(0,A.useRef)(new Map),c=(0,A.useCallback)(d=>{a.current=d;let i=bn(e,d,l.current);f(i)},[e]);(0,A.useEffect)(()=>()=>{bn(e,"",l.current)},[e]),(0,A.useEffect)(()=>{let d=new MutationObserver(()=>{a.current.trim().length!==0&&c(a.current)});return d.observe(e,{childList:!0,subtree:!0}),()=>{d.disconnect()}},[e,c]),(0,A.useEffect)(()=>{let d=i=>{if(a.current.trim().length===0)return;let p=i.key;if(!(p==="ArrowDown"||p==="ArrowUp")&&!(p==="Home"||p==="End"||p==="PageUp"||p==="PageDown")||i.target===s.current||i.target instanceof Node&&!e.contains(i.target))return;let M=St(e);if(M.length===0)return;let y=M.findIndex(T=>T===document.activeElement),R;p==="Home"||p==="PageUp"?R=0:p==="End"||p==="PageDown"?R=M.length-1:p==="ArrowDown"?R=y===-1?0:(y+1)%M.length:R=y===-1?M.length-1:(y-1+M.length)%M.length,i.preventDefault(),i.stopPropagation(),M[R]?.focus()};return e.addEventListener("keydown",d,!0),()=>{e.removeEventListener("keydown",d,!0)}},[e]);let g=d=>{let i=d.key;if(i==="ArrowDown"){d.preventDefault(),d.stopPropagation(),St(e)[0]?.focus();return}if(n.trim().length>0&&(i==="ArrowUp"||i==="Home"||i==="PageUp"||i==="End"||i==="PageDown")){let p=St(e);p.length>0&&(d.preventDefault(),d.stopPropagation(),p[i==="ArrowUp"||i==="End"||i==="PageDown"?p.length-1:0]?.focus());return}i==="Escape"&&n.length>0&&(d.preventDefault(),d.stopPropagation(),o(""),c(""))},u=()=>{o(""),c(""),s.current?.focus({preventScroll:!0})},h=r===0&&n.trim().length>0;return(0,A.createElement)("div",{className:"bre-model-search-box"+(h?" has-empty":""),"data-bre-search":"1"},(0,A.createElement)("div",{className:"bre-search-input-wrapper"},(0,A.createElement)("span",{className:"bre-search-icon","aria-hidden":"true"},(0,A.createElement)("svg",{viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"1.5"},(0,A.createElement)("circle",{cx:"7",cy:"7",r:"4.5"}),(0,A.createElement)("path",{d:"M10.5 10.5L14 14",strokeLinecap:"round"}))),(0,A.createElement)("input",{ref:s,type:"text",className:"bre-search-input",role:"searchbox",placeholder:t("modelSearchPlaceholder"),"aria-label":t("modelSearchPlaceholder"),value:n,spellCheck:!1,autoComplete:"off",onChange:d=>{let i=d.currentTarget.value;o(i),c(i)},onKeyDown:g}),n.length>0?(0,A.createElement)("button",{type:"button",className:"bre-search-clear",title:t("modelSearchClear"),"aria-label":t("modelSearchClear"),onClick:u},(0,A.createElement)("svg",{viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"1.5"},(0,A.createElement)("path",{d:"M4 4L12 12M12 4L4 12",strokeLinecap:"round"}))):null),h?(0,A.createElement)("div",{className:"bre-search-empty",role:"status"},t("modelSearchNoMatches")):null)}var at=require("react"),kn=require("react-dom"),vn=require("react-dom/client");function dt(){return document.body}function Rt(e,t,n){let o=(0,vn.createRoot)(e);return n?.sync===!0?(0,kn.flushSync)(()=>{o.render(t)}):o.render(t),{wrapper:e,root:o}}function Be(e){e!==void 0&&(e.root.unmount(),e.wrapper.remove())}var Re=class extends at.Component{constructor(){super(...arguments);Gt(this,"state",{error:null})}static getDerivedStateFromError(n){return{error:n instanceof Error?n.message:String(n)}}componentDidCatch(n,o){console.error("[bre] editor render failed:",n,o.componentStack)}render(){return this.state.error!==null?(0,at.createElement)("div",{style:{color:"#c00",fontSize:"11px",whiteSpace:"pre-wrap",padding:"6px"}},`${this.props.fallbackText}: ${this.state.error}`):this.props.children}};var Io=()=>{(0,En.flushSync)(()=>{window.dispatchEvent(new Event("resize"))})};function Mn(e){let{menuOf:t,t:n,refreshed:o,sliderEnabled:r,directory:f}=e,s,a,l,c=()=>{Be(a),a=void 0},g=i=>{let p=i.querySelector('section[role="group"]'),k=p?.parentElement,x=k!=null&&k.parentElement===i?k:p;if(a===void 0){let M=document.createElement("div");M.dataset.plugin=X,M.dataset.breSearch="1",i.insertBefore(M,x),a=Rt(M,(0,Ue.createElement)(Re,{fallbackText:n("modelSearchFailed"),children:o(()=>(0,Ue.createElement)(wn,{menu:i,t:n}))}),{sync:!0});return}if(a.wrapper.parentElement!==i){i.insertBefore(a.wrapper,x);return}x!==null&&a.wrapper.nextSibling!==x&&i.insertBefore(a.wrapper,x)},u=i=>{if(!r()){Be(s),s=void 0,i.classList.remove("bre-model-menu-host");for(let x of Array.from(i.children))x instanceof HTMLButtonElement&&x.getAttribute("role")==="menuitem"&&(x.style.display="");return}let p=f();if(p===void 0)return;if(s===void 0){let x=document.createElement("div");x.dataset.plugin=X,x.dataset.breSlider="1",i.insertBefore(x,i.firstChild),s=Rt(x,(0,Ue.createElement)(Re,{fallbackText:n("renderFailed"),children:o(()=>(0,Ue.createElement)(hn,{directory:p,t:n,pickModel:()=>{Array.from(i.children).find(y=>y instanceof HTMLButtonElement&&y.getAttribute("role")==="menuitem")?.click()}}))}),{sync:!0})}else(s.wrapper.parentElement!==i||i.firstChild!==s.wrapper)&&i.insertBefore(s.wrapper,i.firstChild);i.classList.add("bre-model-menu-host");let k=Array.from(i.children).filter(x=>x instanceof HTMLButtonElement&&x.getAttribute("role")==="menuitem");if(i.querySelector('[role="menuitemradio"]')!==null)s.wrapper.contains(document.activeElement)&&(i.tabIndex=-1,i.focus({preventScroll:!0})),s.wrapper.style.display="none";else{s.wrapper.style.display="";for(let x of k)x.style.display="none"}};return{reconcile:()=>{let i=t();if(i===void 0){Be(s),s=void 0,c(),l=void 0;return}let p=yn(i);p?g(i):c(),u(i),p!==l&&(l=p,(p||r())&&Io())},dispose:()=>{Be(s),s=void 0,c(),l=void 0}}}var S=e=>typeof e=="object"&&e!==null&&!Array.isArray(e);function Sn(e){let t=e.toLowerCase();return t.includes("compat")||t.includes("thinkingtokenbudget")||t.includes("vllmpriority")||t.includes("supportsmaxoutput")}function Tt(e,t){if(!S(e))return[];let n=e[t];return!S(n)||!Array.isArray(n.models)?[]:n.models.filter(S)}function Te(e,t){if(!S(e))return{};let n=e[t];if(!S(n))return{};let o=typeof n.api=="string"?n.api:void 0,r=typeof n.baseURL=="string"?n.baseURL:void 0,f=typeof n.displayName=="string"?n.displayName:void 0;return{api:o,baseURL:r,displayName:f}}var Pe=(e,t)=>typeof e[t]=="boolean";function No(e,t){if(Array.isArray(e)){for(let n of e)if(S(n)&&n.id===t)return n}}function Ao(e){if(!S(e))return{reasoning:"unknown",source:null};let t=e.supported_features;if(Array.isArray(t)&&t.includes("reasoning"))return{...le(e),reasoning:!0,source:"supported_features"};let n=e.supported_parameters;if(Array.isArray(n)&&(n.includes("reasoning")||n.includes("include_reasoning")||n.includes("reasoning_effort")))return{...le(e),reasoning:!0,source:"supported_parameters"};if(Pe(e,"supports_reasoning"))return{...le(e),reasoning:e.supports_reasoning,source:"supports_reasoning"};if(Pe(e,"supportsReasoning"))return{...le(e),reasoning:e.supportsReasoning,source:"supportsReasoning"};if(Pe(e,"can_reason"))return{...le(e),reasoning:e.can_reason,source:"can_reason"};if(Pe(e,"reasoning"))return{...le(e),reasoning:e.reasoning,source:"reasoning"};let o=e.reasoning_effort;if(o!=null&&!(typeof o=="string"&&o.trim().length===0)||e.supports_reasoning_effort===!0)return{...le(e),reasoning:!0,source:"reasoning_effort"};let r=S(e.capabilities)?e.capabilities:void 0;if(r!==void 0){let f=r.thinking;if(S(f)&&typeof f.supported=="boolean")return{...le(e),reasoning:f.supported,source:"capabilities.thinking.supported"};let s=r.effort;if(S(s)&&typeof s.supported=="boolean")return{...le(e),reasoning:s.supported,source:"capabilities.effort.supported"}}return{...le(e),reasoning:"unknown",source:null}}function le(e){let t={},n=s=>{if(!Array.isArray(s))return;let a=s.filter(l=>typeof l=="string");return a.length>0?a.map(l=>l.toLowerCase()):[]},o=S(e.architecture)?e.architecture:void 0,r=n(o?.input_modalities);if(r===void 0&&(r=n(e.input_modalities)),r===void 0){let s=S(e.modalities)?e.modalities:void 0;r=n(s?.input)}if(r===void 0){let s=e.capabilities,a=l=>Array.isArray(l)&&l.some(c=>typeof c=="string"&&c.toLowerCase()==="vision");if(a(e.supported_features)||a(s))r=["image"];else if(S(s)){let l=[];for(let c of["image_input","video_input","pdf_input","file_input"]){let g=S(s[c])?s[c]:void 0;if(g===void 0||typeof g.supported!="boolean")continue;let u=c.replace(/_input$/,"");g.supported===!0?l.push(u):l.length===0&&l.push("text")}l.length>0&&(r=l)}}r===void 0&&(Pe(e,"supports_vision")?r=e.supports_vision===!0?["image"]:[]:Pe(e,"supportsVision")&&(r=e.supportsVision===!0?["image"]:[])),r!==void 0&&(t.input=r.length===0?["text"]:r);let f=e.context_length;if(typeof f=="number"&&Number.isFinite(f)&&f>0)t.contextLength=f;else{let a=(S(e.top_provider)?e.top_provider:void 0)?.context_length;if(typeof a=="number"&&Number.isFinite(a)&&a>0)t.contextLength=a;else{let l=e.max_input_tokens;if(typeof l=="number"&&Number.isFinite(l)&&l>0)t.contextLength=l;else{let g=(S(e.limit)?e.limit:void 0)?.context;typeof g=="number"&&Number.isFinite(g)&&g>0&&(t.contextLength=g)}}}return t}function Ln(e,t){let n=No(e,t);return n===void 0?{found:!1,signal:{reasoning:"unknown",source:null}}:{found:!0,signal:Ao(n)}}function ve(e){let n=e?.value?.providers;return typeof n!="object"||n===null||Array.isArray(n)?{}:Object.fromEntries(Object.entries(n).filter(([,o])=>typeof o=="object"&&o!==null&&!Array.isArray(o)))}function Rn(e){if(!S(e))return;let t=e.providers;return S(t)?t:void 0}function Tn(e,t){for(let n of[e?.user,e?.base]){let o=Rn(n)?.[t];if(S(o)&&o.models!==void 0)return o.models}}function _t(e){return Rn(e?.user)}function It(e,t){let n=e.find(r=>r.id===t);if(n===void 0)return;let o=n.reasoningEfforts;if(o===!1)return!1;if(typeof o=="object"&&o!==null&&!Array.isArray(o))return o}function Nt(e,t){let o=e.find(f=>f.id===t)?.input;if(!Array.isArray(o))return;let r=o.filter(f=>typeof f=="string");return r.length>0?r:void 0}function At(e,t){let o=e.find(r=>r.id===t)?.compat;if(S(o))return{...o}}function Ot(e,t){let o=e.find(r=>r.id===t)?.name;return typeof o=="string"&&o.length>0?o:void 0}function Pt(e,t){let o=e.find(r=>r.id===t)?.[Oe];return typeof o=="string"&&o.length>0?o:void 0}async function Oo(e,t){try{let n=await fetch(`${Vt}?route=${encodeURIComponent(e)}`,{method:"GET"});if(!n.ok)return{reasoning:"unknown",source:null};let o=await n.json();return o?.ok?Ln(o.data,t).signal:{reasoning:"unknown",source:null}}catch{return{reasoning:"unknown",source:null}}}function Ht(e,t=()=>fe(e),n,o,r,f){return{async suggest(s,a,l,c){let g=ve((await t()).namespace),u=Te(g,s),h={api:u.api??c?.api,baseURL:u.baseURL??c?.baseURL,displayName:l??u.displayName},d=g[s]===void 0?void 0:await Oo(s,a),i=de(a,h,d);return i.efforts===void 0?{ok:!1,error:"no-suggestion"}:{ok:!0,suggestion:{efforts:i.efforts,...i.compat===void 0?{}:{compat:i.compat},...i.input===void 0?{}:{input:i.input},...i.inputSource===void 0?{}:{inputSource:i.inputSource},...i.contextWindow===void 0?{}:{contextWindow:i.contextWindow},...i.maxTokens===void 0?{}:{maxTokens:i.maxTokens},matched:i.matched,source:i.source,confidence:i.confidence,...i.endpoint===void 0?{}:{endpoint:i.endpoint}}}},commit(s,a,l){if(f?.()===!0){n?.(s,a,l.efforts,l.compat,l.input,l.defaultEffort);return}o?.(s,a,{efforts:l.efforts,...l.compat===void 0?{}:{compat:l.compat},...l.input===void 0?{}:{input:l.input},...l.clearCompatKeys===void 0?{}:{clearCompatKeys:l.clearCompatKeys},...l.defaultEffort===void 0?{}:{defaultEffort:l.defaultEffort}})},withdraw(s,a){r?.(s,a)},stageEfforts(s,a,l,c,g,u){n?.(s,a,l,c,g,u)},async writeEfforts(s,a,l,c,g,u,h){if(o!==void 0)return o(s,a,{efforts:l,...c===void 0?{}:{compat:c},...g===void 0?{}:{input:g},...u===void 0?{}:{clearCompatKeys:u},...h===void 0?{}:{defaultEffort:h}}),{ok:!0,staged:!0};let i=(await qe(e,s,[{modelId:a,efforts:l,...c===void 0?{}:{compat:c},...g===void 0?{}:{input:g},...u===void 0?{}:{clearCompatKeys:u},...h===void 0?{}:{defaultEffort:h}}],t))[0]??{ok:!1,error:"no-result"};return i.ok?{ok:!0}:i.modelNotFound===!0?{ok:!1,error:"model-not-found"}:{ok:!1,error:i.error??"conflict"}}}}async function qe(e,t,n,o=()=>fe(e),r){if(n.length===0)return[];let f=!1;for(let s=0;s<3;s++)try{let a=s===0?await o():await fe(e,{fresh:!0});if(a.namespace===void 0)return n.map(()=>({ok:!1,error:"no-namespace"}));let l=Tn(a.namespace,t);if(!Array.isArray(l))return n.map(()=>({ok:!1,modelNotFound:!0}));if(!l.every(S))return n.map(()=>({ok:!1,error:"invalid-models"}));let g=l.map(d=>d),u=[];for(let d of n){let i=g.findIndex(p=>p.id===d.modelId);if(i<0){u.push(d.modelId);continue}g[i]=Po(g[i],d,f?void 0:d.compat)}if(u.length>0)return n.map(d=>u.includes(d.modelId)?{ok:!1,modelNotFound:!0}:{ok:!1,error:"model-not-found"});if(r?.()===!0)return n.map(()=>({ok:!1,aborted:!0}));let h=await e.settings.mutate(me,[{op:"set",path:["providers",t,"models"],value:g}],a.namespace.revision);if(!h.ok){if(s===0&&h.error.code==="settings/conflict")continue;let d=h.error.code==="settings/rejected"&&Sn(h.error.message);if(!f&&d&&n.some(i=>i.compat!==void 0)){f=!0;continue}return n.map(()=>({ok:!1,error:h.error.message}))}return n.map(()=>({ok:!0}))}catch(a){return n.map(()=>({ok:!1,error:a instanceof Error?a.message:String(a)}))}return n.map(()=>({ok:!1,error:"conflict"}))}function Po(e,t,n){let o={...e},r=t.efforts!=="keep",f=t.efforts==="keep"?void 0:t.efforts;if(r)if(f===void 0)delete o.reasoningEfforts,o[ae]=!0;else if(delete o[ae],delete o[Ae],f===!1)o.reasoningEfforts=!1;else{o.reasoningEfforts={...f};let s=S(e.compat)?e.compat:{},a={...s,...n??{}};for(let l of t.clearCompatKeys??[])delete a[l];(Object.keys(s).length>0||Object.keys(a).length>0)&&(Object.keys(a).length===0?delete o.compat:o.compat=a)}return t.input!==void 0&&(t.input===null?(delete o.input,o[ke]=!0):(delete o[ke],o.input=[...t.input])),t.defaultEffort!==void 0&&(t.defaultEffort===null?delete o[Oe]:o[Oe]=t.defaultEffort),o}async function fe(e,t={}){let n=t.fresh===!0?void 0:Ho(e);if(n!==void 0)return n;let o=await e.settings.describe();return o.ok?{namespace:o.value.namespaces.find(f=>f.ns===me),writable:o.value.writable}:{namespace:void 0,writable:!1}}function Ho(e){let t=e.scope?.getSnapshot();if(!(t===void 0||t.status!=="ready")&&typeof t.revision=="number")return{namespace:{ns:me,schema:{},value:t.value,user:t.user,base:t.base,revision:t.revision,applies:"live",secrets:[]},writable:t.writable===!0}}function _n(e){let t,n,o=0,r=()=>{if(t!==void 0)return Promise.resolve();let a=o;return n??(n=fe(e.api).then(l=>{if(l.namespace===void 0){n=void 0;return}let c=new Map;for(let[g,u]of Object.entries(ve(l.namespace))){let h=Array.isArray(u.models)?u.models:[];for(let d of h){if(typeof d!="object"||d===null||Array.isArray(d))continue;let i=d.id,p=d[Oe];typeof i=="string"&&typeof p=="string"&&p.length>0&&c.set(`${g}/${i}`,p)}}a===o?t=c:n=void 0}).catch(()=>{a===o&&(n=void 0)})),n};return{of:async(a,l)=>(await r(),t?.get(`${a}/${l}`)),invalidate:()=>{o+=1,t=void 0,n=void 0}}}function Co(e){let t=e.input;return Array.isArray(t)&&t.length>0}function In(e,t=()=>!0,n={},o=0){let r=n.efforts!==!1,f=n.modalities!==!1;if(!S(e))return;let s={};for(let a of Object.keys(e)){if(!t(a))continue;let l=e[a],c=S(l)&&Array.isArray(l.models)?l.models:void 0;if(c===void 0||c.length===0||!c.every(S))continue;let g=c,u=[],h=!1;for(let d of g){let i=d.reasoningEfforts!==void 0||d[ae]===!0,p=Co(d)||d[ke]===!0;if((i||!r)&&(p||!f)){let L=Fo(d,e,a);L!==void 0?(h=!0,u.push(L)):u.push(d);continue}let k=typeof d.id=="string"?d.id:"";if(k.length===0){u.push(d);continue}let x=Te(e,a),M=typeof d.name=="string"?d.name:void 0,y=de(k,{...x,displayName:M??x.displayName});if(y.efforts===void 0){u.push(d);continue}let R={...d},T=!1;if(!i&&r&&(T=!0,R.reasoningEfforts=y.efforts,R[Ae]=o,y.compat!==void 0)){let L=S(d.compat)?d.compat:{};R.compat={...L,...y.compat}}if(!p&&f&&y.input!==void 0&&(T=!0,R.input=[...y.input]),!T){u.push(d);continue}h=!0,u.push(R)}h&&(s[a]={models:u})}return Object.keys(s).length===0?void 0:{providers:s}}function Fo(e,t,n){if(!S(e.reasoningEfforts)||e[ae]===!0)return;let o=e.compat,r=S(o)?{...o}:{};if(r.supportsDeveloperRole===void 0&&vt(Te(t,n)))return{...e,compat:{...r,supportsDeveloperRole:!1}}}function Nn(e){let t,n=()=>(t??(t=(async()=>{let r={autofill:!0,modalityAutofill:!0};try{let f=await fetch(Jt,{method:"GET"});if(!f.ok)return r;let s=await f.json();return s?.ok!==!0?r:{autofill:s.data?.autofill!==!1,modalityAutofill:s.data?.modalityAutofill!==!1}}catch{return r}})()),t),o=async()=>{try{let r=await n();if(!r.autofill)return;let f=await fe(e.api,{fresh:!0}),s=f.namespace;if(s===void 0||f.writable!==!0)return;let a=_t(s);if(a===void 0)return;let l=In(a,()=>!0,{modalities:r.modalityAutofill},s.revision);if(l===void 0)return;let c=l.providers,g=Object.entries(c).map(([h,d])=>({op:"set",path:["providers",h,"models"],value:d.models})),u=await e.api.settings.mutate(me,g,s.revision);u.ok||console.error(`[bre] idle autofill refused: ${u.error.message}`)}catch(r){console.error(`[bre] idle autofill failed: ${r instanceof Error?r.message:String(r)}`)}};return{run:()=>{o()}}}var Kt=require("react"),Vn=require("react-dom/client");var O=require("react");var _e=sn;function ze(e){let t={};for(let n of _e){if(e===void 0){t[n]={on:!1,wire:""};continue}if(e===!1){t[n]=n==="off"?{on:!0,wire:""}:{on:!1,wire:""};continue}let o=e[n];t[n]={on:o!==void 0,wire:o===null?"":typeof o=="string"?o:""}}return t}function lt(e){let t=!1,n=!1,o={};for(let r of _e){let f=e[r];if(!f.on)continue;if(r==="off"){t=!0;let a=f.wire.trim();o.off=a.length===0?null:a;continue}n=!0;let s=f.wire.trim();o[r]=s.length===0?r:s}return n?o:t?!1:void 0}function Ge(e,t){if(e===t)return!0;if(e===!1||e===void 0||t===!1||t===void 0)return!1;let n=_e.filter(r=>e[r]!==void 0),o=_e.filter(r=>t[r]!==void 0);return n.length!==o.length?!1:n.every(r=>e[r]===t[r])}function An(e,t){if(!(e===void 0||e===!1)&&!("off"in e)){if(t==="zai"||t==="deepseek")return"thinking-disabled";if(t==="qwen")return"enable-thinking-false"}}var w=require("react/jsx-runtime"),On=new Intl.NumberFormat("en-US");function ft(e){return e===void 0||e.length===0?{declared:!1,image:!1}:{declared:!0,image:e.includes("image")}}function Do(e){return e.declared?e.image?["text","image"]:["text"]:null}var Wo={"openai-completions":["thinkingTokenBudgetField","supportsThinkingTokenBudget","vllmPriority"],"openai-responses":["supportsMaxOutputTokens"]};function Ko(e){return Wo[(e??"").toLowerCase()]??[]}function Pn(e,t){let n=Ko(e);if(n.length===0)return[];let o=new Set(t===void 0?[]:Object.keys(t));return n.filter(r=>!o.has(r))}function jo(e,t){if(t!==void 0)return{clearCompatKeys:Pn(e,t)};let n=Pn(e,void 0);return n.length===0?{}:{clearCompatKeys:n}}function Hn(e,t){return e.declared?t===void 0?!1:e.image?t.includes("image"):!t.includes("image"):t===void 0}function ut({route:e,routeApi:t,routeBaseURL:n,modelId:o,modelName:r,efforts:f,input:s,compat:a,defaultEffort:l,index:c,staged:g=!1,officialInputTypes:u=!1,api:h,readOnly:d,t:i}){let[p,k]=(0,O.useState)(()=>ze(f)),[x,M]=(0,O.useState)(()=>ft(s)),[y,R]=(0,O.useState)(()=>l??""),[T,L]=(0,O.useState)(!1),[N,_]=(0,O.useState)(void 0),[G,B]=(0,O.useState)(void 0),[C,V]=(0,O.useState)(""),[J,K]=(0,O.useState)("low"),j=(0,O.useRef)(void 0),[Y,$]=(0,O.useState)(()=>a?.thinkingTokenBudgetField??""),[U,F]=(0,O.useState)(()=>a?.vllmPriority===void 0?"":String(a.vllmPriority)),[te,Q]=(0,O.useState)(()=>a?.supportsMaxOutputTokens===void 0?"":String(a.supportsMaxOutputTokens)),he=(0,O.useRef)(a),[Me,re]=(0,O.useState)(void 0),[Xe,gt]=(0,O.useState)(void 0),[Ie,He]=(0,O.useState)(void 0),ie=(0,O.useRef)(!1),Ce=(0,O.useRef)(f),Ye=(0,O.useRef)(s),Qe=(0,O.useRef)(l);(0,O.useEffect)(()=>{Ge(Ce.current,f)||(Ce.current=f,ie.current||k(ze(f))),Ye.current!==s&&(Ye.current=s,ie.current||M(ft(s))),Qe.current!==l&&(Qe.current=l,ie.current||R(l??"")),JSON.stringify(he.current??null)!==JSON.stringify(a??null)&&(he.current=a,ie.current||($(a?.thinkingTokenBudgetField??""),F(a?.vllmPriority===void 0?"":String(a.vllmPriority)),Q(a?.supportsMaxOutputTokens===void 0?"":String(a.supportsMaxOutputTokens))))},[f,s,a,l]);let Ze=()=>{let b={};Y!==""&&(b.thinkingTokenBudgetField=Y);let W=U.trim();return W!==""&&/^-?\d+$/.test(W)&&(b.vllmPriority=Number.parseInt(W,10)),te==="true"?b.supportsMaxOutputTokens=!0:te==="false"&&(b.supportsMaxOutputTokens=!1),Object.keys(b).length===0?void 0:b},mt=()=>{let b=Ze();return JSON.stringify(b??null)!==JSON.stringify({...a?.thinkingTokenBudgetField===void 0?{}:{thinkingTokenBudgetField:a.thinkingTokenBudgetField},...a?.vllmPriority===void 0?{}:{vllmPriority:a.vllmPriority},...a?.supportsMaxOutputTokens===void 0?{}:{supportsMaxOutputTokens:a.supportsMaxOutputTokens}})},m=_e.filter(b=>p[b].on),E=y===(l??"")?void 0:y===""?null:y,I=!Ge(lt(p),f)||!Hn(x,s)||mt()||E!==void 0,P=(0,O.useRef)(void 0),H=()=>{ie.current=!0,B(void 0),V(""),K("low"),re(void 0)},D=(b,W,z)=>{let ye=lt(b),we=ye===void 0&&f===void 0?"keep":ye,ht=Hn(W,s)?void 0:Do(W),Ut=Ze(),qt=j.current,Se=qt!==void 0?{...qt,...Ut??{}}:Ut;a?.supportsThinkingTokenBudget===!0&&a?.thinkingTokenBudgetField===void 0&&Se?.thinkingTokenBudgetField===void 0&&(t??"").toLowerCase()==="openai-completions"&&(Se={...Se??{},thinkingTokenBudgetField:"thinking_token_budget"});let bt=z===(l??"")?void 0:z===""?null:z,zt=JSON.stringify([we,ht,Se??null,bt??null]);P.current!==zt&&(P.current=zt,h.commit(e,o,{efforts:we,...Se===void 0?{}:{compat:Se},...ht===void 0?{}:{input:ht},...jo(t,Se),...bt===void 0?{}:{defaultEffort:bt}}))},q=(b,W)=>{H();let z=!W&&y===b?"":y;z!==y&&R(z),k(ye=>{let we={...ye,[b]:{...ye[b],on:W}};return W&&b!=="off"&&we[b].wire.trim().length===0&&(we[b]={...we[b],wire:b}),D(we,x,z),we}),_(void 0)},ce=(b,W)=>{H(),k(z=>{let ye={...z,[b]:{...z[b],wire:W}};return D(ye,x,y),ye}),_(void 0)},pe=b=>{H();let W={declared:!0,image:b};M(W),D(p,W,y),_(void 0)},ge=()=>{H();let b={declared:!1,image:!1};M(b),D(p,b,y),_(void 0)},be=b=>{H(),$(b),D(p,x,y),_(void 0)},se=b=>{H(),F(b),D(p,x,y),_(void 0)},Ne=b=>{H(),Q(b),D(p,x,y),_(void 0)},Z=b=>{H(),R(b),D(p,x,b),_(void 0)},xe=b=>{H();let W=ze(b.efforts);k(W);let z=b.input===void 0?x:ft(b.input);b.input!==void 0&&M(z),B(b.efforts),V(b.source),K(b.confidence),j.current=b.compat,re(b.inputSource),gt(b.contextWindow),He(b.maxTokens),_({kind:"info",text:i("appliedHint",{source:b.source,confidence:i("confidence_"+b.confidence)})}),D(W,z,y)},et=async()=>{L(!0),_(void 0);try{let b=g?await h.suggest(e,o,r,{...t===void 0?{}:{api:t},...n===void 0?{}:{baseURL:n}}):await h.suggest(e,o,r);if(!b.ok){_({kind:"error",text:b.error==="no-suggestion"?i("noSuggestion"):b.error});return}xe(b.suggestion)}catch(b){_({kind:"error",text:i("writeError",{message:String(b)})})}finally{L(!1)}},Fe=()=>{ie.current=!1,h.withdraw(e,o),k(ze(f)),M(ft(s)),R(l??""),$(a?.thinkingTokenBudgetField??""),F(a?.vllmPriority===void 0?"":String(a.vllmPriority)),Q(a?.supportsMaxOutputTokens===void 0?"":String(a.supportsMaxOutputTokens)),B(void 0),V(""),K("low"),j.current=void 0,re(void 0),gt(void 0),He(void 0),_(void 0),P.current=void 0},tt=j.current?.thinkingFormat??de(o,{...t===void 0?{}:{api:t},...n===void 0?{}:{baseURL:n}}).compat?.thinkingFormat,Bt=An(f,tt),ne=d||T;return(0,w.jsxs)("div",{className:"bre-effort-editor","data-plugin":X,children:[(0,w.jsxs)("div",{className:"bre-effort-head",children:[(0,w.jsx)("span",{className:"bre-effort-title",children:i("reasoningEffort")}),(0,w.jsx)("button",{type:"button",className:"bre-link-button",disabled:ne,onClick:()=>{et()},children:i("autoAdapt")})]}),(0,w.jsx)("div",{className:"bre-effort-grid",children:_e.map(b=>{let W=p[b];return(0,w.jsxs)("label",{className:"bre-effort-row",children:[(0,w.jsx)("input",{type:"checkbox",checked:W.on,disabled:ne,"aria-label":i("level_"+b)+" "+String(c+1),onChange:z=>{q(b,z.target.checked)}}),(0,w.jsx)("span",{className:"bre-effort-level",children:i("level_"+b)}),W.on?(0,w.jsx)("input",{type:"text",className:"bre-effort-wire",value:W.wire,disabled:ne,placeholder:i("wirePlaceholder"),"aria-label":i("level_"+b)+" "+i("wireValue"),onChange:z=>{ce(b,z.target.value)}}):(0,w.jsx)("span",{className:"bre-effort-empty"})]},b)})}),m.length>0?(0,w.jsxs)("div",{className:"bre-modality",children:[(0,w.jsx)("span",{className:"bre-effort-title",children:i("defaultEffortLabel")}),(0,w.jsxs)("label",{className:"bre-modality-row",children:[(0,w.jsxs)("select",{className:"bre-select",disabled:ne,"aria-label":i("defaultEffortLabel")+" "+String(c+1),value:y,onChange:b=>{Z(b.target.value)},children:[(0,w.jsx)("option",{value:"",children:i("defaultEffortUnset")}),(y!==""&&!m.includes(y)?[...m,y]:m).map(b=>(0,w.jsx)("option",{value:b,children:i("level_"+b)},b))]}),y!==""?(0,w.jsx)("button",{type:"button",className:"bre-link-button bre-modality-clear",disabled:ne,onClick:()=>{Z("")},children:i("clearDefaultEffort")}):null]}),(0,w.jsx)("p",{className:"bre-modality-note",children:i("defaultEffortHint")})]}):null,u?null:(0,w.jsxs)("div",{className:"bre-modality",children:[(0,w.jsx)("span",{className:"bre-effort-title",children:i("inputModality")}),(0,w.jsxs)("label",{className:"bre-modality-row",children:[(0,w.jsx)("input",{type:"checkbox",checked:x.declared&&x.image,disabled:ne,"aria-label":i("modalityImage")+" "+String(c+1),onChange:b=>{pe(b.target.checked)}}),(0,w.jsx)("span",{className:"bre-effort-level",children:i("modalityImage")}),x.declared?(0,w.jsx)("button",{type:"button",className:"bre-link-button bre-modality-clear",disabled:ne,onClick:ge,children:i("clearDeclaration")}):null]}),x.declared?null:(0,w.jsx)("p",{className:"bre-modality-note",children:i("modalityInherit")})]}),(t??"").toLowerCase()==="openai-completions"?(0,w.jsxs)("div",{className:"bre-compat",children:[(0,w.jsx)("span",{className:"bre-effort-title",children:i("compatTitle")}),(0,w.jsxs)("label",{className:"bre-compat-row",children:[(0,w.jsx)("span",{className:"bre-compat-label",children:i("budgetFieldLabel")}),(0,w.jsxs)("select",{className:"bre-select",disabled:ne,"aria-label":i("budgetFieldLabel")+" "+String(c+1),value:Y,onChange:b=>{be(b.target.value)},children:[(0,w.jsx)("option",{value:"",children:i("budgetUnset")}),(0,w.jsx)("option",{value:"thinking_token_budget",children:"thinking_token_budget"}),(0,w.jsx)("option",{value:"thinking_budget",children:"thinking_budget"}),(0,w.jsx)("option",{value:"thinking_budget_tokens",children:"thinking_budget_tokens"})]}),(0,w.jsx)("span",{className:"bre-compat-hint",children:i("budgetFieldHint")})]}),(0,w.jsxs)("div",{className:"bre-compat-row",children:[(0,w.jsxs)("label",{className:"bre-compat-field",children:[(0,w.jsx)("span",{className:"bre-compat-label",children:i("priorityLabel")}),(0,w.jsx)("input",{type:"text",inputMode:"numeric",className:"bre-text-input",value:U,disabled:ne,placeholder:i("priorityPlaceholder"),"aria-label":i("priorityLabel")+" "+String(c+1),onChange:b=>{se(b.target.value)}})]}),(0,w.jsx)("span",{className:"bre-compat-hint",children:i("priorityHint")}),U.trim()!==""&&!/^-?\d+$/.test(U.trim())?(0,w.jsx)("p",{className:"bre-effort-note bre-error",children:i("priorityInvalid")}):null]}),a?.supportsThinkingTokenBudget===!0&&a?.thinkingTokenBudgetField===void 0?(0,w.jsx)("p",{className:"bre-effort-note",children:i("aliasMigrated")}):null]}):null,(t??"").toLowerCase()==="openai-responses"?(0,w.jsxs)("div",{className:"bre-compat",children:[(0,w.jsx)("span",{className:"bre-effort-title",children:i("compatTitle")}),(0,w.jsxs)("label",{className:"bre-compat-row",children:[(0,w.jsx)("span",{className:"bre-compat-label",children:i("maxOutputLabel")}),(0,w.jsxs)("select",{className:"bre-select",disabled:ne,"aria-label":i("maxOutputLabel")+" "+String(c+1),value:te,onChange:b=>{Ne(b.target.value)},children:[(0,w.jsx)("option",{value:"",children:i("maxOutputUnset")}),(0,w.jsx)("option",{value:"true",children:i("maxOutputOn")}),(0,w.jsx)("option",{value:"false",children:i("maxOutputOff")})]}),(0,w.jsx)("span",{className:"bre-compat-hint",children:i("maxOutputHint")})]})]}):null,g?(0,w.jsx)("p",{className:"bre-effort-note",children:i("stagedHint")}):null,f===!1?(0,w.jsx)("p",{className:"bre-effort-note",children:i("reasoningDisabled")}):null,Bt===void 0?null:(0,w.jsx)("p",{className:"bre-effort-note",children:i(Bt==="thinking-disabled"?"defaultRiskDisabled":"defaultRiskQwen")}),lt(p)===void 0&&f!==void 0?(0,w.jsx)("p",{className:"bre-effort-note",children:i("bareHint")}):null,G!==void 0?(0,w.jsxs)("div",{className:"bre-suggestion",children:[(0,w.jsx)("p",{className:"bre-effort-note",children:i("appliedHint",{source:C,confidence:i("confidence_"+J)})}),Me===void 0?null:(0,w.jsx)("p",{className:"bre-effort-note",children:i(Me==="endpoint"?"inputHintEndpoint":Me==="knowledge"?"inputHintKnowledge":"inputHintHeuristic")}),Xe===void 0&&Ie===void 0?null:(0,w.jsxs)("div",{className:"bre-reference",children:[(0,w.jsx)("span",{className:"bre-reference-title",children:i("referenceTitle")}),(0,w.jsxs)("span",{className:"bre-reference-values",children:[Xe===void 0?null:(0,w.jsxs)("span",{children:[i("contextWindowLabel")," ",(0,w.jsx)("b",{children:On.format(Xe)})]}),Ie===void 0?null:(0,w.jsxs)("span",{children:[i("maxTokensLabel")," ",(0,w.jsx)("b",{children:On.format(Ie)})]})]})]})]}):null,N===void 0?null:(0,w.jsx)("p",{className:"bre-effort-message bre-"+N.kind,role:N.kind==="error"?"alert":"status",children:N.text}),I?(0,w.jsx)("p",{className:"bre-effort-message bre-info",role:"status",children:i("pendingSave")}):null,I?(0,w.jsx)("p",{className:"bre-effort-note",children:i("pendingHint")}):null,(0,w.jsx)("div",{className:"bre-effort-actions",children:(0,w.jsx)("button",{type:"button",className:"bre-secondary-button",disabled:ne||!I,onClick:Fe,children:i("reset")})})]})}function $e(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var Ct="__breLedgerDocument";function Wn(){let e=globalThis;return e[Ct]??(e[Ct]=`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`)}var ct="bre:held-writes:v1";function Ft(){try{return typeof sessionStorage>"u"?void 0:sessionStorage}catch{return}}function ue(e){let t=Ft();if(t!==void 0)try{if(e.pending.size===0&&e.queued.size===0){t.removeItem(ct);return}let n={document:Wn(),committed:[...e.committing].filter(o=>e.queued.has(o)),pending:[...e.pending].map(([o,r])=>[o,[...r]]),queued:[...e.queued].map(([o,r])=>[o,[...r]])};t.setItem(ct,JSON.stringify(n))}catch{}}function Cn(e,t){if(!Array.isArray(e))return;let n=[];for(let o of e){if(!Array.isArray(o)||o.length!==2)return;let[r,f]=o;if(typeof r!="string"||!Array.isArray(f))return;let s=[];for(let a of f){if(!Array.isArray(a)||a.length!==2)return;let[l,c]=a;if(typeof l!="string"||!S(c)||t!==void 0&&!t(c))return;s.push([l,c])}n.push([r,s])}return n}function Bo(e){let t=Ft();if(t!==void 0)try{let n=t.getItem(ct);if(n===null)return;let o=JSON.parse(n);if(o.document!==Wn())return;let r=Cn(o.pending),f=Cn(o.queued,Zo);if(r===void 0||f===void 0)return;let s=Array.isArray(o.committed)?o.committed.filter(a=>typeof a=="string"):[];for(let[a,l]of r)e.pending.set(a,new Map(l));for(let[a,l]of f)s.includes(a)&&(e.queued.set(a,new Map(l)),e.committing.add(a))}catch{}}function Kn(e,t){(async()=>{try{await Dt(t,e),await Wt(t,e)}catch(n){console.error(`[bre] teardown flush failed: ${n instanceof Error?n.message:String(n)}`)}})()}function jn(e,t){(async()=>{try{await Dt(t,e,!0),await Wt(t,e,!0)}catch(n){console.error(`[bre] unload flush failed: ${n instanceof Error?n.message:String(n)}`)}finally{try{Ft()?.removeItem(ct)}catch{}}})()}function Bn(){let e={mounted:new Map,describePromise:void 0,pending:new Map,missedScans:new Map,queued:new Map,editing:void 0,flushing:!1,flushFailures:0,nextFlushAt:0,committing:new Set,signalsUnavailable:!1,submitWired:new WeakSet,cancelWired:new WeakSet};return Bo(e),e}async function Uo(e,t){if(!t.flushing){t.flushing=!0;try{let n=await Dt(e,t),o=await Wt(e,t);n||o?Fn(e,t):(t.flushFailures=0,t.nextFlushAt=0)}catch(n){Fn(e,t),console.error(`[bre] idle flush failed: ${n instanceof Error?n.message:String(n)}`)}finally{t.flushing=!1}try{e.onIdle?.()}catch(n){console.error(`[bre] idle hook failed: ${n instanceof Error?n.message:String(n)}`)}}}function Fn(e,t){t.flushFailures+=1;let n=Math.min(2**t.flushFailures*500,3e4);t.nextFlushAt=Date.now()+n,e.onBackoff?.(n)}function qo(e){return e.queued.size>0||e.pending.size>0}function pt(e,t,n,o,r,f,s){try{let a=e.pending.get(t);if(o===void 0){if(a===void 0)return;a.delete(n),a.size===0&&e.pending.delete(t);return}e.pending.set(t,(a??new Map).set(n,{efforts:o,...r===void 0?{}:{compat:r},...f===void 0?{}:{input:f},...s===void 0?{}:{defaultEffort:s}}))}finally{ue(e)}}function zo(e,t,n,o){e.queued.set(t,(e.queued.get(t)??new Map).set(n,o)),ue(e)}function Go(e,t,n){let o=e.pending.get(t);o!==void 0&&(o.delete(n),o.size===0&&e.pending.delete(t),ue(e))}function Vo(e,t,n){let o=e.queued.get(t);o!==void 0&&(o.delete(n),o.size===0&&e.queued.delete(t),ue(e))}function Jo(e,t,n){Go(e,t,n),Vo(e,t,n)}function $o(e,t){e.queued.delete(t),e.pending.delete(t),e.missedScans.delete(t),e.committing.delete(t),ue(e)}function Xo(e,t,n){if(t===void 0)return null;let f=t[ae]!==!0&&t.reasoningEfforts!==void 0&&typeof t[Ae]=="number"||t[ae]!==!0&&n?.efforts!==void 0&&Yo(t.reasoningEfforts,n.efforts)?!1:t.reasoningEfforts!==void 0||t[ae]===!0||e.efforts==="keep",a=t[ke]!==!0&&n?.input!==void 0&&Qo(t.input,n.input)?!1:Array.isArray(t.input)&&t.input.length>0||t[ke]===!0,l=f?"keep":e.efforts,c=a?void 0:e.input,g=e.defaultEffort;return l==="keep"&&c===void 0&&g===void 0?null:{efforts:l,...e.compat===void 0?{}:{compat:e.compat},...c===void 0?{}:{input:c},...g===void 0?{}:{defaultEffort:g}}}function Yo(e,t){if(e===t)return!0;if(!S(e)||!S(t))return!1;let n=Object.keys(t);if(Object.keys(e).length!==n.length)return!1;let o=t;return n.every(r=>e[r]===o[r])}function Qo(e,t){if(!Array.isArray(e)||e.length!==t.length)return!1;let n=new Set(t);return e.every(o=>typeof o=="string"&&n.has(o))}function Zo(e){if(!S(e))return!1;let t=e.efforts;if(t!==!1&&t!=="keep"&&!S(t))return!1;let n=e.clearCompatKeys;return n===void 0||Array.isArray(n)&&n.every(o=>typeof o=="string")}async function er(e,t,n,o,r=!1){let f=await e.describeNamespace(),s=ve(f.namespace),a=[];for(let[u,h]of[...o]){let d=Tt(s,n).find(M=>M.id===u);if(d===void 0||t.pending.get(n)?.get(u)!==h)continue;let i=Te(s,n),p=typeof d.name=="string"?d.name:void 0,k=de(u,p===void 0?i:{...i,displayName:p}),x=Xo(h,d,{...k.efforts===void 0?{}:{efforts:k.efforts},...k.input===void 0?{}:{input:k.input}});if(x===null){pt(t,n,u,void 0);continue}a.push({modelId:u,efforts:x.efforts,...x.compat===void 0?{}:{compat:x.compat},...x.input===void 0?{}:{input:x.input},...x.defaultEffort===void 0?{}:{defaultEffort:x.defaultEffort}})}if(a.length===0)return!1;let l=!1,c=await qe(e.api,n,a,()=>l?e.describeNamespace():(l=!0,Promise.resolve(f)),r?void 0:zn),g=!1;return a.forEach((u,h)=>{let d=c[h];if(d?.aborted!==!0){if(d?.ok===!0||d?.modelNotFound===!0){pt(t,n,u.modelId,void 0);return}g=!0,console.error(`[bre] staged flush write failed for "${n}"/"${u.modelId}": ${d?.error??"unknown"}`)}}),g}async function Dt(e,t,n=!1){for(let s of[...t.committing])t.queued.has(s)||t.committing.delete(s);if(![...t.queued.keys()].some(s=>t.committing.has(s)||t.signalsUnavailable)||(await e.describeNamespace()).writable!==!0)return ue(t),!1;let f=!1;for(let[s,a]of[...t.queued]){if(!t.committing.has(s)&&!t.signalsUnavailable)continue;let c=[...a].map(([h,d])=>({modelId:h,efforts:d.efforts,...d.compat===void 0?{}:{compat:d.compat},...d.input===void 0?{}:{input:d.input},...d.clearCompatKeys===void 0?{}:{clearCompatKeys:d.clearCompatKeys},...d.defaultEffort===void 0?{}:{defaultEffort:d.defaultEffort}})),g=await qe(e.api,s,c,void 0,n?void 0:zn),u=!1;c.forEach((h,d)=>{let i=g[d];if(i?.aborted===!0){u=!0;return}if(i?.ok===!0||i?.modelNotFound===!0){a.delete(h.modelId);return}console.error(`[bre] held write failed for "${s}"/"${h.modelId}": ${i?.error??"unknown"}`)}),a.size===0?(t.queued.delete(s),t.committing.delete(s)):u||(f=!0)}return ue(t),f}async function Wt(e,t,n=!1){if(t.pending.size===0)return!1;let o=await e.describeNamespace();if(o.writable!==!0)return!1;let r=ve(o.namespace),f=!1;for(let[s,a]of[...t.pending]){if(a.size===0){t.pending.delete(s);continue}$e(r,s)&&await er(e,t,s,a,n)&&(f=!0)}return ue(t),f}function Je(e,t){for(let n of t){let o=Array.from(e.querySelectorAll("input[aria-label], select[aria-label]")).find(r=>(r.getAttribute("aria-label")??"").startsWith(n));if(o!==void 0&&o.value.trim().length>0)return o.value.trim()}return""}function Un(e){return e.closest('[class*="editor"], [class*="rowCard"], [class*="addCard"]')??void 0}function tr(e){let t=e.closest('[class*="modelEntry"]');if(t===null){let o=Un(e);if(o===void 0)return;let r=Array.from(o.querySelectorAll('[class*="modelAdvanced"]'));return r.find(f=>f.offsetParent!==null)??r[0]}let n=Array.from(t.querySelectorAll('[class*="modelAdvanced"]'));return n.find(o=>o.offsetParent!==null)??n[0]}function nr(e){return e.querySelector('[class*="modelInputTypes"]')!==null}function or(e){return e.querySelector(`[data-plugin="${X}"]`)!==null}function rr(e,t){return e.route===t.route&&e.routeDisplayName===t.routeDisplayName&&e.routeApi===t.routeApi&&e.routeBaseURL===t.routeBaseURL&&e.modelId===t.modelId&&e.modelName===t.modelName&&e.index===t.index&&e.readOnly===t.readOnly&&e.defaultEffort===t.defaultEffort&&e.staged===t.staged&&e.officialInputTypes===t.officialInputTypes&&Ge(e.efforts,t.efforts)&&sr(e.input,t.input)&&ir(e.compat,t.compat)}function ir(e,t){return e===t?!0:e===void 0||t===void 0?!1:JSON.stringify({...e},Object.keys({...e,...t}).sort())===JSON.stringify({...t},Object.keys({...e,...t}).sort())}function sr(e,t){if(e===t)return!0;if(e===void 0||t===void 0)return!1;let n=new Set(e);return e.length===t.length&&t.every(o=>n.has(o))}function ar(e,t){return Array.from(e.querySelectorAll("input[aria-label], select[aria-label]")).some(n=>t.some(o=>(n.getAttribute("aria-label")??"").startsWith(o)))}function Ve(e,t,n){let o=e.querySelector('[class*="editorRoute"]')?.textContent?.trim();if(o!==void 0&&o.length>0&&$e(t,o))return{route:o,staged:!1};if(ar(e,n.routeId)){let s=Je(e,n.routeId);return s.length>0&&!$e(t,s)?{route:s,staged:!0}:void 0}let r=e.querySelector('[class*="editorTitle"], [class*="rowName"]')?.textContent?.trim();if(r===void 0||r.length===0)return;let f=Object.entries(t).find(([,s])=>s.displayName===r);if(f!==void 0)return{route:f[0],staged:!1};if($e(t,r))return{route:r,staged:!1}}function dr(e,t){let n=e.querySelector('[class*="editorActions"]');if(n===null)return;let o=Array.from(n.querySelectorAll("button"));if(o.length<2)return;let r=(u,h)=>(u.textContent??"").trim()===h,f=n.querySelector('[class*="primaryButton"]'),s=n.querySelector('[class*="secondaryButton"]');if(f!==null&&s!==null)return{submit:f,cancel:s};let a=[...o].reverse().find(u=>t.apply.some(h=>r(u,h))),l=[...o].reverse().find(u=>t.cancel.some(h=>r(u,h)));if(a!==void 0&&l!==void 0)return{submit:a,cancel:l};let c=o[o.length-1],g=o[o.length-2];if(!(c===void 0||g===void 0))return{submit:c,cancel:g}}function Dn(e,t,n){t.has(e)||(t.add(e),e.addEventListener("click",n,{capture:!0}))}function qn(e){return e.querySelector('[class*="editorActions"]')??e.querySelector('[class*="modelEntry"]')??void 0}function zn(){return qn(dt())!==void 0}function Gn(e,t,n){if(!e.isConnected)return;let o=t.labels(),r=qn(e)!==void 0,f=Array.from(e.querySelectorAll("button[aria-label]")).some(a=>o.capacity.some(l=>(a.getAttribute("aria-label")??"").startsWith(l)));if(!r){if(n.mounted.size>0){for(let[,l]of n.mounted)l.editor.unmount();n.mounted.clear()}let a=n.editing;n.editing=!1,(a!==!1||qo(n)&&Date.now()>=n.nextFlushAt)&&Uo(t,n).catch(l=>{console.error(`[bre] idle pass failed: ${l instanceof Error?l.message:String(l)}`)});return}if(n.editing=!0,!f)return;n.describePromise??(n.describePromise=t.describeNamespace());let s=a=>{if(!e.isConnected)return;let l=a.namespace,c=ve(l),g=[];for(let u of o.capacity){let h=Array.from(e.querySelectorAll("button[aria-label]")).filter(d=>(d.getAttribute("aria-label")??"").startsWith(u));for(let d of h){let i=tr(d);if(i===void 0)continue;let p=Un(d);if(p===void 0)continue;let k=d.closest('[class*="modelEntry"]')??p,x=Je(k,o.modelId);x.length!==0&&g.push({container:i,row:k,modelId:x,card:p})}}for(let[u,h]of n.mounted)g.some(d=>d.container===u)||(h.editor.unmount(),n.mounted.delete(u));if(n.pending.size>0){let u=new Map;for(let d of g){let i=Ve(d.card,c,o);if(i===void 0)continue;let p=u.get(i.route);p===void 0&&u.set(i.route,p=new Set),p.add(d.modelId)}let h=new Map;for(let[d,i]of n.pending){if(!$e(c,d))continue;let p=u.get(d),k=[...i.keys()].filter(x=>!p?.has(x));k.length>0&&h.set(d,new Set(k))}for(let[d,i]of h){let p=n.missedScans.get(d);if(p!==void 0)for(let k of i)p.has(k)&&(pt(n,d,k,void 0),p.delete(k))}n.missedScans=h}g.forEach((u,h)=>{let d=Ve(u.card,c,o);if(d===void 0)return;let{route:i,staged:p}=d,k=c[i]??{},x=Tt(c,i),M=new Set(x.map(F=>F.id)),y=p||!M.has(u.modelId),R=y?n.pending.get(i)?.get(u.modelId)?.efforts:void 0,T=y?R==="keep"?void 0:R:It(x,u.modelId),L=y?n.pending.get(i)?.get(u.modelId)?.input:Nt(x,u.modelId),N=y?n.pending.get(i)?.get(u.modelId)?.compat:At(x,u.modelId),_=y?n.pending.get(i)?.get(u.modelId)?.defaultEffort??void 0:Pt(x,u.modelId),G=y?Je(u.row,o.modelName):"",B=y?G.length>0?G:void 0:Ot(x,u.modelId),C=p?Je(u.card,o.apiProtocol):"",V=p?Je(u.card,o.baseUrl):"",J=dr(u.card,o);J===void 0?n.signalsUnavailable=!0:(n.signalsUnavailable=!1,Dn(J.submit,n.submitWired,()=>{let F=Ve(u.card,c,o)?.route??i;n.committing.add(F),ue(n)}),Dn(J.cancel,n.cancelWired,()=>{let F=Ve(u.card,c,o)?.route??i;$o(n,F)}));let K=p&&C.length>0?C:typeof k.api=="string"?k.api:void 0,j=p&&V.length>0?V:typeof k.baseURL=="string"?k.baseURL:void 0,Y={route:i,routeDisplayName:p?i:typeof k.displayName=="string"?k.displayName:i,...K===void 0?{}:{routeApi:K},...j===void 0?{}:{routeBaseURL:j},modelId:u.modelId,...B===void 0?{}:{modelName:B},...T===void 0?{}:{efforts:T},...L===void 0?{}:{input:L},...N===void 0?{}:{compat:N},..._===void 0?{}:{defaultEffort:_},index:h,staged:y,officialInputTypes:nr(u.container),api:Ht(t.api,void 0,(F,te,Q,he,Me,re)=>{pt(n,F,te,Q,he,Me,re)},(F,te,Q)=>{zo(n,F,te,Q)},F=>{Jo(n,F,u.modelId)},()=>(Ve(u.card,c,o)?.staged??p)||!M.has(u.modelId)),readOnly:a.writable!==!0,t:t.t},$=n.mounted.get(u.container);if($!==void 0){rr($.props,Y)||($.props=Y,$.editor.render(Y));return}if(or(u.container))return;let U=t.mount(u.container,Y);n.mounted.set(u.container,{editor:U,props:Y})})};n.describePromise.then(s,()=>{n.describePromise=void 0})}var lr="settings.models",Ee={capacity:["modelAdvanced","Model options","Capacities"],modelId:["modelId","Model ID"],modelName:["modelName","Display name"],routeId:["customRoute","Provider ID"],baseUrl:["baseUrl","Base URL"],apiProtocol:["customApi","API protocol"],apply:["apply","Apply"],cancel:["cancel","Cancel"]};function Jn(e){let{ctx:t,api:n,t:o,onIdle:r,refreshed:f}=e,s=()=>{let T=t.locale.bind(lr),L=([N,..._])=>{let G=T(N);return G===N||G.trim()===""?_:[G,..._]};return{capacity:L(Ee.capacity),modelId:L(Ee.modelId),modelName:L(Ee.modelName),routeId:L(Ee.routeId),baseUrl:L(Ee.baseUrl),apiProtocol:L(Ee.apiProtocol),apply:L(Ee.apply),cancel:L(Ee.cancel)}},a=120,l=Bn(),c,g,u,h,d=!1,i={api:n,describeNamespace:()=>fe(n),t:o,labels:s,onIdle:r,onBackoff:T=>{p(T)},mount(T,L){let N=document.createElement("div");N.className="bre-effort-slot",N.dataset.plugin=X,T.appendChild(N);let _=(0,Vn.createRoot)(N),G=B=>{_.render((0,Kt.createElement)(Re,{fallbackText:o("renderFailed"),children:f(()=>(0,Kt.createElement)(ut,B))}))};return G(L),{unmount:()=>{_.unmount()},render:G}}};function p(T){d||g!==void 0||(g=window.setTimeout(()=>{g=void 0,k()},T))}function k(){d||c!==void 0||(c=window.setTimeout(()=>{c=void 0,h?.(),Gn(dt(),i,l)},a))}let x=T=>{d||u!==void 0||(h=T,T(),u=new MutationObserver(()=>{T(),k()}),u.observe(document.body,{childList:!0,subtree:!0}),k())},M=()=>{d=!0,c!==void 0&&(window.clearTimeout(c),c=void 0),g!==void 0&&(window.clearTimeout(g),g=void 0),u?.disconnect(),u=void 0};return{state:l,labels:s,start:x,stopObserver:M,teardown:()=>{M(),Kn(l,i);for(let[,T]of l.mounted)T.editor.unmount();l.mounted.clear()},flushOnUnload:()=>{jn(l,i)},schedule:k}}function fr(e,t){let n=e?.list?.getSnapshot(),o=n?.current;if(typeof o=="string"&&o.length>0)return o;let r=t?.adapter?.current?.getSnapshot?.()?.key;if(typeof r=="string"&&r.length>0)return r;for(let[f,s]of Object.entries(n?.byId??{}))if(!(s===void 0||(s.retainedBy?.mainView??0)<=0))return typeof s.id=="string"&&s.id.length>0?s.id:f}function $n(e){let t,n=new Map,o=(s,a)=>{for(let[l,c]of n){if(l===a)continue;let g;try{g=s.directoryFor(c.sessionId)===l}catch{g=!1}g||(c.restore(),n.delete(l))}};return{ensure:()=>{let s=e.ctx,a=s.get?.("sessions"),l=s.get?.("uiSession"),c=s.get?.("modelDirectories"),g=fr(a,l);if(!(g===void 0||c===void 0))try{let u=c.directoryFor(g);return o(c,u),t!==void 0&&t.sessionId===g&&t.directory===u||(n.has(u)||n.set(u,{sessionId:g,restore:pn(u,{configuredEffort:e.configuredEffort})}),t={sessionId:g,directory:u}),u}catch{t=void 0;return}},dispose:()=>{for(let[,s]of n)s.restore();n.clear()}}}function jt(e=document){let t=e.querySelector("[data-composer-card]"),n=t??e;for(let r of Array.from(n.querySelectorAll('button[aria-haspopup="menu"][aria-controls]'))){let f=r.getAttribute("aria-controls");if(f===null||f.length===0)continue;let s=e.getElementById(f);if(s!==null&&s.getAttribute("role")==="menu")return s}let o=Array.from(t===null?e.querySelectorAll('[role="menu"]'):t.querySelectorAll('[role="menu"]'));for(let r of o)if(r.previousElementSibling?.matches('button[aria-haspopup="menu"]'))return r}function Xn(){return jt()}var ee=require("react");function Yn(e){let{t}=e,n=(0,ee.useSyncExternalStore)(rt,oe),o=()=>{Zt(!n)};return(0,ee.createElement)("div",{className:"bre-slider-setting"},(0,ee.createElement)("div",{className:"bre-slider-setting-row"},(0,ee.createElement)("div",{className:"bre-slider-setting-copy"},(0,ee.createElement)("div",{className:"bre-slider-setting-title"},t("sliderToggleTitle")),(0,ee.createElement)("div",{className:"bre-slider-setting-description"},t("sliderToggleDescription"))),(0,ee.createElement)("div",{className:"bre-slider-setting-control"},(0,ee.createElement)("span",{className:"bre-slider-setting-state"},t(n?"settingOn":"settingOff")),(0,ee.createElement)("button",{type:"button",role:"switch","aria-label":t("sliderToggleAria"),"aria-checked":n,className:"bre-slider-setting-switch"+(n?" is-on":""),onClick:o},(0,ee.createElement)("span",{className:"bre-slider-setting-switch-knob","aria-hidden":!0})))))}function Qn(e,t){let n=e,o=n.slots?.inject("settings.models.footer",()=>{n.slots?.register({name:"settings.models.footer",id:X+"-slider-toggle",order:15,inject:()=>({t})},Yn)});return typeof o=="function"?o:()=>{}}var ur=X,cr=["slots","locale","connection","remote","remote.settings"];function pr(e){e.effect(()=>e.locale.register(xt,{zh:Yt,en:Xt}),"dsh-better-reasoning-effort: dictionaries");let t=document.createElement("style");t.dataset.pluginStyles=X,t.textContent=tn,document.head.appendChild(t),e.effect(()=>()=>t.remove(),"dsh-better-reasoning-effort: stylesheet");let n=(()=>{try{return e.get?.("settingsScope")?.bind?.({namespace:me})}catch{return}})(),o=n===void 0?{settings:e.remote.settings}:{settings:e.remote.settings,scope:n},r=e.locale.bind(xt),f=()=>{let d=e.locale;return typeof d.subscribe=="function"&&typeof d.getSnapshot=="function"?d:void 0},s=d=>{let i=f();return i===void 0?d():(0,Zn.createElement)($t,{locale:i,children:d})},a=_n({api:o}),l=$n({ctx:e,configuredEffort:a.of}),c=Mn({menuOf:Xn,t:r,refreshed:s,sliderEnabled:oe,directory:l.ensure}),g=Nn({api:o}),u=Jn({ctx:e,api:o,t:r,onIdle:g.run,refreshed:s}),h=()=>{l.ensure(),c.reconcile()};e.effect(()=>(u.start(h),()=>{u.teardown(),c.dispose(),l.dispose()}),"dsh-better-reasoning-effort: DOM injector"),e.effect(()=>{let d=()=>{u.flushOnUnload()};return window.addEventListener("pagehide",d),()=>{window.removeEventListener("pagehide",d)}},"dsh-better-reasoning-effort: ledger flush on unload"),e.effect(()=>{let d=()=>{u.state.describePromise=void 0,a.invalidate(),u.schedule()},i=[e.remote.$on("settings/document-updated",p=>{p===me&&d()}),e.on("connection/reset",d)];return()=>{for(let p of i)p()}},"dsh-better-reasoning-effort: pushed invalidations"),e.effect(()=>{let d=p=>{p.key===ot&&en(p.newValue!=="false")};window.addEventListener("storage",d);let i=rt(()=>{u.schedule()});return()=>{window.removeEventListener("storage",d),i()}},"dsh-better-reasoning-effort: slider preference"),e.effect(()=>Qn(e,r),"dsh-better-reasoning-effort: footer slot activation")}

		return module.exports;
	}
});

//# sourceMappingURL=client.js.map
