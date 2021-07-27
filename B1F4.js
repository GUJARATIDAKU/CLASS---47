class B1F4{
    constructor(){}

    display(){
        var title = createElement("h2");
        title.html("FAQs : ")
        title.style("color","red")
        title.position(100,150);

        var title = createElement("h4");
        title.html("What Should I Do If I Have Risk Factors for Coronary Artery Disease?")
        title.position(100,180);

        var p21 = createElement("ol");
        p21.html("You can do several things to cut your chances of heart disease. If your arteries are already clogged, you can slow the damage with a healthier diet, exercise, quitting smoking, and reducing stress. With lifestyle changes, you can stop or even reverse the narrowing of arteries. While this is important for those with risk factors for the disease, it is even more important if you have had a heart attack or procedure to restore blood flow to your heart or other areas of your body.")
        p21.position(100,240);

        var title = createElement("h4");
        title.html("What's the Link Between Smoking and Heart Disease?")
        title.position(100,300);
        
        var p22 = createElement("ol");
        p22.html("About 30% of deaths from heart disease in the U.S. are directly related to cigarette smoking. Smoking is a major cause of atherosclerosis.Among other things, the nicotine in smoke causes:Less oxygen to the heart.Higher blood pressure and heart rate.More blood clotting.Damage to cells that line coronary arteries and other blood vessels")
        p22.position(100,360);

        var title = createElement("h4");
        title.html("What Dietary Changes Can I Make to Reduce My Heart Disease Risk?")
        title.position(100,420);

        var p24 = createElement("ol");
        p24.html("Eating right is a powerful way to reduce or even eliminate some heart disease risk factors. A heart-healthy diet can help cut total and LDL  cholesterol, lower blood pressure , lower blood sugar, and help you shed pounds.Try these tips: Eat more vegetables, fruits, whole grains, and legumes.Cut trans fats from your diet. Swap saturated fats for unsaturated ones.Eat lean sources of protein, such as chicken, fish, and soy. Avoid red meat, as this tends to be high in fat and cholesterol.Eat complex carbohydrates such as whole-grain bread, rice, and pasta and limit simple carbohydrates such as regular soda, sugar, and sweets.Cut down on salt.Exercise regularly.")
        p24.position(100,460);

        var title = createElement("h4");
        title.html("How Common Is Heart Disease Among Women?")
        title.position(100,560);

        var p26 = createElement("ol");
        p26.html("Heart disease is the leading cause of death in women over 40 years old, especially after menopause. Once a woman reaches the age of 50 (about the age of natural menopause), the risk for heart disease increases dramatically. ")
        p26.position(100,600)  
        
        
        var link = createElement("a").attribute("href","https://www.webmd.com/heart-disease/heart-disease-faq");
        link.html("Click Here To Know More")
        link.position(displayWidth/2,displayHeight-100);
    }
}