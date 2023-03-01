

<template>
  <div>
    <div class="overlay">
      <div class="container">
        <div class="column left-column"  v-if="showLeftColumn">
          <div class="row">
            <h1>WELCOME</h1>
            <h2>spend wisely</h2>


          </div>
        </div>
        <div class="column right-column" :class="{ 'col-md-12': !showLeftColumn }">
          <formC/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import formC from '../components/formC.vue';
export default {
    components:{
        formC
    },
    data(){
        return{
            showLeftColumn:true
        }
    },
    mounted(){
        if(window.innerWidth<700){
            this.showLeftColumn= false;
        }
    }
};
</script>

<style scoped  >
.container {
  width: 100%;
  height: 90%;
  border-radius: 5%;
  display: flex;
}

.overlay {
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* Opacidad de la carta blanca */

  display: flex;
  justify-content: center;
  align-items: center;
}

.column {
  height: 95%;
  align-content: center;
  align-items: center;
  display: flex;
  justify-content: center;
}

.left-column {
  background-image: url("@/assets/fondo.avif");
  background-size: cover;
  background-repeat: no-repeat;
  margin-top: 20px;
  border-top-left-radius: 10%;
  border-bottom-left-radius: 10%;
  flex-basis: 40%;
}

.right-column {
  background-color: white;
  margin-top: 20px;
  border-top-right-radius: 10%;
  border-bottom-right-radius: 10%;
  flex-basis: 60%;
}

h1,h2{
    color: white;
}

.col-md-6 {
    height: 100%;
  }

  .col-md-12 {
    height: 50%;
  }
</style>