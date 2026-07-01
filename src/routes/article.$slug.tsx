import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/article/$slug")({
  component: ArticlePage,
});

function ArticlePage() {
  const { slug } = Route.useParams();
  const title = slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  
  return (
    <>
      <PageHero eyebrow="Article" title={title} subtitle="Expert insights and full details." />
      <section className="section bg-gradient-to-b from-white to-brand-soft/20 min-h-[50vh]">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <div className="prose prose-brand lg:prose-xl mx-auto rounded-3xl border border-border bg-white p-8 md:p-12 shadow-soft">
            <h2 className="text-3xl font-display text-brand-deep mb-6">About {title}</h2>
            
            {/* ARTICLE CONTENT PLACEHOLDER */}
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                This is the dedicated article page for <strong>{title}</strong>. You can expand on this topic here by adding rich content, images, paragraphs, and detailed dental information.
              </p>
              <p>
                To add specific text, simply open the code for this route and replace this placeholder with your actual article content, or set up a CMS to pull dynamic articles!
              </p>
              <div className="mt-8 rounded-2xl bg-brand-soft p-6 border border-brand/20">
                <h3 className="font-semibold text-brand-deep">Placeholder Content</h3>
                <p className="mt-2 text-sm text-brand-deep/80">Content can be added here seamlessly.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
