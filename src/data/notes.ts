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
- **Growth**: Increase in mass and number. In plants, growth is continuous (open form of growth); in animals, it's up to a certain age. Non-living objects like mountains also grow by accumulation of material on the surface (extrinsic growth), while living growth is intrinsic.
- **Reproduction**: Production of progeny. Asexual (spores, budding, fragmentation, regeneration) and Sexual. (Note: Mules, sterile worker bees, and infertile human couples don't reproduce but are living).
- **Metabolism**: Sum total of all chemical reactions occurring in the body. No non-living object exhibits metabolism. Isolated metabolic reactions in vitro are not living things but are living reactions.
- **Consciousness**: Ability to sense surroundings and respond to stimuli (physical, chemical, or biological). All organisms from prokaryotes to eukaryotes show consciousness. Human beings are the only organisms with **Self-consciousness**.

> **Defining Properties**: Metabolism, Cellular organization, and Consciousness.

## Nomenclature & Taxonomy
- **Biodiversity**: Range of organisms on earth (1.7-1.8 million species).
- **Binomial Nomenclature**: System of providing a name with two components (Genus and Specific epithet). Proposed by Carolus Linnaeus.
  - *Rules*: Latin origin, written in Italics (if printed) or underlined separately (if handwritten). Genus starts with Capital, Species with small letter.
- **Taxonomy**: Process of classification based on characteristics. Steps: Characterization, Identification, Classification, and Nomenclature.
- **Systematics**: Taxonomy + Evolutionary relationships.

## Taxonomic Hierarchy
Kingdom > Phylum (Animals) / Division (Plants) > Class > Order > Family > Genus > Species.
- **Species**: Group of individual organisms with fundamental similarities. Basic unit.
- **Genus**: Group of related species.
- **Family**: Group of related genera with less similarity.
- **Order**: Assemblage of families.
- **Class**: Related orders.
- **Phylum/Division**: Related classes.
- **Kingdom**: Highest category.

## Taxonomical Aids
- **Herbarium**: Storehouse of collected plant specimens that are dried, pressed, and preserved on sheets. Sheets carry a label with date, place of collection, English/Local/Botanical names, family, and collector's name.
- **Botanical Gardens**: Collection of living plants for reference. Famous: Kew (England), Indian Botanical Garden (Howrah), NBRI (Lucknow).
- **Museum**: Collection of preserved plant and animal specimens for study. Insects preserved in insect boxes after collecting, killing, and pinning.
- **Zoological Parks (Zoos)**: Wild animals kept in protected environments under human care.
- **Key**: Analytical tool used for identification based on similarities and dissimilarities. Based on contrasting characters in a pair called **couplet**. Each statement is a **lead**.
- **Flora, Manuals, Monographs, and Catalogues**: Other means of recording descriptions. Flora contains the actual account of habitat and distribution of plants of a given area. Monographs contain information on any one taxon.`,
        questions: `### Practice Questions
**Q1. The defining characteristic of living beings is:**
A) Growth B) Reproduction C) Metabolism D) Response to external stimuli
**Answer: D**. (While metabolism is also a defining property, response to stimuli/consciousness is the most sophisticated defining property).

**Q2. ICBN stands for:**
A) International Code for Botanical Nomenclature
B) International Council for Botanical Nomenclature
**Answer: A**.

**Q3. Which of the following is a monograph?**
A) Account of habitat of plants of an area
B) Information on any one taxon
C) Index of plant species
**Answer: B**.`
      },
      {
        id: "b11-2",
        title: "Biological Classification",
        summary: "Explores the five-kingdom system proposed by Whittaker, detailing the characteristics of Monera, Protista, Fungi, Plantae, and Animalia, along with viruses and lichens.",
        content: `# Biological Classification

## Five Kingdom System (R.H. Whittaker, 1969)
Criteria: Cell structure, body organization, mode of nutrition, reproduction, and phylogenetic relationships.

### 1. Kingdom Monera
- **Bacteria**: Sole members. Most abundant micro-organisms.
- **Archaebacteria**: Live in extreme habitats.
  - *Halophiles*: Extreme salty areas.
  - *Thermoacidophiles*: Hot springs.
  - *Methanogens*: Marshy areas and gut of ruminant animals (produce methane/biogas).
- **Eubacteria**: 'True bacteria'. Have a rigid cell wall and flagellum (if motile).
  - *Cyanobacteria (BGA)*: Photosynthetic autotrophs, have chlorophyll-a. Some fix nitrogen in specialized cells called **heterocysts** (e.g., Nostoc, Anabaena).
  - *Chemosynthetic Autotrophs*: Oxidize inorganic substances (nitrates, nitrites, ammonia) for ATP production.
  - *Heterotrophic Bacteria*: Most abundant. Decomposers. Helpful in making curd, antibiotics, N2 fixation in legumes. Some are pathogens (Cholera, Typhoid, Tetanus, Citrus canker).
- **Mycoplasma**: Organisms that completely lack a cell wall. Smallest living cells known. Can survive without oxygen. Pathogenic in plants and animals.

### 2. Kingdom Protista
- All single-celled eukaryotes. Primarily aquatic.
- **Chrysophytes**: Diatoms and Desmids (Golden algae). Found in fresh and marine water. Diatoms have cell walls forming two thin overlapping shells (soap box). Walls embedded with silica (indestructible). Form **Diatomaceous earth**. Chief producers in oceans.
- **Dinoflagellates**: Mostly marine and photosynthetic. Have two flagella (one longitudinal, one transverse). Red dinoflagellates (Gonyaulax) undergo rapid multiplication causing **Red tides** and release toxins.
- **Euglenoids**: Fresh water (stagnant). Instead of cell wall, they have a protein-rich layer called **pellicle** (makes body flexible). Mixotrophic (photosynthetic in light, heterotrophic in dark). Example: Euglena.
- **Slime Moulds**: Saprophytic protists. Under favorable conditions, form an aggregation called **plasmodium**. Under unfavorable conditions, plasmodium differentiates into fruiting bodies with spores (true walls).
- **Protozoans**: Heterotrophs (predators or parasites).
  - *Amoeboid*: Move via pseudopodia (Entamoeba).
  - *Flagellated*: Have flagella (Trypanosoma - sleeping sickness).
  - *Ciliated*: Have cilia and a gullet (Paramecium).
  - *Sporozoans*: Have an infectious spore-like stage (Plasmodium - malaria).

### 3. Kingdom Fungi
- Heterotrophic, cell wall of **Chitin** and polysaccharides.
- Vegetative reproduction: Fragmentation, fission, budding.
- Asexual spores: Conidia, sporangiospores, zoospores.
- Sexual spores: Oospores, ascospores, basidiospores.
- **Phycomycetes**: Found in aquatic habitats and decaying wood. Mycelium is aseptate and coenocytic. Spores produced endogenously. (Mucor, Rhizopus, Albugo).
- **Ascomycetes**: 'Sac-fungi'. Multicellular (Penicillium) or unicellular (Yeast). Mycelium branched and septate. Asexual spores are conidia (exogenous). Sexual spores are ascospores (endogenous in asci). (Aspergillus, Claviceps, Neurospora).
- **Basidiomycetes**: Mushrooms, bracket fungi, puffballs. Mycelium branched and septate. Asexual spores generally not found. Plasmogamy by fusion of somatic cells. Karyogamy and meiosis in basidium producing 4 basidiospores (exogenous). (Agaricus, Ustilago, Puccinia).
- **Deuteromycetes**: 'Fungi imperfecti' because only asexual/vegetative phases are known. Once sexual stage is found, they are moved to Ascomycetes or Basidiomycetes. (Alternaria, Colletotrichum, Trichoderma).

