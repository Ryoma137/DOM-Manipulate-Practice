function motivationalSpeechWallpaper(wallpaperObj) {

  let wallpaperDiv = document.createElement("div");

  let textDiv = document.createElement("div");
  let displayText = document.createElement("p");
  displayText.innerHTML = wallpaperObj.text;
  textDiv.style.color = "#" + wallpaperObj.colorCode;


  wallpaperDiv.style = "background-image: url(" + wallpaperObj.imgUrl + ")";

   textDiv.append(displayText);
   wallpaperDiv.append(textDiv);

   const verticalPosition = wallpaperObj.getVertical;
   const horizontalPosition = wallpaperObj.getHorizontal;
//    wallpaperDiv.classList.add("c-flex", "vh-75", "imgBackGroung",verticalPosition,horizontalPosition);

  return wallpaperDiv;
}


class Wallpaper{

    constructor(text,colorCode,imgUrl,vertical,horizontal){
        
        this.text = text;
        this.colorCode = colorCode;
        this.imgUrl = imgUrl;
        this.vertical = vertical;
        this.horizontal = horizontal;
    }

    getVertical(){

        if(this.vertical == "top"){
            return "align-items-start";
        }
        else if(this.vertical == "center"){
            return "align-items-vertical";
        }
        else return "align-items-end";
    }

    getHorizontal(){

        if(this.horizontal == "left"){
            return "justify-content-start";
        }
        else if(this.horizontal == "right"){
            return "justify-content-end";
        }
        else return "justify-content-center";
    }
}


const imageDiv = document.getElementById("images");

let image1 = new Wallpaper(
  "Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away. - Antoine de Saint",
  "1B4F72",
  "https://cdn.pixabay.com/photo/2020/06/12/03/06/magnifying-glass-5288877__340.jpg",
  "top",
  "right"
);

let image2 = new Wallpaper(
  "The scientist discovers a new type of material or energy and the engineer discovers a new use for it. - Gordon Lindsay Glegg",
  "007bff",
  "https://cdn.pixabay.com/photo/2018/02/23/04/38/laptop-3174729_1280.jpg",
  "center",
  "left"
);

let image3 = new Wallpaper(
  "Scientists study the world as it is, engineers create the world that never has been. - Theodore von Karman",
  "ecf0f1",
  "https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg",
  "center",
  "center"
);

imageDiv.append(motivationalSpeechWallpaper(image1));
imageDiv.append(motivationalSpeechWallpaper(image2));
imageDiv.append(motivationalSpeechWallpaper(image3));
