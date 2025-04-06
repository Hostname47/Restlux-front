import { HTMLAttributes, PropsWithChildren } from "react";
import Header from "../../components/header";

type ClientLayoutProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>;

function ClientLayout({ children, ...props }: ClientLayoutProps) {
  return (
    <div {...props}>
      <Header />
      {children}
    </div>
  );
}

export default ClientLayout;
