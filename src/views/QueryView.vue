<script setup lang="ts">
import type { TBook, TFilterBooks } from "@/types/types";
import { ref, watch } from "vue";
import { useQuery } from "@vue/apollo-composable";
import { pagination } from "@/services/services";

const limitPerPage = ref<number>(100);
const page = ref<number>(1);
const bookAuthor = ref<string>("");
const bookTitle = ref<string>("");
const bookDesc = ref<string>("");
const genre = ref<string | null>(null);
const sort = ref<string | null>(null);
const books = ref<TBook[]>();
const { result, loading, error } = useQuery<TFilterBooks<TBook>>(pagination(), {
  limitPerPage,
  page,
  bookAuthor,
  bookTitle,
  bookDesc,
  genre,
  sort,
});
watch(result, () => (books.value = result.value?.filterBooks?.books));
</script>

<template>
  <h1>Query</h1>
  <section v-if="error">Error...</section>
  <section v-if="loading">Loading...</section>
  <section v-if="books" class="section">
    <article class="options">
      <form class="form">
        <label>Limit per page</label>
        <input v-model.lazy.number="limitPerPage" />
        <label>Find author</label>
        <input v-model.lazy="bookAuthor" />
        <label>Find title</label>
        <input v-model.lazy="bookTitle" />
        <label>Find description</label>
        <input v-model.lazy="bookDesc" />
        <label>Find genre</label>
        <select v-model="genre">
          <option :value="null">None</option>
          <option>Fiction</option>
          <option>Thriller</option>
          <option>Drama</option>
        </select>
        <label>Sort</label>
        <select v-model="sort">
          <option :value="null">None</option>
          <option>AuthorAlphabetically</option>
          <option>TitleAlphabetically</option>
        </select>
      </form>
    </article>
    <article class="pages">
      <span
        v-for="item in result.filterBooks.totalPages"
        :key="item"
        @click="page = item"
        class="page"
        >{{ item }}</span
      >
    </article>
    <div class="wrapper">
      <article class="article" v-for="(book, index) in books" :key="index">
        <span>Author: {{ book.bookAuthor }}</span>
        <span>Title: {{ book.bookTitle }}</span>
        <span>Desc: {{ book.bookDesc }}</span>
        <span>Genre: {{ book.genre }}</span>
      </article>
    </div>
  </section>
</template>

<style scoped>
.section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
}
.form {
  display: flex;
  flex-direction: column;
  max-width: 200px;
}
.pages {
  display: flex;
  justify-content: center;
  gap: 10px;
}
.page {
  cursor: pointer;
}
.wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}
.article {
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 40px 0;
  border: 1px solid darkgreen;
  padding: 20px;
}
</style>
