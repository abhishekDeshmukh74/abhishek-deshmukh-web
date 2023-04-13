import { Validators, ValidatorFn } from '@angular/forms';

export const commentValidations: ValidatorFn | null = Validators.compose([
    Validators.required,
    Validators.minLength(4),
    Validators.maxLength(200),
]);

export const commentValidationsMessages = [
    {
        type: 'required',
        message: 'Comment can not be blank',
    },
    {
        type: 'minlength',
        message: 'Comment must be at least 4 characters',
    },
    {
        type: 'maxlength',
        message: 'Comment can only be 200 characters long',
    },
];
