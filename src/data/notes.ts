export interface Chapter {
  id: string;
  title: string;
  summary: string;
  content: string;
  questions?: string;
  formulas?: string;
}

export interface Subject {
  name: string;
  class11: Chapter[];
  class12: Chapter[];
}

export const NEET_NOTES: Record<string, Subject> = {
  biology: {
    name: "Biology",
    class11: [
      {
        id: "b11-1",
        title: "The Living World",
        summary: "Covers the fundamental characteristics of life, the rules of nomenclature, and the hierarchical classification of organisms using various taxonomical aids.",
        content: `# The Living World

## Characteristics of Living Organisms
- **Growth**: Increase in mass and number. In plants, growth is continuous; in animals, it's up to a certain age.
- **Reproduction**: Production of progeny. (Note: Mules, sterile worker bees don't reproduce but are living).
- **Metabolism**: Sum total of all chemical reactions.
- **Consciousness**: Ability to sense surroundings and respond to stimuli. (Defining property).

## Nomenclature & Taxonomy
- **Biodiversity**: 1.7-1.8 million species described.
- **Binomial Nomenclature**: Carolus Linnaeus.
  - *Genus* (Capitalized) + *Specific Epithet* (Small).
  - Latin origin, Italics when printed.
- **Taxonomic Categories**: Kingdom > Phylum > Class > Order > Family > Genus > Species.

> **Important Point**: Species is the basic unit of classification. As we go up from species to kingdom, the number of common characteristics decreases.

## Taxonomical Aids
- **Herbarium**: Dried, pressed specimens on sheets.
- **Museum**: Preserved specimens in jars or stuffed.
- **Key**: Based on contrasting characters in a pair called **couplet**. Each statement is a **lead**.`,
        questions: `### Practice Questions
**Q1. The defining characteristic of living beings is:**
A) Growth B) Reproduction C) Metabolism D) Response to external stimuli
**Answer: D**.

**Q2. ICBN stands for:**
A) International Code for Botanical Nomenclature
B) International Council for Botanical Nomenclature
**Answer: A**.`
      },
      {
        id: "b11-2",
        title: "Biological Classification",
        summary: "Explores the five-kingdom system proposed by Whittaker, detailing the characteristics of Monera, Protista, Fungi, Plantae, and Animalia, along with viruses and lichens.",
        content: `# Biological Classification

## Five Kingdom System (R.H. Whittaker, 1969)
Criteria: Cell structure, body organization, mode of nutrition, reproduction, and phylogenetic relationships.

### 1. Kingdom Monera
- **Bacteria**: Sole members.
- **Archaebacteria**: Halophiles (salt), Thermoacidophiles (hot springs), Methanogens (marshy/gut of ruminants).
- **Eubacteria**: Cyanobacteria (BGA) have chlorophyll-a. Heterotrophic bacteria are most abundant.

### 2. Kingdom Protista
- All single-celled eukaryotes.
- **Chrysophytes**: Diatoms (Chief producers in oceans).
- **Dinoflagellates**: Red tides (Gonyaulax).
- **Euglenoids**: Mixotrophic (Euglena).
- **Protozoans**: Amoeboid, Flagellated, Ciliated, Sporozoans (Plasmodium).

### 3. Kingdom Fungi
- Heterotrophic, cell wall of **Chitin**.
- Classes: Phycomycetes, Ascomycetes (Sac fungi), Basidiomycetes (Mushrooms), Deuteromycetes (Imperfect fungi).

## Viruses, Viroids, Prions & Lichens
- **Viruses**: Non-cellular, genetic material (DNA or RNA) + Protein coat (Capsid).
- **Viroids**: Free RNA, no protein coat (T.O. Diener).
- **Lichens**: Symbiotic association between Algae (Phycobiont) and Fungi (Mycobiont).`,
        questions: `**Q1. Chief producers in the oceans are:**
A) Dinoflagellates B) Diatoms C) Euglenoids D) Cyanobacteria
**Answer: B**.`
      },
      {
        id: "b11-3",
        title: "Plant Kingdom",
        summary: "Classifies plants into Algae, Bryophytes, Pteridophytes, Gymnosperms, and Angiosperms, highlighting their life cycles and reproductive structures.",
        content: `# Plant Kingdom

## Algae
- Chlorophyceae (Green), Phaeophyceae (Brown), Rhodophyceae (Red).
- **Brown Algae**: Fucoxanthin, Algin.
- **Red Algae**: Phycoerythrin, Agar.

## Bryophytes
- "Amphibians of the plant kingdom".
- Liverworts and Mosses.
- Dominant phase is **Gametophyte**.

## Pteridophytes
- First terrestrial plants with vascular tissues (Xylem/Phloem).
- Dominant phase is **Sporophyte**.
- **Heterospory**: Selaginella and Salvinia (Precursor to seed habit).

## Gymnosperms
- Naked seeds.
- *Sequoia* is one of the tallest trees.
- Mycorrhiza in *Pinus*, Coralloid roots in *Cycas*.`,
      },
      {
        id: "b11-4",
        title: "Animal Kingdom",
        summary: "Detailed classification of animals based on level of organization, symmetry, coelom, and specific phylum characteristics from Porifera to Chordata.",
        content: `# Animal Kingdom

## Basis of Classification
- **Levels of Organization**: Cellular (Porifera), Tissue (Coelenterata), Organ (Platyhelminthes), Organ System (Aschelminthes onwards).
- **Symmetry**: Radial (Coelenterata, Ctenophora, Echinodermata adults) vs Bilateral (others).
- **Coelom**: Acoelomate (Platyhelminthes), Pseudocoelomate (Aschelminthes), Coelomate (Annelida onwards).

## Key Phyla
- **Porifera**: Water canal system, Choanocytes (collar cells).
- **Coelenterata**: Cnidoblasts, Polyp and Medusa forms (Metagenesis in Obelia).
- **Platyhelminthes**: Flame cells for excretion, dorso-ventrally flattened.
- **Aschelminthes**: Roundworms, sexual dimorphism (females longer).
- **Chordata**: Notochord, dorsal hollow nerve cord, paired pharyngeal gill slits.`,
      },
      {
        id: "b11-5",
        title: "Cell Cycle and Cell Division",
        summary: "Explains the phases of the cell cycle (Interphase and M-phase) and the processes of Mitosis and Meiosis with their significance.",
        content: `# Cell Cycle and Cell Division

## Cell Cycle Phases
- **Interphase**: G1 (Growth), S (DNA Replication), G2 (Preparation for Mitosis).
- **M Phase**: Prophase, Metaphase, Anaphase, Telophase.

## Mitosis
- Equational division.
- Occurs in somatic cells.
- **Metaphase**: Chromosomes align at the equatorial plate.

## Meiosis
- Reductional division.
- Occurs in germ cells.
- **Prophase I**: Leptotene, Zygotene (Synapsis), Pachytene (Crossing over), Diplotene (Chiasmata), Diakinesis.`,
      }
    ],
    class12: [
      {
        id: "b12-1",
        title: "Principles of Inheritance",
        summary: "Explains Mendelian genetics, inheritance patterns like incomplete dominance and codominance, and chromosomal disorders in humans.",
        content: `# Principles of Inheritance and Variation

## Mendel's Laws
- **Law of Dominance**: One allele masks another.
- **Law of Segregation**: Alleles separate during gamete formation.
- **Law of Independent Assortment**: Genes for different traits segregate independently.

## Exceptions to Mendel
- **Incomplete Dominance**: Snapdragon (1:2:1 ratio in F2).
- **Codominance**: ABO Blood groups.
- **Pleiotropy**: Single gene, multiple effects (Phenylketonuria).

## Genetic Disorders
- **Mendelian**: Haemophilia, Sickle-cell anaemia, Phenylketonuria, Thalassemia.
- **Chromosomal**: Down's (Trisomy 21), Klinefelter's (XXY), Turner's (XO).`,
      },
      {
        id: "b12-2",
        title: "Human Reproduction",
        summary: "Covers the male and female reproductive systems, gametogenesis, menstrual cycle, fertilization, and embryonic development.",
        content: `# Human Reproduction

## Male Reproductive System
- Testes located in **Scrotum** (maintains 2-2.5°C lower temp).
- Seminiferous tubules → Rete testis → Vasa efferentia → Epididymis → Vas deferens.

## Female Reproductive System
- Ovaries, Oviducts (Fallopian tubes), Uterus, Cervix, Vagina.
- **Menstrual Cycle**: Menstrual phase → Follicular phase → Ovulatory phase (LH surge) → Luteal phase.

## Gametogenesis
- **Spermatogenesis**: Continuous from puberty.
- **Oogenesis**: Initiated during embryonic development, arrested at Prophase-I until puberty.`,
      },
      {
        id: "b12-3",
        title: "Biotechnology: Principles",
        summary: "Introduces the tools and techniques of biotechnology, including recombinant DNA technology, restriction enzymes, and PCR.",
        content: `# Biotechnology: Principles and Processes

## Tools of Recombinant DNA Technology
- **Restriction Enzymes**: Molecular scissors (e.g., EcoRI).
- **Polymerase Chain Reaction (PCR)**: Denaturation, Annealing, Extension.
- **Vectors**: Plasmids (pBR322), Bacteriophages.

## Processes
1. Isolation of DNA.
2. Fragmentation by restriction endonucleases.
3. Isolation of desired DNA fragment.
4. Ligation into vector.
5. Transfer into host.
6. Culturing host cells at large scale (Bioreactors).`,
      }
    ]
  },
  physics: {
    name: "Physics",
    class11: [
      {
        id: "p11-1",
        title: "Units and Measurements",
        summary: "Introduces the SI system, dimensional analysis, and the concept of errors and significant figures in physical measurements.",
        content: `# Units and Measurements

## SI Units
- 7 Base units: m, kg, s, A, K, mol, cd.
- 2 Supplementary units: Radian (Plane angle), Steradian (Solid angle).

## Dimensional Analysis
- Used to check consistency of equations and derive relations.
- **Limitations**: Cannot find dimensionless constants, fails for sums/differences.

## Errors
- **Absolute Error**: |Value_true - Value_measured|
- **Relative Error**: Δa / a_mean
- **Percentage Error**: Relative error × 100%`,
        formulas: `### Formula Sheet
- **Density**: [ML⁻³]
- **Velocity**: [LT⁻¹]
- **Acceleration**: [LT⁻²]
- **Force**: [MLT⁻²]
- **Work/Energy**: [ML²T⁻²]
- **Power**: [ML²T⁻³]
- **Pressure**: [ML⁻¹T⁻²]
- **Universal Gravitational Constant (G)**: [M⁻¹L³T⁻²]`
      },
      {
        id: "p11-2",
        title: "Laws of Motion",
        summary: "Covers Newton's three laws of motion, the concept of inertia, momentum, impulse, and the dynamics of circular motion and friction.",
        content: `# Laws of Motion

## Newton's Laws
1. **First Law**: Inertia. An object stays at rest or uniform motion unless acted upon by a force.
2. **Second Law**: F = ma (Force = Rate of change of momentum).
3. **Third Law**: Action and Reaction are equal and opposite.

## Friction
- Static Friction (f_s ≤ μ_sN)
- Kinetic Friction (f_k = μ_kN)
- Rolling Friction is the least.

## Circular Motion
- Centripetal Force: F_c = mv²/r
- Banking of Roads: v_max = √(rg tanθ)`,
        formulas: `# Formula Sheet
- **Momentum**: p = mv
- **Impulse**: J = FΔt = Δp
- **Force**: F = dp/dt
- **Apparent Weight in Lift**:
  - Upward: W = m(g+a)
  - Downward: W = m(g-a)
- **Centripetal Acceleration**: a_c = v²/r = ω²r`
      },
      {
        id: "p11-3",
        title: "Work, Energy and Power",
        summary: "Explores the work-energy theorem, conservative and non-conservative forces, conservation of mechanical energy, and collisions.",
        content: `# Work, Energy and Power

## Work
- W = F·s = Fs cosθ
- Work done by a variable force: W = ∫ F dx

## Energy
- **Kinetic Energy**: K = ½mv² = p²/2m
- **Potential Energy**: U = mgh (Gravitational), U = ½kx² (Spring).
- **Work-Energy Theorem**: W_net = ΔK

## Power
- P = dW/dt = F·v

## Collisions
- **Elastic**: Both Momentum and KE conserved.
- **Inelastic**: Only Momentum conserved.`,
        formulas: `# Formula Sheet
- **Work**: W = Fs cosθ
- **Kinetic Energy**: K = ½mv²
- **Potential Energy**: U = mgh
- **Power**: P = Fv
- **Coefficient of Restitution**: e = (v₂ - v₁) / (u₁ - u₂)`
      },
      {
        id: "p11-4",
        title: "Gravitation",
        summary: "Discusses Newton's law of universal gravitation, Kepler's laws, acceleration due to gravity, and the concept of escape velocity.",
        content: `# Gravitation

## Newton's Law of Gravitation
F = G m₁m₂ / r²

## Acceleration due to Gravity (g)
- At height h: g' = g(1 - 2h/R)
- At depth d: g' = g(1 - d/R)

## Kepler's Laws
1. **Law of Orbits**: Elliptical orbits.
2. **Law of Areas**: Equal areas in equal time.
3. **Law of Periods**: T² ∝ r³

## Escape Velocity
v_e = √(2GM/R) = √(2gR) ≈ 11.2 km/s for Earth.`,
        formulas: `# Formula Sheet
- **Gravitational Force**: F = Gm₁m₂/r²
- **Gravitational Potential**: V = -Gm/r
- **Orbital Velocity**: v_o = √(GM/r)
- **Escape Velocity**: v_e = √(2GM/R)`
      }
    ],
    class12: [
      {
        id: "p12-1",
        title: "Electrostatics",
        summary: "Discusses electric charges, Coulomb's law, electric fields, Gauss's law, and the concept of electric potential and capacitance.",
        content: `# Electrostatics

## Coulomb's Law
F = (1/4πε₀) * (q₁q₂/r²)

## Electric Field
- Due to point charge: E = kQ/r²
- Inside a conductor: E = 0.

## Gauss's Law
Φ = ∮ E·dA = q_in / ε₀

## Capacitance
- C = Q/V
- Parallel Plate: C = ε₀A/d
- Energy Stored: U = ½CV²`,
        formulas: `# Formula Sheet
- **Electric Field (Dipole)**:
  - Axial: E = 2kp/r³
  - Equatorial: E = kp/r³
- **Potential**: V = kQ/r
- **Capacitors in Series**: 1/C_eq = 1/C₁ + 1/C₂
- **Capacitors in Parallel**: C_eq = C₁ + C₂`
      },
      {
        id: "p12-2",
        title: "Ray Optics",
        summary: "Covers reflection, refraction, total internal reflection, lenses, prisms, and optical instruments like microscopes and telescopes.",
        content: `# Ray Optics

## Reflection
- Mirror Formula: 1/v + 1/u = 1/f
- Magnification: m = -v/u

## Refraction
- Snell's Law: n₁ sinθ₁ = n₂ sinθ₂
- **Total Internal Reflection**: Occurs when θ > θ_c, where sinθ_c = 1/n.

## Lenses
- Lens Maker's Formula: 1/f = (n-1)(1/R₁ - 1/R₂)
- Lens Formula: 1/v - 1/u = 1/f
- Power: P = 1/f (in meters).`,
        formulas: `# Formula Sheet
- **Mirror Formula**: 1/f = 1/v + 1/u
- **Lens Formula**: 1/f = 1/v - 1/u
- **Magnification**: m = f / (f+u)
- **Power of Lens**: P = 1/f
- **Prism Formula**: n = sin((A+δ_m)/2) / sin(A/2)`
      },
      {
        id: "p12-3",
        title: "Dual Nature of Radiation",
        summary: "Explores the photoelectric effect, Einstein's photoelectric equation, and the de Broglie hypothesis of matter waves.",
        content: `# Dual Nature of Radiation and Matter

## Photoelectric Effect
- Emission of electrons when light falls on a metal surface.
- **Threshold Frequency**: Minimum frequency required.
- **Einstein's Equation**: K_max = hν - Φ₀

## de Broglie Hypothesis
- Every moving particle has a wave associated with it.
- **Wavelength**: λ = h/p = h/mv`,
        formulas: `# Formula Sheet
- **Photon Energy**: E = hν = hc/λ
- **Einstein's Equation**: ½mv²_max = h(ν - ν₀)
- **de Broglie Wavelength**: λ = h / √(2mK)
- **Momentum of Photon**: p = E/c = h/λ`
      }
    ]
  },
  chemistry: {
    name: "Chemistry",
    class11: [
      {
        id: "c11-1",
        title: "Some Basic Concepts",
        summary: "Focuses on the mole concept, stoichiometry, and various concentration terms used in chemical calculations.",
        content: `# Some Basic Concepts of Chemistry

## Mole Concept
- 1 mole = 6.022 × 10²³ entities.
- Molar Volume = 22.4 L at STP.

## Stoichiometry
- **Limiting Reagent**: The reactant that is completely consumed first.

## Concentration Terms
- **Molarity (M)**: n_solute / V_solution(L)
- **Molality (m)**: n_solute / W_solvent(kg)
- **Mole Fraction (x)**: n_i / n_total`,
        formulas: `# Formula Sheet
- **Number of Moles**: n = mass / molar_mass = N / N_A = V(L) / 22.4
- **Molarity**: M = (w × 1000) / (M_w × V_ml)
- **Mass %**: (Mass of solute / Mass of solution) × 100`
      },
      {
        id: "c11-2",
        title: "Chemical Bonding",
        summary: "Explains ionic and covalent bonding, VSEPR theory, hybridization, and molecular orbital theory for predicting molecular shapes and stability.",
        content: `# Chemical Bonding and Molecular Structure

## Ionic Bond
- Formed by complete transfer of electrons.
- Favored by low Ionization Enthalpy and high Electron Gain Enthalpy.

## VSEPR Theory
- Predicts geometry based on electron pair repulsion.
- LP-LP > LP-BP > BP-BP.

## Hybridization
- sp (Linear), sp² (Trigonal Planar), sp³ (Tetrahedral), sp³d (Trigonal Bipyramidal), sp³d² (Octahedral).

## Molecular Orbital Theory (MOT)
- Bond Order = ½(N_b - N_a).
- Paramagnetic if unpaired electrons exist.`,
        formulas: `# Formula Sheet
- **Formal Charge**: V - L - ½B
- **Bond Order**: ½(N_b - N_a)
- **Dipole Moment**: μ = q × d`
      },
      {
        id: "c11-3",
        title: "Equilibrium",
        summary: "Covers chemical and ionic equilibrium, Le Chatelier's principle, pH scale, and buffer solutions.",
        content: `# Equilibrium

## Chemical Equilibrium
- Law of Mass Action.
- **Le Chatelier's Principle**: Change in concentration, pressure, or temperature shifts the equilibrium.

## Ionic Equilibrium
- **Ostwald's Dilution Law**: α = √(K_a/C)
- **pH Scale**: pH = -log[H⁺]
- **Buffer Solutions**: Resist change in pH (e.g., CH₃COOH + CH₃COONa).`,
        formulas: `# Formula Sheet
- **Equilibrium Constant**: K_p = K_c (RT)^Δn
- **pH of Acidic Buffer**: pH = pK_a + log([Salt]/[Acid])
- **Solubility Product**: K_sp = [A⁺]^x[B⁻]^y`
      }
    ],
    class12: [
      {
        id: "c12-1",
        title: "Chemical Kinetics",
        summary: "Examines the rate of chemical reactions, factors affecting them, order and molecularity, and the Arrhenius equation for temperature dependence.",
        content: `# Chemical Kinetics

## Rate of Reaction
- Average Rate vs Instantaneous Rate.

## Order of Reaction
- **Zero Order**: t½ ∝ [A]₀
- **First Order**: t½ = 0.693/k (Independent of [A]₀).

## Arrhenius Equation
k = A e^(-Ea/RT)
- Plotting ln k vs 1/T gives a slope of -Ea/R.`,
        formulas: `# Formula Sheet
- **Rate Law**: Rate = k[A]^x[B]^y
- **First Order Integrated Rate Law**: k = (2.303/t) log([A]₀/[A])
- **Activation Energy**: log(k₂/k₁) = (Ea/2.303R) [(T₂-T₁)/T₁T₂]`
      },
      {
        id: "c12-2",
        title: "Organic Chemistry Basics",
        summary: "Introduces nomenclature, isomerism, and fundamental electronic effects like inductive, resonance, and hyperconjugation in organic reactions.",
        content: `# General Organic Chemistry (GOC)

## Electronic Effects
1. **Inductive Effect**: Permanent displacement of σ-electrons.
2. **Resonance/Mesomeric Effect**: Delocalization of π-electrons.
3. **Hyperconjugation**: σ-π conjugation (No-bond resonance).

## Isomerism
- **Structural**: Chain, Position, Functional, Metamerism, Tautomerism.
- **Stereo**: Geometrical (cis/trans) and Optical (d/l).

## Reaction Intermediates
- Carbocations (Stability: 3° > 2° > 1°).
- Carbanions (Stability: 1° > 2° > 3°).
- Free Radicals.`,
      },
      {
        id: "c12-3",
        title: "Coordination Compounds",
        summary: "Explains Werner's theory, nomenclature, isomerism, and bonding theories like VBT and CFT for coordination complexes.",
        content: `# Coordination Compounds

## Werner's Theory
- Primary Valency (Ionizable) vs Secondary Valency (Non-ionizable, fixed).

## Nomenclature
- Ligands named first, then central metal.
- Oxidation state in Roman numerals.

## Crystal Field Theory (CFT)
- Splitting of d-orbitals in octahedral and tetrahedral fields.
- **Strong Field Ligands**: Cause large splitting (low spin).
- **Weak Field Ligands**: Cause small splitting (high spin).`,
        formulas: `# Formula Sheet
- **Effective Atomic Number (EAN)**: Z - (Oxidation State) + 2(Coordination Number)
- **Magnetic Moment**: μ = √[n(n+2)] BM`
      }
    ]
  }
};
