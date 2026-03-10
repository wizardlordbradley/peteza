'use client';

export default function Footer() {
  return (
    <footer className="bg-brand-red text-white py-6 text-center">
      <p>&copy; {new Date().getFullYear()} Pete's Za. All rights reserved.</p>
    </footer>
  );
}
