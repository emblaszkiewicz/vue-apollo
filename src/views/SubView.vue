<script setup lang="ts">
import gql from "graphql-tag";
import { useSubscription } from "@vue/apollo-composable";
//import { sub } from "@/services/services";
import { watch, ref } from "vue";

const { result } = useSubscription(gql`
  subscription Subscription {
    bookAdded {
      bookAuthor
      bookDesc
      bookTitle
      genre
    }
  }
`);
watch(result, (data) => console.log("New book!", data));
</script>

<template>
  <h1>Subscription</h1>
</template>

<style scoped></style>
