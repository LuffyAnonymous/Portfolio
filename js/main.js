:root {
  --bg: #040b1b;
  --panel: rgba(11, 22, 48, 0.55);
  --line: rgba(150, 190, 255, 0.18);
  --text: #f5f7ff;
  --muted: #b9c7eb;
  --brand: #4f8cff;
  --brand2: #7ad8ff;
  --glow: 0 0 40px rgba(79, 140, 255, 0.35);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  color: var(--text);
  background:
    radial-gradient(circle at 20% 15%, rgba(95, 121, 255, 0.18), transparent 25%),
    radial-gradient(circle at 80% 30%, rgba(85, 183, 255, 0.14), transparent 24%),
    linear-gradient(180deg, #030817 0%, #06112a 45%, #040b1b 100%);
  overflow-x: hidden;
}

body::before {
  content: "";
  position: fixed;
  inset: 0;
  background:
    radial-gradient(circle at 30% 40%, rgba(255, 255, 255, 0.14) 0 1px, transparent 1.6px),
    radial-gradient(circle at 75% 60%, rgba(255, 255, 255, 0.12) 0 1px, transparent 1.6px),
    radial-gradient(circle at 10% 75%, rgba(255, 255, 255, 0.10) 0 1px, transparent 1.6px),
    radial-gradient(circle at 65% 15%, rgba(255, 255, 255, 0.10) 0 1px, transparent 1.6px);
  background-size: 220px 220px, 260px 260px, 180px 180px, 200px 200px;
  opacity: 0.45;
  pointer-events: none;
}

body::after {
  content: "";
  position: fixed;
  inset: 0;
  background:
    radial-gradient(circle at 50% 50%, rgba(120, 170, 255, 0.06), transparent 60%),
    linear-gradient(120deg, transparent 25%, rgba(122, 216, 255, 0.10) 48%, transparent 62%),
    linear-gradient(300deg, transparent 20%, rgba(79, 140, 255, 0.08) 45%, transparent 70%);
  mix-blend-mode: screen;
  animation: drift 16s linear infinite alternate;
  pointer-events: none;
}

.container {
  width: min(1280px, calc(100% - 48px));
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.nav {
  position: sticky;
  top: 0;
  z-index: 20;
  background: rgba(4, 10, 24, 0.55);
  backdrop-filter: blur(18px);
  border-bottom: 1px solid rgba(140, 180, 255, 0.12);
}

.nav-inner {
  min-height: 84px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  color: #fff;
}

.logo-icon {
  width: 48px;
  height: 48px;
  border-radius: 16px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, var(--brand), var(--brand2));
  box-shadow: var(--glow);
  font-size: 1.2rem;
  color: #081121;
  font-weight: 900;
}

.nav-links {
  display: flex;
  gap: 12px;
  align-items: center;
  flex-wrap: wrap;
}

.nav-links a {
  color: var(--muted);
  padding: 10px 14px;
  border-radius: 999px;
  transition: 0.25s ease;
  text-decoration: none;
}

.nav-links a:hover {
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 56px;
  padding: 0 26px;
  border-radius: 18px;
  font-weight: 700;
  border: 1px solid transparent;
  transition: 0.25s ease;
  text-decoration: none;
  color: inherit;
}

.btn-primary {
  background: linear-gradient(135deg, var(--brand), var(--brand2));
  color: #081121 !important;
  box-shadow: 0 14px 34px rgba(79, 140, 255, 0.3);
}

.btn-secondary {
  border-color: rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.04);
  color: #fff;
}

.btn:hover {
  transform: translateY(-2px);
}

.hero {
  min-height: calc(100vh - 84px);
  display: grid;
  grid-template-columns: minmax(0, 1.12fr) minmax(360px, 0.88fr);
  gap: 56px;
  align-items: center;
  padding: 44px 0 48px;
}

.hero-copy {
  max-width: 760px;
}

.eyebrow {
  font-size: clamp(1.4rem, 2.8vw, 2.4rem);
  color: #eef4ff;
  margin: 0 0 14px;
  opacity: 0.95;
}

