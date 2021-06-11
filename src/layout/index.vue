<template>
  <router-view v-slot="{ Component }">
    <transition name="fade-transform" mode="out-in">
      <div :key="key">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </div>
    </transition>
  </router-view>
</template>

<script>
export default {
  computed: {
    key() {
      return this.$route.path;
    },
  },
};
</script>

<style>
</style>