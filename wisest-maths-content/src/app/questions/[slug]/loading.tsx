import { QuestionListSkeleton } from "@/components/link-skeletons";

export default function Loading() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-36">
      <QuestionListSkeleton />
    </section>
  );
}
