import { DetailedHTMLProps, forwardRef, Ref } from "react";

interface BooleanInputProps
  extends DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  choices: {
    trueLabel: string;
    falseLabel: string;
  };
}

const BooleanInput = (
  { label, choices, ...props }: BooleanInputProps,
  ref: Ref<HTMLInputElement>,
) => {
  return (
    <div className="grid grid-cols-2 rounded-xl bg-gray-200 px-3">
      <div className="col-span-2 mx-auto mt-2 uppercase tracking-wide font-bold text-gray-500 text-xs">
        {label}
      </div>
      <div className="focus-within:bg-theme-accent checked:bg-theme-accent">
        <input
          id="trueRadio"
          className="form-radio hidden"
          type="radio"
          ref={ref}
          {...props}
          checked
        />
        <label htmlFor="trueRadio">
          <span className="uppercase font-bold text-gray-500 text-xs m-2">
            {choices.trueLabel}
          </span>
        </label>
      </div>
      <div>
        <input
          id="falseRadio"
          className="form-radio hidden"
          type="radio"
          ref={ref}
          {...props}
        />
        <label htmlFor="falseRadio">
          <span className="uppercase font-bold text-gray-500 text-xs m-2">
            {choices.falseLabel}
          </span>
        </label>
      </div>
    </div>
  );
};

export default forwardRef(BooleanInput);
