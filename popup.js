const btn = document.getElementById("changeColorBtn");
const colorBox = document.getElementById("selectedColorBox");
const colorGrid = document.getElementById("selectedColorGrid");
const colorValue = document.getElementById("selectedColorValue");

btn.addEventListener("click",()=>{
    const eyeDropper = new EyeDropper();

    eyeDropper
      .open()
      .then(async(result) => {
        colorBox.style.display = "flex"
        colorGrid.style.background = result.sRGBHex
        colorValue.innerHTML = result.sRGBHex
        try {
            await navigator.clipboard.writeText(result.sRGBHex)
        } catch (error) {
            console.error(error);
        }
      })
      .error((e) => {
        console.error(e);
      })
})