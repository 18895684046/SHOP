import { createApp } from 'vue'
import App from './App.vue'
import { store, key } from './store'
import router from './router'
import {Button,Calendar,Col, Row} from 'vant'

const app = createApp(App)

app.use(Button)
.use(Calendar)
app.use(Col);
app.use(Row);

app.use(store, key)

app.use(router)

app.mount('#app')
