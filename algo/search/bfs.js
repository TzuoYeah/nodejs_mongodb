const INF = 100000000
const maze = [
    ["#","S","#","#","#","#","#","#",".","#"],
    [".",".",".",".",".",".","#",".",".","#"],
    [".","#",".","#","#",".","#","#",".","#"],
    [".","#",".",".",".",".",".",".",".","."],
    ["#","#",".","#","#",".","#","#","#","#"],
    [".",".",".",".","#",".",".",".",".","#"],
    [".","#","#","#","#","#","#","#",".","#"],
    [".",".",".",".","#",".",".",".",".","."],
    [".","#","#","#","#",".","#","#","#","."],
    [".",".",".",".","#",".",".",".","G","#"],
]
const len=10,whi=10
const sx=0, sy=1
const gx=9, gy=8

const dx=[1,0,-1,0], dy=[0,1,0,-1]

const bfs = () =>{
    let d = Array.from(Array(10), () => new Array(10));
    let que =[]

    for(let i=0;i<10;i++)
        for(let j=0;j<10;j++)
            d[i][j] = INF
    que.unshift( {x:sx, y:sy} )
    d[sx][sy] = 0

    while(que){
        let pop = que.pop()
        if(pop.x == gx & pop.y ==gy) break
        for(let i=0;i<4;i++){
            let nx = pop.x + dx[i]
            let ny = pop.y + dy[i]
            if( nx >=0 & nx<whi & ny>=0 & ny<len ){
                if(maze[nx][ny]!="#" & d[nx][ny]==INF){
                    que.unshift( {x:nx, y:ny} )
                    d[nx][ny] = d[pop.x][pop.y] + 1
                }
            }
        }   
    }
    return d[gx][gy]
}

console.log(bfs())