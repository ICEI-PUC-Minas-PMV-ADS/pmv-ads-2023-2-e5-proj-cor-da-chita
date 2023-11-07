import React from "react";
import { Tabs, Tab } from "@nextui-org/react";

export default function QuotesTabs() {
  return (
    <div className="flex flex-col bg-light p-10 items-center">
      <Tabs aria-label="Options" radius="none" size="lg" variant="underlined" classNames={{tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider"}}>
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
            <blockquote className="text-2xl font-light tracking-wide italic">
                "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </blockquote>
            </div>
        </Tab>
      </Tabs>
    </div>
  );
}

const SquareIcon = () => (
  <div className="m-3 w-10 h-5 bg-green"></div>
);
