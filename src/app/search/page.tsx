import { Suspense } from "react";
import SearchClient from "../../components/search/SearchClient";

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="py-16 text-center">Loading search…</div>}>
      <SearchClient />
    </Suspense>
  );
}
