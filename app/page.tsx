import LandingPage from "@/components/landing/landing-page";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Funilaria Funemon",
  description:
    "Empresa de calhas em Paranaguá com instalação, manutenção, rufos e serralheria.",
  areaServed: ["Paranaguá", "Antonina", "Morretes", "Litoral do Paraná"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Pref. Dr. Roque Vernalha, 1703 - Vila Cruzeiro",
    addressLocality: "Paranaguá",
    addressRegion: "PR",
    postalCode: "83221-000",
    addressCountry: "BR",
  },
  telephone: "+55 41 98458-2666",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+55 41 98458-2666",
      contactType: "customer service",
      areaServed: "BR",
      availableLanguage: "pt-BR",
    },
    {
      "@type": "ContactPoint",
      telephone: "+55 41 3423-4337",
      contactType: "customer service",
      areaServed: "BR",
      availableLanguage: "pt-BR",
    },
  ],
  url: "https://www.funemoncalhas.com.br",
  sameAs: ["https://wa.me/5541984582666"],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <LandingPage />
    </>
  );
}
