import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, Menu, Play, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { portfolio } from "@/content/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "B Liam — Travel Storyteller & UGC Creator" },
      {
        name: "description",
        content: "Editorial travel films and photography for remarkable hotels, destinations, restaurants, and lifestyle brands.",
      },
      { property: "og:title", content: "By Liam — Travel Storyteller & UGC Creator" },
      {
        property: "og:description",
        content: "Editorial travel films and photography for remarkable places and thoughtful brands.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PortfolioPage,
});

const navItems = [
  ["About", "#about"],
  ["Services", "#services"],
  ["Selected work", "#work"],
  ["Photos", "#photos"],
  ["Process", "#process"],
];
const galleryLayout = [
  { span: "col-span-2 md:col-span-7", frame: "aspect-[16/10]" },
  { span: "col-span-1 md:col-span-5 md:mt-20", frame: "aspect-square md:aspect-[4/5]" },
  { span: "col-span-1 md:col-span-5", frame: "aspect-square" },
  { span: "col-span-1 md:col-span-4 md:mt-16", frame: "aspect-square md:aspect-[4/5]" },
  { span: "col-span-1 md:col-span-3 md:mt-16", frame: "aspect-[3/4]" },

  { span: "col-span-2 md:col-span-8 md:mt-20", frame: "aspect-[16/10]", objectPosition: "center 80%" },
  { span: "col-span-1 md:col-span-4", frame: "aspect-square md:aspect-[4/5]" },

];

function PhoneFrame({
  src,
  alt,
  type = "image",
}: {
  src: string;
  alt: string;
  type?: "image" | "video";
}) {
  return (
    <div className="phone-shell">
      <div className="phone-speaker" />

      {type === "video" ? (
        <video
          src={src}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="phone-media"
          aria-label={alt}
        />
      ) : (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          width={1088}
          height={1920}
          className="phone-media"
        />
      )}

     
    </div>
  );
}

