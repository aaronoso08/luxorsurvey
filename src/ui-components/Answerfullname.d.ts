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
export declare type AnswerfullnameInputValues = {
    LastName?: string;
};
export declare type AnswerfullnameValidationValues = {
    LastName?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AnswerfullnameOverridesProps = {
    AnswerfullnameGrid?: PrimitiveOverrideProps<GridProps>;
    LastName?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AnswerfullnameProps = React.PropsWithChildren<{
    overrides?: AnswerfullnameOverridesProps | undefined | null;
} & {
    id?: string;
    iNFO?: INFO;
    onSubmit?: (fields: AnswerfullnameInputValues) => AnswerfullnameInputValues;
    onSuccess?: (fields: AnswerfullnameInputValues) => void;
    onError?: (fields: AnswerfullnameInputValues, errorMessage: string) => void;
    onChange?: (fields: AnswerfullnameInputValues) => AnswerfullnameInputValues;
    onValidate?: AnswerfullnameValidationValues;
} & React.CSSProperties>;
export default function Answerfullname(props: AnswerfullnameProps): React.ReactElement;
