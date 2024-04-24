document.addEventListener("DOMContentLoaded", function() {
    let circles = document.querySelectorAll(".circle");
    let light = 0;
    let intervalId;

    function changeLight() {
        circles[light].className = "circle"; 
        light++;

        if (light > 2) {
            light = 0;
        }
        const selectLight = circles[light];
        const color = selectLight.getAttribute("color");
        if (color) {
            selectLight.classList.add(color);
        }
    }

    function startTrafficLight() {
        intervalId = setInterval(changeLight, 1000);
        document.getElementById("controlButton").textContent = "Stop";
        document.getElementById("controlButton").onclick = stopTrafficLight;
    }

    function stopTrafficLight() {
        clearInterval(intervalId);
        document.getElementById("controlButton").textContent = "Start";
        document.getElementById("controlButton").onclick = startTrafficLight;
    }

    document.getElementById("controlButton").onclick = startTrafficLight;
});
