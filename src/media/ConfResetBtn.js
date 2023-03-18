import React from "react";
import { Button, rem } from "@mantine/core";

function ConfResetBtn({ rightIcon, leftIcon, buttonText, onClick, className, onFocus }) {

  return (
    <Button
      onFocus={onFocus}
      onClick={onClick}
      className={className}
      variant="outline"
      radius="xl"
      rightIcon={rightIcon}
      leftIcon={leftIcon}
      styles={(theme) => ({
        root: {
          backgroundColor: "transparent",
          height: rem(54),
          paddingLeft: rem(24),
          paddingRight: rem(24),
          "&:not([data-disabled])": theme.fn.hover({
            backgroundColor: "transparent",
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

export default ConfResetBtn;
