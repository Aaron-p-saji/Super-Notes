"use client";
import React, { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { Button } from "../button";
import { ScrollArea } from "../scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../tooltip";
import { Separator } from "../separator";
import Link from "next/link";

type Props = {};

const Sidebar = (props: Props) => {
  const [newFileName, setNewFileName] = useState<string>("");

  return (
    <Dialog>
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-fit items-start border-b px-4 lg:h-[60px] flex-col lg:px-6 space-y-2 mt-5 relative">
            <DialogTrigger className="w-full h-8 ml-auto p-2 !py-5 space-x-2 !bg-[#6C4AFE] text-white hover:text-white rounded-lg flex items-center justify-center font-bold text-base">
              <Plus fontWeight={800} size={20} /> <span>Create Note</span>
            </DialogTrigger>
            <DialogContent className="w-full font-abc_gintonord font-extrabold">
              <DialogHeader className="w-full">
                <DialogTitle className="font-abc_gintonord font-extrabold flex flex-col items-center">
                  File Name
                </DialogTitle>

                <div className="w-full h-20 font-abc_gintonord font-extrabold flex flex-col">
                  <input
                    value={newFileName}
                    placeholder="Untitled"
                    className="w-full outline-none text-black h-20 text-4xl"
                    onChange={(e) => {
                      setNewFileName(e.target.value);
                    }}
                  />
                </div>
                <div className="flex w-full justify-end">
                  <Button className="bg-[#6c4afe] hover:bg-[#6c4afe]/90 text-white dark:text-black font-abc_gintonord font-extrabold max-w-20">
                    Create
                  </Button>
                </div>
              </DialogHeader>
            </DialogContent>
          </div>
          <div className="flex-1 h-full flex flex-col w-full px-2">
            <span className="w-full text-center">My Notes</span>
            <Separator className="mt-2 mb-4 bg-black/30" />
            <ScrollArea className="w-full flex flex-col h-full mb-10">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link href="/note/1">
                      <Button className="relative w-full !h-8 bg-transparent">
                        <span className="absolute text-ellipsis overflow-hidden w-full h-fit">
                          laksgblakijsbvclkvalvolasvlcvlasvclasvlocvbasivc
                        </span>
                      </Button>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>laksgblakijsbvclkvalvolasvlcvlasvclasvlocvbasivc</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </ScrollArea>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default Sidebar;
