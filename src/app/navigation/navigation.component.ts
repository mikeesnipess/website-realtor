  import { Component, HostListener, OnInit } from '@angular/core';

  @Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css']
  })
  export class NavigationComponent implements OnInit {
    currentSection: string = '';

    ngOnInit() {
      this.setCurrentSection();
    }

    @HostListener('window:scroll', ['$event'])
    onWindowScroll(event: Event) {
      this.setCurrentSection();
    }

    navigateToSection(section: string): void {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }

    private setCurrentSection() {
      const sections = ['goToHome', 'goToRecent', 'goToAvailable', 'goToReviews', 'goToAboutUs'];
      const scrollPosition = window.pageYOffset;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const sectionTop = element.offsetTop;
          const sectionHeight = element.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            this.currentSection = section;
            break;
          }
        }
      }
    }
  }
