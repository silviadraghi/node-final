const express = require ('express')
const app = express()

app.use(express.static("public"));

app.get('/', (req,res) => {
    res.send("hola express84");
});
app.get("/nosotros", (req,res) => {
    res.sendFile(__dirname + "/private/nosotros.html" );
});
app.get("/catalogo", (req,res) => {
    res.sendFile(__dirname + "/catalogo.json");
});
const users = [
    
    {id:1, name:"usuario1" },
    {id:2, name:"usuario2" },
    {id:3, name:"usuario3" },
];

app.get("/users/:id", (req,res)=>{
console.log(req.params.id);
const user=users.find((user) =>user.id ==req.params.id )
console.log(user);
res.send("ok");
}); 

const PORT = 3000

app.listen(PORT, () => console.log('http://localhost:$(PORT)'));