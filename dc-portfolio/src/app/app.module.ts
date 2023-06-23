import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PortfolioProfileComponent } from './portfolio-profile/portfolio-profile.component';

@NgModule({
	declarations: [AppComponent, PortfolioProfileComponent],
	imports: [BrowserModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
