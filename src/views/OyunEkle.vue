<template>
    <div class="oyunlar">
        <input type="text" v-model="yeniOyun" @keypress.enter="oyunEkle" placeholder="Oyun Ekle">
        <ul>
            <!-- <li v-for="oyun in oyunlar" :key="oyun.id" @click="oyunSil(oyun.id)">
                {{ oyun.oyunAd }}
            </li> -->
        </ul>
    </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { ref } from 'vue';
export default {
    setup() {
        const store = useStore()
        const yeniOyun = ref('')
        const oyunlar = computed(() => {
            return store.state.oyunlar
        })
        const oyunEkle = () => {
            if (yeniOyun.value) {
                store.dispatch('oyunEkleAction', yeniOyun.value)
                yeniOyun.value = ''
            } else {
                console.log('object');
            }
        }
      
        return { oyunlar, yeniOyun, oyunEkle }
    }

}

</script>

<style scoped>
input{
    border: none;
    padding: 5px;
    width: 350px;
    height: 20px;
    text-align: center;
    border-radius: 10px;
    outline: none;
    box-shadow: 5px 5px 5px black;
}

input:focus{
    box-shadow: 0px 1px 1px black inset;
}

.oyunlar{
    display: flex;
    justify-content: center;
    margin-top: 20px;
    
}
</style>