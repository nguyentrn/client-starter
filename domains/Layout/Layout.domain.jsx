import StyledLayout from './Layout.styles';
import Header from './layouts/Header';
import Body from './layouts/Body';
import Footer from './layouts/Footer';

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <Header />
      <Body>{children}</Body>
      <Footer />
    </StyledLayout>
  );
};

export default Layout;
