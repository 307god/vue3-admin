<template>
  <div>
    <div>f2</div>
    <input v-model="value" />
    <router-view> </router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 2,
    };
  },
};
</script>

<style>
</style>