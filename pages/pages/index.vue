<template>
  <main class="container main-contents">
    <div>
      <PageList :pages="page_list" />
    </div>
  </main>
</template>

<script>
import { mapState } from 'vuex'
import PageList from '~/components/pages/PageList.vue'
import wp from '~/lib/wp'
import { types } from '~/store'

export default {
  fetch ({ store, params }) {
    return wp.pages()
      .then(json => {
        store.commit(types.PAGE_LIST_UPDATE, json.pages)
      })
  },
  head () {
    return {
      title: `${this.site_data.name}`
    }
  },
  computed: mapState(['page_list', 'site_data']),
  components: {
    PageList
  }
}
</script>