function PortfolioPage() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="overflow-hidden bg-background text-foreground">
      <header className={`site-nav ${scrolled ? "site-nav-scrolled" : ""}`}>
        <a href="#top" className="font-display text-xl font-bold uppercase">{portfolio.identity.name}</a>
        <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
          {navItems.map(([label, href]) => <a className="nav-link" href={href} key={href}>{label}</a>)}
          <Button asChild variant="editorial" size="sm"><a href="#contact">Work with me</a></Button>
        </nav>
        <Button variant="nav" size="icon" className="md:hidden" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen((open) => !open)}>
          {menuOpen ? <X /> : <Menu />}
        </Button>
        {menuOpen && (
          <nav className="mobile-menu" aria-label="Mobile navigation">
            {navItems.map(([label, href]) => <a href={href} key={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
            <a href="#contact" onClick={() => setMenuOpen(false)}>Work with me</a>
          </nav>
        )}
      </header>

      <section id="top" className="hero-section">
        <img src={portfolio.hero.image} alt={portfolio.hero.imageAlt} width={1920} height={1200} className="hero-image" />
        <div className="hero-veil" />
        <div className="relative z-10 mx-auto flex h-full w-full max-w-[1500px] flex-col justify-end px-5 pb-12 pt-32 sm:px-8 md:pb-20 lg:px-12">
          <p className="eyebrow mb-5 text-paper/80">{portfolio.hero.eyebrow}</p>
          <h1 className="hero-title max-w-5xl text-paper">Some places deserve<br className="hidden sm:block" /> more than a postcard.</h1>
          <div className="mt-8 grid gap-7 md:grid-cols-[minmax(0,440px)_auto] md:items-end">
            <p className="text-sm leading-7 text-paper/85 sm:text-base">{portfolio.hero.statement}</p>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="paper" size="lg"><a href="#contact">Work with me <ArrowUpRight /></a></Button>
              <Button asChild variant="paperOutline" size="lg"><a href="#work">View selected work <ArrowDown /></a></Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section-pad bg-paper">
        <div className="page-grid items-start">
          <div className="relative col-span-12 md:col-span-5">
            <span className="index-mark">01 — Portrait</span>
            <div className="mt-5 aspect-[4/5] overflow-hidden"><img src={portfolio.about.image} alt={portfolio.about.imageAlt} loading="lazy" width={1200} height={1504} className="media-cover" /></div>
            <p className="mt-3 max-w-xs text-xs leading-5 text-muted-foreground"></p>
          </div>
          <div className="col-span-12 pt-8 md:col-span-6 md:col-start-7 md:pt-20">
            <p className="eyebrow text-primary">A point of view, not a formula</p>
            <h2 className="section-title mt-5">{portfolio.about.title}</h2>
            <div className="mt-10 grid gap-6 text-base leading-8 text-muted-foreground lg:grid-cols-2">
              {portfolio.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <div className="mt-10 flex flex-wrap gap-2">
              {["Creative direction", "Vertical film", "Photography", "Post-production", "SEO & Acquisition", "Convers  ion"].map((tag) => <span className="tag" key={tag}>{tag}</span>)}
            </div>  
          </div>
        </div>
      </section>

      <section id="services" className="section-pad bg-ink text-paper">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
          <div className="section-heading text-paper"><p className="eyebrow text-blush">Ways to work together</p><h2 className="section-title mt-4">Stories made for how people travel now.</h2></div>
          <div className="services-grid mt-16">
            {portfolio.services.map((service) => (
              <article className="service-package" key={service.number}>
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
                  <h3 className="eyebrow text-blush">{service.name}</h3>
                  <span className="text-xs text-paper/40">{service.number}</span>
                </div>
                <p className="mt-7 font-display text-5xl font-bold">{service.price}</p>
                <p className="mt-6 text-sm leading-7 text-paper/70">{service.description}</p>
                <p className="eyebrow mt-auto pt-8 text-blush">{service.position}</p>
              </article>
            ))}
          </div>
          <div className="hosted-experiences">
            <p className="eyebrow text-blush">{portfolio.hostedExperiences.title}</p>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-paper/65">{portfolio.hostedExperiences.description}</p>
          </div>
        </div>
      </section>

      <section id="work" className="section-pad bg-paper">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
            <div><p className="eyebrow text-primary">Selected work</p><h2 className="section-title mt-4">Small films.<br />Long afterlives.</h2></div>
            <p className="max-w-sm text-sm leading-6 text-muted-foreground">A selection of visual stories created to be watched vertically, remembered emotionally, and used practically.</p>
          </div>
          <div className="project-grid mt-20">
            {portfolio.projects.map((project, index) => (
              <article className={`project-item project-${index + 1} group`} key={project.name}>
                <div className={`project-media-wrap ${project.format === "phone" ? "project-media-phone" : "project-media-landscape"}`}>
                  {project.format === "phone" ? <PhoneFrame
  src={project.media}
  alt={project.mediaAlt}
  type={project.mediaType}
/>  : (
                   <div className="landscape-frame">
                    <video
                      src={project.media}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      className="media-cover"
                    /> 
                  </div>
                  )}
                  
                </div>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div><p className="eyebrow text-primary">{project.location}</p><h3 className="mt-2 font-display text-2xl font-bold sm:text-3xl">{project.name}</h3><p className="mt-2 max-w-sm text-sm leading-6 text-muted-foreground">{project.description}</p></div>
                  <span className="tag shrink-0">{project.type}</span>
                </div>
                <p className="mt-4 border-t border-border pt-3 text-xs text-muted-foreground">{project.deliverables}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
          <section id="photos" className="section-pad bg-ink text-paper">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="eyebrow text-blush">{portfolio.gallery.eyebrow}</p>
              <h2 className="section-title mt-4">{portfolio.gallery.title}</h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-paper/65">{portfolio.gallery.note}</p>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-12 md:gap-8">
            {portfolio.gallery.photos.map((photo, index) => {
              const layout = galleryLayout[index];
              if (!layout) return null;

              return (
                <figure
                  className={`group min-w-0 ${layout.span}`}
                  key={photo.alt}
                >
                  <div className={`overflow-hidden bg-ink/40 ${layout.frame}`}>
                    {photo.media.endsWith(".mp4") ? (
                      <video
                        src={photo.media}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        className="media-cover"
                      />
                    ) : (
                      <img
                      src={photo.media}
                      alt={photo.alt}
                      loading="lazy"
                      decoding="async"
                      fetchPriority="low"
                      width={1024}
                      height={1024}
                      className="media-cover"
                      style={{
                        objectPosition: layout.objectPosition || "center",
                      }}
                    />
                    )}
                  </div>

                  <figcaption className="mt-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-paper/40">
                    {String(index + 1).padStart(2, "0")} — {photo.alt}
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </div>
      </section>

      <section id="process" className="section-pad bg-blush">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
          <p className="eyebrow text-primary">From hello to handover</p>
          <h2 className="section-title mt-4 max-w-3xl">A clear process leaves room for the good surprises.</h2>
          <div className="mt-16 grid border-l border-t border-ink/15 sm:grid-cols-2 lg:grid-cols-5">
            {portfolio.process.map(([number, title, description]) => (
              <article className="process-step" key={number}><span className="font-display text-4xl font-bold text-primary">{number}</span><h3 className="mt-10 font-display text-xl font-bold">{title}</h3><p className="mt-4 text-sm leading-6 text-foreground/65">{description}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad overflow-hidden bg-paper" aria-labelledby="statement-title">
        <div className="mx-auto grid max-w-[1500px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-12">
          <div>
            <p className="eyebrow text-primary">{portfolio.statement.eyebrow}</p>
            <h2 className="section-title mt-4 uppercase" id="statement-title">{portfolio.statement.title}</h2>
            <p className="mt-8 max-w-md text-base leading-7 text-foreground/70 sm:text-lg sm:leading-8">{portfolio.statement.body}</p>
          </div>
          
        </div>
      </section>

      <footer id="contact" className="section-pad bg-primary text-paper">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
          <p className="eyebrow text-blush">A new story starts here</p>
          <div className="mt-5 grid gap-16 lg:grid-cols-[1.15fr_.85fr]">
            <div><h2 className="contact-title">Have a place worth telling a story about?</h2><a className="mt-10 inline-flex items-center gap-2 border-b border-paper pb-2 text-lg" href={`mailto:${portfolio.identity.email}`}>{portfolio.identity.email}<ArrowUpRight className="size-4" /></a></div>
            
            
          </div>
          <div className="mt-28 grid gap-6 border-t border-paper/25 pt-7 text-xs sm:grid-cols-3 sm:items-center">
            <p>© 2026 {portfolio.identity.name}</p>
            <div className="flex gap-5 sm:justify-center"></div>
            <p className="sm:text-right">{portfolio.identity.location}</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
function StatementCollage({ images }: { images: ReadonlyArray<{ media: string; alt: string }> }) {
  const [wide, phone, tall] = images;
  if (!wide || !phone || !tall) return null;
  return (
    <div className="relative mx-auto w-full max-w-xl pb-16 lg:pb-24">
      <div className="landscape-frame media-cover aspect-[4/3] w-[72%]">
        <img src={wide.media} alt={wide.alt} loading="lazy" />
      </div>
      <div className="landscape-frame media-cover absolute -bottom-2 left-[6%] aspect-[3/4] w-[38%] rotate-[-6deg] sm:left-[10%]">
        <img src={phone.media} alt={phone.alt} loading="lazy" />
      </div>
      <div className="landscape-frame media-cover absolute right-0 top-[38%] aspect-[3/4] w-[42%] rotate-[3deg]">
        <img src={tall.media} alt={tall.alt} loading="lazy" />
      </div>
    </div>
  );
}
