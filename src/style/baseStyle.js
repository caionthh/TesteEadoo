import {createUseStyles} from 'react-jss'

export const baseStyle = createUseStyles({

    appContainer: ({ breakpoint }) => ({
        width: 
            breakpoint === "desktop" ? '75%' 
            : breakpoint === "laptop" ? '80%'
            : '85%',

        marginLeft: 'auto',
        marginRight: 'auto',

        transition: 'width .2s ease-in-out',
    }),

    appBody: {
        margin: '10px auto 10px auto',
        padding: 15,

        borderRadius: '4px',
        borderStyle: 'solid',
        borderColor: '#cecece',
        borderWidth: '0px',

        backgroundColor: '#ffffff',
        boxShadow: '0 0 12px #c6c6c633',

        transition: 'height .2s ease-in-out',
    },
    
    appFooter: {
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'center',

        margin: '20px 0px 15px 0px'
    },

    title: {
        fontFamily: 'Akshar, sans-serif',
        fontSize: 28,
        margin: 0,
    },
    titleSmall: {
        fontFamily: 'Akshar, sans-serif',
        fontSize: 24,
        margin: 0,
    },
    titleTiny: {
        fontFamily: 'Akshar, sans-serif',
        fontSize: 12,
        margin: 0,
    },

    button: {
        minWidth: 128,
        height: 48,

        border: '1px solid transparent',
        borderRadius: '4px',

        cursor: 'pointer',

        fontFamily: 'Akshar, sans-serif',
        fontSize: '1rem',
        fontWeight: 'bold',

        margin: '5px 5px 5px 5px',

        transition: 'background-color .2s ease-in-out',
        transition: 'width .2s ease-in-out',
        transition: 'height .2s ease-in-out',
    },
    buttonSmall: {
        height: 32,

        border: '1px solid transparent',
        borderRadius: '4px',

        transition: 'background-color .2s ease-in-out',

        cursor: 'pointer',

        fontFamily: 'Akshar, sans-serif',
        fontSize: 14,
        fontWeight: 'bold',

        margin: '5px 5px 5px 5px',
    },
    btnRed: {
        color: '#fff',
        backgroundColor: '#aa1111',
        '&:hover': {
            backgroundColor: '#bb4141',
        }
    },
    btnGreen: {
        color: '#fff',
        backgroundColor: '#1b9b45',
        '&:hover': {
            backgroundColor: '#49af6a',
        }
    },
    btnBlue: {
        color: '#000',
        backgroundColor: '#f1f4f9',
        '&:hover': {
            backgroundColor: '#b0eaf9',
        }
    },

    errorBox: {
        backgroundColor: 'red',
        borderRadius: '4px',
        borderStyle: 'solid',
        borderColor: '#cecece',
        borderWidth: '0px',

        boxShadow: '0 0 12px #c6c6c633',

        margin: '5px 20px 5px 20px',

        textAlign: 'center',
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },

    patientCount: {
        border: '1px solid #c9d3dd',
        borderRadius: '4px 4px 0 0',

        display: 'flex',
        flexFlow: 'row nowrap',

        justifyContent: 'center',

    },
    patientCountTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        margin: '15px 0px 0px 0px',
    },
    patientCountValue: {
        fontSize: 32,
        fontWeight: 'bold',
        margin: '0px 0px 15px 0px',
        color: '#3ce036',
        textAlign: 'center',
    },

    patientPage: {
        backgroundColor: '#dedede',

        height: 42,

        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'flex-end',

        alignItems: 'center',

    },
    patientPageItem: {
        margin: '0px 15px 0px 0px'
    },


    patientContainer: {
        transition: 'width .2s ease-in-out',
    },
    patientSmall: {

        width: 'auto',

        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'space-evenly',
        alignItems: 'center',


        borderWidth: '0px 0px 1px 0px',
        borderStyle: 'solid',
        borderColor: '#c9d3dd',

        '&:hover': {
            backgroundColor: '#f5f5f5'
        },

        transition: 'background-color .2s ease-in-out',

        padding: '10px 0px 10px 0px',

        cursor: 'pointer',
    },
    
    patientValueContainer: {
        width: '100%',
        margin: '0px 0px 20px 0px',

        display: 'flex',
        flexFlow: 'column wrap',
        justifyContent: 'flex-start'
    },
    patientValueContent: {
        margin: '30px 0px 20px 0px',
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'space-around',
    },
    patientValueMedium: {
        fontSize:28,
        margin: '5px 0px 0px 0px',
    },
    patientValueBig: {
        fontSize: 32,
        margin: '5px 0px 0px 0px',
    },

    formPatient: {
        display: 'flex',
        flexDirection: 'column',

    },

    patientControls: {
        padding: '0px 20px 0px 0px',

        marginLeft: 'auto',

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },

    patientBtn: {
        minWidth: 65,
    },

    formLabel: {
        display: 'flex',
        flexFlow: 'column nowrap',
    },
    formInputTitle: {
        fontFamily: 'Akshar, sans-serif',
        fontSize: 18,
        margin: 0,
    },
    formInput: {
        margin: '5px 5px 10px 5px',
        border: '1px solid #cecece55',
        borderRadius: '4px',
        height: '42px',
        paddingLeft: 5, 

        fontFamily: 'Akshar, sans-serif',
        fontSize: 20,
    },
    formInputInvalid: {
        borderColor: 'red',

        '&:focus': {
            outline: 'solid red',
        },
    },

    vl: {
        borderLeft: '1px solid #cecece55',
        height: 20,
        width: 2,
    },

});
