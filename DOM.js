var main = document.querySelector ("main");

var ladder = "This is my stepladder. I never knew my real ladder.";
var watch = "A friend of mine bought me a watch that has stopped working, but I haven't told them yet. It's never the right time.";
var teacher = "My teacher pointed at me with her ruler and said: At the end of this ruler is an idiot. I got a detention after asking which end.";

const p = document.createElement('p');
p.textContent = "That's all folks!"

const template =`
    <section>
        <h2>My Jokes</h2>
        <ul>
        <li>${ladder}</li>
        <li>${watch}</li>
        <li>${teacher}</li>
        </ul>
        <p></p>
    </section>
`
main.innerHTML = template
main.appendChild(p)