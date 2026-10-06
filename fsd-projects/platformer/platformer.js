$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////
    // TODO 1 - Enable the Grid
    // toggleGrid();


    // TODO 2 - Create Platforms
    // createPlatform (x, y, width, height)
//vertical walls
createPlatform(200, 150, 10, 700, "purple")
createPlatform(1200, 150, 10, 700, "purple")
//vertical wall roof
createPlatform(200, 150, 200, 10, "red")
createPlatform(1000, 150, 200, 10, "lime")
//platforms
createPlatform(550, 640, 300, 10, "purple")
createPlatform(550, 520, 300, 10, "purple")

createPlatform(550, 220, 300, 10, "purple")
createPlatform(550, 350, 300, 10, "purple")

createPlatform(1000, 520, 200, 10, "purple")
createPlatform(1000, 400, 200, 10, "purple")

createPlatform(200, 520, 200, 10, "purple")
createPlatform(200, 400, 200, 10, "purple")

    // TODO 3 - Create Collectables
//realtokens
createCollectable("database", 1075,350)
createCollectable("database", 275,350)

createCollectable("database", 685,135)

createCollectable("database", 800,675)
createCollectable("database", 600,675)

createCollectable("database", 100,0)
createCollectable("database", 100,25)
createCollectable("database", 100,50)
createCollectable("database", 100,75)
createCollectable("database", 100,100)
createCollectable("database", 100,125)
createCollectable("database", 100,150)
createCollectable("database", 100,175)
createCollectable("database", 100,200)
createCollectable("database", 100,225)
createCollectable("database", 100,250)
createCollectable("database", 100,275)
createCollectable("database", 100,300)
createCollectable("database", 100,325)
createCollectable("database", 100,350)
createCollectable("database", 100,375)
createCollectable("database", 100,400)
createCollectable("database", 100,425)
createCollectable("database", 100,450)
createCollectable("database", 100,475)
createCollectable("database", 100,500)
createCollectable("database", 100,525)
createCollectable("database", 100,550)
createCollectable("database", 100,575)
createCollectable("database", 100,600)
createCollectable("database", 100,625)
createCollectable("database", 100,650)
createCollectable("database", 100,675)
createCollectable("database", 100,600)
createCollectable("database", 100,625)
createCollectable("database", 100,700)
//DEATHTOKENS
createCollectable("database", 1300,0)
createCollectable("database", 1300,25)
createCollectable("database", 1300,50)
createCollectable("database", 1300,75)
createCollectable("database", 1300,100)
createCollectable("database", 1300,125)
createCollectable("database", 1300,150)
createCollectable("database", 1300,175)
createCollectable("database", 1300,200)
createCollectable("database", 1300,225)
createCollectable("database", 1300,250)
createCollectable("database", 1300,275)
createCollectable("database", 1300,300)
createCollectable("database", 1300,325)
createCollectable("database", 1300,350)
createCollectable("database", 1300,375)
createCollectable("database", 1300,400)
createCollectable("database", 1300,425)
createCollectable("database", 1300,450)
createCollectable("database", 1300,475)
createCollectable("database", 1300,500)
createCollectable("database", 1300,525)
createCollectable("database", 1300,550)
createCollectable("database", 1300,575)
createCollectable("database", 1300,600)
createCollectable("database", 1300,625)
createCollectable("database", 1300,650)
createCollectable("database", 1300,675)
createCollectable("database", 1300,600)
createCollectable("database", 1300,625)
createCollectable("database", 1300,700)





    
    // TODO 4 - Create Cannons
createCannon("bottom", 1260,0)
createCannon("bottom", 60,999999999999)
createCannon("top", 535,1000)
createCannon("top", 990,1000)

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
