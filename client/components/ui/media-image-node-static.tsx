import type { TCaptionProps, TImageElement, TResizableProps } from "platejs";
import type { SlateElementProps } from "platejs/static";

import { NodeApi } from "platejs";
import { SlateElement } from "platejs/static";

import { cn } from "@/lib/utils";
import Image from "next/image";
// import { Lens } from "@/components/ui/lens";

export function ImageElementStatic(
  props: SlateElementProps<TImageElement & TCaptionProps & TResizableProps>
) {
  const { align = "center", caption, url, width } = props.element;

  return (
    <SlateElement {...props} className="py-2.5 my-4">
      <figure className="group relative m-0 inline-block" style={{ width }}>
        <div
          className="relative min-w-23 max-w-full"
          style={{ textAlign: align }}
        >
          {/* <Lens
            zoomFactor={2}
            lensSize={150}
            isStatic={false}
            ariaLabel="Image Zoom Area"
          > */}
          <div className="border p-1 rounded-xl">
            <Image
              className={cn(
                "w-full max-w-full cursor-default object-cover",
                "rounded-[9]"
              )}
              alt={
                (props.attributes as any).alt ||
                (caption && NodeApi.string(caption[0])) ||
                "Image attached"
              }
              src={url}
              width={1000}
              height={1000}
            />
          </div>
          {/* </Lens> */}
          {caption && (
            <figcaption className="mx-auto mt-2 h-6 max-w-full">
              {NodeApi.string(caption[0])}
            </figcaption>
          )}
        </div>
      </figure>
      {props.children}
    </SlateElement>
  );
}
