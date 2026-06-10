import { useTranslation } from "react-i18next";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const { t } = useTranslation();

  const handleCtaClick = () => {
    const el = document.getElementById("scanner");
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(() => {
      const input = document.querySelector<HTMLInputElement>(
        '[data-testid="master-url"]'
      );
      input?.focus({ preventScroll: true });
    }, 650);
  };

  return (
    <section className="relative overflow-hidden">
      {/* soft gradient background + blobs (scoped to hero only) */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/60 via-background to-background dark:from-blue-950/30 dark:via-background pointer-events-none" />
      <div className="absolute -top-40 -right-32 w-[520px] h-[520px] rounded-full bg-blue-400/20 dark:bg-blue-500/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[380px] h-[380px] rounded-full bg-blue-400/15 dark:bg-blue-500/15 blur-3xl pointer-events-none" />

      <div className="relative container mx-auto px-4 pt-12 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        {/* LEFT — copy + CTA */}
        <div>
          <div
            className="mb-6 text-primary"
            data-testid="hero-eyebrow"
          >
            <span className="text-sm font-semibold">
              {t("hero.eyebrow")}
            </span>
          </div>

          <h1
            className="text-4xl md:text-5xl lg:text-[52px] leading-[1.05] font-bold mb-5 text-foreground"
            style={{ letterSpacing: "-0.035em" }}
            data-testid="text-hero-title"
          >
            {t("hero.lead")}{" "}
            <span className="text-primary">{t("hero.accent")}</span>
          </h1>

          <p
            className="text-base md:text-[17px] leading-relaxed text-muted-foreground mb-8 max-w-[540px]"
            data-testid="text-hero-sub"
          >
            {t("hero.sub")}
          </p>

          <Button
            size="lg"
            onClick={handleCtaClick}
            className="h-14 px-7 text-base font-semibold gap-2 shadow-lg shadow-primary/30 hover:shadow-primary/40 hover:scale-[1.02] transition-transform group"
            data-testid="button-hero-cta"
          >
            {t("hero.cta")}
            <ArrowRight
              className="w-5 h-5 transition-transform group-hover:translate-x-1"
              strokeWidth={2.4}
            />
          </Button>

          <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
            <TrustItem text={t("hero.trust1")} />
            <TrustItem text={t("hero.trust2")} />
            <TrustItem text={t("hero.trust3")} />
          </div>
        </div>

        {/* RIGHT — hero image */}
        <div className="relative flex items-center justify-center lg:justify-end">
          <img
            src="/seoanalizator-hero.svg"
            alt="FreeSiteAnalyzer SEO report preview"
            className="w-full max-w-[560px] mx-auto lg:ml-auto"
          />
        </div>
      </div>
    </section>
  );
}

function TrustItem({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <CheckCircle2 className="w-4 h-4 text-emerald-500" strokeWidth={2.4} />
      {text}
    </span>
  );
}

