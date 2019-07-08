import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 导入英雄列表
import HeroList from './views/Hero/HeroList.vue'
import WeaponList from './views/weapon/WeaponList.vue'
import EquipList from './views/equip/EquipList.vue'

const router = new VueRouter({

    routes:[
      {name:"home", path:"/", redirect:"/heroes"},
      {name:"HeroList", path:'/heroes', component:HeroList},
      {name:"WeaponList", path:'/weapon', component:WeaponList},
      {name:"EquipList", path:'/equip', component:EquipList},
  
    ]
  })

  export default router;