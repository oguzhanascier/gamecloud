<template>
  <div class="home">
    <div class="body">
      <h1>Game Cloud</h1>
      <p>Buluta oyun eklemek ve oyunları görmek için giriş yapınız.</p>
      <button>Misafir Girişi</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
 
}
</script>


<style scoped>
.home{
  display: flex;
  justify-content: center;
}
.body{
  background: rgba(225, 202, 247, 0.437);
  width: 50%;
  text-align: center;
  padding: 10px;
  height: 300px;
}

button{
  background: rebeccapurple;
  color: white;
  font-size: 16px;
  font-weight: 400;
  width: 120px;
  height: 30px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>