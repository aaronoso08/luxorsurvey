/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Answers } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AnswersUpdateFormInputValues = {
    no?: string;
    yes?: number;
};
export declare type AnswersUpdateFormValidationValues = {
    no?: ValidationFunction<string>;
    yes?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AnswersUpdateFormOverridesProps = {
    AnswersUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    no?: PrimitiveOverrideProps<SelectFieldProps>;
    yes?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AnswersUpdateFormProps = React.PropsWithChildren<{
    overrides?: AnswersUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    answers?: Answers;
    onSubmit?: (fields: AnswersUpdateFormInputValues) => AnswersUpdateFormInputValues;
    onSuccess?: (fields: AnswersUpdateFormInputValues) => void;
    onError?: (fields: AnswersUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AnswersUpdateFormInputValues) => AnswersUpdateFormInputValues;
    onValidate?: AnswersUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AnswersUpdateForm(props: AnswersUpdateFormProps): React.ReactElement;
