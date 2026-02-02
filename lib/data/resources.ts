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
