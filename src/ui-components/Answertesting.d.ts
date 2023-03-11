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
export declare type AnswertestingInputValues = {
    FirstName?: string;
};
export declare type AnswertestingValidationValues = {
    FirstName?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AnswertestingOverridesProps = {
    AnswertestingGrid?: PrimitiveOverrideProps<GridProps>;
    FirstName?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AnswertestingProps = React.PropsWithChildren<{
    overrides?: AnswertestingOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AnswertestingInputValues) => AnswertestingInputValues;
    onSuccess?: (fields: AnswertestingInputValues) => void;
    onError?: (fields: AnswertestingInputValues, errorMessage: string) => void;
    onChange?: (fields: AnswertestingInputValues) => AnswertestingInputValues;
    onValidate?: AnswertestingValidationValues;
} & React.CSSProperties>;
export default function Answertesting(props: AnswertestingProps): React.ReactElement;
