function motivationalSpeechWallpaper(
  text,
  colorCode,
  imgUrl,
  topCenterBottom,
  leftCenterBottom
) {
  let innerFlex = document.createElement("div");

  let textLayout = document.createElement("div");
  let displayText = document.createElement("p");
  displayText.innerHTML = text;

  innerFlex.append(textLayout);
  textLayout.append(displayText);

  return innerFlex;
}

const imageDiv = document.getElementById("images");

let image1 = motivationalSpeechWallpaper(
  "Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away. - Antoine de Saint",
  "1B4F72",
  "https://cdn.pixabay.com/photo/2020/06/12/03/06/magnifying-glass-5288877__340.jpg",
  "top",
  "right"
);

let image2 = motivationalSpeechWallpaper(
  "The scientist discovers a new type of material or energy and the engineer discovers a new use for it. - Gordon Lindsay Glegg",
  "007bff",
  "https://cdn.pixabay.com/photo/2018/02/23/04/38/laptop-3174729_1280.jpg",
  "center",
  "left"
);

let image3 = motivationalSpeechWallpaper(
  "Scientists study the world as it is, engineers create the world that never has been. - Theodore von Karman",
  "ecf0f1",
  "https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg",
  "center",
  "center"
);

imageDiv.append(image1);
imageDiv.append(image2);
imageDiv.append(image3);
