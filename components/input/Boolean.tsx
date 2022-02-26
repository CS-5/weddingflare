import { DetailedHTMLProps, forwardRef } from "react";
import { useFormContext } from "react-hook-form";

interface BooleanInputProps {
  choices: {
    trueLabel: string;
    falseLabel: string;
  };
  name: string;
  required?: boolean;
}

export const BooleanInput = ({
  choices,
  name,
  required,
}: BooleanInputProps) => {
  const { register } = useFormContext();

  return (
    <div className="grid grid-cols-2 bg-gray-200 rounded-xl overflow-hidden h-16 uppercase font-bold text-gray-500 text-xs">
      <BooleanChoice
        id="trueRadio"
        label={choices.trueLabel}
        required={required}
        {...register(name)}
        value="true"
      />
      <BooleanChoice
        id="falseRadio"
        required={required}
        label={choices.falseLabel}
        {...register(name)}
        value="false"
      />
    </div>
  );
};

interface BooleanChoiceProps
  extends DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  id: string;
  value?: string;
}

const BooleanChoice = forwardRef<HTMLInputElement, BooleanChoiceProps>(
  function BooleanChoice({ label, id, ...props }, ref) {
    return (
      <>
        <input
          id={id}
          className="form-radio hidden"
          type="radio"
          ref={ref}
          {...props}
        />
        <label htmlFor={id} className="h-full w-full py-2 px-6">
          <span className="block text-center my-2 mx-auto">{label}</span>
        </label>
      </>
    );
  }
);
