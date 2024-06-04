import { reactive } from 'vue'

export const store = reactive({
    //elemento che viene restituito dal data, lo vado ad importare nel componente in cui serve e nei suoi data
    //reactive è un metodo che accetta come parametro un oggetto
    // apiUrl: 'http://127.0.0.1:8000/api/projects'
    apiUrl: 'http://127.0.0.1:8000/api/'
})