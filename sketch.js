var form,form1;
var gameState = 0;

function preload() {


}

function setup(){
    createCanvas(1000,800);
    
form = new Form();
form1 = new Form1();
form2 = new Form2();
form3 = new Form3();
form4 = new Form4();
form5 = new Form5();
form6 = new Form6();
form7 = new Form7();
form8 = new Form8();
form9 = new Form9();
form10 = new Form10();

b1f1 = new B1F1();
b1f2 = new B1F2();
b1f3 = new B1F3();
b1f4 = new B1F4();

b2f1 = new B2F1();
b2f2 = new B2F2();
b2f3 = new B2F3();
b2f4 = new B2F4();

b3f1 = new B3F1();
b3f2 = new B3F2();
b3f3 = new B3F3();
b3f4 = new B3F4();

 b4f1 = new B4F1();
 b4f2 = new B4F2();
 b4f3 = new B4F3();
 b4f4 = new B4F4();

}

function draw() {

    background(255);
   
    if(gameState === 0){
        form.show();
        form.display();
        form1.hide();
      form2.hide();
        form3.hide();
        form4.hide();
        form5.hide();
        form6.hide();
        form7.hide();
        form8.hide();
        form9.hide();
        form10.hide();  
    }
   if(gameState === 1){
       form.hide();
       form1.show();
       form1.display();
       form2.hide();
       form3.hide();
       form4.hide();
       form5.hide();
       form6.hide();
       form7.hide();
       form8.hide();
       form9.hide();
       form10.hide();
   }

   if(gameState === 2){
    form.hide();
    form2.show();
    form2.display();
    
    form1.hide();
    form3.hide();
    form4.hide();
    form5.hide();
    form6.hide();
    form7.hide();
    form8.hide();
    form9.hide();
    form10.hide();
}

if(gameState === 3){
    form.hide();
    form3.show();
    form3.display();
    form1.hide();
    form2.hide();
    form4.hide();
    form5.hide();
    form6.hide();
    form7.hide();
    form8.hide();
    form9.hide();
    form10.hide();
}

if(gameState === 4){
    form.hide();
    form4.show();
    form4.display();
    form1.hide();
    form2.hide();
    form3.hide();
    form5.hide();
    form6.hide();
    form7.hide();
    form8.hide();
    form9.hide();
    form10.hide();
}

if(gameState === 5){
    form.hide();
    form5.show();
    form5.display();
    form1.hide();
    form2.hide();
    form3.hide();
    form4.hide();
    form6.hide();
    form7.hide();
    form8.hide();
    form9.hide();
    form10.hide();
}

if(gameState === 6){
    form.hide();
    form6.show();
    form6.display();

    form1.hide();
    form2.hide();
    form3.hide();
    form4.hide();
    form5.hide();
    form7.hide();
    form8.hide();
    form9.hide();
    form10.hide();
}

if(gameState === 7){
    form.hide();
    form7.show();
    form7.display();

    form1.hide();
    form2.hide();
    form3.hide();
    form4.hide();
    form5.hide();
    form6.hide();
    form8.hide();
    form9.hide();
    form10.hide();
}

if(gameState === 8){
    form.hide();
    form8.show();
    form8.display();

    form1.hide();
    form2.hide();
    form3.hide();
    form4.hide();
    form5.hide();
    form6.hide();
    form7.hide();
    form9.hide();
    form10.hide();
}

if(gameState === 9){
    form.hide();
    form9.show();
    form9.display();

    form1.hide();
    form2.hide();
    form3.hide();
    form4.hide();
    form5.hide();
    form6.hide();
    form7.hide();
    form8.hide();
    form10.hide();
}

if(gameState === 10){
    form.hide();
    form10.show();
    form10.display();

    form1.hide();
    form2.hide();
    form3.hide();
    form4.hide();
    form5.hide();
    form6.hide();
    form7.hide();
    form8.hide();
    form9.hide();
}


if(gameState === 11){
    form.hide();
    form1.hide();
    b1f1.display();

  
    form2.hide();
    form3.hide();
    form4.hide();
    form5.hide();
    form6.hide();
    form7.hide();
    form8.hide();
    form9.hide();
    form10.hide();  
}

if(gameState === 12){
    form.hide();
    form1.hide();
    b1f1.hide();
    b1f2.display();
  
    form2.hide();
    form3.hide();
    form4.hide();
    form5.hide();
    form6.hide();
    form7.hide();
    form8.hide();
    form9.hide();
    form10.hide();  
}

if(gameState === 13){
    form.hide();
    form1.hide();
   
    b1f2.hide();
    b1f3.display();
  
    form2.hide();
    form3.hide();
    form4.hide();
    form5.hide();
    form6.hide();
    form7.hide();
    form8.hide();
    form9.hide();
    form10.hide();  
}

if(gameState === 14){
    form.hide();
    form1.hide();
   
    b1f3.hide();
    b1f4.display();
  
    form2.hide();
    form3.hide();
    form4.hide();
    form5.hide();
    form6.hide();
    form7.hide();
    form8.hide();
    form9.hide();
    form10.hide();  
}

if(gameState === 21){
    form.hide();
    form1.hide();
   
    
    b2f1.display();
  
    form2.hide();
    form3.hide();
    form4.hide();
    form5.hide();
    form6.hide();
    form7.hide();
    form8.hide();
    form9.hide();
    form10.hide();  
}

if(gameState === 22){
    form.hide();
    form1.hide();
   
    b2f1.hide();
    b2f2.display();
  
    form2.hide();
    form3.hide();
    form4.hide();
    form5.hide();
    form6.hide();
    form7.hide();
    form8.hide();
    form9.hide();
    form10.hide();  
}


if(gameState === 23){
    form.hide();
    form1.hide();
   
    b2f2.hide();
    b2f3.display();
  
    form2.hide();
    form3.hide();
    form4.hide();
    form5.hide();
    form6.hide();
    form7.hide();
    form8.hide();
    form9.hide();
    form10.hide();  
}

if(gameState === 24){
    form.hide();
    form1.hide();
   
    b2f3.hide();
    b2f4.display();
  
    form2.hide();
    form3.hide();
    form4.hide();
    form5.hide();
    form6.hide();
    form7.hide();
    form8.hide();
    form9.hide();
    form10.hide();  
}

if(gameState === 31){
    form.hide();
    form1.hide();
   
    
    b3f1.display();
  
    form2.hide();
    form3.hide();
    form4.hide();
    form5.hide();
    form6.hide();
    form7.hide();
    form8.hide();
    form9.hide();
    form10.hide();  
}

if(gameState === 32){
    form.hide();
    form1.hide();
   
    b3f1.hide();
    b3f2.display();
  
    form2.hide();
    form3.hide();
    form4.hide();
    form5.hide();
    form6.hide();
    form7.hide();
    form8.hide();
    form9.hide();
    form10.hide();  
}

if(gameState === 33){
    form.hide();
    form1.hide();
   
    b3f2.hide();
    b3f3.display();
  
    form2.hide();
    form3.hide();
    form4.hide();
    form5.hide();
    form6.hide();
    form7.hide();
    form8.hide();
    form9.hide();
    form10.hide();  
}

if(gameState === 34){
    form.hide();
    form1.hide();
   
    b3f3.hide();
    b3f4.display();
  
    form2.hide();
    form3.hide();
    form4.hide();
    form5.hide();
    form6.hide();
    form7.hide();
    form8.hide();
    form9.hide();
    form10.hide();  
}

if(gameState === 41){
 form.hide();
     form1.hide();
   
   
    b4f1.display();
  
     form2.hide();
     form3.hide();
     form4.hide();
     form5.hide();
     form6.hide();
     form7.hide();
    form8.hide();
     form9.hide();
     form10.hide();  
 }

 if(gameState === 42){
     form.hide();
     form1.hide();
   
     b4f1.hide();
     b4f2.display();
  
     form2.hide();
     form3.hide();
     form4.hide();
     form5.hide();
     form6.hide();
     form7.hide();
     form8.hide();
     form9.hide();
     form10.hide();  
 }

 if(gameState === 43){
     form.hide();
     form1.hide();
   
     b4f2.hide();
     b4f3.display();
  
     form2.hide();
     form3.hide();
     form4.hide();
     form5.hide();
     form6.hide();
     form7.hide();
     form8.hide();
     form9.hide();
     form10.hide();  
 }

 if(gameState === 44){
     form.hide();
     form1.hide();
   
     b4f3.hide();
     b4f4.display();
 
     form2.hide();
     form3.hide();
     form4.hide();
     form5.hide();
     form6.hide();
     form7.hide();
     form8.hide();
     form9.hide();
     form10.hide();  
}
     }





