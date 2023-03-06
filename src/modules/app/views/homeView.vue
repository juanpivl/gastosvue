<template>
  <div >
    <div class="container-fluid style">
      <div>
        <h1>Transacciones</h1>
        <div class="container table">
          <tableC :operaciones="operaciones" />
        </div>
      </div>
      <div>

<h1>holaaaaaaaaaaa</h1>
</div>
    </div>
    
  </div>
</template>

<script>
import tableC from "../components/tableC.vue";

export default {
  components: {
    tableC,
  },
  data() {
    return {
      operaciones: [
        {
          id: 1,
          concepto: "Comida",
          cantidad: 100,
          fecha: "2023-03-01",
        },
        {
          id: 2,
          concepto: "Transporte",
          cantidad: 50,
          fecha: "2023-03-02",
        },
        {
          id: 3,
          concepto: "Ropa",
          cantidad: 200,
          fecha: "2023-03-03",
        },
        {
          id: 1,
          concepto: "Comida",
          cantidad: 100,
          fecha: "2023-03-01",
        },
        {
          id: 2,
          concepto: "Transporte",
          cantidad: 50,
          fecha: "2023-03-02",
        },
        {
          id: 3,
          concepto: "Ropa",
          cantidad: 200,
          fecha: "2023-03-03",
        },
        {
          id: 3,
          concepto: "Ropa",
          cantidad: 200,
          fecha: "2023-03-03",
        },
        {
          id: 3,
          concepto: "Ropa",
          cantidad: 200,
          fecha: "2023-03-03",
        },
        {
          id: 3,
          concepto: "Ropa",
          cantidad: 200,
          fecha: "2023-03-03",
        },
        {
          id: 3,
          concepto: "Ropa",
          cantidad: 200,
          fecha: "2023-03-03",
        },
        {
          id: 3,
          concepto: "Ropa",
          cantidad: 200,
          fecha: "2023-03-03",
        },
        
      ],
    };
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
}


.table {
  padding: 1%;
  margin: 10;
  display: flex;
}
</style>