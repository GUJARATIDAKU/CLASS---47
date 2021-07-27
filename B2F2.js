class B2F2{
    constructor(){}

    display(){
        var title = createElement("h2");
        title.html("Causes : ")
        title.style("color","red")
        title.position(100,150);

        var p11 = createElement("ol");
        p11.html("People with high BP, high cholesterol")
        p11.position(100,200);

        var p12 = createElement("ol");
        p12.html("Diabetes are at higher risk")
        p12.position(100,250);

        var p13 = createElement("ol");
        p13.html("Smoking")
        p13.position(100,300);

        var p14 = createElement("ol");
        p14.html("Haemorrhage in the brain")
        p14.position(100,350);

        var p15 = createElement("ol");
        p15.html("Heart disease")
        p15.position(100,400);

        var p16 = createElement("ol");
        p16.html("Medications")
        p16.position(100,450);

        var p17 = createElement("ol");
        p17.html("Genetic disorder")
        p17.position(100,500);


    }
hide(){}
   
}