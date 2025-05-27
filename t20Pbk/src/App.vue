<template>
  <div>
    <h2>Aplikasi KopiKuy</h2>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/menu">Menu</router-link> |
      <router-link to="/cart">Keranjang</router-link> |
      <router-link to="/history">Riwayat</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/admin">Admin</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
