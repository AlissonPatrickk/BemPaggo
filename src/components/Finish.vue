<template>
  <div class="q-pa-md ">
    <div class="q-gutter-md row justify-center flex flex-center">

      <div class="col-5">
        <h5>Selos</h5>
        <div class="col-8">
          <div>
            {{ $store.state }}
          </div>
          <div class="q-pa-md bg-grey-10 text-white">
            <q-list dark bordered separator>
              <q-item clickable v-ripple  v-for="(index, name) in $store.state.formValue" :key="index">
                <q-item-section >
                  <q-item-label overline>SELOS: {{ name }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </div>
        </div>
      </div>

      <div class="col-5">
        <h5>Finalizar Pagamento</h5>
        <q-input class="col-4" v-model="name" filled type="text" hint="Nome Completo" />
        <q-input class="col-4" v-model="tel" filled type="tel" hint="Telephone number" />
        <q-input class="col-4" v-model="email" filled type="email" hint="Email" />
        <q-input class="col-4" v-model="date" filled type="date" hint="Nascimento" />
        <q-select outlined class="col-8" v-model="model" :options="options" label="Forma de Pagamento" />
        <q-btn class="col-4" color="primary" label="Finalizar" />
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Finish',

  data() {
    return {
      name: "",
      email: "",
      tel: "",
      date: "",
      model: "",
      options: ["Cartão de Credito", "Cartão de Debito", "Pix"],
    };
  },
  created(){
    console.log(this.$store.state);
  }
};
</script>
