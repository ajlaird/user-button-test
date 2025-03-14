import { UserDetails } from "../components/user-details";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { CodeSwitcher } from "../components/code-switcher";
import { LearnMore } from "../components/learn-more";
import { Footer } from "../components/footer";
import { ClerkLogo } from "../components/clerk-logo";
import { NextLogo } from "../components/next-logo";

import { DASHBOARD_CARDS } from "../consts/cards";

export default async function DashboardPage() {
  const DotIcon = () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
      </svg>
    )
  }
return (
  <>
    <main className="max-w-[75rem] w-full mx-auto">
      <div className="grid grid-cols-[1fr_20.5rem] gap-10 pb-10">
        <div>
          <header className="flex items-center justify-between w-full h-16 gap-4">
            <div className="flex gap-4">
              <ClerkLogo />
              <div aria-hidden className="w-px h-6 bg-[#C7C7C8]" />
              <NextLogo />
            </div>
            <div className="flex items-center gap-2">
              <UserButton>
                <UserButton.MenuItems>
                  <UserButton.Action
                    label="Open chat"
                    labelIcon={<DotIcon />}
                    onClick={() => alert('init chat')}
                  />
                </UserButton.MenuItems>
              </UserButton>
            </div>
          </header>
          <UserDetails />
        </div>
        <div className="pt-[3.5rem]">
          <CodeSwitcher />
        </div>
      </div>
    </main>
    <LearnMore cards={DASHBOARD_CARDS} />
    <Footer />
  </>
);
}
