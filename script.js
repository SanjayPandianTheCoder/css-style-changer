const inputs = document.querySelectorAll(".css-controller input");

inputs.forEach((inputs)=>inputs.addEventListener("change",update));

function update(){
    const suffData = this.dataset.sizing || "";
    document.documentElement.style.setProperty(
        `--${this.name}`,
        this.value + suffData
    );
}