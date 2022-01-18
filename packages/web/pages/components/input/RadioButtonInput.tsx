import { DetailedHTMLProps, forwardRef, Ref } from "react";

interface RadioButtonProps
  extends DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
}

const RadioButtonInput = (
  { label, ...props }: RadioButtonProps,
  ref: Ref<HTMLInputElement>,
) => {
  return (
    <div className="flex flex-col">
      <label className="">
        <input className="form-radio" type="radio" ref={ref} {...props} />
        <span className="uppercase font-bold text-gray-500 text-xs m-2">
          {label}
        </span>
      </label>
    </div>
  );
};

export default forwardRef(RadioButtonInput);
