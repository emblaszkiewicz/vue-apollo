<script setup lang="ts">
import { onMounted, ref } from "vue";
const user = ref(null);
const fetchUser = async () => {
  fetch("http://localhost:4000/auth/user", {
    method: "GET",
    credentials: "include",
  })
    .then((res) => {
      if (res.status === 200) return res.json();
      throw new Error("Login failed!");
    })
    .then((res) => {
      user.value = res.user;
    })
    .catch((err) => {
      console.log(err);
    });
};
onMounted(() => {
  fetchUser();
});
</script>

<template>
  <nav class="navi">
    <router-link class="link" to="/">Home</router-link>
    <router-link class="link" to="/query">Query</router-link>
    <router-link class="link" to="/pagination">Pagination</router-link>
    <router-link class="link" to="/mutation">Mutation</router-link>
    <a v-if="user" @click="user.value = null" class="link" href="http://localhost:4000/auth/logout">Logout</a>
    <a v-else class="link" href="http://localhost:4000/auth/google"
      >Login with Google</a
    >
  </nav>
</template>

<style scoped>
.navi {
  padding: 20px;
  border-radius: 10px;
  background: #82589f;
  display: flex;
  justify-content: right;
  gap: 20px;
}
.link {
  text-decoration: none;
  color: #ffffff;
}
a:visited {
  color: #ffffff;
}
</style>
