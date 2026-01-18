import { LandingComponent } from "./components/landing/landing";
import { LoginComponent } from "./components/login/login";
import { Routes } from "@angular/router";

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'landing', component: LandingComponent }, // <- updated
];
