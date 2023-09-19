import * as React from 'react';
import { Toolbar, Drawer, Box, List, ListSubheader, ListItemButton, ListItemIcon, ListItemText, Grid, Typography, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom"
import DrawerItems from "./drawerItems";
import { isMobile } from 'react-device-detect';
import Logo from "../assets/hplogo.png"
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

export default function AppDrawer(props) {
    const navigate = useNavigate()

    const drawerWidth = 271;

    const drawerState = props.drawerState;



    return (

        <Drawer

            open={drawerState}
            onClose={props.handleDrawerToggle}
            variant={isMobile ? "temporary" : "permanent"}
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
            }}
        >
            <Toolbar />

            <Grid container sx={{ pt: 3, pb: 1, pl: 2, pr: 2 }}>
                <Grid item xs={12}>
                    <Stack direction={"row"} alignItems={"center"} spacing={1}>
                        <Box sx={{ height: '60px', width: "60px" }}>
                            <img src={Logo} width={"100%"}></img>
                        </Box>
                        <Typography variant="h3" color={"white"}>Hello,</Typography>
                    </Stack>
                </Grid>
                <Grid item xs={12} mt={1}>
                    <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                        <Typography pl={1} variant="h4" fontSize={"20px"} color={"#f2f4f2"}>Hewlett Packard E...</Typography>
                        <ArrowForwardIosOutlinedIcon fontSize="" sx={{ color: "#99ca3b" }} />
                    </Stack>
                </Grid>

            </Grid>

            <Box sx={{ overflow: 'auto' }}>
                {Object.keys(DrawerItems).map(sectionName => {
                    const sectionItem = DrawerItems[sectionName]
                    return (< List key={sectionName} >
                        {Object.keys(sectionItem.items).map(itemName => {
                            const itemInfo = sectionItem.items[itemName]
                            return (
                                <ListItemButton key={itemName} sx={{  backgroundColor: itemInfo.active ? "#313136" : "", borderLeft: itemInfo.active ? "5px solid #99ca3b" : "" }}>
                                    <ListItemIcon sx={{ minWidth: 50, fontSize: 40 }}>
                                        {itemInfo.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={itemInfo.label} primaryTypographyProps={{ fontSize: "17px", color: itemInfo.active ? "#99ca3b" : "" }} />
                                </ListItemButton>
                            )

                        })}
                    </List>)
                })}
            </Box>
            <Box pl={2}>
            <Typography color="#99ca3b"  variant='body2'>Contact us -</Typography>
            <Typography color="#99ca3b" variant='body2'>Email: admin@jobforher.com</Typography>
            </Box>
        </Drawer >

    );
}
