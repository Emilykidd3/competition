var addCompButton = document.querySelector('#add-comp-button')
var trackerListDiv = document.querySelector("#tracker-list")

var compArr = []

addCompButton.addEventListener('click', function(e){
    e.preventDefault()
     console.log("clicked!")
     var inputVal = document.querySelector('#add-comp-input').value
     inputVal.value = ""
     compArr.push(inputVal)
     console.log(compArr)
     addToList();
    })

var addToList = function(){
    trackerListDiv.textContent = compArr
}

addToList();