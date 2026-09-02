export type SubscriptionPlan = {
  id: string;
  label: string;
  duration_value: number;
  duration_unit: "month" | "year";
  price: number;
  currency: string;
  is_active: boolean;
};

export type SubscriptionCatalog = {
  plans: SubscriptionPlan[];
};

export type PaymentProvider = "easypaisa" | "jazzcash";

export type EwalletPaymentRequest = {
  email: string;
  payee_name: string;
  msisdn: string;
  plan_id: string;
  provider: PaymentProvider;
};

export type EwalletPaymentResponse = {
  transaction_id: string;
  payment_status: string;
  order_id: string | null;
  message: string;
};

export const muslimAppApiUrl =
  process.env.NEXT_PUBLIC_MUSLIM_APP_API_URL?.trim() ||
  "https://muslim-app-backend-dev--muslimapp-prod.us-east4.hosted.app";

const subscriptionProxyBase = "/api/muslim-app-subscription.php";

async function parseJsonResponse<T>(response: Response): Promise<T> {
  const data = await response.json().catch(() => null);

  if (!response.ok) {
    const message =
      (data && typeof data === "object" && "message" in data && typeof data.message === "string"
        ? data.message
        : null) ||
      (data && typeof data === "object" && "detail" in data && typeof data.detail === "string"
        ? data.detail
        : null) ||
      (data && typeof data === "object" && "error" in data && typeof data.error === "string"
        ? data.error
        : null) ||
      `Request failed (${response.status})`;
    throw new Error(message);
  }

  return data as T;
}

export async function fetchSubscriptionCatalog(): Promise<SubscriptionCatalog> {
  const response = await fetch(`${subscriptionProxyBase}?action=catalog`, {
    method: "GET",
    headers: { Accept: "application/json" },
  });

  return parseJsonResponse<SubscriptionCatalog>(response);
}

export async function startEwalletPayment(
  payload: EwalletPaymentRequest,
): Promise<EwalletPaymentResponse> {
  const response = await fetch(`${subscriptionProxyBase}?action=ewallet`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  return parseJsonResponse<EwalletPaymentResponse>(response);
}

export function formatPlanPrice(plan: SubscriptionPlan) {
  return `${plan.currency} ${plan.price.toLocaleString("en-PK")}`;
}

export function formatPlanDuration(plan: SubscriptionPlan) {
  const unit =
    plan.duration_value === 1
      ? plan.duration_unit
      : `${plan.duration_unit}s`;
  return `${plan.duration_value} ${unit} of Pro access`;
}

export function formatAccessUntil(plan: SubscriptionPlan) {
  const date = new Date();

  if (plan.duration_unit === "month") {
    date.setMonth(date.getMonth() + plan.duration_value);
  } else {
    date.setFullYear(date.getFullYear() + plan.duration_value);
  }

  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function normalizeMsisdn(value: string) {
  return value.replace(/\D/g, "");
}
