export type NavItem = { label: string; href: string }

export type Service = {
  slug: string
  title: string
  outcome: string
  bullets: string[]
  image: string
}

export type CaseStudy = {
  title: string
  industry: string
  problem: string
  solution: string
  impact: string
}

export const nav: NavItem[] = [
  { label: "Solutions", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Work", href: "/work" },
  { label: "Company", href: "/company" },
  { label: "Resources", href: "/resources" },
  { label: "Careers", href: "/careers" },
]

export const services: Service[] = [
  {
    slug: "product-engineering",
    title: "Product Engineering",
    outcome: "Realize predictable project success and measurable ROI.",
    bullets: [
      "Complex product engineering",
      "Legacy and emerging technologies",
      "Adherence to customer processes",
      "Respect for IP rights",
    ],
    image: "/images/product-engineering.png",
  },
  {
    slug: "software-development",
    title: "Software Development",
    outcome: "High quality and cost-effective IT services.",
    bullets: [
      "Enterprise Application",
      "Custom Applications",
      "Application Modernization",
    ],
    image: "/images/software-development.png",
  },
  {
    slug: "portal-development",
    title: "Portal Development",
    outcome: "Robust portals that streamline information and collaboration.",
    bullets: [
      "SharePoint Development",
      "Drupal Development",
    ],
    image: "/images/portal-development.png",
  },
  {
    slug: "software-testing",
    title: "Software Testing",
    outcome: "Ensure quality with comprehensive testing strategies.",
    bullets: [
      "Functional Testing",
      "Automation Testing",
      "Performance Testing",
    ],
    image: "/images/software-testing.png",
  },
  {
    slug: "bpo-services",
    title: "BPO Services",
    outcome: "Leverage best processes to reduce operational costs.",
    bullets: [
      "Appointment Setting & Telemarketing",
      "Market Research and Survey",
      "Lead Generation",
      "Collections & Follow-up",
    ],
    image: "/images/bpo-services.png",
  },
  {
    slug: "outsourcing",
    title: "Out Sourcing",
    outcome: "Strategic partnerships that deliver value beyond checking boxes.",
    bullets: [
      "Improve time-to-market",
      "Reduce development costs",
      "Reduce R&D costs",
      "Flexible engagement models",
    ],
    image: "/images/outsourcing.png",
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
      "The delivery process was structured, and the quality metrics improved quickly. We gained confidence in releases.",
    name: "Sarah Chen",
    company: "CTO, FinTech Solutions",
  },
  {
    quote:
      "Clear communication, predictable milestones, and practical recommendations that helped us modernize safely.",
    name: "Michael Ross",
    company: "VP of Engineering, HealthFlow",
  },
]

export const industries = [
  { name: "Healthcare", description: "HIPAA-compliant solutions for healthcare providers and health tech companies." },
  { name: "Financial Services", description: "Secure, scalable systems for fintech, banking, and insurance." },
  { name: "E-commerce", description: "High-performance platforms that convert visitors into customers." },
  { name: "Enterprise Software", description: "Complex B2B applications that scale with your business." },
  { name: "Professional Services", description: "Custom tools that streamline operations and client delivery." },
  { name: "Technology", description: "Engineering support for startups and scale-ups building the future." },
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
