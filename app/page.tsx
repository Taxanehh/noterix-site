"use client"

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Cpu, HardDrive, Network, Shield, ArrowRight, Sun, Moon, Globe, Terminal, Clock, ChevronDown, Zap, Lock, Server, BarChart3 } from "lucide-react"

const ease = [0.16, 1, 0.3, 1] as const

const reveal = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
}

export default function Page() {
  const ref = useRef(null)
  const { scrollY } = useScroll()
  const [dark, setDark] = useState(true)

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light")
  }, [dark])

  const topRadius = useTransform(scrollY, [0, 80], [18, 0])

  return (
    <main ref={ref} className="relative min-h-screen bg-[var(--bg-2)] text-[var(--text)] transition-colors duration-500">

      {/* background */}
      <div className="pointer-events-none absolute inset-0 nx-grid opacity-[0.22]" />
      <div className="pointer-events-none absolute inset-0 nx-scanlines" />

      {/* NAVBAR */}
      <motion.header
        style={{
          borderTopLeftRadius: topRadius,
          borderTopRightRadius: topRadius,
          borderBottomLeftRadius: 18,
          borderBottomRightRadius: 18,
        }}
        className="
          fixed top-6 left-1/2 -translate-x-1/2 z-50
          w-[92%] max-w-6xl
          border border-[var(--nx-edge)]
          bg-[var(--bg)]/80
          backdrop-blur-xl
          shadow-lg
        "
      >
        <div className="grid grid-cols-3 items-center px-6 py-4">

          {/* logo */}
          <div className="flex items-center gap-3">
            <img
              src="/noterix_logo_transparent.png"
              className="h-8 w-8"
              alt="Noterix"
            />
            <span className="text-sm font-semibold">Noterix</span>
          </div>

          {/* center nav */}
          <nav className="flex justify-center gap-8 text-sm text-[var(--nx-fg-70)]">
            <a href="#infra" className="hover:text-[var(--nx-fg)]">Infra</a>
            <a href="#vps" className="hover:text-[var(--nx-fg)]">VPS</a>
            <a href="#network" className="hover:text-[var(--nx-fg)]">Network</a>
            <a href="#support" className="hover:text-[var(--nx-fg)]">Support</a>
          </nav>

          {/* right */}
          <div className="flex justify-end">
            <Button className="rounded-lg bg-[var(--purple)] text-[#fff]">
              Plans
            </Button>
          </div>

        </div>
      </motion.header>

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center px-6 max-w-6xl mx-auto relative">
        <div className="grid lg:grid-cols-12 gap-16 items-center">

          {/* TEXT */}
          <motion.div
            variants={reveal}
            initial="hidden"
            animate="show"
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 text-xs text-[var(--nx-fg-50)] border border-[var(--nx-edge)] rounded-full px-3 py-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--success)]" />
              EU-West &mdash; all systems nominal
            </div>

            <h1 className="text-5xl font-semibold leading-[1.1] tracking-tight">
              Servers that don&apos;t<br />share resources
            </h1>

            <p className="text-[var(--nx-fg-55)] max-w-md leading-relaxed">
              Dedicated KVM cores, NVMe storage, no overselling.
              You get what the spec sheet says.
            </p>

            {/* terminal snippet */}
            <div className="rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-4 max-w-md font-mono text-xs">
              <div className="text-[var(--term-dim)] mb-2">~ terminal</div>
              <div className="text-[var(--term-text)]">
                <span className="text-[var(--success)]">$</span> ssh root@fra1.noterix.com
              </div>
              <div className="text-[var(--term-muted)] mt-1">
                Welcome to NX-VPS-04 · 4 vCPU · 8GB · Debian 12
              </div>
              <div className="text-[var(--term-text)] mt-1">
                <span className="text-[var(--success)]">$</span>{" "}
                <span className="nx-cursor">▌</span>
              </div>
            </div>

            <div className="flex gap-4 pt-2">
              <Button className="bg-[var(--purple)] text-[#fff] gap-2">
                View plans <ArrowRight className="w-3.5 h-3.5" />
              </Button>
              <Button
                variant="secondary"
                className="border border-[var(--nx-edge)] bg-[var(--nx-surf)] text-[var(--nx-fg)]"
              >
                GitHub
              </Button>
            </div>
          </motion.div>

          {/* RACK VISUAL */}
          <div className="lg:col-span-5">
            <RackVisual />
          </div>

        </div>

        {/* scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[var(--nx-fg-25)]"
        >
          <span className="text-[10px] tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </section>

      {/* INFRA */}
      <section id="infra" className="px-6 max-w-6xl mx-auto pb-32">
        <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <div className="text-xs text-[var(--nx-fg-40)] tracking-widest uppercase mb-3">Infrastructure</div>
          <h2 className="text-3xl font-semibold">Transparent stack</h2>
          <p className="mt-3 text-[var(--nx-fg-50)] max-w-xl">
            No abstraction layers hiding what you run on.
            Every component is documented and measurable.
          </p>

          <div className="mt-10 grid md:grid-cols-2 gap-4">
            <InfraCard
              icon={<Cpu className="w-4 h-4" />}
              title="Compute"
              desc="Dedicated KVM cores, not shared time slices. Your processes don't compete with other tenants."
              details={["AMD EPYC / Intel Xeon", "Dedicated vCPU threads", "KVM isolation"]}
            />
            <InfraCard
              icon={<HardDrive className="w-4 h-4" />}
              title="Storage"
              desc="NVMe SSDs in RAID configurations. Consistent IOPS, not burst-then-throttle."
              details={["NVMe RAID-10", "Up to 1M IOPS", "Daily snapshots included"]}
            />
            <InfraCard
              icon={<Network className="w-4 h-4" />}
              title="Network"
              desc="EU peering with low-latency routing. Native IPv6, IPv4 included."
              details={["1 Gbps uplink", "IPv4 + IPv6 dual-stack", "20–40 TB transfer"]}
            />
            <InfraCard
              icon={<Shield className="w-4 h-4" />}
              title="Protection"
              desc="DDoS mitigation at the network edge. No extra charge, always on."
              details={["L3/L4 DDoS filtering", "Firewall API", "Encrypted at rest"]}
            />
          </div>
        </motion.div>
      </section>

      {/* VPS */}
      <section id="vps" className="px-6 max-w-6xl mx-auto pb-32">
        <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <div className="text-xs text-[var(--nx-fg-40)] tracking-widest uppercase mb-3">Plans</div>
          <h2 className="text-3xl font-semibold">Pick a size</h2>
          <p className="mt-3 text-[var(--nx-fg-50)] max-w-xl mb-10">
            Three tiers. Fixed resources. Scale up when you need to, no surprises on the invoice.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <TierCard
              name="NX-2"
              cpu="2 vCPU"
              ram="4 GB"
              disk="80 GB NVMe"
              transfer="20 TB"
              price="€7"
            />
            <TierCard
              name="NX-4"
              cpu="4 vCPU"
              ram="8 GB"
              disk="160 GB NVMe"
              transfer="30 TB"
              price="€14"
              highlighted
            />
            <TierCard
              name="NX-8"
              cpu="8 vCPU"
              ram="16 GB"
              disk="320 GB NVMe"
              transfer="40 TB"
              price="€28"
            />
          </div>
        </motion.div>
      </section>

      {/* NETWORK */}
      <section id="network" className="px-6 max-w-6xl mx-auto pb-32">
        <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <div className="text-xs text-[var(--nx-fg-40)] tracking-widest uppercase mb-3">Network</div>
          <h2 className="text-3xl font-semibold">Frankfurt-based, globally routed</h2>
          <p className="mt-3 text-[var(--nx-fg-50)] max-w-xl mb-10">
            All servers are in Frankfurt, DE with peering across major European exchanges.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="rounded-xl border border-[var(--nx-edge)] bg-[var(--nx-surf-4)] p-6 space-y-3">
              <Globe className="w-5 h-5 text-[var(--nx-fg-40)]" />
              <div className="text-2xl font-semibold">DE-CIX</div>
              <p className="text-sm text-[var(--nx-fg-50)]">
                Direct peering at the world&apos;s largest internet exchange point by traffic volume.
              </p>
            </div>
            <div className="rounded-xl border border-[var(--nx-edge)] bg-[var(--nx-surf-4)] p-6 space-y-3">
              <Zap className="w-5 h-5 text-[var(--nx-fg-40)]" />
              <div className="text-2xl font-semibold">&lt;1ms</div>
              <p className="text-sm text-[var(--nx-fg-50)]">
                Intra-datacenter latency. Sub-20ms to Amsterdam, London, Paris, and Zurich.
              </p>
            </div>
            <div className="rounded-xl border border-[var(--nx-edge)] bg-[var(--nx-surf-4)] p-6 space-y-3">
              <BarChart3 className="w-5 h-5 text-[var(--nx-fg-40)]" />
              <div className="text-2xl font-semibold">1 Gbps</div>
              <p className="text-sm text-[var(--nx-fg-50)]">
                Dedicated uplink per VPS. Unmetered inbound, generous outbound included in every plan.
              </p>
            </div>
          </div>

          {/* latency table */}
          <div className="mt-8 rounded-xl border border-[var(--nx-edge)] bg-[var(--nx-surf-4)] overflow-hidden">
            <div className="grid grid-cols-4 text-xs text-[var(--nx-fg-40)] tracking-wide uppercase border-b border-[var(--nx-edge)] px-5 py-3">
              <span>Destination</span><span>Latency</span><span>Hops</span><span>Peering</span>
            </div>
            {[
              ["Amsterdam", "7ms", "3", "AMS-IX"],
              ["London", "12ms", "4", "LINX"],
              ["Paris", "11ms", "3", "France-IX"],
              ["Stockholm", "22ms", "5", "Netnod"],
              ["Warsaw", "18ms", "4", "EPIX"],
            ].map(([dest, lat, hops, peer]) => (
              <div key={dest} className="grid grid-cols-4 text-sm px-5 py-3 border-b border-[var(--nx-edge-5)]">
                <span className="text-[var(--nx-fg-70)]">{dest}</span>
                <span className="text-[var(--success)] font-mono text-xs">{lat}</span>
                <span className="text-[var(--nx-fg-50)] font-mono text-xs">{hops}</span>
                <span className="text-[var(--nx-fg-40)] text-xs">{peer}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* DEVELOPER EXPERIENCE */}
      <section id="devex" className="px-6 max-w-6xl mx-auto pb-32">
        <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <div className="text-xs text-[var(--nx-fg-40)] tracking-widest uppercase mb-3">Developer experience</div>
          <h2 className="text-3xl font-semibold">Ship, don&apos;t configure</h2>
          <p className="mt-3 text-[var(--nx-fg-50)] max-w-xl mb-10">
            API-first provisioning, a real CLI, and SSH access from minute one.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {/* CLI card */}
            <div className="rounded-xl border border-[var(--nx-edge)] bg-[var(--nx-surf-4)] p-6 space-y-4">
              <div className="flex items-center gap-2 text-[var(--nx-fg-50)]">
                <Terminal className="w-4 h-4" />
                <span className="text-xs tracking-wide uppercase">CLI</span>
              </div>
              <div className="rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-4 font-mono text-xs">
                <div className="text-[var(--term-text)]"><span className="text-[var(--success)]">$</span> nx vps create --plan nx-4 --region fra1</div>
                <div className="text-[var(--term-muted)] mt-1">Creating NX-VPS-12 … done (14s)</div>
                <div className="text-[var(--term-text)] mt-1"><span className="text-[var(--success)]">$</span> nx vps list</div>
                <div className="text-[var(--term-muted)] mt-1">ID&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PLAN&nbsp;&nbsp;REGION&nbsp;&nbsp;STATUS</div>
                <div className="text-[var(--term-text)] mt-0.5">nx-vps-12&nbsp;&nbsp;NX-4&nbsp;&nbsp;fra1&nbsp;&nbsp;&nbsp;&nbsp;running</div>
              </div>
            </div>

            {/* API card */}
            <div className="rounded-xl border border-[var(--nx-edge)] bg-[var(--nx-surf-4)] p-6 space-y-4">
              <div className="flex items-center gap-2 text-[var(--nx-fg-50)]">
                <Server className="w-4 h-4" />
                <span className="text-xs tracking-wide uppercase">REST API</span>
              </div>
              <div className="rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-4 font-mono text-xs">
                <div className="text-[var(--term-muted)]">POST /v1/instances</div>
                <div className="text-[var(--term-text)] mt-2">{`{`}</div>
                <div className="text-[var(--term-text)] pl-4">&quot;plan&quot;: &quot;nx-4&quot;,</div>
                <div className="text-[var(--term-text)] pl-4">&quot;region&quot;: &quot;fra1&quot;,</div>
                <div className="text-[var(--term-text)] pl-4">&quot;image&quot;: &quot;debian-12&quot;</div>
                <div className="text-[var(--term-text)]">{`}`}</div>
                <div className="text-[var(--success)] mt-2">→ 201 Created (1.2s)</div>
              </div>
            </div>

            {/* Features list */}
            <div className="md:col-span-2 grid sm:grid-cols-3 gap-4">
              {[
                { icon: <Lock className="w-4 h-4" />, label: "SSH keys", sub: "Add keys via dashboard or API. Password auth disabled by default." },
                { icon: <Zap className="w-4 h-4" />, label: "Instant deploys", sub: "VPS provisioned in under 30 seconds. No queue, no waitlist." },
                { icon: <Globe className="w-4 h-4" />, label: "rDNS & IPv6", sub: "Set reverse DNS from the panel. Native IPv6 on every instance." },
              ].map((f) => (
                <div key={f.label} className="rounded-xl border border-[var(--nx-edge)] bg-[var(--nx-surf-4)] p-5 space-y-2">
                  <div className="flex items-center gap-2 text-[var(--nx-fg-50)]">
                    {f.icon}
                    <span className="text-xs tracking-wide uppercase">{f.label}</span>
                  </div>
                  <p className="text-sm text-[var(--nx-fg-50)] leading-relaxed">{f.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* UPTIME */}
      <section className="px-6 max-w-6xl mx-auto pb-32">
        <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <div className="text-xs text-[var(--nx-fg-40)] tracking-widest uppercase mb-3">Reliability</div>
          <h2 className="text-3xl font-semibold">99.95% SLA</h2>
          <p className="mt-3 text-[var(--nx-fg-50)] max-w-xl mb-10">
            Measured, not marketed. Uptime tracked on a public status page — no hidden incidents.
          </p>

          <div className="grid md:grid-cols-4 gap-4">
            {[
              { value: "99.97%", label: "Avg. uptime (2025)", accent: true },
              { value: "14s", label: "Avg. provisioning", accent: false },
              { value: "<2min", label: "Incident response", accent: false },
              { value: "0", label: "Data-loss events", accent: true },
            ].map((s) => (
              <div key={s.label} className="rounded-xl border border-[var(--nx-edge)] bg-[var(--nx-surf-4)] p-6 text-center space-y-2">
                <div className={`text-3xl font-semibold ${s.accent ? "text-[var(--success)]" : ""}`}>{s.value}</div>
                <div className="text-xs text-[var(--nx-fg-40)] tracking-wide uppercase">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Uptime bar visual */}
          <div className="mt-8 rounded-xl border border-[var(--nx-edge)] bg-[var(--nx-surf-4)] p-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-[var(--nx-fg-40)] tracking-wide uppercase">Last 90 days</span>
              <span className="text-xs text-[var(--success)] font-mono">99.97%</span>
            </div>
            <div className="flex gap-[2px] h-6">
              {Array.from({ length: 90 }, (_, i) => (
                <div
                  key={i}
                  className={`flex-1 rounded-[1px] ${
                    i === 47 ? "bg-[var(--error)]" : "bg-[var(--success)]/60"
                  }`}
                  title={i === 47 ? "Partial outage — 12min" : "Operational"}
                />
              ))}
            </div>
            <div className="flex justify-between mt-2 text-[10px] text-[var(--nx-fg-25)]">
              <span>90 days ago</span>
              <span>Today</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="px-6 max-w-6xl mx-auto pb-32">
        <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <div className="text-xs text-[var(--nx-fg-40)] tracking-widest uppercase mb-3">FAQ</div>
          <h2 className="text-3xl font-semibold mb-10">Common questions</h2>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { q: "What hypervisor do you use?", a: "KVM via QEMU. Full hardware virtualization — no containers or shared-kernel setups." },
              { q: "Can I run Docker / Kubernetes?", a: "Yes. Nested virtualization is enabled. Run whatever you want inside your VPS." },
              { q: "What OS images are available?", a: "Debian 11/12, Ubuntu 22.04/24.04, Fedora 39, Rocky 9, Arch. Custom ISOs supported." },
              { q: "How does billing work?", a: "Monthly, prepaid. No per-hour billing tricks. Cancel anytime, prorated refund." },
              { q: "Do you offer DDoS protection?", a: "L3/L4 mitigation is on by default, no extra charge. We filter at the network edge." },
              { q: "Where is my data stored?", a: "Frankfurt, Germany. All storage is encrypted at rest. GDPR-compliant infrastructure." },
            ].map((item) => (
              <div key={item.q} className="rounded-xl border border-[var(--nx-edge)] bg-[var(--nx-surf-4)] p-5 space-y-2">
                <div className="font-medium text-[var(--nx-fg-80)]">{item.q}</div>
                <p className="text-sm text-[var(--nx-fg-50)] leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA BANNER */}
      <section className="px-6 max-w-6xl mx-auto pb-32">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="rounded-2xl border border-[var(--purple)]/20 bg-[var(--purple)]/[0.04] p-10 md:p-14 text-center space-y-5"
        >
          <h2 className="text-3xl font-semibold">Ready to deploy?</h2>
          <p className="text-[var(--nx-fg-50)] max-w-md mx-auto">
            Spin up a VPS in under 30 seconds. No credit card required for the first 48 hours.
          </p>
          <div className="flex justify-center gap-4">
            <Button className="bg-[var(--purple)] text-[#fff] gap-2">
              Get started <ArrowRight className="w-3.5 h-3.5" />
            </Button>
            <Button
              variant="secondary"
              className="border border-[var(--nx-edge)] bg-[var(--nx-surf)] text-[var(--nx-fg)]"
            >
              View pricing
            </Button>
          </div>
        </motion.div>
      </section>

      {/* OPEN SOURCE */}
      <section id="oss" className="px-6 max-w-6xl mx-auto pb-32">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="rounded-2xl border border-[var(--nx-edge)] bg-[var(--nx-surf-2)] p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="text-xs text-[var(--nx-fg-40)] tracking-widest uppercase mb-3">Open source</div>
              <h2 className="text-2xl font-semibold">Built in the open</h2>
              <p className="mt-3 text-[var(--nx-fg-50)] leading-relaxed">
                Our provisioning stack, monitoring dashboards, and API clients
                are public on GitHub. File issues, read the source, or self-host
                the tooling.
              </p>
              <div className="mt-6">
                <Button
                  variant="secondary"
                  className="border border-[var(--nx-edge)] bg-[var(--nx-surf)] text-[var(--nx-fg)] gap-2"
                >
                  Browse on GitHub <ArrowRight className="w-3.5 h-3.5" />
                </Button>
              </div>
            </div>
            <div className="font-mono text-xs text-[var(--term-tree)] leading-relaxed border border-[var(--term-border)] rounded-lg bg-[var(--term-bg)] p-5">
              <div className="text-[var(--term-dim)] mb-2"># noterix/infra</div>
              <div><span className="text-[var(--term-text)]">├──</span> provisioner/</div>
              <div><span className="text-[var(--term-text)]">├──</span> monitoring/</div>
              <div><span className="text-[var(--term-text)]">├──</span> api-client/</div>
              <div><span className="text-[var(--term-text)]">├──</span> terraform/</div>
              <div><span className="text-[var(--term-text)]">├──</span> docs/</div>
              <div><span className="text-[var(--term-text)]">└──</span> LICENSE (MIT)</div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer id="support" className="border-t border-[var(--nx-edge)] bg-[var(--bg)]">
        <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8 text-sm">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img src="/noterix_logo_transparent.png" className="h-5 w-5" alt="Noterix" />
              <span className="font-semibold text-[var(--nx-fg)]">Noterix</span>
            </div>
            <p className="text-[var(--nx-fg-40)] leading-relaxed">
              Infrastructure hosting.<br />Frankfurt, DE.
            </p>
          </div>
          <div className="space-y-2">
            <div className="font-semibold text-[var(--nx-fg-70)] mb-3">Products</div>
            <a href="#vps" className="block text-[var(--nx-fg-40)] hover:text-[var(--nx-fg-70)] transition-colors">VPS</a>
            <a href="#" className="block text-[var(--nx-fg-40)] hover:text-[var(--nx-fg-70)] transition-colors">Dedicated</a>
            <a href="#" className="block text-[var(--nx-fg-40)] hover:text-[var(--nx-fg-70)] transition-colors">Domains</a>
          </div>
          <div className="space-y-2">
            <div className="font-semibold text-[var(--nx-fg-70)] mb-3">Resources</div>
            <a href="#oss" className="block text-[var(--nx-fg-40)] hover:text-[var(--nx-fg-70)] transition-colors">GitHub</a>
            <a href="#" className="block text-[var(--nx-fg-40)] hover:text-[var(--nx-fg-70)] transition-colors">Docs</a>
            <a href="#" className="block text-[var(--nx-fg-40)] hover:text-[var(--nx-fg-70)] transition-colors">Status</a>
          </div>
          <div className="space-y-2">
            <div className="font-semibold text-[var(--nx-fg-70)] mb-3">Support</div>
            <a href="mailto:support@noterix.com" className="block text-[var(--nx-fg-40)] hover:text-[var(--nx-fg-70)] transition-colors">support@noterix.com</a>
          </div>
        </div>
        <div className="border-t border-[var(--nx-edge-5)]">
          <div className="max-w-6xl mx-auto px-6 py-4 text-xs text-[var(--nx-fg-25)]">
            &copy; 2026 Noterix
          </div>
        </div>
      </footer>

      {/* THEME TOGGLE */}
      <button
        onClick={() => setDark((d) => !d)}
        className="
          fixed bottom-6 right-6 z-50
          w-10 h-10 rounded-full
          border border-[var(--border)]
          bg-[var(--bg)]/80 backdrop-blur-md
          flex items-center justify-center
          text-[var(--text-muted)]
          hover:text-[var(--text)] hover:border-[var(--text-muted)]
          transition-all duration-300
          shadow-lg
          cursor-pointer
        "
        aria-label="Toggle theme"
      >
        <AnimatePresence mode="wait" initial={false}>
          {dark ? (
            <motion.span
              key="sun"
              initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.25 }}
              className="flex items-center justify-center"
            >
              <Sun className="w-4 h-4" />
            </motion.span>
          ) : (
            <motion.span
              key="moon"
              initial={{ rotate: 90, opacity: 0, scale: 0.6 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: -90, opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.25 }}
              className="flex items-center justify-center"
            >
              <Moon className="w-4 h-4" />
            </motion.span>
          )}
        </AnimatePresence>
      </button>

    </main>
  )
}

/* ---------- 3D SERVER RACK VISUAL ---------- */

const SLOT_COUNT = 8

function RackVisual() {
  return (
    <div
      className="relative w-full h-[440px] flex items-center justify-center select-none"
      style={{ perspective: "1000px" }}
    >
      {/* Ambient glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 2.5, duration: 2.5 }}
        className="pointer-events-none absolute w-56 h-64 rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(119,69,236,0.2), transparent 70%)",
        }}
      />

      {/* 3D rotated rack assembly */}
      <motion.div
        initial={{ rotateY: -30, rotateX: 12, opacity: 0, scale: 0.8 }}
        animate={{ rotateY: -12, rotateX: 4, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="relative w-[290px]">
          {/* ── Main rack chassis ── */}
          <div
            className="relative rounded-xl overflow-hidden"
            style={{ boxShadow: "var(--rack-shadow)" }}
          >
            {/* Top cap */}
            <div
              className="relative z-10 h-[22px] border-b border-[var(--rack-a6)] flex items-center justify-between px-3"
              style={{ background: "linear-gradient(to bottom, var(--rack-cap-1), var(--rack-cap-2))" }}
            >
              <div className="flex items-center gap-1.5">
                <div className="w-[5px] h-[5px] rounded-full bg-[var(--rack-a18)]" />
                <div className="w-[5px] h-[5px] rounded-full bg-[var(--rack-a12)]" />
                <div className="w-[5px] h-[5px] rounded-full bg-[var(--rack-a7)]" />
              </div>
              <span className="text-[7px] font-mono text-[var(--rack-a18)] tracking-[0.18em]">
                NX-RACK-01
              </span>
            </div>

            {/* Rack body */}
            <div
              className="relative"
              style={{ background: "linear-gradient(to bottom right, var(--rack-body-1), var(--rack-body-2), var(--rack-body-3))" }}
            >
              {/* Left rail */}
              <div
                className="absolute left-0 top-0 bottom-0 w-[20px] z-10 border-r border-[var(--rack-a7)] flex flex-col items-center py-[7px]"
                style={{ background: "linear-gradient(to right, var(--rack-rail-1), var(--rack-rail-2))" }}
              >
                {Array.from({ length: SLOT_COUNT }, (_, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center"
                    style={{ marginTop: i === 0 ? 0 : 5 }}
                  >
                    <div
                      className="w-[6px] h-[6px] rounded-full bg-[var(--rack-screw)] border border-[var(--rack-a12)]"
                      style={{ boxShadow: "var(--rack-screw-shadow)" }}
                    />
                    <div className="w-[3px] h-[24px] rounded-[1px] bg-[var(--rack-a3)] mt-[2px]" />
                  </div>
                ))}
              </div>

              {/* Right rail */}
              <div
                className="absolute right-0 top-0 bottom-0 w-[20px] z-10 border-l border-[var(--rack-a7)] flex flex-col items-center py-[7px]"
                style={{ background: "linear-gradient(to left, var(--rack-rail-1), var(--rack-rail-2))" }}
              >
                {Array.from({ length: SLOT_COUNT }, (_, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center"
                    style={{ marginTop: i === 0 ? 0 : 5 }}
                  >
                    <div
                      className="w-[6px] h-[6px] rounded-full bg-[var(--rack-screw)] border border-[var(--rack-a12)]"
                      style={{ boxShadow: "var(--rack-screw-shadow)" }}
                    />
                    <div className="w-[3px] h-[24px] rounded-[1px] bg-[var(--rack-a3)] mt-[2px]" />
                  </div>
                ))}
              </div>

              {/* Server slots */}
              <div className="relative py-[6px] px-[24px] flex flex-col gap-[5px]">
                {Array.from({ length: SLOT_COUNT }, (_, i) => (
                  <ServerUnit key={i} index={i} />
                ))}
              </div>
            </div>

            {/* Bottom cap */}
            <div
              className="relative z-10 h-[22px] border-t border-[var(--rack-a6)] flex items-center justify-center"
              style={{ background: "linear-gradient(to top, var(--rack-cap-1), var(--rack-cap-2))" }}
            >
              <div className="w-10 h-[2px] rounded-full bg-[var(--rack-a6)]" />
            </div>
          </div>

          {/* ── 3D depth: right side panel ── */}
          <div
            className="absolute top-[22px] -right-[12px] bottom-[22px] w-[12px] rounded-r-sm border-r border-y border-[var(--rack-a4)]"
            style={{
              background: "linear-gradient(to right, var(--rack-side-1), var(--rack-side-2))",
              transform: "skewY(-2deg)",
              transformOrigin: "top left",
            }}
          />

          {/* ── 3D depth: top panel ── */}
          <div
            className="absolute -top-[10px] left-[12px] right-0 h-[10px] rounded-t-sm border-t border-x border-[var(--rack-a4)]"
            style={{
              background: "linear-gradient(to top, var(--rack-top-1), var(--rack-top-2))",
              transform: "skewX(-4deg)",
              transformOrigin: "bottom left",
            }}
          />

          {/* ── Floor reflection ── */}
          <div
            className="absolute -bottom-6 left-4 right-4 h-6 rounded-b-xl blur-sm"
            style={{ background: "linear-gradient(to bottom, var(--rack-a2), transparent)" }}
          />
        </div>
      </motion.div>
    </div>
  )
}

/* ── 1U Server Unit ── */

function ServerUnit({ index }: { index: number }) {
  return (
    <motion.div
      initial={{ x: 160, opacity: 0, scale: 0.92 }}
      animate={{ x: 0, opacity: 1, scale: 1 }}
      transition={{
        delay: 0.5 + index * 0.14,
        type: "spring",
        stiffness: 120,
        damping: 14,
      }}
      className="relative h-[36px] rounded-[3px] overflow-hidden border border-[var(--rack-a10)]"
      style={{
        background: "linear-gradient(to bottom, var(--rack-unit-1), var(--rack-unit-2))",
        boxShadow: "var(--rack-unit-shadow)",
      }}
    >
      {/* Top bezel highlight */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px]"
        style={{ background: "linear-gradient(to right, transparent, var(--rack-a8), transparent)" }}
      />

      <div className="absolute inset-0 flex items-center px-[7px] gap-[6px]">
        {/* Handle grip */}
        <div
          className="flex-shrink-0 w-[3px] h-[18px] rounded-[1px]"
          style={{ background: "linear-gradient(to bottom, var(--rack-a14), var(--rack-a5))" }}
        />

        {/* Vent grille */}
        <div className="flex-shrink-0 flex flex-col gap-[2px]">
          {[0, 1, 2].map((row) => (
            <div key={row} className="flex gap-[1.5px]">
              {[0, 1, 2, 3, 4, 5, 6].map((col) => (
                <div
                  key={col}
                  className="w-[5px] h-[1.5px] rounded-[0.5px] bg-[var(--rack-a6)]"
                />
              ))}
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="flex-shrink-0 w-[1px] h-[20px] bg-[var(--rack-a6)]" />

        {/* Drive bays */}
        <div className="flex-shrink-0 flex gap-[3px]">
          {[0, 1, 2, 3].map((d) => (
            <div
              key={d}
              className="w-[12px] h-[24px] rounded-[2px] bg-[var(--rack-drive)] border border-[var(--rack-a6)] flex flex-col items-center justify-end pb-[3px]"
            >
              <DriveLed delay={index * 0.1 + d * 0.05} />
            </div>
          ))}
        </div>

        {/* Spacer */}
        <div className="flex-1 min-w-0" />

        {/* Model label */}
        <span className="flex-shrink-0 text-[5.5px] font-mono text-[var(--rack-a12)] tracking-[0.14em]">
          NX-{String(index + 1).padStart(2, "0")}
        </span>

        {/* Status LED cluster */}
        <div className="flex-shrink-0 flex items-center gap-[5px] ml-[3px]">
          <StatusLed color="#7745ec" delay={index * 0.22} />
          <StatusLed color="#0f8bff" delay={index * 0.22 + 0.1} />
          <StatusLed color="#00b894" delay={index * 0.22 + 0.2} />
        </div>
      </div>
    </motion.div>
  )
}

/* ── Drive bay activity LED ── */

function DriveLed({ delay }: { delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 0.55, 0.1, 0.7, 0.15] }}
      transition={{
        delay: 2.2 + delay,
        duration: 3.5,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      }}
      className="w-[3px] h-[3px] rounded-full"
      style={{
        backgroundColor: "#0f8bff",
        boxShadow: "0 0 4px #0f8bff, 0 0 8px rgba(15,139,255,0.25)",
      }}
    />
  )
}

/* ── Status LED ── */

function StatusLed({ color, delay }: { color: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: [0.2, 1, 0.2] }}
      transition={{
        delay: 2 + delay,
        duration: 2.6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="w-[5px] h-[5px] rounded-full"
      style={{
        backgroundColor: color,
        boxShadow: `0 0 6px ${color}, 0 0 14px ${color}50`,
      }}
    />
  )
}

/* ── Infra card ── */

function InfraCard({
  icon,
  title,
  desc,
  details,
}: {
  icon: React.ReactNode
  title: string
  desc: string
  details: string[]
}) {
  return (
    <div className="rounded-xl border border-[var(--nx-edge)] bg-[var(--nx-surf-4)] p-5 space-y-3">
      <div className="flex items-center gap-2 text-[var(--nx-fg-50)]">
        {icon}
        <span className="text-xs tracking-wide uppercase">{title}</span>
      </div>
      <p className="text-sm text-[var(--nx-fg-60)] leading-relaxed">{desc}</p>
      <div className="flex flex-wrap gap-2 pt-1">
        {details.map((d) => (
          <span
            key={d}
            className="text-[11px] text-[var(--nx-fg-40)] border border-[var(--nx-edge)] rounded px-2 py-0.5"
          >
            {d}
          </span>
        ))}
      </div>
    </div>
  )
}

/* ── Tier card ── */

function TierCard({
  name,
  cpu,
  ram,
  disk,
  transfer,
  price,
  highlighted,
}: {
  name: string
  cpu: string
  ram: string
  disk: string
  transfer: string
  price: string
  highlighted?: boolean
}) {
  return (
    <div
      className={`rounded-xl border p-6 flex flex-col gap-5 ${
        highlighted
          ? "border-[var(--purple)]/40 bg-[var(--purple)]/[0.06]"
          : "border-[var(--nx-edge)] bg-[var(--nx-surf-4)]"
      }`}
    >
      <div>
        <div className="text-xs text-[var(--nx-fg-40)] tracking-widest uppercase">{name}</div>
        <div className="mt-2 text-3xl font-semibold">
          {price}<span className="text-sm font-normal text-[var(--nx-fg-40)]">/mo</span>
        </div>
      </div>

      <div className="space-y-2 text-sm text-[var(--nx-fg-60)]">
        <div className="flex justify-between"><span>vCPU</span><span className="text-[var(--nx-fg-80)]">{cpu}</span></div>
        <div className="flex justify-between"><span>RAM</span><span className="text-[var(--nx-fg-80)]">{ram}</span></div>
        <div className="flex justify-between"><span>Disk</span><span className="text-[var(--nx-fg-80)]">{disk}</span></div>
        <div className="flex justify-between"><span>Transfer</span><span className="text-[var(--nx-fg-80)]">{transfer}</span></div>
      </div>

      <Button
        className={`w-full mt-auto ${
          highlighted
            ? "bg-[var(--purple)] text-[#fff]"
            : "border border-[var(--nx-edge)] bg-[var(--nx-surf)] text-[var(--nx-fg)]"
        }`}
        variant={highlighted ? "default" : "secondary"}
      >
        Deploy
      </Button>
    </div>
  )
}