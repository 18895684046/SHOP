import { createApp } from 'vue'
import App from './App.vue'
import { store, key } from './store'
import router from './router'
import {Button,Calendar,Col, Row,Field, CellGroup,Icon,Swipe, SwipeItem,
    Tabbar, TabbarItem,Card,NavBar,Sidebar, SidebarItem,Empty,Image as VanImage
} from 'vant'

const app = createApp(App)

app.use(Button)
.use(Calendar)
app.use(Col).use(Row).use(Field).use(CellGroup).use(Icon).use(Swipe)
.use(SwipeItem).use(Tabbar).use(TabbarItem).use(Card).use(NavBar)
.use(Sidebar)
.use(SidebarItem)
.use(Empty)
.use(VanImage);

app.use(store, key)

app.use(router)

app.mount('#app')
