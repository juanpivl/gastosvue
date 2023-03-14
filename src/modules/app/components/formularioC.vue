<template>
    <form @submit.prevent="guardarGasto">
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          v-model="newGasto.concepto"
          placeholder="Concepto"
        />
        <br />
        <!-- Agregar un espacio -->
      </div>
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          v-model="newGasto.cantidad"
          placeholder="Cantidad"
        />
        <br />
        <!-- Agregar un espacio -->
      </div>
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          v-model="newGasto.fecha"
          placeholder="Fecha"
        />
        <br />
        <!-- Agregar un espacio -->
      </div>
      <button type="submit" class="btn btn-primary">Guardar</button>
    </form>
  </template>
  
  <script>
  import { getDatabase, ref, push } from "firebase/database";
  import moment from "moment";
  
  const db = getDatabase();
  const gastosRef = ref(db, "gastos");
  
  export default {
    data() {
      return {
        newGasto: {
          concepto: "",
          cantidad: "",
          fecha: "",
        },
      };
    },
    
    methods: {
      guardarGasto() {
        // Validar que los campos no estén vacíos
        if (
          !this.newGasto.concepto ||
          !this.newGasto.cantidad ||
          !this.newGasto.fecha
        ) {
          alert("Por favor, completa todos los campos.");
          return;
        }
  
        this.newGasto.cantidad = parseInt(this.newGasto.cantidad);
        this.newGasto.fecha = moment(this.newGasto.fecha).format("YYYY-MM-DD");
        push(gastosRef, this.newGasto).catch((error) => {
          console.error("Error al guardar el gasto:", error);
        });
        this.newGasto.concepto = "";
        this.newGasto.cantidad = "";
        this.newGasto.fecha = "";
      },
    },
  };
  </script>