import { FormControl, ValidationErrors } from "@angular/forms";

export class Luv2CodeValidators {

    //whitespace validation
    static notOnlyWhitespace(control: FormControl) : ValidationErrors {

        //check if string has whitespace
        if ((control.value != null) && (control.value.trim().length === 0)) {
            //invalid
            return {'notOnlyWhitespace': true};
        } else {
            //valid, return just null
            return {any: null};
        }
    }

}
