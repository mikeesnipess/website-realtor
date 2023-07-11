import { Component, HostListener, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    FormsModule
  ],
  // ...
})
export class RecentComponentModule { }

@Component({
  selector: 'app-recent',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.css']
})
export class RecentComponent implements OnInit {
  currentImageUrl = 'assets/img/ANDRONIC-background.png';
  imageUrls = [
    'assets/img/3.png',
    'assets/img/ANDRONIC.png',
    'assets/img/headers.jpg',
    'assets/img/andronicLogo.png'
  ];
  currentIndex = 0;
  interval: any;

  ngOnInit() {
    this.startSlideshow();
  }

  startSlideshow() {
    this.interval = setInterval(() => {
      this.updateImage();
    }, 4000); // Change image every 4 seconds
  }

  stopSlideshow() {
    clearInterval(this.interval);
    this.startSlideshow(); // Restart the slideshow timer
  }

  updateImage(imageUrl?: string) {
    if (imageUrl) {
      this.currentImageUrl = imageUrl;
      this.stopSlideshow();
    } else {
      this.currentIndex++;
      if (this.currentIndex >= this.imageUrls.length) {
        this.currentIndex = 0;
      }
      this.currentImageUrl = this.imageUrls[this.currentIndex];
    }
  }

  onSelect(event: any, target: string): void {
    if (event.target.files?.[0]) {
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        this.currentImageUrl = event.target.result;
        this.stopSlideshow();
      };
    }
  }

  previousImage() {
    this.currentIndex--;
    if (this.currentIndex < 0) {
      this.currentIndex = this.imageUrls.length - 1;
    }
    this.currentImageUrl = this.imageUrls[this.currentIndex];
    this.stopSlideshow();
  }

  nextImage() {
    this.currentIndex++;
    if (this.currentIndex >= this.imageUrls.length) {
      this.currentIndex = 0;
    }
    this.currentImageUrl = this.imageUrls[this.currentIndex];
    this.stopSlideshow();
  }
}
