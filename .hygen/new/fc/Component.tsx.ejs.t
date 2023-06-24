---
to: <%= path %>/<%= component_name %>.tsx
---
import { FC } from "react";
<% if (have_style) { -%>
import { css } from "@emotion/react";

const styles = css``;
<% } -%>
<% if (have_props) { -%>

type <%= component_name -%>Props = {};
<% } -%>

export const <%= component_name -%>: <%- type_annotate %> = <%= props %> => {
  return (
<% if (have_style) { -%>
    <div css={styles} {...props}>
<% } else { -%>
    <div>
<% } -%>
    </div>
  );
}