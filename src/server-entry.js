import  reacteApp from "./app"

//服务端调用此函数,产生新的app实例
export default ()=>{
    let {app} = reacteApp();
    return app;
}