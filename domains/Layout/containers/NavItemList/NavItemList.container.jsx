import StyledNavItemList from './NavItemList.styles';
import NavItem from '../../components/NavItem';

const NavItemList = ({ headerLinks }) => {
  return (
    <StyledNavItemList>
      {headerLinks.map((headerLink) => (
        <NavItem headerLink={headerLink} />
      ))}
    </StyledNavItemList>
  );
};

export default NavItemList;
