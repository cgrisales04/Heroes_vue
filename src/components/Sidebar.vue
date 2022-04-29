<template>
  <div class="sidebar">
    <ul class="lista-opciones pt-4">
      <h3 class="title mb-5">
        <strong><i class="fas fa-dragon"></i> H E R O E S</strong>
      </h3>
      <li>
        <i class="item fas fa-search me-3"></i>
        <router-link class="item" to="/HeroeSearch"> Buscar heroe</router-link>
      </li>
      <li>
        <i class="item fas fa-users me-3"></i>
        <router-link class="item" to="/Heroes">Ver heroes</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SidebarComponent",
};
</script>

<style scoped>
.title {
  color: #ffcf00;
}
.sidebar {
  height: 100%;
  background: #1b1b1b;
}
.lista-opciones {
  list-style: none;
  margin-top: 50% !important;
  margin: 0;
  padding: 0;
}
.lista-opciones li {
  padding: 10px;
  margin-left: 8px;
  margin-right: 8px;
}
.lista-opciones li:hover {
  background: #393939;
  border-radius: 5px;
}

.item {
  text-decoration: none;
  color: white;
}



</style>