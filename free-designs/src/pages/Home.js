import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

function Home() {
  const menuItems = [
    'Buttons',
    'Cards',
    'Carousel',
    'Dropdown',
    'Form',
    'Gallery',
    'Modal',
    'Navbar',
    'Pagination',
    'Tooltip',
    'Card deck',
    'Notification',
    'Progress bar',
    'Slider',
    'Tag',
    'Tabs',
    'Toggle switch'
  ];

  return (
    <div className='body'>
      <Sidebar>
        <Menu className='sidebarWrapper'>
          {menuItems.map((label, index) => (
            <MenuItem key={index} className='sidebar'>
              {label}
            </MenuItem>
          ))}
          <SubMenu label="Components" className='sidebar'>
            {menuItems.slice(2).map((label, index) => (
              <MenuItem key={index} className='sidebar'>
                {label}
              </MenuItem>
            ))}
          </SubMenu>
        </Menu>
      </Sidebar>
    </div>
  );
}

export default Home;
