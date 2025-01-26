<template>
  <div id="footer-container" class="rounded-8">
    <div id="emblems">
      <img v-for="i in 7" :src="data.base + 'assets-classic/images/emblems/' + i + '.png'" />
    </div>
    <div id="footer-links">
      <ChipLink text="🇨🇳恩情" />
      <ChipLink text="🇺🇸南下" />
      <ChipLink text="注册" />
      <ChipLink text="登录" />
      <ChipLink text="联系我们" last />
    </div>
    <div id="copyright-text">
      Copyright © 2025 {{ data.title }} 版权所有
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useData } from "vitepress"
import ChipLink from "./footer/ChipLink.vue"
const data = useData().site
</script>

<style scoped>
#footer-container {
  background: linear-gradient(to bottom, white, #bad6fe);

  display: flex;
  flex-direction: column;

  padding: 24px;
  gap: 24px;

  align-items: center;
}

#footer-links {
  display: flex;

  width: 100%;
}

#emblems {
  display: flex;
  gap: 16px;
}

#copyright-text {
  color: #0E67B7;
  font-size: 14px;
}
</style>
