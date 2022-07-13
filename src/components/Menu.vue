<template>
  <div class="flex flex-center">
    <q-form @submit="saveItems">
      <div>
        <h4>
          Quais adesivos:
        </h4>
        <q-checkbox v-model="react" label="React" />
        <q-checkbox v-model="vue" label="Vue" />
        <q-checkbox v-model="angular" label="Angular" />
      </div>
      <div>
        <h4>
          Quantos adesivos de cada?
        </h4>
        <div class="flex flex-center justify-around">
          <q-btn color="primary" @click="decrease">-</q-btn>
          <span> {{ number }}</span>
          <q-btn color="primary" @click="increase">+</q-btn>
        </div>
      </div>
      <div>
        <h5>
          Observações
        </h5>
        <q-input filled type="textarea" />

      </div>
      <div>
          <q-btn label="Enviar" type="submit" color="primary" value="save" />      
      </div>
    </q-form>
  </div>
</template>

<script>

export default {
  name: "Menu",
  data(){
    return {   
        react: false,
        vue: false,
        angular: false,
        number: 0
    }
  },
  methods: {
    saveItems() {
      let formValue = {
        react: this.react,
        vue: this.vue,
        angular: this.angular,
        number: this.number
      }
      this.$store.commit('valuesItem', formValue)
    },
    decrease(){
      this.number--
    },
    increase(){
      this.number++
    }
  },
  
}
</script>
