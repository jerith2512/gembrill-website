export type NavItem = { label: string; href: string }


export type Bullet = string | { text: string; href: string }

export type Service = {
  slug: string
  title: string
  outcome: string
  bullets: Bullet[]
  image: string
  detailedDescription?: string
}


export type LifecycleStep = {
  title: string
  items: string[]
  iconName: "FileText" | "Code2" | "PlayCircle" | "FileBarChart" | "Settings" | "Wrench" | "RefreshCw"
  color: string
}

export type Lifecycle = {
  title: string
  steps: LifecycleStep[]
  modality?: "cycle" | "process" | "service-wheel"
}

export type SubService = {
  slug: string
  parentSlug: string
  title: string
  outcome: string
  detailedDescription: string
  bullets: string[]
  lifecycle?: Lifecycle
}

export type CaseStudy = {
  title: string
  industry: string
  problem: string
  solution: string
  impact: string
}


export const nav: NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Company", href: "/company" },
  { label: "Careers", href: "/careers" },
]

export const services: Service[] = [
  {
    slug: "product-engineering",
    title: "Product Engineering",
    outcome: "Realize predictable project success and measurable ROI.",
    detailedDescription: "Our product engineering team understands the complexities involved in building world-class software. We combine deep expertise in legacy and emerging technologies with a flexible approach that adheres to your specific processes. Most importantly, we maintain a strong respect for your intellectual property rights throughout the engagement.",
    bullets: [
      "Complex product engineering",
      "Legacy and emerging technologies",
      "Adherence to customer processes",
      "Respect for IP rights",
      "Predictable project success",
    ],
    image: "/images/product-engineering.png",
  },
  {
    slug: "software-development",
    title: "Software Development",
    outcome: "High quality and cost-effective IT services.",
    detailedDescription: "We provide comprehensive software development services across the entire value chain. From building robust enterprise applications that streamline your operations to developing custom solutions that give you a competitive edge, our team delivers high-quality code that scales.",
    bullets: [
      { text: "Enterprise Application Development", href: "/services/software-development/enterprise-application-development" },
      { text: "Custom Application Development", href: "/services/software-development/custom-application-development" },
      { text: "Application Modernization", href: "/services/software-development/application-modernization" },
    ],
    image: "/images/software-development.png",
  },
  {
    slug: "portal-development",
    title: "Portal Development",
    outcome: "Robust portals that streamline information and collaboration.",
    detailedDescription: "We specialize in integrating various technologies and platforms to meet your specific needs. Our portals are designed to handle a large number of requests and transactions while remaining accessible across all devices and platforms. We ensure seamless content management and team collaboration.",
    bullets: [
      { text: "SharePoint Development", href: "/services/portal-development/sharepoint-development" },
      { text: "Drupal Development", href: "/services/portal-development/drupal-development" },
    ],
    image: "/images/portal-development.png",
  },
  {
    slug: "software-testing",
    title: "Software Testing",
    outcome: "Ensure quality with comprehensive testing strategies.",
    detailedDescription: "Quality is at the core of everything we do. Our comprehensive testing strategies cover the entire lifecycle, ensuring your software is bug-free, performant, and secure. We employ both manual and automated testing methodologies to catch issues early and reduce time-to-market.",
    bullets: [
      { text: "Functional Testing", href: "/services/software-testing/functional-testing" },
      { text: "Automation Testing", href: "/services/software-testing/automation-testing" },
      { text: "Performance Testing", href: "/services/software-testing/performance-testing" },
    ],
    image: "/images/software-testing.png",
  },
  {
    slug: "bpo-services",
    title: "BPO Services",
    outcome: "Leverage best processes to reduce operational costs.",
    detailedDescription: "Our BPO services allow you to leverage best-in-class processes and technology to reduce operational costs and improve efficiency. We handle the day-to-day tasks so you can focus on your core business strategic initiatives.",
    bullets: [
      "Appointment Setting & Telemarketing",
      "Market Research and Surveys",
      "Lead Generation",
      "Collections & Follow-up",
      "Voice Broadcast",
      "Telephonic Auditing",
    ],
    image: "/images/bpo-services.png",
  },
  {
    slug: "outsourcing",
    title: "Outsourcing",
    outcome: "Strategic partnerships that deliver value beyond checking boxes.",
    detailedDescription: "We believe in strategic partnerships that deliver value beyond just a transactional outsourcing relationship. By leveraging our global talent pool and proven methodologies, we help you improve time-to-market and significantly reduce development and R&D costs.",
    bullets: [
      "Improve time-to-market",
      "Reduce development costs",
      "Reduce R&D costs",
      "Flexible engagement models",
      "Access to global talent",
    ],
    image: "/images/outsourcing.png",
  },
]

