<template>
  <div class="home">
    <div class="body">
      <h1>Game Cloud</h1>
      <p>Buluta oyun eklemek ve oyunları görmek için giriş yapınız.</p>
      <button>Misafir Girişi</button>
    </div >
  </div>
</template>

<script>
import girisYap from '@/composables/GirisYap';
import { useRouter } from 'vue-router';
export default {
  name: 'HomeView',
  setup() {
    const { login } = girisYap()
    const router = useRouter()
    const handleGiris = async () => {
      await login()
      router.push({ name: 'ekle' })
    }
    return {handleGiris}
  }
}
</script>


<style scoped>
.home {
  height: 100vh;
  display: flex;
  justify-content: center;
}

.body {
  width: 50%;
  text-align: center;
  padding: 10px;
  height: 300px;
}

h1 {
  color: white;

}

p {
  color: white;
}

button {
  color: black;
  font-size: 16px;
  font-weight: 400;
  width: 120px;
  height: 30px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>