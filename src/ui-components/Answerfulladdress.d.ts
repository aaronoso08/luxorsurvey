/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AnswerfulladdressInputValues = {
    FullName?: string;
};
export declare type AnswerfulladdressValidationValues = {
    FullName?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AnswerfulladdressOverridesProps = {
    AnswerfulladdressGrid?: PrimitiveOverrideProps<GridProps>;
    FullName?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AnswerfulladdressProps = React.PropsWithChildren<{
    overrides?: AnswerfulladdressOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AnswerfulladdressInputValues) => AnswerfulladdressInputValues;
    onSuccess?: (fields: AnswerfulladdressInputValues) => void;
    onError?: (fields: AnswerfulladdressInputValues, errorMessage: string) => void;
    onChange?: (fields: AnswerfulladdressInputValues) => AnswerfulladdressInputValues;
    onValidate?: AnswerfulladdressValidationValues;
} & React.CSSProperties>;
export default function Answerfulladdress(props: AnswerfulladdressProps): React.ReactElement;
