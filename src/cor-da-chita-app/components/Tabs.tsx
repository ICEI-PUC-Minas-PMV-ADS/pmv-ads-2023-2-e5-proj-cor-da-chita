import React from "react";
import { Tabs, Tab } from "@nextui-org/react";

export default function QuotesTabs() {
  return (
    <div className="flex flex-col bg-dark text-white p-10 items-center">
      <Tabs aria-label="Options" radius="none" size="lg" variant="underlined">
        <Tab key="1" title={<SquareIcon />} className="flex flex-col items-center">
          <div className="flex-1 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </div>
        </Tab>
        <Tab key="2" title={<SquareIcon />} className="flex flex-col items-center">
          <div className="flex-1 text-center">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </div>
        </Tab>
        <Tab key="3" title={<SquareIcon />} className="flex flex-col items-center">
          <div className="flex-1 text-center">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}

// Function to generate a square icon (you can customize the size and color)
const SquareIcon = () => (
  <div className="w-10 h-10 bg-white"></div>
);
