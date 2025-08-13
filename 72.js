// going to be testing my js knowledge here

const weatherform = document.querySelector(".weatherform");
const cityinput = document.querySelector(".cityinput");
const card = document.querySelector(".card");
const apikey = "805102664fadb11cfa3cc275b1b053b0";

weatherform.addEventListener("submit", async event => {
    event.preventDefault();

    const city = cityinput.value;
    if (city) {
        try {
            const weatherdata = await getweatherdata(city);
            displayweatherinfo(weatherdata);
        }
        catch (error) {
            console.log(error);
            displayerror(error);
        }
    }
    else {
        displayerror("Please enter a city");
    }
})

async function getweatherdata(city) {
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
    const response = await fetch(apiurl);

    if (!response.ok) {
        throw new Error("could not get weather data");
    }
    return await response.json();
}

function displayweatherinfo(data) {
    const { name: city, main: { temp, humidity }, weather: [{ description }] } = data;
    card.textContent = "";
    card.style.display = "flex";

    const citydisplay = document.createElement("h1");
    const tempdisplay = document.createElement("p");
    const humiditydisplay = document.createElement("p");
    const descdisplay = document.createElement("p");

    citydisplay.textContent = city;
    card.appendChild(citydisplay);
    citydisplay.classList.add("dynamicbold");

    tempdisplay.textContent = temp;
    card.appendChild(tempdisplay);
    tempdisplay.classList.add("dynamicbold");

    humiditydisplay.textContent = humidity;
    card.appendChild(humiditydisplay);
    humiditydisplay.classList.add("dynamicbold");

    // going to be using object assign on this one for some css configs
    descdisplay.textContent = description;
    card.appendChild(descdisplay);
    descdisplay.classList.add("dynamicbold");
    Object.assign(descdisplay.style, {
        position: "relative",
        left: "40vw"
    })
}

function displayerror(message) {
    const errordisplay = document.createElement("p");
    errordisplay.textContent = message;
    errordisplay.classList.add("dynamicbold");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errordisplay);
}