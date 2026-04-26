import { motion } from "framer-motion";

const steps = [
  { num: "1", title: "Sign Up Online in Minutes", desc: "Complete KYC digitally with your citizenship & bank details — no branch visit needed." },
  { num: "2", title: "Fund Your Account Instantly", desc: "Connect eSewa, Khalti, or direct bank transfer. Funds reflect in real time." },
  { num: "3", title: "Start Trading on NEPSE", desc: "Buy & sell shares, apply for IPOs, and track your portfolio from one dashboard." },
];

const stats = [
  { icon: "🏆", num: "15+", label: "Years of Excellence" },
  { icon: "👥", num: "200K+", label: "Active Clients" },
  { icon: "🏢", num: "6", label: "Branch Offices" },
  { icon: "📊", num: "Rs.1B+", label: "Daily Average Trading Volume" },
];

const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

export default function ContinueSection() {
  return (
    <section className="bg-brand-gray-lt px-4 py-14 sm:px-6 sm:py-[72px]">
      <div className="mx-auto grid max-w-[1280px] items-center gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.5 }}>
          <div className="mb-2.5 text-[11.5px] font-bold uppercase tracking-[2px] text-brand-blue">Why Imperial Securities?</div>
          <h2 className="mb-3 font-heading text-[clamp(24px,3vw,40px)] font-extrabold leading-[1.2] text-foreground">Continue Your Journey With Us</h2>
          <p className="mb-7 max-w-[540px] text-[15.5px] leading-[1.72] text-brand-gray">
            We've been powering Nepal's investors for over 15 years with cutting-edge technology, SEBON compliance, and personalized service across every district.
          </p>
          <div className="flex flex-col gap-4">
            {steps.map((s) => (
              <div key={s.num} className="flex items-start gap-3.5">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-brand-green-dk text-[13px] font-bold text-white">
                  {s.num}
                </div>
                <div>
                  <h5 className="mb-0.5 text-[15px] font-semibold text-foreground">{s.title}</h5>
                  <p className="text-[13px] text-brand-gray">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <a href="#" className="mt-7 inline-flex items-center gap-2 rounded-[10px] bg-gradient-to-br from-brand-blue to-brand-blue-dk px-7 py-3.5 text-[15px] font-bold text-white shadow-[0_4px_16px_rgba(21,87,192,.25)] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(21,87,192,.35)]">
            Start Your Investment Journey →
          </a>
        </motion.div>

        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.5, delay: 0.15 }}
          className="grid grid-cols-2 gap-4"
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`rounded-lg bg-white p-4 shadow-[0_4px_24px_rgba(21,87,192,.10)] transition-transform hover:-translate-y-1 sm:p-6 ${
                i % 2 === 0 ? "border-t-[3px] border-t-brand-blue" : "border-t-[3px] border-t-brand-green"
              }`}
            >
              <div className="mb-2 text-[22px] sm:mb-2.5 sm:text-[26px]">{s.icon}</div>
              <div className="font-heading text-[24px] font-extrabold leading-tight text-foreground sm:text-[30px]">
                {s.num.replace("+", "")}<span className="text-brand-green">+</span>
              </div>
              <div className="mt-1 text-[12px] text-brand-gray sm:text-[13px]">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
