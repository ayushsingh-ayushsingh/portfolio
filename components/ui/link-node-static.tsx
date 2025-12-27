import type { TLinkElement } from "platejs";
import type { SlateElementProps } from "platejs/static";

import { getLinkAttributes } from "@platejs/link";
import { SlateElement } from "platejs/static";

export function LinkElementStatic(props: SlateElementProps<TLinkElement>) {
  return (
    <SlateElement
      {...props}
      as="a"
      className="font-medium text-foreground/75 underline decoration-foreground/50 hover:decoration-background hover:text-foreground underline-offset-5 transition-all duration-300"
      attributes={{
        ...props.attributes,
        ...getLinkAttributes(props.editor, props.element),
        target: "_blank",
      }}
    >
      {props.children}
    </SlateElement>
  );
}
