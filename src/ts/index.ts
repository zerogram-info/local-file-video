import "../index.css";
import { main } from "./main";


async function mainloop(){
  
    if(document.readyState !== "complete"){
        await new Promise((rs)=>{
            window.addEventListener("load",rs);
        });
    }

    try{
        await main();
    }catch(e){
        console.log(e);
    }
}


mainloop();