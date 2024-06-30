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
                  <span className="w-fit">File Name</span>
                </DialogTitle>
                <DialogDescription className=" w-full font-abc_gintonord font-extrabold">
                  <div className="w-full h-20">
                    <input
                      value={newFileName}
                      placeholder="Untitled"
                      className="w-full outline-none text-black h-20 text-4xl"
                      onChange={(e) => {
                        setNewFileName(e.target.value);
                      }}
                    />
                  </div>
                  <Button className="bg-[#6c4afe] hover:bg-[#6c4afe]/90 text-white dark:text-black font-abc_gintonord font-extrabold">
                    Create
                  </Button>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </div>
          <div className="flex-1 h-full flex flex-col w-full px-4">
            <ScrollArea className="w-full flex flex-col h-full mb-10">
              <div className="hover:bg-gray-400 p-2 rounded-lg overflow-hidden flex flex-col w-52">
                <span className="text-ellipsis overflow-hidden whitespace-nowrap w-full">
                  Hello
                  Worldsadgsakjblkjbsakjcblkjbakjcsbkasblkjcblaksjbclkjvsalchsajblcsjv
                </span>
              </div>
            </ScrollArea>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default Sidebar;
