import { HTMLAttributes, PropsWithChildren } from "react";
import AdminSidebar from "../../components/admin/sidebar";
import "./core.css";
import AdminHeader from "../../components/admin/header";

type AdminLayoutProps = {
  contentDivClass?: string;
  padded?: boolean;
} & PropsWithChildren<HTMLAttributes<HTMLDivElement>>;

function AdminLayout({
  children,
  padded = true,
  contentDivClass = "",
  ...props
}: AdminLayoutProps) {
  return (
    <div id="admin-page">
      <AdminSidebar />
      <div id="admin-page-container">
        <AdminHeader />
        <div
          id="admin-page-content"
          className={contentDivClass + (padded ? "padded" : "")}
          {...props}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
