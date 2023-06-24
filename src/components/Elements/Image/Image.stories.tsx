import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { ComponentProps } from "react";

import { Image } from "./Image";

export default { component: Image } as ComponentMeta<typeof Image>;

type Story = ComponentStoryObj<typeof Image> & { args: ComponentProps<typeof Image> };

export const Default: Story = {
  args: {
    src: "/vercel.svg",
    alt: "Vercel Logo",
    width: 100,
    height: 24,
  },
};
