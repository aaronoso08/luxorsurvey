/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Information } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type InformationUpdateFormInputValues = {
    FullName?: string;
    RepID?: string;
    Date?: string;
};
export declare type InformationUpdateFormValidationValues = {
    FullName?: ValidationFunction<string>;
    RepID?: ValidationFunction<string>;
    Date?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type InformationUpdateFormOverridesProps = {
    InformationUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    FullName?: PrimitiveOverrideProps<TextFieldProps>;
    RepID?: PrimitiveOverrideProps<TextFieldProps>;
    Date?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type InformationUpdateFormProps = React.PropsWithChildren<{
    overrides?: InformationUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    information?: Information;
    onSubmit?: (fields: InformationUpdateFormInputValues) => InformationUpdateFormInputValues;
    onSuccess?: (fields: InformationUpdateFormInputValues) => void;
    onError?: (fields: InformationUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: InformationUpdateFormInputValues) => InformationUpdateFormInputValues;
    onValidate?: InformationUpdateFormValidationValues;
} & React.CSSProperties>;
export default function InformationUpdateForm(props: InformationUpdateFormProps): React.ReactElement;
