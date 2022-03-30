import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { RegisterCallbackComponent } from './register-callback/register-callback.component';
import { AdminAuthGuard } from './shared/guards/admin-auth.guard';

@NgModule({
  declarations: [AppComponent, RegisterCallbackComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule],
  providers: [AdminAuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
