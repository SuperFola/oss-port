import React, {
  FunctionComponent,
  InputHTMLAttributes,
  LabelHTMLAttributes,
} from "react";
import cx from "classnames";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  labelProps?: LabelHTMLAttributes<HTMLLabelElement>;
};

const Checkbox: FunctionComponent<Props> = ({
  children,
  labelProps,
  ...otherProps
}) => {
  return (
    <label
      {...labelProps}
      className={cx("block cursor-pointer", labelProps?.className)}
    >
      <input
        type="checkbox"
        {...otherProps}
        className={cx("input", otherProps.className)}
      />
      <span>{children}</span>
    </label>
  );
};

export default Checkbox;
