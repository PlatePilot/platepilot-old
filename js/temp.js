function loadPlates() {
  return JSON.parse(localStorage.getItem('plates') ?? {});
}

const plates = loadPlates() // {}

function savePlates(platesObject, ) {

}
