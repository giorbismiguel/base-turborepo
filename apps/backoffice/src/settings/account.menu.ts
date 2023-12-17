import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import SettingsIcon from '@mui/icons-material/Settings';

type MenuDivider = {
  divider: boolean,
  permission?: string[],
}

export type MenuItemType = {
  divider?: boolean
  label: string,
  link: string,
  icon: any,
  permission?: string[],
}

type MenuType = MenuDivider | MenuItemType;

export const ACCOUNT_MENU: MenuType[] = [
  {
    label: 'profile',
    link: '/users/me',
    icon: AccountCircleIcon
  },
  {
    label: 'billing',
    link: '/account/billing',
    icon: CreditCardIcon,
    // permission: ['BILLING']
  },
  {
    label: 'notification',
    link: '/account/notification',
    icon: CreditCardIcon,
    // permission: ['BILLING']
  },
  {
    label: 'settings',
    link: '/account/settings',
    icon: SettingsIcon
  }
];



