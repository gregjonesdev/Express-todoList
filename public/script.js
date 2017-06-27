
 const incomplete = document.querySelectorAll(".incomplete")
//

for (i=0; i<incomplete.length; i++) {
  alert("2")
  incomplete[i].addEventListener("click", markComplete)
}

function markComplete () {

  this.classList.remove("incomplete")
}
