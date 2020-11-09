import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication/authentication.service';
import { Brightness } from '@ionic-native/brightness/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  private brightnessDefault: number;

  constructor(
    private authenticationService: AuthenticationService,
    private brightness: Brightness
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

  logout(): void {
    this.authenticationService.logout();
  }
}
