import Vue from 'vue'

import {
  Button,
  Table,
  TableColumn,
  Container,
  Aside,
  Header,
  Main,
  Footer,
  Menu,
  MenuItem,
  MenuItemGroup,
  Submenu,
  Form,
  FormItem,
  Card,
  Input,
  Message,
  MessageBox,
  Breadcrumb,
  BreadcrumbItem,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Tag
} from 'element-ui'

const element = {
  install () {
    Vue.use(Button)
    Vue.use(Table)
    Vue.use(TableColumn)
    Vue.use(Container)
    Vue.use(Aside)
    Vue.use(Header)
    Vue.use(Main)
    Vue.use(Footer)
    Vue.use(Menu)
    Vue.use(MenuItem)
    Vue.use(MenuItemGroup)
    Vue.use(Submenu)
    Vue.use(Form)
    Vue.use(FormItem)
    Vue.use(Card)
    Vue.use(Input)
    Vue.use(Breadcrumb)
    Vue.use(BreadcrumbItem)
    Vue.use(Dropdown)
    Vue.use(DropdownMenu)
    Vue.use(DropdownItem)
    Vue.use(Tag)

    Vue.prototype.$message = Message
    Vue.prototype.$messageBox = MessageBox
  }
}

export default element
