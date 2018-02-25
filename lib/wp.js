import axios from 'axios'
import {
  WP_SITE_URL,
  WP_HOMEPAGE_LIMIT
} from '../wpconfig'

class WpApi {
  constructor (siteurl) {
    this.apiBase = `${siteurl}/wp-json`
  }

  siteData () {
    return axios.get(this.apiBase)
      .then(json => {
        const { name, description, url, home, gmtOffset, timezoneString } = json.data
        return { site_data: { name, description, url, home, gmtOffset, timezoneString } }
      })
      .catch(e => ({ error: e }))
  }

  posts (options) {
    const params = {
      page: 1,
      per_page: WP_HOMEPAGE_LIMIT,
      ...options
    }
    return axios.get(`${this.apiBase}/wp/v2/posts`, { params })
      .then(json => {
        return { posts: json.data }
      })
      .catch(e => ({ error: e }))
  }

  pages (options) {
    const params = {
      page: 1,
      per_page: WP_HOMEPAGE_LIMIT,
      ...options
    }
    return axios.get(`${this.apiBase}/wp/v2/pages`, { params })
      .then(json => {
        return { pages: json.data }
      })
      .catch(e => ({ error: e }))
  }

  authors (options) {
    const params = {
      page: 1,
      per_page: 20,
      ...options
    }
    return axios.get(`${this.apiBase}/wp/v2/users`, { params })
      .then(json => {
        return { users: json.data }
      })
      .catch(e => ({ error: e }))
  }
}

const wp = new WpApi(WP_SITE_URL)

export default wp
