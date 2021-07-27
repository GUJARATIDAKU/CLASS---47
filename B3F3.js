class B3F3{
    constructor(){}

    display(){
        var title = createElement("h2");
        title.html("Safety Measures : ")
        title.style("color","red")
        title.position(100,150);

        var p21 = createElement("ol");
        p21.html("Quit smoking")
        p21.position(100,200);

        var p22 = createElement("ol");
        p22.html("Exercise regularly ")
        p22.position(100,250);

        var p23 = createElement("ol");
        p23.html("Stay active")
        p23.position(100,300);

        var p24 = createElement("ol");
        p24.html("Wear a surgical mask if required")
        p24.position(100,350);

        var p25 = createElement("ol");
        p25.html("Avoid going to polluted areas")
        p25.position(100,400);

        var p26 = createElement("ol");
        p26.html("An increase in diet protein, fruits and vegetables (red & yellow bell peppers, tomatoes, beetroot, carrot, papaya, and pomegranates provides multiple vitamins and minerals and increases overall immunity). Also intake food rich in vitamin C, like broccoli, orange, Kiwi, sweet lime, green leafy vegetables, etc. ")
        p26.position(100,450);


    }

    hide(){}
}