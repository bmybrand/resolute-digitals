"use client";

import React from "react";
import {
  FaArrowRight,
  FaBuilding,
  FaChevronRight,
  FaGlobe,
  FaHandshake,
} from "react-icons/fa6";

export default function BusinessAffiliation() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* HERO */}
      <section className="px-4 pt-5 sm:px-6 lg:px-9">
        <div className="relative flex min-h-[360px] items-center justify-center overflow-hidden rounded-[28px] bg-black px-6 text-white sm:min-h-[420px]">
          <div className="absolute -left-[220px] -top-[300px] h-[600px] w-[600px] rounded-full border border-white/10" />
          <div className="absolute -bottom-[360px] -right-[280px] h-[700px] w-[700px] rounded-full border border-white/10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,.08),transparent_35%)]" />

          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em]">
              <FaHandshake />
              Muslim App Partnership
            </div>

            <h1 className="text-4xl font-bold tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-7xl">
              Business
              <br />
              Affiliation
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
              Information regarding the relationship between ReComune, Inc.,
              Muslim App, and Resolute Digitals.
            </p>

            <div className="mt-8 flex items-center justify-center gap-2 text-xs text-white/45 sm:text-sm">
              <span>Muslim App</span>
              <FaChevronRight className="text-[9px]" />
              <span className="text-white">Business Affiliation</span>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-5 pb-12 pt-20 sm:px-8 lg:px-12 xl:px-16">
        <div className="mx-auto max-w-[1200px]">
          <div className="max-w-4xl">
            <span className="inline-block rounded-full border border-black/15 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-black/55">
              Partnership Disclosure
            </span>

            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-4xl lg:text-5xl">
              Clear ownership.
              <br />
              <span className="text-black/35">
                Clear payment responsibilities.
              </span>
            </h2>

            <p className="mt-6 max-w-3xl text-[15px] leading-8 text-black/55 sm:text-base">
              This page explains the limited payment-related affiliation
              between Muslim App, ReComune, Inc., and Resolute Digitals.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="px-5 pb-24 sm:px-8 lg:px-12 xl:px-16">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
            {/* MAIN */}
            <div className="rounded-[28px] border border-black/10 bg-white p-7 sm:p-10 lg:p-12">
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-xl text-white">
                <FaHandshake />
              </div>

              <h2 className="text-3xl font-semibold tracking-[-0.03em]">
                Business Affiliation
              </h2>

              <div className="mt-7 space-y-6 text-[15px] leading-8 text-black/60 sm:text-base">
                <p>
                  Muslim App is owned and provided by ReComune, Inc.
                </p>

                <p>
                  Resolute Digitals is an Authorized Payment Partner of the
                  Muslim App and is authorized to collect and process
                  subscription payments on behalf of ReComune, Inc., including
                  payments in Pakistan through supported payment channels such
                  as SWICH.
                </p>

                <p>
                  Resolute Digitals may assist with payment collection,
                  transaction verification, billing inquiries, and applicable
                  refunds.
                </p>

                <p>
                  This affiliation is limited to payment-related services.
                  Muslim App subscriptions, user accounts, app services, and
                  ownership remain with ReComune, Inc.
                </p>
              </div>
            </div>

            {/* SUMMARY CARD */}
            <aside className="rounded-[28px] bg-black p-7 text-white sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-black">
                <FaBuilding />
              </div>

              <h3 className="mt-8 text-2xl font-semibold">
                Partnership Details
              </h3>

              <div className="mt-8 space-y-7">
                <DetailItem
                  label="Service Provider"
                  value="ReComune, Inc. — Muslim App"
                />

                <DetailItem
                  label="Authorized Payment Partner"
                  value="Resolute Digitals"
                />

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/35">
                    Website
                  </p>

                  <a
                    href="https://resolutedigitals.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-2 flex items-center gap-2 text-base font-medium text-white transition hover:text-white/70"
                  >
                    resolutedigitals.com
                    <FaArrowRight className="-rotate-45 text-xs transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>
                </div>
              </div>
            </aside>
          </div>

          {/* RESPONSIBILITY SPLIT */}
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <div className="rounded-[24px] border border-black/10 p-7 sm:p-8">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-white">
                01
              </span>

              <h3 className="mt-6 text-2xl font-semibold">
                ReComune, Inc.
              </h3>

              <p className="mt-4 leading-7 text-black/55">
                Owns and provides the Muslim App, including app services,
                subscriptions, user accounts, and overall product operation.
              </p>
            </div>

            <div className="rounded-[24px] border border-black/10 p-7 sm:p-8">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-white">
                02
              </span>

              <h3 className="mt-6 text-2xl font-semibold">
                Resolute Digitals
              </h3>

              <p className="mt-4 leading-7 text-black/55">
                Acts as an Authorized Payment Partner for payment collection,
                transaction verification, billing support, and applicable
                refunds.
              </p>
            </div>
          </div>

          {/* BOTTOM CTA */}
          <div className="mt-10 overflow-hidden rounded-[26px] bg-black p-8 text-white sm:p-10">
            <div className="flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/40">
                  More Information
                </p>

                <h3 className="mt-2 text-2xl font-semibold sm:text-3xl">
                  Visit Resolute Digitals
                </h3>
              </div>

              <a
                href="https://resolutedigitals.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-fit items-center gap-3 rounded-full bg-white px-6 py-3.5 font-semibold text-black transition hover:bg-white/85"
              >
                <FaGlobe />
                Visit Website
                <FaArrowRight className="-rotate-45 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function DetailItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/35">
        {label}
      </p>

      <p className="mt-2 text-base font-medium text-white">
        {value}
      </p>
    </div>
  );
}