<template>
  <div>
    <div class="container-fluid style">
      <div>
        <h1>Transacciones</h1>
        <br>
        <tableC :operaciones="operaciones"/>
      </div>

      <div>
        <div class="contenedor-form">
          <!-- Aquí va el formulario -->
          <formularioC/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";
import { onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBKX7Y-t_ILAGwUhNv6MSGDcfpdtfOq_1o",
  authDomain: "gastosvue-6737a.firebaseapp.com",
  projectId: "gastosvue-6737a",
  storageBucket: "gastosvue-6737a.appspot.com",
  messagingSenderId: "830310066903",
  appId: "1:830310066903:web:9ff165481307bc06f01e92",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const gastosRef = ref(db, "gastos");

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
    onValue(gastosRef, (snapshot) => {
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


.contenedor-form {
  
  width: 600px;
  border-radius: 2%;
  padding: 10%;
  margin: 8%;
}


</style>