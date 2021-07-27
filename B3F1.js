class B3F1{
    constructor(){}

    display(){
        var title = createElement("h2");
        title.html("Symptoms : ")
        title.style("color","red")
        title.position(100,150);

        var p1 = createElement("ol");
        p1.html("Nasal congestion")
        p1.position(100,200);

        var p2 = createElement("ol");
        p2.html("Runny nose")
        p2.position(100,250);

        var p3 = createElement("ol");
        p3.html("Sneezing.")
        p3.position(100,300);

        var p4 = createElement("ol");
        p4.html("Fever")
        p4.position(100,350);

        var p5 = createElement("ol");
        p5.html("Cough")
        p5.position(100,400);

        var p6 = createElement("ol");
        p6.html("Weakness")
        p6.position(100,450);

        var p7 = createElement("ol");
        p7.html("Shortness of breath lasting for more than a week")
        p7.position(100,500);
        
        var p8 = createElement("ol");
        p8.html("Scratchy or sore throat")
        p8.position(100,550);

    }

    hide(){

    }

}