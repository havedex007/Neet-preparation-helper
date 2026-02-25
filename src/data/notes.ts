export interface Chapter {
  id: string;
  title: string;
  content: string;
  questions?: string;
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
        content: `# The Living World

## Key Concepts
- **Biodiversity**: The number and types of organisms present on earth (approx. 1.7-1.8 million).
- **Nomenclature**: Standardizing the naming of living organisms.
- **ICBN**: International Code for Botanical Nomenclature.
- **ICZN**: International Code for Zoological Nomenclature.
- **Binomial Nomenclature**: Given by Carolus Linnaeus (Generic name + Specific epithet).

> **Important Point**: The scientific name is printed in italics or underlined separately when handwritten. The first word (Genus) starts with a capital letter, while the second (Species) starts with a small letter.

## Taxonomic Hierarchy
1. Kingdom
2. Phylum/Division
3. Class
4. Order
5. Family
6. Genus
7. Species

*Mnemonic: **K**eep **P**ots **C**lean **O**r **F**amily **G**ets **S**ick*

## Taxonomical Aids
- **Herbarium**: Storehouse of collected plant specimens that are dried, pressed and preserved on sheets.
- **Botanical Gardens**: Collection of living plants for reference. (e.g., Kew, England; Indian Botanical Garden, Howrah).
- **Museum**: Collection of preserved plant and animal specimens for study.
- **Zoological Parks**: Wild animals are kept in protected environments.
- **Key**: Analytical taxonomical aid based on contrasting characters (couplet/lead).`,
        questions: `### Practice Questions

**Q1. Which of the following is the correct scientific name of Mango?**
A) Mangifera Indica
B) Mangifera indica
C) mangifera indica
D) Mangifera Indica Linn.
**Answer: B/D**. (D is more complete as it includes the author's name).

**Q2. The basic unit of classification is:**
A) Genus
B) Species
C) Order
D) Kingdom
**Answer: B**. Species is the fundamental unit of classification.

**Q3. Herbarium sheets provide information on:**
A) Local names
B) Family
C) Date of collection
D) All of the above
**Answer: D**.`
      },
      {
        id: "b11-2",
        title: "Biological Classification",
        content: `# Biological Classification

## Five Kingdom Classification (R.H. Whittaker, 1969)
1. **Monera**: Prokaryotic, unicellular (Bacteria).
2. **Protista**: Eukaryotic, unicellular (Amoeba, Plasmodium).
3. **Fungi**: Heterotrophic, multicellular (except yeast).
4. **Plantae**: Autotrophic, multicellular.
5. **Animalia**: Heterotrophic, multicellular, no cell wall.

## Kingdom Monera
- **Bacteria** are the sole members.
- **Archaebacteria**: Live in extreme habitats (Halophiles, Thermoacidophiles, Methanogens).
- **Eubacteria**: 'True bacteria', have a rigid cell wall.
- **Mycoplasma**: Organisms that completely lack a cell wall. Smallest living cells known.

> **Important Point**: Mycoplasma can survive without oxygen and are pathogenic in animals and plants.`,
        questions: `### Practice Questions

**Q1. Five kingdom system of classification was proposed by:**
A) Linnaeus
B) Whittaker
C) Aristotle
D) Bentham and Hooker
**Answer: B**.

**Q2. Smallest living cell without a cell wall is:**
A) Mycoplasma
B) Yeast
C) Bacteria
D) Virus
**Answer: A**.

**Q3. Methanogens belong to:**
A) Eubacteria
B) Archaebacteria
C) Dinoflagellates
D) Slime moulds
**Answer: B**.`
      },
      {
        id: "b11-3",
        title: "Cell: The Unit of Life",
        content: `# Cell: The Unit of Life

## Cell Theory
- Proposed by **Schleiden** (botanist) and **Schwann** (zoologist).
- Modified by **Rudolf Virchow**: "Omnis cellula-e cellula" (All cells arise from pre-existing cells).

## Prokaryotic vs Eukaryotic
- **Prokaryotic**: No membrane-bound nucleus or organelles. (Bacteria, BGA).
- **Eukaryotic**: Well-defined nucleus and membrane-bound organelles.

## Organelles
- **Mitochondria**: Powerhouse of the cell (ATP production).
- **Chloroplast**: Site of photosynthesis.
- **Ribosomes**: Protein synthesis (70S in prokaryotes, 80S in eukaryotes).
- **Lysosomes**: Suicidal bags (hydrolytic enzymes).`,
        questions: `### Practice Questions

**Q1. Who proposed that all cells arise from pre-existing cells?**
A) Robert Hooke
B) Rudolf Virchow
C) Schleiden
D) Schwann
**Answer: B**.

**Q2. 70S ribosomes are found in:**
A) Prokaryotes
B) Mitochondria
C) Chloroplasts
D) All of the above
**Answer: D**. (Endosymbiotic theory).`
      }
    ],
    class12: [
      {
        id: "b12-1",
        title: "Principles of Inheritance and Variation",
        content: `# Principles of Inheritance and Variation

## Mendel's Laws
1. **Law of Dominance**: In a heterozygote, one allele masks the expression of the other.
2. **Law of Segregation**: Alleles separate during gamete formation.
3. **Law of Independent Assortment**: Genes for different traits segregate independently.

## Non-Mendelian Inheritance
- **Incomplete Dominance**: Pink flowers in Snapdragons (Mirabilis jalapa).
- **Co-dominance**: ABO blood grouping in humans.
- **Polygenic Inheritance**: Human skin color.

> **Important Point**: The phenotypic ratio of a Mendelian dihybrid cross is 9:3:3:1.`,
        questions: `### Practice Questions

**Q1. A cross between a tall plant (TT) and a short plant (tt) results in all tall plants in F1. This is due to:**
A) Segregation
B) Dominance
C) Independent Assortment
D) Linkage
**Answer: B**.

**Q2. ABO blood grouping is an example of:**
A) Incomplete dominance
B) Co-dominance
C) Multiple allelism
D) Both B and C
**Answer: D**.`
      },
      {
        id: "b12-2",
        title: "Molecular Basis of Inheritance",
        content: `# Molecular Basis of Inheritance

## DNA Structure
- Double helix model by **Watson and Crick**.
- **Chargaff's Rule**: [A] + [G] = [T] + [C].

## Central Dogma
DNA → (Transcription) → RNA → (Translation) → Protein.

## DNA Replication
- Semi-conservative (proven by Meselson and Stahl).
- Occurs in S-phase of cell cycle.`,
        questions: `### Practice Questions

**Q1. If a DNA molecule has 20% Adenine, what is the percentage of Guanine?**
A) 20%
B) 30%
C) 40%
D) 80%
**Answer: B**. (A=T=20%, so A+T=40%. G+C=60%, so G=30%).

**Q2. The enzyme used for unwinding DNA helix is:**
A) Polymerase
B) Ligase
C) Helicase
D) Primase
**Answer: C**.`
      }
    ]
  },
  physics: {
    name: "Physics",
    class11: [
      {
        id: "p11-1",
        title: "Units and Measurements",
        content: `# Units and Measurements

## Fundamental Quantities
- Length (m), Mass (kg), Time (s), Electric Current (A), Temperature (K), Amount (mol), Luminous Intensity (cd).

## Dimensions
- **Force**: [MLT⁻²]
- **Work/Energy**: [ML²T⁻²]
- **Pressure**: [ML⁻¹T⁻²]
- **Universal Gravitational Constant (G)**: [M⁻¹L³T⁻²]

> **Important Point**: Only quantities with the same dimensions can be added or subtracted (Principle of Homogeneity).`,
        questions: `### Practice Questions

**Q1. The dimensional formula for Planck's constant (h) is:**
A) [ML²T⁻¹]
B) [MLT⁻¹]
C) [ML²T⁻²]
D) [MLT⁻²]
**Answer: A**. (E = hν => h = E/ν = [ML²T⁻²]/[T⁻¹] = [ML²T⁻¹]).

**Q2. If the error in measurement of radius of a sphere is 2%, the error in its volume will be:**
A) 2%
B) 4%
C) 6%
D) 8%
**Answer: C**. (V ∝ r³, so ΔV/V = 3 * Δr/r = 3 * 2% = 6%).`
      },
      {
        id: "p11-2",
        title: "Motion in a Straight Line",
        content: `# Motion in a Straight Line

## Kinematic Equations (Constant Acceleration)
1. v = u + at
2. s = ut + ½at²
3. v² = u² + 2as

## Relative Velocity
- V_ab = V_a - V_b

> **Important Point**: Area under v-t graph gives displacement. Slope of x-t graph gives velocity.`,
        questions: `### Practice Questions

**Q1. A car starts from rest and accelerates at 2 m/s² for 10s. The distance covered is:**
A) 100m
B) 200m
C) 50m
D) 150m
**Answer: A**. (s = 0 + ½ * 2 * 10² = 100m).

**Q2. The slope of the velocity-time graph represents:**
A) Displacement
B) Acceleration
C) Force
D) Momentum
**Answer: B**.`
      }
    ],
    class12: [
      {
        id: "p12-1",
        title: "Electrostatics",
        content: `# Electrostatics

## Coulomb's Law
F = k * (q1 * q2) / r²
Where k = 1 / (4πε₀) ≈ 9 × 10⁹ Nm²/C²

## Electric Field
E = F / q = k * Q / r²

## Electric Potential
V = k * Q / r

> **Important Point**: Electric field inside a hollow charged conductor is zero.`,
        questions: `### Practice Questions

**Q1. Two charges 1C and -1C are placed 1m apart. The force between them is:**
A) 9 × 10⁹ N (Attractive)
B) 9 × 10⁹ N (Repulsive)
C) 1 N
D) 0
**Answer: A**.

**Q2. The work done in moving a charge on an equipotential surface is:**
A) Positive
B) Negative
C) Zero
D) Infinite
**Answer: C**.`
      },
      {
        id: "p12-2",
        title: "Current Electricity",
        content: `# Current Electricity

## Ohm's Law
V = IR

## Resistance
R = ρ * (L / A)
- Resistance depends on temperature: R_t = R_0(1 + αΔT)

## Kirchhoff's Laws
1. **KCL (Junction Rule)**: Sum of currents entering a junction = Sum of currents leaving (Conservation of Charge).
2. **KVL (Loop Rule)**: Sum of potential changes in a closed loop is zero (Conservation of Energy).

> **Important Point**: In a series combination, current is same. In parallel, voltage is same.`,
        questions: `### Practice Questions

**Q1. If a wire is stretched to double its length, its resistance becomes:**
A) Double
B) Half
C) Four times
D) Remains same
**Answer: C**. (R ∝ L²/V, as volume is constant).

**Q2. Kirchhoff's First Law is based on the conservation of:**
A) Energy
B) Momentum
C) Charge
D) Mass
**Answer: C**.`
      }
    ]
  },
  chemistry: {
    name: "Chemistry",
    class11: [
      {
        id: "c11-1",
        title: "Some Basic Concepts of Chemistry",
        content: `# Basic Concepts of Chemistry

## Mole Concept
1 Mole = 6.022 × 10²³ particles (Avogadro's Number).

## Concentration Terms
- **Molarity (M)**: Moles of solute / Volume of solution (L)
- **Molality (m)**: Moles of solute / Mass of solvent (kg)
- **Mole Fraction (χ)**: n_i / Σn_i

> **Important Point**: Molarity changes with temperature, but Molality does not.`,
        questions: `### Practice Questions

**Q1. The number of atoms in 1 mole of Oxygen gas (O₂) is:**
A) 6.022 × 10²³
B) 12.044 × 10²³
C) 3.011 × 10²³
D) 1
**Answer: B**. (1 mole O₂ = 2 moles O atoms).

**Q2. Which of the following is temperature independent?**
A) Molarity
B) Normality
C) Molality
D) Formality
**Answer: C**.`
      },
      {
        id: "c11-2",
        title: "Structure of Atom",
        content: `# Structure of Atom

## Bohr's Model
- Electrons revolve in fixed orbits.
- Angular momentum L = mvr = nh/2π.

## Quantum Numbers
1. **Principal (n)**: Size and energy.
2. **Azimuthal (l)**: Shape (s=0, p=1, d=2, f=3).
3. **Magnetic (m_l)**: Orientation.
4. **Spin (m_s)**: Direction of spin (+½ or -½).

> **Important Point**: Pauli's Exclusion Principle states no two electrons can have the same set of four quantum numbers.`,
        questions: `### Practice Questions

**Q1. The maximum number of electrons in a subshell is given by:**
A) 2n²
B) 2(2l + 1)
C) 4l + 2
D) Both B and C
**Answer: D**.

**Q2. Which orbital is non-directional?**
A) s
B) p
C) d
D) f
**Answer: A**.`
      }
    ],
    class12: [
      {
        id: "c12-1",
        title: "The Solid State",
        content: `# The Solid State

## Types of Unit Cells
- **SCC**: 1 atom/cell, Packing efficiency = 52.4%
- **BCC**: 2 atoms/cell, Packing efficiency = 68%
- **FCC**: 4 atoms/cell, Packing efficiency = 74%

## Defects in Solids
- **Schottky Defect**: Equal number of cations and anions missing (Density decreases).
- **Frenkel Defect**: Ion missing from lattice site and occupies interstitial site (Density remains same).`,
        questions: `### Practice Questions

**Q1. The number of atoms per unit cell in a Face-Centered Cubic (FCC) lattice is:**
A) 1
B) 2
C) 4
D) 8
**Answer: C**.

**Q2. Schottky defect is observed in crystals when:**
A) Density of crystal increases
B) Unequal number of cations and anions are missing
C) An ion leaves its normal site and occupies an interstitial site
D) Equal number of cations and anions are missing
**Answer: D**.`
      },
      {
        id: "c12-2",
        title: "Chemical Kinetics",
        content: `# Chemical Kinetics

## Rate of Reaction
Rate = ± (Change in concentration) / (Time taken)

## Order of Reaction
- **Zero Order**: Rate = k[A]⁰ = k. Unit of k = mol L⁻¹ s⁻¹.
- **First Order**: Rate = k[A]¹. Unit of k = s⁻¹.

## Half-Life (t½)
- Zero Order: t½ = [A]₀ / 2k
- First Order: t½ = 0.693 / k

> **Important Point**: For a first-order reaction, half-life is independent of the initial concentration.`,
        questions: `### Practice Questions

**Q1. The unit of rate constant for a second-order reaction is:**
A) s⁻¹
B) mol L⁻¹ s⁻¹
C) L mol⁻¹ s⁻¹
D) L² mol⁻² s⁻¹
**Answer: C**.

**Q2. If the concentration of reactant is doubled and rate becomes 4 times, the order is:**
A) 0
B) 1
C) 2
D) 3
**Answer: C**.`
      }
    ]
  }
};
