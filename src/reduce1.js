window.onload = function() {
let str = 'http://www.baidu.com?name=zhangsan&age=18&sex=nan#'
function hanshu(str){
    const index1 = str.indexOf("?")
    const index2 = str.indexOf('#')
    const shuzu = str.slice(index1+1,index2).split('&')
    return shuzu.reduce((pre,curr)=>{
        // [name,zhangsan]
        // { name:zhangsan } 
        const [key,value] = curr.split('=')
        pre[key] = value
        return pre
      },{})
}
hanshu(str)
console.log(hanshu(str));
}