// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill } from '@tabler/icons-react';

// constant
const icons = {
  IconTypography,
  IconPalette,
  IconShadow,
  IconWindmill
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const utilities = {
  id: 'utilities',
  title: 'Departments',
  type: 'group',
  children: [
    
    {
      id: 'icons',
      title: 'Blocks',
      type: 'collapse',
      icon: icons.IconWindmill,
      children: [
        {
          id: 'tabler-icons',
          title: 'A - Civil Engineering',
          type: 'item',
          url: '/icons/tabler-icons',
          breadcrumbs: false,
          blockvalue:'A',
          deptvalue:'civil'
        },
        {
          id: 'material-icons',
          title: 'B - Administrative Block',
          type: 'item',
          
          url: '/blocks/Bblock',
          breadcrumbs: false,
          
        },
        {
          id: 'tabler-icons',
          title: 'C - CSE ',
          type: 'item',
          url: '/blocks/Cblock',
          breadcrumbs: false,
          
        },
        {
          id: 'material-icons',
          title: 'G - Mechanical Laborataries',
          type: 'item',
          
          url: '/blocks/Gblock',
          breadcrumbs: false,
         
        },
        {
          id: 'material-icons',
          title: 'H - Chemical Laborataries',
          type: 'item',
          
          url: '/blocks/Hblock',
          breadcrumbs: false,
          
        },
        {
          id: 'material-icons',
          title: 'L - IT & EEE Block',
          type: 'item',
          
          url: '/blocks/Lblock',
          breadcrumbs: false
        },
        {
          id: 'material-icons',
          title: 'M - Biotechnology & AI-DS Block',
          type: 'item',
         
          url: '/blocks/Mblock',
          breadcrumbs: false
        },
        {
          id: 'material-icons',
          title: 'N - ECE Block',
          type: 'item',
          
          url: '/blocks/Nblock',
          breadcrumbs: false
        },
        {
          id: 'material-icons',
          title: 'K - Chemical Engineering Block',
          type: 'item',
          
          url: '/blocks/Kblock',
          breadcrumbs: false
        },
        {
          id: 'material-icons',
          title: 'SMS Block',
          type: 'item',
          
          url: '/blocks/SMSblock/',
          breadcrumbs: false
        },
        {
          id: 'material-icons',
          title: 'Research & Development Block',
          type: 'item',
         
          url: '/blocks/R&Dblock',
          breadcrumbs: false
        },
      ]
    },
    {
      id: 'icons',
      title: 'Laboratories',
      type: 'collapse',
      icon: icons.IconWindmill,
      children: [
        {
          id: 'tabler-icons',
          title: 'Physics',
          type: 'item',
          url: '/icons/tabler-icons',
          breadcrumbs: false
        },
        {
          id: 'material-icons',
          title: 'Chemistry',
          type: 'item',
          external: true,
          target: '_blank',
          url: 'https://mui.com/material-ui/material-icons/',
          breadcrumbs: false
        },
        {
          id: 'material-icons',
          title: 'CSE',
          type: 'item',
          external: true,
          target: '_blank',
          url: 'https://mui.com/material-ui/material-icons/',
          breadcrumbs: false
        },
        {
          id: 'material-icons',
          title: 'IT',
          type: 'item',
          external: true,
          target: '_blank',
          url: 'https://mui.com/material-ui/material-icons/',
          breadcrumbs: false
        },
        {
          id: 'material-icons',
          title: 'English',
          type: 'item',
          external: true,
          target: '_blank',
          url: 'https://mui.com/material-ui/material-icons/',
          breadcrumbs: false
        },
        {
          id: 'material-icons',
          title: 'Mechanical',
          type: 'item',
          external: true,
          target: '_blank',
          url: 'https://mui.com/material-ui/material-icons/',
          breadcrumbs: false
        },
        {
          id: 'material-icons',
          title: 'EEE',
          type: 'item',
          external: true,
          target: '_blank',
          url: 'https://mui.com/material-ui/material-icons/',
          breadcrumbs: false
        },
        {
          id: 'material-icons',
          title: 'ECE',
          type: 'item',
          external: true,
          target: '_blank',
          url: 'https://mui.com/material-ui/material-icons/',
          breadcrumbs: false
        },
        {
          id: 'material-icons',
          title: 'AI & DS',
          type: 'item',
          external: true,
          target: '_blank',
          url: 'https://mui.com/material-ui/material-icons/',
          breadcrumbs: false
        },
        {
          id: 'material-icons',
          title: 'Research & Development',
          type: 'item',
          external: true,
          target: '_blank',
          url: 'https://mui.com/material-ui/material-icons/',
          breadcrumbs: false
        },
      ]
    }
  ],
  
};

export default utilities;
