/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Answers } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function AnswersUpdateForm(props) {
  const {
    id: idProp,
    answers,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    no: undefined,
    yes: "",
  };
  const [no, setNo] = React.useState(initialValues.no);
  const [yes, setYes] = React.useState(initialValues.yes);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = answersRecord
      ? { ...initialValues, ...answersRecord }
      : initialValues;
    setNo(cleanValues.no);
    setYes(cleanValues.yes);
    setErrors({});
  };
  const [answersRecord, setAnswersRecord] = React.useState(answers);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp ? await DataStore.query(Answers, idProp) : answers;
      setAnswersRecord(record);
    };
    queryData();
  }, [idProp, answers]);
  React.useEffect(resetStateValues, [answersRecord]);
  const validations = {
    no: [],
    yes: [],
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
          no,
          yes,
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
            Answers.copyOf(answersRecord, (updated) => {
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
      {...getOverrideProps(overrides, "AnswersUpdateForm")}
      {...rest}
    >
      <SelectField
        label="No"
        placeholder="Please select an option"
        isDisabled={false}
        value={no}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              no: value,
              yes,
            };
            const result = onChange(modelFields);
            value = result?.no ?? value;
          }
          if (errors.no?.hasError) {
            runValidationTasks("no", value);
          }
          setNo(value);
        }}
        onBlur={() => runValidationTasks("no", no)}
        errorMessage={errors.no?.errorMessage}
        hasError={errors.no?.hasError}
        {...getOverrideProps(overrides, "no")}
      >
        <option
          children="Value"
          value="VALUE"
          {...getOverrideProps(overrides, "nooption0")}
        ></option>
      </SelectField>
      <TextField
        label="Yes"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={yes}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              no,
              yes: value,
            };
            const result = onChange(modelFields);
            value = result?.yes ?? value;
          }
          if (errors.yes?.hasError) {
            runValidationTasks("yes", value);
          }
          setYes(value);
        }}
        onBlur={() => runValidationTasks("yes", yes)}
        errorMessage={errors.yes?.errorMessage}
        hasError={errors.yes?.hasError}
        {...getOverrideProps(overrides, "yes")}
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
          isDisabled={!(idProp || answers)}
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
              !(idProp || answers) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
