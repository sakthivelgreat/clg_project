import axios from "axios"
import { getUserData } from "./Storage";


axios.defaults.baseURL = "https://identitytoolkit.googleapis.com/v1";
const API_KEY = "AIzaSyA1hW-JhXscYp_u32rVBC9sW1t0ivgqGR8"
const REGISTER_URL = `/accounts:signUp?key=${API_KEY}`;
const Login_URL = `/accounts:signInWithPassword?key=${API_KEY}`;
const User_Details_URL = `/accounts:lookup?key=${API_KEY}`;

  export  const RegisterApi = (inputs)=>{
    let data = {
        displayName:inputs.name, email:inputs.email, password: inputs.password,returnSecureToken: true,
    }
    return axios.post(REGISTER_URL,data)

  }
  export  const LoginUrlApi = (inputs)=>{
    let data = {
        email:inputs.email, password: inputs.password,returnSecureToken: true,
    }
    return axios.post(Login_URL,data)

  }  
  
  export  const UserDetailsApi =() =>{
    let data = {idToken:getUserData()}
    return axios.post(User_Details_URL,data)
   
  }