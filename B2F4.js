class B2F4{
    constructor(){}

    display(){
        var title = createElement("h2");
        title.html("FAQs : ")
        title.style("color","red")
        title.position(100,150);

        var title = createElement("h4");
        title.html("What should I do if I think someone is having a stroke?")
        title.position(100,180);

        var p21 = createElement("ol");
        p21.html("A stroke should be treated as a medical emergency, similar to a heart attack.It is very important to remain calm but to react quickly if someone you're with seems to be having a stroke. The longer you wait, the more likely that further damage to the brain will occur. You should immediately call 9-1-1 or an emergency service. Even if the person appears to 'recover' do not hesitate to call for help. Brain damage can continue to occur for several hours after an attack, so the earlier the stroke victim receives treatment, the better.")
        p21.position(100,240);

        var title = createElement("h4");
        title.html("What causes a stroke?")
        title.position(100,300);
        
        var p22 = createElement("ol");
        p22.html("Strokes sometimes are called brain attacks because they often occur suddenly and result in loss of blood flow to the brain or bleeding into the brain that causes cells to die. Because injury that cell death causes to the brain progresses over time, it is vital to seek help immediately if someone you know is having a stroke.")
        p22.position(100,360);

        var title = createElement("h4");
        title.html("Are there different types of stroke?")
        title.position(100,420);

        var p24 = createElement("ol");
        p24.html("There are two major kinds of stroke. An ischemic stroke is one that is caused by an artery or blood vessel that is blocked. Approximately 80% of strokes are ischemic. Making up the other 20% are haemorrhagic strokes, which occur when a blood vessel or artery bursts and leaks into the brain.")
        p24.position(100,460);

        var title = createElement("h4");
        title.html("Am I at risk for a stroke?")
        title.position(100,560);

        var p26 = createElement("ol");
        p26.html("While hereditary factors play a role in the risk of stroke, there are many things you can do to help reduce your risk. Smoking, obesity, diabetes, and high blood pressure all can greatly increase your risk for a stroke. Risk for stroke provides one more compelling reason to quit smoking. In addition, diet and exercise can help control cholesterol, which is another risk factor for stroke. And, proper medication management can help control diabetes, and high blood pressure.")
        p26.position(100,600)  
        
        
        var link = createElement("a").attribute("href","https://www.ninds.nih.gov/Disorders/Patient-Caregiver-Education/Hope-Through-Research/Stroke-Hope-Through-Research/Questions-Answers-Stroke");
        link.html("Click here to know more")
        link.position(displayWidth/2,displayHeight-100);
    }
}