/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AnswersCreateFormInputValues = {
    no?: string;
    yes?: number;
};
export declare type AnswersCreateFormValidationValues = {
    no?: ValidationFunction<string>;
    yes?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AnswersCreateFormOverridesProps = {
    AnswersCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    no?: PrimitiveOverrideProps<SelectFieldProps>;
    yes?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AnswersCreateFormProps = React.PropsWithChildren<{
    overrides?: AnswersCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AnswersCreateFormInputValues) => AnswersCreateFormInputValues;
    onSuccess?: (fields: AnswersCreateFormInputValues) => void;
    onError?: (fields: AnswersCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AnswersCreateFormInputValues) => AnswersCreateFormInputValues;
    onValidate?: AnswersCreateFormValidationValues;
} & React.CSSProperties>;
export default function AnswersCreateForm(props: AnswersCreateFormProps): React.ReactElement;
