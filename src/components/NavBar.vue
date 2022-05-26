<template>
  <div class="container-fluid">
    <a class="navbar-brand texto_logo" href="#">ZZZapatos</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"><img src="src\assets\img\menu_button.jpg" alt="logo"
          style="width: 30px; height: 30px" /></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
            aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li>
              <a class="dropdown-item" href="#">Something else here</a>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>

      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Ingrese su usuario" aria-label="Search" />
        <input class="form-control me-2" type="search" placeholder="Ingrese su contraseña" aria-label="Search"
          style="display: none" />
        <button class="btn btn-outline-success" type="submit" style="margin-right: 16px">
          Login
        </button>
      </form>
      <nav class="navbar bg-light">
        <div class="container center-content pad" style="padding: 0">
          <a class="navbar-brand center-content" href="#" style="margin: 0">
            <img src="src\assets\img\pfp_default.jpg" alt="pfp del usuario" width="35" height="28" />
          </a>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
@import "D:\Mis proyectos\zzzvue\src\assets\mystyle.css";
</style>
