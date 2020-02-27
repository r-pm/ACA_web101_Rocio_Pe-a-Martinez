// player clicks square 
// here you are naming function addGamePiece 
// & calling auto function 'selectedElement' which already does its thing
function addGamePiece (selectedElement)
// xo piece is placed 
var xo = document.createElement('h1')
// add text for x or o
xo.innerText = 'X'
selectedElement.appendChild(xo)
// player clicks square 
// o is placed 

// BUT WAIT! NOW THE X IS CREATED INFINITUM
// must use some kind of if statement to set limit 