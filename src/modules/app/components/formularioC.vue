<template>
  <div>
    <h1>Ingresa tus gastos</h1>
    <br>
    <div>
      <form @submit.prevent="guardarGasto">
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            v-model="newGasto.concepto"
            placeholder="Concepto"
          />
          <br />
        </div>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            v-model="newGasto.cantidad"
            placeholder="Cantidad"
          />
          <br />
        </div>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            v-model="newGasto.fecha"
            placeholder="Fecha"
          />
          <br />
        </div>
        <button type="submit" class="btn btn-primary">Guardar</button>
      </form>
    </div>

    <!-- Bootstrap notifications -->
    <div aria-live="polite" aria-atomic="true" style="position: relative; min-height: 200px;">
      <div v-for="(notification, index) in notifications" :key="index" class="toast" role="alert" :data-autohide="notification.autohide ? 'true' : 'false'" :data-delay="notification.delay || 5000" :class="[notification.type === 'error' ? 'bg-danger' : 'bg-success']" style="position: absolute; top: 0; right: 0; margin-top: 20px; margin-right: 20px;">
        <div class="toast-header">
          <strong class="mr-auto">{{ notification.title }}</strong>
          <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="toast-body">
          {{ notification.message }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { push } from "firebase/database";
import moment from "moment";
import gastosRef from "@/config/operacion"

const gasto = gastosRef;

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
        this.mostrarNotificacion("Por favor, completa todos los campos.", "warning");
        return;
      }

      // Validar que la cantidad sea un número
      if (isNaN(this.newGasto.cantidad)) {
        this.mostrarNotificacion("La cantidad debe ser un número.", "warning");
        return;
      }

      // Validar que la fecha tenga un formato válido
      const fechaRegex = /^\d{4}-\d{2}-\d{2}$/;
      if (!fechaRegex.test(this.newGasto.fecha)) {
        this.mostrarNotificacion("La fecha debe tener el formato YYYY-MM-DD.", "warning");
        return;
      }

      this.newGasto.cantidad = parseInt(this.newGasto.cantidad);
      this.newGasto.fecha = moment(this.newGasto.fecha).format("YYYY-MM-DD");
      push(gasto, this.newGasto)
        .then(() => {
          // Mostrar notificación de éxito
          this.mostrarNotificacion("Gasto guardado con éxito.", "success");
        })
        .catch((error) => {
          console.error("Error al guardar el gasto:", error);
        });
      this.newGasto.concepto = "";
      this.newGasto.cantidad = "";
      this.newGasto.fecha = "";
    },
    mostrarNotificacion(mensaje, tipo) {
      const notificacion = document.createElement('div');
      notificacion.classList.add('alert', `alert-${tipo}`, 'position-fixed', 'top-0', 'end-0', 'm-3');
      notificacion.setAttribute('role', 'alert');
      notificacion.textContent = mensaje;
      document.body.appendChild(notificacion);
      setTimeout(() => {
        notificacion.remove();
      }, 3000);
    },
  },
};
</script>

<style scoped>
  .alert {
    z-index: 10000;
    font-size: 1.25rem;
    padding: 1rem 1.5rem;
  }
</style>