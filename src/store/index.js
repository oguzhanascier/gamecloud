import { createStore } from 'vuex'
import getDocuments from '@/composables/getDocument'

const {err, documents}= getDocuments('oyunlar')

export default createStore({
  state: {
    oyunlar:documents,
    err:err
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
