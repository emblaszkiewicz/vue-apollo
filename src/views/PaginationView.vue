<script setup lang="ts">
import {ref, watch} from "vue";
import { useQuery } from "@vue/apollo-composable";
import { pagination } from "@/services/services";

const page = ref<number>(1);
const limit = ref<number>(5);
const books = ref();
const { result } = useQuery(pagination());
watch(result, () => console.log(books.value));
</script>

<template>
  <h1>Pagination</h1>
  <form class="form">
    <input class="input" v-model="page" placeholder="Enter page..." />
    <input class="input" v-model="limit" placeholder="Enter page limit..." />
  </form>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
}
.input {
  width: 50px;
}
</style>
