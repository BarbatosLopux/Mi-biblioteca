/* const enviar = async ()=>{ // get-enviar
    const config = {
        method: "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify({
        titulo:"Como hacer feliz a un pachon",
        fecha : "2021",
        autor : "pachoneitor"
        })
    }
    let res =await(await fetch("http://127.0.0.1:5010/libros",config)).json();
    console.log(res)
    }
    enviar()
 */
/* const actualizar = async (id)=>{ //put-actualizar informacion o MODIFICA 
    const config={
        method: "PUT",
        headers: {"content-type": "application/json"},
        body: JSON.stringify({titulo:"como ser pendejo_",
            fecha: "2023",
            autor: "hola careximba",
            
    })
    }
    let res =await(await fetch("http://127.0.0.1:5010/libros/"+id,config)).json();
    console.log(res)
}
actualizar(3)
 */

const eliminar = async(id)=>{ //eliminar un ID especifico en JSON 
    const config={
        method:"DELETE"
    }
    let res=await(await fetch("http://127.0.0.1:5010/libros/"+id,config)).json();
    console.log(res)
}
eliminar(2)

