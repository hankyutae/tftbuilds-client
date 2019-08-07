import config from "../config";

const TftBuildsApiService = {
  getChampions() {
    return fetch(`${config.API_ENDPOINT}/champions`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getItems() {
    return fetch(`${config.API_ENDPOINT}/items`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getTraits() {
    return fetch(`${config.API_ENDPOINT}/traits`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }

}

export default TftBuildsApiService;