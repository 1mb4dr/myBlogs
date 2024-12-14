export const SITE_TITLE = 'NetSecOps Hub';
export const SITE_DESCRIPTION = 'Advanced insights into network security, cloud infrastructure, and cybersecurity solutions';
export const AUTHOR = 'Your Name';

export const CATEGORIES = {
  NETWORK_SECURITY: 'network-security',
  CLOUD_INFRASTRUCTURE: 'cloud-infrastructure',
  FORTIGATE: 'fortigate',
  CONTAINERLAB: 'containerlab',
  ZERO_TRUST: 'zero-trust',
  THREAT_ANALYSIS: 'threat-analysis',
} as const;

export const CATEGORY_METADATA = {
  [CATEGORIES.NETWORK_SECURITY]: {
    title: 'Network Security',
    description: 'Deep dives into network security architecture and implementations',
    icon: '🛡️',
    color: 'blue',
  },
  [CATEGORIES.CLOUD_INFRASTRUCTURE]: {
    title: 'Cloud Infrastructure',
    description: 'Cloud security and infrastructure best practices',
    icon: '☁️',
    color: 'purple',
  },
  [CATEGORIES.FORTIGATE]: {
    title: 'FortiGate',
    description: 'FortiGate configurations and security implementations',
    icon: '🔒',
    color: 'red',
  },
  [CATEGORIES.CONTAINERLAB]: {
    title: 'ContainerLab',
    description: 'Network simulation and testing environments',
    icon: '🔬',
    color: 'green',
  },
  [CATEGORIES.ZERO_TRUST]: {
    title: 'Zero Trust',
    description: 'Zero Trust architecture and implementation guides',
    icon: '🎯',
    color: 'orange',
  },
  [CATEGORIES.THREAT_ANALYSIS]: {
    title: 'Threat Analysis',
    description: 'Security threat analysis and mitigation strategies',
    icon: '🔍',
    color: 'yellow',
  },
} as const;

export const SOCIAL_LINKS = {
  linkedin: 'https://linkedin.com/in/your-profile',
  github: 'https://github.com/your-username',
  twitter: 'https://twitter.com/your-handle',
} as const;