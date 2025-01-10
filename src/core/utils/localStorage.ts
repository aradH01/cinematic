import { isClient } from '@/core/utils/isClient';
import { isObject } from '@/core/utils/isObject';


export const ls = {
  get,
  set,
  remove,
  update,
  clearAll
};

function get(key: string): unknown {
  try {
    const item: unknown = isClient() && localStorage.getItem(key);
    return typeof item === 'string' && JSON.parse(item);
  } catch (error) {
    return undefined;
  }
}

function set(key: string, value: unknown): void {
  try {
    isClient() && localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    return undefined;
  }
}

function update(key: string, value: unknown): void {
  try {
    if (isClient()) {
      const storedValues = get(key) || {};
      if (!isObject(storedValues)) return set(key, value);

      if (isObject(value)) {
        return set(key, { ...storedValues, ...(value as object) });
      }
      return set(key, { ...storedValues, value });
    }
  } catch (error) {
    return undefined;
  }
}

function remove(key: string) {
  isClient() && localStorage.removeItem(key);
}
function clearAll() {
  isClient() && localStorage.clear();
}
