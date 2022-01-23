<template>
  <h1>Release Dashboard</h1>
  <Dashboard />
</template>

<script>
import Dashboard from "./components/ReleaseDashboard.vue";

export default {
  name: "ReleaseDashboard",
  components: {
    Dashboard,
  },
};
</script>

<style>
.app-container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #212121;
  margin: 4rem 2rem;
}
</style>
