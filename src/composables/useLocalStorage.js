export const useLocalStorage = (k) => ({
  get(defaultValue) {
    if (!localStorage.getItem(k) && defaultValue) {
      this.set(defaultValue);
    }
    return localStorage.getItem(k)
      ? JSON.parse(localStorage.getItem(k))
      : undefined;
  },

  set(stringifiable) {
    localStorage.setItem(k, JSON.stringify(stringifiable));
  },
});
