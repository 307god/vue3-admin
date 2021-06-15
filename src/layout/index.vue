<template>
  <router-view v-slot="{ Component }">
    <transition name="fade-transform" mode="out-in">
        <keep-alive include="Test1">
          <component :is="Component" :key="key" />
        </keep-alive>
    </transition>
    <div>
      <keep-alive include="Test1">
        <component :is="Component" />
      </keep-alive>
    </div>
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