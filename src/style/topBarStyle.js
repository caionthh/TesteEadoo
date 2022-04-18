import { createUseStyles } from "react-jss";

export const topBarStyle = createUseStyles({

    topBar: ({ breakpoint }) => ({
        width: '100%',

        height: 56,
        
        backgroundColor: '#25292c',
        color: '#ffffff',

        display: 'flex', 
        justifyContent: 'flex-start',
        alignItems:'center',

        textAlign: breakpoint === "mobile" ? 'center' : 'left',
        
    }),

})