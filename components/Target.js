// Registering component in Target.js

AFRAME.registerComponent("target-ring",{
  init: function(){
    for(var i = 1; i <= 20; i++){
      var id = `ring${i}`
      var posx = (Math.random()*3000 + (-1000))
      var posy = (Math.random()*2 + (-1));
      var posz = (Math.random()*3000 + (-1000))
      var position = {x: posx, y: posy, z: posz}
      this.createRings(id, position)
    }
  },

  createRings: function(id, position){
    var terrainE1 = document.querySelector("#terrain");
    var ringE1 = document.createElement("a-entity");
    ringE1.setAttribute("id", id);
    ringE1.setAttribute("position", position);
    ringE1.setAttribute("material", "color", "#FF9100");
    ringE1.setAttribute("geometry", {primitive: "torus", radius: 8});
    terrainE1.appendChild(ringE1);
  }
})