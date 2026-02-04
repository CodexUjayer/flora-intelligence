import { ReactNode } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: React.ElementType;
}

export function Container({ children, className, as: Component = "div" }: ContainerProps) {
  return (
    <Component className={cn("container mx-auto px-6", className)}>
      {children}
    </Component>
  );
}

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  as?: React.ElementType;
}

export function Section({ children, className, id, as: Component = "section" }: SectionProps) {
  return (
    <Component id={id} className={cn("py-24 md:py-32", className)}>
      {children}
    </Component>
  );
}
