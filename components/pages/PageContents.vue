<template>
  <article class="card">
    <h2 class="post-subtitle">
      <nuxt-link :to="`/pages/${page.slug}`" v-if="mode === 'excerpt'">{{ page.title.rendered }}</nuxt-link>
      <span v-else>{{ page.title.rendered }}</span>
    </h2>
    <div v-if="mode === 'full'" class="post-meta">
      <p>by {{ authors[page.author].name }}</p>
    </div>
    <div class="post-body" v-html="page.excerpt.rendered" v-if="mode === 'excerpt'"></div>
    <div class="post-body" v-html="page.content.rendered" v-else></div>
  </article>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    page: { type: Object },
    mode: {
      type: String,
      validator: val => (['excerpt', 'full'].includes(val))
    }
  },
  computed: mapState(['authors'])
}
</script>

<style lang="scss" scoped>
.post-subtitle {
  font-weight: 300;
  font-size: 2.25rem;
  line-height: 1.25;
  margin-bottom: 1rem;

  a {
    color: #000000;

    &:hover {
      text-decoration: none;
    }
  }
}

.post-meta {
  margin: -1rem 0 1rem 0;
  color: #999;
  font-size: 0.75rem;
  line-height: 1;

  p {
    margin: 0;
  }
}

.post-body {
  font-weight: 300;
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 1rem;
}
</style>
