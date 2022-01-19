//tasks Program Problem

const tasks =()=>{
    const n = 5
    const s = [1,2,4,6,8]
    const t = [3,5,7,8,10]
    
    let itv = []
    for(let i=0;i<n;i++)
        itv.push( {s:s[i], t:t[i]} )
    itv.sort((a,b) => { return a.t-b.t })

    let total =0,end=0
    for(let i=0;i<n;i++){
        if(end < itv[i].s){
            total++
            end = itv[i].t
        }
    }
    return total
}

console.log( tasks() )
