<template>
  <p>
    <router-link to="/example/example1">/users/eduardo</router-link>
    <br />
    <router-link to="/example/example2">/users/eduardo/profile</router-link>
    <br />
    <router-link to="/dashboard">/users/eduardo/posts</router-link>
  </p>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.5s;
}

.fade-transform-enter {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
