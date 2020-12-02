<template>
  <p>Home Component</p>
</template>

<script>
export default {
  name: "Home",
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
