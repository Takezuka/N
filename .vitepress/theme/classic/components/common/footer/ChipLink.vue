<template>
  <div id="wrapper">
    <div id="chip-link">{{ text }}</div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  text: string
}>()

</script>

<style scoped>
#wrapper{
  display: flex;
  flex: 1;

  justify-content: center;
}

#chip-link {
  color: #0E67B7;

  font-size: 13px;
}

#chip-link:hover {
  color: var(--nambu-color-link-hover);
}
</style>
