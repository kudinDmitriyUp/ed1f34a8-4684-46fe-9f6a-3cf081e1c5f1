"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Award, Calendar, ChefHat, MessageSquare, Star, Sun, UtensilsCrossed } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant={"icon-arrow"}
      defaultTextAnimation={"entrance-slide"}
      borderRadius={"soft"}
      contentWidth={"small"}
      sizing={"small"}
      background={"dotGrid"}
      cardStyle={"glass-depth"}
      primaryButtonStyle={"diagonal-gradient"}
      secondaryButtonStyle={"layered"}
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="Techshop"
          button={{
            text: "Prenota",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardGallery
          title="We love TechShop"
          description="Benvenuti al Techshop, dove tradizione e sapori genuini si incontrano nel cuore di Milano. Scoprite i nostri piatti preparati con ingredienti freschi e ricette tramandate da generazioni."
          tag="Ristorante Italiano"
          tagIcon={Star}
          buttons={[
            {
              text: "Prenota Tavolo",
              href: "contact"
            },
            {
              text: "Vedi Menu",
              href: "products"
            }
          ]}
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763590823875-qglg7k7p.jpg",
              imageAlt: "Interno del ristorante Techshop"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763590824803-fi775v5o.jpg",
              imageAlt: "Pasta Carbonara autentica"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763590825574-7n1kqp53.jpg",
              imageAlt: "Pizza Margherita tradizionale"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763590827618-lpyjmizk.jpg",
              imageAlt: "Chef italiano che cucina"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763590829677-e3gat6vr.jpg",
              imageAlt: "Atmosfera del ristorante"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          title="Dal 1952, portiamo la vera tradizione italiana nel cuore di Milano con ricette autentiche e ingredienti freschi selezionati ogni giorno dai nostri fornitori di fiducia."
          buttons={[
            {
              text: "La Nostra Storia",
              href: "about"
            }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardSix
          title="Quello che Ci Rende Speciali"
          description="Scoprite i segreti della nostra cucina e quello che rende unica l'esperienza al Techshop"
          tag="Le Nostre Specialità"
          tagIcon={ChefHat}
          textboxLayout="default"
          features={[
            {
              id: 1,
              title: "Ingredienti Freschi Quotidiani",
              description: "Ogni mattina selezioniamo personalmente i migliori ingredienti dal mercato locale per garantire freschezza e qualità in ogni piatto che serviamo.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763590828370-d4si8vo5.jpg",
              imageAlt: "Ingredienti freschi italiani"
            },
            {
              id: 2,
              title: "Chef con Esperienza Generazionale",
              description: "I nostri chef seguono ricette tramandate da tre generazioni, mantenendo viva la tradizione culinaria italiana con tecniche autentiche e passione.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763590827618-lpyjmizk.jpg",
              imageAlt: "Chef italiano esperto"
            },
            {
              id: 3,
              title: "Cantina con Vini Selezionati",
              description: "Una collezione accuratamente curata di vini italiani delle migliori regioni, perfetti per accompagnare ogni piatto del nostro menu tradizionale.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763590829154-0eb9f09y.jpg",
              imageAlt: "Cantina vini italiani"
            }
          ]}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardTwo
          title="I Nostri Piatti Speciali"
          description="Scoprite le specialità della casa, preparate con ricette tradizionali e ingredienti di prima qualità"
          tag="Menu del Giorno"
          tagIcon={UtensilsCrossed}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          products={[
            {
              id: "1",
              name: "Pasta Carbonara della Casa",
              brand: "Specialità Romana",
              price: "€18,50",
              rating: 5,
              reviewCount: "124",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763590824803-fi775v5o.jpg",
              imageAlt: "Pasta Carbonara autentica"
            },
            {
              id: "2",
              name: "Pizza Margherita Napoletana",
              brand: "Tradizione Napoletana",
              price: "€16,00",
              rating: 5,
              reviewCount: "89",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763590825574-7n1kqp53.jpg",
              imageAlt: "Pizza Margherita napoletana"
            },
            {
              id: "3",
              name: "Risotto ai Porcini",
              brand: "Specialità del Nord",
              price: "€22,00",
              rating: 5,
              reviewCount: "67",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763590826076-5eyhm35h.jpg",
              imageAlt: "Risotto ai funghi porcini"
            },
            {
              id: "4",
              name: "Tiramisù della Nonna",
              brand: "Dolce della Casa",
              price: "€8,50",
              rating: 5,
              reviewCount: "156",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763590826886-003uczng.jpg",
              imageAlt: "Tiramisù tradizionale"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Menu Fisso e Degustazioni"
          description="Scegliete tra i nostri menu fissi studiati per offrirvi un'esperienza culinaria completa"
          tag="Menu Speciali"
          tagIcon={Star}
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "pranzo",
              badge: "Menu Pranzo",
              badgeIcon: Sun,
              price: "€28,00",
              subtitle: "Perfetto per la pausa pranzo",
              features: [
                "Antipasto della casa",
                "Primo piatto a scelta",
                "Dolce o caffè",
                "Acqua e coperto inclusi"
              ]
            },
            {
              id: "degustazione",
              badge: "Menu Degustazione",
              badgeIcon: Award,
              price: "€55,00",
              subtitle: "Un viaggio nella tradizione italiana",
              features: [
                "Antipasti misti della casa",
                "Primo e secondo piatto",
                "Dolce della nonna",
                "Vino della casa incluso",
                "Caffè e digestivo"
              ]
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="Cosa Dicono i Nostri Clienti"
          description="Le opinioni sincere di chi ha già provato l'esperienza Techshop"
          tag="Recensioni"
          tagIcon={MessageSquare}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Marco Rossi",
              role: "Cliente Abituale",
              company: "Milano Centro",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763590830407-m0io7n7w.jpg",
              imageAlt: "Marco Rossi cliente soddisfatto"
            },
            {
              id: "2",
              name: "Giulia Bianchi",
              role: "Food Blogger",
              company: "Taste of Milano",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763590831202-v18p1u2q.jpg",
              imageAlt: "Giulia Bianchi food blogger"
            },
            {
              id: "3",
              name: "Alessandro Ferrari",
              role: "Chef Consulente",
              company: "Ristoranti di Milano",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763590831879-i0a8xvpi.jpg",
              imageAlt: "Alessandro Ferrari chef consulente"
            },
            {
              id: "4",
              name: "Francesca Conti",
              role: "Critica Gastronomica",
              company: "Corriere della Sera",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763590832796-8x6sil5r.jpg",
              imageAlt: "Francesca Conti critica gastronomica"
            },
            {
              id: "5",
              name: "Roberto Colombo",
              role: "Proprietario Enoteca",
              company: "Vini & Sapori",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763590833559-dj3504e4.jpg",
              imageAlt: "Roberto Colombo proprietario enoteca"
            },
            {
              id: "6",
              name: "Sofia Romano",
              role: "Event Manager",
              company: "Milano Events",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763590834096-d5gt67l5.jpg",
              imageAlt: "Sofia Romano event manager"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Prenotazioni"
          title="Prenotate il Vostro Tavolo"
          description="Contattateci per prenotare un tavolo o per informazioni sui nostri menu speciali. Vi aspettiamo per una vera esperienza italiana!"
          tagIcon={Calendar}
          inputPlaceholder="La vostra email"
          buttonText="Prenota Ora"
          termsText="Cliccando su Prenota Ora confermate di accettare i nostri termini e condizioni per le prenotazioni."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763590834854-a49dihih.jpg"
          imageAlt="Ubicazione Techshop a Milano"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="Techshop"
          copyrightText="© 2025 | Techshop Ristorante Milano"
          columns={[
            {
              title: "Ristorante",
              items: [
                {
                  label: "Chi Siamo",
                  href: "about"
                },
                {
                  label: "Menu",
                  href: "products"
                },
                {
                  label: "Prenotazioni",
                  href: "contact"
                }
              ]
            },
            {
              title: "Servizi",
              items: [
                {
                  label: "Eventi Privati",
                  href: "events"
                },
                {
                  label: "Catering",
                  href: "catering"
                },
                {
                  label: "Degustazioni",
                  href: "pricing"
                }
              ]
            },
            {
              title: "Contatti",
              items: [
                {
                  label: "Via Milano 123, Milano",
                  href: "location"
                },
                {
                  label: "+39 02 1234567",
                  href: "tel:+390212345678"
                },
                {
                  label: "info@techshop.it",
                  href: "mailto:info@techshop.it"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}