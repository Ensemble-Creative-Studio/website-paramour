// pages/404.js

import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div style={{ textAlign: 'center', padding: '100px' }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for does not exist.</p>
      <Link href="/">
        Go back to the homepage
      </Link>
    </div>
  );
};

export default NotFoundPage;
