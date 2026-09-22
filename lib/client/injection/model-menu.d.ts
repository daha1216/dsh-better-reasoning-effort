/**
 * Locating the official composer model menu — the seat root's open popover.
 *
 * @module dsh-better-reasoning-effort/client/injection/model-menu
 */
/**
 * The official composer model menu: the seat root's open popover.
 *
 * Shape-tolerant across kernels: 0.1.5 portals the menu to document.body
 * and links it from the seat trigger via aria-controls, while older kernels
 * render it inline right after the trigger. Both shapes keep
 * aria-haspopup="menu" on the trigger and role="menu" on the menu, so the
 * controls link is the primary route and the sibling check stays as the
 * fallback. Trigger search stays scoped to the composer card, so other
 * seats' menus never match; no copy text is read, so every locale matches.
 */
export declare function findModelMenu(doc?: Document): HTMLElement | undefined;
/** The official composer model menu: the seat root's open popover. */
export declare function modelMenuOf(): HTMLElement | undefined;
