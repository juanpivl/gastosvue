<template>
  <div class="back">
    <div class="container">
      <form @submit.prevent="login">
        <h2 class="text-center mb-4">Iniciar sesión</h2>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="text" class="form-control" id="email" placeholder="Ingresa tu correo" v-model="email">
          <div v-if="!emailValid" class="invalid-feedback">Email inválido</div>
        </div>
        <div class="form-group">
          <label for="password">Contraseña</label>
          <input type="password" class="form-control" id="password" placeholder="Ingresa tu contraseña" v-model="password">
          <div v-if="!passwordValid" class="invalid-feedback">La contraseña debe tener al menos 6 caracteres</div>
        </div>
        
        <button type="submit" class="btn btn-block mt-3" :disabled="!formValid">Iniciar sesión</button>
        <div v-if="error" class="alert alert-danger mt-3">{{ error }}</div>
      </form>
    </div>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

export default {
  data() {
    return {
      email: '',
      password: '',
      remember: false,
      emailValid: true,
      passwordValid: true,
      error: null
    }
  },
  computed: {
    formValid() {
      return this.emailValid && this.passwordValid
    },
  },
  methods: {
    login() {
      const email = this.email
      const password = this.password

      if (!email || !password) {
      this.error = 'Por favor ingrese su correo y contraseña.';
      return;
    }

      const auth = getAuth()

      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          console.log('Usuario autenticado')
          // Redirigir al usuario a la página de inicio
          this.$router.push('/homeView')
        })
        .catch((error) => {
          console.log('Error al autenticar usuario:', error.message)
          this.error = 'No se pudo autenticar al usuario. Por favor, verifique su correo y contraseña.';
        })
    },
  },
  watch: {
    email(value) {
      // Validar el email con una expresión regular
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      this.emailValid = emailRegex.test(value)
    },
    password(value) {
      // Validar que la contraseña tenga al menos 6 caracteres
      this.passwordValid = value.length >= 6
    },
  },
}
</script>

<style scoped>
.back{
    align-content: center;
    justify-content: center;
    align-items: center;
    display: flex;
    height: 90%;
    width: 90%;
}
.container{
    width: 50vh;
}
.btn{
    color: white;
    background-color: black;
}
</style>