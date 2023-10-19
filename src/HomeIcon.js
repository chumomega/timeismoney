import * as React from 'react';
import SvgIcon from '@mui/material/SvgIcon';
import {useNavigate} from "react-router";

function HomeIcon(props) {
  const navigate = useNavigate();
  
  return (
    <SvgIcon {...props} onClick={() => navigate(`/timeismoney/`)}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

export default HomeIcon;
