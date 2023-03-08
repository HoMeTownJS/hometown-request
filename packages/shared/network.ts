export function getNetworkIsOnline() {
  const isWindow = typeof window === 'object';

  const windowNetworkOnline = isWindow && window.navigator.onLine;

  return windowNetworkOnline || false;
}
