import { FunctionComponent } from "react";

interface Props {
  name: string;
  tagline?: string;
}

const Subheader: FunctionComponent<Props> = ({ name, tagline }) => {
  return (
    <div className="flex mb-2">
      <h2 className="text-theme-accent text-2xl font-bold pr-4">{name}</h2>
      {tagline && (
        <div className="relative w-full">
          <div className="inline-block align-middle text-base italic leading-tight">
            {tagline}
          </div>
        </div>
      )}
    </div>
  );
};

export default Subheader;
