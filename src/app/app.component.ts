import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent implements OnInit {
  title = 'chulis';
  cartaDialog!: HTMLDialogElement;

  ngOnInit(): void {
    this.cartaDialog = document.querySelector('#carta')!;
  }

  openCarta() {
    this.cartaDialog.showModal();
  }

  closeCarta() {
    this.cartaDialog.close();
  }
}
