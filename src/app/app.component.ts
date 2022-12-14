import { Component,HostListener,inject } from '@angular/core';
declare const TimelineMax: any ;
import {MatSnackBar, MatSnackBarRef,MatSnackBarConfig} from '@angular/material/snack-bar';
import {Howl} from 'howler';
import {environment} from '../environments/environment'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ProjectFirstAnniversary';
  tl:any
  tl2:any
  tl3:any
  ease:any
  sound:any
  sound2:any
  
  constructor(private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.tl = new TimelineMax();
    this.tl2 = new TimelineMax();
    Howler.autoUnlock = false;
     var sound = new Howl({ src: ['assets/ChristmasIntro.m4a'],onplayerror: function() {
        sound.once('unlock', function() {
        sound.play();
      })}, html5 :true });
    this.ease = (window as any).com.greensock.easing; 

  }
  
  start(){
    this.tl2.to('.center2', 2, {scale:0})
    this.sound = new Howl({ src: ['assets/ChristmasIntro.m4a'],  html5 :true})
    this.sound2 = new Howl({ src: ['assets/LoveStory.mp3'],  html5 :true})
    console.log("GSAP", (window as any).com.greensock)
    setTimeout(()=>{   
      this.sound.play();
        this.tl.to('.center', 2, {scaleY: 1, height:'20vh', ease: this.ease.Elastic.easeOut.config(1,0.3)})
        .to('.password',1,{scaleX: 1, width:'', ease: this.ease.Elastic.easeOut.config(1,0.3)},"+=1.8")
        .to('.buttonGo',1.5,{scaleX: 1, width:'', ease: this.ease.Elastic.easeOut.config(1,0.3)},"+=2")
        .to('.footer',1,{scaleX: 1, width:'', ease: this.ease.Bounce.easeOut},"+=1.5")
        .to('.emoji', 1, {rotation:10+5, repeat: -1, yoyo: true},"+=1",)
        .to('.christmasTree', 1, {scaleY: 1,width:'', ease: this.ease.Bounce.easeOut})
        .to('.christmasTree', 1, {rotation:0+3, repeat: -1, yoyo: true},)
        .to('.christmasGiftBox', 0.7, {scaleY: 1,width:'', ease: this.ease.Bounce.easeOut},"+=1")
        .to('.christmasGiftBox', 2, {x: -40, repeat: -1,yoyo: true,})
    }, 1200)
    // this.myMessage()
  }


  // @HostListener('document:click', ['$event'])
  //   documentClick(event: MouseEvent) {
  //       console.log("clicking");
  //        this.sound.play();   
  //   }

  ngAfterViewInit(): void {
    
  }

  buttonGo(code:string){
    if(code == '12202021'){
      this.tl.kill()
      this.sound.pause();
      document.getElementById("center3")?.style.setProperty("display","block")
      this.tl2.to('.center', 1.5, {scaleY: 0, ease: this.ease.SlowMo.ease.config(0.7,0.7, false)})
      .to('.christmasTree,.christmasGiftBox', 1.5, {scaleY: 0, ease: this.ease.SlowMo.ease.config(0.7,0.7, false)},"+2")
      // .to('.christmasGiftBox', 1.5, {scaleX: 0, ease: this.ease.SlowMo.ease.config(0.7,0.7, false)},"+=1")
      this.myMessage();
    }else{
      let config = new MatSnackBarConfig();
      config.duration = 3000;   
      config.verticalPosition = "top"  
      console.log(config);
       
      this.snackBar.open("ANNIVERSARY DATE REQUIRED", "",config);
      // this.snackBar.openFromComponent(ErrorSnackbarComponent, {
      //   // duration: this.durationInSeconds * 1000,
      // });
    }
  }

  myMessage(){
    this.tl3 = new TimelineMax();
    console.log("test")
    this.sound2.play()
    this.tl3.to(".halo", 3.5, {scale: 1.5,opacity: 1,rotation: 0,ease: this.ease.Expo.easeOut,delay:2})
    .to(".halo", 2, {scale: 0,opacity: 0,rotation: -102,ease: this.ease.Expo.easeOut})
    .to(".two", 3.5, {scale: 1.5,opacity: 1,rotation: 0,ease: this.ease.Expo.easeOut})
    .to(".two", 2, {scale: 0,opacity: 0,rotation: -102,ease: this.ease.Expo.easeOut})
    .to(".three", 3.5, {scale: 1.5,opacity: 1,rotation: 0,ease: this.ease.Expo.easeOut})
    .to(".three", 2, {scale: 0,opacity: 0,rotation: -102,ease: this.ease.Expo.easeOut})
    this.tl3.to(".four, .four-1", .8, {scale: .3,opacity: 1,rotation: 0,ease: this.ease.Elastic.easeOut})
    this.tl3.to(".four-2", .8, {scale: .3,opacity: 1,rotation: 0,ease: this.ease.Bounce.easeOut})
    this.tl3.to(".four-3", .8, {scale: .3,opacity: 1,rotation: 0,ease: this.ease.Elastic.easeOut})
    this.tl3.to(".four-4", .8, {scale: .3,opacity: 1,rotation: 0,ease: this.ease.Expo.easeOut})
    this.tl3.to(".four-5", .8, {scale: 1,opacity: 1,rotation: 0,ease: this.ease.Expo.easeOut},"-=.8")
    this.tl3.to(".four-6", 1, {scale: 1,opacity: 1,rotation: 20,ease: this.ease.Expo.easeOut},"+=1")
    this.tl3.to(".four-7", 1, {scale: 1,opacity: 1,rotation: -20,ease: this.ease.Expo.easeOut},"+=1")
    this.tl3.to(".four-8", 2, {scale: 1,opacity: 1,rotation: -5,ease: this.ease.SlowMo.easeOut},"+=1")
    this.tl3.to(".four-9", 2, {scale: 1,opacity: 1,rotation: -10,ease: this.ease.Elastic.easeOut},"+=1")
    this.tl3.to(".four-10", 2, {scale: 1,opacity: 1,rotation: 15,ease: this.ease.Bounce.easeOut},"+=1")
    .to(".four", 3, {x: -140,opacity: 0,rotation: 0,ease: this.ease.Expo.easeOut},"+=1")
    this.tl3.to(".five", 6, {scale: 1.1,opacity: 1,rotation: 0,ease: this.ease.SlowMo.easeOut})
    this.tl3.to(".five", 1.5, {opacity: 0,rotation: 0,ease: this.ease.SlowMo.easeOut})
    this.tl3.to(".six", 6, {scale: 1.1,opacity: 1,rotation: 0,ease: this.ease.SlowMo.easeOut})
    this.tl3.to(".six", 1.5, {opacity: 0,rotation: 0,ease: this.ease.SlowMo.easeOut})
    this.tl3.to(".seven", 15, {scale: 1.1,opacity: 1,rotation: 0,ease: this.ease.SlowMo.easeOut})
    this.tl3.to(".we", 1, {x:30,scale: 1.1,opacity: 1,rotation: 2,ease: this.ease.SlowMo.easeOut},"-=13")
    this.tl3.to(".we2", 1, {x:10,scale: 1.1,opacity: 1,rotation: -2,ease: this.ease.SlowMo.easeOut},"-=11")
    this.tl3.to(".we3", 1, {x:5,scale: 1.1,opacity: 1,rotation: 2,ease: this.ease.SlowMo.easeOut},"-=9")
    this.tl3.to(".we4", 1, {x:8,scale: 1.1,opacity: 1,rotation: -3,ease: this.ease.SlowMo.easeOut},"-=7")
    this.tl3.to(".we5", 1, {x:6,scale: 1.1,opacity: 1,rotation: -4,ease: this.ease.SlowMo.easeOut},"-=5")
    this.tl3.to(".we6", 1, {x:6,scale: 1.1,opacity: 1,rotation: 4,ease: this.ease.SlowMo.easeOut},"-=3")
    this.tl3.to(".we7", 1, {x:6,scale: 1.1,opacity: 1,rotation: 6,ease: this.ease.SlowMo.easeOut},"-=1")
    this.tl3.to(".we8", 1, {x:6,scale: 1.1,opacity: 1,rotation: -3,ease: this.ease.SlowMo.easeOut},"+=1")
    this.tl3.to(".we9", 1, {x:6,scale: 1.1,opacity: 1,rotation: 5,ease: this.ease.SlowMo.easeOut},"+=3")
    this.tl3.to(".seven", 1.5, {opacity: 0,rotation: 0,ease: this.ease.SlowMo.easeOut})
    this.tl3.to(".we,.we2,.we3,.we4,.we5,.we6,.we7,.we8,.we9", 1.5, {opacity: 0,rotation: 0,ease: this.ease.SlowMo.easeOut})
    this.tl3.to(".eight", 5, {scale: 1.1,opacity: 1,rotation: 0,ease: this.ease.SlowMo.easeOut})
    this.tl3.to(".eight", 1.5, {opacity: 0,rotation: 0,ease: this.ease.SlowMo.easeOut})
    this.tl3.to(".nine", 6, {scale: 1.1,opacity: 1,rotation: 0,ease: this.ease.SlowMo.easeOut})
    this.tl3.to(".we10", 6, {y:5,scale: 1.1,opacity: 1,rotation: 0,ease: this.ease.Elastic.easeOut},"-=4")
    this.tl3.to(".nine,.we10", 1.5, {opacity: 0,rotation: 0,ease: this.ease.SlowMo.easeOut})
    this.tl3.to(".ten", 6, {scale: 1.1,opacity: 1,rotation: 0,ease: this.ease.SlowMo.easeOut})
    this.tl3.to(".we11", 6, {y:5,scale: 1.1,opacity: 1,rotation: 0,ease: this.ease.Bounce.easeOut},"-=4")
    this.tl3.to(".ten,.we11", 1.5, {scale:0,opacity: 0,rotation: 360,ease: this.ease.SlowMo.easeOut})
    this.tl3.to(".eleven", 6, {scale: 1.1,opacity: 1,rotation: 0,ease: this.ease.SlowMo.easeOut})
    this.tl3.to(".we12", 6, {y:5,scale: 1.1,opacity: 1,rotation: 0,ease: this.ease.Elastic.easeOut},"-=4")
    this.tl3.to(".eleven,.we12", 2.5, {scale:0,opacity: 0,rotation: 0,ease: this.ease.SlowMo.easeOut})
    this.tl3.to(".twelve", 15, {scale: 1.1,opacity: 1,rotation: 0,ease: this.ease.SlowMo.easeOut})
    this.tl3.from(".we13",1,{scale:10,opacity:0})
    this.tl3.to(".we13", 10, {scale:1.1,opacity: 1,rotation: 0,ease: this.ease.SlowMo.easeOut},"-=13")
    this.tl3.to(".twelve", 1.5, {opacity: 0,rotation: 0,ease: this.ease.SlowMo.easeOut})
    this.tl3.to(".thirteen", 15, {scale: 1.1,opacity: 1,rotation: 0,ease: this.ease.SlowMo.easeOut})
    this.tl3.to(".we14", 10, {top:285,scale:1.1,opacity: 1,rotation: 0,ease: this.ease.Bounce.easeOut},"-=14")
    


  }

}

@Component({
  selector: 'errorSnackbar',
  templateUrl: 'errorSnackbar.html',
  styles: [
    `
    :host {
      display: flex;
    }

    .example-pizza-party {
      color: hotpink;
    }
  `,
  ],
})
export class ErrorSnackbarComponent {
  snackBarRef = inject(MatSnackBarRef);
}
