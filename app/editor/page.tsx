import { Loader2 } from "lucide-react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Toaster } from "sonner";

const PlateEditor = dynamic(() => import("@/components/editor/plate-editor"));

export default function Page() {
  return (
    <div className="h-screen w-full">
      <meta name="description" content="Blog Editor - Qalam" />
      <Suspense
        fallback={
          <div className="flex h-screen items-center justify-center">
            <Loader2 className="animate-spin text-primary" />
            <div className="sr-only">Loading</div>
          </div>
        }
      >
        <PlateEditor />
        <Toaster />
      </Suspense>
    </div>
  );
}
