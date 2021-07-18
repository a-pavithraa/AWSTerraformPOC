import { createMuiTheme } from '@material-ui/core/styles';
import { makeStyles } from "@material-ui/core/styles";



export const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
      background:{
        default:"#001026",
        paper:"#212529"
      }
    },
    colors:{
      default:"#001026",
        paper:"#212529"
    },
    status:{
      primary:"#868e96"
    },
    
    space: [0, 4, 8, 16, 16, 64],
    spacing:2
  }
   );
   const drawerWidth = 240;

  export const useStyles = makeStyles((theme) => ({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      fontSize:"12px",
      padding: '0 30px',
      '& .MuiButton':{
        margin: theme.spacing(2),
        paddingBottom:theme.spacing(10)
      }
     
    },
    header:{
        fontWeight:"bolder",
width:'100%',
fontSize:'20px',
marginBottom:`20px`
    },
    main:{
      margin: "3rem auto",
      width: "90%"
    

    },
    btnClass:{
     
      border: 0,
      borderRadius: 3,
      float:'left',
      color: 'white',
      height: 40,
      padding: '0 30px',
      marginTop:theme.spacing(10)
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      borderBottomColor: "#ffffff",
      color:"#ffffff",
      padding:"0px"
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    },
    tabClass: {
      width: "98%",
      marginTop:theme.spacing(10),
      marginLeft:theme.spacing(8),
      paddingLeft:theme.spacing(10),
      backgroundColor:"#002e4f!important",
     
    },
    smGridSpacing: {
      width: "100%",
      marginTop:theme.spacing(5),
      paddingLeft:theme.spacing(5)
    },
    
    headerStyle: {
      backgroundColor: "rgb(50,76,127)",
      color: "rgba(255,255,255,0.87)",
      paddingLeft: "5px",
      fontWeight: "bolder"
    },
    searchBox: {
      boxShadow:
        "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
      paddingLeft: "5px",
      paddingRight: "5px",
      paddingBottom: "10px",
      display: "block",
      backgroundColor: "rgb(66,66,66)"
     
    },
    progress: {
      margin: theme.spacing(2)
    },
    heading: {
      fontSize: '20px',
      fontWeight: 'bolder'
    },
    mainHeading: {
      fontSize: '25px',
      fontWeight: 'bolder',
      borderBottom:'1px solid black',
      marginBottom:'30px'
  
    },
  
    smallHeading: {
      color: "#050b24",
      marginTop: "5px",
      marginBottom: "2px",
      fontWeight: "bolder",
      display: "block"
    },
    blockStyle: {
      display: "block"
    },
    card: {
     
      backgroundColor: "#e1f0e9"
      
     
    },
    dividerWithMargin:{
      marginBottom:"10px"
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    smallHeadingLight: {
      color: "#969aaa",
      marginBottom: "5px",
      fontWeight: "600",
      fontSize:'14px',
      display: "block"
    },
    cardValLight:{
      fontWeight: "600",
      fontSize:'18px',
      display: "block",
      color: "#fff",
      marginBottom: "10px"
    },
    cardValDark:{
      fontWeight: "400",
      fontSize:'0.875rem',
      display: "block",
      color: "#000",
      marginBottom: "10px"
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    darkGrid: {
     
      backgroundColor:'rgb(66,66,66)',
      color:'#dfe4f1'
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
      backgroundColor: "transparent!important"
    },
   
    tabs: {
      borderRight: `1px solid ${theme.palette.divider}`,
    },
    paper: {
      position: 'absolute',
      width: '100vh',
      
      backgroundColor: theme.palette.background.paper,
      color:'white',
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    customCard:{
      background:'#002e4f',
      boxShadow: 'inset 0px 15px 30px rgba(0, 16, 38, 0.5)',
      borderRadius:"10px"
    },
    table: {
      minWidth: 650,
    },
    
  container: {
    maxHeight: 440,
  },
  header:{
    paddingLeft: "20px!important",
    fontWeight: "bolder",
    fontSize:"30px",
    float:"left",
    paddingBottom: "10px",
    

  }
   
  }));
  