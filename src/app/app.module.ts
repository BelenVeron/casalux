import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {SwiperModule} from 'swiper/angular';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';
import { LoginComponent } from './components/login/login.component';
// import { HeaderComponent } from './components/header/header.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { RegisterComponent } from './components/register/register.component';
import { MaterialModule } from './material.module';
import { SetPasswordComponent } from './pages/set-password/set-password.component';
import { RegistroComponent } from './components/registro/registro.component';
import { FirstComponent } from './pages/appointments/appointment.component';
import { BackgroundComponent } from './components/background/background.component';
import { SharedModule } from './shared.module';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent,
    ForgotPasswordComponent,
    RegisterComponent,
    SetPasswordComponent,
    RegistroComponent,
    FirstComponent,
    BackgroundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    SharedModule,
    FlexLayoutModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
