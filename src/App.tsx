/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, {
  startTransition,
  useDeferredValue,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  Archive,
  ArrowUp,
  ArrowUpRight,
  BadgeCheck,
  Camera,
  Check,
  ChevronDown,
  Copy,
  Filter,
  LayoutGrid,
  Search,
  ShieldCheck,
  Sparkles,
  Video,
  WandSparkles,
  X,
  type LucideIcon,
} from "lucide-react";
import { promptData, type PromptCategory, type PromptItem } from "./data/prompts";

type CategoryMeta = {
  accent: string;
  glow: string;
  eyebrow: string;
  blurb: string;
  icon: LucideIcon;
};

type CuratedCategory = Omit<PromptCategory, "prompts" | "icon"> & {
  prompts: PromptItem[];
  archiveCount: number;
  meta: CategoryMeta;
};

type Notice = {
  title: string;
  detail: string;
  tone: "success" | "error";
};

type LegalDocumentId =
  | "terms"
  | "privacy"
  | "cookies"
  | "refunds"
  | "disclaimer"
  | "license";

type LegalDocumentSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

type LegalDocument = {
  id: LegalDocumentId;
  title: string;
  kicker: string;
  summary: string;
  updated: string;
  accent: string;
  glow: string;
  icon: LucideIcon;
  highlights: string[];
  sections: LegalDocumentSection[];
};

const categoryMeta: Record<string, CategoryMeta> = {
  "image-playbook": {
    accent: "#F4B400",
    glow: "rgba(244, 180, 0, 0.3)",
    eyebrow: "Visual Systems",
    blurb: "Portraits, product direction, and high-conversion image prompting.",
    icon: Camera,
  },
  "prompt-engineer": {
    accent: "#2EC4C7",
    glow: "rgba(46, 196, 199, 0.28)",
    eyebrow: "Instruction Design",
    blurb: "Reusable frameworks for shaping model behavior and output quality.",
    icon: WandSparkles,
  },
  "prompt-codes": {
    accent: "#2EC4C7",
    glow: "rgba(91, 44, 131, 0.32)",
    eyebrow: "Reusable Codes",
    blurb: "Compact prompt structures you can remix across workflows.",
    icon: LayoutGrid,
  },
  "video-playbook": {
    accent: "#F4B400",
    glow: "rgba(91, 44, 131, 0.34)",
    eyebrow: "Motion Direction",
    blurb: "Shot design, camera language, and cinematic prompt patterns.",
    icon: Video,
  },
};

const fallbackMeta: CategoryMeta = {
  accent: "#2EC4C7",
  glow: "rgba(91, 44, 131, 0.28)",
  eyebrow: "Collection",
  blurb: "Curated prompts built for fast browsing and reuse.",
  icon: Sparkles,
};

const curateCategory = (category: PromptCategory): CuratedCategory => {
  const seen = new Set<string>();
  const prompts = category.prompts.filter((prompt) => {
    const signature = `${prompt.title}::${prompt.template}`;
    if (seen.has(signature)) {
      return false;
    }
    seen.add(signature);
    return true;
  });

  return {
    id: category.id,
    name: category.name,
    description: category.description,
    prompts,
    archiveCount: category.prompts.length,
    meta: categoryMeta[category.id] ?? fallbackMeta,
  };
};

const curatedCategories = promptData.map(curateCategory);
const totalArchiveEntries = promptData.reduce((sum, category) => sum + category.prompts.length, 0);
const totalUniquePrompts = curatedCategories.reduce(
  (sum, category) => sum + category.prompts.length,
  0,
);
const allUniquePrompts = curatedCategories.flatMap((category) => category.prompts);
const promptsWithRules = allUniquePrompts.filter((prompt) => (prompt.rules?.length ?? 0) > 0).length;

const tagCounts = new Map<string, number>();
for (const prompt of allUniquePrompts) {
  for (const tag of prompt.tags ?? []) {
    tagCounts.set(tag, (tagCounts.get(tag) ?? 0) + 1);
  }
}

const featuredTags = [...tagCounts.entries()]
  .sort((first, second) => second[1] - first[1])
  .slice(0, 10)
  .map(([tag, count]) => ({ tag, count }));

const heroWorkflowSteps = [
  {
    title: "Discover",
    detail: "Find prompt systems by outcome, creative lane, and production use case in seconds.",
    accent: "#2EC4C7",
    icon: Search,
  },
  {
    title: "Adapt",
    detail: "Swap in your brief, constraints, and brand context without starting from zero.",
    accent: "#5B2C83",
    icon: WandSparkles,
  },
  {
    title: "Deploy",
    detail: "Move into execution with cleaner instructions and more consistent output quality.",
    accent: "#F4B400",
    icon: BadgeCheck,
  },
] satisfies Array<{
  title: string;
  detail: string;
  accent: string;
  icon: LucideIcon;
}>;

const heroSamplePrompt = `[ROLE] Senior AI campaign strategist
[GOAL] Turn a rough idea into a polished, conversion-ready prompt
[INPUTS] audience, offer, channel, tone, creative constraints
[OUTPUT] final prompt, style notes, and 3 high-quality variations`;

