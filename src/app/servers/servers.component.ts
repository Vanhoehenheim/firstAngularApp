import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  isAllowed : boolean = false
  serverName = ""
  serverStatus = false
  servers = ['TestServer','TestServer 2']

  constructor() { 
    setTimeout(()=>{
      this.isAllowed = true;
    },1000)
  }

  ngOnInit(): void {
  }

  addNewServer(){
    this.serverStatus = true;
    this.servers.push(this.serverName);
    console.log(this.servers)
  }

  updateServerName(event : Event){
      this.serverName = (<HTMLInputElement>event.target).value;
  }

}
