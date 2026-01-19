import localforage from "localforage";
import { CACHE_CONFIGS } from "@/constants";

export type CacheStoreDataType<T> = {
  value: T;
  expiredAt: number;
};

export class CacheStore {
  private store: LocalForage;
  private cacheDurationInMs: number;

  public constructor(
    name: string,
    cacheDurationInMs: number = CACHE_CONFIGS.defaultCacheDurationInMs,
  ) {
    this.store = localforage.createInstance({ name });
    this.cacheDurationInMs = cacheDurationInMs;
  }

  public async get<T>(key: string) {
    const storeValue = await this.store.getItem<CacheStoreDataType<T>>(key);
    if (!storeValue) {
      return null;
    }

    if (storeValue.expiredAt < Date.now()) {
      await this.remove(key);
      return null;
    }

    return storeValue.value;
  }

  public async set<T>(key: string, value: T) {
    const expiredAt = Date.now() + this.cacheDurationInMs;
    const storeValue = { value, expiredAt };
    return this.store.setItem<CacheStoreDataType<T>>(key, storeValue);
  }

  public async remove(key: string) {
    return this.store.removeItem(key);
  }

  public async clear() {
    return this.store.clear();
  }
}

export const defaultCacheStore = new CacheStore("defaultCacheStore");
