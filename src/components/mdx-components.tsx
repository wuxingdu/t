import type { ComponentPropsWithoutRef } from "react";

export const mdxComponents = {
  h2: (props: ComponentPropsWithoutRef<"h2">) => <h2 className="mdx-h2" {...props} />,
  h3: (props: ComponentPropsWithoutRef<"h3">) => <h3 className="mdx-h3" {...props} />,
  p: (props: ComponentPropsWithoutRef<"p">) => <p className="mdx-p" {...props} />,
  ul: (props: ComponentPropsWithoutRef<"ul">) => <ul className="mdx-list" {...props} />,
  blockquote: (props: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote className="mdx-quote" {...props} />
  ),
  img: (props: ComponentPropsWithoutRef<"img">) => <img className="mdx-image" {...props} />,
};
