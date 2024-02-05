import { Routes } from '@angular/router';
import { BatchDetailsComponent } from './batch-details/batch-details.component';
import { BatchListComponent } from './batch-list/batch-list.component';
import { HomepageComponent } from './homepage/homepage.component';
import { InvalidpageComponent } from './invalidpage/invalidpage.component';

export const routes: Routes = [
     //jr user ne chukich taklaa url slash chya pudhee taklaa tar chukichaa ahee sangitlaa pahije invalid sanga tya sathi
    //wildcard Route or Invalid Route
    // **=>any kahihi invalid ali tr ** kartat */
    {path:'**',component:InvalidpageComponent},//wildcard he jr alaa aplya page madhe tr tee last laa lihaa yaa bakichya type nater bcz he pahilyada lihalaa tr batchdetails laa click or any tr tari invalid mhanje wildcard ch dakhavtaa 



    //Specific Route
    {path :'BatchDetails', component : BatchDetailsComponent },
    {path :'BatchList', component:BatchListComponent},
    //Default Route
    {path :'', component:HomepageComponent},//Default Route yalaa mhantat path madhe kay nasel 
    
];
