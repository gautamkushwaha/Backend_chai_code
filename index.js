
require('dotenv').config()
const express = require("express")


const app = express()

const PORT = process.env.PORT || 4008 

const githubData = {
    "login": "gautamkushwaha",
    "id": 105122668,
    "node_id": "U_kgDOBkQLbA",
    "avatar_url": "https://avatars.githubusercontent.com/u/105122668?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/gautamkushwaha",
    "html_url": "https://github.com/gautamkushwaha",
    "followers_url": "https://api.github.com/users/gautamkushwaha/followers",
    "following_url": "https://api.github.com/users/gautamkushwaha/following{/other_user}",
    "gists_url": "https://api.github.com/users/gautamkushwaha/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/gautamkushwaha/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/gautamkushwaha/subscriptions",
    "organizations_url": "https://api.github.com/users/gautamkushwaha/orgs",
    "repos_url": "https://api.github.com/users/gautamkushwaha/repos",
    "events_url": "https://api.github.com/users/gautamkushwaha/events{/privacy}",
    "received_events_url": "https://api.github.com/users/gautamkushwaha/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Gautam Kumar Kushwaha",
    "company": "https://sathicloud.com/",
    "blog": "https://www.spotmies.com/",
    "location": "AU incubation centre, AU college of engineering, Visakhapatnam",
    "email": null,
    "hireable": null,
    "bio": "React/Next.js intern eager to become a full-stack developer. Passionate about building user-friendly and high-performance web applications. ",
    "twitter_username": null,
    "public_repos": 117,
    "public_gists": 0,
    "followers": 4,
    "following": 27,
    "created_at": "2022-05-07T16:49:55Z",
    "updated_at": "2024-09-20T12:43:57Z"
  }

app.get('/', (req, res)=>{
    res.send("Hello world")
})

app.get('/about', (req, res)=>{
    res.send("About page")
})

app.get('/github',(req, res)=>{
    res.json(githubData)
})

app.get('/login',(req, res)=>{
    res.send("<h1>Please login at chai aur code </h1>")
})

app.get('/sigup',(req, res)=>{
    res.send("<h2>sigup page<h2>")
})


app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
})
