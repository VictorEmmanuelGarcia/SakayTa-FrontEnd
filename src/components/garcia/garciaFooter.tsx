import { Typography, Box } from '@mui/material';

type FooterProps = {
  name: string,
  course: string,
  section: string,
}

const Footer = ({ name, course, section }: FooterProps) => {
  return ( 
    <Box sx={{ padding: "90px 0" }}>
      <Typography variant="body2" color="black" align="center">
        {name} {course} {section} - CSIT321
      </Typography>
      <Typography variant="body2" color="black" align="center">
        Copyright © SakayTa {new Date().getFullYear()}
      </Typography>
    </Box>
   );
}
 
export default Footer;