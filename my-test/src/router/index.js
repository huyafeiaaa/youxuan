import Vue from 'vue'
import Router from 'vue-router'
import Parent from '@/pages/Parent'
import HomeList from '@/pages/homelist'
import my from '@/pages/my'
import New from '@/pages/new'
import classification from '@/pages/classification'
import shoppingcart from '@/pages/shoppingcart'
import shoes from '@/pages/shoes'
import inp from '@/pages/inp'
import HomeInp from '@/pages/page'
import chat from '@/pages/chat'
import zhuce from '@/pages/zhuce'
import denglu from '@/pages/denglu'
import shezhi from '@/pages/shezhi'
import homepage from '@/pages/homepage'
import HomeConnect from '@/components/connect'
import HomeLogo from '@/components/logo'
Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/new',
			name: 'homelist',
			component: HomeList,
			children: [{
					path: '/my',
					component: my
				},
				{
					path: '/new',
					component: New,
					children: [{
							path: 'shoes:id', //给这个一个id
							component: shoes,
							name: "shoes"
						},
						{
							path: '/', //给这个一个id
							component: shoes,
							name: "shoes"
						},
						{path: '*',redirect:'/new'}

					]
				},
				{
					path: '/classification',
					component: classification,
					children: [{
						path: 'connect:id', //给这个一个id
						component: HomeConnect,
						name: "connect"
					}
					]
				},
				{
					path: '/shoppingcart',
					component: shoppingcart
				},
				{
					path: 'new/classification',
					component: classification,
					redirect: "/classification"
				}, {
					path: 'classification/my',
					component: my,
					redirect: "/my"
				}, {
					path: 'classification/shoppingcart',
					component: shoppingcart,
					redirect: "/shoppingcart"
				}, {
					path: 'classification/new',
					component: New,
					redirect: "/new"
				},
				{
					path: 'new/my',
					component: my,
					redirect: "/my"
				},{
					path: 'new/shoppingcart',
					component: shoppingcart,
					redirect: "/shoppingcart"
				}
			]
		},
		 {path:'/zhuce',component:zhuce},
		 {path:'/denglu',component:denglu},
		 {path:'/homepage',component:homepage},
		 {path:'/inp',component:inp},
		 {path:'/page',component:HomeInp},
		 {path:'/chat',component:chat},
		 {path:'/shezhi',component:shezhi},
		 {path: '*',redirect:'/new/shoes1'},
		 {
		   name:"success",
		   path:"/success",
		   component:New,
		   redirect: "/new"
		 },
		 {
		   name:"err",
		   path:"/err",
		   component:denglu
		 }
	]
})