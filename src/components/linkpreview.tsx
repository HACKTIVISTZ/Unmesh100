"use client";
import React from "react";
import { motion } from "framer-motion";
import { LinkPreview } from "./ui/linkpreview";

export function LinkPreviewDemo() {
  return (
    <div className="flex justify-center items-center h-[40rem] flex-col px-4">
      <p className="text-neutral-500 dark:text-neutral-400 mt-0 text-xl md:text-3xl max-w-3xl mx-auto mb-10">
        I also createed an 
        <LinkPreview url="https://github.com/Unmesh100/Unmesh100" className="font-bold">
          <br/> Animated ReadME On GITHUB.
        </LinkPreview>
       
     
      </p>
   
    </div>
  );
}
