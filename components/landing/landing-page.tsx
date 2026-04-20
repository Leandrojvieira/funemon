"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const whatsappBaseUrl = "https://wa.me/5541984582666";
const services = [
  "Instalação de calhas",
  "Conserto de calhas",
  "Rufos para telhado",
  "Coifas",
  "Exaustores eólicos",
  "Toldos",
  "Portões em alumínio",
  "Janelas",
  "Estruturas metálicas",
];

const materials = ["Alumínio", "Inox", "Galvalume"];

const gallery = [
  {
    src: "/images/calha-paranagua.webp",
    alt: "Instalação de calha em Paranaguá",
  },
  {
    src: "/images/rufos-litoral.webp",
    alt: "Rufos para telhado no litoral do Paraná",
  },
  {
    src: "/images/serralheria-paranagua.webp",
    alt: "Serviço de serralheria em Paranaguá",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const sectionClass = "mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10";

function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p
          className={`text-xs font-semibold uppercase tracking-[0.16em] ${
            light ? "text-sky-300" : "text-sky-700"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`mt-2 text-3xl font-bold tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            light ? "text-slate-200" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

function getWhatsAppUrl(origin: string) {
  if (typeof window === "undefined") {
    return `${whatsappBaseUrl}?text=${encodeURIComponent(
      "Olá! Vim pelo site da Funemon e quero solicitar um orçamento."
    )}`;
  }

  const params = new URLSearchParams(window.location.search);
  const utmSource = params.get("utm_source") || "organico";
  const utmMedium = params.get("utm_medium") || "site";
  const utmCampaign = params.get("utm_campaign") || "institucional";

  const text =
    `Olá! Vim pelo site da Funemon e quero solicitar um orçamento.` +
    ` Origem: ${utmSource} | Meio: ${utmMedium} | Campanha: ${utmCampaign} | Ponto: ${origin}`;

  return `${whatsappBaseUrl}?text=${encodeURIComponent(text)}`;
}

function trackWhatsAppClick(origin: string) {
  if (typeof window !== "undefined") {
    const params = new URLSearchParams(window.location.search);
    const payload = {
      event: "whatsapp_click",
      source: origin,
      utm_source: params.get("utm_source") || "organico",
      utm_medium: params.get("utm_medium") || "site",
      utm_campaign: params.get("utm_campaign") || "institucional",
    };

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(payload);

    if (typeof window.gtag === "function") {
      window.gtag("event", "whatsapp_click", payload);
    }
  }
}

declare global {
  interface Window {
    dataLayer?: Array<Record<string, string>>;
    gtag?: (
      command: "event",
      eventName: string,
      params: Record<string, string>
    ) => void;
  }
}

export default function LandingPage() {
  return (
    <>
      <main className="bg-white text-slate-900">
        <section
          id="inicio"
          className="relative overflow-hidden bg-slate-950 text-white"
        >
          <div className="absolute inset-0">
            <Image
              src="/images/hero-funemon.webp"
              alt="Equipe de instalação de calhas em Paranaguá"
              fill
              priority
              className="object-cover opacity-30"
              sizes="100vw"
            />
          </div>
          <div className="relative border-b border-white/10">
            <div className={`${sectionClass} py-24 sm:py-28 lg:py-36`}>
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                variants={fadeUp}
                className="max-w-3xl"
              >
                <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-sky-300">
                  Empresa de calhas em Paranaguá
                </p>
                <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
                  Calhas em Paranaguá com Instalação Profissional e Garantia
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-100 sm:text-xl">
                  Mais de 45 anos atendendo Paranaguá e todo o litoral com
                  soluções completas em calhas, rufos e serralheria.
                </p>
                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    href={getWhatsAppUrl("hero")}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsAppClick("hero")}
                    className="inline-flex items-center justify-center rounded-full bg-red-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-red-900/30 transition hover:bg-red-500"
                  >
                    Solicitar Orçamento no WhatsApp
                  </motion.a>
                  <a
                    href="#servicos"
                    className="inline-flex items-center justify-center rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    Ver Serviços
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="autoridade" className={`${sectionClass} py-18 sm:py-20`}>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.12 }}
            className="grid gap-5 md:grid-cols-3"
          >
            {[
              { title: "+45 anos", text: "de experiência em funilaria técnica" },
              { title: "+1000 serviços", text: "realizados com padrão profissional" },
              { title: "Litoral completo", text: "atendimento rápido e regional" },
            ].map((item) => (
              <motion.article
                key={item.title}
                variants={fadeUp}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <p className="text-3xl font-bold tracking-tight text-sky-800">
                  {item.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.text}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </section>

        <section id="servicos" className="bg-slate-50 py-20 sm:py-24">
          <div className={sectionClass}>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              variants={fadeUp}
            >
              <SectionHeading
                eyebrow="Soluções completas"
                title="Serviços de funilaria e serralheria em Paranaguá"
                description="Atuamos com instalação de calhas, conserto de calhas, rufos para telhado e serralheria sob medida, focando durabilidade e acabamento premium."
              />
            </motion.div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <motion.article
                  key={service}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.35 }}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
                >
                  <p className="text-base font-semibold tracking-tight">{service}</p>
                </motion.article>
              ))}
            </div>
            <div className="mt-8 rounded-2xl border border-sky-100 bg-sky-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-sky-900">
                Materiais de alta resistência
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {materials.map((material) => (
                  <span
                    key={material}
                    className="rounded-full bg-white px-3 py-1 text-sm font-medium text-sky-900"
                  >
                    {material}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="diferenciais" className={`${sectionClass} py-20 sm:py-24`}>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            variants={fadeUp}
            className="max-w-3xl"
          >
            <SectionHeading
              eyebrow="Diferenciais reais"
              title="Por que escolher a Funemon?"
            />
            <div className="mt-8 space-y-4 text-base leading-relaxed text-slate-700 sm:text-lg">
              <p>
                Mais de 45 anos em Paranaguá entregando segurança em cada
                instalação de calhas e rufos para telhado.
              </p>
              <p>
                Fabricação sob medida com peças de até 8 metros sem emenda, o que
                reduz vazamentos e aumenta a vida útil.
              </p>
              <p>
                Equipe própria, garantia de 1 ano e atendimento técnico do início
                ao pós-obra.
              </p>
            </div>
          </motion.div>
        </section>

        <section id="galeria" className="bg-slate-950 py-20 text-white sm:py-24">
          <div className={sectionClass}>
            <SectionHeading
              eyebrow="Prova visual"
              title="Trabalhos reais em Paranaguá e litoral"
              description="Execuções com acabamento técnico, precisão de medida e durabilidade para cada tipo de telhado."
              light
            />
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {gallery.map((item) => (
                <div
                  key={item.src}
                  className="group relative overflow-hidden rounded-2xl border border-white/10"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={640}
                    height={420}
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    quality={78}
                    className="h-72 w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="cobertura" className={`${sectionClass} py-20 sm:py-24`}>
          <SectionHeading
            eyebrow="SEO local"
            title="Atendimento em Paranaguá e Litoral"
            description="Atendemos Paranaguá, Antonina, Morretes e todo o litoral com instalação e manutenção de calhas, rufos e serviços de serralheria."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <p className="font-semibold">Funilaria Funemon</p>
              <p className="mt-3 leading-relaxed text-slate-700">
                Ao lado da Ortodontia Lider
                <br />
                Av. Pref. Dr. Roque Vernalha, 1703 - Vila Cruzeiro
                <br />
                Paranaguá - PR, 83221-000
              </p>
              <a
                href="tel:+5541984582666"
                className="mt-5 inline-block text-base font-semibold text-red-600 underline"
              >
                (41) 98458-2666
              </a>
            </div>
            <div className="overflow-hidden rounded-2xl border border-slate-200">
              <iframe
                title="Mapa Funemon Paranaguá"
                src="https://www.google.com/maps?q=Av.%20Pref.%20Dr.%20Roque%20Vernalha,%201703%20-%20Vila%20Cruzeiro,%20Paranagu%C3%A1%20-%20PR&output=embed"
                className="h-[320px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        <section id="contato" className="bg-sky-900 py-20 text-white sm:py-24">
          <div className={`${sectionClass} text-center`}>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Precisa de calhas em Paranaguá?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-sky-100 sm:text-lg">
              Solicite agora seu orçamento rápido pelo WhatsApp.
            </p>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href={getWhatsAppUrl("cta_final")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick("cta_final")}
              className="mt-8 inline-flex items-center justify-center rounded-full bg-red-600 px-8 py-3.5 font-semibold text-white shadow-lg shadow-slate-950/25 transition hover:bg-red-500"
            >
              Falar no WhatsApp
            </motion.a>
          </div>
        </section>
      </main>

      <footer className="bg-slate-950 py-10 text-sm text-slate-200">
        <div className={`${sectionClass} flex flex-col gap-3 sm:flex-row sm:justify-between`}>
          <p>
            Funilaria Funemon - calhas em Paranaguá, instalação de calhas, conserto
            de calhas, rufos para telhado e serralheria em Paranaguá.
          </p>
          <a
            href={getWhatsAppUrl("footer")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick("footer")}
            className="font-semibold text-sky-300"
          >
            WhatsApp: (41) 98458-2666
          </a>
        </div>
      </footer>

      <motion.a
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        href={getWhatsAppUrl("botao_flutuante")}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsAppClick("botao_flutuante")}
        className="fixed bottom-5 right-5 z-50 inline-flex items-center rounded-full bg-red-600 px-5 py-3 text-sm font-semibold text-white shadow-xl shadow-red-900/40 transition hover:bg-red-500"
      >
        WhatsApp
      </motion.a>
    </>
  );
}
