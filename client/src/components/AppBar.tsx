import React from 'react';
import { DarkMode, LightMode } from "@mui/icons-material";
import { AppBar as MUIAppBar, Toolbar, IconButton, Typography, Box, } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PhotoLogo from '../logo/PhotoLogo.tsx';
import { Titles } from '../enums/titlesEnum.ts';
import { useAtom } from "jotai";
import { modeAtom } from "../atoms/modeAtom";


const AppBar: React.FC = () => {
  const [valueModeAtom, setModeAtom] = useAtom(modeAtom);

  const handleChangeMode = () => {
    setModeAtom(valueModeAtom === 'dark' ? 'light' : 'dark');
  }

  const navigate = useNavigate();


  return (
    <MUIAppBar position="static">
      <Toolbar sx={{ display: 'flex', justifyContent: "space-between" }}>
        <Box onClick={() => navigate('/')} sx={{ display: 'flex', justifyContent: "space-between", alignItems: "center", cursor: "pointer", fontFamily: "fantasy", color: "#FFEF00", marginLeft: 1 }}>
          <PhotoLogo />
          <Typography variant="h6" sx={{}}>
            {Titles.titleMain}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: "space-between" }}>
          <IconButton color="inherit" onClick={handleChangeMode} sx={{ marginRight: 0.2 }}>
            {valueModeAtom === 'dark' ? <LightMode /> : <DarkMode />}
          </IconButton>
        </Box>
      </Toolbar>
    </MUIAppBar>
  );
};

export default AppBar;
