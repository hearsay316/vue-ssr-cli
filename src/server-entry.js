import  createApp from "./app"

//服务端调用此函数,产生新的app实例
export default (contex)=>{
    let {app,router} = createApp();

    router.push(contex.url);
    return app;
}