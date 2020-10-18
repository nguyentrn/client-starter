import Link from 'next/link';
import StyledNavItem from './NavItem.styles';

const NavItem = ({ headerLink }) => {
  return (
    <StyledNavItem>
      <Link href={`/${headerLink.slug}`}>
        <a>{headerLink.label}</a>
      </Link>
    </StyledNavItem>
  );
};

export default NavItem;
