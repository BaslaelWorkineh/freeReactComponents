import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

function Home() {
  return (
    <div className='body'>
         <Sidebar >
        <Menu className='sidebarWrapper' >
        <MenuItem className='sidebar'>Buttons</MenuItem>
        <MenuItem className='sidebar'>Cards</MenuItem>
        <MenuItem className='sidebar'>Carousel</MenuItem>
        <MenuItem className='sidebar'>Dropdown</MenuItem>
        <MenuItem className='sidebar'>Form</MenuItem>
        <MenuItem className='sidebar'>Gallery</MenuItem>
        <MenuItem className='sidebar'>Modal</MenuItem>
        <MenuItem className='sidebar'>Navbar</MenuItem>
        <MenuItem className='sidebar'>Pagination</MenuItem>
        <MenuItem className='sidebar'>Tooltip</MenuItem>
        <MenuItem className='sidebar'>Card deck</MenuItem>
        <MenuItem className='sidebar'>Notification</MenuItem>
        <MenuItem className='sidebar'>Progress bar</MenuItem>
        <MenuItem className='sidebar'>Slider</MenuItem>
        <MenuItem className='sidebar'>Tag</MenuItem>
        <MenuItem className='sidebar'>Tabs</MenuItem>
        <MenuItem className='sidebar'>Toggle switch</MenuItem>
      </Menu>
    </Sidebar>
    </div>
   
  );
}

export default Home;
