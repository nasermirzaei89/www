<template>
  <div class="font-mono">
    <header class="border-b-2 border-dashed">
      <div class="py-4 container mx-auto">
        <span class="font-semibold">&gt;</span>
        <nuxt-link class="font-semibold text-blue-700" :to="{name: 'index'}"> Naser Mirzaei </nuxt-link>
      </div>
    </header>

    <main>
      <nuxt></nuxt>
    </main>

    <footer class="border-t-2 border-dashed">
      <div class="container mx-auto w-full justify-between flex py-2">
        <ul>
          <li class="inline-block mx-2">
            <a class="font-semibold text-blue-700" href="#">Email</a>
          </li>
          <li class="inline-block mx-2">
            <a class="font-semibold text-blue-700" href="#">GitHub</a>
          </li>
          <li class="inline-block mx-2">
            <a class="font-semibold text-blue-700" href="#">LinkedIn</a>
          </li>
          <li class="inline-block mx-2">
            <a class="font-semibold text-blue-700" href="#">Twitter</a>
          </li>
          <li class="inline-block mx-2">
            <a class="font-semibold text-blue-700" href="#">Telegram</a>
          </li>
        </ul>
        <div>
          <span class="inline-block transform rotate-180">&copy;</span>
          All wrongs reserved
        </div>
      </div>
    </footer>
  </div>
</template>
<style>
.dark-mode {
  @apply bg-gray-900 text-white;
}
</style>
