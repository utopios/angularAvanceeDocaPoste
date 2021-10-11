import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CarouselService } from '../../carousel.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers:[CarouselService]
})
export class CarouselComponent implements OnInit {
  @Input() delay = 500
  @Output() action:EventEmitter<boolean> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

}
