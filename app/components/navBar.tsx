import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="navbar">
        <ul>
    <li><Link href="/">Home</Link></li>
      <li><Link href="#basic-info">Basic Info</Link></li>
      <li><Link href="#skills-info">Skills</Link></li>
      <li><Link href="#education-info">Education</Link></li>
      <li><Link href="#experience-info">Experience</Link></li>
      <li><Link href="#contact-info">Contact</Link></li>
      </ul>
    </nav>
  );
}
