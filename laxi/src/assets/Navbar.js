import React from 'react'

function NavBar() {
    return (
        // <Navbar bg="light" expand="lg">
        //     <Container fluid>
        //         <Navbar.Brand href="#">Fun <span style={{ color: "red", fontSize: "25px", fontWeight: '800' }}>Tech</span></Navbar.Brand>
        //         <Form className="d-flex">
        //             <FormControl
        //                 type="search"
        //                 placeholder="Search"
        //                 className="me-2"
        //                 aria-label="Search"
        //             />
        //             <Button variant="outline-success" type="submit">Search</Button>
        //         </Form>
        //     </Container>
        // </Navbar>



        <div className='nav-bar'>
            <div class="Logo">
                <p class='nav'>Fun <span>Tech</span></p>
            </div>
            <div class="nav-items">
                <a href="#" class="nav">Home</a>
                <a href="#" class="nav">Search</a>
                <a href="#" class="nav">Following</a>
                <a href="#" class="nav">Settings</a>
            </div>
            <div className='nav-btn'>
                <button class="log button">Login</button>
                <button class="reg button">Sign up</button>
            </div>
        </div>
    );
}

export default NavBar;










































// import React from "react";
// import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
// import { AcmeLogo } from "./AcmeLogo.jsx";

// export default function App() {
//     const [isMenuOpen, setIsMenuOpen] = React.useState(false);

//     const menuItems = [
//         "Profile",
//         "Dashboard",
//         "Activity",
//         "Analytics",
//         "System",
//         "Deployments",
//         "My Settings",
//         "Team Settings",
//         "Help & Feedback",
//         "Log Out",
//     ];

//     return (
//         <Navbar
//             isBordered
//             isMenuOpen={isMenuOpen}
//             onMenuOpenChange={setIsMenuOpen}
//         >
//             <NavbarContent className="sm:hidden" justify="start">
//                 <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
//             </NavbarContent>

//             <NavbarContent className="sm:hidden pr-3" justify="center">
//                 <NavbarBrand>
//                     <AcmeLogo />
//                     <p className="font-bold text-inherit">ACME</p>
//                 </NavbarBrand>
//             </NavbarContent>

//             <NavbarContent className="hidden sm:flex gap-4" justify="center">
//                 <NavbarBrand>
//                     <AcmeLogo />
//                     <p className="font-bold text-inherit">ACME</p>
//                 </NavbarBrand>
//                 <NavbarItem>
//                     <Link color="foreground" href="#">
//                         Features
//                     </Link>
//                 </NavbarItem>
//                 <NavbarItem isActive>
//                     <Link href="#" aria-current="page">
//                         Customers
//                     </Link>
//                 </NavbarItem>
//                 <NavbarItem>
//                     <Link color="foreground" href="#">
//                         Integrations
//                     </Link>
//                 </NavbarItem>
//             </NavbarContent>

//             <NavbarContent justify="end">
//                 <NavbarItem className="hidden lg:flex">
//                     <Link href="#">Login</Link>
//                 </NavbarItem>
//                 <NavbarItem>
//                     <Button as={Link} color="warning" href="#" variant="flat">
//                         Sign Up
//                     </Button>
//                 </NavbarItem>
//             </NavbarContent>

//             <NavbarMenu>
//                 {menuItems.map((item, index) => (
//                     <NavbarMenuItem key={`${item}-${index}`}>
//                         <Link
//                             className="w-full"
//                             color={
//                                 index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
//                             }
//                             href="#"
//                             size="lg"
//                         >
//                             {item}
//                         </Link>
//                     </NavbarMenuItem>
//                 ))}
//             </NavbarMenu>
//         </Navbar>
//     );
// }

