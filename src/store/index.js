import { createStore } from 'vuex'
import categories from "./modules/categories";
import questions from "./modules/questions";

export default createStore({
  namespaced: true,
  state: {
  },
  mutations: {
  },
  actions: {

    initApp({dispatch}){

      dispatch("categories/fetchCategories")
    }

  },
  modules: {
    categories,
    questions
  }
})
