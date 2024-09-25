
import { Home, MessageSquare, Settings, UserPlus, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import TunnelLogoSquare from "~/assets/brand/tunnel-square-green.svg";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "~/src/components/ui/tooltip";

export const NavbarMain = (): React.ReactElement => {
  const pathname = usePathname();

  if (pathname === "/login" || pathname === "/sign-up") {
    return <></>;
  }

  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
        <Link
          href="/"
          className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
        >
          <Image
            className="h-6 w-auto transition-all group-hover:scale-110"
            src={TunnelLogoSquare as string}
            alt="Tunnel"
          />
        </Link>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="/dashboard"
              className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                pathname === "/dashboard"
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground"
              } transition-colors hover:text-foreground md:h-8 md:w-8`}
            >
              <Home className="h-5 w-5" />
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Dashboard</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="/campaigns"
              className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                pathname === "/campaigns"
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground"
              } transition-colors hover:text-foreground md:h-8 md:w-8`}
            >
              <MessageSquare className="h-5 w-5" />
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Campaigns</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="/contacts"
              className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                pathname === "/contacts"
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground"
              } transition-colors hover:text-foreground md:h-8 md:w-8`}
            >
              <Users className="h-5 w-5" />
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Contacts</TooltipContent>
        </Tooltip>
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="/team"
              className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                pathname === "/team"
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground"
              } transition-colors hover:text-foreground md:h-8 md:w-8`}
            >
              <UserPlus className="h-5 w-5" />
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Team</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="/settings"
              className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                pathname === "/settings"
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground"
              } transition-colors hover:text-foreground md:h-8 md:w-8`}
            >
              <Settings className="h-5 w-5" />
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Settings</TooltipContent>
        </Tooltip>
        <div className="my-2 h-px w-full bg-border" />
        <div className="mt-2 flex items-center justify-center">
          <span>User info here</span>
        </div>
      </nav>
    </aside>
  );
};
