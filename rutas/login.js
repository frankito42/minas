import { Router } from "express";
import { loginUser } from "../controladores/login.js";

const rutaLogin = Router()

rutaLogin.get('/', (req, res) => {
    res.render('login'); // Renderiza index.ejs
});

rutaLogin.post('/loginUser',async (req, res)=>{
    console.log(req.body)
    const user=await loginUser(req.body)
    res.json(user)
})

/* rutaLogin.get('/usersAll', async (req, res) => {
    const users=await UserModel.find({});
    console.log(users)
    res.json(users)
}); */

export default rutaLogin