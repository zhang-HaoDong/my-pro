import "./mock/index"

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import showMsg from './utils/showMsg.js';

Vue.prototype.$showMsg = showMsg;
import vLoading from '@/directives/loading.js'
Vue.directive("loading", vLoading);
new Vue({
    router,
    render: h => h(App),
}).$mount('#app')

import * as blogApi from "@/api/blog.js"
// blogApi.getBlogs(1, 10, 3).then(data => {
//     console.log(data);
// })
// blogApi.getBlogTypes().then(data => {
//     console.log(data);
// })

// blogApi.getBlog(123).then(data => {
//     console.log(data);
// });
// blogApi.postComment({
//     nickname: "张皓栋",
//     content: "评论内容，纯文本",
//     blogId: 123
// }).then(data => console.log(data))

// blogApi.getComments(123).then(data => console.log(data))