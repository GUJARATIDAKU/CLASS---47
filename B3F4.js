class B3F4{
    constructor(){}

    display(){
        var title = createElement("h2");
        title.html("FAQs : ")
        title.style("color","red")
        title.position(100,150);

        var title = createElement("h4");
        title.html("What Is Asthma ? ")
        title.position(100,180);

        var p21 = createElement("ol");
        p21.html("Asthma is a chronic condition involving the airways. All asthmatics experience variable, but widespread narrowing of the airways or bronchial tubes. The narrowing results from swelling of the airway lining, increased mucus production, tightening of the muscles around the airways and accumulation of inflammatory cells in the airway. This narrowing causes cough, wheeze and shortness of breath.")
        p21.position(100,240);

        var title = createElement("h4");
        title.html("How Do I Know If My Child’s Asthma Is Controlled ?")
        title.position(100,300);
        
        var p22 = createElement("ol");
        p22.html("Minimal or no asthma symptoms (cough, wheezing or shortness of breath) on a day to day basis.Minimal or no acute asthma episodes or attacks (including ER visits or hospitalizations).Not requiring oral steroids (prednisone) more than once per year.No limitations on activities or school attendance.No more than twice a week use of quick acting rescue medicines such as albuterol.Normal lung function when well")
        p22.position(100,360);

        var title = createElement("h4");
        title.html("What Makes Asthma Worse And What Triggers Asthma ?")
        title.position(100,420);

        var p24 = createElement("ol");
        p24.html("Certain things – called triggers – can cause asthma attacks or make asthma worse. Staying away from or getting rid of triggers can help control asthma symptoms")
        p24.position(100,460);

        var title = createElement("h4");
        title.html("What Conditions Are Associated With Asthma ?")
        title.position(100,560);

        var p26 = createElement("ol");
        p26.html("Children who have allergies to elements of the environment such as pollen, animals, mold, dust and food are more likely to have asthma. Asthma is more likely to develop in children who were born prematurely.")
        p26.position(100,600)  
        
        
        var link = createElement("a").attribute("href","https://www.cincinnatichildrens.org/service/a/asthma/faq");
        link.html("Click Here To Know More")
        link.position(displayWidth/2,displayHeight-100);
    }
}