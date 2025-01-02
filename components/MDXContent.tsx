import { JSX } from "react";
import { highlight } from "sugar-high";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";

function Code({ children, ...props }: React.HTMLAttributes<HTMLElement>) {
  let codeHTML = "";

  if (typeof children === "string") {
    codeHTML = highlight(children);
  }
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}

const components = {
  code: Code,
};

export default function MDXContent(
  props: JSX.IntrinsicAttributes & MDXRemoteProps
) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
