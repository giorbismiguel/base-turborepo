import React, { memo } from "react";
import { styled } from "@mui/material/styles";
import DOMPurify from "isomorphic-dompurify";
import { ChildrenProps } from "../../types";
// Component prop
// in case you are using a compononet base , you should extend it' props
// example type HTMLPreviewProps = CardProps & {custom props}
type HTMLPreviewProps = {};

export const HTMLPreviewStyle = styled("div")<HTMLPreviewProps>(() => ({
  "figure.table": {
    marginLeft: 0,
    table: {
      borderCollapse: "collapse",
      td: {
        padding: "3px 5px",
      },
      tr: {
        borderBottom: "1px solid #E4E4E4 !important",
      },
    },
  },
}));

const HTMLPreview = ({ html }: { html: string }) => (
  <HTMLPreviewStyle
    dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(html) }}
  ></HTMLPreviewStyle>
);

export default memo(HTMLPreview);
