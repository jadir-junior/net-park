import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

import { Extract } from '../../model/extract';
import { ExtractService } from '../../services/extract/extract.service';

@Component({
  selector: 'app-extract',
  templateUrl: './extract.page.html',
  styleUrls: ['./extract.page.scss'],
})
export class ExtractPage implements OnInit {
  public extracts: Extract[];

  constructor(
    private extractService: ExtractService,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.getExtracts();
  }

  async getExtracts(): Promise<void> {
    try {
      this.extracts = await this.extractService.getExtracts();
    } catch (err) {
      const toast = await this.toastController.create({
        message: err.message,
        duration: 2000,
        color: 'danger',
      });
      toast.present();
    }
  }
}
