<template>
  <div class="flex flex-center main-container">
    <q-form id="teste" class="form-container">
      <div>
        <h4>Quais adesivos:</h4>
        <div>
          <q-checkbox v-model="react" label="React" />
          <q-checkbox v-model="vue" label="Vue" />
          <q-checkbox v-model="angular" label="Angular" />
        </div>
      </div>
      <div>
        <h5>Quantos adesivos de cada?</h5>
        <div class="flex flex-center justify-around">
          <q-btn class="button-forms" @click="decrease">-</q-btn>
          <span class="input-quantidade"> {{ quantidade }}</span>
          <q-btn class="button-forms" @click="increase">+</q-btn>
        </div>
      </div>
      <div>
        <h5>Observações</h5>
        <q-input class="text-area" filled v-model="textarea" type="textarea" placeholder="Alguma dúvida? Recado?" />
      </div>
      <div>
        <q-btn label="Enviar" form="teste" @click="saveItems" class="button-forms" to="/finish" />
      </div>
    </q-form>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      react: false,
      vue: false,
      angular: false,
      quantidade: 0,
      textarea: "",
    };
  },
  methods: {
    saveItems() {
      let formValue = {
        react: this.react,
        vue: this.vue,
        angular: this.angular,
        quantidade: {
          number: this.quantidade
        }
      };
      this.$store.dispatch("valuesItem", formValue);
    },
    decrease() {
      this.quantidade--;
    },
    increase() {
      this.quantidade++;
    },
  },
};
</script>
<style >
.main-container {
  background-color: #D8BFD8;
  height: 100vh;
}

.form-container {
  background-color: #E6E6FA;
  padding: 15px 50px 40px 50px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 35px;
}

.text-area {
  width: 450px;
  background-color: #fff;
  border-radius: 20px;
}

.input-quantidade {
  background-color: #fff;
  padding: 25px;
  border-radius: 10px;
}

.button-forms {
  padding: 15px 30px !important;
  background-color: #9370DB !important;
  color: #fff !important;
  border-radius: 10px !important;
}
</style>
