import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import 'twin.macro';
import { FC } from 'react';

const Layout: FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <>{children}</>
      <Footer />
    </>
  );
};

export default Layout;
