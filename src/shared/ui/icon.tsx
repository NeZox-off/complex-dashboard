import { cn } from "@/shared/lib";
import { icons, SVGAttributes } from "lucide-react";
import { memo } from "react";

export interface IconProps extends SVGAttributes {
  name: keyof typeof icons;
  className?: string;
  strokeWidth?: number;
  size?: string | number | undefined;
}

export const Icon = memo(
  ({ name, className, strokeWidth, size = 16, ...props }: IconProps) => {
    const IconComponent = icons[name];

    if (!IconComponent) {
      return null;
    }

    return (
      <IconComponent
        size={size}
        className={cn(className)}
        strokeWidth={strokeWidth || 2.5}
        {...props}
      />
    );
  }
);

Icon.displayName = "Icon";
