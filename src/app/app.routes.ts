import { Routes } from '@angular/router';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { ThirdComponentComponent } from './third-component/third-component.component';
import { CuartoComponent } from './cuarto/cuarto.component';
import { QuintoComponent } from './quinto/quinto.component';

export const routes: Routes = [
    {path:'primero',component:FirstComponentComponent},
    {path:'segundo',component:SecondComponentComponent},
    {path:'tercero',component:ThirdComponentComponent},
    {path:'cuarto',component:CuartoComponent},
    {path:'quinto',component:QuintoComponent}
];
