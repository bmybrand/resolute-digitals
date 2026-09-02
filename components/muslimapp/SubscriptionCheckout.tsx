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
    <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
      {[0, 1].map((item) => (
        <div
          key={item}
          className="h-16 animate-pulse rounded-xl border border-[#E8E8E8] bg-[#F7F7F7] sm:h-[72px] lg:h-16 xl:h-[72px]"
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
    <div className="flex min-h-dvh flex-col bg-white text-[#141414] lg:h-full lg:min-h-0 lg:overflow-hidden">
      <header className="shrink-0 border-b border-[#ECECEC] px-4 py-2 sm:px-6 sm:py-2.5 lg:px-8 xl:px-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 sm:gap-4">
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
              className="h-6 w-auto object-contain sm:h-7 md:h-8"
              priority
            />
          </Link>

          <Link
            href="/partners/muslim-app/"
            className="flex shrink-0 items-center gap-1.5 rounded-lg border border-[#E8E8E8] bg-[#FAFAFA] px-2 py-1 transition hover:border-[#D0D0D0] sm:gap-2 sm:px-2.5 sm:py-1.5"
          >
            <div className="flex h-5 w-5 items-center justify-center overflow-hidden rounded-md bg-black p-0.5 sm:h-6 sm:w-6">
              <Image
                src="/assets/muslim-app-logo.png"
                alt=""
                width={24}
                height={24}
                className="h-full w-full object-contain"
                aria-hidden
              />
            </div>
            <span className="text-[11px] text-[#555555] sm:text-xs">
              The Muslim App
            </span>
          </Link>
        </div>
      </header>

      {selectedPlan && (
        <div className="shrink-0 border-b border-[#ECECEC] bg-[#F7F7F7] px-4 py-3 sm:px-6 lg:hidden">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-3">
            <div className="min-w-0">
              <p className="truncate text-[11px] text-[#666666] sm:text-xs">
                {selectedPlan.label} · Muslim App Pro
              </p>
              <p className="bold mt-0.5 text-xl leading-none tracking-[-0.03em] sm:text-2xl">
                {formatPlanPrice(selectedPlan)}
              </p>
            </div>
            <p className="shrink-0 text-right text-[11px] text-[#666666] sm:text-xs">
              Due today
              <span className="bold mt-0.5 block text-sm text-[#222222] sm:text-base">
                {formatPlanPrice(selectedPlan)}
              </span>
            </p>
          </div>
        </div>
      )}

      <main className="mx-auto grid min-h-0 w-full max-w-6xl flex-1 lg:grid-cols-[minmax(260px,0.88fr)_minmax(0,1.12fr)] lg:overflow-hidden">
        <section className="hidden min-h-0 flex-col overflow-y-auto border-b border-[#ECECEC] bg-[#F7F7F7] px-5 py-4 sm:px-6 lg:flex lg:border-b-0 lg:border-r lg:px-6 lg:py-4 xl:px-7 xl:py-5">
          <Link
            href="/partners/muslim-app/"
            className="inline-flex items-center gap-1.5 text-xs text-[#666666] transition hover:text-black"
          >
            <span aria-hidden="true">←</span>
            Back to Muslim App
          </Link>

          <div className="mt-2 xl:mt-3">
            <p className="text-xs text-[#555555]">Subscribe to Muslim App Pro</p>
            {selectedPlan ? (
              <div className="mt-1 flex flex-wrap items-end gap-x-2 gap-y-0.5">
                <h1 className="bold text-[26px] leading-none tracking-[-0.03em] xl:text-[30px]">
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
            <div className="mt-2 rounded-xl border border-[#E4E4E4] bg-white p-2.5 xl:mt-3 xl:p-3">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="bold truncate text-xs">{selectedPlan.label}</p>
                  <p className="mt-0.5 text-[11px] text-[#666666]">
                    Muslim App Pro access
                  </p>
                </div>
                <p className="bold shrink-0 text-xs">
                  {formatPlanPrice(selectedPlan)}
                </p>
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

          <ul className="mt-2 space-y-1.5 text-xs text-[#555555] xl:mt-3">
            <li className="flex items-start gap-2">
              <FaCheck className="mt-0.5 shrink-0 text-[10px] text-[#777777]" />
              <span>Pro activates as soon as your payment is confirmed.</span>
            </li>
            <li className="flex items-start gap-2">
              <FaShieldHalved className="mt-0.5 shrink-0 text-[10px] text-[#777777]" />
              <span>Your existing paid time is always preserved.</span>
            </li>
          </ul>

          <p className="mt-2 flex items-center gap-1.5 text-[10px] text-[#888888] lg:mt-auto xl:mt-3">
            <FaLock className="text-[9px]" />
            Resolute Digitals · Secure checkout powered by Swich
          </p>
        </section>

        <section className="flex min-h-0 flex-col overflow-hidden px-4 py-3 sm:px-6 sm:py-4 lg:px-6 lg:py-4 xl:px-7 xl:py-5">
          <div className="shrink-0">
            <h2 className="bold text-xl leading-tight tracking-[-0.03em] sm:text-2xl">
              Complete your subscription
            </h2>
            <p className="mt-1 max-w-xl text-[11px] leading-5 text-[#666666] sm:text-xs">
              Choose your wallet and approve the payment request from your phone.
            </p>

            <div className="mt-2 inline-flex max-w-full items-center gap-2 rounded-full border border-[#E8E8E8] bg-[#F8F8F8] px-2.5 py-1">
              <div className="flex h-5 w-5 shrink-0 items-center justify-center overflow-hidden rounded bg-black p-0.5">
                <Image
                  src="/assets/muslim-app-logo.png"
                  alt=""
                  width={20}
                  height={20}
                  className="h-full w-full object-contain"
                  aria-hidden
                />
              </div>
              <span className="truncate text-[11px] text-[#666666]">
                <span className="text-[#999999]">Product</span>
                <span aria-hidden="true" className="mx-1">
                  ·
                </span>
                The Muslim App Pro
              </span>
            </div>

            {catalogError && (
              <div className="mt-2 rounded-xl border border-[#F0B4B4] bg-[#FFF3F3] px-3 py-2 text-xs text-[#9B1C1C] sm:mt-3">
                {catalogError}
              </div>
            )}

            {paymentResult && statusTone && (
              <div
                className={`mt-2 rounded-xl border px-3 py-2.5 text-xs sm:mt-3 ${statusTone.container}`}
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
            className="mt-3 flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto overscroll-contain sm:mt-4 sm:gap-4 lg:mt-3 lg:gap-3 xl:mt-4 xl:gap-4 [@media(max-height:820px)]:gap-2.5"
            onSubmit={handleSubmit}
          >
            <div>
              <h3 className="bold text-xs text-[#222222]">Choose your plan</h3>
              <div className="mt-1.5 sm:mt-2">
                {isLoadingPlans ? (
                  <PlanSkeleton />
                ) : (
                  <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
                    {plans.map((plan) => {
                      const selected = selectedPlanId === plan.id;
                      return (
                        <button
                          key={plan.id}
                          type="button"
                          onClick={() => setSelectedPlanId(plan.id)}
                          className={`rounded-xl border px-2.5 py-2 text-left transition sm:px-3 sm:py-2.5 lg:px-2.5 lg:py-2 xl:px-3 xl:py-2.5 ${selectionCardClass(selected)}`}
                        >
                          <p className="truncate text-[10px] text-[#666666] sm:text-[11px]">
                            {plan.label}
                          </p>
                          <p className="bold mt-0.5 text-sm leading-none tracking-[-0.02em] sm:text-base">
                            {formatPlanPrice(plan)}
                          </p>
                          <p className="mt-0.5 truncate text-[10px] text-[#666666] sm:mt-1 sm:text-[11px]">
                            {formatPlanDuration(plan)}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
              <p className="mt-1 hidden text-[11px] leading-4 text-[#666666] sm:block lg:[@media(max-height:780px)]:hidden">
                If you already subscribe, this time is added to your current
                expiry date.
              </p>
            </div>

            <div>
              <h3 className="bold text-xs text-[#222222]">Pay with</h3>
              <div className="mt-1.5 grid grid-cols-2 gap-2 sm:mt-2 sm:gap-2.5">
                {(["easypaisa", "jazzcash"] as PaymentProvider[]).map((provider) => {
                  const selected = paymentMethod === provider;
                  return (
                    <button
                      key={provider}
                      type="button"
                      onClick={() => setPaymentMethod(provider)}
                      aria-pressed={selected}
                      className={`flex min-h-[44px] items-center justify-center rounded-xl border px-2 py-1.5 transition sm:min-h-[48px] sm:px-3 sm:py-2 lg:min-h-[44px] xl:min-h-[48px] ${selectionCardClass(selected)}`}
                    >
                      <PaymentLogo provider={provider} />
                    </button>
                  );
                })}
              </div>
              <p className="mt-1 hidden text-[11px] leading-4 text-[#666666] sm:block lg:[@media(max-height:780px)]:hidden">
                Use its registered mobile number and keep your phone nearby to
                approve the payment.
              </p>
            </div>

            <div>
              <h3 className="bold text-xs text-[#222222]">Contact information</h3>
              <div className="mt-1.5 grid grid-cols-1 gap-2 min-[480px]:grid-cols-2 sm:mt-2">
                <label className="block">
                  <span className="mb-1 block text-[11px] text-[#555555]">Name</span>
                  <input
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="As it appears on your account"
                    className="w-full rounded-lg border border-[#E4E4E4] bg-white px-3 py-2 text-sm outline-none transition placeholder:text-[#A8A8A8] focus:border-[#999999] lg:py-1.5 xl:py-2"
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
                    className="w-full rounded-lg border border-[#E4E4E4] bg-white px-3 py-2 text-sm outline-none transition placeholder:text-[#A8A8A8] focus:border-[#999999] lg:py-1.5 xl:py-2"
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
                  className="w-full rounded-lg border border-[#E4E4E4] bg-white px-3 py-2 text-sm outline-none transition placeholder:text-[#A8A8A8] focus:border-[#999999] lg:py-1.5 xl:py-2"
                  autoComplete="tel"
                  inputMode="tel"
                  required
                  disabled={isSubmitting}
                />
              </label>
            </div>

            <div className="sticky bottom-0 shrink-0 bg-white pb-1 pt-1 sm:static sm:bg-transparent sm:pb-1 sm:pt-0">
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
                className="bold w-full rounded-lg bg-[#333333] px-4 py-2.5 text-sm text-white transition hover:bg-black disabled:cursor-not-allowed disabled:bg-[#333333]/55 lg:py-2 xl:py-2.5"
              >
                {isSubmitting
                  ? "Processing payment..."
                  : selectedPlan
                    ? `Pay ${formatPlanPrice(selectedPlan)}`
                    : "Pay"}
              </button>
              <p className="mt-1.5 flex flex-wrap items-center gap-x-1 gap-y-0.5 text-[10px] leading-4 text-[#888888] sm:mt-2">
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
