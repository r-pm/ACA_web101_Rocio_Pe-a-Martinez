console.log('blah blah blah')
// console.log creates notation for view in inspector console
// can console log at any point in work to see whatup

// ; to end line no longer req
// also, '' is strictly for creating strings. will remove value 
// of any named item & render as string only

var mainContainer = document.getElementsByClassName('main-container')
// using variable? called element from DOM thru ... ex here .getElementsByClassName('class-name-given')

console.log('mainContainer', mainContainer)
// shows us our called Elem in console. creates alias??

// ex below of creating styling directly from DOM manipulation
mainContainer.style.height = '100px'
mainContainer.style.width = '100px'

// gonna create a new Elem in DOM
var board = document.createElement('div')
mainContainer.appendChild(board)
// here sticking that new Elem in as child of existing elem

board.className = 'board'

var body = document.querySelector('body')
body.style.margin = 0;

// making a function 
function backgroundRed (x , y) {

}