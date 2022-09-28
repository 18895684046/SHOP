import { createApp } from 'vue'
import App from './App.vue'
import { store, key } from './store'
import router from './router'
import {
    Button, Calendar, Col, Row, Field, CellGroup, Icon, Swipe, SwipeItem,
    Tabbar, TabbarItem, Card, NavBar, Sidebar, SidebarItem, Empty, Image as VanImage,
    ActionSheet, RadioGroup, Radio, Tab, Tabs, Checkbox, CheckboxGroup, Tag,
    Stepper, SubmitBar, AddressList,AddressEdit,Area
} from 'vant'

import i18n from './locals/index'
const app = createApp(App)
app.use(i18n)
app.use(Button)
    .use(Calendar)
app.use(Col).use(Row).use(Field).use(CellGroup).use(Icon).use(Swipe)
    .use(SwipeItem).use(Tabbar).use(TabbarItem).use(Card).use(NavBar)
    .use(Sidebar)
    .use(SidebarItem)
    .use(Empty)
    .use(VanImage).use(ActionSheet).use(RadioGroup).use(Radio)
    .use(Tab).use(Tabs)
    .use(Checkbox).use(CheckboxGroup)
    .use(Tag)
    .use(Stepper)
    .use(SubmitBar)
    .use(AddressList)
    .use(AddressEdit)
    .use(Area)

app.use(store, key)

app.use(router)

app.mount('#app')
