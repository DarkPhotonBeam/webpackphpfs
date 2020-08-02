import "./style.scss";
import "./reset.scss";
import "./script.js";
import $ from 'jquery';

if (process.env.NODE_ENV !== 'production') {
    console.log("Development Mode active.");
}

function fetchData() {
    console.log('Fetching data...');
    $.post('/api/test.php', {test: 4}, (res) => {
        console.log("Post request response:");
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


console.log('INIT');
fetchData();
document.body.appendChild(component());