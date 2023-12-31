import { IStorageService } from "../types/IStorageService";

class LocalStorageService implements IStorageService {
  getItem(key: string): string | undefined | null {
    return typeof window !== "undefined"
      ? localStorage.getItem(key)
      : undefined;
  }

  setItem(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  removeItem(key: string) {
    localStorage.removeItem(key);
  }

  clear() {
    return localStorage.clear();
  }
}

class StorageService implements IStorageService {
  private storage: LocalStorageService;

  constructor() {
    this.storage = new LocalStorageService();
  }

  setup(storage: IStorageService) {
    this.storage = storage;
  }

  getItem(key: string) {
    return this.storage.getItem(key);
  }

  setItem(key: string, value: string) {
    this.storage.setItem(key, value);
  }

  removeItem(key: string) {
    this.storage.removeItem(key);
  }

  async clear() {
    return this.storage.clear();
  }
}

export default new StorageService();
