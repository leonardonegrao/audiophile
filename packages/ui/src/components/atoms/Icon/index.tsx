import Icon from './Icon';
import Menu from './components/Menu';
import Cart from './components/Cart';

export type IconName = 'menu' | 'cart';

export const icons: { [K in IconName]: (props: IconProps) => JSX.Element } = {
  menu: Menu,
  cart: Cart,
};

export interface IconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size: number;
  color: string;
  alt: string;
}

export default Icon;