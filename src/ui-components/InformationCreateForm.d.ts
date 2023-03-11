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
export declare type InformationCreateFormInputValues = {
    FullName?: string;
    RepID?: string;
    Field0?: string;
};
export declare type InformationCreateFormValidationValues = {
    FullName?: ValidationFunction<string>;
    RepID?: ValidationFunction<string>;
    Field0?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type InformationCreateFormOverridesProps = {
    InformationCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    FullName?: PrimitiveOverrideProps<TextFieldProps>;
    RepID?: PrimitiveOverrideProps<TextFieldProps>;
    Field0?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type InformationCreateFormProps = React.PropsWithChildren<{
    overrides?: InformationCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: InformationCreateFormInputValues) => InformationCreateFormInputValues;
    onSuccess?: (fields: InformationCreateFormInputValues) => void;
    onError?: (fields: InformationCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: InformationCreateFormInputValues) => InformationCreateFormInputValues;
    onValidate?: InformationCreateFormValidationValues;
} & React.CSSProperties>;
export default function InformationCreateForm(props: InformationCreateFormProps): React.ReactElement;
