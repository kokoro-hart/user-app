import { default as NextImage, ImageProps as NextImageProps } from "next/image";
import { FC } from "react";

type ImageProps = NextImageProps & {
  width: number;
  height: number;
};

export const Image: FC<ImageProps> = ({ decoding = "async", ...props }) => {
  return <NextImage decoding={decoding} {...props} />;
};
