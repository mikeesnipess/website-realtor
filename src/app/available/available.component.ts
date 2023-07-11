import { Component } from '@angular/core';

@Component({
  selector: 'app-available',
  templateUrl: './available.component.html',
  styleUrls: ['./available.component.css']
})
export class AvailableComponent {
  url1 = "./assets/img/3.png";
  url2 = "./assets/img/3.png";
  url3 = "./assets/img/3.png";
  
  onSelect(event: any, target: string): void {
    if (event.target.files?.[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        if (target === 'url1') {
          this.url1 = event.target.result;
        } else if (target === 'url2') {
          this.url2 = event.target.result;
        } else if (target === 'url3') {
          this.url3 = event.target.result;
        }
      };
    }
  }

}
