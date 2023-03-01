<template>
    <div class="back">

        <div class="container ">
      <form>
        <h2 class="text-center mb-4">Iniciar sesión</h2>
        <div class="form-group ">
          <label for="email">Email</label>
          <input type="text" class="form-control" id="email" placeholder="Ingresa tu correo">
        </div>
        <div class="form-group mt-3">
          <label for="password">Contraseña</label>
          <input type="password" class="form-control" id="password" placeholder="Ingresa tu contraseña">
        </div>
        <div class="form-group form-check mt-3">
          <input type="checkbox" class="form-check-input" id="remember">
          <label class="form-check-label" for="remember">Recordarme</label>
        </div>
        <button type="submit" class="btn  btn-block mt-3" >Iniciar sesión</button>
      </form>
    
  
</div> 
    </div>
  

</template>

<script>
export default {

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