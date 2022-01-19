// Best Cow Line
const poj3617 = ()=>{
    let str = "ACDBCB"
    let s = str.split("")
    let n = s.length
    let t = []
    let a=0, b=n-1
    
    while( a <= b){
        let left = false
        for(let i=0; a+i<=b; i++){
            if( s[a+i] < s[b-i] ){
                left = true
                break
            }else if( s[a+i] > s[b-i] ){
                left = false
                break
            }
        }
        if(left) t.push(s[a++])
        else t.push(s[b--])
    }
    return t
}

console.log(poj3617())
