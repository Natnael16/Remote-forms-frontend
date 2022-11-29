import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ButtonPrimary from "./button";
import AddIcon from "@material-ui/icons/Add";
import { useNavigate} from "react-router-dom";



export default function ButtonAppBar() {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* {this.props.hidden} */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Sketch Submission Form
          </Typography>
          
          <ButtonPrimary
              
                  style={{position: "absolute", right: "10px" }}
                  onClick={() => {
                    
                    navigate("/")
                  }}
                 
                  text="Create New"
                  hidden={false}
                  color="Secondary"
                  startIcon={<AddIcon></AddIcon>}
                  size="small"
                ></ButtonPrimary>
        </Toolbar>
      </AppBar>
    </Box>
  );
}