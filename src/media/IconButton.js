import React from "react";
import { Button, rem } from "@mantine/core";

function IconButton(props) {
  const { rightIcon, leftIcon, buttonText, onClick, className, onFocus } = props;

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
            color: "rgb(236, 72, 153)",
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

export default IconButton;
