import { createContext } from "react";

export const UserContext = createContext({
    name:'',
    email:'',
    password:'',
    _id:'',
    bgColor:'#969696',
    color:'#fff'
});