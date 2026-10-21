
"use client";

import { Show, SignInButton, UserButton } from "@clerk/nextjs";

export default function Header() {
  return (
    <header>
      <Show when="signed-out">
        <SignInButton />
      </Show>

      <Show when="signed-in">
        <UserButton />
      </Show>
    </header>
  );
}
