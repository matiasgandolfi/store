import { Component, Input, SimpleChange, SimpleChanges, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input({required: true}) duration : number= 0;
  @Input({required: true}) message = "";
  counter = signal(0);
  counterRef : number | undefined

  constructor(){
    console.log('Constructor')
    console.log('-'.repeat(10));
  }

  ngOnChanges(changes : SimpleChanges){
    console.log('ngOnChanges')
    console.log('-'.repeat(10));
    console.log(changes);
    const duration = changes['duration'];
    if(duration && duration.currentValue !== duration.previousValue){
      this.doSomething()
    }
  }



  ngOnInit(){
    console.log('ngOnInit')
    console.log('-'.repeat(10));
    console.log('duration=>', this.duration)
    console.log('message=>', this.message);
    this.counterRef = window.setInterval(()=> {
      console.log('run inter')
      this.counter.update(statePrev => statePrev + 1), 1000
    })
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit')
    console.log('-'.repeat(10));
  }


  doSomething(){
    console.log('change duration');
  }

  ngOnDestroy(){
    console.log('ngOnDestroy');
    console.log('-'.repeat(10));
    window.clearInterval(this.counterRef)
  }

}
