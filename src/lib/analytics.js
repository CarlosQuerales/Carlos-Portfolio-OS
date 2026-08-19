/**
 * Analytics abstraction. Every call site uses trackEvent(name, data) —
 * whatever provider you eventually pick (Plausible, Vercel Analytics, GA)
 * gets wired in here, once, instead of in every component that fires an event.
 *
 * No provider is installed yet. This intentionally no-ops until you decide.
 * @param {string} eventName
 * @param {Record<string, unknown>} [data]
 */
export function trackEvent(eventName, data = {}) {
  if (process.env.NODE_ENV !== 'production') {
    console.debug('[analytics:noop]', eventName, data);
    return;
  }
  // TODO(carlos): wire a real provider here, e.g.:
  // window.plausible?.(eventName, { props: data });
}
