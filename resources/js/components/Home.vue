<template>
  <div class="home">
    <navbar></navbar>
    <div class="container">
      <hero></hero>
<br>  
      <div class="row mt-4">
        <div class="col">
          <h2>
            Daftar
            <strong>Produk</strong>
          </h2>
        </div>
      </div>

      <table class="table">
        <thead>
          <tr>
            <th>Nama</th>
            <th>Deskripsi</th>
            <th>Stok</th>
            <th>Harga</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <!-- <tr v-for="product in products" :key="product.name">
            <td style="padding: 10px">{{ product.name }}</td>
            <td style="padding: 10px">{{ product.description }}</td>
            <td style="padding: 10px">{{ product.stock }}</td>
            <td style="padding: 10px">Rp. {{ product.price }}</td>
            <td style="padding: 10px">
              <button @click="addToCart(product)" :disabled="product.stock === 0" class="btn btn-primary mt-3">Add to cart</button>
            </td>
          </tr> -->
        </tbody>
      </table>

    </div>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
import Hero from "./Hero.vue";

export default {
    name: 'home',
    components: {
        Navbar: Navbar,
        Hero: Hero
    }
}
</script>