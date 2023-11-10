import { extendVariants, Button } from "@nextui-org/react";

export const MyButton = extendVariants(Button, {
  variants: {
    color: {
      green: "text-[#fff] bg-[#4cb69f] hover:opacity-80 focus:opacity-80",
      transparent:
        "bg-transparent text-[#191929] border border-solid hover:opacity-80 focus:opacity-80",
      dark: "bg-[#191929] text-[#fff] hover:opacity-80 focus:opacity-80",
    },
    size: {
      xs: "px-unit-2 min-w-unit-12 h-unit-6 text-tiny gap-unit-1",
      md: "px-unit-4 min-w-unit-20 h-unit-10 text-sm gap-unit-2",
      xl: "px-unit-8 min-w-unit-28 h-unit-14 text-sm gap-unit-4",
    },
  },
  defaultVariants: {
    size: "xl",
  },
});
