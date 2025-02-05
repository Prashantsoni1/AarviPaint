import React from 'react';
import {
  BottomNavigation,
  BottomNavigationAction,
  useMediaQuery,
  useTheme,
  Paper,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CalculateIcon from '@mui/icons-material/Calculate';
import ChatIcon from '@mui/icons-material/Chat';
import visualizerGif from '../../../assets/navbar/visulizerGif.png'
const MobileNavbar: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Check if the screen is in mobile view
  const [value, setValue] = React.useState(0); // State to track the selected navigation item

  return (
    <>
      {isMobile && (
        <Paper
          sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, borderRadius: '16px' }}
          elevation={3}
        >
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            sx={{ '& .MuiBottomNavigationAction-root': { minWidth: 20 } }} // Reduce spacing
          >
            <BottomNavigationAction sx={{ minWidth: 20 }} icon={<HomeIcon />} />
            <BottomNavigationAction sx={{ minWidth: 20 }} icon={<ShoppingCartIcon />} />
            <BottomNavigationAction
              sx={{ minWidth: 50 }}
              icon={<img src={visualizerGif} alt="GIF Icon" style={{ width: 20, height: 20 }} />}
            />
            <BottomNavigationAction sx={{ minWidth: 20 }} icon={<CalculateIcon />} />
            <BottomNavigationAction sx={{ minWidth: 20 }} icon={<ChatIcon />} />
          </BottomNavigation>

        </Paper>
      )}
    </>
  );
};

export default MobileNavbar;