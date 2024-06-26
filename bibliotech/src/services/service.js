import axios from "axios";

// Declarar a porta da API
const portaApi = "5170"

// Declarar o IP da máquina
const ip = "172.16.39.88"

// Definir a URL padrão da API
const apiUrlLocal = `http://${ip}:${portaApi}/api`

// Trazer a configuração pro Axios
const api = axios.create({
    baseURL : apiUrlLocal
})

export default api;