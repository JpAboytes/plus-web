import Image from "next/image";
import Header from "./components/Header";
import Reveal from "./components/Reveal";
import ContactForm from "./components/ContactForm";
import { WA_LINK, EMAIL, BRANCHES, CLIENTS, CERTS } from "./components/data";
import {
  IconClock, IconBolt, IconBuilding, IconTruck, IconUserCheck, IconSearch,
  IconShield, IconDoc, IconGraduation, IconBadge, IconCheck, IconPin,
  IconPhone, IconMail, IconArrow, IconWhatsApp,
} from "./components/Icons";

const SERVICES = [
  { icon: IconClock, title: "Emergencias 24/7", desc: "Atención personalizada a emergencias las 24 horas, los 365 días del año." },
  { icon: IconBolt, title: "Reacción inmediata", desc: "Cobertura y equipo de reacción inmediata ante cualquier incidente." },
  { icon: IconBuilding, title: "Eventos especiales", desc: "Cobertura especializada para eventos y concentraciones de público." },
  { icon: IconTruck, title: "Supervisión móvil", desc: "Supervisión continua en vehículos oficiales con sistemas de radio." },
  { icon: IconUserCheck, title: "Selección rigurosa", desc: "Proceso de selección y reclutamiento detallado de cada elemento." },
  { icon: IconSearch, title: "Investigación de personal", desc: "Investigación socioeconómica, penal y laboral de todo el personal." },
  { icon: IconShield, title: "Análisis de riesgos", desc: "Evaluación y análisis de riesgos adaptado a cada instalación." },
  { icon: IconDoc, title: "Manual de operaciones", desc: "Manual de operaciones y pliego de consignas para cada servicio." },
  { icon: IconGraduation, title: "Capacitación continua", desc: "Programas de inducción, actualización y seguimiento permanente." },
  { icon: IconBadge, title: "Equipo reglamentario", desc: "Uniforme completo y fornitura con PR-24 y gas lacrimógeno." },
];

