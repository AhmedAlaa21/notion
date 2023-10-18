"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { Id } from "@/convex/_generated/dataModel";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronRight, LucideIcon, Plus } from "lucide-react";

interface ItemProps {
  id?: Id<"documents">;
  documentIcon?: string;
  active?: boolean;
  expanded?: boolean;
  isSearch?: boolean;
  level?: number;
  onExpand?: () => void;
  label: string;
  onClick: () => void;
  icon: LucideIcon;
}

export const Item = ({
  id,
  documentIcon,
  label,
  onClick,
  icon: Icon,
  active,
  expanded,
  isSearch,
  level = 0,
  onExpand,
}: ItemProps) => {
  const handleExpand = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
    onExpand?.();
  };

  const ChevronIcon = expanded ? ChevronDown : ChevronRight;
  const userAgent = window.navigator.userAgent;

  const getOS = () => {
    if (userAgent.includes("Mac")) return "⌘";
    else {
      return "ctrl";
    }
  };
  return (
    <div
      onClick={onClick}
      role="button"
      style={{ paddingLeft: level ? `${level * 12 + 12}px` : "12px" }}
      className={cn(
        `group min-h-[27px] text-sm py-1 pr-3 w-full
      hover:bg-primary/5 flex items-center text-muted-foreground font-medium`,
        active && "bg-primary/5 text-primary"
      )}
    >
      {!!id && (
        <div
          className="h-full rounded-sm hover:bg-neutral-300
        dark:bg-neutral-600 mr-1"
          role="button"
          onClick={handleExpand}
        >
          <ChevronIcon className="h-4 w-4 shrink-0 text-muted-foreground" />
        </div>
      )}
      {documentIcon ? (
        <div className="shrink-0 mr-2 text-[18px]">{documentIcon}</div>
      ) : (
        <Icon className="shrink-0 h-[18px] text-muted-foreground" />
      )}
      <span className="truncate">{label}</span>
      {isSearch && (
        <kbd
          className="ml-auto pointer-events-none inline-flex
        h-5 select-none items-center gap-1 rounded border
        bg-muted font-medium font-mono text-muted-foreground
        opacity-100 px-1.5"
        >
          <span className="text-xs">{getOS()}</span>K
        </kbd>
      )}
      {!!id && (
        <div className="ml-auto flex items-center gap-x-2">
          <div
            className="opacity-0 group-hover:opacity-100
            h-full ml-auto rounded-sm hover:bg-neutral-300
          dark:hover:bg-neutral-300"
          >
            <Plus className="h-4 w-4 text-muted-foreground" />
          </div>
        </div>
      )}
    </div>
  );
};

Item.Skeleton = function ItemSkeleton({ level }: { level: number }) {
  return (
    <div
      className="flex gap-x-2 py-[3px]"
      style={{ paddingLeft: level ? `{$(level* 12) + 25}px` : "12px" }}
    >
      <Skeleton className="h-4 w-4" />
      <Skeleton className="h-4 w-[30%]" />
    </div>
  );
};