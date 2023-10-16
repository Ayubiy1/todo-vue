<script setup>
import { useStore } from "vuex";
import { ref } from "vue";

let store = useStore();
let valuee = ref("");

let handleInput = (e) => {
  valuee.value = e.target.value;
};

const addNewList = () => {
  store.dispatch("fetchDataPost", valuee.value);
  document.getElementById("input-list").value = "";
};
</script>

<template>
  <header style="display: flex; align-items: center; justify-content: center">
    <input
      type="text"
      @change="handleInput"
      placeholder="Add list name"
      id="input-list"
    />
    <button @click="addNewList">Add</button>
  </header>
</template>

<style scoped>
header > input {
  width: 90%;
  height: 36px;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  outline: none;
}
header > button {
  color: #fff;
  background-color: rgb(13, 119, 195);
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
}
</style>
