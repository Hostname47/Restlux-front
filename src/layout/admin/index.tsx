import { HTMLAttributes, PropsWithChildren } from "react";
import AdminSidebar from "../../components/admin/sidebar";
import "./core.css";
import AdminHeader from "../../components/admin/header";

type AdminLayoutProps = { contentDivClass?: string } & PropsWithChildren<
  HTMLAttributes<HTMLDivElement>
>;

function AdminLayout({
  children,
  contentDivClass = "",
  ...props
}: AdminLayoutProps) {
  return (
    <div id="admin-page" {...props}>
      <AdminSidebar />
      <div id="admin-page-container">
        <AdminHeader />
        <div id="admin-page-content" className={contentDivClass}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
