import {env} from "../config.js";

const uri = `${env.ssl + env.hotsName}:${env.port}`;
const config = {method: undefined, headers: {"Content-Type": "application/json"}};

export const getAll = async()=>{
    config.method = "GET";
    // config.body = "";
    let res = await (await fetch(`${uri}/libro`, config)).json();
    return res;
}
export const post = async(obj)=>{
    config.method = "POST";
    config.body = JSON.stringify(obj);
    let res = await (await fetch(`${uri}/libro`, config)).json();
    return res;
}
export const deleteOne = async(id)=>{
    if(typeof id !== 'number') return {status: 400, message: `El datos '${id}' no cumple con el formato`};
    config.method = "DELETE";
    // config.body = JSON.stringify(obj);
    let res = await (await fetch(`${uri}/libro/${id}`, config)).json();
    return res;
}
export const putOne = async(obj={})=>{
    if(!obj.id) return {status: 400, message: `Usuario porfavor ingrese los datos`};
    const {editorialId, nombre, direccion,telefono} = obj;
    if(typeof editorialId !== 'number') return {status: 400, message: `El datos '${autcategoriaIdorId}' no cumple con el formato`};
    if(typeof nombre !== 'string') return {status: 400, message: `El datos '${autcategoriaIdorId}' no cumple con el formato`};
    if(typeof direccion !== 'string') return {status: 400, message: `El datos '${direccion}' no cumple con el formato`};
    if(typeof telefono !== 'number') return {status: 400, message: `El datos '${telefono}' no cumple con el formato`};


    config.method = "PUT";
    config.body = JSON.stringify(obj);
    let res = await (await fetch(`${uri}/libro/${id}`, config)).json();
    return res;
}



// console.log(await post({titulo:"Pepito", fecha: "2023-08-10"}));
// console.log(await getAll());
// console.log(await deleteOne(1));

console.log(putOne({id:"123"}));