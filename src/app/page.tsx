import JobBoard from "@/components/job-board";
import SiteFooter from "@/components/site-footer";
import { jobs } from "@/data/jobs";

export default function Home() {
  return (
    <>
      <header className="h-39 v-banner">
        <h1 className="sr-only">Job listings</h1>
      </header>

      <main className="flex-1 px-6 sm:px-10">
        <div className="v-board flex flex-col">
          <JobBoard jobs={jobs} />
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
