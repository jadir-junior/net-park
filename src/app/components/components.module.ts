import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExtractComponent } from './extract/extract.component';

const components = [ExtractComponent];

const modules = [CommonModule];

@NgModule({
  imports: [...modules],
  declarations: [...components],
  exports: [...components],
})
export class ComponentsModule {}
