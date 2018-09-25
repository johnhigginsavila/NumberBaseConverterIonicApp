import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { NumberBaseInputComponent } from './number-base-input/number-base-input';
import { CommonModule } from '@angular/common';
@NgModule({
	declarations: [NumberBaseInputComponent],
	imports: [
		BrowserModule,
		CommonModule,
		IonicModule
	],
	exports: [NumberBaseInputComponent]
})
export class ComponentsModule {}
