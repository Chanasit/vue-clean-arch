<template>
  <div class="container">
    <main class="d-flex flex-column">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: "Application",
  inject: ["$presenter"],
  data() {
    return { view: null };
  },
  mounted() {
  },
  unmounted() {
  },
};
</script>
