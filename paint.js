var Color = "Black";
var WidthLine = 4;
var cvs;
var Image = function(p) {

    let mouse;
    p.setup = function() {
        cvs = p.createCanvas(1001,550);
        p.background(255);
        cvs.parent('img');
    }
    p.draw = function() {
    }
    p.mouseDragged = function() {
            p.stroke(Color);
            p.strokeWeight(WidthLine);
            p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
    }
}
let img = new p5(Image);
var Control = function(p) {
    p.setup = function() {
        var cvs = p.createCanvas(1002, 100);
        p.background(51);
        cvs.parent('cnt');
        slider = p.createSlider(1, 70, 10);
        slider.parent('cnt');
        slider.position(230, 600);
        reset = p.createButton('Clear');
        reset.parent('cnt');
        reset.position(900, 590);
        reset.style('background-color', 7);
        reset.style('color', 'White');
        reset.style("padding: 5px 25px 5px 25px; cursor: pointer;");
        Save = p.createButton('Save as');
        Save.parent('cnt');
        Save.position(750, 590);
        Save.style('background-color', 7);
        Save.style('color', 'White');
        Save.style("padding: 5px 25px 5px 25px; cursor: pointer;");
    }
    p.draw = function() {
        p.background(51);
        p.fill("Green");
        p.rect(20, 20, 25, 25);
        p.fill("Red");
        p.rect(20, 60, 25, 25);
        p.fill("Blue");
        p.rect(50, 20, 25, 25);
        p.fill("Yellow");
        p.rect(50, 60, 25, 25);
        p.fill("Black");
        p.rect(80, 20, 25, 25);
        p.fill("White");
        p.rect(80, 60, 25, 25);
        p.fill("#FF69B4");
        p.rect(110, 20, 25, 25);
        p.fill("Purple");
        p.rect(110, 60, 25, 25);
        p.fill("Orange");
        p.rect(140, 20, 25, 25);
        p.fill("#32CD32");
        p.rect(140, 60, 25, 25);
        p.fill("#00BFFF");
        p.rect(170, 20, 25, 25);
        p.fill("#DC143C");
        p.rect(170, 60, 25, 25);
        p.fill("White");
        p.textSize(16);
        p.text(slider.value(), 300, 30, 40, 40);
        WidthLine = slider.value();
        reset.mousePressed(p.functie);
        Save.mousePressed(p.salvare);
    }
    p.functie = function() {
        img.background(255);
    }
    p.salvare = function() {
        img.saveCanvas(cvs, 'myCanvas', 'png');
    }
    p.mousePressed = function() {
        if(p.mouseX >= 20 && p.mouseX <= 45 && p.mouseY >= 20 && p.mouseY <= 45 && p.mouseButton === p.LEFT){
            Color = "Green";
        }
        if(p.mouseX >= 20 && p.mouseY <= 85 && p.mouseY >= 60 && p.mouseX <= 85 && p.mouseButton === p.LEFT){
            Color = "Red";
        }
        if(p.mouseX >= 50 && p.mouseX <= 75 && p.mouseY >= 20 && p.mouseY <= 45 && p.mouseButton === p.LEFT){
            Color = "Blue";
        }
        if(p.mouseX >= 50 && p.mouseX <= 75 && p.mouseY >= 60 && p.mouseY <= 85 && p.mouseButton === p.LEFT){
            Color = "Yellow";
        }
        if(p.mouseX >= 80 && p.mouseX <= 105 && p.mouseY >= 20 && p.mouseY <= 45 && p.mouseButton === p.LEFT){
            Color = "Black";
        }
        if(p.mouseX >= 80 && p.mouseX <= 105 && p.mouseY >= 60 && p.mouseY <= 85 && p.mouseButton === p.LEFT){
            Color = "White";
        }
        if(p.mouseX >= 110 && p.mouseX <= 135 && p.mouseY >= 20 && p.mouseY <= 45 && p.mouseButton === p.LEFT){
            Color = "#FF69B4";
        }
        if(p.mouseX >= 110 && p.mouseX <= 135 && p.mouseY >= 60 && p.mouseY <= 85 && p.mouseButton === p.LEFT){
            Color = "Purple";
        }
        if(p.mouseX >= 140 && p.mouseX <= 165 && p.mouseY >= 20 && p.mouseY <= 45 && p.mouseButton === p.LEFT){
            Color = "Orange";
        }
        if(p.mouseX >= 140 && p.mouseX <= 165 && p.mouseY >= 60 && p.mouseY <= 85 && p.mouseButton === p.LEFT){
            Color = "#32CD32";
        }
        if(p.mouseX >= 170 && p.mouseX <= 195 && p.mouseY >= 20 && p.mouseY <= 45 && p.mouseButton === p.LEFT){
            Color = "#00BFFF";
        }
        if(p.mouseX >= 170 && p.mouseX <= 195 && p.mouseY >= 60 && p.mouseY <= 85 && p.mouseButton === p.LEFT){
            Color = "#DC143C";
        }
    }
}

let cnt = new p5(Control);
