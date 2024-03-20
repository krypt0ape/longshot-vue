export const useLocalStorage = () => ({
  get(k, defaultValue) {
    if (!localStorage.getItem(k) && defaultValue) {
      this.set(k, defaultValue);
    }
    return localStorage.getItem(k)
      ? JSON.parse(localStorage.getItem(k))
      : undefined;
  },

  set(k, stringifiable) {
    localStorage.setItem(k, JSON.stringify(stringifiable));
  },
});
