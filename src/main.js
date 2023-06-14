import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '/mdb-ui-kit/css/mdb.min.css'


import { firebaseApp } from './firebase'
import {firestorePlugin, VueFire, VueFireAuth } from 'vuefire'


import '/mdb-ui-kit/css/my_style.css'
import './assets/main.css'

import '@mdi/font/css/materialdesignicons.css'

const app = createApp(App)


app.use(firestorePlugin)



app.use(VueFire, {
    // imported above but could also just be created here
    firebaseApp,
    modules: [
      // we will see other modules later on
      VueFireAuth(),
    ],
  })

app.use(router)

app.mount('#app')
