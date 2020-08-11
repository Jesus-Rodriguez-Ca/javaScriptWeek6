//Changes the color of the logo "Mean Stack" 
var logoColor = document.getElementsByClassName('logo'); // Selects element by its class name from a NodeList.
if (logoColor.length >= 1){                              // Check if the list has items
    var logo = logoColor[0];                             // Selects the first element of the list
    logo.className = 'mainLogo';                         // Changes the color of mainLogo class from white to black.
}


// Changes the title in step 1
var replacing = document.getElementById("setup");                                       // Selects element by its Id.
var elementChange = replacing.firstChild.nodeValue;                                     
elementChange = elementChange.replace("Set up Ubuntu", "Set up Ubuntu on Google Cloud");// Sets the string "Set up Ubuntu" to " Set up Ubunto on Google Cloud"
replacing.firstChild.nodeValue = elementChange;                                         // Adds the value store in elementChane variable to the TextNode


//Adds one step to Running the server step 4.
var adding = document.createElement('li');          // Creates a new element and it's save in adding variable
var newText = document.createTextNode("Finish");    // Creates a new textNode
adding.appendChild(newText);                        // Adds the textNode the element just created
var position = document.getElementById("server");   // Find the posotion where the element will be added
position.appendChild(adding);                       // Insets the element to its position

// Removes the last element in the list of step 1
var deleteElement = document.getElementsByTagName("li")[16]; // Selects elements by tag name.
var father = deleteElement.parentNode;                       // Selects the content element. In this case the ol element
father.removeChild(deleteElement);                           // Removes the element
