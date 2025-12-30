import type { TFileElement } from "platejs";
import type { SlateElementProps } from "platejs/static";

import { FileUp } from "lucide-react";
import { SlateElement } from "platejs/static";

export function FileElementStatic(props: SlateElementProps<TFileElement>) {
  const { name, url } = props.element;

  return (
    <SlateElement className="my-px rounded-sm" {...props}>
      <a
        className="group relative m-0 flex cursor-pointer items-center p-0.5 border rounded-full"
        contentEditable={false}
        download={name}
        href={url}
        rel="noopener noreferrer"
        role="button"
        target="_blank"
      >
        <div className="flex items-center gap-1 py-2.5 px-4 border w-full rounded-full hover:bg-muted">
          <FileUp className="size-5 mr-1" />
          <div>{name}</div>
        </div>
      </a>
      {props.children}
    </SlateElement>
  );
}
