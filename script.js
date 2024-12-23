const btns = document.querySelectorAll("button");
const win = document.getElementById("landscape");
const imgElement = document.createElement('img');

btns.forEach(btn => {

    btn.addEventListener("click", () => {
        win.style.display = 'block';
        imgElement.style.borderRadius = 10;
        imgElement.width = 135;
        imgElement.height = 128;
        if (btn.dataset.set === "praia") {
            imgElement.src = 'imgs/beach.jpg';
            win.appendChild(imgElement);
        } 
        else if (btn.dataset.set === "city") {
            imgElement.src = 'imgs/city.jpg';
            win.appendChild(imgElement);
        }
        else if (btn.dataset.set === "snow") {
            imgElement.src = 'imgs/cold.jpg';
            win.appendChild(imgElement);
        } 
        else {
            imgElement.src = 'imgs/field.jpg';
            win.appendChild(imgElement);
        }
    });
});