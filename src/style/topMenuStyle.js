import { createUseStyles } from "react-jss";

export const topMenuStyle = createUseStyles({

    topMenu: ({ breakpoint }) => ({
        minHeight: 128,

        display: 'flex',
        flexFlow: 'row wrap',

        margin: '20px auto 10px auto',

        justifyContent: breakpoint === "mobile" ? 'center' : 'flex-start',
    }),

    topMenuBtn: ({ breakpoint }) => ({

        margin: breakpoint === "mobile" ? '10px 0px 10px 0px' : '0px 0px 10px 10px',
        
        width: breakpoint === "mobile" ? '70%' : 'auto'

    }),

})