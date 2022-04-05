class LocalCache {
  setCache(key: string, value: any, isLocalStorage = true) {
    if (isLocalStorage) {
      window.localStorage.setItem(key, JSON.stringify(value))
    } else {
      window.sessionStorage.setItem(key, JSON.stringify(value))
    }
  }

  getCache(key: string, isLocalStorage = true) {
    const value = isLocalStorage
      ? window.localStorage.getItem(key)
      : window.sessionStorage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }

  deleteCache(key: string, isLocalStorage = true) {
    if (isLocalStorage) {
      window.localStorage.removeItem(key)
    } else {
      window.sessionStorage.removeItem(key)
    }
  }
}

export default new LocalCache()
