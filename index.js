const express= require("express");
const app= express();
const port=8080;
const path= require("path");
const { v4:uuidv4 }= require('uuid');
const methodOverride = require('method-override')

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(methodOverride('_method'));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

let posts= [
    {
        id: uuidv4(),
        image: "/mypic.jpg",
        username:"Ranjita_das",
        content: "Consistency is the main key"
    },
     {
        id:uuidv4(),
        image:"/astami.jpg",
        username:"Astami_saha",
        content: "I want to do business in future"
    }, 
    {
        id:uuidv4(),
        image:"/rohit.jpg",
        username:"Rohit_mandal",
        content: "I want a happy life"
    },
     
];

app.get("/posts", (req,res)=>{
    res.render("index.ejs",{posts});
});

app.get("/posts/new", (req,res)=>{
    res.render("new.ejs");
});

app.post("/posts", (req,res)=>{
    let{username, content,image}= req.body;
    let id= uuidv4();
    posts.push({id,username,content,image});
    res.redirect("/posts");
});

app.get("/posts/:id", (req,res)=>{
    let {id}= req.params;
    let post= posts.find((p)=> id===p.id);
    res.render("show.ejs", {post});
});

app.get("/posts/:id/edit", (req,res)=>{
    let {id}= req.params;
    let post= posts.find((p)=> id===p.id);
    res.render("edit.ejs", {post});
});

app.patch("/posts/:id", (req,res)=>{
    let {id}= req.params;
    let post= posts.find((p)=> id===p.id);
    let newContent= req.body.content;
    let newImage= req.body.image;
    post.content= newContent;
    post.image= newImage;
    res.redirect("/posts");
});

app.delete("/posts/:id", (req,res)=>{
    let {id}= req.params;
    posts= posts.filter((p)=> id!==p.id);
    res.redirect("/posts");
})

app.listen(port, ()=>{
    console.log("app is listening on port");
})