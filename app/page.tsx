import {Button} from '@/components/ui/button';
import Link from 'next/link';
export default function Page() {
  return (
    <div className='mx-auto w-fit'>
      <h1>Home page</h1>
      <p>run: `npm run dev`, head to `app/page.tsx` to change this page.</p>
      <div className='flex gap-2'>
        <Link href='/login'>
          <Button>Go to signup page</Button>
        </Link>
        <Link href='/dashboard'>
          <Button variant='secondary'>Go to dashboard page</Button>
        </Link>
      </div>
    </div>
  );
}
