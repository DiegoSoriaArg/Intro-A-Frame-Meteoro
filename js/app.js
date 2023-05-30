window.addEventListener("load", initScene);

const meteoros = [
    { x: 0, y: 0, z: -30 },
    { x: 0, y: 0, z: -30 },
    { x: 30, y: 0, z: 0 },
    { x: -30, y: 0, z: 0 },
    { x: 20, y: 0, z: 20 },
    { x: 20, y: 0, z: -20 },
    { x: -20, y: 0, z: -20 },
    { x: -20, y: 0, z: 20 },
];

let meteoro, score = 0;

function initScene(){

    let orbits = document.querySelectorAll(".orbit");

    orbits.forEach(orbit => {
        meteoros.forEach(pos => {
            meteoro = document.createElement("a-entity");
            meteoro.setAttribute("geometry", {primitive: "sphere", radius: Math.random() * 3 + 0.5});
            meteoro.setAttribute("material", {shader: "flat", src: "#meteoro"});
            meteoro.object3D.position.set(pos.x, pos.y, pos.z);
            meteoro.setAttribute("shootable", "");
            meteoro.setAttribute("class", "meteoro");

            orbit.appendChild(meteoro);
        });
    });

}

AFRAME.registerComponent('shootable', {

    init: function () {
        this.el.addEventListener("click", () => {
            this.el.parentNode.removeChild(this.el);
            document.querySelector("[text]").setAttribute("value", `${score++} meteoritos destruidos`);
        });
    }

});
