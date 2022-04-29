<template>
  <div>
    <h1><strong>Super heroes</strong></h1>
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
            :to="{ path: `/Heroe/${heroe.id}`}"
          >
            Ver mas</router-link
          >
        </div>
      </div>
    </div>
    <pre>
      {{ heroes }}
    </pre>
  </div>
</template>

<script>
export default {
  name: "HeroesAll",
  methods: {
    async getHeroes() {
      return this.$store.dispatch("heroes/getHeros");
    },
  },
  computed: {
    heroes() {
      return this.$store.state.heroes.allHeroes;
    },
  },
  created() {
    this.getHeroes();
  },
};
</script>