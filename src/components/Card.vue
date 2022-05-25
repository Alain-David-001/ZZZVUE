<template>

    <div class="container-fluid card ${sexo}" id="card${i}">
        <img src="src/assets/img/shoes/z${i}.jpg" class="container-fluid card-img-top" />
        <div class="container-fluid card-body">
            <div>
                <h5 class="card-title"> ${this.names[i - 1]} </h5>
                <h5 class="price"> $${this.prices[i - 1]} <h5>
            </div>
            <p class="card-text"> ${this.textos[i - 1]} </p>
            <div class="container-fluid botones">
                <a href="ver_foto.html" class="btn btn-primary" onclick="ver(${i})">Ver</a>
                <a class="btn btn-primary" id="buy_btn_${i}" onclick="compra(${i})">Comprar</a>
                <a class="btn btn-primary" id="cancel_btn_${i}" style='display: none;' onclick="cancelar(${i})">
                    Cancelar</a>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: "Card",
    props: reloco,

}
</script>

<style scoped>
</style>