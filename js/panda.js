var headers = document.getElementsByTagName("h2");

for (var i in headers) {
    headers[i].onmouseover = function () {
        this.style.color = 'lightblue';
    }
}

document.getElementById('bagpack').style.backgroundColor = 'tomato';
document.getElementById('bagpack').style.paddingBottom = '20px';
document.getElementById('bagpack').style.borderRadius = '5px';

const cards = document.getElementsByClassName('card');
for (const card of cards) {
    card.style.borderRadius = '15px';
}

function clickHandler() {
    console.log('Bye this Product');
}
const buttons = document.getElementsByClassName('btn');
for (btn of buttons) {
    btn.addEventListener('click', function (event) {
        event.target.remove(event);
    })
}
document.getElementById('subcriptionEmail').addEventListener('keyup', function (event) {
    const text = event.target.value;

    const match = document.getElementById('btn_submit');
    if (text === 'email') {
        match.removeAttribute('disabled');
        match.style.backgroundColor = 'tomato';
    }
    else {
        match.setAttribute('disabled', true);
        match.style.backgroundColor = 'gray';
    }
})

document.getElementById('subcription_area').addEventListener('dblclick', function () {
    document.getElementById('subcription_area').style.backgroundColor = 'black';
    document.getElementById('subcription_area').style.color = 'white';
})