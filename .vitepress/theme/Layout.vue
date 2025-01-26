<script setup lang="ts">
import { useData } from 'vitepress'
import { inject } from 'vue'
import Classic from './classic/Classic.vue'

// https://vitepress.dev/reference/runtime-api#usedata
const { site, frontmatter } = useData()
const isClassicTheme = inject('isClassicTheme')
</script>

<template>
  <Classic/>
</template>
