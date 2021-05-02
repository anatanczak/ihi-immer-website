import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { SparePartComponent } from './spare-part/spare-part.component';
import { SparePartsComponent } from './spare-parts/spare-parts.component';
import { TipsComponent } from './tips/tips.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'spareparts', component: SparePartsComponent },
  { path: 'spareparts/:id', component: SparePartComponent },
  { path: 'tips', component: TipsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
