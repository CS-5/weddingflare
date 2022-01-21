import { FunctionComponent } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import info from "../../../public/info.md";

const MarkdownSection: FunctionComponent = () => {
  return <ReactMarkdown children={info} remarkPlugins={[remarkGfm]} />;
};

export default MarkdownSection;
