import { useContext } from "react";
import { Box, makeStyles } from "@material-ui/core";
import { Chat } from '@material-ui/icons';

//Components
import { AccountContext } from "../../context/AccountProvider";
import HeaderMenu from "./HeaderMenu";


const useStyles = makeStyles({
    header: {
        height : 35,
        background : '#ededed',
        padding : '10px 16px',
        display: 'flex',
        alignItems: 'center'
    },
    avatar : {
        height: 37,
        width : 37,
        borderRadius: '50%'
    },
    icons: {
        marginLeft: 'auto'
    }
})

const Header = () => {
    const classes = useStyles();
    const { account } = useContext(AccountContext);
    return (
        <Box>
            <img classname = {classes.avatar} src= {account.imageUrl} alt="display-picture" />
            <Box className = { classes.icons}>
                <Chat/>
                <HeaderMenu/>
            </Box>
        </Box>
    )
}

export default Header;