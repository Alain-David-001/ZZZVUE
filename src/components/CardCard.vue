<template>
  <div :class=cardclass :id="cardid">

    <img :src=linkfoto class="container-fluid card-img-top" />
    <div class="container-fluid card-body">
      <div>
        <h5 class="card-title"> {{ card.name }} </h5>
        <h5 class="price"> ${{ card.price }} </h5>
      </div>
      <p class="card-text"> {{ card.texto }} </p>
      <div class="container-fluid botones">
        <a href="ver_foto.html" class="btn btn-primary" @click="btn1">Ver</a>
        <a class="btn btn-primary" :id="btnid1" @click="compra(card.id)">Comprar</a>
        <a class="btn btn-primary" :id="btnid2" style='display: none;' @click="cancelar(card.id)">
          Cancelar</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  data() {
    return {
      cardclass: `container-fluid card ${this.card.sexo}`,
      cardid: `card${this.card.id}`,
      btn1: `ver(${this.card.id})`,
      btnid1: `buy_btn_${this.card.id}`,
      btnid2: `cancel_btn_${this.card.id}`,
      linkfoto: `src/assets/img/shoes/z${this.card.id}.jpg`
    }
  },
  props: {
    card: {
      type: Object,
      /* required: true, */
      default: () => { },
    },
    totalprice: {
      type: Number
    }
  },
  mounted() {
    /* this.cam_datos(); */
  },
  methods: {
    compra: function (num) {
      document.getElementById(`card${num}`).style.backgroundColor =
        "lightgreen";
      document.getElementById(`buy_btn_${num}`).style.display = "none";
      document.getElementById(`cancel_btn_${num}`).style.display = "block";
      this.$emit('totalprice-change', this.card.price)
    },
    cancelar: function (num) {
      if (this.card.sexo == 'man')
        document.getElementById(`card${num}`).style.backgroundColor = "#c18c5d";
      else document.getElementById(`card${num}`).style.backgroundColor = "#e7ad99";
      document.getElementById(`buy_btn_${num}`).style.display = "block";
      document.getElementById(`cancel_btn_${num}`).style.display = "none";
      this.$emit('totalprice-change', -this.card.price)
    }
  },
};
</script>

<style scoped>
</style>
