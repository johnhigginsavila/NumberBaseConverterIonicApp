import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComputePage } from './compute';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ComputePage
  ],
  imports: [
    IonicPageModule.forChild(ComputePage),
    ComponentsModule,
    BrowserModule,
    CommonModule
  ],
})
export class ComputePageModule {}
