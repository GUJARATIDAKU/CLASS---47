class B1F2{
    constructor(){}

    display(){
        var title = createElement("h2");
        title.html("Causes : ")
        title.style("color","red")
        title.position(100,150);

        var p11 = createElement("ol");
        p11.html("Tobacco intake")
        p11.position(100,200);

        var p12 = createElement("ol");
        p12.html("Lack of physical activity")
        p12.position(100,250);

        var p13 = createElement("ol");
        p13.html("Poor diet")
        p13.position(100,300);

        var p14 = createElement("ol");
        p14.html("Hereditary")
        p14.position(100,350);

        var p15 = createElement("ol");
        p15.html("High BP or Cholesterol")
        p15.position(100,400);

        var p16 = createElement("ol");
        p16.html("Overweight")
        p16.position(100,450);

        var p17 = createElement("ol");
        p17.html("Family history of CVD")
        p17.position(100,500);


    }
hide(){}
   
}