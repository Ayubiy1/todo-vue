<script setup>
import { onMounted, ref } from "vue";
import { useStore } from "vuex";

let store = useStore();
let changes = ref(false);

onMounted(() => {
  store.dispatch("fetchData");
});
</script>

<template>
  <div v-if="store.state.isLoading == true">
    <p>Loading...</p>
  </div>
  <ul style="padding: 0" v-if="store.state.isLoading == false">
    <li
      v-for="(item, index) in store.state.data.filter(
        (i) => i.boardId == store.state.activeBoard
      )"
      :key="index"
      style="
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 5px 0;
        padding: 10px 5px;
        background-color: rgba(128, 128, 128, 0.111);
        border-radius: 6px;
      "
    >
      <!-- @click="store.dispatch(editTaskComplated, item)" -->
      <div
        style="
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        "
      >
        <button
          v-if="item.complated == false"
          @click="
            {
              store.dispatch('editTaskComplated', {
                item: item,
              });
            }
          "
        >
          +
        </button>

        <button
          v-if="item.complated == true"
          @click="
            {
              store.dispatch('editTaskComplatedFalse', {
                item: item,
              });
            }
          "
        >
          -
        </button>
        <p
          class="text-li"
          style="padding: 0; margin: 0"
          v-if="item.complated == false"
        >
          {{ item.name }}
        </p>
        <del v-if="item.complated == true" style="color: green">{{
          item.name
        }}</del>
      </div>

      <div style="display: flex; gap: 5px">
        <button
          style="
            background-color: green;
            color: #fff;
            border: none;
            cursor: pointer;
            padding: 5px 10px;
            border-radius: 6px;
          "
          @click="store.dispatch(`editTask`, item)"
        >
          <i class="fa-solid fa-pen"></i>
        </button>

        <button
          style="
            background-color: red;
            color: #fff;
            border: none;
            cursor: pointer;
            padding: 5px 10px;
            border-radius: 6px;
          "
          @click="
            {
              store.dispatch(`fetchDataDelet`, item);
              console.log(item?.id);
            }
          "
        >
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
    </li>
  </ul>
</template>

<style scoped></style>
