printPyramid(5);

function printPyramid(height) {
    for (var counter = 1; counter < height + 1; counter++)
  console.log(" ".repeat(height-counter) + "#".repeat(counter + 1));
}
drawPyramid(5);

function drawPyramid(height) {
    var node = document.getElementById("pyramid");
    var elementremove = document.getElementById("construction"); 
    elementremove.parentNode.removeChild(elementremove);
    
    for (var counter = 1; counter < height +1; counter++){
        var text = "\xa0".repeat(height-counter) + "#".repeat(counter + 1)
        var element = document.createElement("p");
        element.textContent = text
        node.appendChild(element);
    }
}