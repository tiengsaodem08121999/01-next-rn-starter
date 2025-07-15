"use client";

import { Layout } from "antd";
const AdminFooter = () => {
  const { Footer } = Layout;
  return (
    <>
      <Footer style={{ textAlign: "center" }}>
        Le Van Quy ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </>
  );
};

export default AdminFooter;
