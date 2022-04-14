import { AppBar, IconButton, Toolbar, Typography } from "@mui/material"
import { FC, useContext } from 'react';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { UiContext } from '../../context/ui';

export const Navbar: FC = () => {
    const { openSideMenu } = useContext(UiContext)
    return (
        <AppBar position="sticky" >
            <Toolbar>
                <IconButton size="large" edge="start" onClick={openSideMenu}>
                    <MenuOutlinedIcon />
                </IconButton>
                <Typography variant="h6">Openjira</Typography>
            </Toolbar>

        </AppBar>
    )
}
