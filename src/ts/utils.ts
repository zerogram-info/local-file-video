
//async awaitでのオブジェクトの受け渡し
export class SignalWait<T=any>{
  
    constructor(){
    }

    async wait() : Promise<void>{
    }

    notify(val : T){
    }
}

export function getElement(id : string)
{
    let elem = document.getElementById(id);
    if(!elem)throw "id="+id+"が見つかりません";
    return elem;
}

export function asInputElement(elem : HTMLElement){
    if(elem instanceof HTMLInputElement){
        return elem;
    }
    throw "" + elem + "-x-> HTMLInputElement";
}

export function asVideoElement(elem : HTMLElement){
    if(elem instanceof HTMLVideoElement){
        return elem;
    }
    throw "" + elem + "-x-> HTMLVideoElement";
}

export function asAnchorElement(elem : HTMLElement){
    if(elem instanceof HTMLAnchorElement){
        return elem;
    }
    throw "" + elem + "-x-> HTMLVideoElement";
}

export class VideoCapture{
  
    constructor(){
      
    }

    setup(video : HTMLVideoElement){
    }

    // 動画キャプチャ、pngに変換
    capture(video : HTMLVideoElement) : string{
        return "";
    }

    // 動画キャプチャ 指定範囲
    captureImageData(video : HTMLVideoElement,
        x?:number, y?:number, width?:number, height?:number
    ) : ImageData {
        return new ImageData(1,1);
    }
}
