/* utility */
function colorGenerator(){
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}
/* main */
let griglia = document.getElementById("griglia");
boxCreator(icons);
let select = document.getElementById("selection").addEventListener("change", typechange);




function typechange(){
    let select = document.getElementById("selection");
    let type = select.value;
    console.log(type)
    let filter = icons.filter((icona)=>{
        return icona.type === type;
    })
    switch(type){
        case "all":
        default:
            boxCreator(icons);
            break;
        case "animal":
            boxCreator(filter);
            break;
        case "vegetable":
            boxCreator(filter);
            break;
        case "user":
            boxCreator(filter);
            break;
    }
}
/* funzione crea box */
function boxCreator(arr){
    griglia.innerHTML = " ";
    arr.forEach((icona)=>{
        randomColor = colorGenerator();

        griglia.innerHTML += `
            <div class="box">
                <div class="content">
                    <i style="color:#${randomColor};" class="${icona.prefix}solid ${icona.prefix}${icona.name}"></i>
                    <p>${icona.name}</p>
                </div>
            </div> 
        `;
    })
    console.log(griglia)
}