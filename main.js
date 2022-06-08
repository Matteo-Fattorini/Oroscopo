mainButton = document.getElementById("mainButton");
mainInput = document.getElementById("mainInput");
result = document.getElementById("result");

possibleSigns = "Aries, Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn, Aquarius, Pisces";

mainButton.addEventListener("click", function () {
    inputValue = mainInput.value;
    result.style.display = "block";
    const options = {
        method: "POST",
        url: "https://sameer-kumar-aztro-v1.p.rapidapi.com/",
        params: {
            sign: `${inputValue}`,
            day: "today"
        },
        headers: {
            "X-RapidAPI-Key": "427584f6c7mshe11de45fdf52486p107ecdjsna7b5fa0e1632",
            "X-RapidAPI-Host": "sameer-kumar-aztro-v1.p.rapidapi.com",
        },
    };

    axios
        .request(options)
        .then(function (response) {
            data = response.data.description;
            result.innerHTML = data;

        })
        .catch(function (error) {
            result.innerHTML = `The sign ${inputValue} does not exist, try one of those: ${possibleSigns}`;
        });
});