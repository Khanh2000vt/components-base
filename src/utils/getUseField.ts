// import React from 'react';
import {useField} from 'formik';
import {useRef} from 'react';

interface IHelper {
  setValue: (value: any, shouldValidate?: boolean | undefined) => void;
  setTouched: (value: boolean, shouldValidate?: boolean | undefined) => void;
  setError: (value: string | undefined) => void;
}

interface useFieldProps extends IHelper {
  helper: IHelper | null;
}

const initHelper = {
  setValue: () => {},
  setTouched: () => {},
  setError: () => {},
};

const initRef = {
  ...initHelper,
  helper: null,
};

export const getUseField = (name: string) => {
  const [field, meta, helper] = useField(name);

  const latestRef = useRef<useFieldProps>(initRef);

  // On every render save newest helpers to latestRef
  latestRef.current.setValue = helper.setValue;
  latestRef.current.setTouched = helper.setTouched;
  latestRef.current.setError = helper.setError;

  // On the first render create new function which will never change
  // but call newest helper function
  if (!latestRef.current.helper) {
    latestRef.current.helper = {
      setValue: (...args) => latestRef.current.setValue(...args),
      setTouched: (...args) => latestRef.current.setTouched(...args),
      setError: (...args) => latestRef.current.setError(...args),
    };
  }

  return {...field, ...meta, ...latestRef.current.helper};
};
