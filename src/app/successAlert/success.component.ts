import {Component} from '@angular/core'

@Component({
    selector : 'app-success',
    templateUrl : './success.component.html',
    styles : [`h1 {
        color : green;
        display : inline;
    }`]
})

export class SuccessComponent {
    alertSuccess(){
        alert("Success")
    }
}