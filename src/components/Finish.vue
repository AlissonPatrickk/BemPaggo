<template>
  <div class="q-pa-md  main-container">
    <h4>Finalizar Pagamento</h4>
    <div class="q-gutter-md row justify-between form-pay">
      <div class="col-5">
        <div class="col-8">
          <div class="q-pa-md">
            <q-list bordered separator>
              <q-item clickable v-ripple v-for="(index, name ) in $store.state.formValue" :key="index">
                <q-item-section>
                  <q-item-label overline>SELOS: {{ name }}</q-item-label>
                </q-item-section>
                <q-item-label overline> Valor: {{ $store.state.formValue.quantidade.number }}</q-item-label>
              </q-item>
            </q-list>
          </div>
        </div>
      </div>

      <div class="col-6 form-inputs">
        <q-input class="col-4 bg-white" v-model="name" outlined type="text" label="Nome Completo" />
        <q-input class="col-4 bg-white" v-model="tel" outlined type="tel" label="Telefone" mask="(##)#####-####" />
        <q-input class="col-4 bg-white" v-model="email" outlined type="email" label="Email" />
        <select class="select-pay" v-model="selected">
          <option v-for="item in inventory" :value="item" :key="item.id">
            {{ item.name }}
          </option>
        </select>
        <div class="row justify-between" v-if="selected.id === 1">
          <q-input class="col-12 bg-white" v-model="card" outlined placeholder="Numero do Cartão de Debito"
            mask="####-####-####-####" />
          <q-input class="col-5 bg-white" v-model="cvv" outlined placeholder="CVV" mask="###" />
          <q-input class="col-5 bg-white" v-model="valid" outlined placeholder="Vencimento" mask="##/##" />
        </div>
        <div class="row justify-between" v-if="selected.id === 2">
          <q-input class="col-12 bg-white" v-model="card" outlined placeholder="Numero do Cartão de Credito"
            mask="####-####-####-####" />
          <q-input class="col-5 bg-white" v-model="cvv" outlined placeholder="CVV" mask="###" />
          <q-input class="col-5 bg-white" v-model="valid" outlined placeholder="Vencimento" mask="##/##" />
        </div>
        <div v-if="selected.id === 3">
          <span>Boleto</span>
        </div>
        <div v-if="selected.id === 4">
          <span>Pix</span>
        </div>

        <q-btn class="button-forms" @click="sendValue" label="Finalizar" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Finish",

  data() {
    return {
      name: "",
      email: "",
      tel: "",
      card: "",
      cvv: "",
      valid: "",
      inventory: [
        { name: "Cartão de Debito", id: 1 },
        { name: "Cartão de Credito", id: 2 },
        { name: "Boleto", id: 3 },
        { name: "Pix", id: 4 },
      ],
      selected: 1,
    };
  },
  created() {
    this.selected = this.inventory.find((i) => i.id === this.selected);
  },
  methods: {
    sendValue() {
      let stamp = this.$store.state.formValue

      let values = {
        name: this.name,
        email: this.email,
        tel: this.tel,
        selected: this.selected,
        card: this.card,
        cvv: this.cvv,
        valid: this.valid
      }
      console.log('Todos itens', stamp, values)

      alert('Compra Efetuada ' + this.name)
    }
  }
};
</script>
<style>
.form-pay {
  background-color: #E6E6FA;
  padding: 20px;
  border-radius: 20px;
  height: 70vh;
}

.form-inputs {
  height: 100%;
  display: grid;
  align-content: space-between;
}

.select-pay {
  width: 100%;
  padding: 15px;
}
</style>
