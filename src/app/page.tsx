import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/home/hero";
import { MediaInsights } from "@/components/home/media-insights";
import { Admissions } from "@/components/home/admissions";
import { CampusLife } from "@/components/home/campus-life";
import { LeadershipMessage } from "@/components/home/leadership-message";
import { LatestNews } from "@/components/home/latest-news";
import { AboutComsats } from "@/components/home/about-comsats";
import { UpcomingEvents } from "@/components/home/upcoming-events";
import { AcademicDepartments } from "@/components/home/academic-departments";
import { Academics } from "@/components/home/academics";
import { Services } from "@/components/home/services";
import { UniversityCta } from "@/components/home/cta";
import { Library } from "@/components/home/library";
import { Testimonials } from "@/components/home/testimonials";
import { Contact } from "@/components/home/contact";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MediaInsights />
        <Admissions />
        <CampusLife />
        <LeadershipMessage />
        <LatestNews />
        <AboutComsats />
        <UpcomingEvents />
        <AcademicDepartments />
        <Academics />
        <Services />
        <UniversityCta />
        <Library />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
