<template>
  <main class="flex-1 overflow-y-auto p-4 md:p-12 bg-slate-950/50">
    <div class="max-w-6xl mx-auto parchment p-8 md:p-12 text-[#1a1a1a] min-h-screen shadow-2xl">
      <!-- Newspaper Header -->
      <header class="text-center mb-8 pb-6 border-b-4 border-double border-black">
        <div class="mb-2 text-[8px] font-bold tracking-widest uppercase">
          Est. 1743 • The Wizarding World's Beguiling Broadsheet of Choice
        </div>
        <h1 class="font-serif text-6xl md:text-8xl font-black uppercase tracking-tighter mb-3 leading-none">
          The Daily Prophet
        </h1>
        <div class="flex justify-between border-t-2 border-b border-black px-4 py-2 text-[10px] md:text-xs font-bold">
          <span>VOL. CCXXVI ... NO. 724</span>
          <span class="uppercase">{{ new Date().toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric' }) }}</span>
          <span>PRICE: 5 SICKLES</span>
        </div>
      </header>

      <!-- Main Article -->
      <article class="mb-12">
        <div class="mb-6">
          <h2 class="font-serif text-3xl md:text-5xl font-black leading-tight mb-3 uppercase border-b-2 border-black pb-2">
            Ministry Tightens Security as Gringotts Reports "Spectral Glitch"
          </h2>
          <div class="flex items-center space-x-4 mb-4 italic text-xs md:text-sm">
            <span class="font-bold">By Rita Skeeter</span>
            <span>•</span>
            <span>Special Correspondent, Diagon Alley Bureau</span>
          </div>
        </div>

        <img src="https://images.unsplash.com/photo-1565372195458-9de0b320ef04?w=1200&auto=format&fit=crop" alt="Gringotts Bank" class="w-full grayscale contrast-125 brightness-95 mb-4 border-4 border-black">
        <p class="text-xs italic text-center mb-6 -mt-2">
          Gringotts Wizarding Bank, Diagon Alley — Photographed Tuesday evening
        </p>

        <div class="newspaper-columns text-sm md:text-base leading-relaxed">
          <p class="mb-4">
            <span class="float-left text-7xl md:text-8xl font-serif font-bold leading-none mr-2 mt-1">T</span>
            <span class="font-bold">HE WIZARDING WORLD</span> was rocked yesterday by unconfirmed reports of a security breach at Gringotts Wizarding Bank, though Ministry officials have been quick to dismiss the claims as "baseless scaremongering."
          </p>
          <p class="mb-4 font-semibold italic border-l-4 border-black pl-4 my-6">"It was nothing more than a routine maintenance check of the anti-thief charms," stated a goblin spokesperson who refused to be named.</p>
          <p class="mb-4">However, sources within the Department of Magical Law Enforcement suggest that the ancient protection runes may be reacting to a localized surge in dark energy detected near the high-security vaults late Monday evening.</p>
          <p class="mb-4">Eye-witnesses describe seeing "shimmering silhouettes" and hearing unexplained screeching sounds emanating from the lower levels of the bank. Madam Malkin, whose robes shop sits adjacent to the marble-pillared institution, reported that her shop windows rattled violently at approximately 11:47 PM.</p>
          <p class="mb-4">The Daily Prophet has learned that several high-profile vault owners, including members of ancient pureblood families, were summoned to Diagon Alley in the early hours of Tuesday morning for what officials termed "administrative verification" — a phrase many fear is a euphemism for loss of property.</p>
          <p class="mb-4">Gringotts' Head Goblin, Ragnok III, declined to comment when approached outside the Leaky Cauldron yesterday afternoon, though he was observed in animated discussion with senior Aurors.</p>
          <p class="font-bold">The Ministry of Magic has assured the public that "all appropriate measures" are being taken, though what those measures entail remains unclear.</p>
        </div>
      </article>

      <!-- Secondary Articles -->
      <div class="grid md:grid-cols-3 gap-6 border-t-4 border-black pt-8">
        <article class="border-r border-black pr-4">
          <h3 class="font-serif text-xl font-bold uppercase mb-2 border-b border-black pb-1">Quidditch Scandal</h3>
          <p class="text-xs leading-relaxed mb-2">Puddlemere United faces sanctions after allegations of illegal broom modifications surface.</p>
          <p class="text-[10px] italic">Continued on page 7</p>
        </article>

        <article class="border-r border-black pr-4">
          <h3 class="font-serif text-xl font-bold uppercase mb-2 border-b border-black pb-1">Potion Shortage</h3>
          <p class="text-xs leading-relaxed mb-2">St Mungo's warns of critical shortage in Skele-Gro supplies amid winter ailments surge.</p>
          <p class="text-[10px] italic">Page 12</p>
        </article>

        <article>
          <h3 class="font-serif text-xl font-bold uppercase mb-2 border-b border-black pb-1">Weather Watch</h3>
          <p class="text-xs leading-relaxed mb-2">Meteorological Office predicts unexpected snowfall in Cornwall due to rogue weather charm.</p>
          <p class="text-[10px] italic">Full forecast, page 15</p>
        </article>
      </div>

      <!-- Footer -->
      <footer class="mt-12 pt-6 border-t-4 border-double border-black text-center">
        <div class="text-[10px] space-y-1">
          <p class="font-bold uppercase tracking-wide">Owl Post Subscriptions Available</p>
          <p>Diagon Alley • Hogsmeade • International Deliveries</p>
          <p class="italic">Published Daily (except Sundays and Public Holidays)</p>
        </div>
      </footer>
    </div>
  </main>
</template>

<style scoped>
/* Parchment/Paper texture */
.parchment {
  background: linear-gradient(to bottom,
      #f4f1e8 0%,
      #f0ebe0 50%,
      #ebe6d8 100%);
  box-shadow:
    inset 0 0 100px rgba(101, 67, 33, 0.1),
    0 10px 50px rgba(0, 0, 0, 0.3);
}

/* Newspaper columns */
.newspaper-columns {
  column-count: 1;
  column-gap: 2rem;
  column-rule: 1px solid rgba(0, 0, 0, 0.2);
  text-align: justify;
  hyphens: auto;
}

@media (min-width: 768px) {
  .newspaper-columns {
    column-count: 2;
  }
}

/* Typography enhancements */
h1,
h2,
h3 {
  font-family: 'Playfair Display', 'Times New Roman', serif;
  text-rendering: optimizeLegibility;
}

/* Vintage newspaper feel */
article {
  position: relative;
}

article::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image:
    repeating-linear-gradient(0deg,
      transparent,
      transparent 1px,
      rgba(0, 0, 0, 0.01) 2px);
  pointer-events: none;
}

/* Print-like text */
p {
  font-family: 'Georgia', 'Times New Roman', serif;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
}

/* Prevent column breaks in unwanted places */
.newspaper-columns p {
  break-inside: avoid;
  orphans: 3;
  widows: 3;
}
</style>
