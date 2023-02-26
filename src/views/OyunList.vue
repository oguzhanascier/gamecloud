<template>
    <div class="oyunList">
        <h1>Oyun Listesi</h1>
        <ul>
            <li v-for="oyun in oyunlar" :key="oyun.id">
                <span>videogame-assest</span>
                <div>
                    {{ oyun.oyunAd }}
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
export default {
    setup() {
        const store = useStore()
        const oyunlar = computed(() => {
            return store.state.oyunlar;
        })
        return { oyunlar }
    }
}
</script>

<style scoped>
.oyınList ul {
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
    max-width: 600px;
    margin: 60px auto;
}

.oyunList li {
    list-style-type: none;
    background: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    line-height: 1.5em;
    text-transform: capitalize;
}

</style>