class Form{
    constructor(){
         this.input = createInput("Name");
         this.button = createButton('Play');
         this.greeting = createElement('h3');
    }

    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }

    display(){
        var title = createElement('h3');
        title.html("Car Racing Game");
        title.position(displayWidth/2,5);
        
        
        this.input.position(displayWidth/2,displayHeight/2);
        this.button.position(displayWidth/2,displayHeight/2 + 50);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
           gameState = PLAY;

        });


    }
}
