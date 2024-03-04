import { Routes } from '@angular/router';
import { HomeCompoenentComponent } from './components/home-compoenent/home-compoenent.component';
import { StudentDetailsComponentComponent } from './components/student-details-component/student-details-component.component';

export const routes: Routes = [
    {
        path:"",
        component:HomeCompoenentComponent
    },
    {
        path:"student-details",
        component:StudentDetailsComponentComponent
    }
];
