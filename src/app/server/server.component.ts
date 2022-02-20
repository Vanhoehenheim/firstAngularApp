import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: 'server.component.html',
  styles: [
    `
      p {
        margin: 0;
      }
      .online {
        text-decoration: underline;
      }
    `,
  ],
})
export class ServerComponent {
  serverID = Math.floor(Math.random() * 10) + 1;
  serverStatus = Math.random() > 0.5 ? 'offline' : 'online';
  serverName = '';

  getServerStatus(): string {
    return this.serverStatus;
  }

  updateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  getColor() {
    return this.getServerStatus() === 'offline'
      ? 'rgba(255, 102, 120, 0.7)'
      : 'rgba(139, 255, 102, 0.7)';
  }
}
