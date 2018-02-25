
var WP_SITE_URL = 'http://localhost/prospect';
var WP_HOMEPAGE_LIMIT = 20;
var axios = require('axios');
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

const wp = new WpApi(WP_SITE_URL);


const config = {
  css: ['@/assets/css/style.scss'],
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-wp',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,600,600i,900' }
    ]
  },
  generate:  {
    routes: function (callback) {
      wp.pages()
      .then((res) => {
        //console.log(res.pages);
        var routes = res.pages.map((page) => {
          return '/pages/' + page.slug
        })
        callback(null, routes)
      })
      .catch(callback)
      }
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    vendor: [
      'axios',
      'date-fns'
    ],
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  plugins: ['~/plugins/vue-filter-date']
}

module.exports = config;