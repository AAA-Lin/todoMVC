<template>
  <header class="header">
    <h1>todos</h1>
    <input class="new-todo" placeholder="What needs to be done?" v-focus @keyup.enter.exact="addList"/>
  </header>
</template>

<script>
import {mapMutations} from 'vuex';
export default {
  methods:{
      addList(){
          this.$store.commit("addList",{"val":event.target.value});
          event.target.value=""
      }
  }
};
</script>

<style>
</style>