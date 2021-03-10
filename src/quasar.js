import Vue from 'vue'
import 'quasar/dist/quasar.css'
import lang from 'quasar/lang/en-us.js'
import '@quasar/extras/material-icons/material-icons.css'
import { Quasar, Notify } from 'quasar'

Vue.use(Quasar, {
  config: {
  },
  plugins: {
    Notify
  },
  lang: lang
 })