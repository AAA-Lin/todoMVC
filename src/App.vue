<template>
  <div class="todoapp">
    <Heard></Heard>
    <router-view></router-view>
    <Foot></Foot>
  </div>
</template>

<script>
import Heard from "./components/heard"
import Foot from "./components/foot"
export default {
  components:{
    Heard,
    Foot
  }
};
</script>

<style>
</style>
