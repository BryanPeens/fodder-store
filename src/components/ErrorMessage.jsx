// ErrorMessage.js

import React from "react";

const ErrorMessage = ({ message }) => (
  <div className="bg-red-200 text-red-800 p-4 rounded-md mb-4">
    <p className="text-sm">{message}</p>
  </div>
);

export default ErrorMessage;
