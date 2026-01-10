import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl py-20 text-center">
      <p className="text-sm text-mutedForeground">404</p>
      <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight">
        Page not found
      </h1>
      <p className="mt-3 text-balance text-mutedForeground">
        The link you followed may be broken, or the page may have moved.
      </p>
      <div className="mt-8 flex justify-center">
        <Button asChild href="/">
          Back to home
        </Button>
      </div>
    </div>
  );
}


