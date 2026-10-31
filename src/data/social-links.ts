export interface SocialLink {
  label: string;
  url: string;
  icon: string;
}

// Only configure links that are verified. Unconfigured links are omitted (hidden in UI).
export const socialLinks: SocialLink[] = [
  { label: 'GitHub', url: 'https://github.com/Ronniee7', icon: 'github' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/asiimwe-ronald', icon: 'linkedin' },
  // Email and other links to be added when verified.
];
