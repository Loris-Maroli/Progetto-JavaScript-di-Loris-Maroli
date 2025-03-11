let counter = 0;

function updateCounter() {

    document.getElementById('counter').textContent = counter;
}

function changeCounter(value) {
    counter += value;
    updateCounter();
}

updateCounter();
