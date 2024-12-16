import { ChartSpline, Donut, Home, User, UtensilsCrossed } from "lucide-react";
import { Separator } from "./ui/separator";
import { NavLink } from "./nav-link";
import { ThemeToggle } from "./theme/theme-toggle";

export function Header(){
  return (
    <div className="border-b">
      <div className="flex h-16 items-center gap-6 px-6">
      <Donut />

      <Separator orientation="vertical" className="h-6" />

      <nav className="flex items-center space-x-4 lg:space-x-6">
        <NavLink href="/">
          <Home className="h-4 w-4"/>
          Home
        </NavLink>

        <NavLink href="/orders">
          <UtensilsCrossed className="h-4 w-4"/>
          Orders
        </NavLink>

        <NavLink href="/dashboard">
          <ChartSpline className="h-4 w-4"/>
          Dashboard
        </NavLink>

        <NavLink href="/auth/sign-out">
          <User className="h-4 w-4"/>
          Sign Out
        </NavLink>

      </nav>

      <div className="ml-auto flex items-center gap-2">
        <ThemeToggle />
      </div>
      </div>
    </div>
  )
}