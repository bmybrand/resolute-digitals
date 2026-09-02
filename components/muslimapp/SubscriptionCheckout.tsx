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
      <span className="flex h-7 items-center gap-2" aria-label="Easypaisa">
        <Image
          src="/assets/payments/easypaisa-mark.png"
          alt=""
          width={24}
          height={24}
          className="h-6 w-6 shrink-0 object-contain"
          aria-hidden
          priority
        />
        <span className="text-[15px] font-semibold lowercase leading-none tracking-tight text-[#00A651]">
          easypaisa
        </span>
      </span>
    );
  }

  return (
    <span className="flex h-7 items-center">
      <Image
        src="/assets/payments/jazzcash-logo.svg"
        alt="JazzCash"
        width={118}
        height={32}
        className="h-7 w-auto object-contain"
        priority
      />
    </span>
  );
}

function PlanSkeleton() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {[0, 1].map((item) => (
        <div
          key={item}
          className="h-[112px] animate-pulse rounded-2xl border border-[#E8E8E8] bg-[#F7F7F7]"
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
    <div className="min-h-screen bg-white text-[#141414]">
      <header className="border-b border-[#ECECEC] px-5 py-5 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-6xl items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-black p-1.5">
            <Image
              src="/assets/muslim-app-logo.png"
              alt="The Muslim App"
              width={40}
              height={40}
              className="h-full w-full object-contain"
            />
          </div>
          <span className="bold text-[17px] tracking-tight">The Muslim App</span>
        </div>
      </header>

      <main className="mx-auto grid max-w-6xl lg:min-h-[calc(100vh-81px)] lg:grid-cols-[0.95fr_1.05fr]">
        <section className="flex flex-col border-b border-[#ECECEC] bg-[#F7F7F7] px-5 py-10 sm:px-8 lg:border-b-0 lg:border-r lg:px-10 lg:py-12">
          <Link
            href="/partners/muslim-app/"
            className="inline-flex items-center gap-2 text-sm text-[#666666] transition hover:text-black"
          >
            <span aria-hidden="true">←</span>
            Back to Muslim App
          </Link>

          <div className="mt-10">
            <p className="text-[15px] text-[#555555]">
              Subscribe to Muslim App Pro
            </p>
            {selectedPlan ? (
              <div className="mt-3 flex flex-wrap items-end gap-x-3 gap-y-1">
                <h1 className="bold text-[44px] leading-none tracking-[-0.03em] sm:text-[50px]">
                  {formatPlanPrice(selectedPlan)}
                </h1>
                <p className="pb-1.5 text-sm text-[#666666]">
                  {formatPlanDuration(selectedPlan)}
                </p>
              </div>
            ) : (
              <div className="mt-3 h-12 w-48 animate-pulse rounded-xl bg-black/[0.06]" />
            )}
          </div>

          {selectedPlan && (
            <div className="mt-8 rounded-[18px] border border-[#E4E4E4] bg-white p-5 sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="bold text-[15px]">{selectedPlan.label}</p>
                  <p className="mt-1 text-sm text-[#666666]">
                    Muslim App Pro access
                  </p>
                </div>
                <p className="bold text-[15px]">
                  {formatPlanPrice(selectedPlan)}
                </p>
              </div>

              <div className="my-5 h-px bg-[#ECECEC]" />

              <div className="space-y-4 text-sm">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[#666666]">Access until</span>
                  <span className="font-medium text-[#222222]">
                    {formatAccessUntil(selectedPlan)}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="bold text-[#222222]">Total due today</span>
                  <span className="bold text-[#222222]">
                    {formatPlanPrice(selectedPlan)}
                  </span>
                </div>
              </div>
            </div>
          )}

          <ul className="mt-8 space-y-4 text-sm text-[#555555]">
            <li className="flex items-start gap-3">
              <FaCheck className="mt-0.5 shrink-0 text-[#777777]" />
              <span>
                Pro activates as soon as your payment is confirmed.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FaShieldHalved className="mt-0.5 shrink-0 text-[#777777]" />
              <span>Your existing paid time is always preserved.</span>
            </li>
          </ul>

          <p className="mt-10 flex items-center gap-2 text-xs text-[#888888] lg:mt-auto lg:pt-16">
            <FaLock className="text-[11px]" />
            Secure checkout powered by Swich
          </p>
        </section>

        <section className="px-5 py-10 sm:px-8 lg:px-10 lg:py-12">
          <h2 className="bold text-[34px] leading-tight tracking-[-0.03em] sm:text-[38px]">
            Complete your subscription
          </h2>
          <p className="mt-3 max-w-xl text-[15px] leading-7 text-[#666666]">
            Choose your wallet and approve the payment request from your phone.
          </p>

          {catalogError && (
            <div className="mt-6 rounded-[16px] border border-[#F0B4B4] bg-[#FFF3F3] px-4 py-3 text-sm text-[#9B1C1C]">
              {catalogError}
            </div>
          )}

          {paymentResult && statusTone && (
            <div
              className={`mt-6 rounded-[16px] border px-4 py-4 text-sm ${statusTone.container}`}
            >
              <div className="flex items-start gap-3">
                <statusTone.icon className="mt-0.5 shrink-0 text-base" />
                <div className="min-w-0 flex-1">
                  <p className="bold text-[15px]">{paymentResult.message}</p>
                  <p className="mt-2">
                    Status:{" "}
                    <span className="font-medium capitalize">
                      {paymentResult.payment_status}
                    </span>
                  </p>
                  {paymentResult.transaction_id && (
                    <p className="mt-1 break-all text-[13px] opacity-90">
                      Transaction ID: {paymentResult.transaction_id}
                    </p>
                  )}
                  {paymentResult.order_id && (
                    <p className="mt-1 break-all text-[13px] opacity-90">
                      Order ID: {paymentResult.order_id}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          <form className="mt-10 space-y-9" onSubmit={handleSubmit}>
            <div>
              <h3 className="bold text-[15px] text-[#222222]">Choose your plan</h3>
              <div className="mt-4">
                {isLoadingPlans ? (
                  <PlanSkeleton />
                ) : (
                  <div className="grid gap-3 sm:grid-cols-2">
                    {plans.map((plan) => {
                      const selected = selectedPlanId === plan.id;
                      return (
                        <button
                          key={plan.id}
                          type="button"
                          onClick={() => setSelectedPlanId(plan.id)}
                          className={`rounded-[18px] border px-4 py-4 text-left transition ${selectionCardClass(selected)}`}
                        >
                          <p className="text-sm text-[#666666]">{plan.label}</p>
                          <p className="bold mt-1 text-[22px] leading-none tracking-[-0.02em]">
                            {formatPlanPrice(plan)}
                          </p>
                          <p className="mt-2 text-sm text-[#666666]">
                            {formatPlanDuration(plan)}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
              <p className="mt-4 text-sm leading-6 text-[#666666]">
                If you already subscribe, this time is added to your current
                expiry date.
              </p>
            </div>

            <div>
              <h3 className="bold text-[15px] text-[#222222]">Pay with</h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {(["easypaisa", "jazzcash"] as PaymentProvider[]).map((provider) => {
                  const selected = paymentMethod === provider;
                  return (
                    <button
                      key={provider}
                      type="button"
                      onClick={() => setPaymentMethod(provider)}
                      aria-pressed={selected}
                      className={`flex min-h-[76px] items-center justify-center rounded-[18px] border px-5 py-4 transition ${selectionCardClass(selected)}`}
                    >
                      <PaymentLogo provider={provider} />
                    </button>
                  );
                })}
              </div>
              <p className="mt-4 text-sm leading-6 text-[#666666]">
                Use its registered mobile number and keep your phone nearby to
                approve the payment.
              </p>
            </div>

            <div>
              <h3 className="bold text-[15px] text-[#222222]">
                Contact information
              </h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm text-[#555555]">Name</span>
                  <input
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="As it appears on your account"
                    className="w-full rounded-[14px] border border-[#E4E4E4] bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-[#A8A8A8] focus:border-[#999999]"
                    autoComplete="name"
                    required
                    disabled={isSubmitting}
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm text-[#555555]">Email</span>
                  <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="you@example.com"
                    className="w-full rounded-[14px] border border-[#E4E4E4] bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-[#A8A8A8] focus:border-[#999999]"
                    autoComplete="email"
                    required
                    disabled={isSubmitting}
                  />
                </label>
              </div>
              <label className="mt-4 block">
                <span className="mb-2 block text-sm text-[#555555]">
                  Mobile number
                </span>
                <input
                  type="tel"
                  value={mobile}
                  onChange={(event) => setMobile(event.target.value)}
                  placeholder="03001234567"
                  className="w-full rounded-[14px] border border-[#E4E4E4] bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-[#A8A8A8] focus:border-[#999999]"
                  autoComplete="tel"
                  inputMode="tel"
                  required
                  disabled={isSubmitting}
                />
              </label>
            </div>

            <div>
              {submitError && (
                <div className="mb-4 rounded-[16px] border border-[#F0B4B4] bg-[#FFF3F3] px-4 py-3 text-sm text-[#9B1C1C]">
                  {submitError}
                </div>
              )}

              <button
                type="submit"
                disabled={
                  isSubmitting || isLoadingPlans || !selectedPlan || !!catalogError
                }
                className="bold w-full rounded-[14px] bg-[#333333] px-6 py-4 text-[15px] text-white transition hover:bg-black disabled:cursor-not-allowed disabled:bg-[#333333]/55"
              >
                {isSubmitting
                  ? "Processing payment..."
                  : selectedPlan
                    ? `Pay ${formatPlanPrice(selectedPlan)}`
                    : "Pay"}
              </button>
              <p className="mt-4 flex flex-wrap items-center gap-x-1 gap-y-1 text-xs leading-6 text-[#888888]">
                <FaLock className="mr-1 text-[10px]" />
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
