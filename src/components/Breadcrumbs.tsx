import Link from "next/link";

interface BreadcrumbsProps {
  items: {
    name: string;
    path: string;
  }[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <div className="border-b border-slate-200 dark:border-primary/10 bg-slate-50/50 dark:bg-background-dark/20 py-4 px-6">
      <div className="mx-auto flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400">
        <Link
          href="/"
          className="flex items-center gap-1 hover:text-primary transition-colors"
        >
          <span className="material-symbols-outlined text-[1.1rem]">home</span>
          <span>Home</span>
        </Link>
        {items.map((item, index) => {
          // If the item path is root and it's the first element, skip to avoid duplicating home link
          if (item.path === "/" && index === 0) return null;
          
          const isLast = index === items.length - 1;

          return (
            <div key={item.path} className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[0.9rem] opacity-50 select-none">
                chevron_right
              </span>
              {isLast ? (
                <span className="text-slate-950 dark:text-white font-semibold">
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
