import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { WhyUsComponent } from './components/why-us/why-us.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BestSellersComponent } from './components/best-sellers/best-sellers.component';
import { ProductSectionComponent } from './components/product-section/product-section.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeroComponent,
    WhyUsComponent,FooterComponent,
    NavbarComponent,BestSellersComponent,
    ProductSectionComponent,HowItWorksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Front-end';
}
