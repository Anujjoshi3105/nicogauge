"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";

export default function Search() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <div className="w-full max-w-sm items-center space-x-2">
      <Dialog>
        <DialogTrigger asChild>
          <Button
            className="relative h-9 w-56 justify-start rounded-[0.5rem] text-sm text-muted-foreground sm:pr-12"
            onClick={() => setOpen(true)}>
            <span className="hidden lg:inline-flex">Search...</span>
            <span className="inline-flex lg:hidden">Search...</span>
            <kbd className="pointer-events-none absolute right-1.5 top-2 hidden h-5 select-none items-center gap-1 px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
              <span className="text-xs">⌘</span>K
            </kbd>
          </Button>
        </DialogTrigger>
        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>Calendar</CommandItem>
              <CommandItem>Search Emoji</CommandItem>
              <CommandItem>Calculator</CommandItem>
            </CommandGroup>
            <CommandGroup heading="Settings">
              <CommandItem>Profile</CommandItem>
              <CommandItem>Billing</CommandItem>
              <CommandItem>Settings</CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </Dialog>
    </div>
  );
}