export const subServices: SubService[] = [
  {
    slug: "enterprise-application-development",
    parentSlug: "software-development",
    title: "Enterprise Application Development",
    outcome: "Building applications for the connected enterprise.",
    detailedDescription: "We build applications for the connected enterprise, taking integration of systems and re-use of assets into consideration at the design phase itself. Our expertise includes multi-protocol communication to communicate with diverse devices and user adoption through Web 2.0 level integration to make applications intuitive. We also specialize in the SOA-fication of existing applications to allow integration with other best-of-breed systems, and building business intelligence capabilities by integrating applications with reporting tools.",
    bullets: [
      "Building applications for the connected enterprise",
      "Multi-protocol communication",
      "User adoption and SOA-fication",
      "Building business intelligence capabilities",
      "Enablement of applications and business critical reports",
      "Strong technology expertise in handling complex issues",
      "Expertise in both legacy and newer technologies",
      "Service Orientation (SOA expertise)",
      "Accelerated Process Adoption",
      "Value Relationship",
    ],
  },
  {
    slug: "custom-application-development",
    parentSlug: "software-development",
    title: "Custom Application Development",
    outcome: "Tailored solutions for your unique business needs.",
    detailedDescription: "We provide component development, distributed applications, and XML applications. Our team is proficient in programming with various enterprise-class technologies like J2EE, .NET, C++, and LAMP. We offer database design & consulting, portal development and implementation, performance tuning and optimization of applications, application re-engineering and re-factoring, and application maintenance and enhancement.",
    bullets: [
      "Client Server Applications, Web Applications",
      "Component Development, Distributed Applications, and XML Applications",
      "Programming in J2EE, .NET, C++, and LAMP",
      "Database Design & Consulting",
      "Portal Development and Implementation",
      "Performance Tuning and Optimization",
      "Application Re-engineering and Re-factoring",
      "Application Maintenance and Enhancement",
      "Expertise in legacy and newer technologies",
      "De-risking to control business risk",
      "Accelerated Process Adoption",
      "Value Relationship",
    ],
  },
  {
    slug: "application-modernization",
    parentSlug: "software-development",
    title: "Application Modernization",
    outcome: "Prioritizing modernization initiatives for greatest ROI.",
    detailedDescription: "We start by understanding your application portfolio inventory, the application's technical reality, and your business processes. We then prioritize application modernization initiatives that will provide the greatest return on your investment. Our services include Application Enhancement, Application Migration, and Application Re-engineering.",
    bullets: [
      "Understanding application portfolio and business processes",
      "Prioritization of modernization initiatives",
      "Application Enhancement",
      "Application Migration",
      "Application Re-engineering",
      "Deep technical knowledge and understanding of portfolios",
      "Rich experience in handling modernization projects",
      "Centre of Excellence in architecture and migration",
      "Performance Optimization",
      "Accelerated Process Adoption",
    ],
  },
  {
    slug: "functional-testing",
    parentSlug: "software-testing",
    title: "Functional Testing",
    outcome: "Increase delivery confidence by validating and verifying business needs.",
    detailedDescription: "The cost of remediating software defects in the production environment increases the overall software development costs, and this means that defect removal has to be prioritized. Gembrill helps organizations increase their delivery confidence by validating and verifying business needs along with testing the software. Gembrill's proven processes and efficient methodology ensure the quality of your software applications while minimizing the overall application development costs. Our functional testing services include the entire cycle of testing, which covers test consulting, development, execution and reporting.",
    bullets: [
      "24/7 Support - 24/7 release testing support and ability to scale the team to meet the release testing time frame",
      "Delivery Confidence - Increased test coverage, increased reliability and reduced failure",
      "Reduced Cost and Time - Integration with SDLC removes defects early and repeatable test plans ensure reduced cost and time",
      "Strong Technology Expertise - Ready availability of certified testing practitioners with expertise in development practices for deployment in customer projects",
      "Accelerated Process Adoption - SEI CMMi Level 5 processes and flexibility to adhere to customer processes reduce risk and cost of execution",
    ],
    lifecycle: {
      title: "Testing Lifecycle",
      steps: [
        {
          title: "Specifications",
          iconName: "FileText",
          color: "bg-blue-100 text-blue-600 border-blue-200",
          items: [
            "Understand the software",
            "Specifications documentation, use cases, screens etc.",
            "Set up the test environment",
            "Sign-off",
          ],
        },
        {
          title: "Development",
          iconName: "Code2",
          color: "bg-orange-100 text-orange-600 border-orange-200",
          items: [
            "Develop test plan and QA schedule",
            "Develop test cases",
            "Validate test scripts",
            "Test case review and sign-off",
          ],
        },
        {
          title: "Execution",
          iconName: "PlayCircle",
          color: "bg-green-100 text-green-600 border-green-200",
          items: [
            "Execute test cases",
            "Report defects to the defect tracking tool",
            "Re-validate & verify the fixed defects and close them",
            "Perform regression testing",
          ],
        },
        {
          title: "Reports",
          iconName: "FileBarChart",
          color: "bg-amber-100 text-amber-600 border-amber-200",
          items: ["Test summary report", "Sign-off"],
        },
      ],
    },
  },
  {
    slug: "automation-testing",
    parentSlug: "software-testing",
    title: "Automation Testing",
    outcome: "Improve delivery confidence and decrease long-term costs.",
    detailedDescription: "Automation of manual efforts can result in positive return on investment and at the same time will improve the delivery confidence of the software. Gembrill partners with its customers to automate their software testing and improve the quality of their delivery while decreasing long-term costs substantially. Gembrill considers a number of parameters for automation testing that include: Maturity of the software, Number of regression test cases, Percentage of test cases that can be automated, Number of releases expected in a year, Number of regressions for every release, Appropriate automation tool, Ability and skills of resources to do script development, and Cost of the tool and the roadmap for the software. Gembrill provides a comprehensive automation solution for the quality assurance (QA) needs of any ISV.",
    bullets: [
      "Delivery Confidence - increased test coverage, increased reliability and reduced failure",
      "Reduced Cost and Time - 80% reduction in time and 30% reduction in costs over extended periods of automation",
      "Strong Technology Expertise - Experience and expertise in a variety of test management tools and test automation tools; experience in developing scripts and automation frameworks",
      "Accelerated Process Adoption - SEI CMMi Level 5 processes and flexibility to adhere to customer processes reduce risk and cost of execution",
      "Value Relationship - Transparent and flexible engagement models including low-risk pilots",
    ],
    lifecycle: {
      title: "Automation Lifecycle",
      steps: [
        {
          title: "Consulting",
          iconName: "Settings",
          color: "bg-blue-100 text-blue-600 border-blue-200",
          items: [
            "Evaluate the software-if it is right for automation",
            "Choose a tool",
            "Perform a POC through automation of a few scenarios/complex workflows.",
            "Validate the suitability of the tool",
          ],
        },
        {
          title: "Development",
          iconName: "Code2",
          color: "bg-orange-100 text-orange-600 border-orange-200",
          items: [
            "Build automation testing framework",
            "Design & Develop test scripts",
            "Check readiness of test environment",
          ],
        },
        {
          title: "Execution",
          iconName: "PlayCircle",
          color: "bg-green-100 text-green-600 border-green-200",
          items: [
            "Scheduling and execution of test scripts",
            "Conduct analysis and report any defect in the defect tracking tool",
            "Fix defects",
            "Test execution report",
          ],
        },
        {
          title: "Maintenance",
          iconName: "Wrench",
          color: "bg-orange-100 text-orange-600 border-orange-200",
          items: [
            "Analysis of test scripts",
            "Implement Change requests and update scripts",
          ],
        },
      ],
    },
  },
  {
    slug: "performance-testing",
    parentSlug: "software-testing",
    title: "Performance Testing",
    outcome: "Ensure optimal performance and stability for your users.",
    detailedDescription: "Performance issues identified after software launch involves costly remedial work. Users refuse to tolerate a second rate software and demand a quality product. Performance testing and engineering ensures the optimal performance of your application for users. Gembrill specializes in performance testing, which focuses on addressing various scalability and performance issues of software and its IT infrastructure. Guided by knowledge of the development life cycle, performance engineering expertise and technical expertise, Gembrill helps its customers deploy highly robust, scalable, and interoperable software. Our services include Performance Benchmarking, Load Testing, Stress Testing, Performance testing at different layers (including network, middleware and application layers), Performance Tuning Services, and Performance management (CPU, memory, response times, system outage, input/output, infrastructure and network bandwidth).",
    bullets: [
      "Delivery Confidence - Increased reliability and stability of the application",
      "Risk Mitigation - Reduce the risks of application failure in a live environment; better utilization of resources post deployment",
      "Reduced Cost - 30% reduction in costs on the overall application development costs",
      "Strong Technology expertise - Experience and expertise in a variety of performance testing tools and working with multiple enterprises",
      "Accelerated Process Adoption - SEI CMMI Level 5 processes and flexibility to adhere to customer processes reduce risk and cost of execution",
      "Value Relationship - Transparent and flexible engagement models including low-risk pilots",
    ],
    lifecycle: {
      title: "Performance Testing Cycle",
      modality: "process",
      steps: [
        {
          title: "Understand the performance capabilities/needs of the software",
          items: [],
          iconName: "FileText",
          color: "bg-[#e17039] text-white border-[#e17039]",
        },
        {
          title: "Tools Evaluation",
          items: [],
          iconName: "Settings",
          color: "bg-[#829db7] text-white border-[#829db7]",
        },
        {
          title: "Scripting",
          items: [],
          iconName: "Code2",
          color: "bg-[#d8b056] text-white border-[#d8b056]",
        },
        {
          title: "Test Data",
          items: [],
          iconName: "FileBarChart",
          color: "bg-[#f4deb3] text-stone-600 border-[#f4deb3]",
        },
        {
          title: "Testing",
          items: [],
          iconName: "PlayCircle",
          color: "bg-[#9cc17a] text-white border-[#9cc17a]",
        },
        {
          title: "Reports",
          items: [],
          iconName: "FileText",
          color: "bg-[#dcaec3] text-white border-[#dcaec3]",
        },
      ],
    },
  },
  {
    slug: "sharepoint-development",
    parentSlug: "portal-development",
    title: "SharePoint Development",
    outcome: "Deploy and share knowledge efficiently across your organization.",
    detailedDescription: "Businesses today are dependent on effective exchange of information and Microsoft Office SharePoint Server (MOSS 2007) is increasingly used where businesses want to deploy and share knowledge and management information online across a wide group of stakeholders. SharePoint provides a portal through which diverse set of people can access even more diverse set of information. MOSS can be used as an application development framework to put together working applications quickly by leveraging out-of-the-box features of SharePoint. MOSS also allows customizations and creation of web parts to go with your applications. Gembrill is a Microsoft Gold Certified Partner with expertise on the complete Microsoft technology stack and offers both turnkey and piecemeal services on SharePoint. MOSS is based on ASP.NET and SQL technologies, which makes it compatible with majority of applications. Gembrill's SharePoint practice offers MOSS services that leverage all the benefits of MOSS.",
    bullets: [
      "Experience & Expertise - Deep expertise and experience in architecting, implementing and migrating solutions on SharePoint (2003 & 2007) framework helps us map product functionalities to various business scenarios, thereby providing our clients with the best possible solution",
      "Technology - Expertise in MOSS 2007, WSS 3.0, SharePoint Designer 2007, WWF 3.0, WCF 3.0, WPF, Silverlight and .NET stack",
      "Governance - Gembrill has built SharePoint Governance model and Training & Adoption roadmap that ensures successful rollout and acceptance of SharePoint",
      "Add-ons - Expertise in creating and supporting custom applications and web parts",
      "Accelerated Process Adoption - SEI CMMi level 5 processes and flexibility to adhere to customer processes for reducing risk and cost of execution",
      "Value Relationship - Microsoft Gold Certified Partner with transparent and flexible engagement models including low-risk pilots",
    ],
  },
  {
    slug: "drupal-development",
    parentSlug: "portal-development",
    title: "Drupal Development",
    outcome: "Accelerate your business success with integrated Drupal portals.",
    detailedDescription: "The need for integrated portals across businesses is only growing and every enterprise is figuring out a way to get their portal strategy right, which will accelerate their business success. Drupal as a framework, offers a fantastic choice for enterprises to build their portal strategy, irrespective of the nature of their business need - be it B2B, B2C or B2E. Gembrill has years of experience in developing and implementing Drupal for customers. Gembrill can customize Drupal addressing the content management, intranet, eCommerce, portal, custom application and social media needs of the customers.",
    bullets: [
      "Credibility - experience of having implemented multiple high volume and high transaction portal sites based on Drupal framework",
      "Knowledge - extensive knowledge on the core Drupal framework, customization skills, expertise in apache-mysql-php stack allows us to quickly put together portals",
      "Process - effective governance model of Drupal development and knowledge on various iterative and incremental development methodologies",
      "Security - ensuring hack and crack-free portals by continuous monitoring of vulnerabilities and keeping track of patches",
      "Value relationship - transparent and flexible engagement models including low-risk pilots, fixed bid, dedicated teams, time & material and outcome-based relationships",
    ],
    lifecycle: {
      title: "Gembrill's Drupal Development services include",
      modality: "service-wheel",
      steps: [
        {
          title: "Drupal Consulting",
          items: [],
          iconName: "Settings",
          color: "bg-blue-600 text-white border-blue-600",
        },
        {
          title: "Drupal Design",
          items: [],
          iconName: "Code2",
          color: "bg-blue-500 text-white border-blue-500",
        },
        {
          title: "Drupal Development",
          items: [],
          iconName: "Code2",
          color: "bg-blue-400 text-white border-blue-400",
        },
        {
          title: "Drupal Support",
          items: [],
          iconName: "Wrench",
          color: "bg-blue-500 text-white border-blue-500",
        },
        {
          title: "Drupal Maintenance and Performance",
          items: [],
          iconName: "RefreshCw",
          color: "bg-blue-600 text-white border-blue-600",
        },
      ],
    },
  },
]

