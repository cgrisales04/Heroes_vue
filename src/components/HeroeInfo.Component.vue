<template>
  <div>
    <div class="row mt-5">
      <!-- Imagen -->
      <div class="imagen-hero col-md-5 animate__animated animate__fadeInDown">
        <img :src="heroe.image.url" width="430" />
      </div>

      <!-- Info Hero -->
      <div class="ms-5 col-md-6 d-flex flex-column justify-content-between">
        <!-- Info text -->
        <div class="info-hero">
          <h1 class="mb-5 d-flex align-items-end justify-content-between">
            <strong class="animate__animated animate__fadeInRight">Heroe {{ heroe.name }}</strong>
            <router-link class="item mt-3" to="/HeroeSearch">
              <i class="icon-arrow far fa-arrow-alt-circle-left"></i
            ></router-link>
          </h1>
          <div class="d-flex align-items-center mb-2">
            <h4 class="me-1"><strong>Comic: </strong></h4>
            {{ heroe.biography.publisher }}
          </div>
          <div class="d-flex align-items-center mb-3">
            <h4 class="me-1"><strong>Genero: </strong></h4>
            {{ heroe.appearance.gender }}
          </div>
          <div class="d-flex align-items-center mb-3">
            <h4 class="me-1"><strong>Raza: </strong></h4>
            {{ heroe.appearance.race }}
          </div>
          <div class="d-flex align-items-center mb-3">
            <h4 class="me-1"><strong>Ocupacion: </strong></h4>
            {{ heroe.work.occupation }}
          </div>
        </div>
        <hr />
        <!-- Estadisticas de poder -->
        <div class="estadisticas-poder">
          <h4><strong>Estadisticas de poder</strong></h4>
          <div class="progress mt-2">
            <div
              class="progress-bar bg-warning animate__animated animate__fadeIn"
              role="progressbar"
              :style="`width: ${heroe.powerstats.power}%`"
              :aria-valuenow="heroe.powerstats.power"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <strong>{{ heroe.powerstats.power }}% Poder</strong>
            </div>
          </div>

          <div class="progress mt-2 animate__animated animate__fadeIn animate__delay-1s">
            <div
              class="progress-bar bg-success"
              role="progressbar"
              :style="`width: ${heroe.powerstats.intelligence}%`"
              :aria-valuenow="heroe.powerstats.intelligence"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <strong>{{ heroe.powerstats.intelligence }}% Inteligencia</strong>
            </div>
          </div>

          <div class="progress mt-2 animate__animated animate__fadeIn animate__delay-2s">
            <div
              class="progress-bar bg-warning"
              role="progressbar"
              :style="`width: ${heroe.powerstats.strength}%`"
              :aria-valuenow="heroe.powerstats.strength"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <strong>{{ heroe.powerstats.strength }}% Fuerza</strong>
            </div>
          </div>

          <div class="progress mt-2 animate__animated animate__fadeIn animate__delay-3s">
            <div
              class="progress-bar bg-success"
              role="progressbar"
              :style="`width: ${heroe.powerstats.speed}%`"
              :aria-valuenow="heroe.powerstats.speed"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <strong>{{ heroe.powerstats.speed }}% Velocidad</strong>
            </div>
          </div>

          <div class="progress mt-2 animate__animated animate__fadeIn animate__delay-4s">
            <div
              class="progress-bar bg-warning"
              role="progressbar"
              :style="`width: ${heroe.powerstats.combat}%`"
              :aria-valuenow="heroe.powerstats.combat"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <strong>{{ heroe.powerstats.combat }}% Combate</strong>
            </div>
          </div>

          <div class="progress mt-2 animate__animated animate__fadeIn animate__delay-5s">
            <div
              class="progress-bar bg-success"
              role="progressbar"
              :style="`width: ${heroe.powerstats.durability}%`"
              :aria-valuenow="heroe.powerstats.durability"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <strong>{{ heroe.powerstats.durability }}% Resistencia</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "InfoHero",
  computed: {
    heroe() {
      return this.$store.state.heroes.heroeId;
    },
  },
  methods: {
    getSearchHero() {
      this.$store.dispatch("heroes/getHeroeId", this.$route.params.id);
    },
  },
  created() {
    this.getSearchHero();
  },
};
</script>

<style scoped>
.item {
  text-decoration: none;
  color: #212529;
  transition: ease all 1s;
}
.icon-arrow {
  transition: ease all 1s;
}
.icon-arrow:hover {
  color: #ffcf00;
  transform: rotate(180deg);
  transition: ease all 1s;
}
</style>