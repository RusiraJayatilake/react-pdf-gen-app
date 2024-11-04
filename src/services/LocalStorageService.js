class LocalStorageService {
  async setLocalDbData(setData) {
    localStorage.setItem(setData);
  }

  async getLocalDbData() {}
}

const localstorage = new LocalStorageService();
export default localstorage;
