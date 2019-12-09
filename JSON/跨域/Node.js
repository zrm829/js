let  http=require('http');
// 这个核心模块能够帮助我们解析URL地址，从而拿到pathname，query
let urlModule=require('url');
// 初始化server服务
let server=http.createServer();
// 监听端口
server.listen(8082,()=>{
	console.log('server服务启动');
});
// 监听用户的请求
 // req:客户端请求的相关信息和方法
server.on('request',(req,res)=>{
    // 获取去地址
    // let url=req.url;
    const {pathname: url,query}=urlModule.parse(req.url,true);
    if(url==='/getScript'){
        // 拼接一个合法的js脚本,这里拼接的是一个方法的调用
        // let scriptStr='show()';
        let scriptStr=`${query.callBack}()`;
        res.end(scriptStr);
    }else{
        res.end('404');
    }
});