const legalDocuments: LegalDocument[] = [
  {
    id: "terms",
    title: "Terms of Use",
    kicker: "Site Terms",
    summary:
      "The core rules for accessing Prompt Vault Pro, using the vault in real projects, and understanding the limits of the service.",
    updated: "April 23, 2026",
    accent: "#F4B400",
    glow: "rgba(244, 180, 0, 0.24)",
    icon: ShieldCheck,
    highlights: ["Digital product", "Commercial outputs allowed", "No raw resale"],
    sections: [
      {
        title: "Acceptance and scope",
        paragraphs: [
          "By accessing or using Prompt Vault Pro, you agree to these terms and to use the vault only for lawful business, creative, and educational purposes.",
          "These terms apply to the website experience, the prompt library, and any associated updates, releases, or supporting materials made available through the vault.",
        ],
      },
      {
        title: "Permitted use",
        paragraphs: [
          "You may use the vault to research, adapt, and deploy prompts for your own projects, your internal team, or client delivery work.",
        ],
        bullets: [
          "Customize prompts for campaigns, content, products, research, and production workflows.",
          "Create derivative prompt versions for your own operating systems, briefs, and internal documentation.",
          "Use outputs generated from the prompts in commercial projects, subject to the platform terms of the AI tools you use.",
        ],
      },
      {
        title: "Restrictions",
        paragraphs: [
          "You may not redistribute the vault as a standalone asset, resell the prompt library in substantially similar form, or present the raw collection as your own product without meaningful transformation.",
        ],
        bullets: [
          "Do not upload the full library to a marketplace, shared folder, or public repository.",
          "Do not use the vault in ways that are unlawful, harmful, deceptive, or infringe the rights of others.",
          "Do not attempt to reverse engineer any protected systems or misuse the product infrastructure.",
        ],
      },
      {
        title: "Availability and liability",
        paragraphs: [
          "Prompt Vault Pro is provided on an as-is basis. The product may evolve over time, and content, structure, or availability may change without prior notice.",
          "To the maximum extent permitted by law, Prompt Vault Pro is not liable for indirect, incidental, or consequential damages arising from use of the vault, AI outputs, or downstream business decisions.",
        ],
      },
    ],
  },
  {
    id: "privacy",
    title: "Privacy Policy",
    kicker: "Data & Privacy",
    summary:
      "How Prompt Vault Pro may collect, use, and store information when the site is hosted and used as a live web product.",
    updated: "April 23, 2026",
    accent: "#2EC4C7",
    glow: "rgba(46, 196, 199, 0.22)",
    icon: Filter,
    highlights: ["Minimal collection", "Platform-level logs", "No sale of data"],
    sections: [
      {
        title: "Information collected",
        paragraphs: [
          "Prompt Vault Pro is designed as a lightweight product site and prompt library. The site may collect limited technical information such as browser type, device information, pages viewed, and hosting logs generated by the platform used to deliver the site.",
          "If contact forms, email capture, analytics, or support tools are added in the future, additional information may be collected only to the extent needed to operate those features.",
        ],
      },
      {
        title: "How information is used",
        paragraphs: [
          "Information may be used to operate the site, maintain security, diagnose technical issues, understand product usage trends, and improve the vault experience over time.",
          "Prompt Vault Pro does not sell personal information or intentionally collect more data than is necessary to run and improve the product.",
        ],
      },
      {
        title: "Third-party services",
        paragraphs: [
          "Depending on the deployment stack, third-party providers such as Netlify, GitHub, analytics platforms, or support tools may process limited technical data on behalf of the site.",
          "Those providers operate under their own terms and privacy policies, and users should review them separately where relevant.",
        ],
      },
      {
        title: "Retention and user choices",
        paragraphs: [
          "Technical and usage data may be retained only as long as reasonably necessary for operations, security, analytics, or legal compliance.",
          "Where local laws provide access, correction, deletion, or objection rights, users may request those rights through the site owner or operator.",
        ],
      },
    ],
  },
  {
    id: "cookies",
    title: "Cookie Policy",
    kicker: "Cookies",
    summary:
      "A plain-language overview of how cookies and similar technologies may support hosting, security, and measurement on the live site.",
    updated: "April 23, 2026",
    accent: "#5B2C83",
    glow: "rgba(91, 44, 131, 0.24)",
    icon: Archive,
    highlights: ["Essential cookies", "Potential analytics", "Browser controls"],
    sections: [
      {
        title: "Why cookies may be used",
        paragraphs: [
          "Cookies and similar technologies may be used to keep the site secure, remember preferences, support hosting functionality, and understand how the vault is performing.",
        ],
      },
      {
        title: "Types of cookies",
        paragraphs: [
          "The site may rely on essential cookies for basic delivery and security. If analytics or marketing tools are added later, those tools may introduce additional cookies for measurement or optimization.",
        ],
        bullets: [
          "Essential cookies that keep the site functioning correctly.",
          "Preference cookies that remember interface or session choices.",
          "Analytics cookies that help measure visits, usage patterns, and performance.",
        ],
      },
      {
        title: "Managing cookies",
        paragraphs: [
          "Users can usually control or delete cookies through their browser settings. Blocking some cookies may change how parts of the site behave or limit certain features.",
          "If a cookie consent mechanism is added in the future, it should be used to reflect the specific tools and regional compliance requirements of the live deployment.",
        ],
      },
    ],
  },
  {
    id: "refunds",
    title: "Refund Policy",
    kicker: "Refunds",
    summary:
      "A practical refund framework for a digital prompt product, covering access issues, duplicate charges, and the limits of digital-product reversibility.",
    updated: "April 23, 2026",
    accent: "#F4B400",
    glow: "rgba(244, 180, 0, 0.22)",
    icon: Copy,
    highlights: ["Digital product", "Duplicate-charge exceptions", "Access-first resolution"],
    sections: [
      {
        title: "Digital product policy",
        paragraphs: [
          "Because Prompt Vault Pro is a digital product delivered instantly or near-instantly, refunds are generally not offered once full access has been granted.",
          "This policy exists because digital assets can be downloaded, copied, or used immediately in ways that cannot be meaningfully reversed.",
        ],
      },
      {
        title: "Exceptions",
        paragraphs: [
          "Reasonable refund exceptions may be made where there is a duplicate charge, a verified billing error, or a material access failure that cannot be resolved within a reasonable support window.",
        ],
        bullets: [
          "Duplicate or accidental purchases of the same product.",
          "Failed delivery or broken access that remains unresolved after support review.",
          "A technical issue that prevents use of the core product and cannot be corrected.",
        ],
      },
      {
        title: "Requests and timelines",
        paragraphs: [
          "Refund requests should be made promptly with enough detail to verify the transaction and investigate the issue. Where a refund is approved, processing timelines will depend on the payment provider or bank.",
        ],
      },
    ],
  },
  {
    id: "disclaimer",
    title: "Disclaimer",
    kicker: "Use At Your Own Judgment",
    summary:
      "Important guidance on the limits of prompt libraries and AI-generated outputs, including the need for human review and responsible use.",
    updated: "April 23, 2026",
    accent: "#2EC4C7",
    glow: "rgba(46, 196, 199, 0.22)",
    icon: Sparkles,
    highlights: ["No guaranteed outcomes", "Human review required", "Not professional advice"],
    sections: [
      {
        title: "Prompt guidance, not guaranteed results",
        paragraphs: [
          "Prompt Vault Pro is a structured creative and operational resource. It is designed to improve starting points, clarity, and consistency, but it does not guarantee any specific business, creative, or performance outcome.",
          "Results vary based on the AI model used, the quality of inputs, the surrounding workflow, and the level of human direction applied after generation.",
        ],
      },
      {
        title: "Professional review remains essential",
        paragraphs: [
          "Users are responsible for reviewing, validating, editing, and approving any output created with the vault before using it in public, commercial, legal, financial, medical, or high-stakes contexts.",
        ],
        bullets: [
          "Check outputs for accuracy, bias, compliance, and factual integrity.",
          "Verify brand fit, copyright risk, and platform-policy compliance before publishing.",
          "Do not rely on AI output as a substitute for professional advice or regulated expertise.",
        ],
      },
      {
        title: "External tools and platforms",
        paragraphs: [
          "Prompt Vault Pro does not control the uptime, pricing, policies, or output behavior of third-party AI tools, model providers, hosting platforms, or marketplaces.",
          "Users remain responsible for understanding the terms and policies of the external tools they choose to use alongside the vault.",
        ],
      },
    ],
  },
  {
    id: "license",
    title: "License Terms",
    kicker: "License",
    summary:
      "The usage rights attached to Prompt Vault Pro, including what is permitted in client work, internal systems, and commercial execution.",
    updated: "April 23, 2026",
    accent: "#F4B400",
    glow: "rgba(244, 180, 0, 0.22)",
    icon: BadgeCheck,
    highlights: ["Non-exclusive", "Non-transferable", "Commercial outputs allowed"],
    sections: [
      {
        title: "License grant",
        paragraphs: [
          "Prompt Vault Pro is licensed, not sold. The license is non-exclusive and non-transferable and allows use of the vault in personal workflows, internal team systems, and client delivery work.",
        ],
      },
      {
        title: "What is allowed",
        paragraphs: [
          "You may adapt prompts, combine them with your own methods, include them in your operating processes, and use outputs created from them in commercial execution.",
        ],
        bullets: [
          "Use the vault across creative, marketing, research, and production workflows.",
          "Customize prompt structures for your own projects or client work.",
          "Commercialize the outputs created from the prompts.",
        ],
      },
      {
        title: "What is not allowed",
        paragraphs: [
          "You may not redistribute, sublicense, or resell the original vault in substantially similar form as a standalone library, bundle, database, or downloadable asset.",
        ],
        bullets: [
          "Do not share the full source vault publicly or inside a resale pack.",
          "Do not claim the unmodified library as an original product you authored.",
          "Do not transfer your license to another person or organization without approval.",
        ],
      },
      {
        title: "Team and enterprise usage",
        paragraphs: [
          "If you need broader internal licensing, white-label rights, or organization-wide access, a separate commercial arrangement may be more appropriate than the default single-license structure.",
        ],
      },
    ],
  },
];

const legalDocumentMap = Object.fromEntries(
  legalDocuments.map((document) => [document.id, document]),
) as Record<LegalDocumentId, LegalDocument>;

