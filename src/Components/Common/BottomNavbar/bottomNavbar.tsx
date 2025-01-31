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

const MobileNavbar: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Check if the screen is in mobile view
  const [value, setValue] = React.useState(0); // State to track the selected navigation item

  return (
    <>
      {isMobile && (
        <Paper
          sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
          elevation={3}
        >
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            {/* Home */}
            <BottomNavigationAction 
            // label="Home" 
            icon={<HomeIcon />} />

            {/* Product View */}
            <BottomNavigationAction
            //   label="Product View"
              icon={<ShoppingCartIcon />}
            />
            {/* Product View */}
            <BottomNavigationAction
            //   label="Product View"
              icon={<ShoppingCartIcon />}
            />

            {/* Calculator */}
            <BottomNavigationAction
            //   label="Calculator"
              icon={<CalculateIcon />}
            />

            {/* Chat */}
            <BottomNavigationAction 
            // label="Chat"
             icon={<ChatIcon />} />
          </BottomNavigation>
        </Paper>
      )}
    </>
  );
};

export default MobileNavbar;