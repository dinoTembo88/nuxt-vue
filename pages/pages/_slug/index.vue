<template>
  <main class="single-post-container main-contents">
    <PageContents :page="current_page" mode="full" />
  </main>
</template>

<script>
import { mapState } from 'vuex'
import PageContents from '~/components/pages/PageContents'
import wp from '~/lib/wp'
import { types } from '~/store'

export default {
  fetch ({ store, params }) {
    const existing = store.state.page_list.filter(p => p.slug === params.slug)
    if (existing.length > 0) {
      store.commit(types.CURRENT_PAGE_UPDATE, existing[0])
      return
    }
    return wp.pages({ slug: params.slug })
      .then(json => {
        store.commit(types.CURRENT_PAGE_UPDATE, json.pages[0])
      })
  },
  computed: mapState(['site_data', 'current_page']),
  components: {
    PageContents
  },
  head () {
    return {
      title: `${this.site_data.name} | ${this.current_page.title.rendered}`
    }
  }
}
</script>

<style lang="scss" scoped>
.single-post-container {
  margin: -3.5rem auto 0 auto;
  width: 90%;
  max-width: 780px;
}
</style>
