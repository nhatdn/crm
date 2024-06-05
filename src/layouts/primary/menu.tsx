import type { MenuProps } from 'antd';

import { Icons } from '@/assets';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    {
        icon: <Icons.Paper/>,
        key: 0,
    },
    {
        icon: <Icons.Paper/>,
        key: 1,
    },
    {
        icon: <Icons.Users/>,
        key: 2,
    },
    {
        icon: <Icons.Category/>,
        key: 3
    },
    {
        icon: <Icons.Team/>,
        key: 4
    },
    {
        icon: <Icons.Graduation/>,
        key: 5
    },
    {
        icon: <Icons.Receipt/>,
        key: 6
    },
    {
        icon: <Icons.Star/>,
        key: 7
    },
    {
        icon: <Icons.Upload/>,
        key: 8
    },
    {
        icon: <Icons.Webpage/>,
        key: 9
    },
    {
        icon: <Icons.Filter/>,
        key: 10
    },
    {
        icon: <Icons.Roadmap/>,
        key: 11
    },
];

export default items;