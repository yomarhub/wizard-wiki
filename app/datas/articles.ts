export interface Article {
  id: number
  slug: string
  title: string
  text: string
}

export default [
  { id: 1, slug: 'this-is-an-article-title', title: 'This is an article title', text: 'this is article text' },
  { id: 2, slug: 'getting-started-with-typescript', title: 'Getting Started with TypeScript', text: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.' },
  { id: 3, slug: 'understanding-react-hooks', title: 'Understanding React Hooks', text: 'React Hooks allow you to use state and other React features without writing a class.' },
  { id: 4, slug: 'introduction-to-nodejs', title: 'Introduction to Node.js', text: 'Node.js is a JavaScript runtime built on Chrome\'s V8 JavaScript engine.' },
  { id: 5, slug: 'css-grid-layout-guide', title: 'CSS Grid Layout Guide', text: 'CSS Grid Layout is a two-dimensional layout system for the web.' },
  { id: 6, slug: 'rest-api-best-practices', title: 'REST API Best Practices', text: 'RESTful APIs should be stateless, cacheable, and use standard HTTP methods.' },
  { id: 7, slug: 'modern-javascript-features', title: 'Modern JavaScript Features', text: 'ES6+ brings features like arrow functions, destructuring, and async/await.' },
  { id: 8, slug: 'web-accessibility-basics', title: 'Web Accessibility Basics', text: 'Making websites accessible ensures everyone can use your web applications.' },
  { id: 9, slug: 'docker-for-developers', title: 'Docker for Developers', text: 'Docker containers provide a consistent environment for application development.' },
  { id: 10, slug: 'testing-with-jest', title: 'Testing with Jest', text: 'Jest is a delightful JavaScript testing framework with a focus on simplicity.' },
  { id: 11, slug: 'graphql-vs-rest', title: 'GraphQL vs REST', text: 'GraphQL provides a more efficient alternative to REST with precise data fetching.' },
  { id: 12, slug: 'python-for-beginners', title: 'Python for Beginners', text: 'Python is a versatile programming language known for its simple syntax and readability.' },
  { id: 13, slug: 'database-optimization-tips', title: 'Database Optimization Tips', text: 'Proper indexing and query optimization can significantly improve database performance.' },
  { id: 14, slug: 'git-version-control', title: 'Git Version Control', text: 'Git is a distributed version control system for tracking changes in source code.' },
  { id: 15, slug: 'security-best-practices', title: 'Security Best Practices', text: 'Always validate input, use HTTPS, and keep dependencies updated for secure applications.' },
  { id: 16, slug: 'responsive-design-principles', title: 'Responsive Design Principles', text: 'Responsive design ensures your website works well on all screen sizes and devices.' },
  { id: 17, slug: 'microservices-architecture', title: 'Microservices Architecture', text: 'Microservices break down applications into smaller, independent services.' },
  { id: 18, slug: 'redux-state-management', title: 'Redux State Management', text: 'Redux provides predictable state management for JavaScript applications.' },
  { id: 19, slug: 'cicd-pipelines', title: 'CI/CD Pipelines', text: 'Continuous Integration and Deployment automate the software delivery process.' },
  { id: 20, slug: 'machine-learning-basics', title: 'Machine Learning Basics', text: 'Machine learning enables computers to learn from data without explicit programming.' }
]
