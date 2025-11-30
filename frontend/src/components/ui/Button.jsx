import React from "react";
import clsx from "clsx";

const Button = ({ label, onClick, type = "button", variant = "default", disabled }) => {
  const baseStyle =
    "text-white font-medium px-4 py-2 rounded-md transition duration-200";

  const styles = {
    save: "bg-[#138808] hover:bg-[#0f6d06]",
    edit: "bg-[#e4d00a] text-black hover:bg-[#cbb508]",
    cancel: "bg-[#FF0000] hover:bg-[#cc0000]",
    default: "bg-gray-500 hover:bg-gray-600",
  };

  return (
    <button
      className={clsx(baseStyle, styles[variant])}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
//usage examples
//<Button label="Save" variant="save" />
//<Button label="Edit" variant="edit" />
//<Button label="Cancel" variant="cancel" />
