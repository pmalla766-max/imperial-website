import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";

const services = [
  { icon: "📈", title: "Stock Brokerage", desc: "Execute buy and sell orders on NEPSE with real-time market access, competitive brokerage rates, and instant trade confirmation.", green: false, href: "/services/stock-brokerage" },
  { icon: "🏦", title: "Depository Services (DP)", desc: "Open and manage your DEMAT account. Receive IPO allotments, transfer shares digitally — all CDSC-linked.", green: true, href: "/services/depository-services" },
  { icon: "💳", title: "Margin Trading", desc: "Amplify your purchasing power with our margin facility. Borrow against your portfolio with transparent interest rates.", green: false, href: "/services/margin-trading" },
  { icon: "🎯", title: "Portfolio Management", desc: "SEBON-certified advisors manage a customized portfolio aligned to your risk appetite with monthly reports.", green: true, href: "/services/portfolio-management" },
  { icon: "📋", title: "IPO / FPO Application", desc: "Apply for upcoming IPOs & FPOs online without visiting a branch. Get automatic allotment to your DEMAT.", green: false, href: "/services/ipo-fpo" },
  { icon: "📚", title: "Research & Advisory", desc: "Daily market reports, company fundamentals, sector analysis, and expert stock recommendations from our team.", green: true, href: "/services/research-advisory" },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-[1280px]">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <div className="mb-2.5 text-[11.5px] font-bold uppercase tracking-[2px] text-brand-blue">What We Offer</div>
          <h2 className="mb-3 font-heading text-[clamp(24px,3vw,40px)] font-extrabold leading-[1.2] text-foreground">Our Core Services</h2>
          <p className="max-w-[540px] text-[15.5px] leading-[1.72] text-brand-gray">A full suite of investment services for every type of investor.</p>
        </motion.div>
        <div className="grid gap-[22px] sm:grid-cols-2 lg:grid-cols-3">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="group relative overflow-hidden rounded-lg border-[1.5px] border-border bg-white p-7 transition-all hover:-translate-y-1 hover:border-transparent hover:shadow-[0_4px_24px_rgba(21,87,192,.10)]"
            >
              <div className="absolute left-0 right-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-brand-blue to-brand-green transition-transform group-hover:scale-x-100" />
              <div className={`mb-4 flex h-[50px] w-[50px] items-center justify-center rounded-xl text-[22px] ${svc.green ? "bg-brand-green-lt" : "bg-brand-blue-lt"}`}>
                {svc.icon}
              </div>
              <h3 className="mb-2.5 text-[17px] font-bold">{svc.title}</h3>
              <p className="mb-4 text-[13.5px] leading-[1.68] text-brand-gray">{svc.desc}</p>
              <Link to={svc.href} className="inline-flex items-center gap-1 text-[13px] font-semibold text-brand-blue transition-all hover:gap-2">
                Learn More →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