export const metrics = [
  { value: "98%", label: "On-time delivery" },
  { value: "40%", label: "Avg. cycle time reduction" },
  { value: "85%", label: "Test coverage achieved" },
  { value: "22+", label: "Years in business" },
]

export const processSteps = [
  { step: "01", title: "Discovery", description: "Define scope, goals, and constraints in a structured kickoff." },
  { step: "02", title: "Planning", description: "Break work into milestones with clear deliverables." },
  { step: "03", title: "Execution", description: "Build, test, and ship in iterative cycles." },
  { step: "04", title: "Delivery", description: "Review outcomes and hand off with documentation." },
]

export const whyUs = [
  { title: "Predictable Success", description: "Realize predictable project success and measurable ROI." },
  { title: "Time-to-Market", description: "Improve time-to-market with our efficient delivery models." },
  { title: "Quality & Cost", description: "High quality services that reduce development and R&D costs." },
  { title: "IP Protection", description: "Strong respect for and protection of customer's intellectual property rights." },
]

export const caseStudies: CaseStudy[] = [
  {
    title: "Modernized a legacy platform for faster delivery",
    industry: "Enterprise Software",
    problem: "High change failure rate and slow releases across a legacy stack.",
    solution: "Incremental modernization with CI-integrated testing and refactoring.",
    impact: "Improved release reliability and reduced cycle time.",
  },
  {
    title: "Built a secure internal portal with RBAC",
    industry: "Professional Services",
    problem: "Manual workflows and scattered data across teams.",
    solution: "Custom web portal with role-based access and integrations.",
    impact: "Reduced manual effort and improved operational visibility.",
  },
  {
    title: "QA program uplift with automation-first approach",
    industry: "Technology",
    problem: "Low coverage and recurring regressions in critical flows.",
    solution: "Test strategy, regression suite, and CI pipeline integration.",
    impact: "Higher coverage and fewer production regressions.",
  },
]

