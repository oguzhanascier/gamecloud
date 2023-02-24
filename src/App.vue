<template>
    <div v-if="!user" class="nav">
        <router-link :to="{ name: 'ekle' }" class="router">Oyun Ekle</router-link>
        <router-link :to="{ name: 'oyunlar' }" class="router">Oyunlar</router-link>
    </div>
    <div class="nav" v-else>
        <router-link :to="{ name: 'home' }" class="router">Anasayfa</router-link>
        <router-link :to="{ name: 'about' }" class="router">Hakkımızda</router-link>
    </div>
    <router-view></router-view>
</template>

<script>
import getUser from './composables/GetUser'
export default {
    setup() {
        const { user } = getUser()

        return { user }
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
</style>
