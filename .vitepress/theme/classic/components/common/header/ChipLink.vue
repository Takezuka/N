<template>
  <div id="wrapper">
    <div id="chip-link">{{ text }}</div>
    <div v-if="!last" id="divider"/>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  text: string
  last?: boolean
}>()

</script>

<style scoped>
#wrapper{
  display: flex;
  align-items: center;
}

#chip-link {
  color: #333;

  font-size: 13px;
}

#chip-link:hover {
  color: var(--nambu-color-link-hover);
}

#divider {
  width: 2px;
  height: 13px;

  background-color: #333;
  margin: 0 10px;
}
</style>
