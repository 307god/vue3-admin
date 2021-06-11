<template>
  <div>
    <div>f1</div>
    <input v-model="value" />
    <router-view> </router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 1,
    };
  },
};
</script>

<style>
</style>