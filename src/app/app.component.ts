import { Component,HostListener,inject } from '@angular/core';
declare const TimelineMax: any ;
import {MatSnackBar, MatSnackBarRef,MatSnackBarConfig} from '@angular/material/snack-bar';
import {Howl} from 'howler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ProjectFirstAnniversary';
  tl:any
  tl2:any
  ease:any
  sound:any
  sound2:any
  
  constructor(private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.tl = new TimelineMax();
    this.tl2 = new TimelineMax();
    // Howler.autoUnlock = false;
    //  var sound = new Howl({ src: ['assets/ChristmasIntro.m4a'],onplayerror: function() {
    //     sound.once('unlock', function() {
    //     sound.play();
    //   })}, html5 :true });
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
        .to('.christmasGiftBox', 1, {scaleY: 1,width:'', ease: this.ease.Bounce.easeOut},"+=1")
        .to('.christmasGiftBox', 1, {rotation:0-2, repeat: -1, yoyo: true})
    }, 1200)
  }


  // @HostListener('document:click', ['$event'])
  //   documentClick(event: MouseEvent) {
  //       console.log("clicking");
  //        this.sound.play();   
  //   }

  ngAfterViewInit(): void {
    
  }

  buttonGo(code:string){
    console.log(code);
    if(code == "12202021"){
      this.sound.pause();
      this.tl2.to('.center', 1.5, {scaleY: 0, ease: this.ease.SlowMo.ease.config(0.7,0.7, false)})
      .to('.christmasTree,.christmasGiftBox', 1.5, {scaleY: 0, ease: this.ease.SlowMo.ease.config(0.7,0.7, false)},"+2")
      // .to('.christmasGiftBox', 1.5, {scaleX: 0, ease: this.ease.SlowMo.ease.config(0.7,0.7, false)},"+=1")

      this.sound2.play()
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
