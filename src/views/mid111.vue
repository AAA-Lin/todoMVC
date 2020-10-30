<template>
  <section class="main">
    <input id="toggle-all" class="toggle-all" type="checkbox" />
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <li
        :class="{ completed: item.completed }"
        v-for="(item,i) in list"
        :key="item.id"
      >
        <div class="view" v-show="index !== item.id">
          <input
            class="toggle"
            type="checkbox"
            :checked="item.completed"
            @change="
              changeStatus(item.id)
            "
          />
          <label @dblclick="changeIndex(item.id)">{{ item.desc }}</label>
          <button class="destroy" @click="delList(item.id,i)"></button>
        </div>
        <!-- 编辑框 -->
        <input
          type="text"
          class="edit"
          :style="{ display: index === item.id ? 'block' : 'none' }"
          :value="item.desc"
          @change="changeList(item.id)"
        />
      </li>
    </ul>
  </section>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      index: -1,
      list: [],
    };
  },
  computed: {
    ...mapState(["doList"]),
  },
  watch: {
    $route: {
      handler(to, from) {
        switch (to.path) {
          case "/":
            this.list = this.doList;
            break;
          case "/active":
            this.list = this.doList.filter((item) => !item.completed);
            break;
          case "/completed":
            this.list = this.doList.filter((item) => item.completed);
            break;
          default:
            console.log("????出错了");
        }
      },
      immediate: true,
    }
  },
  methods: {
    changeStatus(id){
      this.$store.commit("changeStatus",{ idx: id, status: event.target.checked })
       //this.list不能响应dolist的变化
      
    },
    delList(id,i){
      this.$store.commit("delList",{idx:id});
      //this.list不能响应dolist的变化
      this.list.splice(i,1)
    },
    changeIndex(id) {
      this.index = id;
    },
    changeList(id) {
      this.$store.commit("changeList", { idx: id, desc: event.target.value });
      this.index = -1;
    },
  },
};
</script>

<style>
</style>