
function Calculate() {
    event.preventDefault();
    console.log("Working");

    // define variables
    let groesse = document.getElementById("groesse").value  
    let age = document.getElementById("age").value 
    let breit = document.getElementById("breit");
    let schmal = document.getElementById("schmal");
    let output = document.getElementById("output")
    let nice = document.getElementById("nice")

    if (breit.checked) {
     let ideal = (((groesse - 100) + (age/10)) * 0.9 * 0.9).toFixed(2);
    output.innerHTML = `Dein Idealgewicht liegt bei ${ideal} kg`
    } else {
        let ideal = (((groesse - 100) + (age/10)) * 0.9 * 1.1).toFixed(2);
        output.innerHTML += `Dein Idealgewicht liegt bei ${ideal} kg`
    }
}

function niceMessage() {
    event.preventDefault();
    nice.innerHTML = "Egal was das Idealgewicht sagt - du bist schön so wie du bist! 	&#9825;"
}