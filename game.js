class Game{
    constructor(){
        Button1 = createImg("Start Image 1.jpg")

    }
    play(){
        Button1.position(width/2+200,height/2-100) 
        Button1.mouseClicked(this.start)
    }
    start(){
        text("Hello",300,300)
        bg.changeAnimation("Start")
        bg.scale = 2.2
        Button1.hide()
       Bt1 = createButton("1")
        Bt1.position(300,300)
        Bt1.size(100,100)
        Bt2 = createButton("2")
        Bt2.position(700,300)
        Bt2.size(100,100)
        Bt3 = createButton("3")
        Bt3.position(1100,300)
        Bt3.size(100,100)
       //Bt1 = createSprite(300,300,100,100)
      // Bt2 = createSprite(700,300,100,100)
      // Bt3 = createSprite(1100,300,100,100)
      Bt1.mouseClicked(()=>{
         Bt1.hide()
         Bt2.hide()
         Bt3.hide()
         quiz = createElement(h1,"question 1")
         quiz.position(300,300)
      })
    }
}