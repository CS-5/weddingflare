import { FunctionComponent, ReactNode } from "react";

interface Props {
  name: string;
  url?: string;
  children: ReactNode;
  className?: string;
}

const Section: FunctionComponent<Props> = ({
  name,
  url,
  children,
  className,
}) => {
  const header = (
    <h1 className="pb-4 text-theme-primary text-3xl font-serif font-bold text-center">
      {name}
    </h1>
  );

  return (
    <div className={className}>
      {url ? (
        <a href={url} target="_blank" rel="noreferrer">
          {header}
        </a>
      ) : (
        header
      )}

      {children}
    </div>
  );
};

export default Section;
