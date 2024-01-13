import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// "carte": "5399976615127957",
//   "compte": "10050161000380378869",
//   "deliverydate": "44511",
//   "enroled": "1",
//   "experydate": "45230",
//   "mobile": "29271006",
//   "name": "CARTE CIB",

// validate phone number
export function phoneValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const phoneRegex = /^(\+216|0)([ \-_/]*)(\d[ \-_/]*){9}$/;
        const isValid = phoneRegex.test(control.value);
    
        return isValid ? null : { invalidPhone: true };
    };
}

// validate card number
export function cardValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const cardRegex = /^(\d[ \-_/]*){16}$/;
        const isValid = cardRegex.test(control.value);
    
        return isValid ? null : { invalidCard: true };
    };
}

// validate delivery date
export function deliveryDateValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const deliveryDateRegex = /^(\d[ \-_/]*){5}$/;
        const isValid = deliveryDateRegex.test(control.value);
    
        return isValid ? null : { invalidDeliveryDate: true };
    };
}

// validate expery date
export function experyDateValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const experyDateRegex = /^(\d[ \-_/]*){5}$/;
        const isValid = experyDateRegex.test(control.value);
    
        return isValid ? null : { invalidExperyDate: true };
    };
}


// {
//     "famille": "Fraude",
//     "groupe": "Litiges",
//     "code": "10.1",
//     "motif": " EMV Liability Shift Counterfeit Fraud",
//     "document": "",
//     "delai": "120",
//     "contientfichier": "Non"
//   },

// validate famille
export function familleValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const familleEnum = ['Fraude', 'Autorisation', 'Litiges commerciaux', 'Problème de Processing', 'GAB', 'Autres'];
        const isValid = familleEnum.includes(control.value);

        return isValid ? null : { invalidFamille: true };
    };
}