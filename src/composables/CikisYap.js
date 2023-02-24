import { ref } from 'vue'
import { authRef } from '@/firebase/config'

const error = ref(null)

const logout = async () => {
    error.value = null

    try {
        await authRef.signOut()
        error.value = null

    } catch (error) {
        console.log(error.message);
        error.value = 'Çıkış Yapılamadı.'
    }
}


const cikisYap = () => {
    return { error, logout }
}


export default cikisYap