<template>
  <div class="flex flex-center main-container" >
    <q-form @submit="saveItems" class="form-container">
      <div>
        <h4>
          Quais adesivos:
        </h4>
        <div>
          <q-checkbox v-model="react" label="React" />
          <q-checkbox v-model="vue" label="Vue" />
          <q-checkbox v-model="angular" label="Angular" />
        </div>
      </div>
      <div>
        <h5>
          Quantos adesivos de cada?
        </h5>
        <div class="flex flex-center justify-around">
          <q-btn class="button-forms" @click="decrease">-</q-btn>
          <span class="input-number"> {{ number }}</span>
          <q-btn class="button-forms" @click="increase">+</q-btn>
        </div>
      </div>
      <div>
        <h5>
          Observações
        </h5>
        <q-input class="text-area" filled v-model="textarea" type="textarea" placeholder="Alguma dúvida? Recado?"  />

      </div>
      <div>
          <q-btn label="Enviar" type="submit"  @click="medium = true" class="button-forms" value="save" />      
      </div>
    </q-form>

        <q-dialog
      v-model="medium"
    >
      <q-card style="width: 700px; max-width: 80vw;">
         <div class="q-pa-md text-center main-container">
    <h4>Finalizar Pagamento</h4>
    <div class="q-gutter-md row justify-between form-pay">
      <div class="col-5">
        <div class="col-8">
          <div class="q-pa-md ">
            <q-list bordered separator>
              <q-item clickable v-ripple v-for="(index, name) in $store.state.formValue" :key="index">
                <q-item-section>
                  <q-item-label overline>SELOS: {{ name }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </div>
          <div>
            {{ $store.state }}
          </div>
        </div>
      </div>

      <div class="col-6">

        <q-input class="col-4" v-model="name" filled type="text" hint="Nome Completo" />
        <q-input class="col-4" v-model="tel" filled type="tel" hint="Telephone number" />
        <q-input class="col-4" v-model="email" filled type="email" hint="Email" />
        <q-input class="col-4" v-model="date" filled type="date" hint="Nascimento" />
        <q-select outlined class="col-8" v-model="model" :options="options" label="Forma de Pagamento" />
        <q-btn class="col-4 button-forms" style="margin-top:15px" label="Finalizar" />
      </div>

    </div>
  </div>

        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn flat label="OK" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>

export default {
  name: "Menu",
  data(){
    return {   
        medium: false,
        react: false,
        vue: false,
        angular: false,
        number: 0,
        textarea: ''

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
<style >
.main-container{
  background-color: rgb(169, 111, 223);
  height: 96vh;
}
.form-container{
  background-color: rgb(196, 211, 226);
  padding: 50px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 35px;
}
.text-area{
  width: 450px;
  background-color: #fff;
  border-radius: 20px;
}
.input-number{
  background-color: #fff;
  padding: 25px;
  border-radius: 10px;
}
.button-forms{
  padding: 15px 30px !important;
  background-color: rgb(53, 53, 163) !important;
  color: #fff !important;
  border-radius: 10px !important;
}
</style>
