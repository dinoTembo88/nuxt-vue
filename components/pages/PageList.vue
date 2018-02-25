<template>
  <ul class="post-list">
    <li v-for="page in pages" :key="page.id">
      <PageContents :page="page" mode="excerpt" />
    </li>
  </ul>
</template>

<script>
import PageContents from '~/components/pages/PageContents'

export default {
  props: {
    pages: { type: Array }
  },
  components: {
    PageContents
  }
}
</script>

<style lang="scss" scoped>
.post-list {
  padding: 0;
  display: grid;
  grid-gap: 1.5rem;
  grid-template-columns: repeat(3, 1fr);

  li {
    list-style: none;
  }
}
</style>
