"use client";

type Props = {
  year: string | undefined;
  type: string | undefined;
};

const Description = ({ year, type }: Props) => {
  return (
    <section className="p-1">
      <div className="bg-[#F7F7F7] dark:bg-[#2C2C2C] rounded-xl px-6 py-4 space-y-2.5">
        <div className="flex items-center gap-2">
          <div className="w-28">
            <p className="text-sm dark:text-gray-400">
              Project Type
            </p>
          </div>
          <div>
            <p className="text-sm">{type}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-28">
            <p className="text-sm dark:text-gray-400">
              Year
            </p>
          </div>
          <div>
            <p className="text-sm">{year}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Description;
