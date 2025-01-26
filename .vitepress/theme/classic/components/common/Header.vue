<template>
  <div id="header-container">
    <div id="header" class="rounded-8">
      <img id="logo" src="/assets-classic/images/logo.png">
      <div id="header-functions">
        <ChipLink text="恩情" />
        <ChipLink text="南下" />
        <ChipLink text="注册/登录" />
        <ChipLink @click="toggleTheme" :text="'切换到' + (isClassicTheme ? '现代' : '经典')" last />
      </div>
    </div>
    <div id="navbar" class="rounded-8">
      <NavItem text="恩情" />
      <NavItem text="南下" />
      <NavItem text="忠诚" />
      <NavItem text="紫蛋" />
      <NavItem text="丹东" />
      <NavItem text="广东菜" last />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { inject } from 'vue'
import ChipLink from "./header/ChipLink.vue"
import NavItem from "./header/NavItem.vue"

const TAG = 'Header'

const isClassicTheme = inject('isClassicTheme')

function toggleTheme() {
  console.log(TAG, "Toggle Theme, Bef Is", isClassicTheme.value)
  isClassicTheme.value = !(isClassicTheme.value)
  console.log(TAG, "Toggle Theme, Aft Is", isClassicTheme.value)
}

console.log(TAG, "Double Check", isClassicTheme.value)
</script>

<style scoped>
#header {
  background: url("/assets-classic/images/header_bg.jpg");
  height: 220px;

  display: flex;
  align-items: center;
}

#header-functions {
  display: flex;

  flex: 1;
  height: 100%;

  margin-top: 12px;
  margin-right: 12px;

  align-items: start;
  justify-content: end;
}

#logo {
  margin-left: 50px;
}

#header-container {
  display: flex;
  flex-direction: column;

  width: 100%;

  gap: 8px;
}

#navbar {
  background: linear-gradient(to bottom, #153053, #174c9a);

  width: 100%;
  height: 40px;

  display: flex;
}
</style>
