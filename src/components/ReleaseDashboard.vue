<template>
  <div class="dashboard">
    <div v-if="bugList.length" class="buglist-container">
      <h2>Bug List: Found {{ bugList.length }} bugs</h2>
      <ul class="buglist">
        <li class="bug" v-for="bug in bugList" :key="bug.id">
          <h3>
            <a :href="bugzillaBugURL(bug.id)">{{ bug.summary }}</a>
          </h3>
          <ul class="keywords">
            <li v-for="keyword in bug.keywords" :key="keyword">
              {{ keyword }}
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <p v-else>Loading bugs...</p>
  </div>
</template>

<script>
const apiSecret = process.env.VUE_APP_BUGZILLA_API_KEY;
const bugzillaURL = "https://bugzilla.mozilla.org/rest/bug?";
const baseUrl = `${bugzillaURL}keywords=dev-doc-needed&api_key=${apiSecret}&include_fields=id,summary,keywords&limit=10`;
const myHeaders = new Headers();
myHeaders.append("content-type", "application/json");
myHeaders.append("accept", "application/json");
const headObj = {
  method: "GET",
  headers: myHeaders,
  mode: "cors",
};

export default {
  data() {
    return {
      bugList: [],
    };
  },
  // this is tun when the component is mounted
  created() {
    fetch(baseUrl, headObj)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.bugList = data.bugs;
      })
      .catch((err) => {
        return err;
      });
  },
  methods: {
    bugzillaBugURL(bugID) {
      return `https://bugzilla.mozilla.org/show_bug.cgi?id=${bugID}`;
    },
  },
};
</script>

<style scoped>
h3 {
  margin: 0;
  margin-bottom: 1rem;
}

.buglist {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  list-style-type: none;
  padding: 0;
}

.buglist .bug {
  border: 1px solid #42b983;
  flex: 30%;
  padding: 1rem;
}

a {
  color: #42b983;
}

a:hover,
a:focus {
  text-decoration: none;
}
</style>
