import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { ComponentProps } from "react";

import { Button } from "./Button";

export default { component: Button } as ComponentMeta<typeof Button>;

type Story = ComponentStoryObj<typeof Button> & { args: ComponentProps<typeof Button> };

export const Default: Story = {
  args: {
    children: "Default Button",
  },
};
