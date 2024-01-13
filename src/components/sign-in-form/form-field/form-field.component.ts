import {Component,EventEmitter,Input, Output} from "@angular/core";


@Component({
    selector:"form-field",
    templateUrl:"./form-field.component.html",
    styleUrls:["./form-field.component.scss"],
    //standalone:true,
})
export class FormField {
    @Input() type?:string;
    @Input() placeholder?:string;
    @Input() icon?:string;
    @Output() public onChange:EventEmitter<void>=new EventEmitter();

    onValueChange(event:any){
        let value=event.target.value?.trim();
        this.onChange.emit(value);
    }
}
