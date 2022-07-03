var addCompButton = document.querySelector('#add-comp-button')
var trackerListDiv = document.querySelector("#tracker-list")

var compArr = []

addCompButton.addEventListener('click', function(e){
    e.preventDefault
     console.log("clicked!")
     var inputVal = document.querySelector('#add-comp-input').value
     compArr.push(inputVal)
     console.log(compArr)
    })

var addToList = function(){
    trackerListDiv.textContent = "comp 1"
}

addToList();