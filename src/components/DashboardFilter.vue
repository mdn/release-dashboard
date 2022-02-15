<template>
  <aside class="search">
    <header>
      <h2>Search Bugs</h2>
    </header>

    <!-- NB below are ideas, will need to see what works & what doesn't & user test to define -->

    <div class="search-quick">

      <h3>Quick links</h3>

      <button type="button">All bugs</button>
      <button type="button">All meta</button>
      <button type="button">Next release</button>
      <button type="button">Next 3 release</button>
      <button type="button">Might need <code>dev-doc-needed</code></button>

      <div class="form-field">
        <label for="bugid">Bug ID</label>
        <input type="text" id="bugid" name="bugid" />
        <button type="button">Show</button>
      </div>

    </div><!-- .search-quick -->

    <div class="search-filter">

      <h3>Filter</h3>

      <div class="form-field">
        <label for="release">Release</label>
        <select multiple name="release" id="release">
          <option>...</option>
          <option>94</option>
          <option>95</option>
          <option>96</option>
          <option>97</option>
          <option>98</option>
          <option>99</option>
          <option>100</option>
        </select>
      </div>

      <div class="form-field">
        <label for="tech">Tech</label>
        <select multiple name="tech" id="tech">
          <option>...</option>
          <option>HTML</option>
          <option>CSS</option>
          <option>JS</option>
          <option>WebAPI</option>
          <option>WebEXT</option>
          <option>Devtools</option>
          <option>Other</option>
        </select>
      </div>

      <button type="button">Go!</button>

      <!-- possible others: What am I working on -->
    </div><!-- .search-filter -->

  </aside>
</template>

<script>

</script>

<style scoped>

  div[class*="search"] {
    border-bottom: 2px solid var(--highlightColour);
    padding-bottom: var(--spacing);
  }

  button {
    display: block;
    width: 67%;
    margin: var(--spacing) 0px;
  }

  .search-filter label,
  .search-filter select {
    display: block;
  }

  .search-filter select {
    width: 100%;
    margin-bottom: var(--spacing);
  }

</style>






