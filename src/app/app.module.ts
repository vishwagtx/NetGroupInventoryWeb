import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppHttpInterceptor } from './shared/interceptors/app-http-interceptor';
import { RegisterCallbackComponent } from './register-callback/register-callback.component';
import { AdminAuthGuard } from './shared/guards/admin-auth.guard';
import { AuthGuard } from './shared/guards/auth.guard';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, RegisterCallbackComponent],
  imports: [
    CommonModule,
    BrowserModule,
    SharedModule,
    CoreModule,
    AppRoutingModule,
  ],
  providers: [
    AdminAuthGuard,
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: AppHttpInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
