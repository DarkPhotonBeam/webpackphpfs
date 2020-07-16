import "./style.scss";
import $ from 'jquery';

if (process.env.NODE_ENV !== 'production') {
    console.log("Development Mode active.");
}

function fetchData() {
    $.post('/api/test.php', {test: 4}, (res) => {
        console.log(res);
    });

}

function component() {
    const element = document.createElement('div');
    element.classList.add("blank-message");



    // Lodash, now from script
    element.innerHTML = "This is a blank page!";

    return element;
}

fetchData();
document.body.appendChild(component());