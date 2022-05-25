<template>
  <div class="container-fluid">
    <!-- Selector del filtrado -->
    <div class="selector">
      <div class="form-check form-check--center-content pad">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
          style="margin-right: 5px" />
        <label class="form-check-label" for="flexRadioDefault1"> Todos </label>
      </div>
      <div class="form-check form-check--center-content pad">
        <input class="form-check-input mar" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked=""
          style="margin-right: 5px" />
        <label class="form-check form-check-label pad" for="flexRadioDefault2">
          Hombre
        </label>
      </div>
      <div class="form-check form-check--center-content pad">
        <input class="form-check-input mar" type="radio" name="flexRadioDefault" id="flexRadioDefault3"
          style="margin-right: 5px" />
        <label class="form-check-label" for="flexRadioDefault3"> Mujer </label>
      </div>
    </div>

    <!-- boton de filtrado -->
    <div class="container-fluid caja_de_filtrar center-content">
      <button type="button" class="btn btn-primary" @click="filtrar()">
        Filtrar
      </button>
    </div>
    <!-- Cards con los zapatos -->
    <div class="cardboard" id="cards"></div>

    <!-- Boton de compra -->

    <div class="boton_compra">
      <button type="button" class="btn btn-success">
        <h2 id="precio_total">Comprar (${{ totalprice }})</h2>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PrimeraSeccion",
  data() {
    return {
      sexos: [0, 1, 1, 1, 0, 0, 0],
      names: [
        "Zapato 1",
        "Zapato 2",
        "Zapato 3",
        "Zapato 4",
        "Zapato 5",
        "Zapato 6",
        "Zapato 7",
      ],
      textos: [
        "Estos zapatos son la ostia, te encantarán te lo aseguro, compra ya, no lo pienses más. Vamos !!! 1",
        "Estos zapatos son la ostia, te encantarán te lo aseguro, compra ya, no lo pienses más. Vamos !!! 2",
        "Estos zapatos son la ostia, te encantarán te lo aseguro, compra ya, no lo pienses más. Vamos !!! 3",
        "Estos zapatos son la ostia, te encantarán te lo aseguro, compra ya, no lo pienses más. Vamos !!! 4",
        "Estos zapatos son la ostia, te encantarán te lo aseguro, compra ya, no lo pienses más. Vamos !!! 5",
        "Estos zapatos son la ostia, te encantarán te lo aseguro, compra ya, no lo pienses más. Vamos !!! 6",
        "Estos zapatos son la ostia, te encantarán te lo aseguro, compra ya, no lo pienses más. Vamos !!! 7",
      ],
      prices: [52, 107, 44.99, 7, 123, 556, 10],
      totalprice: 0
    }
  },

  mounted() {
    this.crear_cards(7);
  },

  methods: {
    crear_cards: function (cant) {
      var s = document.getElementById("cards");
      for (var i = 1; i <= cant; i++) {
        var sexo;
        if (this.sexos[i - 1]) sexo = "man";
        else sexo = "woman";
        s.innerHTML += ` <div class="container-fluid card ${sexo}" id="card${i}">
                    <img src="src/assets/img/shoes/z${i}.jpg" class="container-fluid card-img-top" />
                    <div class="container-fluid card-body">
                        <div>
                        <h5 class="card-title"> ${this.names[i - 1]} </h5>
                        <h5 class="price">  $${this.prices[i - 1]} <h5> 
                        </div>
                        <p class="card-text"> ${this.textos[i - 1]} </p>
                    <div class="container-fluid botones">
                        <a href="ver_foto.html" class="btn btn-primary" onclick="ver(${i})">Ver</a>
                        <a class="btn btn-primary" id="buy_btn_${i}" @click="(compra(${i}))">Comprar</a>
                        <a class="btn btn-primary" id="cancel_btn_${i}" style='display: none;' onclick= "(cancelar(${i}))">
                        Cancelar</a>
                    </div>
                    </div>
                  </div> `;
      }
    },

    solotodos: function (cant) {
      for (var i = 1; i <= cant; i++)
        document.getElementById(`card${i}`).style.display = "grid";
    },

    soloman: function (cant) {
      for (var i = 1; i <= cant; i++)
        if (this.sexos[i - 1])
          document.getElementById(`card${i}`).style.display = "grid";
        else document.getElementById(`card${i}`).style.display = "none";
    },

    solowoman: function (cant) {
      for (var i = 1; i <= cant; i++)
        if (!this.sexos[i - 1])
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

    compra: function (num) {
      alert(3);
      document.getElementById(`card${num}`).style.backgroundColor = "lightgreen";
      document.getElementById(`buy_btn_${num}`).style.display = "none";
      document.getElementById(`cancel_btn_${num}`).style.display = "block";
      totalprice += this.prices[num - 1];
    }
  }
};

</script>

<style scoped>
</style>
