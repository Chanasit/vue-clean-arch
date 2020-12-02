<template>
  <div class="container">
    <main class="d-flex flex-column">
      <router-view></router-view>
      <div>{{ view.notify }} {{ view.account_name }} {{ view.account_id }}</div>
    </main>
  </div>
</template>

<script>
export default {
  name: "App",
  inject: ["$presenter"],
  data() {
    return { view: this.$presenter.app.view };
  },
  mounted() {
    this.$presenter.app.onMounted();
  },
  destroyed() {
    this.$presenter.app.onDestroy();
  },
};
</script>
