import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 导入英雄列表
import HeroList from './views/Hero/HeroList.vue'
import WeaponList from './views/weapon/WeaponList.vue'
import EquipList from './views/equip/EquipList.vue'
//导入英雄组件
import HeroAdd from './views/Hero/HeroAdd.vue'
import HeroEdit from './views/Hero/HeroEdit.vue'

const router = new VueRouter({
  linkActiveClass:'active',
    routes:[
      {name:"home", path:"/", redirect:"/heroes"},
      {name:"HeroList", path:'/heroes', component:HeroList},
      {name:"WeaponList", path:'/weapon', component:WeaponList},
      {name:"EquipList", path:'/equip', component:EquipList},
      {name:"HeroAdd", path:'/heroes/heroadd',component:HeroAdd},
      {name:"HeroEdit", path:'/heroes/heroedit/:id',component:HeroEdit, props:true},
  
    ]
  })

  export default router;