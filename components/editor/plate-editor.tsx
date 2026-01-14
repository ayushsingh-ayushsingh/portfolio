"use client";

import { Plate, usePlateEditor } from "platejs/react";
import { EditorKit } from "@/components/editor/editor-kit";
import { Editor, EditorContainer } from "@/components/ui/editor";
import { useEffect } from "react";
import { toast } from "sonner";
import { useState } from "react";

import { data as PlaceholderData } from "./data";
import { normalizeNodeId, Value } from "platejs";

export default function PlateEditor() {
  const [currentVal, setCurrentVal] = useState(PlaceholderData as Value);

  const editor = usePlateEditor({
    plugins: EditorKit,
    value: normalizeNodeId(currentVal as Value),
  });

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === "a") {
        event.preventDefault();
        toast.success("Selected all text");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [editor]);

  return (
    <Plate
      editor={editor}
      onValueChange={() => {
        setCurrentVal(editor.children);
      }}
    >
      <EditorContainer>
        <div id="plate-editor">
          <div className="block md:hidden">
            <Editor variant="none" className="px-4" spellCheck="false" />
          </div>
          <div className="md:block hidden">
            <Editor variant="default" spellCheck="false" />
          </div>
        </div>
        {/* <div className="max-w-4xl w-full text-ellipsis">
            Compressed: {compressedVal}
          </div> */}
        {/* <pre className="py-8">
          {JSON.stringify(
            JSON.parse(decompressFromEncodedURIComponent(compressedVal)),
            null,
            4
          )}
        </pre> */}
      </EditorContainer>
    </Plate>
  );
}
