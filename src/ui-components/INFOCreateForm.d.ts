/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps, TextProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type INFOCreateFormInputValues = {
    LastName?: string;
    Field1?: string;
};
export declare type INFOCreateFormValidationValues = {
    LastName?: ValidationFunction<string>;
    Field1?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type INFOCreateFormOverridesProps = {
    INFOCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    SectionalElement0?: PrimitiveOverrideProps<TextProps>;
    LastName?: PrimitiveOverrideProps<TextFieldProps>;
    Field1?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type INFOCreateFormProps = React.PropsWithChildren<{
    overrides?: INFOCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: INFOCreateFormInputValues) => INFOCreateFormInputValues;
    onSuccess?: (fields: INFOCreateFormInputValues) => void;
    onError?: (fields: INFOCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: INFOCreateFormInputValues) => INFOCreateFormInputValues;
    onValidate?: INFOCreateFormValidationValues;
} & React.CSSProperties>;
export default function INFOCreateForm(props: INFOCreateFormProps): React.ReactElement;
