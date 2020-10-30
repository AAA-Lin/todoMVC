<template>
  <footer class="footer">
    <span class="todo-count"><strong>{{checkedNum}}</strong> item left</span>
    <ul class="filters">
      <li>
        <router-link :class="{'selected':$route.path==='/'}" to="/">All</router-link>
      </li>
      <li>
        <router-link :class="{'selected':$route.path==='/active'}" to="/active">Active</router-link>
      </li>
      <li>
        <router-link :class="{'selected':$route.path==='/completed'}" to="/completed">Completed</router-link>
      </li>
    </ul>
    <button class="clear-completed" @click="clear" v-show="doList.some(item=>item.completed)">Clear completed</button>
  </footer>
</template>

<script>
import {mapState,mapMutations} from "vuex"
export default {
  computed:{
    ...mapState(["doList"]),
    checkedNum(){
      return this.doList.filter(item=>item.completed).length
    }
  },
  methods:{
    ...mapMutations(["clear"])
  }
};
</script>

<style>
</style>