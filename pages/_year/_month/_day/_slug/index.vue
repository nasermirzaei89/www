<template>
  <div>
    <article class="container mx-auto my-2">
      <header>
        <h1 class="font-semibold">{{ post.title }}</h1>
        <div>
          <span class="mx-1">📅</span>
          <span class="font-light italic">{{ post.publishedAt }}</span>
        </div>
        <div class="py-2" v-html="post.contentHTML"></div>
        <div>
          <ul class="flex">
            <li
              v-for="tag in post.tags"
              class="font-semibold inline-block mx-1 first:ml-0 last:mr-0 border px-2 hover:bg-gray-500"
            >
              {{ tag }}
            </li>
          </ul>
        </div>
      </header>
    </article>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

interface IPost {
  id: string
  title: string
  slug: string
  publishedAt: string
  contentHTML: string
  tags: Array<string>
}

export default Vue.extend({
  data: () => ({
    post: {
      id: '1',
      title: 'Post 1',
      slug: 'post-1',
      publishedAt: '13 May 1989',
      contentHTML:
        "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>",
      tags: ['Tag 1', 'Tag 2'],
    } as IPost,
  }),
  mounted: async function (): Promise<void> {},
})
</script>
