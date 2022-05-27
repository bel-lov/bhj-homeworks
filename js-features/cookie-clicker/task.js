let counter = document.getElementById("clicker__counter");
let count = 0;
let image = document.getElementById("cookie"), even = true;

image.onclick = function(){
if (even) {
    image.width = 150;
    even = false;
    count++;
    counter.textContent = count;
} else {
    image.width=200;
    even = true;
    count++;
    counter.textContent = count;
}
}

