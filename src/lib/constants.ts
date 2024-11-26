export const COLORS = {
  primary: '#4F46E5', // Indigo 600
  primaryDark: '#4338CA', // Indigo 700
  primaryLight: '#818CF8', // Indigo 400
  secondary: '#10B981', // Emerald 500
  secondaryDark: '#059669', // Emerald 600
  secondaryLight: '#34D399', // Emerald 400
  accent: '#F43F5E', // Rose 500
  accentDark: '#E11D48', // Rose 600
  accentLight: '#FB7185', // Rose 400
  background: '#FFFFFF',
  backgroundDark: '#0F172A', // Slate 900
  text: '#1E293B', // Slate 800
  textDark: '#F8FAFC', // Slate 50
};

export const SERVICES = [
  {
    id: 'static-websites',
    title: 'Static Websites',
    description: 'Fast, secure, and SEO-optimized static websites built with modern technologies.',
    features: [
      'Blazing fast performance',
      'SEO optimization',
      'Responsive design',
      'Content management',
    ],
    icon: 'Layout',
  },
  {
    id: 'web-applications',
    title: 'Full Web Applications',
    description: 'Scalable and feature-rich web applications tailored to your business needs.',
    features: [
      'Custom functionality',
      'User authentication',
      'Database integration',
      'API development',
    ],
    icon: 'Code2',
  },
];

export const PORTFOLIO = [
  {
    id: 1,
    title: 'Icarus',
    type: 'web-application',
    description: 'A full-featured web application stack that utilises React, Ruby on Rails and MySQL. Hosted on a VPS. This is what our tech is built on.',
    image: 'https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    technologies: ['React', 'Ruby on Rails', 'MySQL'],
  },
  {
    id: 2,
    title: 'Web Apps',
    type: 'static-website',
    description: 'Modern static websites for basic web interaction, to fully dynamic web apps. We can help you find the perfect domain, SEO, and hosting.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    technologies: ['React', 'Tailwind CSS', 'Contentful'],
  },
  {
    id: 3,
    title: 'Micro Saas',
    type: 'web-application',
    description: 'An example of a landing page and dashboard for a micro SaaS product.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    technologies: ['React', 'Ruby on Rails', 'MySQL'],
  },
];