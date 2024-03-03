<template>
    <div class="produk">
        <navbar></navbar>
        <h2>Daftar Produk</h2> 
    </div>
</template>

<script>
import Navbar from "./Navbar.vue";

export default {
    name: 'produk',
    components: {
        Navbar: Navbar
    }
}
</script>