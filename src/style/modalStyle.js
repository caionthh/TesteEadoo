import {createUseStyles} from 'react-jss'

export const modalStyle = createUseStyles({
    modalBackground: {
        width: '100vw',
        height: '100vh',
        backgroundColor: '#cecece88',
        position: 'fixed',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        top: '0vw',
        left: 0,
    },
    modalContainer: {
        width: '500px',
        height: 'auto',
        borderRadius: 4,
        backgroundColor: 'white',
        boxShadow: '0 0 12px c6c6c633',
        display: 'flex',
        flexDirection: 'column',
        padding: 25,

        margin: '0 10px 0 10px'
    },
    modalTitle: {
        display: 'flex',
        justifyContent: 'space-between',
        textAlign: 'left',
        margin: '0px 0px 30px 0px',

        fontFamily: 'Akshar, sans-serif',
        fontSize: 34,
        fontWeight: 'bold',
    },
    modalTitleBtn: {
        backgroundColor: 'white',
        border: 0,
        fontSize: 22,
        fontWeight: 'normal',
        cursor: 'pointer',
        borderRadius: 5,
        padding: '0px 15px 0px 15px',
        
        '&:hover': {
            backgroundColor: '#cecece'
        },

        transition: 'background-color .2s ease-in-out',
    },
    modalBody: {
        margin: '0px 0px 0px 10px',

    },
    modalFooter: {
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'center',

        margin: '20px 0px 15px 0px'
    },

    modalBtn: {
        minWidth: 128,
        height: 48,

        border: '1px solid transparent',
        borderRadius: '4px',

        margin: '0px 5px 0px 5px',
        cursor: 'pointer',

        transition: 'background-color .2s ease-in-out',

        fontFamily: 'Akshar, sans-serif',
        fontSize: 18,
    },

});