import { ManagerComponent } from './manager.component';
import { Routes } from '@angular/router';
import { WallComponent } from '../components/wall';
import { HouseComponent } from '../components/houses';
import { EventsComponent } from '../components/events';
import { OsbbBillsComponent } from '../components/osbbBils';
import { ContractsComponent } from '../components/contracts';
import { TicketComponent  } from '../components/ticket';
import { ProviderComponent } from '../components/provider';
import { ApartmentComponent } from '../components/apartment';
import { CalendarComponent } from '../components/calendar';
import { ContactsComponent } from '../components/contacts';
import { SubTicketComponent } from '../components/ticket/subticket';
import { eventsDetailComponent } from '../components/events/eventsDetail';
import { HouseAboutComponent } from '../components/house';

export const ManagerRoutes: Routes = [
  { path: 'manager',  component: ManagerComponent,
    children: [
      { path: '', redirectTo: 'wall', pathMatch: 'full' },
      { path: 'wall', component: WallComponent },
      { path: 'houses', component: HouseComponent },
      { path: 'events', component: EventsComponent },
      { path: 'events/:id', component: eventsDetailComponent },
      { path: 'osbbBills', component: OsbbBillsComponent },
      { path: 'contract', component: ContractsComponent },
      { path: 'ticket', component: TicketComponent  },
      { path: 'ticket/:id', component: SubTicketComponent },
      { path: 'provider', component: ProviderComponent },
      { path: 'apartment', component: ApartmentComponent },
      { path: 'calendar', component: CalendarComponent },
      { path: 'contacts', component: ContactsComponent },
      { path: 'house/:id', component: HouseAboutComponent }
    ]},
];
