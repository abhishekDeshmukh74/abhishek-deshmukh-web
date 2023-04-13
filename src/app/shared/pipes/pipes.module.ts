import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DateAgoPipe, NumberSuffixPipe, ShortNumberPipe } from '../pipes';

@NgModule({
  declarations: [
    DateAgoPipe,
    NumberSuffixPipe,
    ShortNumberPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DateAgoPipe,
    NumberSuffixPipe,
    ShortNumberPipe,
  ]
})

export class PipesModule { }
