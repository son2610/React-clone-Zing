import icons from './icons'

const {MdOutlineLibraryMusic} = icons
export const sidebarMenu = [
    {
        path: 'mymusic',
        text: 'Ca nhan',
        icons: <MdOutlineLibraryMusic size={24} />
    },
    {
        path: '',
        text: 'Kham pha',
        end: true,
        icons: <MdOutlineLibraryMusic size={24} />
    },
    {
        path: 'zing-chart',
        text: '#zingchart',
        icons: <MdOutlineLibraryMusic size={24} />
    },
    {
        path: 'follow',
        text: 'Theo doi',
        icons: <MdOutlineLibraryMusic size={24} />
    },
]