import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { ComponentProps } from "react";

import { Link } from "./Link";

export default { component: Link } as ComponentMeta<typeof Link>;

type Story = ComponentStoryObj<typeof Link> & { args: ComponentProps<typeof Link> };

export const Default: Story = {
  args: {
    href: "/",
    children: "Default Link",
  },
};
