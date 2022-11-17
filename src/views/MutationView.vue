<script setup lang="ts">
import { useMutation } from "@vue/apollo-composable";
import { addBook } from "@/services/services";
import { ref } from "vue";

const { mutate: add } = useMutation(addBook);
const bookAuthor = ref<string>("");
const bookTitle = ref<string>("");
const bookDesc = ref<string>("");
const genre = ref<string>("");
const handleAdd = () =>
  add({
    bookAuthor: bookAuthor.value,
    bookTitle: bookTitle.value,
    bookDesc: bookDesc.value,
    genre: genre.value,
  });
</script>

<template>
  <h2 class="title">Mutation view</h2>
  <h3 class="title">Add book</h3>
  <form class="form" @submit.prevent="handleAdd">
    <label>Book author</label>
    <input class="input" v-model="bookAuthor" placeholder="Enter author..." />
    <label>Book title</label>
    <input class="input" v-model="bookTitle" placeholder="Enter title..." />
    <label>Book description</label>
    <input class="input" v-model="bookDesc" placeholder="Enter description..." />
    <label>Genre</label>
    <select class="select" v-model="genre">
      <option>Fiction</option>
      <option>Thriller</option>
      <option>Drama</option>
    </select>
    <button class="btn" type="submit">Add</button>
  </form>
</template>

<style scoped>
.title {
  text-align: center;
}
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 0 auto;
  width: 350px;
}
.input {
  height: 30px;
  width: 300px;
  outline: none;
  border-radius: 5px;
  padding-left: 10px;
}
.select {
  height: 30px;
  width: 320px;
  outline: none;
  border-radius: 5px;
  padding-left: 10px;
}
.btn {
  height: 30px;
  width: 300px;
  margin: 0 auto;
}
</style>
