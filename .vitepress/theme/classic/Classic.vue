<template>
  <div id="layout">
    <Header />
    <Content id="content" class="rounded-8" />
    <Footer />
  </div>
  <div id="background">
    <img id="bg_1" src="/assets-classic/images/bg_1.jpg" />
    <img id="bg_2" src="/assets-classic/images/bg_2.jpg ">
  </div>
</template>

<script lang="ts" setup>
import Header from "./components/common/Header.vue"
import Footer from "./components/common/Footer.vue"
import './styles/colors.scss'
import './styles/styles.scss'
</script>

<style scoped>
#content {
  background-color: white;
  padding: 16px;

  flex: 1;
}

#background {
  position: fixed;

  display: flex;
  flex-direction: column;
  z-index: -1;

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: #ddeffb;
}

#layout {
  position: relative;
  width: 1000px;
  margin: 32px 0;

  display: flex;
  flex-direction: column;
  gap: 8px;

  flex: 1;
}

#bg_1 {
  height: 160px;
}

#bg_2 {
  height: 120px;
}
</style>
