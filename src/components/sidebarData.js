import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'

export const SidebarData = [
    {
        title: "Consultar Saldo",
        path: "/consultaSaldo",
        icon: <FaIcons.FaRegCreditCard />,
        cName: "nav-text"
    },
    {
        title: "Ocorrência",
        path: "/report",
        icon: <AiIcons.AiFillWarning />,
        cName: "nav-text"
    },
    {
        title: "Emergência",
        path: "/emergency",
        icon: <AiIcons.AiFillAlert />,
        cName: "nav-text"
    },
    {
        title: "Pesquisar Rota",
        path: "/direct",
        icon: <FaIcons.FaRoute />,
        cName: "nav-text"
    },
    {
        title: "Ranking",
        path: "/ranking",
        icon: <IoIcons.IoMdTrophy />,
        cName: "nav-text"
    }
]

