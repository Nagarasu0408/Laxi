import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function GetInTouch() {
    return (
        <Container className="content">
            <Row className="justify-content-center">
                <Col md={10}>
                    <Row className="align-items-center">
                        <Col lg={7} className="mb-5 mb-lg-0">
                            <h2 className="mb-5">Fill the form. <br /> It's easy.</h2>

                            <Form className="border-right pr-5 mb-5" method="post" id="contactForm" name="contactForm">
                                <Row>
                                    <Col md={6} className="form-group">
                                        <Form.Control type="text" name="fname" id="fname" placeholder="First name" />
                                    </Col>
                                    <Col md={6} className="form-group">
                                        <Form.Control type="text" name="lname" id="lname" placeholder="Last name" />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={12} className="form-group">
                                        <Form.Control type="email" name="email" id="email" placeholder="Email" />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={12} className="form-group">
                                        <Form.Control as="textarea" name="message" id="message" cols="30" rows="7" placeholder="Write your message" />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={12}>
                                        <Button type="submit" className="btn btn-primary rounded-0 py-2 px-4">Send Message</Button>
                                        <span className="submitting"></span>
                                    </Col>
                                </Row>
                            </Form>

                            <div id="form-message-warning mt-4"></div>
                            <div id="form-message-success">
                                Your message was sent, thank you!
                            </div>
                        </Col>
                        <Col lg={4} className="ml-auto">
                            <h3 className="mb-4">Let's talk about everything.</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil deleniti itaque similique magni. Magni,
                                laboriosam perferendis maxime!</p>
                            <p><a href="#">Read more</a></p>
                        </Col>
                    </Row>
                </Col>
                <div class="row mb-5">
                    <div class="col-md-3">
                        <div class="dbox w-100 text-center">
                            <div class="icon d-flex align-items-center justify-content-center">
                                <span class="fa fa-map-marker"></span>
                            </div>
                            <div class="text">
                                <p><span>Address:</span> 198 West 21th Street, Suite 721 New York NY 10016</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="dbox w-100 text-center">
                            <div class="icon d-flex align-items-center justify-content-center">
                                <span class="fa fa-phone"></span>
                            </div>
                            <div class="text">
                                <p><span>Phone:</span> <a href="tel://1234567920">+ 1235 2355 98</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="dbox w-100 text-center">
                            <div class="icon d-flex align-items-center justify-content-center">
                                <span class="fa fa-paper-plane"></span>
                            </div>
                            <div class="text">
                                <p><span>Email:</span> <a href="mailto:info@yoursite.com">info@yoursite.com</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="dbox w-100 text-center">
                            <div class="icon d-flex align-items-center justify-content-center">
                                <span class="fa fa-globe"></span>
                            </div>
                            <div class="text">
                                <p><span>Website</span> <a href="#">yoursite.com</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </Row>
        </Container>
    );
}

export default GetInTouch;
