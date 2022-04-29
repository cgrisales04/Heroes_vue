<template>
  <div>
    <div class="container animate__animated animate__fadeIn">
      <h1><strong>Busca tu heroe DC</strong></h1>

      <input
        style="width: 50%"
        class="form-control"
        id="hero"
        type="hero"
        placeholder="Buscar heroe..."
        v-model="hero"
      /><br />
      <button class="btn btn-warning" @click="getSearchHero">
        Buscar heroe
      </button>

      <div
        class="d-flex justify-content-between flex-wrap mt-2"
        style="overflow-y: auto; height: 79.4vh"
      >
        <div class="card mt-3" v-for="heroe in heroes" :key="heroe.id">
          <img
            :src="heroe.image.url"
            class="card-img-top"
            alt=""
            width="300"
            height="300"
          />
          <div class="card-body">
            <h5 class="card-title">
              <strong>{{ heroe.name }}</strong> -
              {{ heroe.biography.publisher }}
            </h5>
            <div class="progress mt-2">
              <div
                class="progress-bar bg-success"
                role="progressbar"
                :style="`width: ${heroe.powerstats.intelligence}%`"
                :aria-valuenow="heroe.powerstats.intelligence"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                {{ heroe.powerstats.intelligence }}% Inteligencia
              </div>
            </div>

            <div class="progress mt-2">
              <div
                class="progress-bar bg-info"
                role="progressbar"
                :style="`width: ${heroe.powerstats.strength}%`"
                :aria-valuenow="heroe.powerstats.strength"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                {{ heroe.powerstats.strength }}% Fuerza
              </div>
            </div>

            <div class="progress mt-2">
              <div
                class="progress-bar bg-danger"
                role="progressbar"
                :style="`width: ${heroe.powerstats.speed}%`"
                :aria-valuenow="heroe.powerstats.speed"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                {{ heroe.powerstats.speed }}% Velocidad
              </div>
            </div>

            <div class="progress mt-2">
              <div
                class="progress-bar bg-warning"
                role="progressbar"
                :style="`width: ${heroe.powerstats.power}%`"
                :aria-valuenow="heroe.powerstats.power"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                {{ heroe.powerstats.power }}% Poder
              </div>
            </div>

            <router-link
              class="item btn btn-success mt-3"
              :to="{ path: `/Heroe/${heroe.id}`, prams: { id: heroe.id } }"
            >
              Ver mas</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HeroeSearch",

  data() {
    return {
      hero: "",
    };
  },
  computed: {
    heroes() {
      return this.$store.state.heroes.heroes;
    },
  },
  methods: {
    getSearchHero() {
      this.$store.dispatch("heroes/getHero", this.hero);
    },
  },
};
</script>

<style lang="css" scoped>
</style>