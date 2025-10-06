import { useState } from "react";

const useInputField = (defaultValue) => {
  const [FieldValue, setFieldValue] = useState(defaultValue);   
    const handleFieldOnChange = (event) => {
        setFieldValue(event.target.value);
    }
     return [FieldValue, handleFieldOnChange, setFieldValue];
}

export default useInputField;