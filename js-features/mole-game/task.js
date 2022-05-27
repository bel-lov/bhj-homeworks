let counter_dead = document.getElementById("dead");
let counter_lost = document.getElementById("lost");
let count_lost = 0;
let count_dead = 0;

let getHole = index => document.getElementById(`hole${index}`);
function molesClick(counter_dead, counter_lost) {
    if (counter_dead === 10) {
        alert("Победа!");
        location.reload();
    } else if(counter_lost === 5) {
        alert("Вы проиграли!");
        location.reload();
    };
};
const x = document.querySelectorAll('.hole');
for (let i = 1; i <= x.length; i++) {
    getHole(i).onclick = function () {
        if (this.className.includes('hole_has-mole')) {
            count_dead++;
            counter_dead.textContent = count_dead;
        } else {
            count_lost++;
            counter_lost.textContent = count_lost;
        };
        molesClick(count_dead, count_lost);
    };
};