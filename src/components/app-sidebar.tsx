import { PiDress, PiTShirt } from "react-icons/pi";
import { TbPerfume } from "react-icons/tb";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import ProfileDropdown from "./admin/dashboard/profile-dropdown";
import { Separator } from "./ui/separator";

// Menu items.
const items = [
  {
    title: "Fashion wanita",
    url: "/admin/dashboard/fashion-wanita",
    icon: PiDress,
  },
  {
    title: "Fashion pria",
    url: "/admin/dashboard/fashion-pria",
    icon: PiTShirt,
  },
  {
    title: "Parfum",
    url: "/admin/dashboard/parfum",
    icon: TbPerfume,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <ProfileDropdown />
        <Separator />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="font-bold">Showcase</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
