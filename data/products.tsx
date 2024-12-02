import { v4 as uuidv4 } from 'uuid';
import S23 from '@/public/images/S22.png';
import S20Plus from '@/public/images/S20Plus.png';
import M13 from '@/public/images/M13.png';
import M33 from '@/public/images/M33.png';
import A33 from '@/public/images/A33.png';

export const mobilesData = [
    {
        id: uuidv4(),
        image: A33,
        title: 'Samsung Galaxy A33 5G',
        price: 1199,
        discount: 10,
    },
    {
        id: uuidv4(),
        image: S23,
        title: 'Samsung Galaxy S23 Ultra',
        price: 1399,
        discount: 15,
    },
    {
        id: uuidv4(),
        image: S20Plus,
        title: 'Samsung Galaxy S20 + 5G',
        price: 899,
        discount: 12,
    },
    {
        id: uuidv4(),
        image: M13,
        title: 'Samsung Galaxy M13 4G',
        price: 799,
        discount: 8,
    },
    {
        id: uuidv4(),
        image: M33,
        title: 'Xiaomi Mi 33 Gaming Edition',
        price: 999,
        discount: 20,
    },
];