h1 {
  margin: 0;
  font-size: clamp(4rem, 7vw, 6.2rem);
  line-height: 0.92;
  letter-spacing: -0.055em;
  max-width: 860px;
}

.lead {
  max-width: 700px;
  margin: 24px 0 0;
  color: var(--muted);
  font-size: 1.08rem;
  line-height: 1.8;
}

.hero-actions {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  margin-top: 28px;
}

.showcase {
  position: relative;
  min-height: 620px;
  display: grid;
  place-items: center;
}

.light-sweep {
  position: absolute;
  inset: 6% -10% 4% -6%;
  background:
    radial-gradient(circle at 50% 50%, rgba(110, 165, 255, 0.08), transparent 44%),
    linear-gradient(140deg, transparent 28%, rgba(130, 180, 255, 0.16) 46%, transparent 62%),
    linear-gradient(25deg, transparent 35%, rgba(122, 216, 255, 0.12) 50%, transparent 65%);
  filter: blur(4px);
  animation: glowMove 8s ease-in-out infinite alternate;
  pointer-events: none;
}

.stack {
  position: relative;
  width: min(440px, 100%);
  aspect-ratio: 0.78;
  perspective: 1200px;
}

.ghost-card,
.main-card {
  position: absolute;
  inset: 0;
  border-radius: 34px;
  background: linear-gradient(180deg, rgba(15, 32, 72, 0.45), rgba(9, 18, 39, 0.68));
  border: 1px solid rgba(173, 213, 255, 0.22);
  box-shadow: 0 22px 60px rgba(0, 0, 0, 0.34), 0 0 35px rgba(116, 170, 255, 0.12);
  backdrop-filter: blur(14px);
}

.ghost-card {
  transform: translate(64px, 40px) scale(0.93);
  opacity: 0.55;
}

.ghost-card-2 {
  transform: translate(104px, 98px) scale(0.86);
  opacity: 0.3;
}

.main-card {
  padding: 18px;
  overflow: hidden;
  z-index: 2;
}

.flip-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 1s ease;
}

.flip-wrap.is-flipped {
  transform: rotateY(180deg);
}

.face {
  position: absolute;
  inset: 0;
  backface-visibility: hidden;
  border-radius: 28px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: linear-gradient(180deg, rgba(10, 18, 36, 0.75), rgba(8, 15, 30, 0.96));
}

.face.back {
  transform: rotateY(180deg);
}

.photo-area {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.photo-area img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.avatar-shell {
  height: 100%;
  display: grid;
  place-items: center;
  padding: 28px;
  background:
    radial-gradient(circle at 50% 22%, rgba(255, 196, 104, 0.20), transparent 28%),
    linear-gradient(180deg, rgba(12, 20, 42, 0.88), rgba(7, 14, 28, 0.98));
}

.avatar-ring {
  width: 240px;
  height: 240px;
  border-radius: 50%;
  padding: 4px;
  background: linear-gradient(135deg, #ffcc73, #ff9d42 55%, #7ad8ff);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.34), 0 0 40px rgba(255, 180, 90, 0.18);
}

.avatar-ring img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  border-radius: 50%;
  background: #0a1327;
}

.section {
  padding: 76px 0;
}

.split-feature {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 56px;
  align-items: center;
}

.mini-card-zone {
  position: relative;
  min-height: 520px;
  display: grid;
  place-items: center;
}

.mini-stack {
  position: relative;
  width: min(360px, 86%);
  aspect-ratio: 0.82;
}

.mini-back,
.mini-front {
  position: absolute;
  inset: 0;
  border-radius: 28px;
  background: linear-gradient(180deg, rgba(15, 32, 72, 0.4), rgba(9, 18, 39, 0.72));
  border: 1px solid rgba(173, 213, 255, 0.2);
  backdrop-filter: blur(12px);
  box-shadow: 0 22px 60px rgba(0, 0, 0, 0.3);
}

.mini-back {
  transform: translate(-34px, 24px) scale(0.92);
  opacity: 0.72;
}

.mini-front {
  padding: 16px;
  overflow: hidden;
}

.avatar-panel {
  position: absolute;
  inset: 0;
  border-radius: 22px;
  overflow: hidden;
  background:
    radial-gradient(circle at 50% 12%, rgba(255, 190, 92, 0.42), transparent 24%),
    linear-gradient(180deg, rgba(12, 20, 42, 0.86), rgba(7, 14, 28, 0.98));
  display: grid;
  place-items: center;
}

.avatar-panel::before {
  content: "";
  position: absolute;
  top: 48px;
  width: 220px;
  height: 220px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 173, 74, 0.62), rgba(255, 173, 74, 0.18) 55%, transparent 72%);
  filter: blur(8px);
}

