class B4F1{
    constructor(){}

    display(){
        var title = createElement("h2");
        title.html("Symptoms : ")
        title.style("color","red")
        title.position(100,150);

        var p1 = createElement("ol");
        p1.html("Fatigue ")
        p1.position(100,200);

        var p2 = createElement("ol");
        p2.html("Coughing up blood")
        p2.position(100,250);

        var p3 = createElement("ol");
        p3.html("Fever")
        p3.position(100,300);

        var p4 = createElement("ol");
        p4.html("Chills")
        p4.position(100,350);

        var p5 = createElement("ol");
        p5.html("Night Sweat")
        p5.position(100,400);

        var p6 = createElement("ol");
        p6.html("Loss of Appetite")
        p6.position(100,450);

        var p7 = createElement("ol");
        p7.html("Unintentional Weight Loss")
        p7.position(100,500);
  

        var image = createElement("img").attribute("src","https://via.placeholder.com/300");
        image.style("width","500px")
        image.position(displayWidth/2 + 100 , displayHeight/2 - 300);
    }

    hide(){

    }

}