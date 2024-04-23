import Image from "next/image";

export const ItemImageCard = (props: {
  image: string;
  text: string;
  onClick?: () => void;
  className?: string;
  width?: number;
  height?: number;
}) => {
  const { image, text, onClick, className, width, height } = props;
  return (
    <div className="w-full flex justify-center items-center">
      <Image
        src={image}
        width={width ?? 100}
        height={height ?? 80}
        alt={text}
        onClick={onClick}
        className={className}
      />
    </div>
  );
};
