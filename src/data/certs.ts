// ─────────────────────────────────────────────────────────────
// CERTIFICATIONS — same idea as the shelf: add an entry, done.
//
// When you have the unique verification key / URL for a cert,
// fill in `credentialId` and/or `verifyUrl` and the card shows
// a real "verify" link instead of the placeholder slot.
// ─────────────────────────────────────────────────────────────

export interface Cert {
  title: string;
  issuer: string;
  year: string;
  credentialId?: string; // e.g. 'ABC123XYZ' — shown as mono text
  verifyUrl?: string;    // e.g. 'https://learn.microsoft.com/api/credentials/share/...'
}

export const certs: Cert[] = [
  {
    title: 'Applied Skills: Create Agents in Copilot Studio',
    issuer: 'Microsoft',
    year: '2025',
  },
  {
    title: 'AI on Microsoft Azure',
    issuer: 'Microsoft',
    year: '2024',
  },
  {
    title: 'Financial Markets (with Honors)',
    issuer: 'Yale University · Coursera',
    year: '2022',
  },
];
