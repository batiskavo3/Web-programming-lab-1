let x,y;
let inputX = document.querySelectorAll(".xnumber");
let inputY = document.querySelector(".ynumber");
let submit_button = document.querySelector(".submit")

inputX.forEach((item) => {
    item.addEventListener("click", (elem) => x = elem.target.value)
})

inputY.addEventListener("change", (elem) => {y = elem.target.value})

submit_button.addEventListener("click",submit_data)

function submit_data (){
    fetch("/php/script.php/?" + "x=" + x + "&y=" + y)
        .then(response => response.text())
        .then(responseText => {
            document.querySelector(".output-table").innerHTML = responseText;
        })
}



var width = 400,
    height = 400;

d3.select("td.graphContainer")
    .append("svg")
    .attr("height",height)
    .attr("width",width)
    .append("line")
    .attr("x1",30)
    .attr("y2",30)
    .attr("x2",300)
    .attr("y2",300)










