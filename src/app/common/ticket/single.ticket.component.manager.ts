import {Component} from '@angular/core';
import { myosbbLink } from '../../app.webpackHardcode.service';
import {Http, Response} from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { ticketConfig } from './tocket.config';

@Component({
    selector: 'ticket-manager',
    styleUrls: ['../../../assets/css/manager.page.layout.scss'],
    // templateUrl: './ticket.component.html'
  template: `<div class="content">
    <breadcrumb [header]="title"></breadcrumb>
  <table class="table table-striped table-advance table-hover" style="table-layout: fixed;">
    <thead>
    <tr>
      <th class="sorting" style="width:25%"><i class="fa fa-bullhorn"> </i> {{'nameTicket'}}
        <a style="{cursor:pointer}" (click)="sortBy('name')">
          <span class="fa fa-fw fa-sort pull-left"></span></a>
      </th>

      <th class="sorting" style="width:15%;min-width:3%"><i class=" fa fa-edit"></i>
        {{'authorTicket'}}
        <a style="{cursor:pointer}" (click)="sortBy('user')">
          <span class="fa fa-fw fa-sort pull-left"></span></a></th>

      <th class="sorting" style="width:15%;min-width:3%"><i class=" fa fa-edit"></i>
        {{'dateTicket'}}
        <a style="{cursor:pointer}" (click)="sortBy('time')">
          <span class="fa fa-fw fa-sort pull-left"></span></a></th>

      <th class="sorting" style="width:15%;min-width:10%">
        <i class=" fa fa-edit"></i> {{'answer'}}
        <a style="{cursor:pointer}" (click)="sortBy('assigned')">
          <span class="fa fa-fw fa-sort pull-left"></span></a></th>

      <th class="sorting" style="width:10%;"><i class=" fa fa-edit"></i>
        {{'state'}}
        <a style="cursor:pointer;width:8%;min-width:8%" (click)="sortBy('state')">
          <span class="fa fa-fw fa-sort pull-left"></span></a></th>

      <th class="sorting" style="width:10%;min-width:10%"><i class=" fa fa-edit"></i>
        {{'discussed' }}</th>

    </tr>
    </thead>
    <tbody>
    <tr *ngFor="let item of data">
      <td class="nameTabl"><a class="nameTablA" (click)="singleTicket(item.ticketId)">
        {{item.name}}</a>
      </td>
      <td style="width:30px;">{{item.user.firstName}} {{item.user.lastName}}</td>
      <td>
      <!--{{getTime(item.time)}}-->
      </td>
      <td style="margin: 15px;">{{item.assigned.firstName}} {{item.assigned.lastName}}</td>
      <td>

        <div *ngIf=" item.state == 'NEW' || item.state == '0'  ">
                            <span class="label btn-round label-info " style="margin: 5px;"
                                  list="assign">{{ 'new'  }}</span>
        </div>
        <div *ngIf=" item.state == '1' || item.state == 'IN_PROGRESS'">
          <span class="label btn-round label-success" style=" text-align: center;margin: 5px;">{{ 'in_progress'  }}</span>

        </div>
        <div *ngIf=" item.state == '2' || item.state == 'DONE'">
                            <span class="label btn-round label-danger"
                                  style=" text-align: center;margin: 5px;">{{ 'done'  }}</span>
        </div>
      </td>


      <td>

        <div *ngIf="item.discussed == null">
          {{ 'no' }}
        </div>

        <div *ngIf="item.discussed != null">
          {{ 'yes'}}
        </div>
      </td>
      <td>
        <!--<div *ngIf="isCreator()||(item.user.firstName == currentUser.firstName && item.user.lastName == currentUser.lastName)">-->
          <!--<div class="dropdown">-->
            <!--<button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1"-->
                    <!--data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">-->
              <!--{{'optionsTicket'}}-->
              <!--<span class="caret"></span>-->
            <!--</button>-->
            <!--<ul class="dropdown-menu" aria-labelledby="dropdownMenu1">-->
              <!--<li><a style="cursor: pointer"-->
                     <!--(click)=" initUpdatedTicket(item); editForm.initUpdatedTicket(item);">-->
                <!--{{'editTicket'}}</a></li>-->
              <!--<li><a style="cursor: pointer" (click)="delForm.openDelModal(item)">{{'deleteTicket'-->
                <!--}}</a></li>-->
            <!--</ul>-->
          <!--</div>-->
        <!--</div>-->
      </td>



    </tr>

    </tbody>
  </table>
</div>
`
    // styleUrls: ['src/app/house/house.css', 'src/shared/css/loader.css', 'src/shared/css/general.css'],
    // directives: [MessageComponent]
})
export class TicketSingleManagerComponent {
  public data = ticketConfig.rows;
  public title: string = 'Ticket';
  constructor(private http: Http) {
    console.log(ticketConfig.rows);

  }
  public hardcodedConfig() {
    //   return this.http.get('tsconfig.json')
    //     .subscribe(res => this.data = res.json());

  }
}
