// Subset sum problem

const a = [1,2,4,7]
const n = a.length
const k = 13

const dfs = (i,sum) =>{
    if (i == n) return sum == k
    if (dfs( i+1 ,sum)) return true
    if (dfs( i+1 ,sum + a[i])) return true
    return false
}

const main = () =>{
    if(dfs(0, 0)) console.log("Yes")
    else console.log("No")
}

main()