import { getUserData, removeDataUser } from "./Storage"


export const isAuthenticated =() =>{
    return getUserData()!=null?true:false;
}
export const logout = () =>{
    removeDataUser();
}