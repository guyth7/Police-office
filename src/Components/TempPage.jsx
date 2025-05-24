import AnimatedRedirect from "./AnimatedRedirect";

function TempPage() {
  return (
    <AnimatedRedirect to="/home-page" delay={5000} animationDuration={500}>
      <div className="font-sans bg-gradient-to-br from-purple-600 to-purple-800 text-white min-h-screen flex flex-col">
        {/* Hero Section */}
        <section className="flex-1 flex items-center justify-center p-16">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4"> أهلا وسهلا بك</h1>
          </div>
        </section>
      </div>
    </AnimatedRedirect>
  );
}
