import Msite from '../pages/Msite/Msite.vue'
import Order from '../pages/Order/Order.vue'
import Search from '../pages/Search/Search.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue';
import Shop from "../pages/Shop/Shop.vue"
import ShopGoods from "../pages/Shop/ShopGoods.vue"
import ShopInfo from "../pages/Shop/ShopInfo.vue"
import ShopRatings from "../pages/Shop/ShopRatings.vue"

export default [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/msite',
    component: Msite,
    meta: {
      isFooterGuideShow: true
    },
  },
  {
    path: '/order',
    component: Order,
    meta: {
      isFooterGuideShow: true
    }
  },
  {
    path: '/search',
    component: Search,
    meta: {
      isFooterGuideShow: true
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      isFooterGuideShow: true
    },
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/shop',
    component: Shop,
    children: [
      {
        path: 'goods',
        components: ShopGoods,
      },
      {
        path: 'shopInfo',
        components: ShopInfo,
      },
      {
        path: 'shopRatings',
        components: ShopRatings,
      },
    ]
  },
  

]