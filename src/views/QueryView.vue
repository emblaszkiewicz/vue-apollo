<script setup lang="ts">
import { ref, watch } from "vue";
import { useQuery } from "@vue/apollo-composable";
import { getAllBooks } from "@/services/services";

const { result } = useQuery(getAllBooks);
const books = ref(null);
watch(result, () => (books.value = result.value.filterBooks.books));
</script>

<template>
  <h2>Query View</h2>
  <section class="section" v-if="books">
    <article class="article" v-for="book in books" :key="book.id">
      <span>Author: {{ book.bookAuthor }}</span>
      <span>Title: {{ book.bookTitle }}</span>
      <span>Desc: {{ book.bookDesc }}</span>
      <span>Genre: {{ book.genre }}</span>
    </article>
  </section>
</template>

<style scoped>
.section {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
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
