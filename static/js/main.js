// Make FETCH request and then run the function to push to DOM
fetch('/birthday')
        .then(response => {
            return response.json();
        })
        .then(birthdays => {
            const bd = document.getElementById("birthday-list")
            birthdays.forEach(birthday => {
                let blist = document.createElement("li")
                blist.textContent = `Happy Birthday, ${birthday.name}!  ${birthday.greeting}  - ${birthday.date}`
                bd.appendChild(blist)
            })
        })

// ON CLICK, run the fetch and post to DOM.
document.getElementById("js-clicker").addEventListener("click", () => {
    fetch('/birthday') // you do not need to include full URL since we're running this locally
        .then(response => {
            return response.json();
        })
        .then(birthdays => {
            console.log(JSON.stringify(birthdays))
            console.log("%cYAY!🖌🎨🖼", "color: red; font-family: sans-serif; font-size: 4.5em; font-weight: bolder; text-shadow: #000 1px 1px;") /* stylize the console log message */
            // const bd = document.getElementById("birthday-list")
            // birthdays.forEach(birthday => {
            //     let blist = document.createElement("li")
            //     blist.textContent = `Happy Birthday, ${birthday.name}!  ${birthday.greeting}`
            //     bd.appendChild(blist)
            })
        })
// })