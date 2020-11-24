<template>
  <div>
    <section class="container mx-auto my-2">
      <ul>
        <li v-for="post in posts" :key="post.id" class="my-1">
          <nuxt-link
            class="font-semibold text-blue-700 w-auto inline-flex"
            :to="{name: 'year-month-day-slug', params: {year: '1989', month: '05', day: '13', slug: post.slug}}"
          >
            <h1>{{ post.title }}</h1>
          </nuxt-link>
          <div>
            <span class="mx-1">📅</span>
            <span class="font-light italic">{{ post.publishedAt }}</span>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

interface IPost {
  id: string
  title: string
  slug: string
  publishedAt: string
}

export default Vue.extend({
  head() {
    return {
      titleTemplate: '%s',
    }
  },
  data: () => ({
    posts: [] as IPost[],
  }),
  mounted: async function (): Promise<void> {
    await this.loadPosts()
  },
  methods: {
    loadPosts: async function (): Promise<void> {
      for (let i = 1; i <= 10; i++) {
        this.posts.push({
          id: `${i}`,
          title: `Post ${i}`,
          slug: `post-${i}`,
          publishedAt: '13 May 1989',
        })
      }
    },
  },
})
</script>
