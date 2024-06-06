function FAQSection() {
    return (
        <>
            <div>
                <section id="faq" class="faq section-bg">
                    <div class="container" data-aos="fade-up">

                        <div class="section-title">
                            <h2>Frequently Asked Questions</h2>
                            {/* <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p> */}
                        <p>Below You'll find the answers to the question we get asked the most about providing services to the physical labours with virtual services.</p>
                        </div>

                        <div class="faq-list">
                            <ul>
                                <li data-aos="fade-up" data-aos-delay="100">
                                    <i class="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" class="collapse" data-bs-target="#faq-list-1">How can cloud services reach individuals who may not be familiar with them, such as poor labours? <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                                    <div id="faq-list-1" class="collapse show" data-bs-parent=".faq-list">
                                        <p>
                                        Collaborate with local community organizations, NGOs, or government agencies that work directly with poor laborers to raise awareness about the benefits of cloud services and provide educational resources and also Provide resources and support in local languages to ensure that information about cloud services is accessible and relevant to the target audience.</p>                                    </div>
                                </li>

                                <li data-aos="fade-up" data-aos-delay="200">
                                    <i class="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-2" class="collapsed">What are some potential benefits of introducing cloud services to poor labours?<i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                                    <div id="faq-list-2" class="collapse" data-bs-parent=".faq-list">
                                        <p>
                                        Cloud-based platforms can provide access to valuable information, resources, and educational materials that can empower individuals to improve their skills, access job opportunities, and enhance their livehoods.Cloud services can provide individuals with the tools and resources they need to start and grow their own businesses, whether it's selling goods online, offering freelance services, or accessing funding and support networks. </p>
                                    </div>
                                </li>

                                <li data-aos="fade-up" data-aos-delay="300">
                                    <i class="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-3" class="collapsed">How can individuals, be encouraged to trust mobile applications that provide cloud services?<i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                                    <div id="faq-list-3" class="collapse" data-bs-parent=".faq-list">
                                        <p> Ensure transparency in how the application collects, stores, and uses data, as well as how it generates revenue. Provide clear and easily understandable privacy policies and terms of service and also it provides accessibility,reliability as well as security to the customers. It clearly communicate the benefits of using the application, such as access to valuable resources, job opportunities, financial services, or educational materials. Provide testimonials, case studies, or success stories to demonstrate real-world impact </p>
                                    </div>
                                </li>

                                <li data-aos="fade-up" data-aos-delay="400">
                                    <i class="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-4" class="collapsed"> How can mobile applications providing cloud services build credibility and trust over time? <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                                    <div id="faq-list-4" class="collapse" data-bs-parent=".faq-list">
                                        <p>Encourage users to leave reviews and ratings on app stores and other platforms, and respond promptly to feedback, whether positive or negative, to show that user input is valued and taken seriously and also it prioritize data protection and privacy by complying with applicable regulations and industry standards, and communicate transparently about data handling practices to reassure users about the security of their information.</p>
                                    </div>
                                </li>

                                <li data-aos="fade-up" data-aos-delay="500">
                                    <i class="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-5" class="collapsed">How can organizations and stakeholders collaborate to effectively introduce cloud services to poor labours?<i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                                    <div id="faq-list-5" class="collapse" data-bs-parent=".faq-list">
                                        <p>Provide grants or subsidies to organizations and individuals to help cover the costs of technology adoption, such as purchasing devices or accessing internet services, especially in underserved areas. Regularly monitor and evaluate the impact of initiatives aimed at introducing cloud services to poor laborers to identify successes, challenges, and areas for improvement, and to ensure accountability and transparency.</p>
                                    </div>
                                </li>

                            </ul>
                        </div>

                    </div>
                </section>
            </div>
        </>
    );
}


export default FAQSection;