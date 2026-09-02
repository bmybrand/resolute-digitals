"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  FaCheck,
  FaCircleExclamation,
  FaClock,
  FaLock,
  FaShieldHalved,
} from "react-icons/fa6";
import {
  fetchSubscriptionCatalog,
  formatAccessUntil,
  formatPlanDuration,
  formatPlanPrice,
  normalizeMsisdn,
  startEwalletPayment,
  type EwalletPaymentResponse,
  type PaymentProvider,
  type SubscriptionPlan,
} from "@/lib/muslim-app-subscription";

function PaymentLogo({ provider }: { provider: PaymentProvider }) {
  if (provider === "easypaisa") {
    return (
      <span className="flex h-6 items-center gap-1.5" aria-label="Easypaisa">
        <Image
          src="/assets/payments/easypaisa-mark.png"
          alt=""
          width={20}
          height={20}
          className="h-5 w-5 shrink-0 object-contain"
          aria-hidden
          priority
        />
        <span className="text-sm font-semibold lowercase leading-none tracking-tight text-[#00A651]">
          easypaisa
        </span>
      </span>
    );
  }

  return (
    <span className="flex h-6 items-center">
      <Image
        src="/assets/payments/jazzcash-logo.svg"
        alt="JazzCash"
        width={100}
        height={28}
        className="h-6 w-auto object-contain"
        priority
      />
    </span>
  );
}

function PlanSkeleton() {
  return (
    <div className="grid gap-2 sm:grid-cols-2">
      {[0, 1].map((item) => (
        <div
          key={item}
          className="h-[72px] animate-pulse rounded-xl border border-[#E8E8E8] bg-[#F7F7F7]"
        />
      ))}
    </div>
  );
}

function getPaymentStatusTone(status: string) {
  const normalized = status.toLowerCase();

  if (normalized === "success") {
    return {
      container: "border-[#B7E4C7] bg-[#F1FBF4] text-[#1B5E20]",
      icon: FaCheck,
    };
  }

  if (normalized === "pending") {
    return {
      container: "border-[#F5D998] bg-[#FFF8E8] text-[#7A5A00]",
      icon: FaClock,
    };
  }

  if (normalized === "failed" || normalized.includes("reject")) {
    return {
      container: "border-[#F0C8A8] bg-[#FFF4EA] text-[#8A3B12]",
      icon: FaCircleExclamation,
    };
  }

  return {
    container: "border-[#F0C8A8] bg-[#FFF4EA] text-[#8A3B12]",
    icon: FaCircleExclamation,
  };
}

function selectionCardClass(selected: boolean) {
  return selected
    ? "border-[#1A1A1A] bg-[#F3F3F3] shadow-[0_0_0_1px_rgba(26,26,26,0.08)]"
    : "border-[#E6E6E6] bg-white hover:border-[#CFCFCF]";
}

