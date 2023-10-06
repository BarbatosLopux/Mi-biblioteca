import {env} from "../config.js";

const uri = `${env.ssl + env.hotsName}:${env.port}`;
const config = {method: undefined, headers: {"Content-Type": "application/json"}};


const validarExtructura = (data={})=>{
    if(data.constructor.name !== "Object" || Object.keys(data).length==0) return {status: 400, message: `Usuario envie los datos`};
    const {
        nombre=null,
        direccion=null,
        telefono=null,

    } = data;
    if(typeof nombre !== 'string') return {status: 400, message: `El nombre '${nombre}' no cumple con el formato`};
    if(typeof direccion !== 'string') return {status: 400, message: `La direccion '${direccion}' no cumple con el formato`};
    if(typeof telefono !== 'number') return {status: 400, message: `El telefono '${telefono}' no cumple con el formato`};
    return data;
}
export const getOne = async(id)=>{
    config.method = "GET";
    // config.body = "";
    let res = await (await fetch(`${uri}/editorial/${id}`, config)).json();
    return (Object.keys(res).length>0) ? res : {status: 401, message: "La categoria no existe", id};
}
export const getAll = async()=>{
    config.method = "GET";
    // config.body = "";
    let res = await (await fetch(`${uri}/editorial`, config)).json();
    return res;
}
export const post = async(obj={})=>{
    obj = validarExtructura(obj);
    if(obj.status) return obj;
    
    config.method = "POST";
    config.body = JSON.stringify(obj);
    let res = await (await fetch(`${uri}/editorial`, config)).json();
    return res;
}
console.log(await post({nombre:"Norma",
direccion:"clle 654654#",
telefono:3252525828}));
// console.log(post({Direccion:"calle 62#2w-27"}));
// console.log(post({Telefono:"3188259326"}));

