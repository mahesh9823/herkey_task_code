import { ArrowBack } from '@mui/icons-material'
import { Box, Card, CardContent, Divider, FormControlLabel, Grid, Radio, RadioGroup, Stack, Typography } from '@mui/material';

import EditCalendarIcon from '@mui/icons-material/EditOutlined';
import React from 'react';
import Logo from "./assets/profilePic.png"
import { isMobile } from 'react-device-detect';

export default function home() {
  return (
    <Box component={"div"} p={3}>
      <Stack spacing={1} direction={"row"} mb={2} >
        <Typography color="#949498" variant='body1'>Dashboard</Typography>
        <Typography color="#949498" variant='body1'>|</Typography>
        <Typography color="#44ace0" variant='body1'>My Account</Typography>
      </Stack>
      <Card>
        <CardContent sx={{ p: 0 }}>

          <Grid container spacing={1} >
            <Grid item xs={12} >

              <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                <Stack spacing={2} alignItems={"center"} direction={"row"} sx={{ borderBottom: "2px solid #f8f8f8" }} p={2}>
                  <ArrowBack sx={{ color: "#99ca3b" }} />
                  <Typography variant='h6'>
                    My Account
                  </Typography>
                </Stack>
                <EditCalendarIcon  sx={{ color: "#99ca3b", mr:2 }} />
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <Box component={"div"} pl={2} pr={2}>
                <Box border={"2px solid #f8f8f8"}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} >
                      <Box sx={{ backgroundColor: "#f8f8f8" }}>
                        <Typography variant='h6' p={1} pl={3}>
                          My Profile
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} >
                      <Box pl={2}>
                        <Grid container>

                          <Grid item xs={isMobile ? 3 : 2} >
                            <Stack direction={"row"} alignItems={"baseline"}>
                            <img style={{ border: "2px solid #f8f8f8", borderRadius: "100px" }} src={Logo} width={isMobile ? "90%" : "70%"}></img>
                            <EditCalendarIcon  sx={{ color: "#99ca3b",  }} />
                            </Stack>
                          </Grid>

                          <Grid item xs={9}>
                            <Stack>
                              <Typography fontWeight={"bold"} variant='h5' mb={2}>
                                Divya Chatterjee
                              </Typography>
                              <Typography variant="subtitle2" color="#949498">
                                Designation
                              </Typography>
                              <Typography variant='p' mb={2}>
                              Assistant Manager - HR
                              </Typography>
                              <Typography variant="subtitle2" color="#949498">
                                Company Name
                              </Typography>
                              <Typography variant='p' mb={2}>
                                XXY Company Name
                              </Typography>
                            </Stack>

                          </Grid>
                          <Grid item xs={12}>
                            <Stack>
                              <Typography variant="subtitle2" color="#949498">
                                About Me
                              </Typography>
                              <Typography variant='p' mb={2}>
                                Microsoft enables digital transformation for the era of an intelligent cloud and an intelligent edge. Its mission is to empower every person and every organization on the planet to achieve more. Microsoft set up its India operations in 1990. Microsoft in India offers its global cloud services from local data centers to accelerate digital transformation across Indian start-ups, businesses, and government agencies.
                              </Typography>

                            </Stack>

                          </Grid>
                        </Grid>
                      </Box>
                    </Grid>
                  </Grid>

                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>

              <Box component={"div"} pl={2} pr={2}>
                <Box border={"2px solid #f8f8f8"}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} >
                      <Box sx={{ backgroundColor: "#f8f8f8", pr: 2 }}>
                        <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                          <Typography variant='h6' p={1} pl={3}>
                            My Account Settings
                          </Typography>
                          <EditCalendarIcon sx={{ color: "#99ca3b" }} />
                        </Stack>
                      </Box>
                      <Box p={3}>
                        <Grid container spacing={2} alignItems={"center"}>

                          <Grid item xs={12} md={6} >

                            <Stack>
                              <Typography variant="subtitle2" color="#949498">
                                Full Name*
                              </Typography>
                              <Typography variant='p' mb={2}>
                                Divya Chatterjee
                              </Typography>
                            </Stack>

                          </Grid>
                          <Grid item xs={12} md={6} >

                            <Stack>
                              <Typography variant="subtitle2" color="#949498">
                                Designation
                              </Typography>
                              <Typography variant='p' mb={2}>
                                Assistant Manager - HR
                              </Typography>
                            </Stack>

                          </Grid>
                          <Grid item xs={12} md={6} >

                            <Stack>
                              <Typography variant="subtitle2" color="#949498">
                                Phone / Landline*
                              </Typography>
                              <Typography variant='p' mb={2}>
                                7012248563
                              </Typography>
                            </Stack>

                          </Grid>

                          <Grid item xs={12} md={6} >
                            <Typography color="#44ace0" fontWeight={"bold"} variant='p'>Change Password</Typography>
                          </Grid>


                        </Grid>
                      </Box>

                    </Grid>


                  </Grid>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>

              <Box component={"div"} pl={2} pr={2}>
                <Box border={"2px solid #f8f8f8"}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} >
                      <Box sx={{ backgroundColor: "#f8f8f8", pr: 2 }}>
                        <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                          <Typography variant='h6' p={1} pl={3}>
                            Application Settings
                          </Typography>
                          <EditCalendarIcon sx={{ color: "#99ca3b" }} />
                        </Stack>
                      </Box>
                      <Box p={3}>
                        <Typography variant="subtitle2" color="#949498" >
                          Recieved job application via
                        </Typography>
                        <Stack direction={"row"}>
                          <RadioGroup size="small" defaultValue="1">
                            <FormControlLabel value="1" control={<Radio sx={{
                              '&, &.Mui-checked': {
                                color: '#99ca3b',
                              },
                            }} />} label="Only on my dashboard" />
                            <FormControlLabel value="2  " control={<Radio sx={{
                              '&, &.Mui-checked': {
                                color: '#99ca3b',
                              },
                            }} />} label="Email and on my dashboard" />
                          </RadioGroup>
                        </Stack>
                        <Typography variant="subtitle2" color="#949498" mb={1}>
                          *Please note, this setting will not impact your old job postings
                        </Typography>
                      </Box>

                    </Grid>


                  </Grid>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </CardContent>

      </Card>

    </Box>
  )
}
