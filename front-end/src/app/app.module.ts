import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import { AgmCoreModule } from '@agm/core';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { CleanersComponent } from './cleaners/cleaners.component';
import { CleanerService } from './services/cleaner.service';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { RegistreComponent } from './registre/registre.component';
import {OrderComponent} from './order/order.component';
import { LoginComponent} from './login/login.component';
import { NewcleanerComponent } from './newcleaner/newcleaner.component';
import { PaymentComponent } from './payment/payment.component';


//services

import {AuthService} from './services/auth.service';
import {OrderService} from './services/order.service';





const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'board', component: BoardComponent},
  {path: 'cleaners/:id', component: CleanersComponent}, // no veo la lista de cleaners sin un id de order
  {path: 'signup', component: RegistreComponent},
  {path: 'login', component: LoginComponent},
  {path: 'users', component: UsersComponent},
  {path: 'order/:id', component: OrderComponent},
  {path: 'newcleaner', component: NewcleanerComponent},
  {path: 'payment', component: PaymentComponent}



];

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    CleanersComponent,
    UsersComponent,
    HomeComponent,
    RegistreComponent,
    OrderComponent,
    LoginComponent,
    NewcleanerComponent,
    PaymentComponent

  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDXcW8SSiPB73R5vGK84ReyFwdNa48yqXI',
      libraries: ['places']
    })
  ],
  providers: [AuthService, CleanerService, OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
