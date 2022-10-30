function parseStory(rawStory) {
  // Your code here.
  const spl = (string) => {
    const splitedStory = string.split(" ");
    return splitedStory;
  };
  let arrayOfObjects = [];
  const arr = spl(rawStory);
  const check = arr.map((word) => {
    if (/\[v\]/.test(word)) {
      arrayOfObjects.push({ word: word.replace("[v]", ""), pos: "verb" });
    } else if (/\[a\]/.test(word)) {
      arrayOfObjects.push({
        word: word.replace("[a]", ""),
        pos: "adjective",
      });
    } else if (/\[n\]/.test(word)) {
      arrayOfObjects.push({ word: word.replace("[n]", ""), pos: "noun" });
    } else {
      arrayOfObjects.push({ word: word });
    }
    return arrayOfObjects;
  });
  const x = JSON.stringify(arrayOfObjects);
  //console.log(arrayOfObjects);
  forInput(arrayOfObjects);
  return x;
}

const inputId = [];
function forInput(array) {
  const madLibsEdit = document.querySelector(".madLibsEditP");
  madLibsEdit.id = "edit";
  const madLibsPreview = document.querySelector(".madLibsPreviewP");
  madLibsPreview.id = "Preview";

  function createInputStory(place, pholder, index) {
    place.innerHTML += `<span> <input type='text' name='type' value='' class='input' id='${index}' placeholder=${pholder}> </span>`;
  }
  function createOutputStory(place) {
    place.innerHTML += `<span> <input type='text' name='type'class='output' value=''  readonly> </span>`;
  }
  array.forEach((object, index) => {
    if (object.pos) {
      inputId.push(index);
      createInputStory(madLibsEdit, object.pos, index);
      createOutputStory(madLibsPreview, object.pos);
    } else {
      madLibsEdit.innerHTML += `${object.word} `;
      madLibsPreview.innerHTML += `${object.word} `;
    }

    document.querySelectorAll(`.madLibsEdit input`).forEach((input, index) => {
      input.addEventListener("input", (e) => {
        document.querySelectorAll(".madLibsPreview input")[index].value =
          e.target.value;
      });

      input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          document.getElementById(`${inputId[index + 1]}`).focus();
        }
      });
    });
  });
}

function setupSound() {
  var obj = document.createElement("object");
  obj.width = "0px";
  obj.height = "0px";
  obj.type = "audio/mp3";
  obj.data = "./sounds/free!.mp3";
  obj.setAttribute("id", "bgsound1");
  var body = document.getElementsByTagName("body")[0];
  body.appendChild(obj);
}
function Create() {
  // Create audio element.
  var m = document.createElement("AUDIO");

  if (m.canPlayType("audio/mpeg")) {
    m.setAttribute("src", "sound/free!.mp3");
  } else {
    m.setAttribute("src", "bells.ogg");
  }

  m.setAttribute("controls", "controls");
  document.body.appendChild(m);
}

getRawStory().then(parseStory);
{
  setupSound();
}

function toggleBtn() {
  const light = document.getElementById("light");
  const element = document.getElementById("btn");

  element.classList.toggle("active");
  light.classList.toggle("on");
  myFunction();
}

function myFunction() {
  let x = document.getElementById("Preview");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
