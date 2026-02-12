const convertBtn = document.getElementById("convert-btn");
const inputNumber = document.getElementById("number");
const outputResult = document.getElementById("output");
const romArNum = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1]
];

inputNumber.addEventListener("keydown", e => {
    if (e.key === "Enter") {
        convertBtn.click()
    }
})

convertBtn.addEventListener('click', romanNum);

function romanNum() {
    if (!inputNumber.value) {
        outputResult.textContent = "Please enter a valid number"
      } else if (inputNumber.value < 1) {
        outputResult.textContent = "Please enter a number greater than or equal to 1";
      } else if (inputNumber.value > 3999) {
        outputResult.textContent = "Please enter a number less than or equal to 3999";
      } else {
        let result = "";
        for (const [roman, arabic] of romArNum) {
            while (inputNumber.value >= arabic) {
                result += roman;
                inputNumber.value -= arabic;
            }
        }
        outputResult.textContent = result;
      }
}