export const testimonials = [
  {
    quote:
      "We are looking at dramatic improvements in throughput in 3 months time and we have already started seeing the results of engaging with Gembrill. Moreover, reliability and functionality of our site will also increase dramatically, for Gembrill offers unbiased quality assurance by virtue of it being independent of the development organization.",
    name: "CTO",
    company: "Online News Media",
  },
  {
    quote:
      "Each of the performance goal set for Gembrill team has been achieved by meticulously implementing the vision. Gembrill team works seamlessly, as a true extension of our own technical support team.",
    name: "Director Manufacturing",
    company: "Telecom Product",
  },
  {
    quote:
      "We selected Gembrill as an offshore development partner after a thorough review of multiple vendors. Gembrill's India collective experience as an organization became clear during our meeting. Internally, we could not match their skills for what we are charged. Now, when we look back after 3 years, I think we have made the best decision of going with Gembrill and we are very happy about it.",
    name: "CEO",
    company: "Financial Services Software Product",
  },
]

export const industries = [
  {
    name: "Independent Software Vendors (ISVs)",
    slug: "isv",
    description: "End-to-end product engineering services for software companies.",
    detailedDescription: "Our 'Product Mindset' brings strong technology expertise in handling complex issues like security, access control, scalability, exception handling, and transactional consistency. We couple this with deep knowledge of the intricacies of product development and specific industry expertise.",
    bullets: [
      "Product Development",
      "Product Testing",
      "Product Modernization",
      "Product Usability",
      "Accelerated Process Adoption",
      "Value Relationship",
      "Strong Technology Expertise",
    ],
  },
  {
    name: "Media and New Media",
    slug: "media",
    description: "Digital transformation solutions for the evolving media landscape.",
    detailedDescription: "We provide comprehensive web portal development, content management systems, and social media integration services. Our solutions help media companies adapt to the digital landscape with robust website functionalities and seamless integration with business applications.",
    bullets: [
      "Web Portal Development",
      "Content Management System",
      "Website Functionalities",
      "Website Development, Maintenance and Support",
      "QA Testing of Website Functions",
      "Integrating Website Functionalities to Business Applications",
      "Web server Administrative Services",
      "Social Media Integration",
    ],
  },
  {
    name: "Pharma & Biotech",
    slug: "pharma-biotech",
    description: "Compliant and innovative technology for life sciences.",
    detailedDescription: "Our expertise in technology and healthcare industry knowledge allows us to deliver compliant, scalable enterprise applications. We focus on regulatory compliance, independent verification, and building service-oriented architectures for agility.",
    bullets: [
      "Packaged Software Development, Enhancement, and Integration",
      "Custom Application Development",
      "SOA of Packaged Software and Applications",
      "Independent Verification and Validation",
      "Regulatory Compliance Services",
      "Enterprise Characteristics",
      "Accelerated Process Adoption",
    ],
  },
  {
    name: "Financial Services",
    slug: "financial-services",
    description: "Secure, high-performance fintech and banking solutions.",
    detailedDescription: "We offer secure, high-performance solutions for the financial sector, including data warehousing, business intelligence, and core banking application support. Our multi-technology platform expertise ensures robust and compliant systems.",
    bullets: [
      "Business Requirements Analysis",
      "Packaged Software Development, Enhancement and Integration",
      "Application Development, Maintenance and Support",
      "Data Warehousing",
      "Business Intelligence, Analytics and Knowledge Services",
      "Independent Verification and Validation",
      "SOA of Packaged Software and Applications",
    ],
  },
  {
    name: "Energy & Green Energy",
    slug: "energy",
    description: "Smart technology for a sustainable future.",
    detailedDescription: "Empowering energy companies with SCADA system integration, GIS systems, and business intelligence. We provide rapid prototyping ('Agility') and multi-technology expertise to optimize energy management and enterprise processes.",
    bullets: [
      "Business Requirements Analysis",
      "Integration of SCADA, GIS, MIS, Inventory systems",
      "Business Intelligence, Analytics and Knowledge Services",
      "Independent Verification and Validation",
      "SOA of Packaged Software and Applications",
      "Agility - Rapid prototyping of solutions",
      "Accelerated Process Adoption",
    ],
  },
  {
    name: "Education / eLearning",
    slug: "education",
    description: "Engaging and scalable learning platforms.",
    detailedDescription: "Transforming education with learning technology development, training content creation, and eCommerce implementation. We specialize in learning analytics and secure, scalable eLearning platforms that drive engagement.",
    bullets: [
      "Learning Technology Development and Management",
      "Training Content Development",
      "Implementation of Ecommerce for training content",
      "Learning Analytics & Reports Development",
      "Independent Verification and Validation",
      "Accelerated Process Adoption",
    ],
  },
]

