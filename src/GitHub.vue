<template>
  <div>
    <header>
      <h1>GitHub Stats Viz</h1>
    </header>

    <canvas ref="repos" id="repos"></canvas>
  </div>
</template>

<script>
console.clear();
// GITHUB STUFF
import { Octokit } from "@octokit/rest";

const org = "mdn";

const octokit = new Octokit({
  auth: process.env.VUE_APP_GITHUB_API_KEY,

  baseUrl: "https://api.github.com",
});

export default {
  name: "GithubViz",

  mounted: function () {
    // CANVAS
    const canvasEl = document.querySelector("#repos");
    const width = window.innerWidth;
    const height = window.innerHeight;
    canvasEl.width = width;
    canvasEl.height = height;

    const ctx = canvasEl.getContext("2d");
    ctx.fillRect(0, 0, width, height, "#111");

    octokit.rest.repos
      .listForOrg({
        org,
      })
      .then((repos) => {
        let x = 100;
        let y = 100;
        repos.data.forEach((el, i) => {
          const radius =
            el.open_issues_count > 150
              ? el.open_issues_count / 1.5
              : el.open_issues_count * 5;

          ctx.fillStyle = `hsla(${i * 20}, 50%, 50%, 1)`;
          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          // ctx.arc(x, y, 5, 0, Math.PI*2)
          ctx.fill();
          ctx.closePath();

          x += 85;
          y += 50;

          console.log(el.open_issues_count);
        });
      });
  },
};
</script>

<style></style>
