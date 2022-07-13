<template>
  <div class="q-pa-md text-center main-container">
    <h4>Finalizar Pagamento</h4>
    <div class="q-gutter-md row justify-between form-pay">
      <div class="col-5">
        <div class="col-8">
          <div class="q-pa-md">
            <q-list bordered separator>
              <q-item
                clickable
                v-ripple
                v-for="(index, name) in $store.state.formValue"
                :key="index"
              >
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
        <q-input
          class="col-4"
          v-model="name"
          filled
          type="text"
          label="Nome Completo"
        />
        <q-input
          class="col-4"
          v-model="tel"
          filled
          type="tel"
          label="Telephone number"
        />
        <q-input
          class="col-4"
          v-model="email"
          filled
          type="email"
          label="Email"
        />
        <div>
          <select class="select-pay" v-model="selected">
            <option v-for="item in inventory" :value="item" :key="item.id">
              {{ item.name }}
            </option>
          </select>
          <div class="row justify-between" v-if="selected.id === 1">
            <q-input
              class="col-12"
              placeholder="Numero do Cartão de Debito"
              mask="####-####-####-####"
            />
            <q-input class="col-5" placeholder="CVV" mask="###" />
            <q-input class="col-5" placeholder="Vencimento" mask="##/##" />
          </div>
          <div class="row justify-between" v-if="selected.id === 2">
            <q-input
              class="col-12"
              placeholder="Numero do Cartão de Credito"
              mask="####-####-####-####"
            />
            <q-input class="col-5" placeholder="CVV" mask="###" />
            <q-input class="col-5" placeholder="Vencimento" mask="##/##" />
          </div>
          <div v-if="selected.id === 3">
            <span>Boleto</span>
          </div>
          <div v-if="selected.id === 4">
            <span>Pix</span>
          </div>
        </div>
        <q-btn class="col-4 button-forms" label="Finalizar" />
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
      inventory: [
        { name: "Cartão de Debito", id: 1 },
        { name: "Cartão de Credito", id: 2 },
        { name: "Pix", id: 3 },
        { name: "Boleto", id: 4 },
      ],
      selected: 2,
    };
  },
  created() {
    this.selected = this.inventory.find((i) => i.id === this.selected);
  },
};
</script>
<style>
.form-pay {
  background-color: rgb(196, 211, 226);
  padding: 20px;
  border-radius: 20px;
  height: 70%;
  gap: 50px;
}
.select-pay {
  width: 100%;
  padding: 15px;
}
</style>