export const companyValues = [
  { title: "Our Mission", description: "To provide high quality and cost effective IT services to our customers." },
  { title: "Customer Partnership", description: "Delivering value beyond just an outsourcing relationship." },
  { title: "Process Adherence", description: "Nimble enough to adhere to specific customer processes." },
  { title: "Complex Solutions", description: "Delivering solutions to client's complex business requirements." },
]

export const resources = [
  {
    slug: "legacy-modernization-guide",
    title: "The Complete Guide to Legacy Modernization",
    type: "Guide",
    description: "Learn how to modernize legacy systems without disrupting your business.",
    date: "March 15, 2024",
    content: `
      <h2>The Challenge of Legacy Systems</h2>
      <p>Legacy systems often become a bottleneck for innovation. They are difficult to maintain, expensive to scale, and often incompatible with modern technologies. However, rewriting them from scratch is risky and time-consuming.</p>
      
      <h2>Strategies for Modernization</h2>
      <p>There are several strategies to approach legacy modernization, often referred to as the "7 Rs":</p>
      <ul>
        <li><strong>Retain:</strong> Keep the system as is if it's still delivering value.</li>
        <li><strong>Rehost:</strong> Move the system to a new infrastructure (e.g., cloud) without changing code.</li>
        <li><strong>Replatform:</strong> Make minor changes to adapt to a new platform.</li>
        <li><strong>Refactor:</strong> Rewrite parts of the code to improve structure and performance.</li>
        <li><strong>Rearchitect:</strong> Alter the code to shift towards a new architecture (e.g., microservices).</li>
        <li><strong>Rebuild:</strong> Rewrite the application from scratch.</li>
        <li><strong>Replace:</strong> Substitute the system with a commercial off-the-shelf solution.</li>
      </ul>

      <h2>Our Approach</h2>
      <p>We recommend an incremental approach, often starting with the "Strangler Fig" pattern, where functionality is gradually moved to a new system until the old system can be safely decommissioned.</p>
    `,
  },
  {
    slug: "qa-automation-best-practices",
    title: "QA Automation Best Practices",
    type: "Article",
    description: "Discover proven strategies for building effective test automation.",
    date: "March 10, 2024",
    content: `
      <h2>Why Automate?</h2>
      <p>Manual testing is essential but not scalable. As your application grows, regression testing becomes a bottleneck. Automation allows for frequent, reliable testing without the linear cost increase.</p>
      
      <h2>Key Best Practices</h2>
      <ol>
        <li><strong>Test Pyramid:</strong> Focus on having a large base of unit tests, a smaller layer of integration tests, and a few end-to-end tests.</li>
        <li><strong>Atomic Tests:</strong> Ensure each test focuses on a single functionality and can run independently.</li>
        <li><strong>Keep it DRY:</strong> Don't Repeat Yourself. Use page object models (POM) to abstract UI interactions.</li>
        <li><strong>Continuous Integration:</strong> Run tests automatically on every commit to catch issues early.</li>
      </ol>

      <h2>Choosing the Right Tools</h2>
      <p>Select tools that match your team's skills and your application's technology stack. Popular choices include Playwright, Cypress, and Selenium.</p>
    `,
  },
  {
    slug: "devops-maturity-assessment",
    title: "DevOps Maturity Assessment",
    type: "Tool",
    description: "Evaluate your DevOps capabilities and identify improvement areas.",
    date: "February 28, 2024",
    content: `
      <h2>Assessing Your DevOps Maturity</h2>
      <p>DevOps is a journey, not a destination. To improve, you first need to know where you stand. Our assessment covers five key areas:</p>
      
      <h3>1. Culture and Strategy</h3>
      <p>Is there shared ownership? Are goals aligned between Dev and Ops?</p>

      <h3>2. Automation</h3>
      <p>How much of your build, test, and deployment process is automated?</p>

      <h3>3. Structure and Process</h3>
      <p>Do you have defined incident management processes? Is there a clear path to production?</p>

      <h3>4. Measurement and Metrics</h3>
      <p>Are you tracking MTTR (Mean Time to Recovery) and deployment frequency?</p>

      <h3>5. Sharing and Collaboration</h3>
      <p>Is knowledge shared freely? Are post-mortems blameless?</p>
    `,
  },
  {
    slug: "cloud-migration-checklist",
    title: "Cloud Migration Checklist",
    type: "Checklist",
    description: "Ensure a smooth transition to the cloud with our comprehensive checklist.",
    date: "February 15, 2024",
    content: `
      <h2>Pre-Migration Phase</h2>
      <ul>
        <li>[ ] define business goals and success criteria</li>
        <li>[ ] Assess current infrastructure and application dependencies</li>
        <li>[ ] Estimate costs and set a budget</li>
        <li>[ ] Select a cloud provider (AWS, Azure, GCP)</li>
      </ul>

      <h2>Migration Phase</h2>
      <ul>
        <li>[ ] Set up the cloud environment (VPCs, Security Groups)</li>
        <li>[ ] Migrate data and validate integrity</li>
        <li>[ ] Migrate applications (Rehost, Replatform, or Refactor)</li>
        <li>[ ] Configure monitoring and logging</li>
      </ul>

      <h2>Post-Migration Phase</h2>
      <ul>
        <li>[ ] Validate application performance</li>
        <li>[ ] Optimize resource usage (Right-sizing)</li>
        <li>[ ] Implement backup and disaster recovery plans</li>
        <li>[ ] Train the team on new tools and processes</li>
      </ul>
    `,
  },
]
export const companyContent = {
  about: [
    "Gembrill helps its customers realize predictable project success and measurable ROI. Customers come to Gembrill to improve time-to-market, leverage best processes and technology, obtain excellent quality and reduce development and R&D costs.",
    "Gembrill believes in strategic partnerships with customers that allow it to deliver value beyond just an outsourcing relationship.",
  ],
  valueProposition: {
    description: "Our value proposition is built on creating strategic, long-term partnerships that deliver measurable business results.",
    points: [
      {
        title: "Accelerated Process Adoption",
        description:
          "Strong internal processes and the ability to quickly adapt to customer processes help reduce risk and cost of execution considerably. This allows Gembrill to function in different roles: as an independent engineering partner, co-development partner, or extended engineering partner.",
      },
      {
        title: "Value Relationship",
        description:
          "Gembrill invests in transparent and flexible engagement models that include low-risk pilots for our customers. During the pilot, customers gain first-hand experience of Gembrill's capabilities and understand the benefits of working with Gembrill. 95% of customer's sign up for a long-term project after the pilot.",
      },
      {
        title: "Emerging Technology Expertise",
        description:
          "Our continuous investment in emerging technologies ensures that our clients always have access to the latest tools and frameworks to stay ahead of the competition.",
      },
    ],
  },
  mission: "To provide high quality and cost effective IT services to our customers.",
  quality: {
    description: "Our quality processes are integrated into every phase of the software development lifecycle.",
    phases: [
      {
        phase: "Inception Phase",
        description: "Focus is in collecting requirements and detecting risks.",
      },
      {
        phase: "Elaboration Phase",
        description: "Efforts are on designing a component-based architecture and implementing high-risk items.",
      },
      {
        phase: "Construction & Deployment",
        description: "Implementing and deploying the product with rigorous testing standards.",
      },
    ],
  },
  methodology: {
    description: "We follow a structured yet flexible methodology to ensure predictable delivery.",
    steps: [
      "Requirements collection and Risk Assessment",
      "System Architecting and Designing",
      "Prioritizing High-risk items over low-risk items",
      "Core Development and Unit/Module Testing",
      "Comprehensive Testing (Functional, Performance, Security)",
      "Trial Implementation",
      "User Acceptance Testing",
      "Deployment and Release",
      "Support and Maintenance",
    ],
    outcomes: [
      "On time solution delivery",
      "Delivery of the solution within a fixed budget",
      "Phased delivery of functionality to meet business deadlines",
      "Delivery of a solution that delivers measurable business benefits",
    ],
  },
}
