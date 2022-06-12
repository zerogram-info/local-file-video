import { ImageMatching } from "./image";
import { asAnchorElement, asInputElement, asVideoElement, getElement, SignalWait, VideoCapture } from "./utils";


export async function main(){
    let inputFile = asInputElement(getElement("input-file"));
    let btnStart = getElement("btn-start");

    let videoFile : File|null = null;
    
    inputFile.addEventListener("input", ()=>{
        if(!inputFile.files)return;
        videoFile = inputFile.files[0];
    });

    // Startボタン
    btnStart.addEventListener("click",()=>{
        if(videoFile){
            let videoElem = asVideoElement(getElement("video"));
            videoElem.src = URL.createObjectURL(videoFile);
            videoElem.volume = 0.4;
            btnStart.style.display = "none";
            inputFile.style.display = "none";
            
        }
    })
}
