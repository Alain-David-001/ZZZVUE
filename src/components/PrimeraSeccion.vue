<template>
  <div class="container-fluid">
    <!-- Selector del filtrado -->
    <div class="selector">
      <div class="form-check form-check--center-content pad">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked=""
          style="margin-right: 5px; cursor: pointer;" @click="filtrar()" />
        <label class="form-check-label" for="flexRadioDefault1" style="cursor: pointer;"> Todos </label>
      </div>
      <div class="form-check form-check--center-content pad">
        <input class="form-check-input mar" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
          style="margin-right: 5px; cursor: pointer;" @click="filtrar()" />
        <label class="form-check form-check-label pad" for="flexRadioDefault2" style="cursor: pointer;">
          Hombre
        </label>
      </div>
      <div class="form-check form-check--center-content pad">
        <input class="form-check-input mar" type="radio" name="flexRadioDefault" id="flexRadioDefault3"
          style="margin-right: 5px; cursor: pointer;" @click="filtrar()" />
        <label class="form-check-label" for="flexRadioDefault3" style="cursor: pointer;"> Mujer </label>
      </div>
    </div>

    <!-- boton de filtrado -->
    <!-- <div class="container-fluid caja_de_filtrar center-content">
      <button type="button" class="btn btn-primary" @click="filtrar()">
        Filtrar
      </button>
    </div> -->
    <!-- Cards con los zapatos -->
    <div class="cardboard" id="cards">
      <CardCard v-for="card in cards" :card="card" :totalprice="totalPrice" class="container-fluid "
        @totalprice-change="upd"></CardCard>
    </div>

    <!-- Boton de compra -->
    <div class="boton_compra">
      <button type="button" class="btn btn-success">
        <h2 id="precio_total" @click="comprafinal(7)">Comprar (${{ totalPrice }})</h2>
      </button>
    </div>
  </div>
</template>

<script>
import CardCard from "./CardCard.vue";

export default {
  name: "PrimeraSeccion",

  data() {
    return {
      totalPrice: 0,

      cards: [
        {
          id: 1,
          sexo: "woman",
          name: "Zapato 1",
          price: 52,
          texto: "Estos zapatos son la ostia, te encantarán te lo aseguro, compra ya, no lo pienses más. Vamos !!! 1",
        },
        {
          id: 2,
          sexo: "man",
          name: "Zapato 2",
          price: 107,
          texto: "Estos zapatos son la ostia, te encantarán te lo aseguro, compra ya, no lo pienses más. Vamos !!! 2",
        },
        {
          id: 3,
          sexo: "man",
          name: "Zapato 3",
          price: 44,
          texto: "Estos zapatos son la ostia, te encantarán te lo aseguro, compra ya, no lo pienses más. Vamos !!! 3",
        },
        {
          id: 4,
          sexo: "man",
          name: "Zapato 4",
          price: 7,
          texto: "Estos zapatos son la ostia, te encantarán te lo aseguro, compra ya, no lo pienses más. Vamos !!! 4",
        },
        {
          id: 5,
          sexo: "woman",
          name: "Zapato 5",
          price: 123,
          texto: "Estos zapatos son la ostia, te encantarán te lo aseguro, compra ya, no lo pienses más. Vamos !!! 5",
        },
        {
          id: 6,
          sexo: "woman",
          name: "Zapato 6",
          price: 556,
          texto: "Estos zapatos son la ostia, te encantarán te lo aseguro, compra ya, no lo pienses más. Vamos !!! 6",
        },
        {
          id: 7,
          sexo: "woman",
          name: "Zapato 7",
          price: 10,
          texto: "Estos zapatos son la ostia, te encantarán te lo aseguro, compra ya, no lo pienses más. Vamos !!! 7",
        },
      ],
    };
  },

  mounted() {
  },

  methods: {

    upd: function (delta) {
      this.totalPrice += delta;
    },

    solotodos: function (cant) {
      for (var i = 1; i <= cant; i++)
        document.getElementById(`card${i}`).style.display = "grid";
    },

    soloman: function (cant) {
      for (var i = 1; i <= cant; i++)
        if (this.cards[i - 1].sexo == 'man')
          document.getElementById(`card${i}`).style.display = "grid";
        else document.getElementById(`card${i}`).style.display = "none";
    },

    solowoman: function (cant) {
      for (var i = 1; i <= cant; i++)
        if (this.cards[i - 1].sexo == 'woman')
          document.getElementById(`card${i}`).style.display = "grid";
        else document.getElementById(`card${i}`).style.display = "none";
    },

    filtrar: function () {
      var ch1 = document.getElementById("flexRadioDefault1");
      var ch2 = document.getElementById("flexRadioDefault2");
      var ch3 = document.getElementById("flexRadioDefault3");
      console.log(ch1.checked);
      console.log(ch2.checked);
      console.log(ch3.checked);
      if (ch1.checked) this.solotodos(7);
      if (ch2.checked) this.soloman(7);
      if (ch3.checked) this.solowoman(7);
    },

    comprafinal: function (cant) {
      alert(`Gracias por su compra !!!`);
      for (var i = 1; i <= cant; i++) {
        if (document.getElementById(`buy_btn_${i}`).style.display == "none") {
          if (this.cards[i - 1].sexo == 'man')
            document.getElementById(`card${i}`).style.backgroundColor = "#c18c5d";
          else document.getElementById(`card${i}`).style.backgroundColor = "#e7ad99";

          document.getElementById(`buy_btn_${i}`).style.display = "block";
          document.getElementById(`cancel_btn_${i}`).style.display = "none";
          this.totalPrice -= this.cards[i - 1].price;
        }

      }
    }
  },

  components: {
    CardCard,
  },
};
</script>

<style scoped>
</style>
