import { Component, OnInit } from '@angular/core';

import { Extract } from '../../model/extract';
import { ExtractService } from '../../services/extract/extract.service';

@Component({
  selector: 'app-extract',
  templateUrl: './extract.page.html',
  styleUrls: ['./extract.page.scss'],
})
export class ExtractPage implements OnInit {
  public extracts: Extract[];

  constructor(private extractService: ExtractService) {}

  ngOnInit() {
    this.getExtracts();
  }

  async getExtracts(): Promise<void> {
    this.extracts = await this.extractService.getExtracts();
  }
}
