import {Component} from '@angular/core'

@Component({
    selector : 'app-warning',
    templateUrl : './warning.component.html',
    styles : [`h1 {
        color : red;
        display: inline
    }`]
})

export class WarningComponent {
    alertWarning(){
        alert("Warning")
    }
}