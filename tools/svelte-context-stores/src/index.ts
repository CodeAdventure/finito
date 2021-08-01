import { getContext, setContext } from "svelte";
import { writable } from "svelte/store";

export function setStore(key: unknown, value: unknown) {
  const store = writable(value);
  setContext(key, store);
  return store;
}

export function getStore<T>(key: T) {
  return getContext<T>(key);
}
