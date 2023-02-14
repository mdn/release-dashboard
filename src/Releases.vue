<template>
  <div>
    <header>
      <h1>Release Dashboard</h1>
    </header>
    <SearchFilter />
    <Dashboard />
  </div>
</template>

<script>
import SearchFilter from "./components/DashboardFilter.vue";
import Dashboard from "./components/ReleaseDashboard.vue";

export default {
  name: "ReleaseDash",
  components: {
    Dashboard,
    SearchFilter,
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