const getLegalDocumentIdFromHash = (): LegalDocumentId | null => {
  const hash = window.location.hash.toLowerCase();
  const match = hash.match(/^#legal-([a-z-]+)$/);

  if (!match) {
    return null;
  }

  const nextId = match[1] as LegalDocumentId;
  return nextId in legalDocumentMap ? nextId : null;
};

const copyText = async (text: string) => {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.setAttribute("readonly", "");
  textArea.style.position = "absolute";
  textArea.style.left = "-9999px";
  document.body.appendChild(textArea);
  textArea.select();

  const copied = document.execCommand("copy");
  document.body.removeChild(textArea);

  if (!copied) {
    throw new Error("Clipboard copy failed.");
  }
};

const matchesPrompt = (prompt: PromptItem, query: string, tag: string | null) => {
  const matchesTag = !tag || (prompt.tags ?? []).includes(tag);
  if (!matchesTag) {
    return false;
  }

  if (!query) {
    return true;
  }

  const haystack = [
    prompt.title,
    prompt.description ?? "",
    prompt.template,
    prompt.example ?? "",
    ...(prompt.tags ?? []),
    ...(prompt.rules ?? []),
  ]
    .join(" ")
    .toLowerCase();

  return haystack.includes(query);
};

const surfaceStyle = (accent: string, glow: string) => ({
  borderColor: `${accent}33`,
  boxShadow: `0 35px 80px -55px ${glow}`,
});

const accentBadgeStyle = (accent: string) => ({
  color: accent,
  borderColor: `${accent}40`,
  backgroundColor: `${accent}14`,
});

const Modal: React.FC<{
  children: React.ReactNode;
  icon: LucideIcon;
  isOpen: boolean;
  kicker: string;
  onClose: () => void;
  title: string;
}> = ({ children, icon: Icon, isOpen, kicker, onClose, title }) => {
  const titleId = useId();
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    panelRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-[80] bg-[#08111D]/78 backdrop-blur-md"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="fixed inset-x-4 top-[10vh] z-[81] mx-auto w-full max-w-2xl rounded-[32px] border border-white/12 bg-[#0D1B2A]/94 p-6 text-slate-100 shadow-[0_40px_120px_-60px_rgba(8,17,29,0.95)] backdrop-blur-xl sm:p-8"
            exit={{ opacity: 0, scale: 0.98, y: 16 }}
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            onClick={(event) => event.stopPropagation()}
            ref={panelRef}
            role="dialog"
            aria-labelledby={titleId}
            aria-modal="true"
            tabIndex={-1}
          >
            <div className="mb-8 flex items-start justify-between gap-4 border-b border-white/10 pb-5">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-slate-300/75">
                  <Icon className="h-4 w-4" />
                  {kicker}
                </div>
                <div>
                  <h2
                    className="font-display text-3xl leading-tight text-white sm:text-4xl"
                    id={titleId}
                  >
                    {title}
                  </h2>
                </div>
              </div>
              <button
                aria-label={`Close ${title}`}
                className="rounded-full border border-white/10 bg-white/[0.04] p-3 text-slate-300 transition hover:bg-white/[0.09] hover:text-white"
                onClick={onClose}
                type="button"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const LegalDocumentCard: React.FC<{
  document: LegalDocument;
  onOpen: (id: LegalDocumentId) => void;
}> = ({ document, onOpen }) => {
  const Icon = document.icon;

  return (
    <button
      className="rounded-[26px] border bg-white/[0.03] p-5 text-left transition hover:bg-white/[0.07]"
      onClick={() => onOpen(document.id)}
      style={surfaceStyle(document.accent, document.glow)}
      type="button"
    >
      <div className="flex items-start justify-between gap-3">
        <div
          className="rounded-2xl border p-3"
          style={accentBadgeStyle(document.accent)}
        >
          <Icon className="h-5 w-5" />
        </div>
        <ArrowUpRight className="h-4 w-4 text-slate-300/35" />
      </div>

      <p className="mt-5 text-[11px] uppercase tracking-[0.24em] text-slate-300/45">
        {document.kicker}
      </p>
      <h3 className="mt-3 text-xl font-semibold text-white">{document.title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-300/72">{document.summary}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {document.highlights.map((item) => (
          <span
            className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-slate-300/68"
            key={item}
          >
            {item}
          </span>
        ))}
      </div>
    </button>
  );
};

const LegalPageView: React.FC<{
  activeDocument: LegalDocument;
  onBackToVault: () => void;
  onOpenDocument: (id: LegalDocumentId) => void;
}> = ({ activeDocument, onBackToVault, onOpenDocument }) => {
  const Icon = activeDocument.icon;
  const otherDocuments = legalDocuments.filter((document) => document.id !== activeDocument.id);

  return (
    <main className="relative z-10 mx-auto flex w-full max-w-[1600px] flex-col gap-8 px-4 pb-20 pt-6 sm:px-6 lg:px-10 lg:pb-24 lg:pt-8">
      <section
        className="hero-panel rounded-[36px] p-6 sm:p-8 lg:p-10"
        style={surfaceStyle(activeDocument.accent, activeDocument.glow)}
      >
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.06] px-4 py-2 text-[11px] uppercase tracking-[0.26em] text-slate-300/70">
              <Icon className="h-4 w-4" />
              {activeDocument.kicker}
            </div>
            <h1 className="mt-6 font-display text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
              {activeDocument.title}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300/76 sm:text-lg">
              {activeDocument.summary}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              className="inline-flex items-center gap-2 rounded-full bg-[#F4B400] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#08111D] transition hover:translate-y-[-1px]"
              onClick={onBackToVault}
              type="button"
            >
              <ArrowUp className="h-4 w-4 rotate-[-90deg]" />
              Back to vault
            </button>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-[minmax(0,1fr)_320px]">
          <div className="rounded-[26px] border border-white/10 bg-black/18 p-5">
            <p className="text-[11px] uppercase tracking-[0.24em] text-slate-300/45">
              Coverage
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {activeDocument.highlights.map((item) => (
                <span
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-slate-300/70"
                  key={item}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[26px] border border-white/10 bg-black/18 p-5">
            <p className="text-[11px] uppercase tracking-[0.24em] text-slate-300/45">
              Last updated
            </p>
            <p className="mt-4 text-2xl font-semibold text-white">{activeDocument.updated}</p>
            <p className="mt-2 text-sm leading-6 text-slate-300/68">
              Review this language for your specific business, payment flow, and jurisdiction
              before relying on it in a live commercial environment.
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[320px_minmax(0,1fr)]">
        <aside className="space-y-4">
          <div className="surface-panel rounded-[28px] p-5">
            <p className="text-[11px] uppercase tracking-[0.24em] text-slate-300/45">
              Legal center
            </p>
            <div className="mt-5 space-y-3">
              {legalDocuments.map((document) => (
                <button
                  aria-current={document.id === activeDocument.id ? "page" : undefined}
                  className={`block w-full rounded-[22px] border px-4 py-4 text-left transition ${
                    document.id === activeDocument.id
                      ? "border-white/18 bg-white/[0.08]"
                      : "border-white/10 bg-white/[0.03] hover:bg-white/[0.08]"
                  }`}
                  key={document.id}
                  onClick={() => onOpenDocument(document.id)}
                  style={surfaceStyle(document.accent, document.glow)}
                  type="button"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[11px] uppercase tracking-[0.22em] text-slate-300/45">
                      {document.kicker}
                    </span>
                    <span className="text-xs text-slate-300/45">{document.updated}</span>
                  </div>
                  <p className="mt-2 text-base font-semibold text-white">{document.title}</p>
                </button>
              ))}
            </div>
          </div>

          <div className="surface-panel rounded-[28px] p-5">
            <p className="text-[11px] uppercase tracking-[0.24em] text-slate-300/45">
              Legal note
            </p>
            <div className="mt-4 space-y-4 text-sm leading-7 text-slate-300/72">
              <p>
                These pages are designed to make the product feel credible and deployment-ready.
              </p>
              <p>
                For production commerce, review the policies against your checkout flow, analytics,
                local laws, and any client-facing commitments you make.
              </p>
            </div>
          </div>
        </aside>

        <div className="space-y-6">
          {activeDocument.sections.map((section) => (
            <section className="surface-panel rounded-[30px] p-5 sm:p-6 lg:p-8" key={section.title}>
              <div className="flex items-start gap-4">
                <div
                  className="rounded-2xl border p-3"
                  style={accentBadgeStyle(activeDocument.accent)}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-slate-300/45">
                    Section
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
                    {section.title}
                  </h2>
                </div>
              </div>

              <div className="mt-6 space-y-4 text-sm leading-7 text-slate-300/78 sm:text-[15px]">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.bullets && (
                  <ul className="space-y-3">
                    {section.bullets.map((bullet) => (
                      <li className="flex gap-3" key={bullet}>
                        <span
                          className="mt-1 inline-flex h-6 min-w-6 items-center justify-center rounded-full border text-[11px] font-semibold"
                          style={accentBadgeStyle(activeDocument.accent)}
                        >
                          <Check className="h-3.5 w-3.5" />
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          ))}

          <section className="surface-panel rounded-[30px] p-5 sm:p-6 lg:p-8">
            <p className="text-[11px] uppercase tracking-[0.24em] text-slate-300/45">
              Related legal pages
            </p>
            <h3 className="mt-3 font-display text-3xl text-white sm:text-4xl">
              Explore the full legal pack.
            </h3>
            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {otherDocuments.map((document) => (
                <LegalDocumentCard document={document} key={document.id} onOpen={onOpenDocument} />
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
};

const StatCard: React.FC<{
  detail: string;
  icon: LucideIcon;
  label: string;
  value: string;
}> = ({ detail, icon: Icon, label, value }) => (
  <div className="surface-panel rounded-[28px] p-5 sm:p-6">
    <div className="mb-5 flex items-center justify-between">
      <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-3 text-slate-100">
        <Icon className="h-5 w-5" />
      </div>
      <span className="text-[11px] uppercase tracking-[0.24em] text-slate-300/45">{label}</span>
    </div>
    <div className="space-y-2">
      <p className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{value}</p>
      <p className="text-sm leading-6 text-slate-300/72">{detail}</p>
    </div>
  </div>
);

const CopyButton: React.FC<{
  copiedId: string | null;
  id: string;
  label: string;
  onCopy: () => void;
}> = ({ copiedId, id, label, onCopy }) => {
  const isCopied = copiedId === id;

  return (
    <button
      className={
        "inline-flex items-center justify-center gap-2 rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] transition " +
        (isCopied
          ? "border-emerald-300/40 bg-emerald-300/15 text-emerald-100"
          : "border-white/12 bg-white/[0.05] text-slate-100 hover:bg-white/[0.11]")
      }
      onClick={onCopy}
      type="button"
    >
      {isCopied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      {isCopied ? "Copied" : label}
    </button>
  );
};

const PromptView: React.FC<{
  categoryName: string;
  copiedId: string | null;
  forceOpen: boolean;
  onCopy: (text: string, id: string, label: string) => void;
  prompt: PromptItem;
  tone: CategoryMeta;
}> = ({ categoryName, copiedId, forceOpen, onCopy, prompt, tone }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isExpanded = forceOpen || isOpen;

  return (
    <motion.article
      className="rounded-[28px] border border-white/10 bg-white/[0.03] overflow-hidden"
      layout
      style={surfaceStyle(tone.accent, tone.glow)}
    >
      <button
        aria-expanded={isExpanded}
        className="w-full px-5 py-5 text-left transition hover:bg-white/[0.025] sm:px-6 sm:py-6"
        onClick={() => setIsOpen((current) => !current)}
        type="button"
      >
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span
            className="rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em]"
            style={accentBadgeStyle(tone.accent)}
          >
            {categoryName}
          </span>
          {(prompt.tags ?? []).slice(0, 3).map((tag) => (
            <span
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-slate-300/70"
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-start justify-between gap-6">
          <div className="space-y-3">
            <h3 className="font-display text-2xl leading-tight text-white sm:text-[2rem]">
              {prompt.title}
            </h3>
            <p className="max-w-3xl text-sm leading-7 text-slate-300/74 sm:text-[15px]">
              {prompt.description ??
                "A reusable prompt pattern designed for faster production and better output consistency."}
            </p>
          </div>
          <div className="hidden rounded-full border border-white/10 bg-white/[0.04] p-3 text-slate-200 sm:block">
            <ChevronDown
              className={`h-5 w-5 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
            />
          </div>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-4 text-[11px] uppercase tracking-[0.22em] text-slate-300/45">
          <span>{prompt.rules?.length ?? 0} rules</span>
          <span>{prompt.example ? "example included" : "template only"}</span>
          <span>{Math.max(1, Math.round(prompt.template.length / 220))} min scan</span>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            animate={{ height: "auto", opacity: 1 }}
            className="overflow-hidden border-t border-white/10"
            exit={{ height: 0, opacity: 0 }}
            initial={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
          >
            <div className="grid gap-5 p-5 sm:p-6 xl:grid-cols-[minmax(0,1.15fr)_minmax(290px,0.85fr)]">
              <div className="surface-panel rounded-[24px] p-5 sm:p-6">
                <div className="mb-4 flex flex-col gap-3 border-b border-white/10 pb-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.24em] text-slate-300/45">
                      Prompt Template
                    </p>
                    <p className="mt-1 text-sm text-slate-300/65">
                      Copy-ready instructions for direct use or refinement.
                    </p>
                  </div>
                  <CopyButton
                    copiedId={copiedId}
                    id={`template-${prompt.id}`}
                    label="Copy prompt"
                    onCopy={() => onCopy(prompt.template, `template-${prompt.id}`, `${prompt.title} prompt`)}
                  />
                </div>
                <pre className="max-h-[420px] overflow-auto whitespace-pre-wrap font-mono text-[13px] leading-7 text-slate-100/88">
                  {prompt.template}
                </pre>
              </div>

              <div className="grid gap-5">
                {(prompt.rules?.length ?? 0) > 0 && (
                  <div className="surface-panel rounded-[24px] p-5 sm:p-6">
                    <div className="mb-4 flex items-center gap-3">
                      <div
                        className="rounded-2xl border p-3"
                        style={accentBadgeStyle(tone.accent)}
                      >
                        <BadgeCheck className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.24em] text-slate-300/45">
                          Operating Rules
                        </p>
                        <p className="text-sm text-slate-300/65">
                          The non-negotiables that keep the prompt sharp.
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-3 text-sm leading-7 text-slate-100/82">
                      {prompt.rules?.map((rule, index) => (
                        <li className="flex gap-3" key={`${prompt.id}-rule-${index}`}>
                          <span
                            className="mt-1 inline-flex h-6 min-w-6 items-center justify-center rounded-full border text-[11px] font-semibold"
                            style={accentBadgeStyle(tone.accent)}
                          >
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span>{rule}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {prompt.example && (
                  <div className="surface-panel rounded-[24px] p-5 sm:p-6">
                    <div className="mb-4 flex flex-col gap-3 border-b border-white/10 pb-4 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.24em] text-slate-300/45">
                          Filled Example
                        </p>
                        <p className="mt-1 text-sm text-slate-300/65">
                          A sample execution that shows how the framework lands.
                        </p>
                      </div>
                      <CopyButton
                        copiedId={copiedId}
                        id={`example-${prompt.id}`}
                        label="Copy example"
                        onCopy={() => onCopy(prompt.example ?? "", `example-${prompt.id}`, `${prompt.title} example`)}
                      />
                    </div>
                    <pre className="max-h-[300px] overflow-auto whitespace-pre-wrap font-mono text-[13px] leading-7 text-slate-100/72">
                      {prompt.example}
                    </pre>
                  </div>
                )}

                <div className="surface-panel rounded-[24px] p-5 sm:p-6">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-slate-300/45">
                    Deployment Notes
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-300/76">
                    Use the template as a starting frame, then replace the bracketed variables with
                    specifics from your project. The tag stack is a quick signal for where this
                    prompt will be strongest.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {(prompt.tags ?? []).map((tag) => (
                      <span
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-slate-300/70"
                        key={`${prompt.id}-${tag}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
};

const CategorySection: React.FC<{
  category: CuratedCategory;
  copiedId: string | null;
  forceOpen: boolean;
  index: number;
  isActive: boolean;
  onCopy: (text: string, id: string, label: string) => void;
}> = ({ category, copiedId, forceOpen, index, isActive, onCopy }) => {
  const [isOpen, setIsOpen] = useState(index === 0);
  const isExpanded = forceOpen || isOpen;
  const Icon = category.meta.icon;

  return (
    <section
      className={`relative overflow-hidden rounded-[32px] border bg-white/[0.03] p-5 transition sm:p-6 lg:p-8 ${
        isActive ? "border-white/18" : "border-white/10"
      }`}
      data-category-section
      id={category.id}
      style={surfaceStyle(category.meta.accent, category.meta.glow)}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-40 opacity-80"
        style={{
          background: `linear-gradient(180deg, ${category.meta.glow} 0%, rgba(0, 0, 0, 0) 100%)`,
        }}
      />

      <button
        aria-expanded={isExpanded}
        className="relative z-10 w-full text-left"
        onClick={() => setIsOpen((current) => !current)}
        type="button"
      >
        <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
          <div className="flex items-start gap-4 sm:gap-5">
            <div
              className="rounded-[22px] border p-4"
              style={accentBadgeStyle(category.meta.accent)}
            >
              <Icon className="h-6 w-6" />
            </div>
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span
                  className="rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em]"
                  style={accentBadgeStyle(category.meta.accent)}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-[11px] uppercase tracking-[0.28em] text-slate-300/55">
                  {category.meta.eyebrow}
                </span>
              </div>
              <div>
                <h2 className="font-display text-3xl leading-tight text-white sm:text-5xl">
                  {category.name}
                </h2>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300/74 sm:text-[15px]">
                  {category.description}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-300/60">{category.meta.blurb}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center xl:flex-col xl:items-end">
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-[20px] border border-white/10 bg-white/[0.04] px-4 py-3">
                <p className="text-[11px] uppercase tracking-[0.24em] text-slate-300/45">Curated</p>
                <p className="mt-2 text-2xl font-semibold text-white">{category.prompts.length}</p>
              </div>
              <div className="rounded-[20px] border border-white/10 bg-white/[0.04] px-4 py-3">
                <p className="text-[11px] uppercase tracking-[0.24em] text-slate-300/45">Archive</p>
                <p className="mt-2 text-2xl font-semibold text-white">{category.archiveCount}</p>
              </div>
            </div>
            <div className="rounded-full border border-white/10 bg-white/[0.04] p-3 text-slate-200">
              <ChevronDown
                className={`h-5 w-5 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
              />
            </div>
          </div>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            animate={{ height: "auto", opacity: 1 }}
            className="relative z-10 overflow-hidden"
            exit={{ height: 0, opacity: 0 }}
            initial={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="mt-8 grid gap-5">
              {category.prompts.map((prompt) => (
                <PromptView
                  categoryName={category.name}
                  copiedId={copiedId}
                  forceOpen={forceOpen}
                  key={prompt.id}
                  onCopy={onCopy}
                  prompt={prompt}
                  tone={category.meta}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState(curatedCategories[0]?.id ?? "");
  const [activeModal, setActiveModal] = useState<"updates" | null>(null);
  const [activeLegalDocumentId, setActiveLegalDocumentId] = useState<LegalDocumentId | null>(() =>
    getLegalDocumentIdFromHash(),
  );
  const [notice, setNotice] = useState<Notice | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const deferredQuery = useDeferredValue(searchQuery.trim().toLowerCase());
  const isFiltering = Boolean(deferredQuery || activeTag);
  const activeLegalDocument = activeLegalDocumentId
    ? legalDocumentMap[activeLegalDocumentId]
    : null;

  const filteredCategories = curatedCategories
    .map((category) => ({
      ...category,
      prompts: category.prompts.filter((prompt) => matchesPrompt(prompt, deferredQuery, activeTag)),
    }))
    .filter((category) => category.prompts.length > 0);

  const visiblePromptCount = filteredCategories.reduce(
    (sum, category) => sum + category.prompts.length,
    0,
  );
  const visibleCategoryIds = filteredCategories.map((category) => category.id).join("|");

  useEffect(() => {
    const syncLegalDocumentFromHash = () => {
      setActiveLegalDocumentId(getLegalDocumentIdFromHash());
    };

    syncLegalDocumentFromHash();
    window.addEventListener("hashchange", syncLegalDocumentFromHash);
    return () => window.removeEventListener("hashchange", syncLegalDocumentFromHash);
  }, []);

  useEffect(() => {
    document.title = activeLegalDocument
      ? `${activeLegalDocument.title} | Prompt Vault Pro`
      : "Prompt Vault Pro";
  }, [activeLegalDocument]);

  useEffect(() => {
    if (!activeLegalDocumentId) {
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeLegalDocumentId]);

  useEffect(() => {
    if (!notice) {
      return;
    }

    const timeoutId = window.setTimeout(() => setNotice(null), 2800);
    return () => window.clearTimeout(timeoutId);
  }, [notice]);

  useEffect(() => {
    if (activeLegalDocumentId) {
      return;
    }

    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 520);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeLegalDocumentId]);

  useEffect(() => {
    if (activeLegalDocumentId) {
      return;
    }

    if (filteredCategories.some((category) => category.id === activeCategory)) {
      return;
    }

    setActiveCategory(filteredCategories[0]?.id ?? "");
  }, [activeCategory, activeLegalDocumentId, filteredCategories]);

  useEffect(() => {
    if (activeLegalDocumentId) {
      return;
    }

    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-category-section]"),
    );

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio);

        if (visibleEntries[0]) {
          setActiveCategory(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: "-16% 0px -55% 0px",
        threshold: [0.15, 0.35, 0.6],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [activeLegalDocumentId, visibleCategoryIds]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) {
      return;
    }

    const offset = window.innerWidth >= 1024 ? 110 : 92;
    const top = element.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const showNotice = (title: string, detail: string, tone: Notice["tone"] = "success") => {
    setNotice({ title, detail, tone });
  };

  const handleCopy = async (text: string, id: string, label: string) => {
    try {
      await copyText(text);
      setCopiedId(id);
      showNotice(`${label} copied`, "Ready to paste into your workflow.");
      window.setTimeout(() => setCopiedId((current) => (current === id ? null : current)), 1800);
    } catch (error) {
      console.error("Copy failed.", error);
      showNotice("Copy failed", "Your browser blocked clipboard access.", "error");
    }
  };

  const jumpToCategory = (categoryId: string) => {
    setActiveCategory(categoryId);
    scrollToSection(categoryId);
  };

  const clearFilters = () => {
    setSearchQuery("");
    setActiveTag(null);
  };

  const openLegalDocument = (documentId: LegalDocumentId) => {
    window.location.hash = `legal-${documentId}`;
  };

  const closeLegalDocument = () => {
    window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
    setActiveLegalDocumentId(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openLegalCenter = () => {
    if (activeLegalDocumentId) {
      closeLegalDocument();
      window.setTimeout(() => scrollToSection("legal-center"), 60);
      return;
    }

    scrollToSection("legal-center");
  };

  return (
    <div className="app-shell min-h-screen text-slate-50">
      <div className="app-shell__orb app-shell__orb--one" />
      <div className="app-shell__orb app-shell__orb--two" />
      <div className="app-shell__grid" />

      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#08111D]/80 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-10">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.06] shadow-[0_20px_50px_-35px_rgba(244,180,0,0.72)]">
              <div className="h-5 w-5 rotate-45 rounded-[4px] bg-[#F4B400]" />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.28em] text-slate-300/45">
                Prompt Vault
              </p>
              <p className="font-display text-2xl leading-none text-white sm:text-[2rem]">
                Prompt Vault Pro
              </p>
            </div>
          </div>

          {activeLegalDocument ? (
            <nav className="hidden items-center gap-7 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-300/55 xl:flex">
              <button className="transition hover:text-white" onClick={closeLegalDocument} type="button">
                Back To Vault
              </button>
              <button className="transition hover:text-white" onClick={() => openLegalDocument("terms")} type="button">
                Terms
              </button>
              <button className="transition hover:text-white" onClick={() => openLegalDocument("privacy")} type="button">
                Privacy
              </button>
              <button className="transition hover:text-white" onClick={() => openLegalDocument("license")} type="button">
                License
              </button>
            </nav>
          ) : (
            <nav className="hidden items-center gap-7 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-300/55 xl:flex">
              <button className="transition hover:text-white" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} type="button">
                Overview
              </button>
              <button
                className="transition hover:text-white"
                onClick={() => jumpToCategory(filteredCategories[0]?.id ?? curatedCategories[0]?.id ?? "")}
                type="button"
              >
                Collections
              </button>
              <button className="transition hover:text-white" onClick={() => setActiveModal("updates")} type="button">
                Release Notes
              </button>
              <button className="transition hover:text-white" onClick={openLegalCenter} type="button">
                Legal
              </button>
            </nav>
          )}

          <div className="flex items-center gap-3">
            {activeLegalDocument ? (
              <button
                className="hidden rounded-full border border-white/12 bg-white/[0.05] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-100 transition hover:bg-white/[0.1] sm:inline-flex"
                onClick={closeLegalDocument}
                type="button"
              >
                Return
              </button>
            ) : (
              <button
                className="hidden rounded-full border border-white/12 bg-white/[0.05] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-100 transition hover:bg-white/[0.1] sm:inline-flex"
                onClick={() => setActiveModal("updates")}
                type="button"
              >
                Updates
              </button>
            )}
          </div>
        </div>
      </header>

      {activeLegalDocument ? (
        <LegalPageView
          activeDocument={activeLegalDocument}
          onBackToVault={closeLegalDocument}
          onOpenDocument={openLegalDocument}
        />
      ) : (
      <main className="relative z-10 mx-auto flex w-full max-w-[1600px] flex-col gap-8 px-4 pb-20 pt-6 sm:px-6 lg:px-10 lg:pb-24 lg:pt-8">
        <section className="grid gap-6 xl:grid-cols-[minmax(0,1.35fr)_380px]">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="hero-panel rounded-[36px] p-6 sm:p-8 lg:p-10"
            initial={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.06] px-4 py-2 text-[11px] uppercase tracking-[0.26em] text-slate-300/70">
              <Sparkles className="h-4 w-4" />
              Premium Prompt Workspace
            </div>

            <div className="mt-8 max-w-4xl space-y-5">
              <h1 className="font-display text-5xl leading-[0.96] text-white sm:text-6xl lg:text-7xl">
                A sharper, more dynamic vault for browsing, filtering, and deploying prompts.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-slate-300/76 sm:text-lg">
                A premium prompt vault for creators, marketers, and operators who want image
                prompts, reusable frameworks, prompt codes, and cinematic video direction in one
                place, so they can move from blank page to production-ready output faster and with
                far less guesswork.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                className="inline-flex items-center gap-2 rounded-full bg-[#F4B400] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#08111D] transition hover:translate-y-[-1px] hover:shadow-[0_20px_45px_-28px_rgba(244,180,0,0.8)]"
                onClick={() => jumpToCategory(filteredCategories[0]?.id ?? curatedCategories[0]?.id ?? "")}
                type="button"
              >
                Explore collections
                <ArrowUpRight className="h-4 w-4" />
              </button>
              <button
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-100 transition hover:bg-white/[0.1]"
                onClick={() => openLegalDocument("license")}
                type="button"
              >
                <ShieldCheck className="h-4 w-4" />
                View license
              </button>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[24px] border border-white/10 bg-black/20 p-4">
                <p className="text-[11px] uppercase tracking-[0.24em] text-slate-300/45">Curated prompts</p>
                <p className="mt-2 text-3xl font-semibold text-white">{totalUniquePrompts}</p>
                <p className="mt-2 text-sm leading-6 text-slate-300/70">
                  Distilled from the archive so the interface stays focused and premium.
                </p>
              </div>
              <div className="rounded-[24px] border border-white/10 bg-black/20 p-4">
                <p className="text-[11px] uppercase tracking-[0.24em] text-slate-300/45">Archive depth</p>
                <p className="mt-2 text-3xl font-semibold text-white">{totalArchiveEntries}</p>
                <p className="mt-2 text-sm leading-6 text-slate-300/70">
                  Full library footprint preserved behind a cleaner browsing experience.
                </p>
              </div>
              <div className="rounded-[24px] border border-white/10 bg-black/20 p-4">
                <p className="text-[11px] uppercase tracking-[0.24em] text-slate-300/45">Rule-backed prompts</p>
                <p className="mt-2 text-3xl font-semibold text-white">{promptsWithRules}</p>
                <p className="mt-2 text-sm leading-6 text-slate-300/70">
                  Structured prompt patterns with clear operating constraints.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-4 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)]">
              <div className="rounded-[28px] border border-white/10 bg-black/18 p-5 sm:p-6">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.24em] text-slate-300/45">
                      Vault workflow
                    </p>
                    <h3 className="mt-3 text-xl font-semibold text-white sm:text-2xl">
                      One system for finding, refining, and shipping better prompts.
                    </h3>
                  </div>
                  <p className="max-w-sm text-sm leading-6 text-slate-300/65">
                    Built to reduce prompt fatigue and give you a stronger starting point for every
                    brief.
                  </p>
                </div>

                <div className="mt-5 grid gap-3 md:grid-cols-3">
                  {heroWorkflowSteps.map((step, index) => {
                    const Icon = step.icon;

                    return (
                      <div
                        className="rounded-[22px] border border-white/10 bg-white/[0.03] p-4"
                        key={step.title}
                      >
                        <div className="flex items-center justify-between gap-3">
                          <div
                            className="rounded-2xl border p-3"
                            style={accentBadgeStyle(step.accent)}
                          >
                            <Icon className="h-5 w-5" />
                          </div>
                          <span className="text-[11px] uppercase tracking-[0.22em] text-slate-300/45">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        </div>
                        <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/92">
                          {step.title}
                        </p>
                        <p className="mt-2 text-sm leading-6 text-slate-300/70">{step.detail}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-black/18 p-5 sm:p-6">
                <p className="text-[11px] uppercase tracking-[0.24em] text-slate-300/45">
                  Prompt specimen
                </p>
                <h3 className="mt-3 text-xl font-semibold text-white sm:text-2xl">
                  What a production-ready starting point looks like.
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-300/68">
                  The vault is designed around structured prompts that are fast to adapt, easier to
                  trust, and ready to drop into real creative workflows.
                </p>

                <div className="mt-5 rounded-[24px] border border-white/10 bg-[#08111D]/72 p-4 shadow-[0_18px_45px_-28px_rgba(8,17,29,0.95)]">
                  <pre className="whitespace-pre-wrap font-mono text-[12px] leading-6 text-slate-100/82 sm:text-[13px]">
                    {heroSamplePrompt}
                  </pre>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {["Image Systems", "Prompt Frameworks", "Reusable Codes", "Video Direction"].map(
                    (label) => (
                      <span
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-slate-300/70"
                        key={label}
                      >
                        {label}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
            <StatCard
              detail="Four collections now feel like one cohesive system instead of separate scroll blocks."
              icon={Archive}
              label="Collections"
              value={String(curatedCategories.length).padStart(2, "0")}
            />
            <StatCard
              detail="Top tags and fast filtering make the vault usable under real production pressure."
              icon={Filter}
              label="Discovery"
              value={`${featuredTags.length}+`}
            />
            <div className="surface-panel rounded-[28px] p-5 sm:p-6">
              <p className="text-[11px] uppercase tracking-[0.24em] text-slate-300/45">
                Collection spectrum
              </p>
              <div className="mt-5 space-y-4">
                {curatedCategories.map((category) => {
                  const Icon = category.meta.icon;
                  return (
                    <button
                      className="flex w-full items-start gap-4 rounded-[22px] border border-white/10 bg-white/[0.03] p-4 text-left transition hover:bg-white/[0.08]"
                      key={category.id}
                      onClick={() => jumpToCategory(category.id)}
                      type="button"
                    >
                      <div
                        className="rounded-2xl border p-3"
                        style={accentBadgeStyle(category.meta.accent)}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-3">
                          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/90">
                            {category.name}
                          </p>
                          <p className="text-xs text-slate-300/45">{category.prompts.length}</p>
                        </div>
                        <p className="mt-2 text-sm leading-6 text-slate-300/70">{category.meta.blurb}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="surface-panel rounded-[32px] p-5 sm:p-6 lg:p-8">
          <div className="flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
            <div className="max-w-2xl">
              <p className="text-[11px] uppercase tracking-[0.24em] text-slate-300/45">
                Discovery layer
              </p>
              <h3 className="mt-3 font-display text-3xl text-white sm:text-4xl">
                Search the vault like a product, not a spreadsheet.
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-300/72 sm:text-[15px]">
                Search titles, descriptions, template text, tags, and prompt rules. The interface
                opens matching sections automatically so the result feels immediate and useful.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-100 transition hover:bg-white/[0.1]"
                onClick={clearFilters}
                type="button"
              >
                Reset filters
              </button>
            </div>
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-[minmax(0,1fr)_320px]">
            <label className="block">
              <span className="text-[11px] uppercase tracking-[0.24em] text-slate-300/45">
                Search the library
              </span>
              <div className="relative mt-3">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-300/40" />
                <input
                  className="w-full rounded-[22px] border border-white/12 bg-white/[0.05] py-4 pl-12 pr-4 text-base text-white outline-none transition placeholder:text-slate-300/35 focus:border-[#2EC4C7]/45 focus:bg-white/[0.08]"
                  onChange={(event) => {
                    const nextValue = event.target.value;
                    startTransition(() => setSearchQuery(nextValue));
                  }}
                  placeholder="Search prompts, tags, camera terms, frameworks, or rules..."
                  type="search"
                  value={searchQuery}
                />
              </div>
            </label>

            <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5">
              <p className="text-[11px] uppercase tracking-[0.24em] text-slate-300/45">
                Current view
              </p>
              <p className="mt-3 text-3xl font-semibold text-white">{visiblePromptCount}</p>
              <p className="mt-2 text-sm leading-7 text-slate-300/72">
                {isFiltering
                  ? "matching prompts across the filtered categories."
                  : "signature prompts surfaced from the full archive."}
              </p>
              {activeTag && (
                <button
                  className="mt-4 inline-flex rounded-full border border-white/12 bg-white/[0.05] px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-slate-100 transition hover:bg-white/[0.1]"
                  onClick={() => setActiveTag(null)}
                  type="button"
                >
                  Tag: {activeTag}
                </button>
              )}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between gap-4">
            <p className="text-[11px] uppercase tracking-[0.24em] text-slate-300/45">
              Popular tags
            </p>
            <p className="text-xs text-slate-300/45">
              {isFiltering ? "Filtered view active" : "Select one to narrow the vault"}
            </p>
          </div>

          <div className="mt-4 flex gap-3 overflow-x-auto pb-1">
            {featuredTags.map(({ tag, count }) => {
              const isActive = activeTag === tag;
              return (
                <button
                  className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] transition ${
                    isActive
                      ? "border-[#F4B400]/40 bg-[#F4B400]/15 text-[#F4B400]"
                      : "border-white/12 bg-white/[0.04] text-slate-100 hover:bg-white/[0.09]"
                  }`}
                  key={tag}
                  onClick={() => setActiveTag((current) => (current === tag ? null : tag))}
                  type="button"
                >
                  {tag}
                  <span className="rounded-full border border-current/20 px-2 py-0.5 text-[10px]">
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {curatedCategories.map((category) => {
              const isCurrent = activeCategory === category.id;
              const matchingCategory = filteredCategories.find((item) => item.id === category.id);
              const visibleCountForCategory = matchingCategory?.prompts.length ?? 0;
              const Icon = category.meta.icon;

              return (
                <button
                  className={`rounded-[24px] border p-5 text-left transition ${
                    isCurrent
                      ? "border-white/18 bg-white/[0.08]"
                      : "border-white/10 bg-white/[0.03] hover:bg-white/[0.08]"
                  }`}
                  key={category.id}
                  onClick={() => jumpToCategory(category.id)}
                  style={surfaceStyle(category.meta.accent, category.meta.glow)}
                  type="button"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div
                      className="rounded-2xl border p-3"
                      style={accentBadgeStyle(category.meta.accent)}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-slate-300/35" />
                  </div>
                  <h4 className="mt-5 text-lg font-semibold leading-snug text-white">{category.name}</h4>
                  <p className="mt-2 text-sm leading-6 text-slate-300/70">{category.meta.blurb}</p>
                  <div className="mt-5 flex items-center justify-between text-[11px] uppercase tracking-[0.22em] text-slate-300/45">
                    <span>{visibleCountForCategory} visible</span>
                    <span>{category.prompts.length} curated</span>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        <section className="grid gap-6 xl:grid-cols-[300px_minmax(0,1fr)]">
          <div className="xl:hidden">
            <div className="surface-panel rounded-[28px] p-4">
              <p className="text-[11px] uppercase tracking-[0.24em] text-slate-300/45">
                Collections
              </p>
              <div className="mt-4 flex gap-3 overflow-x-auto pb-1">
                {filteredCategories.map((category) => (
                  <button
                    aria-current={activeCategory === category.id ? "true" : undefined}
                    className={`shrink-0 rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] transition ${
                      activeCategory === category.id
                        ? "border-[#F4B400]/40 bg-[#F4B400]/15 text-[#F4B400]"
                        : "border-white/12 bg-white/[0.04] text-slate-100 hover:bg-white/[0.09]"
                    }`}
                    key={category.id}
                    onClick={() => jumpToCategory(category.id)}
                    type="button"
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <aside className="hidden xl:block">
            <div className="sticky top-[106px] space-y-4">
              <div className="surface-panel rounded-[28px] p-5">
                <p className="text-[11px] uppercase tracking-[0.24em] text-slate-300/45">
                  Active navigation
                </p>
                <div className="mt-5 space-y-3">
                  {filteredCategories.map((category, index) => (
                    <button
                      aria-current={activeCategory === category.id ? "true" : undefined}
                      className={`block w-full rounded-[22px] border px-4 py-4 text-left transition ${
                        activeCategory === category.id
                          ? "border-white/18 bg-white/[0.08]"
                          : "border-white/10 bg-white/[0.03] hover:bg-white/[0.08]"
                      }`}
                      key={category.id}
                      onClick={() => jumpToCategory(category.id)}
                      style={surfaceStyle(category.meta.accent, category.meta.glow)}
                      type="button"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-[11px] uppercase tracking-[0.22em] text-slate-300/45">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="text-xs text-slate-300/45">{category.prompts.length}</span>
                      </div>
                      <p className="mt-2 text-base font-semibold text-white">{category.name}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-300/68">{category.meta.eyebrow}</p>
                    </button>
                  ))}
                </div>
              </div>

              <div className="surface-panel rounded-[28px] p-5">
                <p className="text-[11px] uppercase tracking-[0.24em] text-slate-300/45">
                  Vault notes
                </p>
                <div className="mt-4 space-y-4 text-sm leading-7 text-slate-300/72">
                  <p>
                    The upgraded layout favors curated prompts first, while still being transparent
                    about the larger archive footprint behind the scenes.
                  </p>
                  <p>
                    Search results auto-expand so you can scan matches without extra clicking.
                  </p>
                </div>
              </div>
            </div>
          </aside>

          <div className="space-y-6">
            {!filteredCategories.length ? (
              <div className="surface-panel rounded-[32px] p-8 text-center sm:p-10">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-white/12 bg-white/[0.05]">
                  <Search className="h-7 w-7 text-slate-200" />
                </div>
                <h3 className="mt-6 font-display text-3xl text-white">No prompts match this view.</h3>
                <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-300/72 sm:text-[15px]">
                  Try a broader keyword, remove the current tag filter, or reset the view to browse
                  the full library again.
                </p>
                <button
                  className="mt-6 inline-flex rounded-full bg-[#F4B400] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#08111D] transition hover:translate-y-[-1px]"
                  onClick={clearFilters}
                  type="button"
                >
                  Reset search
                </button>
              </div>
            ) : (
              filteredCategories.map((category, index) => (
                <CategorySection
                  category={category}
                  copiedId={copiedId}
                  forceOpen={isFiltering}
                  index={index}
                  isActive={activeCategory === category.id}
                  key={category.id}
                  onCopy={handleCopy}
                />
              ))
            )}

            <footer className="grid gap-4 lg:grid-cols-[minmax(0,1.1fr)_minmax(260px,0.9fr)]">
              <div className="surface-panel rounded-[28px] p-5 sm:p-6">
                <p className="text-[11px] uppercase tracking-[0.24em] text-slate-300/45">
                  Product summary
                </p>
                <h3 className="mt-3 font-display text-3xl text-white sm:text-4xl">
                  Built to feel premium, fast, and trustworthy.
                </h3>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300/72 sm:text-[15px]">
                  The visual system now has better pacing, richer contrast, responsive composition,
                  and cleaner interaction states, so the vault reads like a professional product
                  instead of a long text dump.
                </p>
              </div>

              <div className="surface-panel rounded-[28px] p-5 sm:p-6">
                <p className="text-[11px] uppercase tracking-[0.24em] text-slate-300/45">
                  Support actions
                </p>
                <div className="mt-5 flex flex-col gap-3">
                  <button
                    className="inline-flex items-center justify-between rounded-[20px] border border-white/10 bg-white/[0.04] px-4 py-4 text-left text-sm text-slate-100 transition hover:bg-white/[0.08]"
                    onClick={() => setActiveModal("updates")}
                    type="button"
                  >
                    <span>Review release notes</span>
                    <ArrowUpRight className="h-4 w-4 text-slate-300/45" />
                  </button>
                  <button
                    className="inline-flex items-center justify-between rounded-[20px] border border-white/10 bg-white/[0.04] px-4 py-4 text-left text-sm text-slate-100 transition hover:bg-white/[0.08]"
                    onClick={() => openLegalDocument("license")}
                    type="button"
                  >
                    <span>Open license details</span>
                    <ArrowUpRight className="h-4 w-4 text-slate-300/45" />
                  </button>
                  <button
                    className="inline-flex items-center justify-between rounded-[20px] border border-white/10 bg-white/[0.04] px-4 py-4 text-left text-sm text-slate-100 transition hover:bg-white/[0.08]"
                    onClick={openLegalCenter}
                    type="button"
                  >
                    <span>Open legal center</span>
                    <ArrowUpRight className="h-4 w-4 text-slate-300/45" />
                  </button>
                </div>
              </div>
            </footer>
          </div>
        </section>

        <section className="surface-panel rounded-[32px] p-5 sm:p-6 lg:p-8" id="legal-center">
          <div className="flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
            <div className="max-w-3xl">
              <p className="text-[11px] uppercase tracking-[0.24em] text-slate-300/45">
                Legal Center
              </p>
              <h3 className="mt-3 font-display text-3xl text-white sm:text-4xl">
                Policies that make the vault feel credible, transparent, and launch-ready.
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-300/72 sm:text-[15px]">
                Explore the core legal pages for Prompt Vault Pro, including terms, privacy,
                cookies, refunds, disclaimers, and licensing. Each page is designed to make the
                product feel more complete and professional before launch.
              </p>
            </div>

            <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5 xl:max-w-sm">
              <p className="text-[11px] uppercase tracking-[0.24em] text-slate-300/45">
                Operator note
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-300/72">
                Use these pages as a strong foundation, then tailor them to your checkout flow,
                analytics stack, support process, and legal jurisdiction before going fully live.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {legalDocuments.map((document) => (
              <LegalDocumentCard document={document} key={document.id} onOpen={openLegalDocument} />
            ))}
          </div>
        </section>
      </main>
      )}

      <AnimatePresence>
        {notice && (
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className={`fixed bottom-5 right-4 z-[70] max-w-sm rounded-[24px] border px-5 py-4 text-sm shadow-[0_30px_80px_-45px_rgba(0,0,0,0.85)] backdrop-blur-xl sm:right-6 ${
              notice.tone === "error"
                ? "border-red-300/20 bg-red-500/12 text-red-50"
                : "border-emerald-300/20 bg-emerald-500/12 text-emerald-50"
            }`}
            exit={{ opacity: 0, y: 12 }}
            initial={{ opacity: 0, y: 16 }}
          >
            <p className="font-semibold">{notice.title}</p>
            <p className="mt-1 leading-6 opacity-90">{notice.detail}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            animate={{ opacity: 1, y: 0 }}
            className="fixed bottom-5 left-4 z-[70] inline-flex items-center gap-2 rounded-full border border-white/12 bg-[#0D1B2A]/88 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-100 shadow-[0_25px_60px_-35px_rgba(8,17,29,0.95)] backdrop-blur-xl sm:left-6"
            exit={{ opacity: 0, y: 12 }}
            initial={{ opacity: 0, y: 16 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            type="button"
          >
            <ArrowUp className="h-4 w-4" />
            Back to top
          </motion.button>
        )}
      </AnimatePresence>

      <Modal
        icon={Sparkles}
        isOpen={activeModal === "updates"}
        kicker="Release Notes"
        onClose={() => setActiveModal(null)}
        title="Version 2.1 Refresh"
      >
        <div className="space-y-6 text-sm leading-7 text-slate-300/78">
          <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-[#F4B400] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#08111D]">
                New
              </span>
              <span className="text-sm uppercase tracking-[0.22em] text-slate-300/55">
                Layout refresh
              </span>
            </div>
            <p className="mt-4">
              The interface now prioritizes premium presentation, responsive behavior, dynamic
              filtering, and cleaner prompt scanning across desktop and mobile screens.
            </p>
          </div>
          <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5">
            <p className="text-[11px] uppercase tracking-[0.24em] text-slate-300/45">
              Improvements included
            </p>
            <ul className="mt-4 space-y-3">
              <li>Responsive dashboard-style hero with collection insights and stronger hierarchy.</li>
              <li>Search, tag filtering, and auto-expanded matching results for faster discovery.</li>
              <li>Dedicated legal-page views for terms, privacy, cookies, refunds, disclaimers, and licensing.</li>
              <li>Curated prompt surfacing to reduce duplication noise in the browsing experience.</li>
            </ul>
          </div>
        </div>
      </Modal>
    </div>
  );
}
