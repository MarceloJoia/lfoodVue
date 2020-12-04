<template>
    <div>
        Conteudo da página

        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/home">About</router-link>
        </div>

        <router-view />
    </div>
</template>


<script>
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export default {
    
}
</script>

<style scoped>
@import url('../assets/css/reset.css');
@import url('../assets/css/vuefood.css');
</style>>
