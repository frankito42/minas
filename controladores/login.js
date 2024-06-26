import UserModel from "../modelos/user.js";
export async function loginUser(userLogin) {
    /* console.log(userLogin) */
    const user=await UserModel.findOne({ user: userLogin.user });
    if (!user) {
        return "Usuario no encontrado."
    }else{
        if(userLogin.pass!=user.pass){
            return "Usuario o pass incorrecto."
        }else{
            return user
        }
    }
}

