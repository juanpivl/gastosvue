<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-secondary">
      <div class="container-fluid">
        <h1 >Spend Wisely</h1>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" @click="toggleCollapse">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav" :class="{ 'show': isCollapsed }">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link " exact-active-class="active"  href="#homeView">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#otrosView">Otros</a>
            </li>
            <li class="nav-item">
              <a class="nav-link"  @click.prevent="logout">Exit</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  <div class="container-fluid  mt-1 p-2 ">
    <router-view/>
  </div>
</template>

<script>
import { getAuth, signOut } from 'firebase/auth'

export default {
  data() {
    return {
      isCollapsed: false // estado inicial del menú colapsado
    }
  },
  methods: {
    logout() {
      const auth = getAuth(); // Obtener instancia de autenticación
      signOut(auth) // Función de Firebase para cerrar sesión
        .then(() => {
          console.log('Usuario cerró sesión')
          // Redirigir al usuario a la página de inicio
          this.$router.push('/')
        })
        .catch((error) => {
          console.log('Error al cerrar sesión:', error.message)
        });
    },
    toggleCollapse() {
      this.isCollapsed = !this.isCollapsed // cambiar el estado del menú colapsado
    }
  }
}
</script>

<style scoped>
a,h1{
  color: white;
}
.nav-link:hover {
  color: lightgray;
}

</style>
