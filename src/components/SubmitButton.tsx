'use client';

import {signInWithPassword} from '@/app/actions';

export default function SubmitButton() {
  const onClick= async () => {
    const user = await signInWithPassword({email:"test", password:"email"});
    console.log(user);
  }
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={onClick}>
      Submit
    </button>
  );

}