export default function SubscriptionCheckout() {
  const [plans, setPlans] = useState<SubscriptionPlan[]>([]);
  const [selectedPlanId, setSelectedPlanId] = useState<string>("");
  const [paymentMethod, setPaymentMethod] = useState<PaymentProvider>("easypaisa");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [catalogError, setCatalogError] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [paymentResult, setPaymentResult] = useState<EwalletPaymentResponse | null>(null);
  const [isLoadingPlans, setIsLoadingPlans] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function loadPlans() {
      setIsLoadingPlans(true);
      setCatalogError(null);

      try {
        const catalog = await fetchSubscriptionCatalog();
        const activePlans = catalog.plans.filter((plan) => plan.is_active);

        if (cancelled) return;

        setPlans(activePlans);
        setSelectedPlanId((current) => current || activePlans[0]?.id || "");
      } catch (error) {
        if (!cancelled) {
          setCatalogError(
            error instanceof Error
              ? error.message
              : "Unable to load subscription plans.",
          );
        }
      } finally {
        if (!cancelled) {
          setIsLoadingPlans(false);
        }
      }
    }

    loadPlans();

    return () => {
      cancelled = true;
    };
  }, []);

  const selectedPlan = useMemo(
    () => plans.find((plan) => plan.id === selectedPlanId) ?? null,
    [plans, selectedPlanId],
  );

  const paymentProvider =
    paymentMethod === "easypaisa" ? "Easypaisa" : "JazzCash";

  const statusTone = paymentResult
    ? getPaymentStatusTone(paymentResult.payment_status)
    : null;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!selectedPlan) {
      setSubmitError("Please select a subscription plan.");
      return;
    }

    const msisdn = normalizeMsisdn(mobile);
    if (msisdn.length < 10) {
      setSubmitError("Enter a valid mobile number registered with your wallet.");
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);
    setPaymentResult(null);

    try {
      const result = await startEwalletPayment({
        email: email.trim(),
        payee_name: name.trim(),
        msisdn,
        plan_id: selectedPlan.id,
        provider: paymentMethod,
      });

      setPaymentResult(result);
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Unable to start the payment. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex h-full flex-col overflow-hidden bg-white text-[#141414]">
      <header className="shrink-0 border-b border-[#ECECEC] px-5 py-2.5 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <Link
            href="/"
            className="flex shrink-0 items-center transition hover:opacity-80"
            aria-label="Resolute Digitals home"
          >
            <Image
              src="/assets/resolute-logo-light-navbar.png"
              alt="Resolute Digitals"
              width={148}
              height={36}
              className="h-7 w-auto object-contain sm:h-8"
              priority
            />
          </Link>

          <Link
            href="/partners/muslim-app/"
            className="flex shrink-0 items-center gap-2 rounded-lg border border-[#E8E8E8] bg-[#FAFAFA] px-2.5 py-1.5 transition hover:border-[#D0D0D0]"
          >
            <div className="flex h-6 w-6 items-center justify-center overflow-hidden rounded-md bg-black p-0.5">
              <Image
                src="/assets/muslim-app-logo.png"
                alt=""
                width={24}
                height={24}
                className="h-full w-full object-contain"
                aria-hidden
              />
            </div>
            <span className="hidden text-xs text-[#555555] sm:inline">
              The Muslim App
            </span>
          </Link>
        </div>
      </header>

      <main className="mx-auto grid min-h-0 w-full max-w-6xl flex-1 lg:grid-cols-[0.9fr_1.1fr] lg:overflow-hidden">
        <section className="hidden min-h-0 flex-col overflow-y-auto border-b border-[#ECECEC] bg-[#F7F7F7] px-5 py-4 sm:px-8 lg:flex lg:border-b-0 lg:border-r lg:px-7 lg:py-5">
          <Link
            href="/partners/muslim-app/"
            className="inline-flex items-center gap-1.5 text-xs text-[#666666] transition hover:text-black"
          >
            <span aria-hidden="true">←</span>
            Back to Muslim App
          </Link>

          <div className="mt-3">
            <p className="text-xs text-[#555555]">Subscribe to Muslim App Pro</p>
            {selectedPlan ? (
              <div className="mt-1 flex flex-wrap items-end gap-x-2 gap-y-0.5">
                <h1 className="bold text-[30px] leading-none tracking-[-0.03em]">
                  {formatPlanPrice(selectedPlan)}
                </h1>
                <p className="pb-0.5 text-xs text-[#666666]">
                  {formatPlanDuration(selectedPlan)}
                </p>
              </div>
            ) : (
              <div className="mt-1 h-8 w-32 animate-pulse rounded-lg bg-black/[0.06]" />
            )}
          </div>

          {selectedPlan && (
            <div className="mt-3 rounded-xl border border-[#E4E4E4] bg-white p-3">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="bold text-xs">{selectedPlan.label}</p>
                  <p className="mt-0.5 text-[11px] text-[#666666]">
                    Muslim App Pro access
                  </p>
                </div>
                <p className="bold text-xs">{formatPlanPrice(selectedPlan)}</p>
              </div>

              <div className="my-2 h-px bg-[#ECECEC]" />

              <div className="space-y-1.5 text-xs">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[#666666]">Access until</span>
                  <span className="font-medium text-[#222222]">
                    {formatAccessUntil(selectedPlan)}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span className="bold text-[#222222]">Total due today</span>
                  <span className="bold text-[#222222]">
                    {formatPlanPrice(selectedPlan)}
                  </span>
                </div>
              </div>
            </div>
          )}

          <ul className="mt-3 space-y-1.5 text-xs text-[#555555]">
            <li className="flex items-start gap-2">
              <FaCheck className="mt-0.5 shrink-0 text-[10px] text-[#777777]" />
              <span>Pro activates as soon as your payment is confirmed.</span>
            </li>
            <li className="flex items-start gap-2">
              <FaShieldHalved className="mt-0.5 shrink-0 text-[10px] text-[#777777]" />
              <span>Your existing paid time is always preserved.</span>
            </li>
          </ul>

          <p className="mt-3 flex items-center gap-1.5 text-[10px] text-[#888888] lg:mt-auto">
            <FaLock className="text-[9px]" />
            Resolute Digitals · Secure checkout powered by Swich
          </p>
        </section>

        <section className="flex min-h-0 flex-col overflow-hidden px-5 py-4 sm:px-8 lg:px-7 lg:py-5">
          <div className="shrink-0">
            <h2 className="bold text-2xl leading-tight tracking-[-0.03em]">
              Complete your subscription
            </h2>
            <p className="mt-1 max-w-xl text-xs leading-5 text-[#666666]">
              Choose your wallet and approve the payment request from your phone.
            </p>

            <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-[#E8E8E8] bg-[#F8F8F8] px-2.5 py-1">
              <div className="flex h-5 w-5 items-center justify-center overflow-hidden rounded bg-black p-0.5">
                <Image
                  src="/assets/muslim-app-logo.png"
                  alt=""
                  width={20}
                  height={20}
                  className="h-full w-full object-contain"
                  aria-hidden
                />
              </div>
              <span className="text-[11px] text-[#666666]">
                <span className="text-[#999999]">Product</span>
                <span aria-hidden="true" className="mx-1">
                  ·
                </span>
                The Muslim App Pro
              </span>
            </div>

            {catalogError && (
              <div className="mt-3 rounded-xl border border-[#F0B4B4] bg-[#FFF3F3] px-3 py-2 text-xs text-[#9B1C1C]">
                {catalogError}
              </div>
            )}

            {paymentResult && statusTone && (
              <div
                className={`mt-3 rounded-xl border px-3 py-2.5 text-xs ${statusTone.container}`}
              >
                <div className="flex items-start gap-2">
                  <statusTone.icon className="mt-0.5 shrink-0 text-sm" />
                  <div className="min-w-0 flex-1">
                    <p className="bold text-xs">{paymentResult.message}</p>
                    <p className="mt-1">
                      Status:{" "}
                      <span className="font-medium capitalize">
                        {paymentResult.payment_status}
                      </span>
                    </p>
                    {paymentResult.transaction_id && (
                      <p className="mt-0.5 break-all text-[10px] opacity-90">
                        Transaction ID: {paymentResult.transaction_id}
                      </p>
                    )}
                    {paymentResult.order_id && (
                      <p className="mt-0.5 break-all text-[10px] opacity-90">
                        Order ID: {paymentResult.order_id}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          <form
            className="mt-4 flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto overscroll-contain pr-0.5"
            onSubmit={handleSubmit}
          >
            <div>
              <h3 className="bold text-xs text-[#222222]">Choose your plan</h3>
              <div className="mt-2">
                {isLoadingPlans ? (
                  <PlanSkeleton />
                ) : (
                  <div className="grid gap-2 sm:grid-cols-2">
                    {plans.map((plan) => {
                      const selected = selectedPlanId === plan.id;
                      return (
                        <button
                          key={plan.id}
                          type="button"
                          onClick={() => setSelectedPlanId(plan.id)}
                          className={`rounded-xl border px-3 py-2.5 text-left transition ${selectionCardClass(selected)}`}
                        >
                          <p className="text-[11px] text-[#666666]">{plan.label}</p>
                          <p className="bold mt-0.5 text-base leading-none tracking-[-0.02em]">
                            {formatPlanPrice(plan)}
                          </p>
                          <p className="mt-1 text-[11px] text-[#666666]">
                            {formatPlanDuration(plan)}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
              <p className="mt-1.5 text-[11px] leading-4 text-[#666666]">
                If you already subscribe, this time is added to your current
                expiry date.
              </p>
            </div>

            <div>
              <h3 className="bold text-xs text-[#222222]">Pay with</h3>
              <div className="mt-2 grid gap-2 sm:grid-cols-2">
                {(["easypaisa", "jazzcash"] as PaymentProvider[]).map((provider) => {
                  const selected = paymentMethod === provider;
                  return (
                    <button
                      key={provider}
                      type="button"
                      onClick={() => setPaymentMethod(provider)}
                      aria-pressed={selected}
                      className={`flex min-h-[48px] items-center justify-center rounded-xl border px-3 py-2 transition ${selectionCardClass(selected)}`}
                    >
                      <PaymentLogo provider={provider} />
                    </button>
                  );
                })}
              </div>
              <p className="mt-1.5 text-[11px] leading-4 text-[#666666]">
                Use its registered mobile number and keep your phone nearby to
                approve the payment.
              </p>
            </div>

            <div>
              <h3 className="bold text-xs text-[#222222]">Contact information</h3>
              <div className="mt-2 grid gap-2 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1 block text-[11px] text-[#555555]">Name</span>
                  <input
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="As it appears on your account"
                    className="w-full rounded-lg border border-[#E4E4E4] bg-white px-3 py-2 text-sm outline-none transition placeholder:text-[#A8A8A8] focus:border-[#999999]"
                    autoComplete="name"
                    required
                    disabled={isSubmitting}
                  />
                </label>
                <label className="block">
                  <span className="mb-1 block text-[11px] text-[#555555]">Email</span>
                  <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-[#E4E4E4] bg-white px-3 py-2 text-sm outline-none transition placeholder:text-[#A8A8A8] focus:border-[#999999]"
                    autoComplete="email"
                    required
                    disabled={isSubmitting}
                  />
                </label>
              </div>
              <label className="mt-2 block">
                <span className="mb-1 block text-[11px] text-[#555555]">
                  Mobile number
                </span>
                <input
                  type="tel"
                  value={mobile}
                  onChange={(event) => setMobile(event.target.value)}
                  placeholder="03001234567"
                  className="w-full rounded-lg border border-[#E4E4E4] bg-white px-3 py-2 text-sm outline-none transition placeholder:text-[#A8A8A8] focus:border-[#999999]"
                  autoComplete="tel"
                  inputMode="tel"
                  required
                  disabled={isSubmitting}
                />
              </label>
            </div>

            <div className="shrink-0 pb-1">
              {submitError && (
                <div className="mb-2 rounded-xl border border-[#F0B4B4] bg-[#FFF3F3] px-3 py-2 text-xs text-[#9B1C1C]">
                  {submitError}
                </div>
              )}

              <button
                type="submit"
                disabled={
                  isSubmitting || isLoadingPlans || !selectedPlan || !!catalogError
                }
                className="bold w-full rounded-lg bg-[#333333] px-4 py-2.5 text-sm text-white transition hover:bg-black disabled:cursor-not-allowed disabled:bg-[#333333]/55"
              >
                {isSubmitting
                  ? "Processing payment..."
                  : selectedPlan
                    ? `Pay ${formatPlanPrice(selectedPlan)}`
                    : "Pay"}
              </button>
              <p className="mt-2 flex flex-wrap items-center gap-x-1 gap-y-0.5 text-[10px] leading-4 text-[#888888]">
                <FaLock className="mr-0.5 text-[9px]" />
                Your PIN or MPIN stays with {paymentProvider}; we never receive
                it. Prefer another way?
                <a
                  href="https://ourmuslimapp.com/support"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 transition hover:text-black"
                >
                  Pay manually.
                </a>
              </p>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}
