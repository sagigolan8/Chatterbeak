import { createContext } from "react";

export const UserContext = createContext({
    name:'',
    email:'',
    password:'',
    id:'',
    bgColor:'#969696',
    color:'#fff'
});