<script setup>
import { onMounted, ref } from "vue";
import { useStore } from "vuex";

import Cards from "./cards.vue";
import HeaderPage from "./header.vue";

const selectedKeys = ref([0]);
const collapsed = ref(false);
let store = useStore();
let storeBoard = useStore();

onMounted(() => {
  store.dispatch("fetchDataBoard");
});
</script>

<template>
  <a-layout style="height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo" />
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <a-menu-item
          v-for="(item, index) in $store.state.dataBoards"
          :key="index"
          @click="$store.commit('setActiveBoard', item.id)"
          >{{ item.name }}</a-menu-item
        >

        <!-- <a-menu-item
          @click="store.commit("setActiveBoard")"
          v-for="(item, index) in store.state.dataBoards"
          :key="index"
          >{{ item.name }}
        </a-menu-item> -->
      </a-menu>

      <button @click="storeBoard.dispatch(`fetchBoardPost`)">Add Board</button>
    </a-layout-sider>

    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <menu-unfold-outlined
          v-if="collapsed"
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <menu-fold-outlined
          v-else
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>

      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px',
        }"
      >
        <HeaderPage />

        <Cards />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}

.site-layout .site-layout-background {
  background: #fff;
}
</style>
