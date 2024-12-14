import { SOCIAL_LINKS } from '@/lib/constants';

export default function AboutMe() {
  return (
    <div className="space-y-6">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg blur-xl"></div>
        <div className="relative bg-secondary/50 backdrop-blur-sm border border-accent/10 rounded-lg p-8">
          <h1 className="text-3xl font-bold text-white mb-4">About Me</h1>
          <div className="prose prose-invert">
            <p>
              As a Network Security Engineer with expertise in cloud infrastructure and cybersecurity,
              I specialize in designing and implementing secure network architectures using cutting-edge
              technologies like FortiGate, ContainerLab, and various cloud security solutions.
            </p>
            <h2>Expertise</h2>
            <ul>
              <li>Network Security Architecture</li>
              <li>FortiGate Implementation & Management</li>
              <li>Cloud Infrastructure Security</li>
              <li>Zero Trust Architecture</li>
              <li>ContainerLab Network Simulation</li>
              <li>Threat Analysis & Mitigation</li>
            </ul>
            <h2>Certifications</h2>
            <ul>
              <li>Certified Information Systems Security Professional (CISSP)</li>
              <li>Fortinet NSE 7</li>
              <li>AWS Certified Security - Specialty</li>
              <li>Certified Cloud Security Professional (CCSP)</li>
            </ul>
          </div>
          
          <div className="mt-8 flex space-x-4">
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-300 transition-colors"
            >
              GitHub
            </a>
            <a
              href={SOCIAL_LINKS.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}