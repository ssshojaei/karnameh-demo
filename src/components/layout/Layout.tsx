import React from "react";
import Header from "./Header";

type ILayout = {
  title: string;
  children: React.ReactNode;
};

const Layout = ({ title, children }: ILayout) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleToggle = () => setIsOpen((prev) => !prev);

  return (
    <main>
      <Header title={title} handleToggle={handleToggle} isOpen={isOpen} />
      <section className="container mt-3">{children}</section>
    </main>
  );
};

export default Layout;
