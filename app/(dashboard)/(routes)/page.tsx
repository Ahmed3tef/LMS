import { UserButton } from '@clerk/nextjs';

export default function Home() {
  return (
    <div>
      hey there!
      <UserButton afterSignOutUrl='/' />
    </div>
  );
}
