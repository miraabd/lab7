let hello_world = document.querySelector('h1')
hello_world.remove()

let el1 = document.createElement('h1')
el1.setAttribute("style", "color: blue")
el1.innerHTML = "Lab7 Assignment"
document.body.appendChild(el1)

const el2 = document.createElement('hr')
const el6 = document.createElement('hr')
const el10 = document.createElement('hr')
document.body.appendChild(el2)

let el3 = document.createElement('h2')
el3.innerHTML = "Task"
el3.setAttribute("style", "color: red")
let el7 = document.createElement('h2')
el7.innerHTML = "Submission"
el7.setAttribute("style", "color: red")
document.body.appendChild(el3)

let el4 = document.createElement('p')
el4.innerHTML = "In this task you have to reproduce this HTML page as is using <b>only</b> JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:"
document.body.appendChild(el4)

let el5 = document.createElement('ul')
let el5_1 = document.createElement('li')
el5_1.innerHTML = "find elements in the DOM (<b>5 points</b>);"
el5_1.classList.add("even")
el5.appendChild(el5_1)

let el5_2 = document.createElement('li')
el5_2.innerHTML = "create/add/remove elements (<b>5 points</b>);"
el5_2.classList.add("odd")
el5.appendChild(el5_2)

let el5_3 = document.createElement('li')
el5_3.innerHTML = "change content of the elements (<b>5 points</b>);"
el5_3.classList.add("even")
el5.appendChild(el5_3)

let el5_4 = document.createElement('li')
el5_4.innerHTML = "change styles of the elements (<b>5 points</b>);"
el5_4.classList.add("odd")
el5.appendChild(el5_4)

let el5_5 = document.createElement('li')
el5_5.innerHTML = "change attributes of the elements (<b>5 points</b>);"
el5_5.classList.add("even")
el5.appendChild(el5_5)

let el5_6 = document.createElement('li')
el5_6.innerHTML = "change classes of the elements (<b>5 points</b>)."
el5_6.classList.add("odd")
el5.appendChild(el5_6)

document.body.appendChild(el5)

document.body.appendChild(el6)
document.body.appendChild(el7)

let el8 = document.createElement('p')
el8.innerHTML = "To submit your work, follow these instructions:"
document.body.appendChild(el8)

let el9 = document.createElement('ul')
let el9_1 = document.createElement('li')
el9_1.innerHTML = "Create a new repository on Github, named <b>lab7</b> (<b>1 point</b>)."
el9_1.classList.add("even")
el9.appendChild(el9_1)

let el9_2 = document.createElement('li')
el9_2.innerHTML = "Clone this repository to your local machine and work inside it."
el9_2.classList.add("odd")
el9.appendChild(el9_2)

let el9_3 = document.createElement('li')
el9_3.innerHTML = "Create a new HTML file, called <b>index.html</b>, which has only one h1 tag with \"Hello, World!\" message (<b>1 point</b>)."
el9_3.classList.add("even")
el9.appendChild(el9_3)

let el9_4 = document.createElement('li')
el9_4.innerHTML = "Create a new JavaScript file, called <b>main.js</b>, which must contain your program (assignment) described above (<b>1 point</b>)"
el9_4.classList.add("odd")
el9.appendChild(el9_4)

let el9_5 = document.createElement('li')
el9_5.innerHTML = "Link this <b>main.js</b> file to your <b>index.html</b> file (Note: place your script at the end of the <b>body</b> section)."
el9_5.classList.add("even")
el9.appendChild(el9_5)

let el9_6 = document.createElement('li')
el9_6.innerHTML = "Write a JavaScript program in <b>main.js</b> to make your <b>index.html</b> look identical to this HTML file (<b>5 points</b>)."
el9_6.classList.add("odd")
el9.appendChild(el9_6)

let el9_7 = document.createElement('li')
el9_7.innerHTML = "After you finish your work, submit it to the Github (<b>2 points</b>)."
el9_7.classList.add("even")
el9.appendChild(el9_7)

document.body.appendChild(el9)

let changeColorGreen = document.querySelectorAll('.even');
let changeColorPurple = document.querySelectorAll('.odd');
for (let i = 0; i < changeColorGreen.length; i++) {
    changeColorGreen[i].setAttribute("style", "color: green")
}
for (let i = 0; i < changeColorPurple.length; i++) {
    changeColorPurple[i].setAttribute("style", "color: purple")
}

document.body.appendChild(el10)