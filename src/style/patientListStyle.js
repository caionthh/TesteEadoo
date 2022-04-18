import { createUseStyles } from "react-jss";

export const patientListStyle = createUseStyles({

    patientList: ({ breakpoint }) => ({
        display: 'flex',
        flexFlow: 'column nowrap',
        justifyContent: 'center',
        alignContent: 'flex-start',
    
    }),

    patientListEmpty: {

        height: 256,

        backgroundColor: '#ffffff',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom left',

        textAlign: 'center',
        fontSize: 32,
    },

    patientSmall: {

        borderBottom: '1px solid #c9d3dd',

        cursor: 'pointer',

        '&:hover': {
            backgroundColor: '#f5f5f5'
        },

        transition: 'background-color .2s ease-in-out',
    },

    patientTable: {
        borderCollapse: 'collapse',

    },

    patientHeader: {
        height: 42,
        backgroundColor: 'rgb(245, 246, 250)',
    },
    headerTitle: {
        fontFamily: 'Akshar, sans-serif',
        fontSize: 12,
        fontWeight: 700,
        color: '#8094ae',
        textTransform: 'uppercase',
        letterSpacing: '0.12em',
    },

    patientRow: {
        height: 42,
        '&:hover':{
            height: 54,
        },

        transition: 'height .2s ease-in-out',

        '& td': {
            borderRight: '1px solid #cecece33',
        },
        '& td:last-child': {
            borderRight: '0px none',
        }
    },
    patientCol: {
        padding: '0px 0px 0px 10px',
    },

    patientDataSmall: {
        fontFamily: 'Akshar, sans-serif',
        fontSize: 24,
        margin: '0px auto 0px 0px',
        padding: '0px 0px 0px 20px',
    },
    patientDataBig: {
        fontFamily: 'Akshar, sans-serif',
        fontSize: 28,
        margin: '0px auto 0px 0px',
        padding: '0px 0px 0px 20px',
    },

    patientBig: {

        display: 'flex',
        flexFlow: 'column nowrap',

        borderRadius: '4px 4px 4px 4px',
        borderStyle: 'solid',
        borderColor: '#cecece',
        borderWidth: '1px 1px 1px 1px',

        boxShadow: '0 0 12px #c6c6c633',

        padding: '5px 20px 5px 20px',
        margin: '5px 0px 5px 0px',
    },

    patientBigName: {

        paddingLeft: 5,

        '&:hover': {
            backgroundColor: '#f5f5f5'
        },

        borderRadius: '4px 4px 4px 4px',
        borderColor: '#cecece',
        borderWidth: '1px 1px 1px 1px',

        transition: 'background-color .2s ease-in-out',

        cursor: 'pointer',
    },

    patientValueContainer: {
        width: '100%',
        margin: '10px 0px 20px 0px'
    },
    patientValueContainerSmall: {
        width: '100%',
        margin: '10px 0px 20px 0px',
        padding: '0px 0px 0px 20px',
    },
})