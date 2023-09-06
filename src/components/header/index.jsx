import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CodeIcon from '@material-ui/icons/Code';
import {NavLink} from "react-router-dom";
import {Link} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    link: {
        textDecoration: null,
        color: '#fff !important',
    },
}));

export default function ButtonAppBar() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const classes = useStyles();

    //Handle Register
    const handleRegister = () =>{
        <DialogActions></DialogActions>
    }

    return (<div className={classes.root}>
        {/*appbar*/}
        <AppBar position="static">
            <Toolbar>
                <CodeIcon className={classes.menuButton}>
                </CodeIcon>
                <Typography variant="h6" className={classes.title}>
                    <Link className={classes.link} to="/" exact> SHOP </Link>
                </Typography>
                <NavLink to="/todos" className={classes.link}>
                    <Button color="inherit"> TODOS </Button>
                </NavLink>

                <NavLink to="/albums" className={classes.link}>
                    <Button color="inherit"> ALBUMS </Button>
                </NavLink>

                <Button color="inherit" onClick={handleClickOpen}>REGISTER</Button>
            </Toolbar>
        </AppBar>

        {/*Dialog*/}
        <Dialog open={open}  aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    To subscribe to this website, please enter your email address here. We will send updates
                    occasionally.
                </DialogContentText>
                {/*<TextField*/}
                {/*    autoFocus*/}
                {/*    margin="dense"*/}
                {/*    id="name"*/}
                {/*    label="Email Address"*/}
                {/*    type="email"*/}
                {/*    fullWidth*/}
                {/*/>*/}
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>
    </div>);
}