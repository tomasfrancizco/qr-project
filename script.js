const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Top Left corner
ctx.fillRect(0, 0, 70, 70);
ctx.clearRect(10, 10, 50, 50);
ctx.fillRect(20, 20, 30, 30);

// Bottom Left corner
ctx.fillRect(0, 180, 70, 70);
ctx.clearRect(10, 190, 50, 50);
ctx.fillRect(20, 200, 30, 30);

// Top Right corner
ctx.fillRect(180, 0, 70, 70);
ctx.clearRect(190, 10, 50, 50);
ctx.fillRect(200, 20, 30, 30);

// Bottom Right corner
// ctx.fillRect(180, 180, 70, 70)
// ctx.clearRect(190, 190, 50, 50)
// ctx.fillRect(200, 200, 30, 30,)

// 1
ctx.fillRect(90, 0, 10, 10);
ctx.fillRect(120, 0, 10, 10);
ctx.fillRect(140, 0, 30, 10);

// 2
ctx.fillRect(80, 10, 20, 10);
ctx.fillRect(130, 10, 10, 10);
ctx.fillRect(150, 10, 10, 10);

// 3
ctx.fillRect(90, 20, 10, 10);
ctx.fillRect(110, 20, 30, 10);
ctx.fillRect(130, 20, 10, 10);
ctx.fillRect(160, 20, 10, 10);

// 4
ctx.fillRect(80, 30, 20, 10);
ctx.fillRect(130, 30, 30, 10);

// 5
ctx.fillRect(120, 40, 10, 10);
ctx.fillRect(140, 40, 10, 10);

// 6
ctx.fillRect(80, 50, 10, 10);
ctx.fillRect(100, 50, 10, 10);
ctx.fillRect(140, 50, 20, 10);

// 7
ctx.fillRect(80, 60, 10, 10);
ctx.fillRect(100, 60, 10, 10);
ctx.fillRect(120, 60, 10, 10);
ctx.fillRect(140, 60, 10, 10);
ctx.fillRect(160, 60, 10, 10);

// 8
ctx.fillRect(140, 70, 10, 10)
ctx.fillRect(160, 70, 10, 10)

// 9
ctx.fillRect(0, 80, 50, 10);
ctx.fillRect(60, 80, 50, 10);
ctx.fillRect(120, 80, 20, 10);
ctx.fillRect(150, 80, 10, 10);
ctx.fillRect(170, 80, 10, 10);
ctx.fillRect(190, 80, 10, 10);
ctx.fillRect(210, 80, 10, 10);
ctx.fillRect(230, 80, 10, 10);