import * as React from "react";

import type { SlateElementProps } from "platejs/static";

import { type VariantProps, cva } from "class-variance-authority";
import { SlateElement } from "platejs/static";

const headingVariants = cva("relative mb-1.5", {
  variants: {
    variant: {
      h1: "mt-[1.6em] pb-1 font-semibold font-heading text-4xl text-primary",
      h2: "mt-[1.4em] pb-px font-heading font-semibold text-2xl tracking-tight text-primary",
      h3: "mt-[1em] pb-px font-heading font-semibold text-xl tracking-tight text-primary",
      h4: "mt-[0.75em] font-heading font-semibold text-lg tracking-tight text-primary",
      h5: "mt-[0.75em] font-semibold text-lg tracking-tight text-primary",
      h6: "mt-[0.75em] font-semibold text-base tracking-tight text-primary",
    },
  },
});

export function HeadingElementStatic({
  variant = "h1",
  ...props
}: SlateElementProps & VariantProps<typeof headingVariants>) {
  return (
    <SlateElement
      as={variant!}
      className={headingVariants({ variant })}
      {...props}
    >
      <div className="heading">{props.children}</div>
    </SlateElement>
  );
}

export function H1ElementStatic(props: SlateElementProps) {
  return <HeadingElementStatic variant="h1" {...props} />;
}

export function H2ElementStatic(
  props: React.ComponentProps<typeof HeadingElementStatic>
) {
  return <HeadingElementStatic variant="h2" {...props} />;
}

export function H3ElementStatic(
  props: React.ComponentProps<typeof HeadingElementStatic>
) {
  return <HeadingElementStatic variant="h3" {...props} />;
}

export function H4ElementStatic(
  props: React.ComponentProps<typeof HeadingElementStatic>
) {
  return <HeadingElementStatic variant="h4" {...props} />;
}

export function H5ElementStatic(
  props: React.ComponentProps<typeof HeadingElementStatic>
) {
  return <HeadingElementStatic variant="h5" {...props} />;
}

export function H6ElementStatic(
  props: React.ComponentProps<typeof HeadingElementStatic>
) {
  return <HeadingElementStatic variant="h6" {...props} />;
}
