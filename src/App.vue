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
  name: "ReleaseDashboard",
  components: {
    Dashboard,
    Filter
  },
};
</script>

<style>
  /** creating some base styles */
  :root {
    --bkColour:  #fefefe;
    --fontColour: #222;
    --highlightColour: tomato;
    --spacing: 2rem;
  }

  html, body {
    margin: 0px; padding: 0px;
  }
  body {
    background-color: var(--bkColour);
    font-family: Avenir, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color:  var(--fontColour);
    font-size: 100%;
  }

  h1, h2, h3 {
    margin-bottom: var(--spacing);
  }

  p {
    font-size: calc(var(--spacing)/0.6);
  }

  label, input, button, select {
    padding: 4px 8px;
    font-family: Avenir, sans-serif;
    font-size: 100%;
  }

  code {
    font-size: 120%;
  }

  button {
    background-color: var(--bkColour);
    border: 4px solid var(--highlightColour);
    color: var(--highlightColour);
    font-weight: bold;
  }
  button:hover {
    background-color: var(--highlightColour);
    color:  var(--bkColour);
    cursor: pointer;
  }

  a {
    color: var(--highlightColour);
    text-decoration: underline;
  }
  a:hover {
    text-decoration: none;
  }

  .app-container {
    margin: var(--spacing);
    display: grid;
    grid-template-columns: 1fr 3fr;
    column-gap: var(--spacing);
  }
  .app-container > header {
    grid-column: 1 / -1;
    border-bottom: 4px solid var(--highlightColour);
  }

</style>



