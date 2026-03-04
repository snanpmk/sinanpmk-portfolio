import { cn } from "@/lib/utils";

interface SectionContainerProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  id?: string;
}

export function SectionContainer({ children, className, id, ...props }: SectionContainerProps) {
  return (
    <section
      id={id}
      className={cn("w-full py-16 md:py-32 relative", className)}
      {...props}
    >
      <div className="w-full mx-auto px-6 md:px-12">
        {children}
      </div>
    </section>
  );
}
