import {extendVariants, Button} from "@nextui-org/react";


export const MyButton = extendVariants(Button, {
  variants: {
    color: {
      green: "text-[#fff] bg-[#539D79]",
      transparent: "bg-[transparent] text-[#000]",
    },
    size: {
      xs: "px-unit-2 min-w-unit-12 h-unit-6 text-tiny gap-unit-1 rounded-small",
      md: "px-unit-4 min-w-unit-20 h-unit-10 text-small gap-unit-2 rounded-small",
      xl: "px-unit-8 min-w-unit-28 h-unit-14 text-large gap-unit-4 rounded-medium",
    },
  },
  defaultVariants: {
    color: "green",
    size: "md",
    radius: 'none',
  },
});
