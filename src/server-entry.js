import createApp from "./app.js"

//服务端调用此函数,产生新的app实例
export default (context) => {
    return new Promise((resolve, reject) => {
        let {app, router, store} = createApp();
        router.push(context.url);
        // 为了确定路由加载完成
        // 为了防止路由组件有异步的形式,采用promise应式
        // 需要把当前页面中匹配的组件,执行asyncData方法执行
        router.onReady(() => {
            // 获取当前路径的组件 看看组件中有没有asyncData方法
            let matchesComponents = router.getMatchedComponents();
            Promise.all(matchesComponents.map(component => {
                if (component.asyncData) {
                    return component.asyncData({store});
                }
            })).then(() => {
                context.state = store.state;
                context.meta = app.$meta();
                resolve(app);
            });

        })
    })
}