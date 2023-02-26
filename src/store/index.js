import { createStore } from 'vuex'
import getDocuments from '@/composables/getDocument'
import docProcess from '@/composables/docProcess'

const { error, documents } = getDocuments('oyunlar')
const { hata, ekle, sil } = docProcess('oyunlar')

export default createStore({
  state: {
    oyunlar: documents,
    error: error,
    hata:hata
  },
  getters: {
  },
  mutations: {
    ekleMutation(state, oyun) {
      let oyunN = {
        oyundAd: oyun
      }
      ekle(oyunN)
    },
    silMutation(state, id) {
      sil(id)
    }
  },
  actions: {
    oyunEkleAction(context, oyun) {
      context.commit('ekleMutation', oyun)
    },
    oyunSilAction(context, id) {
      context.commit('silMutation', id)
    }
  },
  modules: {
  }
})
