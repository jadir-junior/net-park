import { Component, Input, OnInit } from '@angular/core';
import { Extract } from 'src/app/model/extract';
import { WazeService } from 'src/app/services/waze/waze.service';

@Component({
  selector: 'extract',
  templateUrl: './extract.component.html',
  styleUrls: ['./extract.component.scss'],
})
export class ExtractComponent implements OnInit {
  @Input() extract: Extract;

  constructor(private wazeService: WazeService) {}

  ngOnInit() {}

  openRoute(address) {
    this.wazeService.openWaze(address);
  }
}
