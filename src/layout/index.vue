<template>
  <router-view v-slot="{ Component }">
    <transition name="fade-transform" mode="out-in">
      <div>
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </div>
    </transition>
  </router-view>
</template>

<script>
export default {};
</script>

<style>
</style>