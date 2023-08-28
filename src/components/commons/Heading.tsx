"use client";

type Props = {
  title: string;
  subtitle?: string;
  centre?: boolean;
};

const Heading: React.FC<Props> = ({ title, subtitle, centre }) => {
  return (
    <div className={centre ? `text-center` : `text-start`}>
      <div className="text-2xl font-bold">{title}</div>
      <div className="font-light text-neutral-500 mt-2">{subtitle}</div>
    </div>
  );
};

export default Heading;
