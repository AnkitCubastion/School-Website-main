import React from "react";
import { useNavigation } from "react-router-dom";

const SubmitBtn = ({ text, onClick }) => {
  const navigation = useNavigation();
  let isSubmitting = navigation.state === "submitting";

  return (
    <> 
      <button
        type="submit"
        className="btn btn-primary btn-block"
        disabled={isSubmitting}
        onClick={onClick}
      >
        {isSubmitting ? (
          <>
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Processing...</span>
          </>
        ) : (
          text || "Submit"
        )}
      </button>
    </>
  );
};

export default SubmitBtn;
