import { SignIn } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className="h-screen w-full bg-black flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <SignIn />
      </div>
    </div>
  );
}