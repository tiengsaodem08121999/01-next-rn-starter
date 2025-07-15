import { Layout } from "antd";
import AdminFooter from "@/components/layout/admin.footer";
import AdminHeader from "@/components/layout/admin.header";
import AdminSidebar from "@/components/layout/admin.sidebar";
import { Content } from "antd/es/layout/layout";
const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Layout>
        <AdminSidebar />
        <Layout>
          <AdminHeader />
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: "#ccc",
                borderRadius: "10px",
              }}
            >
              {children}
            </div>
          </Content>
          <AdminFooter />
        </Layout>
      </Layout>
    </>
  );
};

export default DashboardLayout;
