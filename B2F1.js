class B2F1{
    constructor(){}

    display(){
        var title = createElement("h2");
        title.html("Symptoms : ")
        title.style("color","red")
        title.position(100,150);

        var p1 = createElement("ol");
        p1.html("Sudden weakness or numbness in the face, arm, or leg ")
        p1.position(100,200);

        var p2 = createElement("ol");
        p2.html("Trouble seeing from one or both the eyes")
        p2.position(100,250);

        var p3 = createElement("ol");
        p3.html("Severe headache with no known cause")
        p3.position(100,300);

        var p4 = createElement("ol");
        p4.html("Trouble walking")
        p4.position(100,350);

        var p5 = createElement("ol");
        p5.html("Sudden confusion, difficulty in speaking or understanding")
        p5.position(100,400);

  

        var image = createElement("img").attribute("src","Images/stroke_img.jpg");
        image.style("width","500px")
        image.position(displayWidth/2 + 100 , displayHeight/2 - 300);
    }

    hide(){

    }

}