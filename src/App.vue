<template>
    <div class="nav">
        <router-link :to="{ name: 'home' }" class="router">Anasayfa</router-link>
        <router-link :to="{ name: 'about' }" class="router">Hakkımızda</router-link>
    </div>
    <router-view></router-view>
</template>

<style>
body {
    font-family: Arial, Helvetica, sans-serif;
    background: rebeccapurple;
}

.nav {
    display: flex;
    justify-content: center;
}
.router{
    color: white;
    text-decoration: none;
    margin: 20px;
    border-bottom: 1px solid white;
}
</style>
