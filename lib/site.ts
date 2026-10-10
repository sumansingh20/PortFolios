export const site = {
  name: 'Suman Kumar',
  shortName: 'Suman',
  role: 'Security Engineer & Full-Stack Developer',
  location: 'Patna, Bihar, India',
  email: 'sumantech07@gmail.com',
  resumeUrl:
    'https://drive.google.com/uc?export=download&id=1u8tFomA41yNeB-1RZMDDnlU0gNpLhX4J',
  githubUsername: 'sumansingh20',
  socials: {
    github: 'https://github.com/sumansingh20',
    linkedin: 'https://www.linkedin.com/in/sumankumar-/',
    leetcode: 'https://leetcode.com/u/sumansingh20/',
  },
} as const;

export const mailtoHref = (subject?: string, body?: string) => {
  const params = new URLSearchParams();
  if (subject) params.set('subject', subject);
  if (body) params.set('body', body);
  const query = params.toString();
  return `mailto:${site.email}${query ? `?${query}` : ''}`;
};
