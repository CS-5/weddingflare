import { FunctionComponent } from "react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

interface Props {
  source: MDXRemoteSerializeResult;
}

const MarkdownSection: FunctionComponent<Props> = ({ source }) => {
  return <MDXRemote {...source} />;
};

export default MarkdownSection;
