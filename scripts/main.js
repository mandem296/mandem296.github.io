/*
const myHeading = document.querySelector("h1");
myHeading.textContent = "God is Great!";

comment the statement below to see the alert




tests for events
document.querySelector("html").onclick = function() {
    alert("Ouch! Stop poking me!");
  }



  
using the arrow function instead of the function keyword

document.querySelector("html").addEventListener("click", () => {
    alert("Ouch! Stop poking me!");
  });




Adding an image changer
const myImage = document.querySelector("img");

myImage.onclick = () => {
    
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/firefox2.png");
  } else {
    myImage.setAttribute("src", "images/elephant.jpg");
  }
};

This is what is happening in the code above
1. We get a reference to the image by storing it in the myImage variable.
2. We then add an onclick event handler to the image. This event handler will run the code in the function every time the user clicks the image.
3. Inside the function, we store the URL of the image in a variable called mySrc.
4. We use a conditional to check the value of the src attribute, which holds the image's filename. If it is equal to the path to the original image, the src is changed to the path to the second image, forcing the other image to be loaded inside the <img> element.
5. If the image's src attribute already contains the filename of the second image, the value of the src attribute is changed back to the original filename, causing the original image to be loaded again.




//Adding a personalized welcome message




The setUserName() function contains a prompt() function, which displays a dialog box, similar to alert(). 
This prompt() function does more than alert(), asking the user to enter data, and storing it in a variable after the user clicks OK. 
In this case, we are asking the user to enter a name. 
Next, the code calls on an API localStorage, which allows us to store data in the browser and retrieve it later. 
We use localStorage's setItem() function to create and store a data item called 'name', setting its value to the myName variable which contains the user's entry for the name. 
Finally, we set the textContent of the heading to a string, plus the user's newly stored name.


This first line of this block uses the negation operator (logical NOT, represented by the !) to check whether the name data exists. 
If not, the setUserName() function runs to create it. 
If it exists (that is, the user set a user name during a previous visit), we retrieve the stored name using getItem() and set the textContent of the heading to a string, plus the user's name, as we did inside setUserName().



A user name of null?
When you run the example and get the dialog box that prompts you to enter your user name, try pressing the Cancel button. 
You should end up with a title that reads Mozilla is cool, null. This happens because—when you cancel the prompt—the value is set as null. 
Null is a special value in JavaScript that refers to the absence of a value.

Also, try clicking OK without entering a name. 
You should end up with a title that reads Mozilla is cool, for fairly obvious reasons.

To avoid these problems, you could check that the user hasn't entered a blank name. 
Update your setUserName() function to this:




In human language, this means: If myName has no value, run setUserName() again from the start. 
If it does have a value (if the above statement is not true), then store the value in localStorage and set it as the heading's text.
  */

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
  }

  myButton.onclick = () => {
    setUserName();
  };

  function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
  }
  
  
  
  