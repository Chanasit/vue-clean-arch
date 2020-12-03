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
  unmounted() {
    this.$presenter.app.onMounted();
  },
};
</script>
