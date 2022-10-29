<<<<<<< HEAD
/**
 * Complete the implementation of parseStory.
 * 
 * parseStory retrieves the story as a single string from story.txt
 * (I have written this part for you).
 * 
 * In your code, you are required (please read this carefully):
 * - to return a list of objects
 * - each object should definitely have a field, `word`
 * - each object should maybe have a field, `pos` (part of speech)
 * 
 * So for example, the return value of this for the example story.txt
 * will be an object that looks like so (note the comma! periods should
 * be handled in the same way).
 * 
 * Input: "Louis[n] went[v] to the store[n], and it was fun[a]."
 * Output: [
 *  { word: "Louis", pos: "noun" },
 *  { word: "went", pos: "verb", },
 *  { word: "to", },
 *  { word: "the", },
 *  { word: "store", pos: "noun" }
 *  { word: "," }
 *  ....
 * 
 * There are multiple ways to do this, but you may want to use regular expressions.
 * Please go through this lesson: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/
 */

  // Your code here.
  
  // This is examplePull
  /**
   * All your other JavaScript code goes here, inside the function. Don't worry about
   * the `then` and `async` syntax for now.
   * 
   * You'll want to use the results of parseStory() to display the story on the page.
   */
    
=======
// /**
//  * Complete the implementation of parseStory.
//  *
//  * parseStory retrieves the story as a single string from story.txt
//  * (I have written this part for you).
//  *
//  * In your code, you are required (please read this carefully):
//  * - to return a list of objects
//  * - each object should definitely have a field, `word`
//  * - each object should maybe have a field, `pos` (part of speech)
//  *
//  * So for example, the return value of this for the example story.txt
//  * will be an object that looks like so (note the comma! periods should
//  * be handled in the same way).
//  *
//  * Input: "Louis[n] went[v] to the store[n], and it was fun[a]."
//  * Output: [
//  *  { word: "Louis", pos: "noun" },
//  *  { word: "went", pos: "verb", },
//  *  { word: "to", },
//  *  { word: "the", },
//  *  { word: "store", pos: "noun" }
//  *  { word: "," }
//  *  ....
//  *
//  * There are multiple ways to do this, but you may want to use regular expressions.
//  * Please go through this lesson: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/
//  */

  
>>>>>>> f99330fbe703f51a471d80139f7eff6e04d49c75
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
<<<<<<< HEAD
    return arrayOfObjects;
  });
 

        //document.getElementById("demo").innerHTML = processedStory; // id demo was not on the html i put it there "omer"
    
  
    
        const x = JSON.stringify(arrayOfObjects);
        console.log(arrayOfObjects);
        forInput(arrayOfObjects)
        return x;
}
      
 
    //document.getElementById("demo").innerHTML = processedStory; // id demo was not on the html i put it there "omer"
    
     function forInput(array){
      const madLibsEdit = document.querySelector('.madLibsEdit')
      const madLibsPreview = document.querySelector('.madLibsPreview')
  
function createInputStory(place, pholder){
     place.innerHTML +=`<span> <input type='text' name='type' value='' placeholder=${pholder}> </span>`
      }
      function createOutputStory(place, pholder){
        place.innerHTML +=`<span> <input type='text' name='type' value='' placeholder=${pholder} readonly> </span>`
      }
    array.forEach(object => {
      if(object.pos){
      createInputStory(madLibsEdit,  object.pos);
        createOutputStory(madLibsPreview,  object.pos)
      }else{
        madLibsEdit.innerHTML += `${object.word} `
        madLibsPreview.innerHTML += `${object.word} `
            }
  
        document.querySelectorAll(`.madLibsEdit input`).forEach((input,index) => {
          input.addEventListener('input', e => { document.querySelectorAll('.madLibsPreview input')[index].value = e.target.value 
                })
            })
    })
  }
 
  
function setupSound() 
{ 
  var obj = document.createElement("object"); 
  obj.width="0px"; 
  obj.height="0px"; 
  obj.type = "audio/mp3"; 
  obj.data = "./sounds/free!.mp3";
  obj.setAttribute("id", "bgsound1");
  var body = document.getElementsByTagName("body")[0]; 
  body.appendChild(obj); 
      
} 
function Create() {
            
  // Create audio element.
  var m = document.createElement(
    "AUDIO");

  if (m.canPlayType("audio/mpeg")) {
      m.setAttribute("src", "sound/free!.mp3");
  } else {
      m.setAttribute("src", "bells.ogg");
  }

  m.setAttribute("controls", "controls");
  document.body.appendChild(m);

}


getRawStory()
  .then(parseStory)
  {
    //document.getElementById("demo").innerHTML = processedStory; // id demo was not on the html i put it there "omer"
    setupSound()
    console.log("any thing");
  }

        
      

=======
  });
    const x = JSON.stringify(arrayOfObjects);
  console.log(arrayOfObjects);
  forInput(arrayOfObjects)
  return x;

}
  
  
  
  function forInput(object) {
    
    for(let i=0; i<object.length; i++){
      //const object = object[i]
      const span = (document.getElementById(
        "demo").innerHTML += `<span class=“spanclass” id=" ${object[i].word}">${object[i].word}</span>`);
  
      //span.appendChild() 


      if('pos'in object[i]){
        const input = (document.getElementById("demo").innerHTML += `<input class=“inputclass” id=" ${object[i].word}">${object[i].word}</input>`);
        input.id=`${i}`
        
  

       /*const input = document.createElement("input");
        input.setAttribute("placeholder", `${object[i].pos}`);
        input.id=`${i}`*/
       



      }

    }

  }
  
  
  
 

  
  
  

 
  
  // This line is currently wrong :)
  


// /**
//  * All your other JavaScript code goes here, inside the function. Don't worry about
//  * the `then` and `async` syntax for now.
//  *
//  * You'll want to use the results of parseStory() to display the story on the page.
//  */

getRawStory()
  .then(parseStory)
  .then((processedStory) => {
    //document.getElementById("demo").innerHTML = processedStory; // id demo was not on the html i put it there "omer"
    
    console.log(processedStory);
  });
  
>>>>>>> f99330fbe703f51a471d80139f7eff6e04d49c75
