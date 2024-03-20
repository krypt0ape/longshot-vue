export enum LOCAL_STORAGE_KEY {
  DEFAULT_CURRENCY = "DEFAULT_CURRENCY",
  LAST_GAMES = "LAST_GAMES",
}

export const useLocalStorage = () => ({
  get<T>(k: LOCAL_STORAGE_KEY, defaultValue?: any): T {
    if (!localStorage.getItem(k) && defaultValue) {
      this.set(k, defaultValue);
    }
    return localStorage.getItem(k)
      ? JSON.parse(localStorage.getItem(k) as string)
      : undefined;
  },

  set(k: LOCAL_STORAGE_KEY, stringifiable: any) {
    localStorage.setItem(k, JSON.stringify(stringifiable));
  },
});
