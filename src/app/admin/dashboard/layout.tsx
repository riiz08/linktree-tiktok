import DashboardBreadcumb from "@/components/admin/dashboard/dashboard-breadcumb";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <div className="flex justify-center items-center gap-8 py-4 px-2">
          <SidebarTrigger />
          <DashboardBreadcumb />
        </div>
        {children}
      </main>
    </SidebarProvider>
  );
}
