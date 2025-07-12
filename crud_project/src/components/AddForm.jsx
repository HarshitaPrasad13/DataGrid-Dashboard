import React, { useEffect }from "react";
import { useForm } from "react-hook-form";
import axios from "../api/axiosInstance";
import fieldLabels from "../FieldLabels";
import "./AddForm.css";

const AddForm = ({ onClose, defaultValues={},onSave }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  useEffect(() => {
     if (Object.keys(defaultValues).length > 0) {
    reset(defaultValues);
  }
}, [defaultValues, reset]);

  const onSubmit = async (data) => {
      await onSave(data);
      reset();
      onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <form onSubmit={handleSubmit(onSubmit)} className="form-wrapper">
          {Object.entries(fieldLabels).map(([key, config]) => (
            <div key={key} className="form-group">
              <label>{config.label}</label>
              <input
                {...register(key, {
                  required: config.required
                    ? `${config.label} is required`
                    : false,
                })}
              />
              {errors[key] && (
                <span className="error-msg">{errors[key].message}</span>
              )}
            </div>
          ))}
          <div className="form-buttons">
            <button className="submit-add" type="submit">
              Submit
            </button>
            <button className="cancel-add" type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddForm;
