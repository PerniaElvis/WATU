import { Injectable } from "@angular/core";
import Swal from "sweetalert2";

@Injectable()
export class AlertService
{
    constructor(){

    }

    success(text: any, title: any): void
    {
        Swal.fire({
            text: title,
            icon: 'success',
            confirmButtonText: text
        });
    }

    error(message: any, err: any): void
    {
        console.log(err);
        Swal.fire({
            title: 'Error!',
            text: message,
            icon: 'error',
            confirmButtonText: err          
        })
    }
}