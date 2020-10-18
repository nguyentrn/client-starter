import StyledHeader from './Header.styles';
import NavItemList from '../../containers/NavItemList';

const headerLinks = [
  { slug: '', label: 'Trang chủ' },
  { slug: 'counter', label: 'Counter' }
];

const Header = () => {
  return (
    <StyledHeader>
      <NavItemList headerLinks={headerLinks} />
    </StyledHeader>
  );
};

export default Header;
