<script setup lang="ts">
import ContainerComp from "@/components/ContainerComp.vue";
import HeaderView from "@/views/HeaderView.vue";
</script>

<template>
  <ContainerComp>
    <HeaderView />
    <router-view />
  </ContainerComp>
</template>

<style scoped></style>
