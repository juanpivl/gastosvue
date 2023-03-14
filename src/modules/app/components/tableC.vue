<template>
  <div class="contenedor-table">
          <div class="table-responsive">
            <table class="table table-hover table-striped">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Concepto</th>
                  <th scope="col">Cantidad</th>
                  <th scope="col">Fecha</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(operacion, index) in operaciones" :key="index">
                  <th scope="row">{{ operacion.id }}</th>
                  <td>{{ operacion.concepto }}</td>
                  <td>${{ operacion.cantidad }}</td>
                  <td>{{ operacion.fecha }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
</template>

<script>
export default {
  props: ['operaciones']
}
</script>

<style scoped>
.contenedor-table {
  background-color: white;
  width: 800px;
  height: 700px;
  border-radius: 2%;
  overflow-y: auto;
}
</style>