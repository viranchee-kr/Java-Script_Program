function sum (name, ...args){
    let sum = 0;
    document.write(name +"<br/>")
    for(let i in args){
        sum+=args[i]
    }
    document.write(sum +"<br/>")
}
sum ("yahoo baba",20,20,30,50)