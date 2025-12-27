import { Code2Icon, Globe, Mail, MapPin, Mars, Phone } from "lucide-react";

export function AboutPortfolioPage() {
  return (
    <div className="max-w-4xl mx-auto w-full border-x gap-1 px-4">
      <div className="max-w-4xl mx-auto w-full grid md:grid-cols-2 border-x p-4 gap-1">
        <div className="flex items-center p-2">
          <div className="border p-0.5 rounded-lg">
            <div className="border p-0.5 rounded-md bg-accent">
              <Code2Icon size={18} className="text-muted-foreground" />
            </div>
          </div>
          <div className="px-3">AI ready Full-Stack Developer.</div>
        </div>
        <div className="flex items-center p-2">
          <div className="border p-0.5 rounded-lg">
            <div className="border p-0.5 rounded-md bg-accent">
              <MapPin size={18} className="text-muted-foreground" />
            </div>
          </div>
          <div className="px-3">Bhopal, Madhya Pradesh, India</div>
        </div>
        <div className="flex items-center p-2">
          <div className="border p-0.5 rounded-lg">
            <div className="border p-0.5 rounded-md bg-accent">
              <Globe size={18} className="text-muted-foreground" />
            </div>
          </div>
          <div className="px-3">ayushsingh.dev</div>
        </div>
        <div className="flex items-center p-2">
          <div className="border p-0.5 rounded-lg">
            <div className="border p-0.5 rounded-md bg-accent">
              <Phone size={18} className="text-muted-foreground" />
            </div>
          </div>
          <div className="px-3">+91 93011-27004</div>
        </div>
        <div className="flex items-center p-2">
          <div className="border p-0.5 rounded-lg">
            <div className="border p-0.5 rounded-md bg-accent">
              <Mail size={18} className="text-muted-foreground" />
            </div>
          </div>
          <div className="px-3">ayushpno@gmail.com</div>
        </div>
        <div className="flex items-center p-2">
          <div className="border p-0.5 rounded-lg">
            <div className="border p-0.5 rounded-md bg-accent">
              <Mars size={18} className="text-muted-foreground" />
            </div>
          </div>
          <div className="px-3">he/him</div>
        </div>
      </div>
    </div>
  );
}
