import { ref } from 'vue'
import { authRef } from '@/firebase/config'

const error = ref(null)

const login = async () => {
    error.value = null

    try {
        const res = await authRef.signInAnonymously()
        error.value = null
        return res
    } catch (error) {
        console.log(error.message);
        error.value = 'Giriş Yapılamadı.'
    }
}


const girisYap = () => {
    return { error, login }
}


export default girisYap