## Viruses, Viroids, Prions & Lichens
- **Viruses**: Non-cellular, not truly 'living'. Genetic material (DNA or RNA) + Protein coat (**Capsid** made of capsomeres). No virus contains both DNA and RNA. Plant viruses usually have ssRNA; animal viruses have ssRNA, dsRNA, or dsDNA. Bacteriophages are usually dsDNA viruses.
- **Viroids**: Smaller than viruses. Free RNA, no protein coat. Discovered by T.O. Diener (1971). Cause Potato spindle tuber disease.
- **Prions**: Abnormally folded proteins. Cause BSE (Mad cow disease) in cattle and Cr-Jacob disease (CJD) in humans.
- **Lichens**: Symbiotic association between Algae (**Phycobiont** - autotrophic) and Fungi (**Mycobiont** - heterotrophic). Algae prepare food, fungi provide shelter and absorb minerals/water. Good pollution indicators (don't grow in SO2 polluted areas).`,
        questions: `**Q1. Chief producers in the oceans are:**
A) Dinoflagellates B) Diatoms C) Euglenoids D) Cyanobacteria
**Answer: B**.

**Q2. The protein coat of a virus is called:**
A) Capsid B) Capsomere C) Nucleoid D) Envelope
**Answer: A**.

**Q3. Heterocysts are found in:**
A) Mycoplasma B) Nostoc C) Euglena D) Amoeba
**Answer: B**.`
      },
      {
        id: "b11-3",
        title: "Plant Kingdom",
        summary: "Classifies plants into Algae, Bryophytes, Pteridophytes, Gymnosperms, and Angiosperms, highlighting their life cycles and reproductive structures.",
        content: `# Plant Kingdom

## Algae
- Chlorophyceae (Green), Phaeophyceae (Brown), Rhodophyceae (Red).
- **Chlorophyceae**: Chlorophyll a and b. Storage: Pyrenoids (protein + starch). Cell wall: Inner cellulose, outer pectose. (Chlamydomonas, Volvox, Ulothrix, Spirogyra, Chara).
- **Phaeophyceae**: Mostly marine. Chlorophyll a, c, carotenoids, and xanthophylls (Fucoxanthin). Food: Laminarin or mannitol. Cell wall: Cellulose + Algin. (Ectocarpus, Dictyota, Laminaria, Sargassum, Fucus).
- **Rhodophyceae**: Mostly marine (deep sea). Chlorophyll a, d, and r-phycoerythrin. Food: Floridean starch. (Polysiphonia, Porphyra, Gracilaria, Gelidium).

## Bryophytes
- "Amphibians of the plant kingdom" because they live in soil but depend on water for sexual reproduction.
- Lack true roots, stems, or leaves. Have rhizoids.
- Dominant phase is **Gametophyte** (haploid).
- **Liverworts**: Thalloid body (Marchantia). Asexual reproduction by fragmentation or **gemmae** (green, multicellular, asexual buds).
- **Mosses**: Two stages in gametophyte: Protonema (creeping, green, branched) and Leafy stage (upright, slender axis). (Funaria, Polytrichum, Sphagnum).

## Pteridophytes
- First terrestrial plants with vascular tissues (Xylem/Phloem).
- Found in cool, damp, shady places.
- Dominant phase is **Sporophyte** (diploid).
- **Heterospory**: Production of two kinds of spores (micro and macro). Found in *Selaginella* and *Salvinia*. Precursor to seed habit.

## Gymnosperms
- Naked seeds (ovules not enclosed by ovary wall).
- Roots: Tap roots. Mycorrhiza in *Pinus*, Coralloid roots (with N2-fixing cyanobacteria) in *Cycas*.
- Stems: Unbranched (*Cycas*) or branched (*Pinus*, *Cedrus*).
- Leaves: Needle-like in conifers to reduce surface area.
- *Sequoia* (Giant redwood) is one of the tallest trees.

## Angiosperms
- Flowering plants. Seeds enclosed in fruits.
- Smallest: *Wolffia*; Tallest: *Eucalyptus*.
- **Double Fertilization**: Unique to angiosperms. One male gamete fuses with egg (Syngamy → Zygote), another fuses with two polar nuclei (Triple fusion → PEN).`,
      },
      {
        id: "b11-4",
        title: "Animal Kingdom",
        summary: "Detailed classification of animals based on level of organization, symmetry, coelom, and specific phylum characteristics from Porifera to Chordata.",
        content: `# Animal Kingdom

## Basis of Classification
- **Levels of Organization**: Cellular (Porifera), Tissue (Coelenterata, Ctenophora), Organ (Platyhelminthes), Organ System (Aschelminthes onwards).
- **Symmetry**: 
  - *Asymmetrical*: Porifera.
  - *Radial*: Coelenterata, Ctenophora, Echinodermata (adults).
  - *Bilateral*: Platyhelminthes to Chordata.
- **Germ Layers**: Diploblastic (Ecto + Endo) vs Triploblastic (Ecto + Meso + Endo).
- **Coelom**: 
  - *Acoelomate*: Platyhelminthes.
  - *Pseudocoelomate*: Aschelminthes.
  - *Coelomate*: Annelida to Chordata.

## Key Phyla
- **Porifera (Sponges)**: Water canal system. Water enters via **ostia** into **spongocoel** and exits via **osculum**. Choanocytes (collar cells) line the spongocoel. (Sycon, Spongilla, Euspongia).
- **Coelenterata (Cnidaria)**: Have cnidoblasts (stinging cells). Show **Metagenesis** (alternation of generations) in Obelia (Polyp produces Medusa asexually, Medusa produces Polyp sexually). (Physalia, Adamsia, Meandrina).
- **Ctenophora (Sea walnuts/Comb jellies)**: Exclusively marine. Have 8 external rows of ciliated comb plates. Show **Bioluminescence**. (Pleurobrachia, Ctenoplana).
- **Platyhelminthes (Flatworms)**: Dorso-ventrally flattened. Flame cells for osmoregulation and excretion. (Taenia, Fasciola).
- **Aschelminthes (Roundworms)**: Pseudocoelomate. Alimentary canal complete with muscular pharynx. (Ascaris, Wuchereria, Ancylostoma).
- **Annelida**: Segmented body (**Metameres**). Nephridia for excretion. (Nereis, Pheretima, Hirudinaria).
- **Arthropoda**: Largest phylum. Jointed appendages. Chitinous exoskeleton. (Apis, Bombyx, Laccifer, Anopheles, Locusta, Limulus).
- **Mollusca**: Second largest phylum. Body covered by calcareous shell. Have a mantle and radula (rasping organ). (Pila, Pinctada, Sepia, Octopus).
- **Echinodermata**: Spiny bodied. Water vascular system (for locomotion, capture, and transport of food). (Asterias, Echinus, Antedon, Cucumaria).
- **Hemichordata**: Worm-like marine animals. Body has Proboscis, Collar, and Trunk. (Balanoglossus, Saccoglossus).
- **Chordata**: Characterized by Notochord, dorsal hollow nerve cord, and paired pharyngeal gill slits.
  - *Urochordata*: Notochord only in larval tail.
  - *Cephalochordata*: Notochord from head to tail, persistent.
  - *Vertebrata*: Notochord replaced by vertebral column.`,
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
      },
      {
        id: "b11-6",
        title: "Morphology of Flowering Plants",
        summary: "Describes the external structures of plants including roots, stems, leaves, flowers, fruits, and seeds, along with floral formulas.",
        content: `# Morphology of Flowering Plants

## The Root
- **Tap Root**: Primary root and its branches (Dicot, e.g., Mustard).
- **Fibrous Root**: Primary root replaced by many roots from base of stem (Monocot, e.g., Wheat).
- **Adventitious Root**: Roots from parts other than radicle (e.g., Banyan, Maize).
- **Modifications**: Prop roots (Banyan), Stilt roots (Maize, Sugarcane), Pneumatophores (Rhizophora - for respiration).

## The Stem
- Develops from plumule. Has nodes and internodes.
- **Modifications**: 
  - *Storage*: Potato, Ginger, Turmeric.
  - *Tendrils*: Grapes, Cucumber.
  - *Thorns*: Citrus, Bougainvillea.
  - *Phylloclade*: Photosynthetic stem (Opuntia - flattened, Euphorbia - cylindrical).

## The Leaf
- **Venation**: Reticulate (Dicots) and Parallel (Monocots).
- **Phyllotaxy**: Pattern of arrangement of leaves. Alternate (China rose), Opposite (Guava), Whorled (Alstonia).

## The Flower
- **Inflorescence**: Arrangement of flowers. Racemose (unlimited growth) and Cymose (limited growth).
- **Parts**: Calyx, Corolla, Androecium, Gynoecium.
- **Aestivation**: Arrangement of sepals/petals. Valvate, Twisted, Imbricate, Vexillary (Papilionaceous).
- **Placentation**: Arrangement of ovules. Marginal (Pea), Axile (China rose), Parietal (Mustard), Free central (Dianthus), Basal (Sunflower).`,
      },
      {
        id: "b11-7",
        title: "Anatomy of Flowering Plants",
        summary: "Explores the internal structure of plants, focusing on tissues (meristematic and permanent) and the anatomy of roots, stems, and leaves.",
        content: `# Anatomy of Flowering Plants

## Tissues
- **Meristematic**: Apical (primary), Intercalary (primary), Lateral (secondary - e.g., Fascicular cambium, Cork cambium).
- **Permanent**:
  - *Simple*: Parenchyma (storage), Collenchyma (mechanical support), Sclerenchyma (dead, thick-walled).
  - *Complex*: Xylem (Tracheids, Vessels, Xylem parenchyma, Xylem fibres) and Phloem (Sieve tube elements, Companion cells, Phloem parenchyma, Phloem fibres).

## Tissue System
- **Epidermal**: Stomata, Trichomes, Hairs.
- **Ground**: All tissues except epidermis and vascular bundles.
- **Vascular**: Xylem and Phloem. 
  - *Radial*: Xylem and Phloem on different radii (Roots).
  - *Conjoint*: Xylem and Phloem on same radius (Stem/Leaves).

## Dicot vs Monocot
- **Dicot Root**: Fewer xylem bundles (2-4), small pith.
- **Monocot Root**: Many xylem bundles (polyarch), large pith.
- **Dicot Stem**: Vascular bundles in a ring, open (cambium present).
- **Monocot Stem**: Vascular bundles scattered, closed (no cambium).`,
      },
      {
        id: "b11-19",
        title: "Structural Organisation in Animals",
        summary: "Covers animal tissues (epithelial, connective, muscular, neural) and the anatomy of a cockroach as a representative animal.",
        content: `# Structural Organisation in Animals

## Animal Tissues
- **Epithelial**: Simple (Squamous, Cuboidal, Columnar) and Compound.
- **Connective**: Loose (Areolar, Adipose), Dense (Tendons, Ligaments), and Specialized (Cartilage, Bone, Blood).
- **Muscular**: Skeletal, Smooth, and Cardiac.
- **Neural**: Neurons and Neuroglia.

## Cockroach (Periplaneta americana)
- **Morphology**: Body divided into Head, Thorax, and Abdomen. Exoskeleton of chitin.
- **Anatomy**:
  - *Digestive*: Gizzard (grinding), Hepatic caeca (secretion).
  - *Circulatory*: Open type. 13-chambered heart.
  - *Respiratory*: Network of trachea opening via spiracles.
  - *Excretory*: Malpighian tubules.`,
      },
      {
        id: "b11-8",
        title: "Cell: The Unit of Life",
        summary: "Detailed study of cell theory, prokaryotic and eukaryotic cell structures, and the functions of various organelles.",
        content: `# Cell: The Unit of Life

## Cell Theory
- Proposed by Schleiden and Schwann. Modified by Rudolf Virchow (**Omnis cellula-e cellula** - all cells arise from pre-existing cells).

## Prokaryotic Cell
- No membrane-bound nucleus or organelles.
- **Mesosomes**: Infoldings of plasma membrane (respiration, secretion).
- **Plasmids**: Small circular DNA outside genomic DNA.

## Eukaryotic Cell
- **Plasma Membrane**: Fluid Mosaic Model (Singer and Nicolson). Lipids (phosphoglycerides) + Proteins.
- **Endomembrane System**: ER (Rough - protein synthesis, Smooth - lipid synthesis), Golgi (packaging), Lysosomes (hydrolytic enzymes), Vacuoles.
- **Mitochondria**: Powerhouse, double membrane, inner membrane infoldings (cristae).
- **Plastids**: Chloroplasts (photosynthesis), Chromoplasts (color), Leucoplasts (storage).
- **Ribosomes**: 80S (Eukaryotes), 70S (Prokaryotes/Mitochondria/Chloroplasts).
- **Nucleus**: Contains chromatin, nucleolus, and nuclear matrix.`,
      },
      {
        id: "b11-9",
        title: "Biomolecules",
        summary: "Discusses the chemical composition of living organisms, focusing on carbohydrates, proteins, lipids, nucleic acids, and enzymes.",
        content: `# Biomolecules

## Primary and Secondary Metabolites
- **Primary**: Direct role in growth (Amino acids, Sugars).
- **Secondary**: Produced by plants/fungi (Alkaloids, Flavonoids, Rubber, Antibiotics).

## Macromolecules
- **Proteins**: Polymers of amino acids. Peptide bonds. Collagen is most abundant protein in animal world; RuBisCO in biosphere.
- **Polysaccharides**: Starch (plants), Glycogen (animals), Cellulose (cell wall), Chitin (exoskeleton).
- **Nucleic Acids**: DNA and RNA. Polymers of nucleotides (Sugar + Base + Phosphate). Phosphodiester bonds.

## Enzymes
- Biocatalysts. Lower activation energy.
- **Factors**: Temperature, pH, Substrate concentration.
- **Inhibition**: Competitive (Inhibitor resembles substrate, e.g., Malonate inhibits Succinate dehydrogenase).`,
      },
      {
        id: "b11-10",
        title: "Photosynthesis in Higher Plants",
        summary: "Explains the light and dark reactions, C3 and C4 pathways, and factors affecting the rate of photosynthesis.",
        content: `# Photosynthesis in Higher Plants

## Light Reaction (Photochemical Phase)
- Occurs in Thylakoids.
- **Z-Scheme**: Non-cyclic photophosphorylation. Produces ATP and NADPH.
- **Cyclic Photophosphorylation**: Occurs in stroma lamellae. Produces only ATP.

## Dark Reaction (Biosynthetic Phase)
- Occurs in Stroma. Uses ATP and NADPH to fix CO2.
- **C3 Pathway (Calvin Cycle)**: First stable product is 3-PGA. Enzyme: RuBisCO.
- **C4 Pathway (Hatch-Slack)**: First stable product is OAA (4C). Kranz anatomy. Enzyme: PEPcase. More efficient in high temp and low CO2.

## Photorespiration
- Wasteful process in C3 plants where RuBisCO binds to O2 instead of CO2. Absent in C4 plants.`,
        questions: `### Practice Questions
**Q1. The first stable product of C4 pathway is:**
A) 3-PGA B) OAA C) RuBP D) PEP
**Answer: B**. (Oxaloacetic acid is a 4-carbon compound).

**Q2. Kranz anatomy is a characteristic feature of:**
A) C3 plants B) C4 plants C) CAM plants D) Succulents
**Answer: B**.

**Q3. Which enzyme is responsible for CO2 fixation in C3 plants?**
A) PEPcase B) RuBisCO C) Hexokinase D) ATPase
**Answer: B**.`
      },
      {
        id: "b11-11",
        title: "Respiration in Plants",
        summary: "Covers glycolysis, fermentation, aerobic respiration (TCA cycle and ETS), and the respiratory quotient.",
        content: `# Respiration in Plants

## Glycolysis (EMP Pathway)
- Occurs in Cytoplasm. Glucose (6C) → 2 Pyruvic acid (3C). Net gain: 2 ATP, 2 NADPH.

## Fermentation
- Anaerobic. Alcoholic (Yeast) or Lactic acid (Muscles). Net gain: 2 ATP.

## Aerobic Respiration
- **TCA Cycle (Krebs Cycle)**: Occurs in Mitochondrial Matrix.
- **Electron Transport System (ETS)**: Occurs in Inner Mitochondrial Membrane. Final electron acceptor is Oxygen.
- **ATP Yield**: 36-38 ATP per glucose molecule.

## Respiratory Quotient (RQ)
- RQ = Volume of CO2 evolved / Volume of O2 consumed.
- Carbohydrates: 1.0, Fats: 0.7, Proteins: 0.9.`,
      },
      {
        id: "b11-12",
        title: "Breathing and Exchange of Gases",
        summary: "Discusses the mechanism of breathing, transport of gases (O2 and CO2), and respiratory disorders.",
        content: `# Breathing and Exchange of Gases

## Mechanism of Breathing
- **Inspiration**: Diaphragm contracts, external intercostal muscles contract → Thoracic volume increases → Pressure decreases → Air enters.
- **Expiration**: Passive process (relaxation of muscles).

## Transport of Gases
- **Oxygen**: 97% by RBCs (Oxyhaemoglobin), 3% in plasma.
- **Carbon Dioxide**: 70% as Bicarbonate, 20-25% by RBCs (Carbamino-haemoglobin), 7% in plasma.

## Regulation
- Respiratory Rhythm Center (Medulla) and Pneumotaxic Center (Pons).

## Disorders
- **Asthma**: Inflammation of bronchi.
- **Emphysema**: Alveolar walls damaged (due to smoking).
- **Occupational Disorders**: Silicosis, Asbestosis.`,
      },
      {
        id: "b11-13",
        title: "Body Fluids and Circulation",
        summary: "Covers the composition of blood and lymph, the human circulatory system, cardiac cycle, and ECG.",
        content: `# Body Fluids and Circulation

## Blood Composition
- **Plasma**: 55%. Contains proteins (Fibrinogen, Globulins, Albumins).
- **Formed Elements**: 45%. Erythrocytes (RBC), Leucocytes (WBC), Platelets.

## Human Heart
- 4 chambers. SA Node (Pacemaker) → AV Node → Bundle of His → Purkinje fibres.
- **Cardiac Cycle**: 0.8 seconds. Joint Diastole → Atrial Systole → Ventricular Systole.
- **Stroke Volume**: 70 mL. Cardiac Output = 5 L/min.

## ECG (Electrocardiogram)
- P-wave: Atrial depolarization.
- QRS complex: Ventricular depolarization.
- T-wave: Ventricular repolarization.`,
      },
      {
        id: "b11-14",
        title: "Excretory Products and Elimination",
        summary: "Explains the structure of the nephron, mechanism of urine formation, and the role of other organs in excretion.",
        content: `# Excretory Products and Elimination

## Nitrogenous Wastes
- **Ammonotelic**: Ammonia (Aquatic animals).
- **Ureotelic**: Urea (Mammals, Terrestrial amphibians).
- **Uricotelic**: Uric acid (Birds, Reptiles, Insects).

## Human Excretory System
- Kidneys → Ureters → Urinary Bladder → Urethra.
- **Nephron**: Structural unit. Glomerulus + Renal tubule (PCT, Henle's loop, DCT).

## Urine Formation
1. **Glomerular Filtration**: Non-selective.
2. **Reabsorption**: Selective (PCT absorbs 70-80% electrolytes/water).
3. **Secretion**: H+, K+, Ammonia.

## Regulation
- ADH (Vasopressin), RAAS (Renin-Angiotensin-Aldosterone System), ANF.`,
      },
      {
        id: "b11-15",
        title: "Locomotion and Movement",
        summary: "Discusses types of movement, skeletal muscle structure, mechanism of muscle contraction, and the skeletal system.",
        content: `# Locomotion and Movement

## Muscle Contraction
- **Sliding Filament Theory**: Actin filaments slide over myosin filaments.
- **Sarcomere**: Functional unit of contraction (between two Z-lines).
- Role of Calcium and ATP.

## Skeletal System
- 206 bones.
- **Axial (80)**: Skull, Vertebral column, Sternum, Ribs.
- **Appendicular (126)**: Girdles and Limbs.

## Joints
- **Fibrous**: Immovable (Skull).
- **Cartilaginous**: Limited movement (Vertebrae).
- **Synovial**: Free movement (Ball and socket, Hinge, Pivot, Gliding, Saddle).`,
      },
      {
        id: "b11-16",
        title: "Neural Control and Coordination",
        summary: "Covers the structure of neurons, the central and peripheral nervous systems, and the mechanism of nerve impulse conduction.",
        content: `# Neural Control and Coordination

## Neuron
- Cell body, Dendrites, Axon.
- **Impulse Conduction**: Resting potential (-70mV) → Action potential (+30mV) due to Na+ influx.

## Central Nervous System (CNS)
- **Forebrain**: Cerebrum (intelligence), Thalamus, Hypothalamus (homeostasis).
- **Midbrain**: Reflexes.
- **Hindbrain**: Cerebellum (balance), Pons, Medulla (vital centers).

## Reflex Action
- Involuntary response. Reflex arc: Receptor → Sensory neuron → CNS → Motor neuron → Effector.`,
      },
      {
        id: "b11-17",
        title: "Chemical Coordination and Integration",
        summary: "Discusses endocrine glands and their hormones, their mechanisms of action, and related disorders.",
        content: `# Chemical Coordination and Integration

## Endocrine Glands
- **Hypothalamus**: Releasing and inhibiting hormones.
- **Pituitary**: Master gland. GH, TSH, ACTH, LH, FSH, Oxytocin, ADH.
- **Thyroid**: Thyroxine (metabolism). Deficiency: Goitre, Cretinism.
- **Adrenal**: Adrenaline (Emergency hormone), Corticoids.
- **Pancreas**: Insulin (lowers blood sugar), Glucagon (raises blood sugar).

## Mechanism of Hormone Action
- **Water-soluble**: Bind to surface receptors, generate second messengers (cAMP, IP3).
- **Lipid-soluble**: Enter cell, bind to intracellular receptors, affect gene expression.`,
      },
      {
        id: "b11-18",
        title: "Plant Growth and Development",
        summary: "Covers growth regulators (Auxins, Gibberellins, Cytokinins, Ethylene, ABA), photoperiodism, and vernalization.",
        content: `# Plant Growth and Development

## Plant Growth Regulators (PGRs)
- **Auxins**: Apical dominance, rooting (Indole-3-acetic acid).
- **Gibberellins**: Bolting, increasing stalk length in grapes.
- **Cytokinins**: Cell division, overcoming apical dominance.
- **Ethylene**: Fruit ripening, abscission.
- **Abscisic Acid (ABA)**: Stress hormone, seed dormancy, stomatal closure.

## Photoperiodism
- Response of plants to periods of day/night. Long-day, Short-day, and Day-neutral plants.

## Vernalization
- Promotion of flowering by a period of low temperature.`,
      }
    ],
    class12: [
      {
        id: "b12-1",
        title: "Principles of Inheritance",
        summary: "Explains Mendelian genetics, inheritance patterns like incomplete dominance and codominance, and chromosomal disorders in humans.",
        content: `# Principles of Inheritance and Variation

## Mendelian Genetics
- **Gregor Mendel**: Father of Genetics. Conducted experiments on Garden Pea (*Pisum sativum*) for 7 years (1856-1863).
- **Terminology**:
  - *Alleles*: Contrasting forms of a gene.
  - *Homozygous*: Identical alleles (TT or tt).
  - *Heterozygous*: Different alleles (Tt).
  - *Test Cross*: Crossing an F1 individual with a recessive parent to determine genotype.

## Mendel's Laws
1. **Law of Dominance**: In a heterozygous pair, one allele (dominant) masks the expression of the other (recessive).
2. **Law of Segregation**: Alleles do not show any blending and both characters are recovered in F2 generation. They separate during gamete formation.
3. **Law of Independent Assortment**: Inheritance of one pair of characters is independent of another pair (applies to dihybrid crosses).

## Post-Mendelian Discoveries
- **Incomplete Dominance**: F1 phenotype is intermediate between parents. Example: *Antirrhinum* (Snapdragon) - Red x White = Pink.
- **Codominance**: Both alleles express themselves equally. Example: ABO blood grouping (I^A and I^B are codominant over i).
- **Multiple Allelism**: More than two alleles for a gene (ABO blood group has 3 alleles).
- **Polygenic Inheritance**: Traits controlled by three or more genes (e.g., Human skin color).
- **Pleiotropy**: Single gene affects multiple phenotypic traits (e.g., Phenylketonuria).

## Chromosomal Theory of Inheritance
- Proposed by **Sutton and Boveri**.
- Experimental verification by **T.H. Morgan** using *Drosophila melanogaster* (Fruit fly).
- **Linkage**: Physical association of genes on a chromosome.
- **Recombination**: Generation of non-parental gene combinations.

## Sex Determination
- **XY Type**: Humans, Drosophila (Males are heterogametic).
- **XO Type**: Grasshopper (Males lack one X).
- **ZW Type**: Birds (Females are heterogametic ZW, Males are ZZ).
- **Haplodiploidy**: Honey bees (Males are haploid, Females are diploid).

## Genetic Disorders
- **Mendelian Disorders**:
  - *Haemophilia*: X-linked recessive.
  - *Sickle-cell Anaemia*: Autosomal recessive. Glutamic acid replaced by Valine at 6th position of beta-globin chain.
  - *Phenylketonuria*: Inborn error of metabolism.
  - *Thalassemia*: Quantitative defect in globin chain synthesis.
- **Chromosomal Disorders**:
  - *Down’s Syndrome*: Trisomy of 21.
  - *Klinefelter’s Syndrome*: XXY (Sterile males with feminine characters).
  - *Turner’s Syndrome*: XO (Sterile females with rudimentary ovaries).`,
      },
      {
        id: "b12-2",
        title: "Human Reproduction",
        summary: "Covers the male and female reproductive systems, gametogenesis, menstrual cycle, fertilization, and embryonic development.",
        content: `# Human Reproduction

## Male Reproductive System
- **Testes**: Primary sex organs. Located in Scrotum (2-2.5°C lower than body temp).
- **Seminiferous Tubules**: Site of sperm production. Contain Spermatogonia and Sertoli cells (nutrition).
- **Leydig Cells**: Produce Androgens (Testosterone).
- **Accessory Ducts**: Rete testis, Vasa efferentia, Epididymis, Vas deferens.

## Female Reproductive System
- **Ovaries**: Produce ovum and steroid hormones.
- **Oviducts (Fallopian Tubes)**: Site of fertilization (Ampulla).
- **Uterus (Womb)**: Site of implantation. Layers: Perimetrium, Myometrium (contraction), Endometrium (cyclic changes).

## Gametogenesis
- **Spermatogenesis**: Spermatogonia → Primary spermatocytes (2n) → Secondary spermatocytes (n) → Spermatids → Spermatozoa.
- **Oogenesis**: Oogonia → Primary oocyte (arrested in Prophase I) → Secondary oocyte + First polar body (at ovulation).

## Menstrual Cycle
1. **Menstrual Phase**: Breakdown of endometrium (3-5 days).
2. **Follicular Phase**: Development of follicles, LH/FSH increase.
3. **Ovulatory Phase**: LH Surge causes release of ovum (Day 14).
4. **Luteal Phase**: Corpus luteum secretes Progesterone.

## Fertilization and Implantation
- Sperm contacts **Zona Pellucida** of ovum.
- **Acrosomal Reaction**: Enzymes help sperm enter.
- **Cleavage**: Zygote → Morula (8-16 cells) → Blastocyst.
- **Implantation**: Blastocyst attaches to endometrium.

## Pregnancy and Development
- **Placenta**: Endocrine tissue. Secretes hCG, hPL, Estrogen, Progesterone.
- **Gestation**: 9 months in humans.
- **Parturition**: Process of delivery. Induced by Oxytocin (fetal ejection reflex).
- **Lactation**: Production of milk. Colostrum (first milk) is rich in IgA antibodies.`,
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
        questions: `### Practice Questions
**Q1. Restriction enzymes belong to which class of enzymes?**
A) Ligases B) Nucleases C) Proteases D) Polymerases
**Answer: B**.

**Q2. The correct sequence of steps in PCR is:**
A) Annealing, Denaturation, Extension
B) Denaturation, Annealing, Extension
C) Extension, Denaturation, Annealing
**Answer: B**.

**Q3. Which of the following is used as a cloning vector?**
A) pBR322 B) EcoRI C) Taq Polymerase D) DNA Ligase
**Answer: A**.`
      },
      {
        id: "b12-4",
        title: "Sexual Reproduction in Flowering Plants",
        summary: "Covers the structure of flowers, pollination, double fertilization, and the development of seeds and fruits.",
        content: `# Sexual Reproduction in Flowering Plants

## Pre-fertilization Structures
- **Stamen (Androecium)**: Anther (tetrasporangiate) and Filament.
  - *Microsporogenesis*: Formation of microspores from PMC.
  - *Pollen Grain*: Two-layered wall (Exine - sporopollenin, Intine - cellulose/pectin). Contains Vegetative cell and Generative cell.
- **Pistil (Gynoecium)**: Stigma, Style, Ovary.
  - *Megasporogenesis*: Formation of megaspores from MMC.
  - *Embryo Sac*: Monosporic development. 7-celled, 8-nucleate structure (3 Antipodals, 2 Synergids, 1 Egg, 1 Central cell with 2 polar nuclei).

## Pollination
- **Autogamy**: Same flower.
- **Geitonogamy**: Different flower, same plant.
- **Xenogamy**: Different plant (Cross-pollination).
- **Agents**:
  - *Abiotic*: Wind (Anemophily), Water (Hydrophily).
  - *Biotic*: Insects (Entomophily), Birds, Bats.
- **Outbreeding Devices**: Dichogamy, Self-incompatibility, Unisexual flowers to prevent self-pollination.

## Double Fertilization
- Unique to Angiosperms.
- **Syngamy**: Male gamete + Egg → Zygote (2n).
- **Triple Fusion**: Male gamete + 2 Polar Nuclei → Primary Endosperm Nucleus (3n).

## Post-fertilization
- **Endosperm**: Provides nutrition to embryo. Can be nuclear or cellular.
- **Embryo**: Develops at micropylar end.
- **Seed**: Fertilized ovule. Non-albuminous (Pea, Groundnut) or Albuminous (Wheat, Maize, Castor).
- **Fruit**: Ripened ovary. True fruits (from ovary) vs False fruits (from thalamus, e.g., Apple).
- **Special Modes**:
  - *Apomixis*: Seed formation without fertilization (mimics sexual reproduction).
  - *Polyembryony*: Presence of more than one embryo in a seed (e.g., Citrus).`,
      },
      {
        id: "b12-5",
        title: "Reproductive Health",
        summary: "Discusses birth control methods, sexually transmitted diseases, and assisted reproductive technologies.",
        content: `# Reproductive Health

## Birth Control Methods
- **Natural**: Periodic abstinence, Coitus interruptus, Lactational amenorrhea.
- **Barrier**: Condoms, Diaphragms.
- **IUDs**: Non-medicated (Lippes loop), Copper releasing (CuT, Cu7, Multiload 375), Hormone releasing (Progestasert, LNG-20).
- **Oral Contraceptives**: Pills (Saheli - non-steroidal).
- **Surgical**: Vasectomy (Male), Tubectomy (Female).

## Assisted Reproductive Technologies (ART)
- IVF (In Vitro Fertilization), ZIFT, GIFT, ICSI, AI.`,
      },
      {
        id: "b12-6",
        title: "Molecular Basis of Inheritance",
        summary: "Explores the structure of DNA, replication, transcription, translation, and the regulation of gene expression.",
        content: `# Molecular Basis of Inheritance

## The DNA
- **Structure**: Polynucleotide chain. Sugar-Phosphate backbone. Nitrogenous bases (Purines: A, G; Pyrimidines: C, T).
- **Chargaff's Rule**: A+G = T+C.
- **Packaging**: DNA is negatively charged, wrapped around positively charged **Histone octamer** to form **Nucleosome**. Chromatin (Euchromatin - active, Heterochromatin - inactive).

## Search for Genetic Material
- **Griffith’s Experiment**: Transforming principle in *S. pneumoniae*.
- **Avery, MacLeod, McCarty**: Proved DNA is the transforming principle.
- **Hershey-Chase Experiment**: Used radioactive P and S to prove DNA is the genetic material in bacteriophages.

## RNA World
- RNA was the first genetic material. Acts as genetic material and catalyst (Ribozyme).

## DNA Replication
- **Semi-conservative**: Proved by Meselson and Stahl using N15.
- **Enzymes**: DNA Polymerase (adds nucleotides 5'→3'), Helicase (unwinds), Ligase (joins Okazaki fragments).

## Transcription
- DNA → RNA.
- **Transcription Unit**: Promoter, Structural gene, Terminator.
- **Processing in Eukaryotes**: Splicing (removing introns), Capping (5' end), Tailing (3' end).

## Genetic Code
- Triplet, Universal, Degenerate, Non-overlapping.
- **AUG**: Dual function (Methionine and Start codon).
- **Stop Codons**: UAA, UAG, UGA.

## Translation
- mRNA → Protein. Charging of tRNA (Aminoacylation).
- Occurs in Ribosomes (Protein factories).

## Regulation of Gene Expression
- **Lac Operon**: Inducible system.
  - *Inducer (Lactose)* binds to repressor, allowing RNA polymerase to transcribe structural genes (z, y, a).

## Human Genome Project (HGP)
- "Mega project". 3 x 10^9 bp.
- Goals: Identify all genes, sequence DNA, store info.

## DNA Fingerprinting
- Based on **VNTRs** (Variable Number of Tandem Repeats).
- Steps: Isolation → Digestion → Electrophoresis → Blotting → Hybridization → Autoradiography.`,
        questions: `### Practice Questions
**Q1. The semi-conservative nature of DNA replication was proved by:**
A) Watson and Crick B) Meselson and Stahl C) Hershey and Chase D) Griffith
**Answer: B**.

**Q2. Which of the following is a stop codon?**
A) AUG B) UAA C) UGG D) GUG
**Answer: B**. (UAA, UAG, and UGA are stop codons).

**Q3. In the Lac Operon, lactose acts as:**
A) Repressor B) Inducer C) Promoter D) Operator
**Answer: B**.`
      },
      {
        id: "b12-7",
        title: "Evolution",
        summary: "Discusses theories of origin of life, evidence for evolution, and the mechanism of natural selection.",
        content: `# Evolution

## Origin of Life
- **Big Bang Theory**: Origin of universe.
- **Miller's Experiment**: Simulated primitive earth conditions (CH4, NH3, H2, H2O vapor) and produced amino acids.
- **Theories**:
  - *Panspermia*: Life came from outer space.
  - *Spontaneous Generation*: Life from decaying matter (disproved by Louis Pasteur).
  - *Chemical Evolution*: Oparin and Haldane (Inorganic → Organic → Life).

## Evidence for Evolution
- **Paleontological**: Fossil records.
- **Comparative Anatomy**:
  - *Homologous Organs*: Same origin, different function (Divergent evolution). e.g., Forelimbs of whale, bat, cheetah, human.
  - *Analogous Organs*: Different origin, same function (Convergent evolution). e.g., Wings of butterfly and bird.
- **Biochemical**: Similarities in proteins and genes.
- **Industrial Melanism**: Natural selection in peppered moths in England.

## Theories of Evolution
- **Lamarckism**: Inheritance of acquired characters (disproved).
- **Darwinism**: Natural selection, Branching descent.
- **Mutation Theory**: Hugo de Vries. Mutations are random, directionless, and cause speciation (Saltation).

## Hardy-Weinberg Principle
- Allele frequencies in a population are stable (p² + 2pq + q² = 1).
- **Factors affecting**: Gene flow, Genetic drift (Founder effect, Bottleneck effect), Mutation, Genetic recombination, Natural selection.

## Human Evolution
- Dryopithecus → Ramapithecus → Australopithecines → Homo habilis → Homo erectus → Neanderthal man → Homo sapiens.`,
      },
      {
        id: "b12-8",
        title: "Human Health and Disease",
        summary: "Covers common infectious diseases, immunity, AIDS, cancer, and drug abuse.",
        content: `# Human Health and Disease

## Common Infectious Diseases
- **Bacterial**:
  - *Typhoid*: *Salmonella typhi*. Widal test for diagnosis.
  - *Pneumonia*: *Streptococcus pneumoniae*.
- **Viral**:
  - *Common Cold*: Rhino viruses.
- **Protozoan**:
  - *Malaria*: *Plasmodium* (P. vivax, P. falciparum - most serious). Vector: Female Anopheles.
  - *Amoebiasis*: *Entamoeba histolytica*.
- **Helminthic**:
  - *Ascariasis*: *Ascaris*.
  - *Elephantiasis*: *Wuchereria bancrofti*.
- **Fungal**:
  - *Ringworm*: *Microsporum*, *Trichophyton*.

## Immunity
- **Innate**: Non-specific. Barriers: Physical (Skin), Physiological (Acid in stomach), Cellular (WBCs), Cytokine (Interferons).
- **Acquired**: Specific.
  - *Humoral*: B-lymphocytes produce Antibodies.
  - *Cell-mediated*: T-lymphocytes (responsible for graft rejection).
- **Active vs Passive**: Active (body produces antibodies), Passive (ready-made antibodies, e.g., Colostrum, Anti-tetanus).

## AIDS (Acquired Immuno Deficiency Syndrome)
- Caused by **HIV** (Retrovirus).
- Attacks Helper T-cells.
- Diagnosis: ELISA. Treatment: Anti-retroviral drugs.

## Cancer
- Loss of **Contact Inhibition**.
- **Tumors**: Benign (localized) and Malignant (metastasize).
- **Carcinogens**: UV rays, X-rays, Tobacco smoke, Oncogenic viruses.

## Drugs and Alcohol Abuse
- **Opioids**: Heroin (Smack). Depressant.
- **Cannabinoids**: Affect cardiovascular system.
- **Coca Alkaloids**: Cocaine (Coke). Interferes with Dopamine.
- **Hallucinogens**: Atropa belladonna, Datura.`,
      },
      {
        id: "b12-13",
        title: "Microbes in Human Welfare",
        summary: "Discusses the role of microbes in household products, industrial production, sewage treatment, and as biocontrol agents.",
        content: `# Microbes in Human Welfare

## Household Products
- **Lactobacillus**: Converts milk to curd, increases Vitamin B12.
- **Saccharomyces cerevisiae**: Brewer's yeast (Ethanol) and Baker's yeast (Bread).
- **Toddy**: Fermented sap from palms.
- **Cheese**: *Propionibacterium sharmanii* (Swiss cheese - large holes due to CO2), *Penicillium roqueforti* (Roquefort cheese).

## Industrial Products
- **Antibiotics**: Alexander Fleming (Penicillin from *Penicillium notatum*).
- **Chemicals/Enzymes**:
  - *Aspergillus niger* (Citric acid), *Acetobacter aceti* (Acetic acid), *Clostridium butylicum* (Butyric acid), *Lactobacillus* (Lactic acid).
  - *Lipases*: In detergents.
  - *Pectinases/Proteases*: Clarifying bottled juices.
  - *Streptokinase*: "Clot buster" for myocardial infarction.
  - *Cyclosporin A*: Immunosuppressant (from *Trichoderma polysporum*).
  - *Statins*: Blood cholesterol lowering agent (from *Monascus purpureus*).

## Sewage Treatment
- **Primary**: Physical removal of grit and floating debris.
- **Secondary (Biological)**:
  - *Flocs*: Masses of bacteria associated with fungal filaments.
  - *BOD (Biochemical Oxygen Demand)*: Measure of organic matter in water. High BOD = High pollution.
  - *Anaerobic Sludge Digesters*: Produce Biogas (CH4, H2S, CO2).

## Microbes as Biocontrol Agents
- **Bacillus thuringiensis (Bt)**: Controls butterfly caterpillars.
- **Trichoderma**: Free-living fungi in root ecosystems, control several plant pathogens.
- **Baculoviruses (Nucleopolyhedrovirus)**: Excellent for species-specific, narrow spectrum insecticidal applications.

## Microbes as Biofertilizers
- **Rhizobium**: Symbiotic in legumes.
- **Azospirillum/Azotobacter**: Free-living nitrogen fixers.
- **Mycorrhiza (Glomus)**: Fungi help in phosphorus absorption.
- **Cyanobacteria (Anabaena, Nostoc)**: Fix nitrogen in paddy fields.`,
      },
      {
        id: "b12-9",
        title: "Biotechnology and its Applications",
        summary: "Discusses the use of biotechnology in agriculture, medicine, and the production of transgenic animals.",
        content: `# Biotechnology and its Applications

## Agriculture
- **Bt Cotton**: *Cry* genes (CryIAc, CryIIAb for bollworms; CryIAb for corn borer).
- **Pest Resistant Plants**: **RNA Interference (RNAi)**. Uses *Agrobacterium* vectors to introduce nematode-specific genes into tobacco plants.

## Medicine
- **Genetically Engineered Insulin**: Two chains (A and B) linked by disulfide bonds. Produced in *E. coli* using recombinant DNA.
- **Gene Therapy**: First used in 1990 for a 4-year-old girl with **ADA (Adenosine Deaminase) deficiency**.
- **Molecular Diagnosis**:
  - *PCR*: Detects low concentrations of bacteria/viruses (e.g., HIV).
  - *ELISA*: Based on antigen-antibody interaction.

## Transgenic Animals
- **Rosie**: First transgenic cow (1997). Produced human protein-enriched milk (alpha-lactalbumin).
- **Uses**: Study of disease, vaccine safety, chemical safety testing.

## Ethical Issues
- **GEAC (Genetic Engineering Approval Committee)**: Makes decisions regarding GM research validity and safety.
- **Biopiracy**: Use of bio-resources by MNCs without proper authorization (e.g., Basmati rice patent).`,
      },
      {
        id: "b12-10",
        title: "Organisms and Populations",
        summary: "Explores organism-environment interactions, population attributes, and population interactions.",
        content: `# Organisms and Populations

## Organism and its Environment
- **Abiotic Factors**:
  - *Temperature*: Most important. Eurythermal (wide range) vs Stenothermal (narrow range).
  - *Water*: Salinity affects aquatic life.
  - *Light*: Important for photosynthesis and photoperiodism.
  - *Soil*: Composition and pH determine vegetation.
- **Responses to Abiotic Factors**:
  - *Regulate*: Maintain homeostasis (Birds, Mammals).
  - *Conform*: Internal environment changes with external (99% animals).
  - *Migrate*: Move temporarily (e.g., Keoladeo National Park).
  - *Suspend*: Hibernation (Bears), Aestivation (Snails), Diapause (Zooplankton).

## Adaptations
- **Kangaroo Rat**: Internal fat oxidation for water.
- **Desert Plants**: Thick cuticle, sunken stomata (CAM pathway).
- **Cold Climates**: **Allen's Rule** (shorter ears and limbs to minimize heat loss).
- **High Altitude**: Altitude sickness (body compensates by increasing RBC production).

## Populations
- **Attributes**: Birth rate, Death rate, Sex ratio, Age pyramids (Expanding, Stable, Declining).
- **Growth Models**:
  - *Exponential*: dN/dt = rN (Unrestricted resources).
  - *Logistic*: dN/dt = rN [(K-N)/K] (Restricted resources, K = Carrying capacity).

## Population Interactions
- **Mutualism (+/+)**: Lichens (Algae/Fungi), Mycorrhiza (Fungi/Roots).
- **Competition (-/-)**: Gause’s Competitive Exclusion Principle.
- **Predation (+/-)**: Predator keeps prey population under control.
- **Parasitism (+/-)**: Ectoparasites (Lice) and Endoparasites (Tapeworm). Brood parasitism (Cuckoo and Crow).
- **Commensalism (+/0)**: Barnacles on whale, Cattle egret and cattle.
- **Amensalism (-/0)**: Penicillium inhibiting bacteria.`,
      },
      {
        id: "b12-11",
        title: "Ecosystem",
        summary: "Discusses ecosystem structure, productivity, decomposition, energy flow, and ecological pyramids.",
        content: `# Ecosystem

## Structure and Function
- **Productivity**:
  - *Primary Productivity*: Rate of biomass production by producers.
  - *GPP (Gross Primary Productivity)*: Total organic matter produced.
  - *NPP (Net Primary Productivity)*: GPP - Respiration.
- **Decomposition**: Breakdown of complex organic matter into inorganic substances.
  - *Steps*: Fragmentation → Leaching → Catabolism → Humification → Mineralization.

## Energy Flow
- **10% Law**: Only 10% of energy is transferred to the next trophic level.
- **Food Chain**: Grazing Food Chain (GFC) and Detritus Food Chain (DFC).

## Ecological Pyramids
- **Pyramid of Number**: Usually upright (except tree ecosystem).
- **Pyramid of Biomass**: Upright (terrestrial) or Inverted (aquatic).
- **Pyramid of Energy**: **Always upright** (energy is lost as heat at each step).

## Ecological Succession
- **Primary**: On bare area (very slow).
- **Secondary**: In areas where natural vegetation was destroyed (faster).
- **Hydrarch**: In water (Pioneer: Phytoplankton).
- **Xerarch**: On bare rock (Pioneer: Lichens).

## Nutrient Cycling
- **Gaseous**: Carbon, Nitrogen (Reservoir: Atmosphere).
- **Sedimentary**: Phosphorus, Sulphur (Reservoir: Earth's crust).`,
      },
      {
        id: "b12-12",
        title: "Biodiversity and Conservation",
        summary: "Covers levels of biodiversity, patterns of biodiversity, and strategies for conservation.",
        content: `# Biodiversity and Conservation

## Levels of Biodiversity
- **Genetic**: Diversity within a species (e.g., *Rauwolfia vomitoria*).
- **Species**: Diversity at species level (e.g., Western Ghats have more amphibians than Eastern Ghats).
- **Ecological**: Diversity at ecosystem level (e.g., Deserts, Rain forests).

## Patterns of Biodiversity
- **Latitudinal Gradients**: Diversity decreases as we move away from the equator. Amazon rain forest is the most diverse.
- **Species-Area Relationship**: Alexander von Humboldt. log S = log C + Z log A. (Z is slope of line, usually 0.1 to 0.2).

## Importance of Biodiversity
- **David Tilman's Experiments**: More species = less year-to-year variation in total biomass.
- **Rivet Popper Hypothesis**: Paul Ehrlich. Comparing ecosystem to an airplane; species are rivets.

## Loss of Biodiversity
- **The Evil Quartet**:
  1. Habitat loss and fragmentation (most important).
  2. Over-exploitation.
  3. Alien species invasions (e.g., Nile perch, Lantana, Water hyacinth).
  4. Co-extinctions.

## Conservation
- **Why conserve?**: Narrowly utilitarian (food, medicine), Broadly utilitarian (oxygen, pollination), Ethical.
- **How to conserve?**:
  - *In-situ*: Hotspots (34 in world), Biosphere reserves, National parks, Sanctuaries, Sacred groves.
  - *Ex-situ*: Zoological parks, Botanical gardens, Cryopreservation (-196°C), Seed banks.`,
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
- **Percentage Error**: Relative error × 100%
- **Combination of Errors**:
  - Sum/Difference: ΔZ = ΔA + ΔB
  - Product/Quotient: ΔZ/Z = ΔA/A + ΔB/B
  - Power: Z = A^p B^q / C^r => ΔZ/Z = p(ΔA/A) + q(ΔB/B) + r(ΔC/C)`,
        formulas: `### Dimensional Formulas & Units

| Physical Quantity | Dimensional Formula | SI Unit |
|:------------------|:--------------------|:--------|
| Density           | [M L⁻³ T⁰]          | kg/m³   |
| Velocity          | [M⁰ L T⁻¹]          | m/s     |
| Acceleration      | [M⁰ L T⁻²]          | m/s²    |
| Force             | [M L T⁻²]           | Newton (N) |
| Work / Energy     | [M L² T⁻²]          | Joule (J) |
| Power             | [M L² T⁻³]          | Watt (W) |
| Pressure          | [M L⁻¹ T⁻²]         | Pascal (Pa) |
| Frequency         | [M⁰ L⁰ T⁻¹]         | Hertz (Hz) |
| Gravitational Constant (G) | [M⁻¹ L³ T⁻²] | N m²/kg² |
| Planck's Constant (h) | [M L² T⁻¹]       | J s     |`
      },
      {
        id: "p11-2",
        title: "Laws of Motion",
        summary: "Covers Newton's three laws of motion, the concept of inertia, momentum, impulse, and the dynamics of circular motion and friction.",
        content: `# Laws of Motion

## Newton's Laws
1. **First Law (Law of Inertia)**: An object continues to be in its state of rest or uniform motion unless acted upon by an external force. Inertia depends on mass.
2. **Second Law**: F = dp/dt = ma. The rate of change of momentum is proportional to the applied force.
3. **Third Law**: To every action, there is an equal and opposite reaction. Action and reaction act on different bodies.

## Momentum and Impulse
- **Linear Momentum**: p = mv.
- **Impulse**: J = F_avg * Δt = Δp. Large force acting for a short time.

## Friction
- **Static Friction (f_s)**: Opposes impending motion. f_s ≤ μ_s N.
- **Kinetic Friction (f_k)**: Opposes actual relative motion. f_k = μ_k N.
- **Rolling Friction**: Least among all.
- **Angle of Friction (θ)**: tan θ = μ.

## Dynamics of Circular Motion
- **Centripetal Force**: F_c = mv²/r = mω²r.
- **Maximum speed on a flat road**: v_max = √(μrg).
- **Banking of Roads**: v_max = √[rg (μ + tanθ) / (1 - μ tanθ)].
- **Optimum speed (μ=0)**: v = √(rg tanθ).`,
        formulas: `### Laws of Motion Formulas

| Concept | Formula | Terms |
|:--------|:--------|:------|
| Momentum | p = mv | m=mass, v=velocity |
| Force | F = ma | m=mass, a=acceleration |
| Impulse | J = FΔt = Δp | F=force, t=time, p=momentum |
| Static Friction | f_s(max) = μ_s N | μ_s=coeff. static friction, N=normal force |
| Kinetic Friction | f_k = μ_k N | μ_k=coeff. kinetic friction |
| Centripetal Force | F_c = mv²/r | r=radius |
| Banking Angle | tan θ = v²/rg | v=speed, g=9.8m/s² |`
      },
      {
        id: "p11-3",
        title: "Work, Energy and Power",
        summary: "Explores the work-energy theorem, conservative and non-conservative forces, conservation of mechanical energy, and collisions.",
        content: `# Work, Energy and Power

## Work
- W = F·s = Fs cosθ.
- Work is a scalar. Positive if θ < 90°, Negative if θ > 90°, Zero if θ = 90°.
- Work done by a variable force: W = ∫ F dx.

## Energy
- **Kinetic Energy (K)**: K = ½mv² = p²/2m.
- **Potential Energy (U)**: 
  - Gravitational: U = mgh.
  - Elastic (Spring): U = ½kx².
- **Work-Energy Theorem**: W_net = ΔK = K_f - K_i.
- **Conservation of Mechanical Energy**: E = K + U remains constant if only conservative forces do work.

## Power
- Average Power: P_avg = W/t.
- Instantaneous Power: P = dW/dt = F·v.

## Collisions
- **Elastic Collision**: Both momentum and KE are conserved. Coefficient of restitution (e) = 1.
- **Inelastic Collision**: Only momentum is conserved. 0 < e < 1.
- **Perfectly Inelastic**: Bodies stick together. e = 0.`,
        formulas: `### Work, Energy & Power Formulas

| Quantity | Formula | Details |
|:---------|:--------|:--------|
| Work | W = Fs cosθ | θ is angle between F and s |
| Kinetic Energy | K = ½mv² | m=mass, v=velocity |
| Potential Energy | U = mgh | g=acceleration due to gravity |
| Spring Energy | U = ½kx² | k=spring constant, x=displacement |
| Power | P = Fv cosθ | v=instantaneous velocity |
| Coeff. of Restitution | e = (v₂-v₁)/(u₁-u₂) | v=final vel, u=initial vel |`
      },
      {
        id: "p11-4",
        title: "Gravitation",
        summary: "Discusses Newton's law of universal gravitation, Kepler's laws, acceleration due to gravity, and the concept of escape velocity.",
        content: `# Gravitation

## Newton's Law of Gravitation
F = G m₁m₂ / r². G = 6.67 * 10⁻¹¹ N m²/kg².

## Acceleration due to Gravity (g)
- On surface: g = GM/R².
- At height h: g_h = g(1 - 2h/R) for h << R.
- At depth d: g_d = g(1 - d/R).

## Kepler's Laws
1. **Law of Orbits**: Planets move in elliptical orbits with Sun at one focus.
2. **Law of Areas**: A line joining a planet and the Sun sweeps out equal areas in equal intervals of time (Conservation of Angular Momentum).
3. **Law of Periods**: T² ∝ r³.

## Escape Velocity and Orbital Velocity
- **Escape Velocity (v_e)**: Minimum velocity to leave Earth's gravity. v_e = √(2GM/R) = √(2gR) ≈ 11.2 km/s.
- **Orbital Velocity (v_o)**: Velocity of a satellite in orbit. v_o = √(GM/r).
- **Relation**: v_e = √2 v_o.`,
        formulas: `### Gravitation Formulas

| Concept | Formula | Terms |
|:--------|:--------|:------|
| Gravitational Force | F = Gm₁m₂/r² | G=Universal constant |
| Acceleration (g) | g = GM/R² | M=mass of Earth, R=radius |
| Potential Energy | U = -GMm/r | r=distance from center |
| Escape Velocity | v_e = √(2gR) | R=Radius of planet |
| Orbital Velocity | v_o = √(gR) | For satellite near surface |
| Time Period | T = 2π√(r³/GM) | r=orbital radius |`
      }
    ],
    class12: [
      {
        id: "p12-1",
        title: "Electrostatics",
        summary: "Discusses electric charges, Coulomb's law, electric fields, Gauss's law, and the concept of electric potential and capacitance.",
        content: `# Electrostatics

## Coulomb's Law
F = (1/4πε₀) * (q₁q₂/r²). k = 1/4πε₀ ≈ 9 * 10⁹ N m²/C².

## Electric Field (E)
- E = F/q.
- Due to point charge: E = kQ/r².
- **Electric Dipole**: Two equal and opposite charges separated by distance 2a. Dipole moment p = q * 2a.
  - Axial point: E = 2kp/r³.
  - Equatorial point: E = kp/r³.

## Gauss's Law
Total flux Φ = ∮ E·dA = q_enclosed / ε₀.

## Electric Potential (V)
- V = W/q.
- Due to point charge: V = kQ/r.
- Relation: E = -dV/dr.

## Capacitance (C)
- C = Q/V.
- Parallel Plate: C = ε₀A/d.
- Energy Stored: U = ½CV² = ½QV = Q²/2C.`,
        formulas: `### Electrostatics Formulas

| Quantity | Formula | Details |
|:---------|:--------|:--------|
| Coulomb Force | F = kq₁q₂/r² | k = 9x10⁹ |
| Electric Field | E = kQ/r² | Q=Source charge |
| Dipole Moment | p = q(2a) | Vector from -q to +q |
| Gauss's Law | Φ = q/ε₀ | ε₀ = 8.85x10⁻¹² |
| Potential | V = kQ/r | Scalar quantity |
| Capacitance | C = ε₀A/d | A=Area, d=separation |
| Energy in Cap. | U = ½CV² | V=Potential difference |`
      },
      {
        id: "p12-2",
        title: "Ray Optics",
        summary: "Covers reflection, refraction, total internal reflection, lenses, prisms, and optical instruments like microscopes and telescopes.",
        content: `# Ray Optics

## Reflection
- **Mirror Formula**: 1/v + 1/u = 1/f.
- **Magnification**: m = -v/u = f / (f - u).

## Refraction
- **Snell's Law**: n₁ sinθ₁ = n₂ sinθ₂.
- **Refractive Index**: n = c/v.
- **Total Internal Reflection (TIR)**: Occurs when light travels from denser to rarer medium and angle of incidence i > critical angle i_c. sin i_c = 1/n.

## Lenses
- **Lens Maker's Formula**: 1/f = (n - 1)(1/R₁ - 1/R₂).
- **Lens Formula**: 1/v - 1/u = 1/f.
- **Power**: P = 1/f (in meters). Unit: Dioptre (D).
- **Combination of Lenses**: 1/F = 1/f₁ + 1/f₂.

## Prisms
- Refractive index: n = sin[(A + δ_m)/2] / sin(A/2).`,
        formulas: `### Ray Optics Formulas

| Concept | Formula | Terms |
|:--------|:--------|:------|
| Mirror Formula | 1/f = 1/v + 1/u | f=focus, v=image, u=object |
| Lens Formula | 1/f = 1/v - 1/u | Sign convention applies |
| Magnification | m = -v/u (Mirror) | m = v/u (Lens) |
| Snell's Law | n₁ sin i = n₂ sin r | n=refractive index |
| Critical Angle | sin i_c = 1/n | n=denser w.r.t rarer |
| Lens Power | P = 1/f | f in meters |
| Prism Index | n = sin(A+D)/2 / sin(A/2) | A=Prism angle, D=Min deviation |`
      },
      {
        id: "p12-3",
        title: "Dual Nature of Radiation",
        summary: "Explores the photoelectric effect, Einstein's photoelectric equation, and the de Broglie hypothesis of matter waves.",
        content: `# Dual Nature of Radiation and Matter

## Photoelectric Effect
- Emission of electrons from metal surface when light of suitable frequency falls on it.
- **Threshold Frequency (ν₀)**: Minimum frequency required for emission.
- **Work Function (Φ₀)**: Minimum energy required. Φ₀ = hν₀.
- **Einstein's Photoelectric Equation**: K_max = hν - Φ₀ = eV_s (where V_s is stopping potential).

## de Broglie Hypothesis
- Every moving particle has a wave associated with it.
- **de Broglie Wavelength**: λ = h/p = h/mv.
- For an electron accelerated by V volts: λ = 12.27 / √V Å.`,
        formulas: `### Dual Nature Formulas

| Quantity | Formula | Details |
|:---------|:--------|:--------|
| Photon Energy | E = hν = hc/λ | h=6.63x10⁻³⁴ J s |
| Work Function | Φ₀ = hν₀ | ν₀=Threshold frequency |
| Einstein Eq. | K_max = hν - Φ₀ | K_max=Max Kinetic Energy |
| Stopping Pot. | K_max = eV_s | e=1.6x10⁻¹⁹ C |
| de Broglie λ | λ = h/p | p=momentum |
| λ (Electron) | λ = h/√(2mK) | K=Kinetic Energy |`
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

## Matter and its Nature
- **Matter**: Anything that has mass and occupies space.
- **Classification**: 
  - *Physical*: Solid, Liquid, Gas.
  - *Chemical*: Pure substances (Elements, Compounds) and Mixtures (Homogeneous, Heterogeneous).

## Laws of Chemical Combinations
1. **Law of Conservation of Mass**: Mass is neither created nor destroyed.
2. **Law of Definite Proportions**: A compound always contains exactly the same proportion of elements by weight.
3. **Law of Multiple Proportions**: If two elements form more than one compound, the masses of one element that combine with a fixed mass of the other are in a ratio of small whole numbers.
4. **Gay Lussac’s Law of Gaseous Volumes**: Gases combine in a simple ratio by volume at constant T and P.
5. **Avogadro’s Law**: Equal volumes of all gases at the same T and P contain equal number of molecules.

## Mole Concept
- **1 mole** = 6.022 × 10²³ entities (Avogadro number, N_A).
- **Molar Mass**: Mass of one mole of a substance in grams.
- **Molar Volume**: 22.4 L at STP (0°C, 1 atm) or 22.7 L at STP (0°C, 1 bar).

## Concentration Terms
- **Mass Percentage**: (Mass of solute / Mass of solution) × 100.
- **Mole Fraction (x)**: n_i / Σn.
- **Molarity (M)**: Moles of solute per liter of solution. (Temperature dependent).
- **Molality (m)**: Moles of solute per kg of solvent. (Temperature independent).`,
        formulas: `### Basic Chemistry Formulas

| Concept | Formula | Details |
|:--------|:--------|:--------|
| Number of Moles | n = w/M = N/N_A | w=mass, M=molar mass |
| Moles (Gas) | n = V(L) / 22.4 | At STP (1 atm) |
| Molarity (M) | M = n / V(L) | V=Volume of solution |
| Molality (m) | m = n / W(kg) | W=Mass of solvent |
| Normality (N) | N = M × n-factor | n-factor depends on reaction |
| Dilution Law | M₁V₁ = M₂V₂ | For same solute |`
      },
      {
        id: "c11-2",
        title: "Chemical Bonding",
        summary: "Explains ionic and covalent bonding, VSEPR theory, hybridization, and molecular orbital theory for predicting molecular shapes and stability.",
        content: `# Chemical Bonding and Molecular Structure

## Octet Rule
- Atoms combine to achieve a stable octet (8 electrons) in their valence shell.
- **Limitations**: Incomplete octet (LiCl, BeH2, BCl3), Expanded octet (PCl5, SF6, H2SO4), Odd electron molecules (NO, NO2).

## Ionic or Electrovalent Bond
- Formed by transfer of electrons.
- **Lattice Enthalpy**: Energy required to separate one mole of ionic compound into gaseous ions.
- **Fajan's Rule**: Predicts covalent character in ionic bonds. High charge and small size of cation favor covalency.

## Covalent Bond
- Formed by sharing of electrons.
- **VSEPR Theory**: Predicts shape based on repulsion between electron pairs (LP-LP > LP-BP > BP-BP).
- **Hybridization**: Mixing of atomic orbitals to form new hybrid orbitals.
  - sp: Linear (180°)
  - sp²: Trigonal Planar (120°)
  - sp³: Tetrahedral (109.5°)
  - sp³d: Trigonal Bipyramidal
  - sp³d²: Octahedral

## Molecular Orbital Theory (MOT)
- Linear combination of atomic orbitals (LCAO).
- **Bond Order**: ½(N_b - N_a).
- If Bond Order > 0, molecule is stable.
- Paramagnetic if unpaired electrons are present.`,
        formulas: `### Chemical Bonding Formulas

| Concept | Formula | Details |
|:--------|:--------|:--------|
| Formal Charge | V - L - ½B | V=Valence, L=Lone, B=Bond e- |
| Bond Order | ½(N_b - N_a) | N_b=Bonding, N_a=Antibonding |
| Dipole Moment | μ = q × d | q=charge, d=distance |
| Hybridization | H = ½(V + M - C + A) | V=Valence, M=Monovalent, C=Cation, A=Anion |`
      },
      {
        id: "c11-3",
        title: "Equilibrium",
        summary: "Covers chemical and ionic equilibrium, Le Chatelier's principle, pH scale, and buffer solutions.",
        content: `# Equilibrium

## Chemical Equilibrium
- **Law of Chemical Equilibrium**: K_c = [Products] / [Reactants].
- **Le Chatelier's Principle**:
  - *Concentration*: Adding reactant shifts equilibrium to products.
  - *Pressure*: Increase in pressure shifts to side with fewer gas moles.
  - *Temperature*: Increase in T shifts in direction of endothermic reaction.

## Ionic Equilibrium
- **Acids and Bases**:
  - *Arrhenius*: H⁺ donor / OH⁻ donor.
  - *Bronsted-Lowry*: Proton donor / Proton acceptor.
  - *Lewis*: Electron pair acceptor / Electron pair donor.
- **pH Scale**: pH = -log[H⁺]. pH + pOH = 14 at 298K.
- **Common Ion Effect**: Suppression of dissociation of a weak electrolyte by adding a strong electrolyte with a common ion.
- **Buffer Solutions**: Maintain constant pH.
  - Acidic Buffer: Weak acid + its salt with strong base.
  - Basic Buffer: Weak base + its salt with strong acid.`,
        formulas: `### Equilibrium Formulas

| Concept | Formula | Details |
|:--------|:--------|:--------|
| Equilibrium Const | K_p = K_c (RT)^Δn | Δn = change in gas moles |
| Reaction Quotient | Q_c = [P]/[R] | At any time t |
| pH | pH = -log[H⁺] | [H⁺] in mol/L |
| Henderson Eq. | pH = pK_a + log([S]/[A]) | For acidic buffer |
| Solubility Prod. | K_sp = [A]^x [B]^y | For salt A_x B_y |
| Degree of Dissoc. | α = √(K/C) | Ostwald's Dilution Law |`
      }
    ],
    class12: [
      {
        id: "c12-1",
        title: "Chemical Kinetics",
        summary: "Examines the rate of chemical reactions, factors affecting them, order and molecularity, and the Arrhenius equation for temperature dependence.",
        content: `# Chemical Kinetics

## Rate of Reaction
- Change in concentration of reactant or product per unit time.
- **Factors Affecting Rate**: Concentration, Temperature, Catalyst, Surface Area.

## Order and Molecularity
- **Order**: Sum of powers of concentration terms in rate law. (Experimental).
- **Molecularity**: Number of reacting species taking part in an elementary reaction. (Theoretical).

## Integrated Rate Laws
- **Zero Order**: [A] = [A]₀ - kt. t½ = [A]₀ / 2k.
- **First Order**: ln[A] = ln[A]₀ - kt. t½ = 0.693 / k.

## Temperature Dependence
- **Arrhenius Equation**: k = A e^(-Ea/RT).
- Activation Energy (Ea): Minimum extra energy required by reactants to form products.`,
        formulas: `### Chemical Kinetics Formulas

| Concept | Formula | Details |
|:--------|:--------|:--------|
| Rate Law | Rate = k[A]^x [B]^y | x+y = Order |
| Zero Order t½ | t½ = [A]₀ / 2k | Linear with [A]₀ |
| First Order k | k = (2.303/t) log([A]₀/[A]) | k in s⁻¹ |
| First Order t½ | t½ = 0.693 / k | Independent of [A]₀ |
| Arrhenius Eq. | log(k₂/k₁) = Ea/2.303R [1/T₁ - 1/T₂] | T in Kelvin |`
      },
      {
        id: "c12-2",
        title: "Organic Chemistry Basics",
        summary: "Introduces nomenclature, isomerism, and fundamental electronic effects like inductive, resonance, and hyperconjugation in organic reactions.",
        content: `# General Organic Chemistry (GOC)

## Electronic Effects
1. **Inductive Effect (I)**: Permanent polarization of σ-bond. +I (alkyl groups) and -I (halogens, NO2).
2. **Electromeric Effect (E)**: Temporary effect in presence of reagent.
3. **Resonance / Mesomeric Effect (M)**: Delocalization of π-electrons. +M (OH, NH2) and -M (CHO, COOH).
4. **Hyperconjugation**: σ-π conjugation. Stability of carbocations and alkenes ∝ number of α-hydrogens.

## Reaction Intermediates
- **Carbocations**: sp² hybridized, planar. Stability: 3° > 2° > 1° > Methyl.
- **Carbanions**: sp³ hybridized, pyramidal. Stability: Methyl > 1° > 2° > 3°.
- **Free Radicals**: Stability: 3° > 2° > 1° > Methyl.

## Isomerism
- **Structural**: Chain, Position, Functional, Metamerism, Tautomerism.
- **Stereoisomerism**:
  - *Geometrical*: Cis-Trans (due to restricted rotation).
  - *Optical*: Enantiomers, Diastereomers (due to chirality).`,
        formulas: `### GOC Stability Orders

| Intermediate | Stability Order |
|:-------------|:----------------|
| Carbocation  | 3° > 2° > 1° > CH₃⁺ |
| Carbanion    | CH₃⁻ > 1° > 2° > 3° |
| Free Radical | 3° > 2° > 1° > CH₃· |
| Acid Strength | -I/-M increases, +I/+M decreases |
| Base Strength | +I/+M increases, -I/-M decreases |`
      },
      {
        id: "c12-3",
        title: "Coordination Compounds",
        summary: "Explains Werner's theory, nomenclature, isomerism, and bonding theories like VBT and CFT for coordination complexes.",
        content: `# Coordination Compounds

## Werner's Theory
- **Primary Valency**: Ionizable, corresponds to oxidation state.
- **Secondary Valency**: Non-ionizable, corresponds to coordination number. Fixed for a metal.

## Nomenclature
- Cation named first.
- Ligands in alphabetical order.
- Metal name ends in '-ate' if complex is anionic.

## Bonding Theories
- **Valence Bond Theory (VBT)**: Hybridization (sp³-Tetrahedral, dsp²-Square Planar, sp³d²-Outer Octahedral, d²sp³-Inner Octahedral).
- **Crystal Field Theory (CFT)**: Splitting of d-orbitals.
  - *Octahedral*: t2g (lower) and eg (higher).
  - *Tetrahedral*: e (lower) and t2 (higher).
  - **Spectrochemical Series**: I⁻ < Br⁻ < S²⁻ < SCN⁻ < Cl⁻ < F⁻ < OH⁻ < C₂O₄²⁻ < H₂O < NCS⁻ < edta⁴⁻ < NH₃ < en < CN⁻ < CO.`,
        formulas: `### Coordination Formulas

| Concept | Formula | Details |
|:--------|:--------|:--------|
| EAN | Z - (O.S.) + 2(C.N.) | Z=Atomic number |
| Magnetic Moment | μ = √[n(n+2)] BM | n=unpaired electrons |
| CFSE (Oct) | [-0.4n(t2g) + 0.6n(eg)]Δ₀ | n=number of electrons |
| Spin Only μ | 1.73 (1e), 2.83 (2e), 3.87 (3e) | In Bohr Magnetons |`
      }
    ]
  }
};