.avatar-panel img {
  position: relative;
  z-index: 2;
  width: 76%;
  max-width: 260px;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.32);
  background: #0b1428;
}

.feature-emphasis {
  color: #fff;
  font-weight: 800;
}

.section-title {
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 20px;
  flex-wrap: wrap;
}

.section-title p {
  margin: 0;
  max-width: 620px;
}

h2 {
  margin: 0 0 18px;
  font-size: clamp(2.1rem, 4vw, 3.2rem);
  line-height: 1.05;
  letter-spacing: -0.04em;
  max-width: 640px;
}

.section p {
  color: var(--muted);
  line-height: 1.85;
  font-size: 1.05rem;
  max-width: 600px;
}

.services-grid,
.projects-grid,
.results-grid {
  display: grid;
  gap: 18px;
}

.services-grid {
  grid-template-columns: repeat(4, 1fr);
}

.projects-grid {
  grid-template-columns: repeat(2, 1fr);
}

.results-grid {
  grid-template-columns: repeat(4, 1fr);
}

.glass {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 26px;
  backdrop-filter: blur(14px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
  transition: 0.25s ease;
}

.glass:hover {
  transform: translateY(-6px);
  box-shadow: 0 28px 60px rgba(0, 0, 0, 0.24);
}

.service,
.project,
.result-card,
.contact-card {
  padding: 24px;
}

.service-icon {
  width: 56px;
  height: 56px;
  border-radius: 18px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, rgba(79, 140, 255, 0.22), rgba(122, 216, 255, 0.18));
  border: 1px solid rgba(255, 255, 255, 0.08);
  margin-bottom: 16px;
  font-size: 1.35rem;
}

.service h3,
.project h3 {
  margin: 0 0 10px;
}

.service p,
.project p,
.contact-card p,
.result-card span {
  color: var(--muted);
  line-height: 1.75;
}

.project-tag {
  display: inline-flex;
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  font-size: 0.84rem;
  color: #d7e6ff;
  margin-bottom: 14px;
}

.result-card {
  text-align: center;
}

.result-card strong {
  display: block;
  font-size: 2.15rem;
  margin-bottom: 8px;
  background: linear-gradient(135deg, #fff, #87dcff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.contact-wrap {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
}

.contact-link {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 14px;
  padding: 16px 18px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.06);
  margin-top: 14px;
}

.contact-link span {
  color: var(--muted);
}

.reveal {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

@keyframes drift {
  from {
    transform: translateX(-2%) translateY(-1%);
  }
  to {
    transform: translateX(2%) translateY(1%);
  }
}

@keyframes glowMove {
  from {
    transform: translateX(-10px) translateY(8px);
  }
  to {
    transform: translateX(12px) translateY(-10px);
  }
}

@media (max-width: 1180px) {
  .hero,
  .split-feature,
  .contact-wrap {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .showcase {
    min-height: 560px;
  }

  .services-grid,
  .results-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 720px) {
  .nav-links {
    display: none;
  }

  .services-grid,
  .results-grid {
    grid-template-columns: 1fr;
  }

  h1 {
    font-size: clamp(3rem, 12vw, 4.6rem);
  }

  .stack {
    width: min(360px, 100%);
  }

  .ghost-card {
    transform: translate(36px, 28px) scale(0.93);
  }

  .ghost-card-2 {
    transform: translate(70px, 72px) scale(0.85);
  }

  .avatar-ring {
    width: 200px;
    height: 200px;
  }
}
