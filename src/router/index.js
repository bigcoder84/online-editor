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
            component: CharacterConvertEditor
        },
    ],
    mode: 'history'
});

export default vueRouter;