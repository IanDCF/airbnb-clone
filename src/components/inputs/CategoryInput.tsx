"use client";

import { IconType } from "react-icons";

type Props = {
  icon: IconType;
  label: string;
  selected?: boolean;
  clickHandler: (value: string) => void;
};

const CategoryInput: React.FC<Props> = ({
  icon: Icon,
  label,
  selected,
  clickHandler,
}) => {
  return (
    <div
      onClick={() => {
        clickHandler(label);
      }}
      className={`
                  rounded-xl
                  border-2
                  p-4
                  flex
                  flex-col
                  gap-3
                  hover:border-black
                  transition
                  cursor-pointer
                  ${selected ? "border-black" : "border-neutral-200"}
                `}
    >
      <Icon size={30} />
      <div className="font-semibold">{label}</div>
    </div>
  );
};

export default CategoryInput;
