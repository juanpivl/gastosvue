<template>
  <div class="contenedor-table">
    <div class="table-responsive ">
      <table class="table table-hover table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Concepto</th>
            <th>Cantidad</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(operacion, index) in operaciones" :key="operacion.id">
            <td>{{ index + 1 }}</td>
            <td>{{ operacion.concepto }}</td>
            <td>{{ operacion.cantidad }}</td>
            <td>{{ operacion.fecha }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
    
  </template>
  
  <script>
    export default {
  props: {
    operaciones: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.contenedor-table{
  background-color: white;
  width: 800px;
  height: 700px;
  border-radius: 2%;
  overflow-y: auto;

  
}


</style>