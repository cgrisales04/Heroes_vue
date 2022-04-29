<template>
  <div id="app" class="row gx-0">
    <SidebarComponent class="col-md-2"/>
    <router-view class="col-md-10 ps-4 pe-4 pt-4"/>
  </div>
</template>

<script>
import SidebarComponent from "./components/Sidebar.vue";

export default {
  name: "App",
  components: {
    SidebarComponent,
  },
  data() {
    return {
      MensajeHijoPadre: "Aqui se mostrará mensaje Hijo-Padre",
    };
  },
  methods: {
    asignarNombreHijoPadre(data) {
      this.MensajeHijoPadre = data;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
}
</style>
