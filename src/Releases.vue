<template>
  <header>
    <h1>Release Dashboard</h1>
  </header>
  <Filter />
  <Dashboard />
</template>

<script>
import Filter from "./components/DashboardFilter.vue";
import Dashboard from "./components/ReleaseDashboard.vue";

export default {
  name: "ReleaseDash",
  components: {
    Dashboard,
    Filter
  },
};
</script>

<style>
  .app-container {
    display: grid;
    grid-template-columns: 1fr 3fr;
    column-gap: var(--spacing);
  }
  .app-container > header {
    grid-column: 1 / -1;
    border-bottom: 4px solid var(--highlightColour);
  }

</style>



