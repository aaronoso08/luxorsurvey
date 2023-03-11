/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { INFO } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function Answerfullname(props) {
  const {
    id: idProp,
    iNFO,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    LastName: "",
  };
  const [LastName, setLastName] = React.useState(initialValues.LastName);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = iNFORecord
      ? { ...initialValues, ...iNFORecord }
      : initialValues;
    setLastName(cleanValues.LastName);
    setErrors({});
  };
  const [iNFORecord, setINFORecord] = React.useState(iNFO);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp ? await DataStore.query(INFO, idProp) : iNFO;
      setINFORecord(record);
    };
    queryData();
  }, [idProp, iNFO]);
  React.useEffect(resetStateValues, [iNFORecord]);
  const validations = {
    LastName: [],
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
          LastName,
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
          await DataStore.save(
            INFO.copyOf(iNFORecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "Answerfullname")}
      {...rest}
    >
      <TextField
        label="Full name"
        isRequired={false}
        isReadOnly={false}
        value={LastName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              LastName: value,
            };
            const result = onChange(modelFields);
            value = result?.LastName ?? value;
          }
          if (errors.LastName?.hasError) {
            runValidationTasks("LastName", value);
          }
          setLastName(value);
        }}
        onBlur={() => runValidationTasks("LastName", LastName)}
        errorMessage={errors.LastName?.errorMessage}
        hasError={errors.LastName?.hasError}
        {...getOverrideProps(overrides, "LastName")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || iNFO) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
