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
    <h3 className="dark:text-shadow-md pb-4 text-theme-primary text-3xl font-theme-header font-bold text-center">
      {name}
    </h3>
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
