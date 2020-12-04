import Vue from 'vue'
import VueRouter from 'vue-router'


// fazer o Vue usar o "VueRouter"
Vue.use(VueRouter)


// Exportar um objeto de "VueRouter"
import routes from './routes.map.js'//importar o Array routes

const router = new VueRouter({ //criar constate
    routes
})

export default router// export "router"
