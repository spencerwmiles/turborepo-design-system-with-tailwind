import * as React from "react";

export interface ButtonProps {
  children: React.ReactNode;
}

export function Button(props: ButtonProps) {
  return (
    <button className="ui-bg-blue-500 ui-text-white ui-px-5 ui-py-1 ui-rounded hover:ui-bg-blue-600">
      {props.children}
    </button>
  );
}

Button.displayName = "Button";
