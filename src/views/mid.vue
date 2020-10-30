<template>
  <section class="main">
    <input id="toggle-all" class="toggle-all" type="checkbox" />
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <li
        :class="{ completed: item.completed }"
        v-for="(item, i) in list"
        :key="item.id"
      >
        <div class="view" v-show="index !== item.id">
          <input
            class="toggle"
            type="checkbox"
            :checked="item.completed"
            @change="
              changeStatus({ idx: item.id, status: $event.target.checked })
            "
          />
          <label @dblclick="changeIndex(item.id, i)">{{ item.desc }}</label>
          <button class="destroy" @click="delList({ idx: item.id })"></button>
        </div>
        <!-- 编辑框 -->
        <input
          type="text"
          class="edit"
          :style="{ display: index === item.id ? 'block' : 'none' }"
          :value="item.desc"
          @keyup.enter.exact="changeList(item.id)"
          @change="changeList(item.id)"
          ref="edit"
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
    },
    //this.list 不能响应doList的变化
    doList: {
      handler(nVal) {
        switch (this.$route.path) {
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
      immedeiate: true,
      deep: true,
    },
  },
  methods: {
    ...mapMutations(["changeStatus", "delList"]),
    changeIndex(id, i) {
      this.index = id;
      //等页面更新渲染后执行
      this.$nextTick(function () {
        this.$refs.edit[i].select();
      });
    },
    changeList(id) {
      if (event.target.value)this.$store.commit("changeList", { idx: id, desc: event.target.value });
      this.index = -1;
    },
  },
};
</script>

<style>
</style>