import Link from "next/link";
import { HomeIcon, ChevronRightIcon } from "./Icons";

interface BreadcrumbsProps {
  items: {
    name: string;
    path: string;
  }[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <div className="border-b border-border-light dark:border-border-dark bg-surface-light/60 dark:bg-surface-dark/60 py-3.5 px-6">
      <div className="container-app flex items-center gap-2 text-xs font-medium text-text-muted-light dark:text-text-muted-dark">
        <Link
          href="/"
          className="flex items-center gap-1.5 hover:text-primary transition-colors"
        >
          <HomeIcon size={14} className="opacity-70" />
          <span>Home</span>
        </Link>
        {items.map((item, index) => {
          if (item.path === "/" && index === 0) return null;
          const isLast = index === items.length - 1;

          return (
            <div key={item.path} className="flex items-center gap-2">
              <ChevronRightIcon size={12} className="opacity-40" />
              {isLast ? (
                <span className="text-text-light dark:text-text-dark font-semibold">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.path}
                  className="hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
