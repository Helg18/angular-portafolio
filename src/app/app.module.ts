import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';
import { ContentComponent } from './content/content.component';
import { LeftPartComponent } from './content/left-part/left-part.component';
import { RightPartComponent } from './content/right-part/right-part.component';
import { AboutComponent } from './content/right-part/about/about.component';
import { SkillsComponent } from './content/right-part/skills/skills.component';
import { ServicesComponent } from './content/right-part/services/services.component';
import { PortfolioFilterComponent } from './content/right-part/portfolio/portfolio-filter/portfolio-filter.component';
import { PortfolioComponent } from './content/right-part/portfolio/portfolio.component';
import { TestimonialsComponent } from './content/right-part/testimonials/testimonials.component';
import { CounterBoxComponent } from './content/right-part/counter-box/counter-box.component';
import { NewsComponent } from './content/right-part/news/news.component';
import { FooterComponent } from './content/right-part/contact-footer/footer/footer.component';
import { ContactFooterComponent } from './content/right-part/contact-footer/contact-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MobileMenuComponent,
    ContentComponent,
    LeftPartComponent,
    RightPartComponent,
    AboutComponent,
    SkillsComponent,
    ServicesComponent,
    PortfolioFilterComponent,
    PortfolioComponent,
    TestimonialsComponent,
    CounterBoxComponent,
    NewsComponent,
    FooterComponent,
    ContactFooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
