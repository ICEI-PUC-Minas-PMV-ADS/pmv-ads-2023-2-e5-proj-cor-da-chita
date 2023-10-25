import {extendVariants, Button} from "@nextui-org/react";


export const MyButton = extendVariants(Button, {
  variants: {
    color: {
      green: "text-[#fff] bg-[#539D79]",
      transparent: "bg-[transparent] text-[#191929] border border-solid",
    },
    size: {
      xs: "px-unit-2 min-w-unit-12 h-unit-6 text-tiny gap-unit-1 rounded-md",
      md: "px-unit-4 min-w-unit-20 h-unit-10 text-sm gap-unit-2 rounded-md",
      xl: "px-unit-8 min-w-unit-28 h-unit-14 text-sm gap-unit-4 rounded-md",
    },
  },
  defaultVariants: {
    size: "xl",
  },
});