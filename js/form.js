class Form{
constructor(){
    //Buttons
this.startbtn = createButton(" ")
this.menuBtn = createButton("menu")
rightBtn = createSprite(width/7+80,height/2+200)
rightBtn.visible = false
leftBtn = createSprite(width/9,height/2+200)
leftBtn.visible=false
shootBtn = createSprite(width/2+300,height/2+200)
shootBtn.visible=false
//Images
this.logo = createImg("assets/logo.png")
this.myLogo = createImg("assets/My Logo.png")
this.ufoSticker = createImg("assets/ufo_sticker0.png")
this.planetSticker = createImg("assets/planet_sticker0.png")


}
 handleFormPos(){
this.startbtn.position(width/2-50,height/2+100)
this.ufoSticker.position(width/4-50,height/2-150)
this.planetSticker.position(width/2+200,height/2+50)
this.menuBtn.position(width/2-30,height/2-300)
this.logo.position(width/2-50,height/2-200)
this.myLogo.position(0,0)
}

handleFormStyle(){
 this.startbtn.class("customButton")
this.menuBtn.class("menuButton")
rightBtn.addImage(rightImg)
leftBtn.addImage(leftImg)
shootBtn.addImage(shootImg)
}
handleStartbtn(){
this.startbtn.mousePressed(()=> {
this.planetSticker.hide()
this.ufoSticker.hide()
this.startbtn.hide()
this.myLogo.hide()
this.logo.hide()
leftBtn.visible=true
rightBtn.visible=true
shootBtn.visible=true

gameState="PLAY"

})
}
handleFormSize(){
    this.logo.size(100,100)
    this.myLogo.size(100,100)
    this.ufoSticker.size (150,100)
    this.planetSticker.size(200,200)
    rightBtn.scale=1.5
    leftBtn.scale = 1.5
    shootBtn.scale = 0.2
}


display(){
this.handleFormPos()
this.handleFormStyle()
this.handleStartbtn()
this.handleFormSize()
}
handleMenuBtn(){
    this.menuBtn.mousePressed(()=>{
    


    })

    }


}

