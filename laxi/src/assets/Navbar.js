import React from 'react'

<<<<<<< HEAD
export const Navbar = () => {
  return (
    <div>Navbar</div>
  )
=======
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
                <p class='nav'><div class="logo"></div>SS<span>BP</span></p>
            </div>
            {/* <div class="nav-items">
                <a href="#" class="nav">Home</a>
                <a href="#" class="nav">Search</a>
                <a href="#" class="nav">Following</a>
                <a href="#" class="nav">Settings</a>
            </div> */}
            <div className='nav-btn'>
                <button class="log button">Home</button>
                <button class="reg button"><a href='https://www.figma.com/proto/Iyt7SG4PY82k5MmZgPx0jD/Laxi?node-id=0-1&t=L7XLlgZiEdj9aQr2-1' target='_blank'>Prototype</a></button>
            </div>
        </div>
    );
>>>>>>> Team
}
export default Navbar