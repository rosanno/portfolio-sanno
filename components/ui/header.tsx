type Props = {
  label: string;
};

const Header = ({ label }: Props) => {
  return (
    <div className="flex items-center gap-x-3">
      <div className="size-2 bg-gray-400/60 dark:bg-gray-300/40 rounded-full" />
      <h1 className="text-lg text-muted-foreground dark:text-gray-300/85">
        {label}
      </h1>
    </div>
  );
};

export default Header;
