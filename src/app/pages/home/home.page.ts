import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

import { Brightness } from '@ionic-native/brightness/ngx';

import { AuthenticationService } from '../../services/authentication/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  private brightnessDefault: number;

  constructor(
    private authenticationService: AuthenticationService,
    private brightness: Brightness,
    private router: Router,
    private platform: Platform
  ) {}

  ngOnInit() {
    this.getBrightness();
    this.setBrightness(1);
  }

  ngOnDestroy() {
    this.setBrightness(this.brightnessDefault);
  }

  async getBrightness() {
    this.brightnessDefault = await this.brightness.getBrightness();
  }

  async setBrightness(value) {
    await this.brightness.setBrightness(value);
  }

  goToExtract() {
    // setando a luz para default, por que o service da rota navega ela da um push no estado e não destroy o component
    this.setBrightness(this.brightnessDefault);
    this.router.navigate(['extract']);
  }

  logout(): void {
    this.authenticationService.logout();
  }
}
