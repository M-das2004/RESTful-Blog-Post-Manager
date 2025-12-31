const express=require("express");
const app=express();
const port=8080;
const path=require("path");
const { v4: uuidv4 } = require("uuid");
uuidv4();
const methodOverride=require("method-override");

app.use(express.urlencoded({extended:true}))
app.use(methodOverride("_method"))

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
let posts = [
    {
        id: uuidv4(),
        username: "code_with_rahul",
        content: "RESTful routing finally makes sense. Practice really is the key 🔑"
    },
    {
        id: uuidv4(),
        username: "dev_ankit",
        content: "Spent 3 hours fixing a bug… turns out it was a typo 😅"
    },
    {
        id: uuidv4(),
        username: "frontend_nisha",
        content: "Working with EJS templates today. Simple, clean, and powerful ✨"
    },
    {
        id: uuidv4(),
        username: "backend_rohit",
        content: "Learning how method-override helps simulate PATCH and DELETE requests 💡"
    },
    {
        id: uuidv4(),
        username: "student_kunal",
        content: "JavaScript is confusing sometimes, but progress feels rewarding 🙌"
    },
    {
        id: uuidv4(),
        username: "codequeen_sneha",
        content: "Finished my first mini project using Node.js today 🎉"
    },
    {
        id: uuidv4(),
        username: "fullstack_amit",
        content: "Express routing is so much cleaner compared to vanilla Node 🔥"
    },
    {
        id: uuidv4(),
        username: "webdev_pooja",
        content: "Trying to understand middleware properly. One step at a time 🧩"
    },
    {
        id: uuidv4(),
        username: "tech_guru_vikas",
        content: "Good code is not written, it is rewritten ✍️"
    },
    {
        id: uuidv4(),
        username: "learner_sahil",
        content: "CRUD operations finally clicked after practice 💯"
    },
    {
        id: uuidv4(),
        username: "node_nikhil",
        content: "Building projects is the best way to learn backend development ⚙️"
    },
    {
        id: uuidv4(),
        username: "uiux_rhea",
        content: "Clean UI matters just as much as clean code 🎨"
    },
    {
        id: uuidv4(),
        username: "dev_priya",
        content: "Refactoring old code today and it feels so satisfying 😌"
    },
    {
        id: uuidv4(),
        username: "programmer_arjun",
        content: "Errors are proof that you are trying 👨‍💻"
    },
    {
        id: uuidv4(),
        username: "js_master_aditya",
        content: "JavaScript closures are tricky but powerful 🧠"
    },
    {
        id: uuidv4(),
        username: "college_coder_mehul",
        content: "Balancing college work and coding projects is tough but worth it 🎓"
    },
    {
        id: uuidv4(),
        username: "self_taught_kavya",
        content: "Consistency beats motivation every time ⏳"
    },
    {
        id: uuidv4(),
        username: "devops_varun",
        content: "Understanding backend fundamentals before jumping into frameworks 👍"
    },
    {
        id: uuidv4(),
        username: "coding_diaries",
        content: "Small progress every day leads to big results 📈"
    }
];

app.get("/posts",(req,res) => {
    res.render("index.ejs",{posts});
});
app.get("/posts/new",(req,res) => {
    res.render("new.ejs");
});
app.post("/posts",(req,res) => {
    let {username,content} = req.body;
    let id = uuidv4();
    posts.push({id,username,content});
    res.redirect("/posts");
});
app.get("/posts/:id",(req,res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    if (!post) {
    return res.send("Post not found");
    }
    res.render("show.ejs",{ post });
});
app.patch("/posts/:id",(req,res) => {
    let { id } = req.params;
    let newContent=req.body.content;
    let post = posts.find((p) => id === p.id);
    if (!post) {
    return res.send("Post not found");
    }
    post.content=newContent;
    console.log(post);
    res.redirect("/posts");
});
app.get("/posts/:id/edit",(req,res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs",{ post });
});
app.delete("/posts/:id",(req,res) => {
    let { id } = req.params;
    posts = posts.filter((p) => id !== p.id);
    res.redirect("/posts");
});
app.listen(port,() => {
    console.log("listening to port:8080");
});