import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-lg group/bento border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black p-6 flex flex-col space-y-4 transition-all duration-200 hover:scale-[1.02] hover:shadow-none",
        className
      )}
    >
      {header}
      <div className="transition duration-200">
        {icon}
        <div className="font-sans font-semibold text-neutral-700 dark:text-neutral-100 mb-2 mt-2 text-lg">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-500 text-sm dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
