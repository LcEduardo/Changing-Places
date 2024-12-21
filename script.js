const btns = document.querySelectorAll("button");
const win = document.getElementById("window");
const imgElement = document.createElement('img');

btns.forEach(btn => {

    btn.addEventListener("click", () => {
        if (btn.dataset.set === "praia") {
            imgElement.src = 'imgs/beach.jpg';
            imgElement.width = 250;
            imgElement.height = 200;
            win.appendChild(imgElement);
        } 
        else if (btn.dataset.set === "city") {
            imgElement.src = 'imgs/city.jpg';
            imgElement.width = 250;
            imgElement.height = 200;
            win.appendChild(imgElement);
        }
        else if (btn.dataset.set === "snow") {
            imgElement.src = 'imgs/cold.jpg';
            imgElement.width = 250;
            imgElement.height = 200;
            win.appendChild(imgElement);
        } 
        else {
            imgElement.src = 'imgs/field.jpg';
            imgElement.width = 250;
            imgElement.height = 200;
            win.appendChild(imgElement);
        }
    });
});