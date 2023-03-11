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
export default function InformationUpdateForm(props) {
  const {
    id: idProp,
    information,
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
    Date: "",
  };
  const [FullName, setFullName] = React.useState(initialValues.FullName);
  const [RepID, setRepID] = React.useState(initialValues.RepID);
  const [Date, setDate] = React.useState(initialValues.Date);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = informationRecord
      ? { ...initialValues, ...informationRecord }
      : initialValues;
    setFullName(cleanValues.FullName);
    setRepID(cleanValues.RepID);
    setDate(cleanValues.Date);
    setErrors({});
  };
  const [informationRecord, setInformationRecord] = React.useState(information);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Information, idProp)
        : information;
      setInformationRecord(record);
    };
    queryData();
  }, [idProp, information]);
  React.useEffect(resetStateValues, [informationRecord]);
  const validations = {
    FullName: [],
    RepID: [],
    Date: [],
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
          Date,
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
            Information.copyOf(informationRecord, (updated) => {
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
      {...getOverrideProps(overrides, "InformationUpdateForm")}
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
              Date,
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
              Date,
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
        isRequired={false}
        isReadOnly={false}
        value={Date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              FullName,
              RepID,
              Date: value,
            };
            const result = onChange(modelFields);
            value = result?.Date ?? value;
          }
          if (errors.Date?.hasError) {
            runValidationTasks("Date", value);
          }
          setDate(value);
        }}
        onBlur={() => runValidationTasks("Date", Date)}
        errorMessage={errors.Date?.errorMessage}
        hasError={errors.Date?.hasError}
        {...getOverrideProps(overrides, "Date")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || information)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || information) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
