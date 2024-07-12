const imagesDiv = document.getElementById("images");
document.getElementById("images");
console.log(imagesDiv);
const resultDiv = document.getElementById("result");
const i = document.createElement("img");
imagesDiv.append(i);

const rnd = Math.random() > 0.5;
const arr = [rnd, !rnd];

let id = (Math.random() * 6 + 1) * 10000;
id = Math.floor(id);

const fakeimg = "https://thispersondoesnotexist.com/";
const realimg = `https://whichfaceisreal.blob.core.windows.net/public/realimages/${id}.jpeg`;
//try again
const again = document.createElement("button");
again.innerText = "Play again";
again.onclick = function () {
  location.reload();
};

for (const x of arr) {
  const w = document.createElement("img");
  w.src = x ? realimg : fakeimg;
  imagesDiv.append(w);

  w.onclick = function () {
    resultDiv.innerText = x ? "correct" : "incorrect";
    imagesDiv.style.pointerEvents = "none";
    resultDiv.append(again);
  };
}
