<template>
    <div>
        <div v-if="kullanici" class="nav">
            <router-link :to="{ name: 'ekle' }" class="router">Oyun Ekle</router-link>
            <router-link :to="{ name: 'oyunlar' }" class="router">Oyunlar</router-link>
            <button @click="handleCikis" class="out">Çıkış Yap</button>
        </div>
        <div class="nav" v-else>
            <router-link :to="{ name: 'home' }" class="router">Anasayfa</router-link>
            <router-link :to="{ name: 'about' }" class="router">Hakkımızda</router-link>
            
        </div>
    </div>
    <router-view></router-view>
</template>

<script>
import getUser from './composables/GetUser'
import cikisYap from './composables/CikisYap'
import { useRouter } from 'vue-router'
export default {
    setup() {
        const { kullanici } = getUser()
        const { logout } = cikisYap()
        const router = useRouter()
        console.log(kullanici);
        const handleCikis = async () => {
            await logout();
            router.push('/')

        }

        return { kullanici,  handleCikis }
    }
}
</script>

<style>
body {
    font-family: Arial, Helvetica, sans-serif;
    background: rebeccapurple;
}

.nav {
    display: flex;
    justify-content: center;
}

.router {
    color: white;
    text-decoration: none;
    margin: 20px;
    border-bottom: 1px solid white;
}

.out{
background: rgb(255, 255, 255);
border: none;
border-radius: 50%;
cursor: pointer;
}
</style>
