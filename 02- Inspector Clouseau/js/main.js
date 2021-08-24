document.querySelector('header > h1').innerText = "Inspector Clouseau"

document.querySelector('header > h2').innerText = "Getting to the bottom, one step at a time!"

//this will make it update automatically
function reDisplay(){

//starting off the window section

//width and height
let windowSizes = `The window size is ${window.innerWidth} pixels wide by ${window.innerHeight} pixels high.`

//from the top and the left
let offset = `The offset is ${window.screenX} pixels from the left edge of the window and ${window.screenY} pixels from the top of the window.`

//grabbing the URL
let urlLink = `The current URL is ${window.location.href}.`

// OLD SCHOOL - let myWindow = document.querySelector('#myWindow').innerText = windowSizes + `\n` + offset + `\n` + urlLink

//new school-
let myWindow = document.querySelector('#myWindow').innerText= `${windowSizes} \n \n ${offset} \n \n ${urlLink}`


//now it's the document section

//title
let documentTitle = `The title of the document is ${document.title}.`


//the last time the page was updated
let pageUpdated = `The last time the page was updated was ${document.lastModified}.`

//OLD SCHOOL - let myDocument = document.querySelector(`#myDocument`).innerText = documentTitle + `\n` + pageUpdated

//new school-
let myDocument = document.querySelector('#myDocument').innerText= `${documentTitle} \n \n ${pageUpdated}`
}
reDisplay()


/*not sure if you're going to read this, but in the video lecture you were talking about how the offset wasn't changing, but that's because our 
code, from what I could see, doesn't track from the display, but from the window, and you were changing it from the right and the bottom.
I played around with the display from the left and the top, and the offset values changed as I did so. Just something fun I picked up on.*/