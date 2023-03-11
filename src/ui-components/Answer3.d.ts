/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { CheckboxFieldProps, GridProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Information } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type Answer3InputValues = {
    Field1?: boolean;
    Field0?: boolean;
};
export declare type Answer3ValidationValues = {
    Field1?: ValidationFunction<boolean>;
    Field0?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Answer3OverridesProps = {
    Answer3Grid?: PrimitiveOverrideProps<GridProps>;
    Field1?: PrimitiveOverrideProps<CheckboxFieldProps>;
    Field0?: PrimitiveOverrideProps<CheckboxFieldProps>;
} & EscapeHatchProps;
export declare type Answer3Props = React.PropsWithChildren<{
    overrides?: Answer3OverridesProps | undefined | null;
} & {
    id?: string;
    information?: Information;
    onSubmit?: (fields: Answer3InputValues) => Answer3InputValues;
    onSuccess?: (fields: Answer3InputValues) => void;
    onError?: (fields: Answer3InputValues, errorMessage: string) => void;
    onChange?: (fields: Answer3InputValues) => Answer3InputValues;
    onValidate?: Answer3ValidationValues;
} & React.CSSProperties>;
export default function Answer3(props: Answer3Props): React.ReactElement;