export default function Home() {
  return (
    <>
      <Header />

      {/* ===================== HERO ===================== */}
      <section id="inicio" className="hero">
        <div className="hero-glow" />
        <div className="hero-inner">
          <Reveal>
            <div className="hero-badge">
              <span className="dot" />
              <span>Seguridad privada certificada · USEPS</span>
            </div>
            <h1>Protección y vigilancia profesional para lo que más importa</h1>
            <p className="lead">
              Servicios de seguridad privada y vigilancia para instalaciones comerciales,
              industriales, corporativas y residenciales, con personal certificado y
              reacción inmediata las 24 horas.
            </p>
            <div className="hero-actions">
              <a href="#contacto" className="btn btn-primary">
                Solicitar información <IconArrow />
              </a>
              <a href={WA_LINK} target="_blank" rel="noopener" className="btn btn-ghost">
                <IconWhatsApp fill="#25D366" /> WhatsApp
              </a>
            </div>
          </Reveal>

          <Reveal className="hero-visual">
            <div className="hero-visual-inner">
              <Image
                src="/logo.png"
                alt="Plus Servicios de Seguridad Privada"
                width={450}
                height={620}
                className="hero-logo"
                priority
              />
            </div>
          </Reveal>
        </div>

        <div className="stat-strip">
          <div className="stat-strip-inner">
            <div className="stat"><div className="stat-num">24/7</div><div className="stat-label">Atención a emergencias</div></div>
            <div className="stat"><div className="stat-num">365</div><div className="stat-label">Días al año de cobertura</div></div>
            <div className="stat"><div className="stat-num">3</div><div className="stat-label">Sucursales activas</div></div>
            <div className="stat"><div className="stat-num accent">USEPS</div><div className="stat-label">Personal capacitado</div></div>
          </div>
        </div>
      </section>

      {/* ===================== SERVICIOS ===================== */}
      <section id="servicios" className="section services">
        <div className="container">
          <Reveal className="services-head">
            <span className="eyebrow"><span className="bar" />Servicios</span>
            <h2 className="section-title">Soluciones integrales de seguridad y vigilancia</h2>
            <p className="section-lead">
              Operación profesional respaldada por protocolos rigurosos, supervisión continua
              y personal estrictamente seleccionado y capacitado.
            </p>
          </Reveal>

          <div className="cards">
            {SERVICES.map(({ icon: Icon, title, desc }) => (
              <Reveal key={title} className="card">
                <div className="card-icon"><Icon /></div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== NOSOTROS ===================== */}
      <section id="nosotros" className="section about">
        <div className="about-glow" />
        <div className="about-inner">
          <Reveal className="about-text">
            <span className="eyebrow"><span className="bar" />Personal certificado</span>
            <h2 className="section-title">Confianza respaldada por personal acreditado</h2>
            <p>
              Cada elemento de Plus es sometido a un riguroso proceso de evaluación,
              capacitación y verificación antes de integrarse a su servicio.
            </p>
            <p>
              Nuestra prioridad es ofrecerle tranquilidad con personal confiable, profesional
              y plenamente acreditado ante las autoridades correspondientes.
            </p>
          </Reveal>

          <Reveal className="cert-grid">
            {CERTS.map((c) => (
              <div key={c} className="cert">
                <IconCheck /> <span>{c}</span>
              </div>
            ))}
            <div className="cert full">
              <IconCheck /> <span>Inscripción en el Registro de Personal de Seguridad Privada</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================== CLIENTES ===================== */}
      <section id="clientes" className="section clients">
        <div className="container">
          <Reveal className="clients-head">
            <span className="eyebrow"><span className="bar" />Clientes<span className="bar" /></span>
            <h2 className="section-title">Instituciones que confían en nosotros</h2>
            <p className="section-lead">
              Hemos resguardado instalaciones de instituciones educativas, médicas, hoteleras
              y residenciales reconocidas.
            </p>
          </Reveal>

          <div className="clients-grid">
            {CLIENTS.map((c) => (
              <Reveal key={c} className="client"><span>{c}</span></Reveal>
            ))}
            <Reveal className="client muted"><span>entre otros</span></Reveal>
          </div>
        </div>
      </section>

      {/* ===================== COBERTURA ===================== */}
      <section id="cobertura" className="section coverage">
        <div className="container">
          <Reveal className="coverage-head">
            <span className="eyebrow"><span className="bar" />Cobertura</span>
            <h2 className="section-title">Presencia en crecimiento a nivel nacional</h2>
            <p className="section-lead">
              Operamos desde tres sucursales activas con expansión en marcha hacia nuevas ciudades.
            </p>
          </Reveal>

          <div className="coverage-grid">
            {BRANCHES.map((b) => (
              <Reveal key={b.city} className="branch">
                <div className="branch-name">
                  <IconPin /> <h3>{b.city}</h3>
                </div>
                <p>{b.address}</p>
                <a href={`tel:${b.telHref}`} className="branch-tel">
                  <IconPhone /> {b.tel}
                </a>
              </Reveal>
            ))}
            <Reveal className="branch soon">
              <div className="branch-name">
                <IconPin /> <h3>Mexicali</h3>
              </div>
              <p>Nueva sucursal en apertura.</p>
              <span className="badge-soon">Próximamente</span>
            </Reveal>
          </div>

          <Reveal className="map-wrap">
            <iframe
              title="Ubicación Plus Seguridad — Puebla"
              src="https://www.google.com/maps?q=18+Sur+Oriente+3909+Col+Maria+Luisa+Puebla&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </div>
      </section>

      {/* ===================== CONTACTO ===================== */}
      <section id="contacto" className="section contact">
        <div className="contact-glow" />
        <div className="contact-inner">
          <Reveal className="contact-text">
            <span className="eyebrow"><span className="bar" />Contacto</span>
            <h2 className="section-title">Hablemos de su seguridad</h2>
            <p>
              Cuéntenos sobre su instalación y nuestro equipo le contactará para brindarle
              la información que necesita.
            </p>

            <div className="contact-methods">
              <a href={`mailto:${EMAIL}`} className="contact-method">
                <div className="ico"><IconMail /></div>
                <div>
                  <div className="ml">Correo</div>
                  <div className="mv">{EMAIL}</div>
                </div>
              </a>
              <a href="tel:2223467075" className="contact-method">
                <div className="ico"><IconPhone width={20} height={20} /></div>
                <div>
                  <div className="ml">Teléfono Puebla</div>
                  <div className="mv">222 346 7075</div>
                </div>
              </a>
              <a href={WA_LINK} target="_blank" rel="noopener" className="wa-btn">
                <IconWhatsApp fill="#07300f" /> Escríbenos por WhatsApp
              </a>
            </div>
          </Reveal>

          <Reveal className="form-card">
            <ContactForm />
          </Reveal>
        </div>
      </section>

      {/* ===================== FOOTER ===================== */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-grid">
            <div>
              <div className="footer-brand">
                <Image src="/logo.png" alt="Plus Seguridad Privada" width={100} height={138} />
                <span>Plus Servicios de Seguridad Privada</span>
              </div>
              <p>Plus — Servicios de Seguridad Privada, Limpieza y Mantenimiento S.A.S. de C.V.</p>
            </div>
            <div>
              <div className="footer-col-title">Cobertura</div>
              <div className="footer-list">
                {BRANCHES.map((b) => (
                  <span key={b.city}>{b.city} · {b.tel}</span>
                ))}
                <span className="muted">Mexicali · Próximamente</span>
              </div>
            </div>
            <div>
              <div className="footer-col-title">Contacto</div>
              <div className="footer-list">
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                <a href={WA_LINK} target="_blank" rel="noopener">WhatsApp</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Plus Servicios de Seguridad Privada. Todos los derechos reservados.</span>
            <span>S.A.S. de C.V.</span>
          </div>
        </div>
      </footer>

      {/* ===================== WHATSAPP FLOTANTE ===================== */}
      <a href={WA_LINK} target="_blank" rel="noopener" aria-label="WhatsApp" className="wa-float">
        <IconWhatsApp width={30} height={30} fill="#fff" />
      </a>
    </>
  );
}
