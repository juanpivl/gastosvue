
<template>
  <div>
    <div class="container-fluid style">
      <div class="table-container">
        <tableC :operaciones="operaciones"/>
      </div>

      <div class="form-container">
        <div class="contenedor-form">
          <!-- Aquí va el formulario -->
          <formularioC/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onValue } from "firebase/database";

import gastosRef from "@/config/operacion"

const gasto = gastosRef

import tableC from "../components/tableC.vue";
import formularioC from '../components/formularioC.vue';

export default {
  components:{
    tableC,
    formularioC
  },
  data() {
    return {
      operaciones: [],
    };
  },
  
  created() {
    // Obtener los datos de Firebase
    onValue(gasto, (snapshot) => {
      const operaciones = [];
      let id = 1;
      snapshot.forEach((childSnapshot) => {
        const operacion = childSnapshot.val();
        operacion.id = id++;
        operaciones.push(operacion);
      });
      this.operaciones = operaciones;
    });
  },
};

</script>

<style scoped>
.style {
  border-radius: 10px;
  padding: 20px;
  background-color: grey;
  height: 90vh;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: left;
  display: flex;
  text-align: center;
}

.table-container {
  width: 66.66%;
  padding-right: 1%;
}

.form-container {
  width: 33.33%;
}

.contenedor-form {
  border-radius: 2%;
  padding: 10%;
  margin: 8%;
}

</style>
