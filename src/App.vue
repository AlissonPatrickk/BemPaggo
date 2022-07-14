<template>
  <q-layout >
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import Menu from './components/Menu.vue'

export default {
  name: 'App',

  components: {
    Menu
  },

}
</script>
