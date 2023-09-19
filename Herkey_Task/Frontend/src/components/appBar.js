import * as React from 'react';
import { AppBar, Toolbar, IconButton, Stack, Box, Typography, Grid } from "@mui/material";
import { Close, MenuSharp } from "@mui/icons-material";
import JHLogo from "../assets/jobsForHerLogo.jpg"
import { isMobile } from 'react-device-detect';


export default function MenuAppBar(props) {

    return (

        <AppBar position="fixed" color='secondary' sx={{ backgroundColor: "white", color: "black", zIndex: (theme) => theme.zIndex.drawer + 1, }} elevation={4}>
            <Toolbar >
                {isMobile ?
                    <Box sx={{ width: "100%" }}>
                        <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
                            <IconButton
                                color='inherit'
                                onClick={props.handleHamburgerMenu}
                            >
                                {props.drawerState ? <Close /> : <MenuSharp />}
                            </IconButton>
                            <Box sx={{ height: '100%', width: "100px", mt: 1 }}>
                                <img src={JHLogo} width={"100%"}></img>
                            </Box>
                            <Box display={"flex"} sx={{ height: '40px', width: "40px", backgroundColor: "yellow", borderRadius: "50px" }} alignItems={"center"} justifyContent={"center"}>
                                <Typography fontWeight={"bold"} fontSize={"4px"}>FOREVER 20</Typography>
                            </Box>
                        </Stack>
                    </Box> :
                    <Grid container alignItems={"center"} >
                        <Grid xs={3} pr={10} >
                            <Stack direction={"row"} justifyContent={"space-between"}>
                                <Box sx={{ height: '100%', width: "100px", mt: 1 }}>
                                    <img src={JHLogo} width={"100%"}></img>
                                </Box>
                                <IconButton
                                    color='inherit'

                                >
                                    <MenuSharp />
                                </IconButton>

                            </Stack>
                        </Grid>
                        <Grid xs={8} >
                            <Stack direction={"row"} alignItems={"center"} spacing={4}>
                                <Typography variant='h6'>DASHBOARD</Typography>
                                <Typography variant='h6'>PACKAGES</Typography>
                                <Typography variant='h6'>EVENTS</Typography>
                                <Typography variant='h6'>BLOGS</Typography>

                            </Stack>
                        </Grid>
                        <Grid xs={1}  >
                            <Box display={"flex"} width={"100%"} justifyContent={"end"}>
                            <Box display={"flex"} sx={{ height: '40px', width: "40px", backgroundColor: "yellow", borderRadius: "50px" }} alignItems={"center"} justifyContent={"center"}>
                                <Typography fontWeight={"bold"} fontSize={"4px"}>FOREVER 20</Typography>
                            </Box>
                            </Box>
                        </Grid>

                    </Grid>
                }






            </Toolbar>
        </AppBar>

    );
}
