import React from "react";
import { Button, rem } from "@mantine/core";

function CloseButton({ buttonText, onClick, className }) {
  return (
    <Button
      onClick={onClick}
      className={className}
      styles={(theme) => ({
        root: {
          backgroundColor: "#ffffff",
          border: 0,
          height: rem(34),
          paddingLeft: rem(24),
          paddingRight: rem(24),
          "&:not([data-disabled])": theme.fn.hover({
            backgroundColor: "rgb(236, 72, 153)",
          }),
        },
      })}
    >
      {buttonText}
    </Button>
  );
}

export default CloseButton;
