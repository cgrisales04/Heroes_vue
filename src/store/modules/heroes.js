import axios from 'axios'

export default {
    namespaced: true,
    state: {
        heroes: [],
        allHeroes: [],
        heroeId: []
    },
    getters: {
    },
    mutations: {
        setHero(state, data) {
            state.heroes = data;
        },
        setHeros(state, data) {
            state.allHeroes = data;
        },
        setHeroId(state, data) {
            state.heroeId = data;
        }
    },
    actions: {
        getHero({ commit }, hero) {
            let url = `https://superheroapi.com/api.php/2554758084657950/search/${hero}`

            axios.get(url, { headers: { "Content-Type": "application/json" } }).then(response => {
                commit("setHero", response.data.results)
            })
        },
        getHeros({ commit }) {
            let url = `https://superheroapi.com/api.php/2554758084657950/`
            axios.get(url, { headers: { "Content-Type": "application/json" } }).then(response => {
                commit("setHeros", response.data.results)
            })
        },
        getHeroeId({ commit }, id) {
            let url = `https://superheroapi.com/api.php/2554758084657950/${id}`
            axios.get(url, { headers: { "Content-Type": "application/json" } }).then(response => {
                commit("setHeroId", response.data)
            })
        }
    }
}