import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { TbPointFilled } from "react-icons/tb";
import { useTheme } from "@mui/material/styles";

export default function About() { 
    const theme = useTheme(); 
    return (
        <Box 
            sx={{ 
                mt: 10, 
                ml: 30, 
                mr: 5, 
                [theme.breakpoints.down("md")]: { ml: 22, }, 
                [theme.breakpoints.down("sm")]: { ml: 18, }, 
            }} 
        > 
            <Typography variant="h5" gutterBottom>
                About me
            </Typography>
            <Typography variant="body1" gutterBottom>
                <TbPointFilled /> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
            <Typography variant="body1" gutterBottom>
                <TbPointFilled /> Nunc augue nisl, tempus vel sem dictum, auctor posuere metus. Duis nec tellus sodales, fermentum mi non, finibus ante.
            </Typography>
            <Typography variant="body1" gutterBottom>
                <TbPointFilled /> Pellentesque tincidunt congue laoreet. Nullam pretium sapien et leo sollicitudin scelerisque. Donec id auctor justo, nec porttitor tellus.
            </Typography>
            <Typography variant="body1" gutterBottom>
                <TbPointFilled /> Aliquam tincidunt elementum massa, nec semper ex euismod eget.
            </Typography>
            <Typography variant="body1" gutterBottom>
                <TbPointFilled /> Fusce ac diam ac dui dapibus luctus maximus sed erat. Praesent blandit id sapien non porttitor.
            </Typography>
        </Box>
    );
}
