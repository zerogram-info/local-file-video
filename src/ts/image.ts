
export class ImageMatching{
  
    constructor(){
      
    }
    async load(file : File){
    }

    // 画像一致率 0.0 ~ 1.0
    async matching(image : ImageData){
        return 0;
    }

    static getAlpha(image : ImageData, x : number, y : number){
        return 0;
    }
    static getRGB(image : ImageData, x : number, y : number){
        return [0,0,0];
    }
}