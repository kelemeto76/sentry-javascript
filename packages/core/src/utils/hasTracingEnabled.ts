import type { Options } from '@sentry/types';
import { getClient } from '../currentScopes';

// Treeshakable guard to remove all code related to tracing
declare const __SENTRY_TRACING__: boolean | undefined;

/**
 * Determines if tracing is currently enabled.
 *
 * Tracing is enabled when at least one of `tracesSampleRate` and `tracesSampler` is defined in the SDK config.
 */
export function hasTracingEnabled(
  maybeOptions?: Pick<Options, 'tracesSampleRate' | 'tracesSampler' | 'enableTracing'> | undefined,
): boolean {
  if (typeof __SENTRY_TRACING__ === 'boolean' && !__SENTRY_TRACING__) {
    return false;
  }

  const options = maybeOptions || getClientOptions();
  // eslint-disable-next-line deprecation/deprecation
  return !!options && (options.enableTracing || 'tracesSampleRate' in options || 'tracesSampler' in options);
}

function getClientOptions(): Options | undefined {
  const client = getClient();
  return client && client.getOptions();
}
