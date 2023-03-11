/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { CheckboxFieldProps, GridProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AnswerInputValues = {
    Field1?: boolean;
    Field0?: boolean;
};
export declare type AnswerValidationValues = {
    Field1?: ValidationFunction<boolean>;
    Field0?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AnswerOverridesProps = {
    AnswerGrid?: PrimitiveOverrideProps<GridProps>;
    Field1?: PrimitiveOverrideProps<CheckboxFieldProps>;
    Field0?: PrimitiveOverrideProps<CheckboxFieldProps>;
} & EscapeHatchProps;
export declare type AnswerProps = React.PropsWithChildren<{
    overrides?: AnswerOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AnswerInputValues) => AnswerInputValues;
    onSuccess?: (fields: AnswerInputValues) => void;
    onError?: (fields: AnswerInputValues, errorMessage: string) => void;
    onChange?: (fields: AnswerInputValues) => AnswerInputValues;
    onValidate?: AnswerValidationValues;
} & React.CSSProperties>;
export default function Answer(props: AnswerProps): React.ReactElement;
