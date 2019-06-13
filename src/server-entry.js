import  createApp from "./app"

//服务端调用此函数,产生新的app实例
export default (context)=>{
    return new Promise((resolve, reject)=>{
        let {app,router} = createApp();
        router.push(context.url);
        // 为了确定路由加载完成
        // 为了防止路由组件有异步的形式,采用promise应式
        router.onReady(()=>{
            resolve(app);
        })
    })

}