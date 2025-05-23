import { HTMLAttributes, PropsWithChildren, useEffect } from "react";
import AdminSidebar from "../../components/admin/sidebar";
import "./core.css";
import AdminHeader from "../../components/admin/header";
import { useAppSelector } from "../../app/hooks";
import { useNavigate } from "react-router";

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
  const { user } = useAppSelector((state) => state.global);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user || user.roles?.length === 0) {
      navigate("/not-found"); // redirect to homepage
    }
  }, [user, navigate]);

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
