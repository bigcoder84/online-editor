import VueRouter from 'vue-router'
import Vue from 'vue'
import CharacterConvertEditor from "@/pages/CharacterConvertEditor";

Vue.use(VueRouter);


const vueRouter = new VueRouter({
    //配置路径和组件的关系
    routes: [
        {
            path: "",
            redirect: "/characterConvertEditor"
        },
        {
            path: "/characterConvertEditor",
            component: CharacterConvertEditor,
            meta:{
                title: '富文本转HTML工具'
            }
        },
    ],
    mode: 'history'
});

vueRouter.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
})

export default vueRouter;