<template>
  <div id="wrapper">
    <div id="text">{{ text }}</div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  text: string
  last?: boolean
}>()

</script>

<style scoped>
#wrapper {
  display: flex;
  flex: 1;

  align-items: center;
  justify-content: center;
}

#text {
  color: white;

  font-size: 14px;
}

/*#divider {
  width: 2px;
  height: 14px;

  background-color: white;
  margin: 0 20px;
}*/
</style>
