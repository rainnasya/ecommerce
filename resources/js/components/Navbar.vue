<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
        <a class="navbar-brand" href="#">Shopping Apps</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/produk">Produk</router-link>
            </li>
          </ul>
          <!-- <ul class="navbar-nav nr-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/keranjang">Keranjang <i class="bi bi-bag"></i></router-link>
            </li>
          </ul> -->

        </div>
    </div>
  </nav>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Navbar",
});
</script>