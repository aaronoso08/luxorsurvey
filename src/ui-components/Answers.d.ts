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
export declare type AnswersInputValues = {
    Field0?: boolean;
    Field1?: boolean;
};
export declare type AnswersValidationValues = {
    Field0?: ValidationFunction<boolean>;
    Field1?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AnswersOverridesProps = {
    AnswersGrid?: PrimitiveOverrideProps<GridProps>;
    Field0?: PrimitiveOverrideProps<CheckboxFieldProps>;
    Field1?: PrimitiveOverrideProps<CheckboxFieldProps>;
} & EscapeHatchProps;
export declare type AnswersProps = React.PropsWithChildren<{
    overrides?: AnswersOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AnswersInputValues) => AnswersInputValues;
    onSuccess?: (fields: AnswersInputValues) => void;
    onError?: (fields: AnswersInputValues, errorMessage: string) => void;
    onChange?: (fields: AnswersInputValues) => AnswersInputValues;
    onValidate?: AnswersValidationValues;
} & React.CSSProperties>;
export default function Answers(props: AnswersProps): React.ReactElement;
