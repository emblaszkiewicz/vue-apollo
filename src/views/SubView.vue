<script setup lang="ts">
import { useSubscription } from "@vue/apollo-composable";
import { sub } from "@/services/services";
import { watch } from "vue";

const { result, loading, error } = useSubscription(sub);
watch(result, () => console.log(result));
</script>

<template>
  <h1>Subscription</h1>
</template>

<style scoped></style>
