import { ref } from 'vue'
import { authRef } from '@/firebase/config'

const kullanici = ref(authRef.currentUser)
console.log(kullanici);
authRef.onAuthStateChanged(k => {
    kullanici.value = k
})

const getUser = () => {
    return { kullanici }
}

export default getUser