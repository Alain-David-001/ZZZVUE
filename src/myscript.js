var sexos = [0, 1, 1, 1, 0, 0, 0];
var names = [
  "Zapato 1",
  "Zapato 2",
  "Zapato 3",
  "Zapato 4",
  "Zapato 5",
  "Zapato 6",
  "Zapato 7",
];
var textos = [
  "Estos zapatos son la ostia, te encantarán te lo aseguro, compra ya, no lo pienses más. Vamos !!! 1",
  "Estos zapatos son la ostia, te encantarán te lo aseguro, compra ya, no lo pienses más. Vamos !!! 2",
  "Estos zapatos son la ostia, te encantarán te lo aseguro, compra ya, no lo pienses más. Vamos !!! 3",
  "Estos zapatos son la ostia, te encantarán te lo aseguro, compra ya, no lo pienses más. Vamos !!! 4",
  "Estos zapatos son la ostia, te encantarán te lo aseguro, compra ya, no lo pienses más. Vamos !!! 5",
  "Estos zapatos son la ostia, te encantarán te lo aseguro, compra ya, no lo pienses más. Vamos !!! 6",
  "Estos zapatos son la ostia, te encantarán te lo aseguro, compra ya, no lo pienses más. Vamos !!! 7",
];
var prices = [52, 107, 44.99, 7, 123, 556, 10];

var s = document.getElementById("cards");

function crear_cards(cant) {
  s.innerHTML = "";
  for (var i = 1; i <= cant; i++) {
    var sexo;
    if (sexos[i - 1]) sexo = "man";
    else sexo = "woman";
    s.innerHTML += ` <div class="container-fluid card ${sexo}" id="card${i}">
                        <img src="src/assets/img/shoes/z${i}.jpg" class="container-fluid card-img-top" />
                        <div class="container-fluid card-body">
                            <div>
                            <h5 class="card-title"> ${names[i - 1]} </h5>
                           <h5 class="price">  $${prices[i - 1]} <h5> 
                           </div>
                            <p class="card-text"> ${textos[i - 1]} </p>
                        <div class="container-fluid botones">
                            <a href="ver_foto.html" class="btn btn-primary" onclick="ver(${i})">Ver</a>
                            <a class="btn btn-primary" id="buy_btn_${i}" onclick= "(compra(${i}))">Comprar</a>
                            <a class="btn btn-primary" id="cancel_btn_${i}" style='display: none;' onclick= "(cancelar(${i}))">
                            Cancelar</a>
                        </div>
                        </div>
                    </div> `;
  }
}

crear_cards(7);

function solotodos(cant) {
  for (var i = 1; i <= cant; i++)
    document.getElementById(`card${i}`).style.display = "grid";
}

function soloman(cant) {
  for (var i = 1; i <= cant; i++)
    if (sexos[i - 1])
      document.getElementById(`card${i}`).style.display = "grid";
    else document.getElementById(`card${i}`).style.display = "none";
}

function solowoman(cant) {
  for (var i = 1; i <= cant; i++)
    if (!sexos[i - 1])
      document.getElementById(`card${i}`).style.display = "grid";
    else document.getElementById(`card${i}`).style.display = "none";
}

function filtrar() {
  var ch1 = document.getElementById("flexRadioDefault1");
  var ch2 = document.getElementById("flexRadioDefault2");
  var ch3 = document.getElementById("flexRadioDefault3");
  if (ch1.checked) solotodos(7);
  if (ch2.checked) soloman(7);
  if (ch3.checked) solowoman(7);
}

let totalprice = 0;

function upd() {
  document.getElementById(
    "precio_total"
  ).innerHTML = `Comprar ($${totalprice})`;
}

function compra(num) {
  document.getElementById(`card${num}`).style.backgroundColor = "lightgreen";
  document.getElementById(`buy_btn_${num}`).style.display = "none";
  document.getElementById(`cancel_btn_${num}`).style.display = "block";
  totalprice += prices[num - 1];
  upd();
}

function cancelar(num) {
  if (sexos[num])
    document.getElementById(`card${num}`).style.backgroundColor = "#c18c5d";
  else document.getElementById(`card${num}`).style.backgroundColor = "#e7ad99";
  document.getElementById(`buy_btn_${num}`).style.display = "block";
  document.getElementById(`cancel_btn_${num}`).style.display = "none";
  totalprice -= prices[num - 1];
  upd();
}

/* function ver(num) {
  document.getElementById(`foto_grande`).src = `img/shoes/z${num}.jpg`;
  alert(num);
} */
