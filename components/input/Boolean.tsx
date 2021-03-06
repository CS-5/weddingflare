import { DetailedHTMLProps, forwardRef } from "react";
import { useFormContext } from "react-hook-form";

interface BooleanInputProps<TChoices extends string> {
  choices: {
    [value in TChoices]: string;
  };
  name: string;
  required?: boolean;
}

export const BooleanInput = <TChoices extends string>({
  choices,
  name,
  required,
}: BooleanInputProps<TChoices>) => {
  const { register } = useFormContext();

  const options = Object.keys(choices) as TChoices[];

  return (
    <div className="grid grid-cols-2 bg-gray-200 rounded-xl overflow-hidden h-16 uppercase font-bold text-gray-500 text-xs">
      {options.map((optionName) => {
        return (
          <BooleanChoice
            id={optionName}
            key={optionName}
            label={choices[optionName]}
            required={required}
            {...register(name)}
            value={optionName}
          />
        );
      })}
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
      <div className="relative">
        <input
          id={id}
          className="form-radio -z-10 absolute"
          type="radio"
          ref={ref}
          {...props}
        />
        <label htmlFor={id} className="h-full w-full block py-3 md:py-4">
          <span className="block text-center text-sm mx-6 md:text-xs">
            {label}
          </span>
        </label>
      </div>
    );
  }
);
