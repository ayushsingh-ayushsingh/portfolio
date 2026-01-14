import { createSlateEditor } from "platejs";
import { PlateStatic } from "platejs/static";
import { BaseEditorKit } from "@/components/editor/editor-base-kit";

const value = [
  {
    children: [{ text: "Welcome to the Plate Playground!" }],
    type: "h1",
  },
  {
    children: [
      { text: "Experience a modern rich-text editor built with " },
      { children: [{ text: "Slate" }], type: "a", url: "https://slatejs.org" },
      { text: " and " },
      { children: [{ text: "React" }], type: "a", url: "https://reactjs.org" },
      {
        text: ". This playground showcases just a part of Plate's capabilities. ",
      },
      {
        children: [{ text: "Explore the documentation" }],
        type: "a",
        url: "/docs",
      },
      { text: " to discover more." },
    ],
    type: "p",
  },
  // Core Features Section (Combined)
  {
    children: [{ text: "Rich Content Editing" }],
    type: "h2",
  },
  {
    children: [
      { text: "Structure your content with " },
      {
        children: [{ text: "headings" }],
        type: "a",
        url: "/docs/heading",
      },
      { text: ", " },
      {
        children: [{ text: "lists" }],
        type: "a",
        url: "/docs/list",
      },
      { text: ", and " },
      {
        children: [{ text: "quotes" }],
        type: "a",
        url: "/docs/blockquote",
      },
      { text: ". Apply " },
      {
        children: [{ text: "marks" }],
        type: "a",
        url: "/docs/basic-marks",
      },
      { text: " like " },
      { bold: true, text: "bold" },
      { text: ", " },
      { italic: true, text: "italic" },
      { text: ", " },
      { text: "underline", underline: true },
      { text: ", " },
      { strikethrough: true, text: "strikethrough" },
      { text: ", and " },
      { code: true, text: "code" },
      { text: ". Use " },
      {
        children: [{ text: "autoformatting" }],
        type: "a",
        url: "/docs/autoformat",
      },
      { text: " for " },
      {
        children: [{ text: "Markdown" }],
        type: "a",
        url: "/docs/markdown",
      },
      { text: "-like shortcuts (e.g., " },
      { kbd: true, text: "* " },
      { text: " for lists, " },
      { kbd: true, text: "# " },
      { text: " for H1)." },
    ],
    type: "p",
  },
  {
    children: [
      {
        children: [
          {
            text: "Blockquotes are great for highlighting important information.",
          },
        ],
        type: "p",
      },
    ],
    type: "blockquote",
  },
  {
    children: [
      {
        children: [{ text: "console.log('Code blocks are supported!');" }],
        type: "code_line",
      },
    ],
    lang: "javascript",
    type: "code_block",
  },
  {
    children: [
      { text: "Create " },
      {
        children: [{ text: "links" }],
        type: "a",
        url: "/docs/link",
      },
      { text: ", " },
      {
        children: [{ text: "@mention" }],
        type: "a",
        url: "/docs/mention",
      },
      { text: " users like " },
      { children: [{ text: "" }], type: "mention", value: "Alice" },
      { text: ", or insert " },
      {
        children: [{ text: "emojis" }],
        type: "a",
        url: "/docs/emoji",
      },
      { text: " ✨. Use the " },
      {
        children: [{ text: "slash command" }],
        type: "a",
        url: "/docs/slash-command",
      },
      { text: " (/) for quick access to elements." },
    ],
    type: "p",
  },
  // Table Section
  {
    children: [{ text: "How Plate Compares" }],
    type: "h3",
  },
  {
    children: [
      {
        text: "Plate offers many features out-of-the-box as free, open-source plugins.",
      },
    ],
    type: "p",
  },
  {
    children: [
      {
        children: [
          {
            children: [
              { children: [{ bold: true, text: "Feature" }], type: "p" },
            ],
            type: "th",
          },
          {
            children: [
              {
                children: [{ bold: true, text: "Plate (Free & OSS)" }],
                type: "p",
              },
            ],
            type: "th",
          },
          {
            children: [
              { children: [{ bold: true, text: "Tiptap" }], type: "p" },
            ],
            type: "th",
          },
        ],
        type: "tr",
      },
      {
        children: [
          {
            children: [{ children: [{ text: "AI" }], type: "p" }],
            type: "td",
          },
          {
            children: [
              {
                attributes: { align: "center" },
                children: [{ text: "✅" }],
                type: "p",
              },
            ],
            type: "td",
          },
          {
            children: [{ children: [{ text: "Paid Extension" }], type: "p" }],
            type: "td",
          },
        ],
        type: "tr",
      },
      {
        children: [
          {
            children: [{ children: [{ text: "Comments" }], type: "p" }],
            type: "td",
          },
          {
            children: [
              {
                attributes: { align: "center" },
                children: [{ text: "✅" }],
                type: "p",
              },
            ],
            type: "td",
          },
          {
            children: [{ children: [{ text: "Paid Extension" }], type: "p" }],
            type: "td",
          },
        ],
        type: "tr",
      },
      {
        children: [
          {
            children: [{ children: [{ text: "Suggestions" }], type: "p" }],
            type: "td",
          },
          {
            children: [
              {
                attributes: { align: "center" },
                children: [{ text: "✅" }],
                type: "p",
              },
            ],
            type: "td",
          },
          {
            children: [
              { children: [{ text: "Paid (Comments Pro)" }], type: "p" },
            ],
            type: "td",
          },
        ],
        type: "tr",
      },
      {
        children: [
          {
            children: [{ children: [{ text: "Emoji Picker" }], type: "p" }],
            type: "td",
          },
          {
            children: [
              {
                attributes: { align: "center" },
                children: [{ text: "✅" }],
                type: "p",
              },
            ],
            type: "td",
          },
          {
            children: [{ children: [{ text: "Paid Extension" }], type: "p" }],
            type: "td",
          },
        ],
        type: "tr",
      },
      {
        children: [
          {
            children: [
              { children: [{ text: "Table of Contents" }], type: "p" },
            ],
            type: "td",
          },
          {
            children: [
              {
                attributes: { align: "center" },
                children: [{ text: "✅" }],
                type: "p",
              },
            ],
            type: "td",
          },
          {
            children: [{ children: [{ text: "Paid Extension" }], type: "p" }],
            type: "td",
          },
        ],
        type: "tr",
      },
      {
        children: [
          {
            children: [{ children: [{ text: "Drag Handle" }], type: "p" }],
            type: "td",
          },
          {
            children: [
              {
                attributes: { align: "center" },
                children: [{ text: "✅" }],
                type: "p",
              },
            ],
            type: "td",
          },
          {
            children: [{ children: [{ text: "Paid Extension" }], type: "p" }],
            type: "td",
          },
        ],
        type: "tr",
      },
      {
        children: [
          {
            children: [
              { children: [{ text: "Collaboration (Yjs)" }], type: "p" },
            ],
            type: "td",
          },
          {
            children: [
              {
                attributes: { align: "center" },
                children: [{ text: "✅" }],
                type: "p",
              },
            ],
            type: "td",
          },
          {
            children: [
              { children: [{ text: "Hocuspocus (OSS/Paid)" }], type: "p" },
            ],
            type: "td",
          },
        ],
        type: "tr",
      },
    ],
    type: "table",
  },
  // Media Section
  {
    children: [{ text: "Images and Media" }],
    type: "h3",
  },
  {
    children: [
      {
        text: "Embed rich media like images directly in your content. Supports ",
      },
      {
        children: [{ text: "Media uploads" }],
        type: "a",
        url: "/docs/media",
      },
      {
        text: " and ",
      },
      {
        children: [{ text: "drag & drop" }],
        type: "a",
        url: "/docs/dnd",
      },
      {
        text: " for a smooth experience.",
      },
    ],
    type: "p",
  },
  {
    attributes: { align: "center" },
    caption: [
      {
        children: [{ text: "Images with captions provide context." }],
        type: "p",
      },
    ],
    children: [{ text: "" }],
    type: "img",
    url: "/mpr.png",
    width: "80%",
    align: "center",
  },
  {
    children: [{ text: "" }],
    isUpload: true,
    name: "sample.pdf",
    type: "file",
    url: "https://s26.q4cdn.com/900411403/files/doc_downloads/test.pdf",
  },
  {
    children: [{ text: "" }],
    type: "audio",
    url: "https://samplelib.com/lib/preview/mp3/sample-3s.mp3",
  },
  {
    children: [{ text: "Table of Contents" }],
    type: "h3",
  },
  {
    children: [{ text: "" }],
    type: "toc",
  },
  {
    children: [{ text: "" }],
    type: "p",
  },
];

const editor = createSlateEditor({
  plugins: BaseEditorKit,
  value,
});

export default function MyStaticPage() {
  return (
    <article className="max-w-4xl mx-auto p-4 saturate-200 text-foreground/75">
      <PlateStatic editor={editor} />
    </article>
  );
}
