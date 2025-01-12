"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const {systemTheme, theme, setTheme} = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <Button onClick={ () => setTheme(currentTheme === "dark" ? "light" : "dark") }
          variant="outline"
          size="icon"
          className="size-10 dark:bg-grayDarker dark:border-white dark:border-opacity-10"
        >
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
    
    // <DropdownMenu>
    //   <DropdownMenuTrigger asChild>
    //     <Button
    //       variant="outline"
    //       size="icon"
    //       className="size-10 dark:bg-grayDarker dark:border-white dark:border-opacity-10"
    //     >
    //       <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
    //       <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    //       <span className="sr-only">Toggle theme</span>
    //     </Button>
    //   </DropdownMenuTrigger>
    //   <DropdownMenuContent
    //     align="end"
    //     className="dark:bg-grayDarker dark:border-white dark:border-opacity-10"
    //   >
    //     <DropdownMenuItem onClick={() => setTheme("light")}>
    //       Light
    //     </DropdownMenuItem>
    //     <DropdownMenuItem onClick={() => setTheme("dark")}>
    //       Dark
    //     </DropdownMenuItem>
    //     <DropdownMenuItem onClick={() => setTheme("system")}>
    //       System
    //     </DropdownMenuItem>
    //   </DropdownMenuContent>
    // </DropdownMenu>
  );
}
