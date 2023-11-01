export interface IStorageService {
  getItem(key: string): string| undefined | null;

  setItem(key: string, value: string, options?: any): void;

  removeItem(key: string, options?: any): void;

  clear(): void;
}