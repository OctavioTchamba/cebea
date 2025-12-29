//aqui sera consumido a parte de posts
export async function GET(request: Request) {
    const res = await fetch("http://localhost:3030/post", {
        headers:{
            'Content-Type': 'application/json',
        }
    })
    const data = await res.json()

    return Response.json({data})
}