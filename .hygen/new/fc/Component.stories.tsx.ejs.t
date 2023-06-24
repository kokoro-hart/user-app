---
to: <%= path %>/<%= component_name %>.stories.tsx
---
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { ComponentProps } from "react";

import { <%= component_name %> } from "./<%= component_name %>";

export default { component: <%= component_name %> } as ComponentMeta<typeof <%= component_name %>>;

type Story = ComponentStoryObj<typeof <%= component_name %>> & { args: ComponentProps<typeof <%= component_name %>> };

export const Default: Story = {
  args: {},
};