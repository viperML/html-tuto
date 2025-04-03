const button = document.getElementById("myButton");

let count = 0

if (button !== null) {
    button.addEventListener("click", () => {
        count++;
        button.textContent = `Value: ${count}`;
    })
}
