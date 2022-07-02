/*
 * @Author: 『安忠琪』 anzhongqi@marknum.com
 * @Date: 2022-06-30 15:06:03
 * @Description: 
 */
import layout from '../layout/index.vue'
import index1 from '../layout/index1.vue'
import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
  {
    path: '/',
    component: index1,
    children: [
      {
        path: '/child',
        redirect: "/baseinfo",
        component: layout,
        children: [
          {
            path: 'baseinfo',
            name: 'BaseiInfo',
            component: () => import("../components/child/baseinfo/index.vue")
          },
          {
            path: 'report',
            name: 'Report',
            component: () => import("../components/child/report/index.vue")
          },
          {
            path: 'jc',
            name: 'JC',
            component: () => import("../components/child/JC/index.vue")
          },
          {
            path: 'st',
            name: 'ST',
            component: () => import("../components/child/ST/index.vue")
          },
        ]
      },
      {
        path: '/child-index',
        name: "childIndex",
        component: () => import("../components/child/index.vue"),
      }
    ]
  },
]

// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})
export default router
