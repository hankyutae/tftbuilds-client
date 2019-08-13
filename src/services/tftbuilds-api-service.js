import config from "../config";
import TokenService from './token-service';

const TftBuildsApiService = {
  deleteBuild(id){
    return fetch(`${config.API_ENDPOINT}/builds/${id}`, {
      method: 'DELETE',
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      /* .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      ) */
  },
  getBuilds() {
    return fetch(`${config.API_ENDPOINT}/builds`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  makeBuildPublic(id){
    return fetch(`${config.API_ENDPOINT}/builds/make-public/${id}`, {
      method: 'PATCH',
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
  },
  getPublicBuild(id) {
    return fetch(`${config.API_ENDPOINT}/public-builds/${id}`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  postBuild(currentBuild) {
    return fetch(`${config.API_ENDPOINT}/builds`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        build_data:currentBuild
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
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