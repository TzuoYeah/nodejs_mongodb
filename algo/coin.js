//Coin Change Problem
const value = [1,5,10,50,100,500]

const change =(coin,a)=>{
    let useCoin = 0
    for(let i=5;i>=0;i--){
        let t = Math.min( Math.floor(a/value[i]),coin[i])
        a -= t * value[i]
        useCoin += t
    }
    return useCoin
}
console.log(change([3,2,1,3,0,2],620))