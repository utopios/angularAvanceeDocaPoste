import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CarouselPublicService } from './carousel-public.service';

function FACTORY_PUBLIC_CAROUSEL_SERVICE(parentCarouselPublicService: CarouselPublicService) {
  return parentCarouselPublicService || new CarouselPublicService()
}

@NgModule({
  declarations: [
    CarouselComponent
  ],
  imports: [
    CommonModule
  ],
  providers:[
    {
      provide:CarouselPublicService,
      useFactory: 
    }
  ],
  exports:[
    CarouselComponent
  ]
})
export class CarouselModule { }
