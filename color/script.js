function copy() {
    var copyText = document.getElementById("textbox");
    navigator.clipboard.writeText(copyText.value);
    console.log("Copied = " + copyText.value);
}



const colorSliderChanged = (rgb) => {
    let red;
    let green;
    let blue;


    if (rgb === 'red', 'green', 'blue') {
        red = document.getElementById('red').value;
        green = document.getElementById('green').value;
        blue = document.getElementById('blue').value;
    }

    const result = `rgb(${red}, ${green}, ${blue})`;
  
   
    textbox.value = result;
    color.style.backgroundColor = result;


}

red.addEventListener('input', colorSliderChanged);
greenS.addEventListener('input', colorSliderChanged);
blue.addEventListener('input', colorSliderChanged);
