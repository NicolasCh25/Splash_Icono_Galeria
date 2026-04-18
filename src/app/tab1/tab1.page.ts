import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { IonButton, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton]
})
export class Tab1Page {

  constructor(
    private alertController: AlertController,
    public photoService: PhotoService
  ) {}

  // 🔔 Método de alerta (punto 3)
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Mensaje',
      subHeader: 'Alerta',
      message: 'Este es un mensaje predeterminado 😎',
      buttons: ['OK'],
    });

    await alert.present();
  }

  // 📸 Método para tomar foto (punto 1, 2 y 4)
  async takePhoto() {
    await this.photoService.addNewToGallery();
  }

}