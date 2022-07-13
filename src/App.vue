<template>
  <q-layout >
    <q-header >
      <q-toolbar class="bg-black" style="padding:20px">
        <q-toolbar-title>
          Bem Paggo
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
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
