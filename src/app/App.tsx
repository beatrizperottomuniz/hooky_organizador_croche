import { useRef } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
} from "motion/react";
import img1 from "../imports/image-1.png";
import img2 from "../imports/image-2.png";
import imgCatMascot from "figma:asset/3bf8b96dd5c4456393a2694741217e6c5b716856.png";
import imgBerries from "figma:asset/dc3ac0459b73b787af7fc9f2e9a0184da91f4141.png";
import Frame88 from "../imports/Frame88/Frame88";

// ============================================================
// 🔗 LINK DA APP STORE — substitua pelo link real do seu app:
const APP_STORE_URL =
  "https://apps.apple.com/app/SEU_APP_ID_AQUI";
// ============================================================

function GridBg({ opacity = 1 }: { opacity?: number }) {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: `linear-gradient(#BBBBF8 1px, transparent 1px), linear-gradient(90deg, #BBBBF8 1px, transparent 1px)`,
        backgroundSize: "100px 100px",
        opacity,
      }}
    />
  );
}

function Sparkle({
  size = 28,
  color = "#6148df",
  className = "",
  delay = 0,
}: {
  size?: number;
  color?: string;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      className={className}
      animate={{
        rotate: [0, 20, -10, 0],
        scale: [1, 1.15, 0.95, 1],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    >
      <path
        d="M14 0 L15.5 12.5 L28 14 L15.5 15.5 L14 28 L12.5 15.5 L0 14 L12.5 12.5 Z"
        fill={color}
      />
    </motion.svg>
  );
}

function AppleLogo({ size = 22 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 22 27"
      fill="white"
    >
      <path d="M18.27 14.18c-.026-2.81 2.3-4.18 2.404-4.247-1.314-1.92-3.355-2.183-4.073-2.207-1.726-.175-3.387 1.021-4.266 1.021-.888 0-2.24-.999-3.689-.97-1.886.028-3.638 1.102-4.609 2.782-1.98 3.429-.507 8.496 1.413 11.277.942 1.36 2.053 2.879 3.513 2.823 1.415-.058 1.947-.908 3.658-.908 1.699 0 2.193.908 3.683.876 1.521-.026 2.485-1.372 3.42-2.738 1.073-1.565 1.52-3.081 1.543-3.162-.034-.014-2.96-1.133-2.993-4.547zM15.252 5.19c.782-.95 1.314-2.263 1.169-3.577-1.131.046-2.499.757-3.31 1.706-.727.84-1.362 2.185-1.193 3.472 1.266.097 2.555-.639 3.334-1.601z" />
    </svg>
  );
}

function AppStoreBadge({ large = false }: { large?: boolean }) {
  return (
    <motion.a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-3 bg-black text-white rounded-2xl ${
        large ? "px-8 py-4" : "px-5 py-3"
      }`}
      style={{ fontFamily: "Nunito, sans-serif" }}
      whileHover={{
        scale: 1.06,
        boxShadow: "0 12px 32px rgba(0,0,0,0.25)",
      }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 20,
      }}
    >
      <AppleLogo size={large ? 26 : 22} />
      <div className="text-left">
        <p
          className={`leading-tight opacity-75 ${large ? "text-xs" : "text-[10px]"}`}
        >
          Disponível na
        </p>
        <p
          className={`font-bold leading-tight ${large ? "text-xl" : "text-base"}`}
        >
          App Store
        </p>
      </div>
    </motion.a>
  );
}

// ---------- Navbar ----------
function Navbar() {
  return (
    <motion.nav
      className="sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-[#e0defb]"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-[22%] overflow-hidden flex-shrink-0 shadow-md">
            <Frame88 />
          </div>
          <span
            className="text-[22px] font-black text-[#3d3d3d]"
            style={{ fontFamily: "Nunito, sans-serif" }}
          >
            Hooky
          </span>
        </div>
        <AppStoreBadge />
      </div>
    </motion.nav>
  );
}

// ---------- Hero ----------
function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const phoneY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const berriesY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -40],
  );

  return (
    <section
      ref={ref}
      className="relative overflow-hidden min-h-[88vh] flex items-center"
      style={{ backgroundColor: "#f5f4ff" }}
    >
      <GridBg />

      {/* Berries parallax */}
      <motion.img
        src={imgBerries}
        alt=""
        aria-hidden
        className="absolute top-0 right-0 w-48 md:w-72 opacity-90 pointer-events-none select-none"
        style={{ x: "15%", y: berriesY }}
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 0.9, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.3 }}
      />

      {/* Sparkles */}
      <Sparkle
        size={32}
        color="#6148df"
        className="absolute top-[18%] left-[8%] opacity-80"
        delay={0}
      />
      <Sparkle
        size={20}
        color="#9e99f2"
        className="absolute top-[32%] left-[14%] opacity-55"
        delay={0.8}
      />
      <Sparkle
        size={16}
        color="#6148df"
        className="absolute bottom-[28%] right-[42%] opacity-45"
        delay={1.5}
      />
      <Sparkle
        size={12}
        color="#c656df"
        className="absolute top-[55%] left-[5%] opacity-40"
        delay={2}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-8 py-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 w-full">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left max-w-xl">
          <motion.p
            className="text-[#7569ea] mb-2"
            style={{
              fontFamily: "Nunito, sans-serif",
              fontSize: "clamp(1.3rem, 3vw, 1.6rem)",
              fontWeight: 600,
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Conte seus pontos,
          </motion.p>
          <motion.h1
            className="text-[#6148df] mb-6"
            style={{
              fontFamily: "Nunito, sans-serif",
              fontSize: "clamp(2.2rem, 6vw, 3.8rem)",
              fontWeight: 900,
              lineHeight: 1.1,
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
          >
            Crie sem perder o fio.
          </motion.h1>
          <motion.p
            className="text-[#3d3d3d] mb-10 max-w-md mx-auto lg:mx-0"
            style={{
              fontFamily: "Nunito, sans-serif",
              fontSize: "clamp(1rem, 2.2vw, 1.15rem)",
              lineHeight: 1.7,
              fontWeight: 500,
            }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.36 }}
          >
            Você sabe quantas colunas fez. Sabe quantas fileiras
            faltam. Só esqueceu de anotar — de novo.
            <br />
            <br />O Hooky foi feito pra você nunca mais perder o
            ponto. Organize todos os seus projetos de crochê em
            um só lugar, com contadores inteligentes que
            acompanham cada etapa da sua peça.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <AppStoreBadge large />
          </motion.div>
        </div>

        {/* Phone Screenshot — floats up/down */}
        <motion.div
          className="flex-shrink-0 flex items-center justify-center"
          style={{ y: phoneY }}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: "easeOut",
          }}
        >
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{
              duration: 3.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              filter:
                "drop-shadow(0 30px 60px rgba(97,72,223,0.28))",
            }}
          >
            <img
              src={img1}
              alt="Screenshot do Hooky"
              className="w-56 md:w-72 lg:w-80 rounded-[3rem] object-contain"
              style={{ maxHeight: "640px" }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          className="w-full"
        >
          <path
            d="M0 40 Q360 0 720 40 Q1080 80 1440 40 L1440 80 L0 80 Z"
            fill="#ebecfc"
          />
        </svg>
      </div>
    </section>
  );
}

// ---------- Animated feature card ----------
const FEATURES = [
  {
    emoji: "📂",
    color: "#ebecfc",
    title: "Projetos organizados",
    desc: "Crie projetos com nome, dificuldade, materiais e anotações — tudo em um só lugar.",
  },
  {
    emoji: "🔢",
    color: "#feebd7",
    title: "Contadores inteligentes",
    desc: "Adicione quantos contadores precisar, cada um com sua cor e meta personalizada.",
  },
  {
    emoji: "📋",
    color: "#f1f7d0",
    title: "Receita passo a passo",
    desc: "Registre a receita direto no app e marque cada etapa enquanto cria.",
  },
  {
    emoji: "📍",
    color: "#ebecfc",
    title: "Progresso em tempo real",
    desc: "Acompanhe seu progresso e saiba exatamente onde parou — sem perder o fio.",
  },
  {
    emoji: "🎨",
    color: "#fdf0fd",
    title: "Personalize do seu jeito",
    desc: "Foto de capa, cores e detalhes que deixam cada projeto com a sua cara.",
  },
];

function FeatureCard({
  f,
  i,
}: {
  f: (typeof FEATURES)[0];
  i: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: "-60px",
  });
  return (
    <motion.div
      ref={ref}
      className="rounded-3xl p-7 flex flex-col gap-3 cursor-default"
      style={{ backgroundColor: f.color }}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.5,
        delay: i * 0.08,
        ease: "easeOut",
      }}
      whileHover={{
        y: -6,
        boxShadow: "0 16px 40px rgba(97,72,223,0.14)",
      }}
    >
      <motion.span
        className="text-4xl"
        animate={{ rotate: [0, -8, 8, 0] }}
        transition={{
          duration: 3 + i * 0.4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: i * 0.3,
        }}
      >
        {f.emoji}
      </motion.span>
      <h3
        className="text-[#3d3d3d]"
        style={{
          fontFamily: "Nunito, sans-serif",
          fontSize: "1.1rem",
          fontWeight: 800,
          lineHeight: 1.3,
        }}
      >
        {f.title}
      </h3>
      <p
        className="text-[#555]"
        style={{
          fontFamily: "Nunito, sans-serif",
          fontSize: "0.95rem",
          fontWeight: 500,
          lineHeight: 1.6,
        }}
      >
        {f.desc}
      </p>
    </motion.div>
  );
}

function Features() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, {
    once: true,
    margin: "-80px",
  });
  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, {
    once: true,
    margin: "-60px",
  });

  return (
    <section className="py-20 bg-[#ebecfc]">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p
            className="text-[#7569ea] mb-2"
            style={{
              fontFamily: "Nunito, sans-serif",
              fontSize: "1rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            O que você pode fazer
          </p>
          <h2
            className="text-[#3d3d3d]"
            style={{
              fontFamily: "Nunito, sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
              fontWeight: 900,
              lineHeight: 1.2,
            }}
          >
            Tudo que você precisa pra criar com calma
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((f, i) => (
            <FeatureCard key={i} f={f} i={i} />
          ))}

          {/* CTA card */}
          <motion.div
            ref={ctaRef}
            className="rounded-3xl p-7 flex flex-col justify-between gap-4"
            style={{
              background:
                "linear-gradient(135deg, #7569ea 0%, #9e99f2 100%)",
            }}
            initial={{ opacity: 0, y: 40 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{
              y: -6,
              boxShadow: "0 16px 40px rgba(97,72,223,0.3)",
            }}
          >
            <div>
              <span className="text-4xl">🧶</span>
              <h3
                className="text-white mt-3"
                style={{
                  fontFamily: "Nunito, sans-serif",
                  fontSize: "1.1rem",
                  fontWeight: 800,
                  lineHeight: 1.3,
                }}
              >
                Chega de caderninho perdido!
              </h3>
              <p
                className="text-white/80 mt-2"
                style={{
                  fontFamily: "Nunito, sans-serif",
                  fontSize: "0.95rem",
                  fontWeight: 500,
                  lineHeight: 1.6,
                }}
              >
                Com o Hooky, você tem tudo organizado — do
                novelo à peça pronta.
              </p>
            </div>
            <AppStoreBadge />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ---------- Organize · Planeje · Crie (no phone images) ----------
function VibeSection() {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const pills = [
    { label: "Organize", bg: "#c656df" },
    { label: "Planeje", bg: "#f26513" },
    { label: "Crie", bg: "#7569ea" },
  ];

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-28"
      style={{ backgroundColor: "#f5f4ff" }}
    >
      <GridBg />

      <Sparkle
        size={24}
        color="#6148df"
        className="absolute top-12 right-20 opacity-60"
        delay={0}
      />
      <Sparkle
        size={14}
        color="#9e99f2"
        className="absolute top-20 right-32 opacity-40"
        delay={1}
      />
      <Sparkle
        size={18}
        color="#c656df"
        className="absolute bottom-16 left-16 opacity-50"
        delay={0.5}
      />
      <Sparkle
        size={12}
        color="#f26513"
        className="absolute bottom-24 right-24 opacity-40"
        delay={2}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-5 md:px-8 flex flex-col items-center text-center">
        {/* Animated pills */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          {pills.map((p, i) => (
            <motion.span
              key={p.label}
              className="text-white rounded-full cursor-default"
              style={{
                fontFamily: "Nunito, sans-serif",
                fontSize: "clamp(1.6rem, 5vw, 2.8rem)",
                fontWeight: 900,
                backgroundColor: p.bg,
                padding: "0.3em 0.8em",
              }}
              initial={{
                opacity: 0,
                scale: 0.7,
                rotate: -8 + i * 8,
              }}
              animate={
                inView
                  ? { opacity: 1, scale: 1, rotate: 0 }
                  : {}
              }
              transition={{
                duration: 0.55,
                delay: i * 0.12,
                type: "spring",
                stiffness: 260,
                damping: 18,
              }}
              whileHover={{
                scale: 1.08,
                rotate: i % 2 === 0 ? -3 : 3,
              }}
            >
              {p.label}
            </motion.span>
          ))}
        </div>

        <motion.p
          className="text-[#555] max-w-lg"
          style={{
            fontFamily: "Nunito, sans-serif",
            fontSize: "1.1rem",
            fontWeight: 500,
            lineHeight: 1.75,
          }}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.42 }}
        >
          Cada detalhe pensado pra quem leva o crochê a sério —
          e também pra quem está começando com calma. Do novelo
          à peça pronta, sem se perder no caminho.
        </motion.p>

        {/* Decorative divider yarn */}
        <motion.div
          className="mt-16 flex items-center gap-3"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={inView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{
            duration: 0.8,
            delay: 0.6,
            ease: "easeOut",
          }}
          style={{ transformOrigin: "center" }}
        >
          {[
            "#c656df",
            "#7569ea",
            "#9e99f2",
            "#f26513",
            "#a0bf2a",
            "#9e99f2",
            "#c656df",
          ].map((c, i) => (
            <div
              key={i}
              className="rounded-full"
              style={{
                width: 14 - Math.abs(i - 3) * 1.5,
                height: 14 - Math.abs(i - 3) * 1.5,
                backgroundColor: c,
                opacity: 0.85,
              }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ---------- Screenshots (side by side phones) ----------
function Screenshots() {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: "-120px",
  });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-24 bg-white"
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-col items-center">
        <motion.p
          className="text-[#7569ea] mb-2"
          style={{
            fontFamily: "Nunito, sans-serif",
            fontSize: "1rem",
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Veja na prática
        </motion.p>
        <motion.h2
          className="text-[#3d3d3d] text-center mb-16"
          style={{
            fontFamily: "Nunito, sans-serif",
            fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
            fontWeight: 900,
            lineHeight: 1.2,
          }}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Feito com carinho, pra quem cria com carinho
        </motion.h2>

        <div className="flex flex-col sm:flex-row items-end justify-center gap-8 lg:gap-14">
          {/* Phone 1 */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotate: -6 }}
            animate={
              inView ? { opacity: 1, x: 0, rotate: -4 } : {}
            }
            transition={{
              duration: 0.75,
              delay: 0.15,
              ease: "easeOut",
            }}
            whileHover={{ rotate: -1, scale: 1.03 }}
            style={{
              filter:
                "drop-shadow(0 28px 52px rgba(97,72,223,0.22))",
            }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <img
                src={img1}
                alt="Hooky — organize seus projetos"
                className="w-52 md:w-64 rounded-[3rem] object-contain"
                style={{ maxHeight: "520px" }}
              />
            </motion.div>
          </motion.div>

          {/* Phone 2 */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotate: 6 }}
            animate={
              inView ? { opacity: 1, x: 0, rotate: 4 } : {}
            }
            transition={{
              duration: 0.75,
              delay: 0.28,
              ease: "easeOut",
            }}
            whileHover={{ rotate: 1, scale: 1.03 }}
            style={{
              filter:
                "drop-shadow(0 28px 52px rgba(97,72,223,0.22))",
            }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.7,
              }}
            >
              <img
                src={img2}
                alt="Hooky — contadores e receitas"
                className="w-52 md:w-64 rounded-[3rem] object-contain"
                style={{ maxHeight: "520px" }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ---------- Mascot / CTA ----------
function MascotSection() {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: "-120px",
  });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-24"
      style={{
        background:
          "linear-gradient(160deg, #c9c4f5 0%, #9e99f2 50%, #7569ea 100%)",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-15"
        style={{
          backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
          backgroundSize: "100px 100px",
        }}
      />

      <Sparkle
        size={22}
        color="white"
        className="absolute top-16 right-24 opacity-50"
        delay={0.3}
      />
      <Sparkle
        size={14}
        color="white"
        className="absolute bottom-20 left-20 opacity-40"
        delay={1.1}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-8 flex flex-col lg:flex-row items-center gap-12">
        {/* Mascot */}
        <motion.div
          className="flex-shrink-0 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.img
            src={imgCatMascot}
            alt="Mascote do Hooky — gatinho crochê"
            className="w-72 md:w-96 object-contain select-none"
            style={{
              filter:
                "drop-shadow(0 16px 40px rgba(0,0,0,0.2))",
            }}
            animate={{ y: [0, -16, 0] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Text */}
        <div className="text-center lg:text-left">
          <motion.h2
            className="text-white mb-6"
            style={{
              fontFamily: "Nunito, sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              fontWeight: 900,
              lineHeight: 1.15,
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Para quem cria
            <br />
            com as mãos
            <br />e o coração.
          </motion.h2>
          <motion.p
            className="text-white/80 mb-8 max-w-sm mx-auto lg:mx-0"
            style={{
              fontFamily: "Nunito, sans-serif",
              fontSize: "1.05rem",
              fontWeight: 500,
              lineHeight: 1.7,
            }}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.32 }}
          >
            Foto de referência que some, contador que reinicia
            sem querer, caderninho perdido — esquece. Com o
            Hooky é tudo num só lugar.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.44 }}
          >
            <AppStoreBadge large />
          </motion.div>
          <motion.p
            className="mt-4 text-white/55"
            style={{
              fontFamily: "Nunito, sans-serif",
              fontSize: "0.85rem",
              fontWeight: 500,
            }}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            * Todos os recursos exigem assinatura.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

// ---------- Footer ----------
function Footer() {
  return (
    <footer className="bg-[#3d3d3d] text-white py-10">
      <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-[22%] overflow-hidden flex-shrink-0">
            <Frame88 />
          </div>
          <span
            className="font-black text-lg"
            style={{ fontFamily: "Nunito, sans-serif" }}
          >
            Hooky
          </span>
        </div>
        <div
          className="flex flex-col sm:flex-row items-center gap-4 text-white/60 text-sm text-center"
          style={{ fontFamily: "Nunito, sans-serif" }}
        >
          <span>
            © 2025 Hooky. Todos os direitos reservados.
          </span>
          <span className="hidden sm:inline">·</span>
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            App Store
          </a>
          <span className="hidden sm:inline">·</span>
          <a
            href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Termos de Uso (Apple EULA)
          </a>
        </div>
      </div>
    </footer>
  );
}

// ---------- Main ----------
export default function App() {
  return (
    <div
      className="min-h-screen"
      style={{ fontFamily: "Nunito, sans-serif" }}
    >
      <Navbar />
      <Hero />
      <Features />
      <VibeSection />
      <Screenshots />
      <MascotSection />
      <Footer />
    </div>
  );
}