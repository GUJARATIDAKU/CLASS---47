class B4F4{
    constructor(){}

    display(){
        var title = createElement("h2");
        title.html("FAQs : ")
        title.style("color","red")
        title.position(100,150);

        var title = createElement("h4");
        title.html("How long has TB been around?")
        title.position(100,180);

        var p21 = createElement("ol");
        p21.html("TB has been around for a long time. It has been found in Egyptian mummies, meaning it is at least 5,400 years old.TB has been called consumption.In the early 1800s, TB may have caused about one-third of all deaths.Years ago, people who had TB went to a special hospital, called a sanatorium, where they received treatment. Today, most people get their TB pills at home or some other place, like school or work.")
        p21.position(100,240);

        var title = createElement("h4");
        title.html("How many people who are infected with TB will develop active TB?")
        title.position(100,300);
        
        var p22 = createElement("ol");
        p22.html("Without medicine, about 10% of people infected with TB will develop TB disease at some point in their life.Some people are more likely than others to develop TB disease once they have TB infection. This includes people with HIV infection, people who were recently exposed to someone with TB disease and people with certain medical conditions.")
        p22.position(100,360);

        var title = createElement("h4");
        title.html("How is TB spread?")
        title.position(100,420);

        var p24 = createElement("ol");
        p24.html("TB is a germ that is spread through the air by someone who has TB disease. You cannot get TB by eating or drinking after someone.TB spreads when the sick person with TB disease sneezes, coughs, sings or talks.")
        p24.position(100,460);

        var title = createElement("h4");
        title.html("How will a doctor know if someone has TB disease?")
        title.position(100,560);

        var p26 = createElement("ol");
        p26.html("The doctor will look at all these tests to see if you have TB.If you do, the doctor will prescribe the medications you need to get well.The TB nurse will give you your TB medications, as ordered by the doctor.")
        p26.position(100,600)  
        
        
        var link = createElement("a").attribute("href","https://scdhec.gov/health/diseases-conditions/tuberculosis/tuberculosis-faqs");
        link.html("Click here to know more")
        link.position(displayWidth/2,displayHeight-100);
    }
}