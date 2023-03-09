import React from "react";
import { Button, rem } from "@mantine/core";

function CloseButton(props) {
  const { buttonText, onClick, className } = props;

  return (
    <Button
      onClick={onClick}
      className={className}
      variant="outline"
      radius="xl"
      styles={(theme) => ({
        root: {
          backgroundColor: "#ffffff",
          border: 0,
          height: rem(34),
          paddingLeft: rem(24),
          paddingRight: rem(24),
          "&:not([data-disabled])": theme.fn.hover({
            backgroundColor: "#D35580",
            color: "#ffffff",
          }),
        },
        leftIcon: {
          marginRight: theme.spacing.md,
        },
      })}
    >
      {buttonText}
    </Button>
  );
}

export default CloseButton;
