var addCompButton = document.querySelector('#add-comp-button')
var trackerListDiv = document.querySelector("#tracker-list")

addCompButton.addEventListener('click', function(){
     console.log("clicked!")
    })

var addToList = function(){
    trackerListDiv.textContent = "comp 1"
}

addToList();