<template>
  <div>
    <div>我是Test1</div>
    <input v-model="msg" />
    <input type="checkbox" v-model="bool" />
  </div>
</template>

<script>
export default {
  name: 'Test1',
  data() {
    return {
      msg: '1',
      bool: true,
    }
  }
};
</script>

<style>
</style>