import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WazeService {
  constructor() {}

  openWaze(address): void {
    console.log(address);
    window.open(`https://waze.com/ul?q=${JSON.stringify(address)}`);
  }
}
