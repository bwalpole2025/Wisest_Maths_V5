import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowLeftCircle } from "lucide-react";
import { allQuestions, getQuestionById, slugForSubtopicId } from "@/lib/questions";
import { SolutionViewer } from "@/components/solution-viewer";
import { Reveal } from "@/components/reveal";
import { Footer } from "@/components/footer";

export function generateStaticParams() {
  return allQuestions.map((q) => ({ id: q.id }));
}

export default async function SolvePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const question = getQuestionById(id);
  if (!question) notFound();

  // prev/next within the same subtopic
  const siblings = allQuestions.filter((q) => q.subtopicId === question.subtopicId);
  const idx = siblings.findIndex((q) => q.id === question.id);
  const prev = idx > 0 ? siblings[idx - 1] : undefined;
  const next = idx < siblings.length - 1 ? siblings[idx + 1] : undefined;
  const subtopicSlug = slugForSubtopicId(question.subtopicId);

  return (
    <>
      <section className="mx-auto max-w-3xl px-6 pt-36">
        <Reveal>
          <div className="flex items-center justify-between">
            <Link
              href={`/questions/${subtopicSlug}`}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" /> {question.subtopic}
            </Link>
            <span className="text-xs text-muted-foreground">
              {idx + 1} / {siblings.length}
            </span>
          </div>
        </Reveal>

        <div className="mt-6">
          <SolutionViewer question={question} />
        </div>

        {/* prev / next */}
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {prev ? (
            <Link href={`/solve/${prev.id}`} className="group glass card-glow flex items-center gap-3 rounded-2xl p-4 transition-transform hover:-translate-y-0.5">
              <ArrowLeftCircle className="h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
              <div className="min-w-0">
                <div className="text-xs text-muted-foreground">Previous</div>
                <div className="truncate text-sm font-medium">{prev.id.split(".").pop()}</div>
              </div>
            </Link>
          ) : (
            <div />
          )}
          {next && (
            <Link href={`/solve/${next.id}`} className="group glass card-glow flex items-center justify-end gap-3 rounded-2xl p-4 text-right transition-transform hover:-translate-y-0.5">
              <div className="min-w-0">
                <div className="text-xs text-muted-foreground">Next</div>
                <div className="truncate text-sm font-medium">{next.id.split(".").pop()}</div>
              </div>
              <ArrowRight className="h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
            </Link>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
