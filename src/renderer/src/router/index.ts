import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      redirect: "recommend",
    },
    {
      path: "/recommend",
      name: "recommend",
      component: () => import("../views/Recommend.vue"),
      meta: {
        menu: "recommend",
        keepAlive: true,
      },
    },
    {
      path: "/music",
      name: "music",
      meta: {
        keepAlive: true,
      },
      component: () => import("../views/Music.vue"),
      children: [
        {
          path: "/picked",
          name: "picked",
          component: () => import("../views/Music/picked.vue"),
        },
        {
          path: "/toplist",
          name: "toplist",
          component: () => import("../views/Music/toplist.vue"),
        },
        {
          path: "/artist",
          name: "artist",
          component: () => import("../views/Music/artist.vue"),
        },
        {
          path: "/category",
          name: "category",
          component: () => import("../views/Music/category.vue"),
        },
      ],
    },
    {
      path: "/video",
      name: "video",
      component: () => import("../views/Video.vue"),
    },
    {
      path: "/station",
      name: "station",
      component: () => import("../views/Station.vue"),
    },
    {
      path: "/playlist",
      name: "playlist",
      component: () => import("../views/Playlist.vue"),
    },
    {
      path: "/mvdetail",
      name: "mvdetail",
      component: () => import("../views/MvDetail.vue"),
    },
    {
      path: "/artistdetail",
      name: "artistdetail",
      component: () => import("../views/ArtistDetail.vue"),
    },
    {
      path: "/albumdetail",
      name: "albumdetail",
      component: () => import("../views/AlbumDetail.vue")
    }
    //   ],

    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ],
});

router.beforeEach((to, from, next) => {
  console.log(from);
  sessionStorage.setItem('routerName', to.path) //存储当前路由
  next()
})

export default router;
