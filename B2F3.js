class B2F3{
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
        p22.html("Control blood pressure")
        p22.position(100,250);

        var p23 = createElement("ol");
        p23.html("Maintain a healthy lifestyle")
        p23.position(100,300);

        var p24 = createElement("ol");
        p24.html("Exercise regularly")
        p24.position(100,350);

        var p25 = createElement("ol");
        p25.html("Limit alcohol")
        p25.position(100,400);

        var p26 = createElement("ol");
        p26.html("Eat low fat and high fiber food. Add plenty of green leafy vegetables, beans, tomatoes. Eat fruits, nuts and seeds, pomegranate. Also, intake milk, yoghurt, cheese and their alternatives – mostly reduced fat. Drink plenty of water.")
        p26.position(100,450);


    }

    hide(){}
}