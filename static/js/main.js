console.log("I am here!!")

document.getElementById("js-clicker").addEventListener("click", () => {
    fetch('http://127.0.0.1:8000/birthday')
        .then(response => {
            return response.json();
        })
        .then(birthdays => {
            console.log(JSON.stringify(birthdays))
            console.log("%cYAY!🖌🎨🖼", "color: red; font-family: sans-serif; font-size: 4.5em; font-weight: bolder; text-shadow: #000 1px 1px;") /* stylize the console log message */
        })
})

// TODO: Make an http request to ""

// url: "/birthdays"