<template>
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
  created() {
    console.log('aaaa', this.$store.state);
  }
};
</script>
<style>
.form-pay{
  background-color: rgb(196, 211, 226);
  padding: 20px;
  border-radius: 20px;
  height: 70%;
  gap: 50px;
}
</style>
