/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Information } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function InformationCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    FullName: "",
    RepID: "",
    Field0: "",
  };
  const [FullName, setFullName] = React.useState(initialValues.FullName);
  const [RepID, setRepID] = React.useState(initialValues.RepID);
  const [Field0, setField0] = React.useState(initialValues.Field0);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setFullName(initialValues.FullName);
    setRepID(initialValues.RepID);
    setField0(initialValues.Field0);
    setErrors({});
  };
  const validations = {
    FullName: [],
    RepID: [],
    Field0: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          FullName,
          RepID,
          Field0,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          const modelFieldsToSave = {
            FullName: modelFields.FullName,
            RepID: modelFields.RepID,
          };
          await DataStore.save(new Information(modelFieldsToSave));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "InformationCreateForm")}
      {...rest}
    >
      <TextField
        label="Full name"
        isRequired={false}
        isReadOnly={false}
        value={FullName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              FullName: value,
              RepID,
              Field0,
            };
            const result = onChange(modelFields);
            value = result?.FullName ?? value;
          }
          if (errors.FullName?.hasError) {
            runValidationTasks("FullName", value);
          }
          setFullName(value);
        }}
        onBlur={() => runValidationTasks("FullName", FullName)}
        errorMessage={errors.FullName?.errorMessage}
        hasError={errors.FullName?.hasError}
        {...getOverrideProps(overrides, "FullName")}
      ></TextField>
      <TextField
        label="Rep id"
        isRequired={false}
        isReadOnly={false}
        value={RepID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              FullName,
              RepID: value,
              Field0,
            };
            const result = onChange(modelFields);
            value = result?.RepID ?? value;
          }
          if (errors.RepID?.hasError) {
            runValidationTasks("RepID", value);
          }
          setRepID(value);
        }}
        onBlur={() => runValidationTasks("RepID", RepID)}
        errorMessage={errors.RepID?.errorMessage}
        hasError={errors.RepID?.hasError}
        {...getOverrideProps(overrides, "RepID")}
      ></TextField>
      <TextField
        label="Date"
        type="date"
        value={Field0}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              FullName,
              RepID,
              Field0: value,
            };
            const result = onChange(modelFields);
            value = result?.Field0 ?? value;
          }
          if (errors.Field0?.hasError) {
            runValidationTasks("Field0", value);
          }
          setField0(value);
        }}
        onBlur={() => runValidationTasks("Field0", Field0)}
        errorMessage={errors.Field0?.errorMessage}
        hasError={errors.Field0?.hasError}
        {...getOverrideProps(overrides, "Field0")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
