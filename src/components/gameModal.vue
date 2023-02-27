<template>
    <div class="modal-wrapper">
        <div class="modal">
            Lütfen Oyun Adını giriniz
        </div>
    </div>
</template>

<script>
export default {

};
</script>

<style lang="scss">
.modal-wrapper{
    position: fixed;
    width: 100%;
    top: 20px;
}

.modal{
    padding: 20px;
    border: 1px solid white;
    background: rebeccapurple;
    border-radius: 10px;
    box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.2);
    max-width: 400px;
    margin: 0 auto;
}
</style>