<template>
  <p>Git User Repositories Component</p>
  <div class="input-group mb-3">
    <div class="input-group-prepend">
      <span class="input-group-text" id="basic-addon1">@</span>
    </div>
    <input
      v-model="view.owner_search"
      type="text"
      class="form-control"
      placeholder="Username"
      aria-label="Username"
      aria-describedby="basic-addon1"
    />
  </div>
  <template v-for="r in view.repos" v-bind:key="r.id">
    <p>{{ r.full_name }}...</p>
  </template>
</template>

<script>
export default {
  name: "GithubUserRepos",
  inject: ["$presenter"],
  data() {
    return { view: this.$presenter.github_user_repos.view };
  },
  mounted() {
    /* console.log(this.view, this.$presenter.github_user_repos.view) */
    /* this.$presenter.github_user_repos.view.repos = [{full_name: "hello"}] */
    this.$presenter.github_user_repos.onMounted();
    /* this.$presenter.github_user_repos.test().subscribe(item => { */
    /* 	this.view.repos = item */
    /* }) */
    /* console.log(this.view.repos) */
  },
  unmounted() {
    this.$presenter.github_user_repos.onUnmounted();
  },
};
</script>
