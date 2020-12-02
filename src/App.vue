<template>
  <div>{{ view.notify }} {{ view.account_name }} {{ view.account_id }}</div>
  <div class="container">
    <main class="d-flex">
      <router-view></router-view>
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
