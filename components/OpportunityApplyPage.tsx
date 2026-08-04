"use client";

import Link from "next/link";
import { FormEvent, useEffect, useRef, useState } from "react";
import {
  IconArrowLeft,
  IconArrowRight,
  IconBriefcase,
  IconCheck,
  IconClock,
  IconFileDescription,
  IconMapPin,
  IconShieldCheck,
  IconUpload,
  IconX,
} from "@tabler/icons-react";
import { FloatingNavDemo } from "@/components/Home/Navbar";
import Footersec from "@/components/Home/footersec";
import { careersApiUrl, type Opportunity } from "@/lib/opportunities";

type OpportunityApplyPageProps = {
  initialRole?: Opportunity;
};

type ApplicationFields = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  portfolio: string;
  currentTitle: string;
  experience: string;
  availability: string;
  coverLetter: string;
  consent: boolean;
};

const initialFields: ApplicationFields = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  location: "",
  linkedin: "",
  portfolio: "",
  currentTitle: "",
  experience: "",
  availability: "",
  coverLetter: "",
  consent: false,
};

const steps = ["Resume", "Your information", "Experience", "Review"];
const acceptedResumeTypes = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

export default function OpportunityApplyPage({ initialRole }: OpportunityApplyPageProps) {
  const [role, setRole] = useState<Opportunity | null>(initialRole ?? null);
  const [loading, setLoading] = useState(!initialRole);
  const [step, setStep] = useState(0);
  const [resume, setResume] = useState<File | null>(null);
  const [resumeError, setResumeError] = useState("");
  const [fields, setFields] = useState<ApplicationFields>(initialFields);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formError, setFormError] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (initialRole) return;
    const parts = window.location.pathname.split("/").filter(Boolean);
    const slug = parts[0] === "opportunities" ? parts[1] : new URLSearchParams(window.location.search).get("slug");
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 12000);

    fetch(careersApiUrl, { headers: { Accept: "application/json" }, signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error("Unable to load role");
        return response.json() as Promise<{ data?: Opportunity[] }>;
      })
      .then((payload) => {
        const roles = Array.isArray(payload.data) ? payload.data : [];
        setRole(roles.find((item) => item.slug === slug) ?? null);
      })
      .catch(() => setRole(null))
      .finally(() => {
        window.clearTimeout(timeout);
        setLoading(false);
      });

    return () => {
      window.clearTimeout(timeout);
      controller.abort();
    };
  }, [initialRole]);

  const updateField = <K extends keyof ApplicationFields>(key: K, value: ApplicationFields[K]) => {
    setFields((current) => ({ ...current, [key]: value }));
    setFormError("");
  };

  const validateResume = (file: File | undefined) => {
    if (!file) return;
    if (!acceptedResumeTypes.includes(file.type) || !/\.(pdf|doc|docx)$/i.test(file.name)) {
      setResumeError("Please upload a PDF, DOC, or DOCX file.");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setResumeError("Your resume must be 5 MB or smaller.");
      return;
    }
    setResume(file);
    setResumeError("");
  };

  const continueToNextStep = () => {
    if (step === 0 && !resume) {
      setResumeError("Please upload your resume to continue.");
      return;
    }
    if (step === 1 && (!fields.firstName || !fields.lastName || !fields.email || !fields.phone || !fields.location)) {
      setFormError("Please complete all required fields.");
      return;
    }
    if (step === 2 && (!fields.currentTitle || !fields.experience || !fields.availability || !fields.coverLetter)) {
      setFormError("Please complete all required fields.");
      return;
    }
    setFormError("");
    setStep((current) => Math.min(current + 1, steps.length - 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const submitApplication = async (event: FormEvent) => {
    event.preventDefault();
    if (!role || !resume || !fields.consent) {
      setFormError("Please confirm the declaration before submitting.");
      return;
    }

    setStatus("sending");
    setFormError("");
    const data = new FormData();
    data.append("resume", resume);
    data.append("roleId", String(role.id));
    data.append("roleTitle", role.title);
    data.append("roleSlug", role.slug);
    Object.entries(fields).forEach(([key, value]) => data.append(key, String(value)));

    try {
      const response = await fetch(
        `${careersApiUrl}/${encodeURIComponent(role.slug)}/applications`,
        { method: "POST", headers: { Accept: "application/json" }, body: data },
      );
      const payload = await response.json().catch(() => null);
      if (!response.ok || !payload?.ok) throw new Error(payload?.error || payload?.message || "Submission failed");
      setStatus("success");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      setStatus("error");
      setFormError(error instanceof Error ? error.message : "We could not submit your application. Please try again shortly.");
    }
  };

  if (loading) {
    return <main className="min-h-screen animate-pulse bg-[#000A21]" />;
  }

  if (!role) {
    return (
      <main className="grid min-h-screen place-items-center bg-[#000A21] px-5 text-center text-white">
        <div className="max-w-xl rounded-3xl border border-white/10 bg-[#080F1F] px-8 py-16">
          <IconBriefcase className="mx-auto h-12 w-12 text-[#55A6FF]" stroke={1.5} />
          <h1 className="bold mt-5 text-3xl">This application is unavailable</h1>
          <p className="mt-3 leading-7 text-[#A9ABBE]">The role may have closed or is no longer accepting applications.</p>
          <Link href="/opportunities" className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#2378DA] to-[#134074] px-6 py-3">
            <IconArrowLeft className="h-4 w-4" /> View open roles
          </Link>
        </div>
      </main>
    );
  }

  if (status === "success") {
    return (
      <main className="grid min-h-screen place-items-center bg-[#000A21] px-5 text-center text-white">
        <div className="max-w-2xl rounded-3xl border border-[#2378DA]/40 bg-gradient-to-br from-[#10294D] to-[#080F1F] px-8 py-16 sm:px-14">
          <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#2378DA] shadow-[0_15px_45px_rgba(35,120,218,.35)]"><IconCheck className="h-8 w-8" /></span>
          <p className="bold mt-7 text-xs uppercase tracking-[0.2em] text-[#55A6FF]">Application received</p>
          <h1 className="bold mt-4 text-3xl sm:text-4xl">Thank you, {fields.firstName}</h1>
          <p className="mx-auto mt-4 max-w-xl leading-7 text-[#A9ABBE]">Your application for {role.title} has been sent to our hiring team. We will contact you if your experience matches the next stage.</p>
          <Link href="/opportunities" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#2378DA] to-[#134074] px-6 py-3">Explore other roles <IconArrowRight className="h-4 w-4" /></Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#000A21] text-white">
      <div className="p-5 lg:p-9">
        <FloatingNavDemo />
        <section
          className="relative flex h-[42vh] min-h-[390px] w-full items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-cover bg-center px-6 pt-16 text-center sm:px-10 lg:h-[50vh] lg:pt-24"
          style={{ backgroundImage: "linear-gradient(180deg, rgba(0,10,33,.25), rgba(0,10,33,.78)), url('/assets/rd-image081.svg')" }}
        >
          <div className="absolute -bottom-32 right-12 h-80 w-80 rounded-full bg-[#2378DA]/25 blur-[100px]" />
          <div className="relative max-w-4xl">
            <p className="bold text-xs uppercase tracking-[0.24em] text-[#55A6FF]">Careers at Resolute Digitals</p>
            <h1 className="bold mt-5 break-words text-4xl leading-tight text-white drop-shadow-lg sm:text-5xl lg:text-6xl">Apply for {role.title}</h1>
            <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/70">Take the next step and tell us about the experience, ideas, and perspective you would bring to our team.</p>
          </div>
        </section>
      </div>

      <section className="bg-[#0F1930] px-5 py-16 lg:px-9 lg:py-24">
        <div className="mx-auto max-w-[1464px]">
          <Link href={`/opportunities/${role.slug}/`} className="inline-flex items-center gap-2 text-sm text-white/55 transition hover:text-[#55A6FF]"><IconArrowLeft className="h-4 w-4" /> Back to job posting</Link>

          <div className="mt-8 grid min-w-0 gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
            <form onSubmit={submitApplication} className="min-w-0 overflow-hidden rounded-3xl border border-white/10 bg-[#080F1F] shadow-[0_30px_90px_rgba(0,0,0,.3)]">
              <div className="border-b border-white/10 px-6 py-7 sm:px-10">
                <p className="bold text-xs uppercase tracking-[0.2em] text-[#55A6FF]">Apply to Resolute Digitals</p>
                <h1 className="bold mt-3 break-words text-3xl sm:text-4xl">{role.title}</h1>

                <div className="relative mt-8 grid grid-cols-4 gap-2">
                  <span className="absolute left-[12%] right-[12%] top-4 h-px bg-white/10" />
                  {steps.map((item, index) => (
                    <button key={item} type="button" onClick={() => index < step && setStep(index)} className="relative flex min-w-0 flex-col items-center gap-2 text-center" aria-current={step === index ? "step" : undefined}>
                      <span className={`grid h-8 w-8 place-items-center rounded-full border text-xs transition ${index <= step ? "border-[#2378DA] bg-[#2378DA] text-white" : "border-white/15 bg-[#111A2D] text-white/35"}`}>{index < step ? <IconCheck className="h-4 w-4" /> : index + 1}</span>
                      <span className={`hidden text-xs sm:block ${index <= step ? "text-white/75" : "text-white/30"}`}>{item}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-6 sm:p-10">
                {step === 0 && (
                  <section>
                    <h2 className="bold text-2xl sm:text-3xl">Start with your resume</h2>
                    <p className="mt-2 text-sm leading-6 text-[#A9ABBE]">Upload your resume or CV. It will be attached securely to this application.</p>
                    <input ref={fileInputRef} type="file" accept=".pdf,.doc,.docx" className="hidden" onChange={(event) => validateResume(event.target.files?.[0])} />
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      onDragOver={(event) => event.preventDefault()}
                      onDrop={(event) => { event.preventDefault(); validateResume(event.dataTransfer.files[0]); }}
                      className="mt-8 flex min-h-64 w-full flex-col items-center justify-center rounded-2xl border border-dashed border-white/15 bg-[#050D1D] px-6 text-center transition hover:border-[#2378DA]/70 hover:bg-[#071329]"
                    >
                      <span className="grid h-14 w-14 place-items-center rounded-2xl bg-[#2378DA]/15 text-[#55A6FF]"><IconUpload className="h-7 w-7" /></span>
                      <span className="bold mt-5 text-lg">Drop your resume here</span>
                      <span className="mt-1 text-sm text-white/40">or click to choose a file</span>
                      <span className="mt-3 text-xs uppercase tracking-wider text-white/25">PDF, DOC, DOCX · 5 MB maximum</span>
                    </button>
                    {resume && <div className="mt-4 flex items-center gap-3 rounded-xl border border-[#2378DA]/30 bg-[#2378DA]/10 p-4"><IconFileDescription className="h-6 w-6 shrink-0 text-[#55A6FF]" /><div className="min-w-0 flex-1"><p className="truncate text-sm">{resume.name}</p><p className="mt-1 text-xs text-white/40">{(resume.size / 1024 / 1024).toFixed(2)} MB</p></div><button type="button" onClick={() => setResume(null)} aria-label="Remove resume"><IconX className="h-5 w-5 text-white/50" /></button></div>}
                    {resumeError && <p className="mt-3 text-sm text-red-400">{resumeError}</p>}
                  </section>
                )}

                {step === 1 && (
                  <section>
                    <h2 className="bold text-2xl sm:text-3xl">Tell us about yourself</h2>
                    <p className="mt-2 text-sm leading-6 text-[#A9ABBE]">Share the best details for our hiring team to reach you.</p>
                    <div className="mt-7 grid gap-5 sm:grid-cols-2">
                      <Field label="First name" required value={fields.firstName} onChange={(value) => updateField("firstName", value)} />
                      <Field label="Last name" required value={fields.lastName} onChange={(value) => updateField("lastName", value)} />
                      <Field label="Email address" required type="email" value={fields.email} onChange={(value) => updateField("email", value)} />
                      <Field label="Phone number" required type="tel" value={fields.phone} onChange={(value) => updateField("phone", value)} />
                      <Field label="Current location" required value={fields.location} onChange={(value) => updateField("location", value)} />
                      <Field label="LinkedIn profile" type="url" value={fields.linkedin} onChange={(value) => updateField("linkedin", value)} />
                      <div className="sm:col-span-2"><Field label="Portfolio or website" type="url" value={fields.portfolio} onChange={(value) => updateField("portfolio", value)} /></div>
                    </div>
                  </section>
                )}

                {step === 2 && (
                  <section>
                    <h2 className="bold text-2xl sm:text-3xl">Your experience</h2>
                    <p className="mt-2 text-sm leading-6 text-[#A9ABBE]">Give us a little context about your experience and availability.</p>
                    <div className="mt-7 grid gap-5 sm:grid-cols-2">
                      <Field label="Current or most recent title" required value={fields.currentTitle} onChange={(value) => updateField("currentTitle", value)} />
                      <SelectField label="Years of relevant experience" required value={fields.experience} options={["Less than 1 year", "1–2 years", "3–5 years", "6–9 years", "10+ years"]} onChange={(value) => updateField("experience", value)} />
                      <div className="sm:col-span-2"><SelectField label="When could you start?" required value={fields.availability} options={["Immediately", "Within 2 weeks", "Within 1 month", "More than 1 month"]} onChange={(value) => updateField("availability", value)} /></div>
                      <label className="sm:col-span-2"><span className="text-sm text-white/70">Why are you interested in this role? <span className="text-[#55A6FF]">*</span></span><textarea rows={7} required value={fields.coverLetter} onChange={(event) => updateField("coverLetter", event.target.value)} className="mt-2 w-full rounded-xl border border-white/10 bg-[#111A2D] px-4 py-3.5 text-white outline-none transition placeholder:text-white/25 focus:border-[#2378DA]" placeholder="Tell us what you would bring to the role..." /></label>
                    </div>
                  </section>
                )}

                {step === 3 && (
                  <section>
                    <h2 className="bold text-2xl sm:text-3xl">Review your application</h2>
                    <p className="mt-2 text-sm leading-6 text-[#A9ABBE]">Make sure everything looks right before submitting.</p>
                    <div className="mt-7 divide-y divide-white/10 rounded-2xl border border-white/10 bg-[#050D1D] px-5 sm:px-6">
                      <ReviewRow label="Applicant" value={`${fields.firstName} ${fields.lastName}`} />
                      <ReviewRow label="Contact" value={`${fields.email} · ${fields.phone}`} />
                      <ReviewRow label="Location" value={fields.location} />
                      <ReviewRow label="Experience" value={`${fields.currentTitle} · ${fields.experience}`} />
                      <ReviewRow label="Availability" value={fields.availability} />
                      <ReviewRow label="Resume" value={resume?.name || "Not attached"} />
                    </div>
                    <label className="mt-6 flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 bg-white/[.03] p-4 text-sm leading-6 text-[#A9ABBE]"><input type="checkbox" checked={fields.consent} onChange={(event) => updateField("consent", event.target.checked)} className="mt-1 h-4 w-4 accent-[#2378DA]" /><span>I confirm that the information provided is accurate and consent to Resolute Digitals processing it for recruitment purposes.</span></label>
                  </section>
                )}

                {formError && <p className="mt-5 rounded-xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-300">{formError}</p>}
                <div className="mt-8 flex items-center justify-between gap-4 border-t border-white/10 pt-6">
                  {step > 0 ? <button type="button" onClick={() => { setStep((current) => current - 1); setFormError(""); }} className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm text-white/75 transition hover:bg-white/5"><IconArrowLeft className="h-4 w-4" /> Back</button> : <span />}
                  {step < steps.length - 1 ? <button type="button" onClick={continueToNextStep} className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#2378DA] to-[#134074] px-6 py-3 text-sm transition hover:brightness-110">Continue <IconArrowRight className="h-4 w-4" /></button> : <button type="submit" disabled={status === "sending"} className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#2378DA] to-[#134074] px-6 py-3 text-sm transition hover:brightness-110 disabled:opacity-60">{status === "sending" ? "Submitting..." : "Submit application"}<IconArrowRight className="h-4 w-4" /></button>}
                </div>
              </div>
            </form>

            <aside className="space-y-6 lg:sticky lg:top-8 lg:self-start">
              <div className="rounded-3xl border border-white/10 bg-[#080F1F] p-7">
                <p className="bold text-xs uppercase tracking-[0.2em] text-[#55A6FF]">You are applying for</p>
                <h2 className="bold mt-4 text-2xl">{role.title}</h2>
                <div className="mt-5 flex flex-wrap gap-3 text-xs text-white/50"><span className="inline-flex items-center gap-1.5"><IconMapPin className="h-4 w-4 text-[#55A6FF]" />{role.location}</span><span className="inline-flex items-center gap-1.5"><IconClock className="h-4 w-4 text-[#55A6FF]" />{role.employment_type}</span></div>
                <p className="mt-6 border-t border-white/10 pt-5 text-sm leading-6 text-[#A9ABBE]">{role.summary}</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-[#080F1F] p-7">
                <h2 className="bold text-xl">What happens next?</h2>
                <ol className="mt-5 space-y-4 text-sm text-[#A9ABBE]"><NextStep number="01" text="We review your experience and application." /><NextStep number="02" text="A recruiter contacts strong matches." /><NextStep number="03" text="You meet the team and explore the work." /></ol>
              </div>
              <div className="flex gap-3 rounded-2xl border border-[#2378DA]/25 bg-[#2378DA]/10 p-5 text-sm leading-6 text-[#A9ABBE]"><IconShieldCheck className="h-6 w-6 shrink-0 text-[#55A6FF]" /><p>Your information is used only for recruitment and shared with the relevant hiring team.</p></div>
            </aside>
          </div>
        </div>
      </section>
      <Footersec />
    </main>
  );
}

function Field({ label, required, type = "text", value, onChange }: { label: string; required?: boolean; type?: string; value: string; onChange: (value: string) => void }) {
  return <label><span className="text-sm text-white/70">{label} {required && <span className="text-[#55A6FF]">*</span>}</span><input type={type} required={required} value={value} onChange={(event) => onChange(event.target.value)} className="mt-2 h-13 w-full rounded-xl border border-white/10 bg-[#111A2D] px-4 text-white outline-none transition placeholder:text-white/25 focus:border-[#2378DA]" /></label>;
}

function SelectField({ label, required, value, options, onChange }: { label: string; required?: boolean; value: string; options: string[]; onChange: (value: string) => void }) {
  return <label><span className="text-sm text-white/70">{label} {required && <span className="text-[#55A6FF]">*</span>}</span><select required={required} value={value} onChange={(event) => onChange(event.target.value)} className="mt-2 h-13 w-full rounded-xl border border-white/10 bg-[#111A2D] px-4 text-white outline-none transition focus:border-[#2378DA]"><option value="">Select an option</option>{options.map((option) => <option key={option}>{option}</option>)}</select></label>;
}

function ReviewRow({ label, value }: { label: string; value: string }) {
  return <div className="grid gap-1 py-4 sm:grid-cols-[150px_1fr]"><p className="text-sm text-white/35">{label}</p><p className="break-words text-sm text-white/80">{value}</p></div>;
}

function NextStep({ number, text }: { number: string; text: string }) {
  return <li className="flex gap-3"><span className="bold text-[#55A6FF]">{number}</span><span>{text}</span></li>;
}
