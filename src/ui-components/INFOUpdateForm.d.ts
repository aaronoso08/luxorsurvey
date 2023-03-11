/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { INFO } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type INFOUpdateFormInputValues = {
    FirstName?: string;
    LastName?: string;
    Date?: string;
    Field1?: string;
};
export declare type INFOUpdateFormValidationValues = {
    FirstName?: ValidationFunction<string>;
    LastName?: ValidationFunction<string>;
    Date?: ValidationFunction<string>;
    Field1?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type INFOUpdateFormOverridesProps = {
    INFOUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    FirstName?: PrimitiveOverrideProps<TextFieldProps>;
    LastName?: PrimitiveOverrideProps<TextFieldProps>;
    Date?: PrimitiveOverrideProps<TextFieldProps>;
    Field1?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type INFOUpdateFormProps = React.PropsWithChildren<{
    overrides?: INFOUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    iNFO?: INFO;
    onSubmit?: (fields: INFOUpdateFormInputValues) => INFOUpdateFormInputValues;
    onSuccess?: (fields: INFOUpdateFormInputValues) => void;
    onError?: (fields: INFOUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: INFOUpdateFormInputValues) => INFOUpdateFormInputValues;
    onValidate?: INFOUpdateFormValidationValues;
} & React.CSSProperties>;
export default function INFOUpdateForm(props: INFOUpdateFormProps): React.ReactElement;
