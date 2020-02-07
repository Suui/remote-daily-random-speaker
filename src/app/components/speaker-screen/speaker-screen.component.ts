import {Component, OnDestroy, OnInit} from '@angular/core';
import { MeetingServiceService } from '../../services/meeting-service.service';
import { CookieService } from 'ngx-cookie-service';
import { SocketioService } from '../../services/socketio.service';

@Component({
  selector: 'app-speaker-screen',
  templateUrl: './speaker-screen.component.html',
  styleUrls: ['./speaker-screen.component.scss']
})
export class SpeakerScreenComponent implements OnInit {
  private connectedUsersList: any;

  constructor(private meetingService: MeetingServiceService,
              private cookieService: CookieService,
              private socketService: SocketioService) { }

  ngOnInit() {
    this.getConnectedUsersList();
  }

  getConnectedUsersList() {
    this.meetingService.getUsersOfMeeting().subscribe((usersList) => {
      this.connectedUsersList = usersList;
      this.socketService.setupSocketConnection();
    });
  }

}