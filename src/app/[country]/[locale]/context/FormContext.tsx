"use client"
import { createContext, useContext, useState } from 'react';

interface FormData {
  [key: string]: any;
}

interface FormContextProps {
  formData: FormData;
  setFormData: (data: FormData) => void;
  submitForm: (formData: FormData) => Promise<void>;
}

const FormContext = createContext<FormContextProps | undefined>(undefined);

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [formData, setFormData] = useState<FormData>({});

  const submitForm = async (data: FormData) => {
    setFormData(data); // Update central state

    // Submit data to API
    await fetch('/api/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  };

  return (
    <FormContext.Provider value={{ formData, setFormData, submitForm }}>
      {children}
    </FormContext.Provider>
  );
};

export const useForm = () => {
  const context = useContext(FormContext);
  if (!context) throw new Error('useForm must be used within a FormProvider');
  return context;
};
