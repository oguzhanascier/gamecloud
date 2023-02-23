import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { authRef } from './firebase/config'

let app;

authRef.onAuthStateChanged(() => {
    if (!app) {
        createApp(App).use(store).use(router).mount('#app')

    }
})

