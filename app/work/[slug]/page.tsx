import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { projects } from '../../projects';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Miaochuan Fan`,
    description: project.summary,
    openGraph: { title: `${project.title} — Miaochuan Fan`, description: project.summary, images: [] },
    twitter: { card: 'summary', title: `${project.title} — Miaochuan Fan`, description: project.summary, images: [] },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const index = projects.findIndex((item) => item.slug === slug);
  if (index < 0) notFound();
  const project = projects[index];
  const next = projects[(index + 1) % projects.length];

  return (
    <main className="work-page">
      <header className="work-header">
        <a href="/#index">← Index</a>
        <span>Miaochuan Fan</span>
        <span>{project.number} / 09</span>
      </header>
      <section className={`work-intro project-case-${index + 1}`}>
        <p>{project.discipline}</p>
        <h1>{project.title}</h1>
        <span className="work-mark" aria-hidden="true">{project.mark}</span>
        <p className="work-summary">{project.summary}</p>
      </section>
      <section className="work-assets" aria-label="Project media placeholders">
        {[1, 2, 3].map((item) => (
          <figure key={item}>
            <div className="asset-placeholder"><span>Image / drawing {String(item).padStart(2, '0')}</span></div>
            <figcaption>Replace with project media and description.</figcaption>
          </figure>
        ))}
      </section>
      <footer className="work-footer">
        <a href="/#index">Back to index ↑</a>
        <a href={`/work/${next.slug}`}>Next / {next.title} →</a>
      </footer>
    </main>
  );
}
