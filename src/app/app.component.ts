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
  startDate = '2024-06-12';
  daysSince = 0;
  isMonthverse = false;

  ngOnInit(): void {
    this.cartaDialog = document.querySelector('#carta')!;
    this.calculateDaysSince();
    this.calculateIsMonthverse();
  }

  openCarta() {
    this.cartaDialog.showModal();
  }

  closeCarta() {
    this.cartaDialog.close();
  }

  calculateDaysSince() {
    const startDate = new Date(this.startDate);
    const currentDate = new Date();
    const timeDifference = currentDate.getTime() - startDate.getTime();
    const daysSince = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    this.daysSince = daysSince;
  }

  calculateIsMonthverse() {
    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const dayNaverse = 12;
    if (currentDay === dayNaverse) {
      this.isMonthverse = true;
    } else {
      this.isMonthverse = false;
    }
  }
}
