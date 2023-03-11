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
export declare type Answer2InputValues = {
    Field1?: boolean;
    Field0?: boolean;
};
export declare type Answer2ValidationValues = {
    Field1?: ValidationFunction<boolean>;
    Field0?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Answer2OverridesProps = {
    Answer2Grid?: PrimitiveOverrideProps<GridProps>;
    Field1?: PrimitiveOverrideProps<CheckboxFieldProps>;
    Field0?: PrimitiveOverrideProps<CheckboxFieldProps>;
} & EscapeHatchProps;
export declare type Answer2Props = React.PropsWithChildren<{
    overrides?: Answer2OverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: Answer2InputValues) => Answer2InputValues;
    onSuccess?: (fields: Answer2InputValues) => void;
    onError?: (fields: Answer2InputValues, errorMessage: string) => void;
    onChange?: (fields: Answer2InputValues) => Answer2InputValues;
    onValidate?: Answer2ValidationValues;
} & React.CSSProperties>;
export default function Answer2(props: Answer2Props): React.ReactElement;
