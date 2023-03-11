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
export declare type Answer6InputValues = {
    Field0?: boolean;
    Field1?: boolean;
};
export declare type Answer6ValidationValues = {
    Field0?: ValidationFunction<boolean>;
    Field1?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Answer6OverridesProps = {
    Answer6Grid?: PrimitiveOverrideProps<GridProps>;
    Field0?: PrimitiveOverrideProps<CheckboxFieldProps>;
    Field1?: PrimitiveOverrideProps<CheckboxFieldProps>;
} & EscapeHatchProps;
export declare type Answer6Props = React.PropsWithChildren<{
    overrides?: Answer6OverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: Answer6InputValues) => Answer6InputValues;
    onSuccess?: (fields: Answer6InputValues) => void;
    onError?: (fields: Answer6InputValues, errorMessage: string) => void;
    onChange?: (fields: Answer6InputValues) => Answer6InputValues;
    onValidate?: Answer6ValidationValues;
} & React.CSSProperties>;
export default function Answer6(props: Answer6Props): React.ReactElement;
