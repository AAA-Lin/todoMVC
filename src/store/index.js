import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        doList: [{
            id: 1,
            desc: "HTML课程",
            completed: true
        }, {
            id: 2,
            desc: "CSS课程",
            completed: false
        }]
    },
    mutations: {
        addList(state, { val }) {
            state.doList.push({
                id: state.doList[state.doList.length - 1].id + 1,
                desc: val,
                completed: false
            })
        },
        changeStatus(state, { idx, status }) {
            state.doList.find(item => item.id == idx).completed = status
        },
        delList(state, { idx }) {
            let index = state.doList.findIndex(item => item.id == idx)
            state.doList.splice(index, 1)
        },
        changeList(state, { idx, desc }) {
            state.doList.find(item => item.id == idx).desc = desc
        },
        clear(state) {
            state.doList = state.doList.filter(item => !item.completed)
        }
    },
    actions: {},
    modules: {}
})