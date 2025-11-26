import AboutSection from "../components/AboutSection";

export default function AboutPage() {
  return (
    <>
      <div className="bg-slate-50 py-12">
        <div className="mx-auto max-w-5xl px-4">
          <h1 className="font-display text-3xl font-bold text-slate-900">About Us</h1>
        </div>
      </div>
      <AboutSection />
    </>
  );
}
