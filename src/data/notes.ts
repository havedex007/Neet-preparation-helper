export interface Chapter {
  id: string;
  title: string;
  summary: string;
  content: string;
  questions?: string;
  formulas?: string;
  pyqWeight?: number;
  difficulty?: number;
  totalQuestions?: number;
  correctAnswers?: number;
  wrongAnswers?: number;
  lastRevised?: string;
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
        pyqWeight: 4,
        difficulty: 2,
        totalQuestions: 50,
        correctAnswers: 45,
        wrongAnswers: 5,
        lastRevised: "2026-02-20",
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
        pyqWeight: 12,
        difficulty: 3,
        totalQuestions: 80,
        correctAnswers: 60,
        wrongAnswers: 20,
        lastRevised: "2026-02-22",
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
        pyqWeight: 15,
        difficulty: 4,
        totalQuestions: 100,
        correctAnswers: 50,
        wrongAnswers: 50,
        lastRevised: "2026-02-24",
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
        pyqWeight: 22,
        difficulty: 5,
        totalQuestions: 150,
        correctAnswers: 60,
        wrongAnswers: 90,
        lastRevised: "2026-02-15",
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
        pyqWeight: 14,
        difficulty: 3,
        totalQuestions: 90,
        correctAnswers: 80,
        wrongAnswers: 10,
        lastRevised: "2026-02-25",
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
- **Modifications**:
  - *Storage*: Carrot, Turnip (Tap); Sweet potato (Adventitious).
  - *Support*: Prop roots (Banyan), Stilt roots (Maize, Sugarcane).
  - *Respiration*: Pneumatophores (Rhizophora).

## The Stem
- Develops from plumule. Has nodes and internodes.
- **Modifications**:
  - *Underground Storage*: Potato, Ginger, Turmeric, Zaminkand, Colocasia.
  - *Tendrils*: Grapes, Gourds (Cucumber, Pumpkin).
  - *Thorns*: Citrus, Bougainvillea.
  - *Phylloclade*: Photosynthetic stem (Opuntia - flattened, Euphorbia - cylindrical).
  - *Vegetative Propagation*: Runners (Grass), Stolons (Jasmine), Offsets (Pistia), Suckers (Chrysanthemum).

## The Leaf
- **Venation**: Reticulate (Dicots) and Parallel (Monocots).
- **Phyllotaxy**: Alternate (China rose, Mustard), Opposite (Calotropis, Guava), Whorled (Alstonia).
- **Modifications**: Tendrils (Pea), Spines (Cacti), Storage (Onion, Garlic).

## The Inflorescence
- **Racemose**: Main axis continues to grow, flowers in acropetal succession.
- **Cymose**: Main axis terminates in a flower, basipetal succession.

## The Flower
- **Symmetry**: Actinomorphic (Radial - Mustard), Zygomorphic (Bilateral - Pea), Asymmetric (Canna).
- **Position of Ovary**: Hypogynous (Superior - Mustard), Perigynous (Half-inferior - Plum, Rose), Epigynous (Inferior - Guava, Cucumber).
- **Aestivation**: Valvate (Calotropis), Twisted (China rose), Imbricate (Cassia, Gulmohur), Vexillary (Pea, Bean).
- **Androecium**: Monadelphous (China rose), Diadelphous (Pea), Polyadelphous (Citrus). Epipetalous (Brinjal), Epiphyllous (Lily).
- **Placentation**: Marginal (Pea), Axile (China rose, Tomato), Parietal (Mustard, Argemone), Free central (Dianthus, Primrose), Basal (Sunflower, Marigold).

## The Fruit and Seed
- **Parthenocarpic Fruit**: Formed without fertilization (Banana).
- **Dicot Seed**: Two cotyledons, non-endospermic (except Castor).
- **Monocot Seed**: One cotyledon (Scutellum), endospermic (except Orchids).`,
      },
      {
        id: "b11-7",
        title: "Anatomy of Flowering Plants",
        summary: "Explores the internal structure of plants, focusing on tissues (meristematic and permanent) and the anatomy of roots, stems, and leaves.",
        content: `# Anatomy of Flowering Plants

## Meristematic Tissues
- **Primary Meristems**: Apical and Intercalary. Increase length.
- **Secondary Meristems**: Lateral meristems (Vascular cambium, Cork cambium). Increase girth.

## Permanent Tissues
- **Simple**:
  - *Parenchyma*: Thin-walled, living, storage/photosynthesis.
  - *Collenchyma*: Thickened at corners (pectin), mechanical support in young stems.
  - *Sclerenchyma*: Dead, thick-walled (lignin). Fibres and Sclereids.
- **Complex**:
  - *Xylem*: Tracheids, Vessels (absent in gymnosperms), Xylem parenchyma, Xylem fibres. Protoxylem (first formed) and Metaxylem.
  - *Phloem*: Sieve tube elements, Companion cells, Phloem parenchyma, Phloem fibres (Bast fibres).

## Tissue Systems
- **Epidermal**: Cuticle, Stomata, Guard cells (Dumbbell shaped in grasses), Trichomes (stem hairs), Root hairs.
- **Ground**: Cortex, Pericycle, Pith, Mesophyll.
- **Vascular**:
  - *Radial*: Xylem and Phloem on different radii (Roots).
  - *Conjoint*: Xylem and Phloem on same radius (Stem/Leaves). Open (with cambium) or Closed (without cambium).

## Anatomy of Dicot and Monocot
- **Dicot Root**: 2-4 xylem bundles, small pith.
- **Monocot Root**: Polyarch (>6), large pith.
- **Dicot Stem**: Vascular bundles in a ring, open, endarch protoxylem.
- **Monocot Stem**: Scattered vascular bundles, closed, water-containing cavities present.
- **Dicot Leaf (Dorsiventral)**: Mesophyll differentiated into Palisade and Spongy.
- **Monocot Leaf (Isobilateral)**: Mesophyll not differentiated. Have **Bulliform cells** (help in rolling of leaves).

## Secondary Growth
- Occurs in Dicots due to Vascular and Cork cambium.
- **Heartwood**: Central, dark, durable, non-conducting.
- **Sapwood**: Peripheral, light, conducting.
- **Lenticels**: Pores for gas exchange in woody stems.`,
      },
      {
        id: "b11-19",
        title: "Structural Organisation in Animals",
        summary: "Covers animal tissues (epithelial, connective, muscular, neural) and the anatomy of a cockroach as a representative animal.",
        content: `# Structural Organisation in Animals

## Animal Tissues
- **Epithelial**:
  - *Simple*: Squamous (diffusion), Cuboidal (secretion/absorption), Columnar (secretion/absorption), Ciliated (moving particles).
  - *Compound*: Protection (Skin).
- **Connective**:
  - *Loose*: Areolar (support), Adipose (fat storage).
  - *Dense*: Regular (Tendons - M to B, Ligaments - B to B), Irregular (Skin).
  - *Specialized*: Cartilage (Chondrocytes), Bone (Osteocytes), Blood (Plasma + Formed elements).
- **Muscular**: Skeletal (striated, voluntary), Smooth (non-striated, involuntary), Cardiac (striated, involuntary, intercalated discs).
- **Neural**: Neurons (excitable) and Neuroglia (support).

## Cockroach (Periplaneta americana)
- **Morphology**:
  - Body parts: Head, Thorax (Prothorax, Mesothorax, Metathorax), Abdomen (10 segments).
  - Wings: Tegmina (Mesothoracic, opaque) and Hind wings (Metathoracic, transparent).
  - Anal cerci (both sexes), Anal styles (only males).
- **Anatomy**:
  - *Digestive*: Mouth → Pharynx → Oesophagus → Crop (storage) → Gizzard (grinding) → Midgut (Hepatic caeca at junction) → Hindgut (Ileum, Colon, Rectum).
  - *Circulatory*: Open type. 13-chambered heart. Alary muscles.
  - *Respiratory*: 10 pairs of spiracles. Tracheal tubes.
  - *Excretory*: Malpighian tubules (100-150). Uricotelic.
  - *Nervous*: Segmental ganglia. 3 in thorax, 6 in abdomen.
  - *Reproductive*:
    - Male: Testes (4-6 segments), Mushroom gland, Phallomeres.
    - Female: Ovaries (2-6 segments), Ootheca (contains 14-16 eggs).`,
      },
      {
        id: "b11-8",
        title: "Cell: The Unit of Life",
        summary: "Detailed study of cell theory, prokaryotic and eukaryotic cell structures, and the functions of various organelles.",
        content: `# Cell: The Unit of Life

## Cell Theory
- Proposed by **Schleiden** (Botanist) and **Schwann** (Zoologist).
- Modified by **Rudolf Virchow** (1855): **"Omnis cellula-e cellula"** (All cells arise from pre-existing cells).

## Prokaryotic Cell
- Represented by Bacteria, BGA, Mycoplasma, and PPLO.
- **Cell Envelope**: Glycocalyx (Slime layer or Capsule) → Cell Wall → Plasma Membrane.
- **Mesosomes**: Extensions of plasma membrane into the cell. Help in cell wall formation, DNA replication, and respiration.
- **Genetic Material**: Naked, not enveloped by nuclear membrane. Single circular DNA (Genophore).
- **Plasmids**: Small circular DNA outside genomic DNA. Confer unique phenotypic characters like antibiotic resistance.
- **Ribosomes**: 70S (50S + 30S). Site of protein synthesis.

## Eukaryotic Cell
- **Plasma Membrane**: **Fluid Mosaic Model** (Singer and Nicolson, 1972). Lipids (phosphoglycerides) arranged in a bilayer with polar heads outwards. Proteins are peripheral or integral.
- **Cell Wall**: Non-living rigid structure. Algae (cellulose, galactans, mannans, CaCO3). Plants (cellulose, hemicellulose, pectins, proteins).
- **Endomembrane System**:
  - *Endoplasmic Reticulum (ER)*: RER (with ribosomes, protein synthesis) and SER (without ribosomes, lipid/steroid synthesis).
  - *Golgi Apparatus*: Camillo Golgi (1898). Site of formation of **glycoproteins and glycolipids**.
  - *Lysosomes*: Membrane-bound vesicular structures rich in hydrolytic enzymes (hydrolases - lipases, proteases, carbohydrases).
  - *Vacuoles*: Bound by a single membrane called **tonoplast**. In plants, occupies 90% volume.
- **Mitochondria**: Double membrane. Inner membrane forms infoldings called **cristae**. Site of aerobic respiration (ATP production). Have their own circular DNA and 70S ribosomes.
- **Plastids**:
  - *Chloroplasts*: Contain chlorophyll and carotenoids. Double membrane. Matrix is **stroma** containing **thylakoids** (stacked as grana).
  - *Chromoplasts*: Fat soluble carotenoid pigments (carotene, xanthophylls).
  - *Leucoplasts*: Amyloplasts (starch), Elaioplasts (oils), Aleuroplasts (proteins).
- **Ribosomes**: George Palade (1953). Composed of RNA and proteins. 80S (60S + 40S).
- **Cytoskeleton**: Microtubules, microfilaments, intermediate filaments. Provide mechanical support, motility, maintenance of cell shape.
- **Cilia and Flagella**: 9+2 arrangement of microtubules.
- **Nucleus**: Robert Brown (1831). Contains **nucleolus** (site of rRNA synthesis) and **chromatin** (DNA + Histones).
- **Microbodies**: Peroxisomes, Glyoxysomes.`,
      },
      {
        id: "b11-9",
        title: "Biomolecules",
        summary: "Discusses the chemical composition of living organisms, focusing on carbohydrates, proteins, lipids, nucleic acids, and enzymes.",
        content: `# Biomolecules

## Analysis of Chemical Composition
- Living tissue + Trichloroacetic acid (Cl3CCOOH) → Acid-soluble pool (Micromolecules) and Acid-insoluble fraction (Macromolecules).

## Micromolecules
- **Amino Acids**: Substituted methanes. Zwitterionic form exists at specific pH.
- **Lipids**: Generally water insoluble. Fatty acids (Saturated vs Unsaturated). Glycerol (Trihydroxy propane). Phospholipids (Lecithin) found in cell membranes.
- **Nucleosides**: Sugar + Base (e.g., Adenosine).
- **Nucleotides**: Sugar + Base + Phosphate (e.g., Adenylic acid).

## Macromolecules
- **Proteins**: Heteropolymers of amino acids.
  - *Structure*: Primary (sequence), Secondary (alpha-helix, beta-sheet), Tertiary (3D folding - necessary for biological activity), Quaternary (assembly of subunits).
  - *Collagen*: Most abundant protein in animal world.
  - *RuBisCO*: Most abundant protein in the whole biosphere.
- **Polysaccharides**:
  - *Starch*: Helical secondary structure, gives blue color with Iodine.
  - *Cellulose*: Homopolymer of glucose. No complex helices.
  - *Inulin*: Polymer of fructose.
  - *Chitin*: Polymer of N-acetyl glucosamine (exoskeleton of arthropods).
- **Nucleic Acids**: DNA and RNA. Building blocks are nucleotides. Phosphodiester bonds.

## Metabolism
- All living organisms exist in a **steady-state** characterized by concentrations of biomolecules. The living state is a **non-equilibrium steady-state** to be able to perform work.

## Enzymes
- Almost all enzymes are proteins.
- **Mechanism**: E + S ⇌ ES → EP → E + P. Enzymes lower the **Activation Energy**.
- **Factors Affecting Activity**:
  - *Temperature & pH*: Show a bell-shaped curve (optimum activity).
  - *Substrate Concentration*: Vmax and Km (Michaelis constant).
- **Inhibition**: Competitive inhibition (e.g., Inhibition of succinate dehydrogenase by malonate).
- **Classification**: Oxidoreductases, Transferases, Hydrolases, Lyases, Isomerases, Ligases.
- **Cofactors**: Non-protein part. Prosthetic groups (tightly bound, e.g., Heme), Co-enzymes (transiently bound, e.g., NAD, NADP), Metal ions (e.g., Zn2+ for Carboxypeptidase).`,
      },
      {
        id: "b11-10",
        title: "Photosynthesis in Higher Plants",
        summary: "Explains the light and dark reactions, C3 and C4 pathways, and factors affecting the rate of photosynthesis.",
        content: `# Photosynthesis in Higher Plants

## Early Experiments
- **Joseph Priestley**: Showed essential role of air.
- **Jan Ingenhousz**: Showed importance of sunlight and green parts.
- **Julius von Sachs**: Glucose is produced and stored as starch.
- **T.W. Engelmann**: Action spectrum of photosynthesis (using Cladophora).
- **Cornelius van Niel**: Showed photosynthesis is a light-dependent reaction where hydrogen from a suitable oxidisable compound reduces CO2 to carbohydrates. O2 comes from H2O, not CO2.

## Where does Photosynthesis take place?
- In Chloroplasts. Light reaction in **Grana** (Thylakoids); Dark reaction in **Stroma**.

## Light Reaction (Photochemical Phase)
- **Absorption Spectrum**: Chlorophyll a, b, xanthophylls, and carotenoids. Chlorophyll a is the chief pigment.
- **LHC (Light Harvesting Complex)**: Antenna molecules + Reaction Center.
- **Non-cyclic Photophosphorylation (Z-scheme)**: Both PS II (680nm) and PS I (700nm) involved. Photolysis of water occurs at PS II. Produces ATP and NADPH.
- **Cyclic Photophosphorylation**: Only PS I involved. Occurs in stroma lamellae. Produces only ATP.
- **Chemiosmotic Hypothesis**: ATP synthesis due to proton gradient across thylakoid membrane.

## Dark Reaction (Biosynthetic Phase)
- Uses ATP and NADPH to fix CO2.
- **Calvin Cycle (C3 Pathway)**:
  1. *Carboxylation*: CO2 + RuBP → 2 x 3-PGA. Enzyme: **RuBisCO**.
  2. *Reduction*: Uses 2 ATP and 2 NADPH per CO2.
  3. *Regeneration*: Uses 1 ATP.
  - To make 1 Glucose: 6 turns, 18 ATP, 12 NADPH.
- **Hatch-Slack Pathway (C4 Pathway)**:
  - Found in tropical plants (Maize, Sorghum).
  - **Kranz Anatomy**: Bundle sheath cells with large chloroplasts.
  - Primary CO2 acceptor: **PEP** (Phosphoenol pyruvate) in mesophyll cells. Enzyme: **PEPcase**.
  - First stable product: **OAA** (4C).
  - No photorespiration. High productivity.

## Photorespiration
- Wasteful process in C3 plants. RuBisCO acts as Oxygenase at high O2/low CO2. No ATP or Sugar produced.

## Factors Affecting Photosynthesis
- **Blackman's Law of Limiting Factors**: Rate is determined by the factor at its sub-optimal level.
- Light, CO2 concentration (major limiting factor), Temperature, Water.`,
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

## Cellular Respiration
- Mechanism of breakdown of food materials within the cell to release energy and trapping this energy for synthesis of ATP.

## Glycolysis (EMP Pathway)
- Occurs in Cytoplasm. Common to both aerobic and anaerobic respiration.
- Glucose (6C) → 2 Pyruvic acid (3C).
- **Key Steps**:
  - Glucose → Glucose-6-phosphate (Hexokinase).
  - Fructose-6-phosphate → Fructose-1,6-bisphosphate (PFK - Pacemaker enzyme).
  - Splitting into PGAL and DHAP.
  - Conversion of PGAL to Pyruvic acid produces ATP and NADH + H+.
- **Net Gain**: 2 ATP and 2 NADH.

## Fermentation
- Anaerobic respiration.
- **Alcoholic**: Pyruvic acid → Ethanol + CO2 (Yeast).
- **Lactic Acid**: Pyruvic acid → Lactic acid (Muscles during exercise).
- Net gain: Only 2 ATP.

## Aerobic Respiration
- **Link Reaction**: Pyruvic acid + CoA + NAD+ → Acetyl CoA + CO2 + NADH + H+. (Occurs in Mitochondrial Matrix, Enzyme: Pyruvate dehydrogenase).
- **TCA Cycle (Krebs Cycle)**:
  - Occurs in Mitochondrial Matrix.
  - First product: **Citric Acid** (6C).
  - Produces: 3 NADH, 1 FADH2, 1 GTP (per Acetyl CoA).
- **Electron Transport System (ETS)**:
  - Occurs in **Inner Mitochondrial Membrane**.
  - Complexes I to V.
  - Final electron acceptor is **Oxygen** (forms water).
  - **Oxidative Phosphorylation**: ATP synthesis using proton gradient.
  - 1 NADH → 3 ATP; 1 FADH2 → 2 ATP.

## Amphibolic Pathway
- Respiration is both catabolic (breakdown) and anabolic (synthesis of intermediates).

## Respiratory Quotient (RQ)
- RQ = Volume of CO2 evolved / Volume of O2 consumed.
- Carbohydrates: 1.0
- Fats (Tripalmitin): 0.7
- Proteins: 0.9
- Organic Acids: > 1.0`,
      },
      {
        id: "b11-12",
        title: "Breathing and Exchange of Gases",
        summary: "Discusses the mechanism of breathing, transport of gases (O2 and CO2), and respiratory disorders.",
        content: `# Breathing and Exchange of Gases

## Respiratory Organs
- Skin (Earthworms), Tracheal tubes (Insects), Gills (Aquatic), Lungs (Terrestrial).

## Human Respiratory System
- Nostrils → Pharynx → Larynx (Sound box) → Trachea → Bronchi → Bronchioles → Alveoli (Site of exchange).
- Lungs are covered by double-layered **pleura** with pleural fluid.

## Mechanism of Breathing
- **Inspiration**: Diaphragm and external intercostal muscles contract → Thoracic volume increases → Intra-pulmonary pressure decreases → Air moves in.
- **Expiration**: Relaxation of muscles → Thoracic volume decreases → Pressure increases → Air moves out.

## Respiratory Volumes and Capacities
- **TV (Tidal Volume)**: 500 mL.
- **IRV (Inspiratory Reserve Volume)**: 2500-3000 mL.
- **ERV (Expiratory Reserve Volume)**: 1000-1100 mL.
- **RV (Residual Volume)**: 1100-1200 mL.
- **VC (Vital Capacity)**: TV + IRV + ERV.
- **TLC (Total Lung Capacity)**: VC + RV.

## Exchange of Gases
- Occurs at Alveoli and Tissues by **Simple Diffusion**.
- Factors: Partial pressure gradient, Solubility of gases, Thickness of membrane.
- pO2 in Alveoli: 104 mmHg; pCO2: 40 mmHg.
- pO2 in Deoxygenated blood: 40 mmHg; pCO2: 45 mmHg.

## Transport of Gases
- **Oxygen**:
  - 97% as **Oxyhaemoglobin**.
  - **Oxygen Dissociation Curve**: Sigmoid shape. Shift to right (favors dissociation) by high pCO2, high H+, high temp.
- **Carbon Dioxide**:
  - 70% as **Bicarbonate** (using Carbonic Anhydrase).
  - 20-25% as Carbamino-haemoglobin.
  - 7% in dissolved state in plasma.

## Regulation of Respiration
- **Respiratory Rhythm Center**: Medulla.
- **Pneumotaxic Center**: Pons (can moderate rhythm center).
- **Chemosensitive Area**: Sensitive to CO2 and H+.

## Disorders
- **Asthma**: Difficulty in breathing due to inflammation of bronchi.
- **Emphysema**: Alveolar walls are damaged, respiratory surface decreased (Cigarette smoking).
- **Occupational Respiratory Disorders**: Silicosis and Asbestosis (fibrosis of upper lungs).`,
      },
      {
        id: "b11-13",
        title: "Body Fluids and Circulation",
        summary: "Covers the composition of blood and lymph, the human circulatory system, cardiac cycle, and ECG.",
        content: `# Body Fluids and Circulation

## Blood
- **Plasma (55%)**: Water (90-92%), Proteins (Fibrinogen - clotting, Globulins - defense, Albumins - osmotic balance).
- **Formed Elements (45%)**:
  - *Erythrocytes (RBC)*: 5-5.5 million/mm3. Biconcave, no nucleus. Contain Haemoglobin (12-16g/100mL). Life span: 120 days. Destroyed in **Spleen** (Graveyard of RBCs).
  - *Leucocytes (WBC)*: 6000-8000/mm3. Nucleated.
    - Granulocytes: Neutrophils (phagocytic), Eosinophils (allergic), Basophils (secrete histamine, heparin).
    - Agranulocytes: Lymphocytes (B and T cells), Monocytes (phagocytic).
  - *Platelets (Thrombocytes)*: 1.5-3.5 lakh/mm3. Help in coagulation.

## Blood Groups
- **ABO System**: Based on antigens A and B on RBCs. O is universal donor; AB is universal recipient.
- **Rh Grouping**: Rh antigen found in 80% humans.
- **Erythroblastosis Foetalis**: Rh-ve mother and Rh+ve foetus.

## Coagulation of Blood
- Prothrombin → Thrombin (Thrombokinase).
- Fibrinogen → Fibrin (Thrombin).
- Calcium ions play a crucial role.

## Lymph (Tissue Fluid)
- Colorless fluid containing specialized lymphocytes. Helps in transport of nutrients, hormones, and fats (via lacteals).

## Human Circulatory System
- **Heart**: Mesodermally derived. Protected by **pericardium**.
- **Conducting System**: SA Node (Pacemaker) → AV Node → Bundle of His → Purkinje fibres.
- **Cardiac Cycle**:
  - Duration: 0.8 sec.
  - Joint Diastole (0.4s) → Atrial Systole (0.1s) → Ventricular Systole (0.3s).
  - **Lubb**: Closure of tricuspid and bicuspid valves.
  - **Dupp**: Closure of semilunar valves.
- **Stroke Volume**: 70 mL. **Cardiac Output**: 5000 mL/min.

## ECG (Electrocardiogram)
- **P-wave**: Atrial depolarization.
- **QRS complex**: Ventricular depolarization.
- **T-wave**: Ventricular repolarization.

## Disorders
- **Hypertension**: High BP (140/90 or above).
- **CAD (Atherosclerosis)**: Deposition of Ca, fat, cholesterol in arteries.
- **Angina Pectoris**: Chest pain due to low O2 to heart.
- **Heart Failure**: Heart doesn't pump blood effectively.`,
      },
      {
        id: "b11-14",
        title: "Excretory Products and Elimination",
        summary: "Explains the structure of the nephron, mechanism of urine formation, and the role of other organs in excretion.",
        content: `# Excretory Products and Elimination

## Modes of Excretion
- **Ammonotelism**: Excreting ammonia (highly toxic, needs lots of water). e.g., Bony fishes.
- **Ureotelism**: Excreting urea. e.g., Mammals, Marine fishes.
- **Uricotelism**: Excreting uric acid (least toxic, minimum water loss). e.g., Reptiles, Birds, Insects.

## Human Excretory System
- Pair of kidneys, ureters, urinary bladder, and urethra.
- **Kidney Structure**: Outer cortex, inner medulla. Medullary pyramids project into calyces.
- **Nephron**:
  - *Malpighian Body*: Glomerulus + Bowman's capsule.
  - *Renal Tubule*: PCT → Loop of Henle (Descending and Ascending) → DCT → Collecting duct.
  - *Cortical Nephrons*: Short loop of Henle.
  - *Juxtamedullary Nephrons*: Long loop of Henle deep into medulla.

## Urine Formation
1. **Glomerular Filtration**: GFR = 125 mL/min.
2. **Reabsorption**: 99% of filtrate is reabsorbed. PCT reabsorbs nearly all essential nutrients and 70-80% electrolytes and water.
3. **Secretion**: Tubular cells secrete H+, K+, and ammonia into filtrate to maintain ionic balance and pH.

## Counter Current Mechanism
- Operated by **Loop of Henle** and **Vasa Recta**.
- Maintains high osmolarity (300 to 1200 mOsmol/L) in medullary interstitium.
- Helps in production of **concentrated urine**.

## Regulation of Kidney Function
- **ADH (Vasopressin)**: Released from neurohypophysis in response to water loss. Increases water reabsorption in DCT and collecting duct.
- **JGA (Juxtaglomerular Apparatus)**:
  - Fall in GFR → Renin release → Angiotensinogen → Angiotensin I → Angiotensin II (Vasoconstrictor, stimulates Aldosterone).
  - **RAAS**: Renin-Angiotensin-Aldosterone System.
- **ANF (Atrial Natriuretic Factor)**: Released by heart atria in response to high BP. Causes vasodilation (checks RAAS).

## Disorders
- **Uremia**: Accumulation of urea in blood.
- **Renal Calculi**: Stones (oxallates) in kidney.
- **Glomerulonephritis**: Inflammation of glomeruli.
- **Haemodialysis**: Artificial kidney used to remove urea.`,
      },
      {
        id: "b11-15",
        title: "Locomotion and Movement",
        summary: "Discusses types of movement, skeletal muscle structure, mechanism of muscle contraction, and the skeletal system.",
        content: `# Locomotion and Movement

## Types of Movement
- **Amoeboid**: Pseudopodia (Macrophages, Leucocytes).
- **Ciliary**: Cilia (Trachea, Fallopian tubes).
- **Muscular**: Muscles (Limbs, Jaws, Tongue).

## Skeletal Muscle
- **Structure**: Muscle → Muscle bundle (Fascicle) → Muscle fibre → Myofibril → Myofilaments (Actin and Myosin).
- **Sarcomere**: Functional unit of contraction. Area between two Z-lines.
- **Actin (Thin filament)**: F-actin, Tropomyosin, Troponin (masks binding site for myosin).
- **Myosin (Thick filament)**: Polymer of Meromyosins. Has a head (ATPase activity) and a tail.

## Mechanism of Muscle Contraction
- **Sliding Filament Theory**:
  1. Neural signal → Acetylcholine release → Action potential in sarcolemma.
  2. Release of Ca2+ from sarcoplasmic reticulum.
  3. Ca2+ binds to Troponin → Unmasking of active sites on actin.
  4. Myosin head binds to actin forming **Cross bridge** (using ATP).
  5. Actin filaments slide towards the center of A-band.
  6. Relaxation: Ca2+ pumped back, Troponin masks actin again.

## Skeletal System
- **Axial Skeleton (80 bones)**:
  - Skull (22), Hyoid (1), Ear ossicles (6).
  - Vertebral Column (26): Cervical (7), Thoracic (12), Lumbar (5), Sacral (1-fused), Caudal (1-fused).
  - Sternum (1) and Ribs (12 pairs: 7 True, 3 False, 2 Floating).
- **Appendicular Skeleton (126 bones)**:
  - Pectoral Girdle (Clavicle, Scapula).
  - Pelvic Girdle (Coxal bones).
  - Limbs: Humerus, Radius, Ulna, Carpals, Metacarpals, Phalanges (Forelimb); Femur, Tibia, Fibula, Tarsals, Metatarsals, Phalanges (Hindlimb).

## Joints
- **Fibrous**: Immovable (Skull sutures).
- **Cartilaginous**: Limited movement (Intervertebral discs).
- **Synovial**: Fluid-filled cavity.
  - Ball and Socket (Shoulder).
  - Hinge (Knee, Elbow).
  - Pivot (Atlas/Axis).
  - Gliding (Carpals).
  - Saddle (Thumb).

## Disorders
- **Myasthenia Gravis**: Autoimmune, affects neuromuscular junction.
- **Muscular Dystrophy**: Genetic, progressive degeneration.
- **Tetany**: Rapid spasms due to low Ca2+.
- **Arthritis**: Inflammation of joints.
- **Osteoporosis**: Decreased bone mass (low Estrogen in elderly females).
- **Gout**: Uric acid crystals in joints.`,
      },
      {
        id: "b11-16",
        title: "Neural Control and Coordination",
        summary: "Covers the structure of neurons, the central and peripheral nervous systems, and the mechanism of nerve impulse conduction.",
        content: `# Neural Control and Coordination

## Neuron as Structural and Functional Unit
- **Parts**: Cell body (contains Nissl's granules), Dendrites, Axon.
- **Types**: Unipolar (embryo), Bipolar (retina), Multipolar (cerebral cortex).
- **Myelinated vs Non-myelinated**: Myelinated axons have Nodes of Ranvier.

## Generation and Conduction of Nerve Impulse
1. **Resting Potential**: Membrane polarized. Outside +ve, Inside -ve (-70mV). High K+ inside, High Na+ outside.
2. **Depolarization**: Stimulus → Na+ channels open → Na+ influx → Inside becomes +ve (+30mV). This is the **Action Potential**.
3. **Repolarization**: K+ channels open → K+ efflux → Membrane returns to resting state.
4. **Synaptic Transmission**:
   - Electrical Synapse: Rare in humans.
   - Chemical Synapse: Neurotransmitters (e.g., Acetylcholine) released into synaptic cleft.

## Central Nervous System (CNS)
- **Brain**:
  - *Forebrain*: Cerebrum (Sensory/Motor/Association areas), Thalamus, Hypothalamus (Hunger, Thirst, Temp, Hormones).
  - *Midbrain*: Corpora quadrigemina (visual and auditory reflexes).
  - *Hindbrain*: Cerebellum (Precision and Balance), Pons, Medulla (Respiration, Cardiovascular, Gastric secretions).
- **Brain Stem**: Midbrain + Pons + Medulla.

## Reflex Action and Reflex Arc
- Involuntary response to peripheral stimulus.
- Pathway: Receptor → Afferent neuron → Interneuron (in Spinal Cord) → Efferent neuron → Effector.

## Sensory Reception and Processing
- **Eye**:
  - Layers: Sclera (Cornea), Choroid (Ciliary body, Iris), Retina (Photoreceptors: Rods and Cones).
  - **Fovea**: Point of greatest visual acuity (only cones).
  - **Blind Spot**: No photoreceptors.
- **Ear**:
  - External: Pinna, Meatus.
  - Middle: Malleus, Incus, Stapes (amplification). Eustachian tube connects to pharynx.
  - Inner: Cochlea (Hearing) and Vestibular Apparatus (Balance - Semicircular canals and Otolith organ).`,
      },
      {
        id: "b11-17",
        title: "Chemical Coordination and Integration",
        summary: "Discusses endocrine glands and their hormones, their mechanisms of action, and related disorders.",
        content: `# Chemical Coordination and Integration

## Endocrine Glands and Hormones
- **Hypothalamus**: Produces Releasing and Inhibiting hormones (e.g., GnRH, Somatostatin).
- **Pituitary Gland**:
  - *Adenohypophysis*: GH (Growth), PRL (Milk), TSH, ACTH, LH, FSH.
  - *Neurohypophysis*: Stores Oxytocin (birth/milk ejection) and ADH (water reabsorption).
- **Pineal Gland**: Melatonin (24-hour rhythm, sleep-wake cycle).
- **Thyroid Gland**:
  - Thyroxine (T4) and Triiodothyronine (T3). Regulate BMR, RBC formation.
  - **Goitre**: Iodine deficiency.
  - **Exophthalmic Goitre (Graves' disease)**: Hyperthyroidism.
- **Parathyroid Gland**: PTH (increases blood Ca2+).
- **Thymus**: Thymosins (T-cell differentiation). Degenerates in old age.
- **Adrenal Gland**:
  - *Cortex*: Corticoids (Glucocorticoids like Cortisol; Mineralocorticoids like Aldosterone).
  - *Medulla*: Adrenaline and Noradrenaline (Emergency hormones - Fight or Flight).
- **Pancreas**:
  - *Alpha cells*: Glucagon (Hyperglycemic).
  - *Beta cells*: Insulin (Hypoglycemic).
  - **Diabetes Mellitus**: Deficiency of insulin.
- **Testis**: Androgens (Testosterone).
- **Ovary**: Estrogen (follicle growth) and Progesterone (pregnancy maintenance).

## Hormones of Heart, Kidney, and GI Tract
- Heart: ANF (decreases BP).
- Kidney: Erythropoietin (RBC production).
- GI Tract: Gastrin, Secretin, CCK, GIP.

## Mechanism of Hormone Action
- **Protein Hormones**: Bind to membrane receptors → Second messengers (cAMP, IP3, Ca2+).
- **Steroid/Iodothyronines**: Bind to intracellular receptors → Hormone-receptor complex interacts with DNA → Gene expression.`,
      },
      {
        id: "b11-18",
        title: "Plant Growth and Development",
        summary: "Covers growth regulators (Auxins, Gibberellins, Cytokinins, Ethylene, ABA), photoperiodism, and vernalization.",
        content: `# Plant Growth and Development

## Growth
- Indeterminate in plants. Measured by increase in fresh/dry weight, length, area, volume, or cell number.
- **Phases**: Meristematic, Elongation, Maturation.

## Differentiation, Dedifferentiation, and Redifferentiation
- **Differentiation**: Cells lose ability to divide and specialize.
- **Dedifferentiation**: Permanent cells regain ability to divide (e.g., formation of Interfascicular cambium).
- **Redifferentiation**: Dedifferentiated cells lose ability to divide again.

## Plant Growth Regulators (PGRs)
- **Auxins (IAA, NAA, 2,4-D)**:
  - Apical dominance.
  - Rooting in stem cuttings.
  - Prevent abscission of young parts.
  - 2,4-D is a weedicide.
- **Gibberellins (GA3)**:
  - Increase length of axis (grapes).
  - Bolting (internode elongation before flowering in beet, cabbage).
  - Speed up malting process.
- **Cytokinins (Zeatin, Kinetin)**:
  - Promote cell division.
  - Overcome apical dominance.
  - Delay leaf senescence.
- **Ethylene (Gaseous)**:
  - Fruit ripening.
  - Triple response.
  - Promotes senescence and abscission.
  - **Ethephon**: Source of ethylene.
- **Abscisic Acid (ABA)**:
  - Stress hormone.
  - Stimulates stomatal closure.
  - Promotes seed dormancy.

## Photoperiodism
- Response to duration of light/dark.
- **Long Day Plants**: Flower when day length > critical.
- **Short Day Plants**: Flower when day length < critical.
- **Day Neutral Plants**: No correlation.

## Vernalization
- Promotion of flowering by low temperature treatment. Prevents precocious reproductive development late in the season.`,
      },
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
- **Base Units**: 
  - Length (m), Mass (kg), Time (s), Electric Current (A), Thermodynamic Temperature (K), Amount of substance (mol), Luminous intensity (cd).
- **Supplementary Units**: 
  - Radian (Plane angle dθ = ds/r), Steradian (Solid angle dΩ = dA/r²).

## Dimensional Analysis
- **Principle of Homogeneity**: Dimensions of all terms in a physical equation must be the same.
- **Applications**:
  - Checking correctness of equations.
  - Deriving relations between physical quantities.
  - Converting units from one system to another.
- **Limitations**: Cannot determine dimensionless constants, fails for transcendental functions (log, sin, etc.).

## Errors in Measurement
- **Systematic Errors**: Instrumental, imperfection in technique, personal errors.
- **Random Errors**: Occur irregularly due to random fluctuations.
- **Least Count Error**: Smallest value that can be measured by the instrument.
- **Significant Figures**: Digits that are known reliably plus the first digit that is uncertain.
  - *Rules*: All non-zero digits are significant. Trailing zeros in a number without decimal are NOT significant.

## Mathematical Treatment of Errors
- **Absolute Error**: Δa = |a_mean - a_i|
- **Relative Error**: δa = Δa_mean / a_mean
- **Percentage Error**: % Error = δa × 100%
- **Propagation of Errors**:
  - Addition/Subtraction: ΔZ = ΔA + ΔB
  - Multiplication/Division: ΔZ/Z = ΔA/A + ΔB/B
  - Power (Z = A^n): ΔZ/Z = n(ΔA/A)`,
        formulas: `### Units & Dimensions Formula Sheet

| Physical Quantity | Formula | Dimensional Formula | SI Unit |
|:------------------|:--------|:--------------------|:--------|
| **Density**       | m / V   | [M L⁻³ T⁰]          | kg m⁻³  |
| **Velocity**      | ds / dt | [M⁰ L T⁻¹]          | m s⁻¹   |
| **Acceleration**  | dv / dt | [M⁰ L T⁻²]          | m s⁻²   |
| **Force**         | m × a   | [M L T⁻²]           | Newton (N) |
| **Work / Energy** | F · s   | [M L² T⁻²]          | Joule (J) |
| **Power**         | W / t   | [M L² T⁻³]          | Watt (W) |
| **Pressure**      | F / A   | [M L⁻¹ T⁻²]         | Pascal (Pa) |
| **Frequency**     | 1 / T   | [M⁰ L⁰ T⁻¹]         | Hertz (Hz) |
| **Gravitational Const (G)** | Fr²/m₁m₂ | [M⁻¹ L³ T⁻²] | N m² kg⁻² |
| **Planck's Const (h)** | E / ν | [M L² T⁻¹]       | J s     |
| **Viscosity (η)** | F / (A dv/dx) | [M L⁻¹ T⁻¹] | Pa s |`,
      },
      {
        id: "p11-2",
        title: "Laws of Motion",
        summary: "Covers Newton's three laws of motion, the concept of inertia, momentum, impulse, and the dynamics of circular motion and friction.",
        content: `# Laws of Motion

## Newton's Laws
1. **First Law (Inertia)**: Every body continues in its state of rest or uniform motion unless compelled by an external force.
2. **Second Law**: F = dp/dt. For constant mass, **F = ma**.
3. **Third Law**: To every action, there is an equal and opposite reaction.

## Momentum and Impulse
- **Linear Momentum (p)**: p = mv. Vector quantity.
- **Impulse (J)**: Change in momentum. J = ∫ F dt = Δp.
- **Law of Conservation of Linear Momentum**: In the absence of external force, total momentum of a system remains constant (m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂).

## Friction
- **Static Friction (f_s)**: Self-adjusting force. f_s ≤ μ_s N.
- **Kinetic Friction (f_k)**: Acts during relative motion. f_k = μ_k N.
- **Angle of Friction (θ)**: Angle between normal reaction and resultant of normal reaction and limiting friction. μ = tan θ.
- **Angle of Repose (α)**: Minimum angle of inclination at which a body starts sliding. μ = tan α.

## Circular Motion Dynamics
- **Centripetal Force**: F_c = mv²/r = mω²r.
- **Centrifugal Force**: Pseudo force in rotating frame.
- **Bending of Cyclist**: tan θ = v²/rg.
- **Banking of Roads**:
  - Without friction: tan θ = v²/rg.
  - With friction: v_max = √[rg (μ + tanθ) / (1 - μ tanθ)].

## Equilibrium of a Particle
- Net force is zero (ΣF = 0).
- **Lami's Theorem**: P/sinα = Q/sinβ = R/sinγ (for three concurrent forces in equilibrium).`,
        formulas: `### Laws of Motion Formula Sheet

| Concept | Formula | Description |
|:--------|:--------|:------------|
| **Force** | F = ma | Newton's 2nd Law |
| **Impulse** | J = F_avg Δt = Δp | Change in momentum |
| **Apparent Weight** | W' = m(g ± a) | In accelerating lift |
| **Static Friction** | f_s(max) = μ_s N | N = Normal reaction |
| **Kinetic Friction** | f_k = μ_k N | μ_k < μ_s |
| **Centripetal Force** | F_c = mv²/r | Directed towards center |
| **Banking Angle** | tan θ = v²/rg | For safe turn |
| **Recoil of Gun** | v_g = -(m_b v_b) / m_g | Conservation of momentum |`,
      },
      {
        id: "p11-3",
        title: "Work, Energy and Power",
        summary: "Explores the work-energy theorem, conservative and non-conservative forces, conservation of mechanical energy, and collisions.",
        content: `# Work, Energy and Power

## Work
- W = F · s = Fs cosθ.
- Work done by variable force: W = ∫ F dx.
- Area under F-x graph gives Work.

## Energy
- **Kinetic Energy (K)**: K = ½mv² = p²/2m.
- **Potential Energy (U)**:
  - Gravitational: U = mgh.
  - Elastic (Spring): U = ½kx².
- **Work-Energy Theorem**: Work done by all forces = Change in Kinetic Energy (W_total = ΔK).
- **Conservative Forces**: Work done is path independent (e.g., Gravity, Electrostatic).
- **Non-conservative Forces**: Work done depends on path (e.g., Friction, Viscosity).
- **Conservation of Mechanical Energy**: K + U = Constant (if only conservative forces act).

## Power
- P = dW/dt = F · v = Fv cosθ.
- Unit: Watt (W). 1 HP = 746 W.

## Collisions
- **Elastic Collision**: Both Momentum and KE are conserved.
- **Inelastic Collision**: Only Momentum is conserved.
- **Coefficient of Restitution (e)**: e = (v₂ - v₁) / (u₁ - u₂).
  - e = 1 (Perfectly Elastic)
  - e = 0 (Perfectly Inelastic - bodies stick together)
  - 0 < e < 1 (Real world collisions)`,
        formulas: `### Work, Energy & Power Formula Sheet

| Concept | Formula | Details |
|:--------|:--------|:--------|
| **Work** | W = **F** · **s** | Dot product of Force and Displacement |
| **Kinetic Energy** | K = p²/2m | p = momentum |
| **Spring Force** | F = -kx | Hooke's Law |
| **Spring P.E.** | U = ½kx² | k = spring constant |
| **Power** | P = **F** · **v** | Instantaneous power |
| **Elastic Collision** | v₁ = [(m₁-m₂)u₁ + 2m₂u₂] / (m₁+m₂) | Final velocity of body 1 |
| **Inelastic Collision** | V = (m₁u₁ + m₂u₂) / (m₁ + m₂) | Common velocity after sticking |`,
      },
      {
        id: "p11-4",
        title: "Gravitation",
        summary: "Discusses Newton's law of universal gravitation, Kepler's laws, acceleration due to gravity, and the concept of escape velocity.",
        content: `# Gravitation

## Newton's Law of Gravitation
- F = G m₁m₂ / r².
- G = 6.67 × 10⁻¹¹ N m² kg⁻².

## Acceleration due to Gravity (g)
- g = GM / R².
- **Variation with Altitude**: g_h = g [R / (R+h)]² ≈ g(1 - 2h/R) for h << R.
- **Variation with Depth**: g_d = g(1 - d/R).
- **Variation with Latitude**: g' = g - Rω² cos²φ.

## Gravitational Potential and Energy
- **Potential (V)**: V = -GM/r.
- **Potential Energy (U)**: U = -GMm/r.

## Kepler's Laws
1. **Law of Orbits**: Elliptical orbits with Sun at one focus.
2. **Law of Areas**: dA/dt = Constant (Conservation of Angular Momentum).
3. **Law of Periods**: T² ∝ r³.

## Satellites
- **Orbital Velocity (v_o)**: v_o = √(GM/r). Near surface: v_o = √(gR) ≈ 7.9 km/s.
- **Time Period**: T = 2πr / v_o = 2π√(r³/GM).
- **Escape Velocity (v_e)**: v_e = √(2GM/R) = √(2gR) ≈ 11.2 km/s.
- **Relation**: v_e = √2 v_o.
- **Geostationary Satellite**: T = 24 hours, Height ≈ 36,000 km, orbits in equatorial plane.`,
        formulas: `### Gravitation Formula Sheet

| Concept | Formula | Description |
|:--------|:--------|:------------|
| **Gravitational Force** | F = G m₁m₂ / r² | Universal Law |
| **Field Intensity** | E = F / m = GM / r² | Force per unit mass |
| **Potential** | V = -GM / r | Work per unit mass |
| **Escape Velocity** | v_e = √(2gR) | Minimum speed to escape |
| **Orbital Velocity** | v_o = √(gR) | For satellite near Earth |
| **Kepler's 3rd Law** | T² = (4π²/GM) r³ | T² ∝ r³ |
| **Total Energy** | E = -GMm / 2r | For an orbiting satellite |`,
      },
      {
        id: "p11-5",
        title: "Motion in a Straight Line",
        summary: "Covers kinematics in one dimension, including displacement, velocity, acceleration, and equations of motion.",
        content: `# Motion in a Straight Line

## Kinematic Quantities
- **Distance**: Total path length (Scalar).
- **Displacement**: Shortest distance between initial and final positions (Vector).
- **Speed**: Distance/Time.
- **Velocity**: Displacement/Time.
- **Acceleration**: Rate of change of velocity (a = dv/dt).

## Equations of Motion (Constant Acceleration)
1. v = u + at
2. s = ut + ½at²
3. v² = u² + 2as
4. s_n = u + a/2(2n - 1) [Distance in nth second]

## Relative Velocity
- v_AB = v_A - v_B (Velocity of A with respect to B).

## Motion under Gravity
- a = -g (Taking upward as positive).
- Time of flight: T = 2u/g.
- Maximum height: H = u²/2g.`,
        formulas: `### Kinematics Formula Sheet

| Concept | Formula | Description |
|:--------|:--------|:------------|
| **Average Velocity** | v_avg = Δx / Δt | Total displacement / Total time |
| **Instantaneous Accel** | a = dv/dt = d²x/dt² | Second derivative of position |
| **Equation 1** | v = u + at | Velocity-time relation |
| **Equation 2** | s = ut + ½at² | Position-time relation |
| **Equation 3** | v² = u² + 2as | Velocity-position relation |
| **Relative Velocity** | v_AB = v_A - v_B | Vector subtraction |`,
      },
      {
        id: "p11-6",
        title: "Motion in a Plane",
        summary: "Discusses vectors, projectile motion, and uniform circular motion.",
        content: `# Motion in a Plane

## Vectors
- **Resultant**: R = √(A² + B² + 2AB cosθ).
- **Direction**: tan α = (B sinθ) / (A + B cosθ).
- **Dot Product**: A · B = AB cosθ.
- **Cross Product**: A × B = AB sinθ n̂.

## Projectile Motion
- **Time of Flight (T)**: T = 2u sinθ / g.
- **Maximum Height (H)**: H = u² sin²θ / 2g.
- **Horizontal Range (R)**: R = u² sin2θ / g.
- **Equation of Trajectory**: y = x tanθ - gx² / (2u² cos²θ).

## Uniform Circular Motion
- **Angular Velocity (ω)**: ω = dθ/dt = v/r.
- **Centripetal Acceleration (a_c)**: a_c = v²/r = ω²r.
- **Time Period**: T = 2π/ω.`,
        formulas: `### Motion in 2D Formula Sheet

| Concept | Formula | Description |
|:--------|:--------|:------------|
| **Resultant Vector** | R = √(A²+B²+2ABcosθ) | Magnitude of sum |
| **Projectile Range** | R = u²sin2θ / g | Max at θ = 45° |
| **Max Height** | H = u²sin²θ / 2g | At peak of trajectory |
| **Centripetal Accel** | a_c = v²/r | Towards center |
| **Angular Velocity** | ω = 2π/T | Rad/s |`,
      },
      {
        id: "p11-7",
        title: "System of Particles and Rotational Motion",
        summary: "Covers center of mass, torque, angular momentum, and moment of inertia.",
        content: `# System of Particles and Rotational Motion

## Center of Mass (COM)
- X_com = (m₁x₁ + m₂x₂ + ...) / (m₁ + m₂ + ...).
- For continuous body: R_com = (1/M) ∫ r dm.

## Rotational Kinematics
- ω = ω₀ + αt
- θ = ω₀t + ½αt²
- ω² = ω₀² + 2αθ

## Torque and Angular Momentum
- **Torque (τ)**: τ = r × F = Iα.
- **Angular Momentum (L)**: L = r × p = Iω.
- **Conservation of Angular Momentum**: If τ_ext = 0, then L = Constant.

## Moment of Inertia (I)
- I = Σ m_i r_i².
- **Parallel Axis Theorem**: I = I_com + Md².
- **Perpendicular Axis Theorem**: I_z = I_x + I_y (for laminar bodies).

## Rolling Motion
- v = ωR (Pure rolling).
- Total KE = KE_trans + KE_rot = ½mv² + ½Iω².`,
        formulas: `### Rotational Motion Formula Sheet

| Quantity | Linear | Rotational | Relation |
|:---------|:-------|:-----------|:---------|
| **Displacement** | s | θ | s = rθ |
| **Velocity** | v | ω | v = rω |
| **Acceleration** | a | α | a = rα |
| **Mass/Inertia** | m | I | I = Σmr² |
| **Force/Torque** | F | τ | τ = rF sinθ |
| **Momentum** | p = mv | L = Iω | L = r × p |
| **Work** | W = Fs | W = τθ | - |
| **Kinetic Energy** | K = ½mv² | K = ½Iω² | - |`,
      },
      {
        id: "p11-8",
        title: "Thermodynamics",
        summary: "Discusses laws of thermodynamics, heat engines, and refrigerators.",
        content: `# Thermodynamics

## Zeroth Law
- If two systems are in thermal equilibrium with a third system, they are in thermal equilibrium with each other. Defines **Temperature**.

## First Law of Thermodynamics
- ΔQ = ΔU + ΔW.
- ΔU is internal energy (state function).
- ΔW is work done by the system (PΔV).

## Thermodynamic Processes
- **Isothermal**: T = Constant, ΔU = 0. W = nRT ln(V₂/V₁).
- **Adiabatic**: ΔQ = 0. PV^γ = Constant. W = (P₁V₁ - P₂V₂) / (γ - 1).
- **Isochoric**: V = Constant, ΔW = 0. ΔQ = ΔU.
- **Isobaric**: P = Constant. W = P(V₂ - V₁).

## Second Law of Thermodynamics
- **Kelvin-Planck**: No engine can convert all heat into work.
- **Clausius**: Heat cannot flow from cold to hot without external work.

## Heat Engines and Refrigerators
- **Efficiency (η)**: η = W / Q_in = 1 - Q_out / Q_in.
- **Carnot Engine**: η = 1 - T_low / T_high.
- **Coefficient of Performance (β)**: β = Q_low / W = T_low / (T_high - T_low).`,
        formulas: `### Thermodynamics Formula Sheet

| Process | Condition | Work Done (W) |
|:--------|:----------|:--------------|
| **Isothermal** | T = const | nRT ln(V₂/V₁) |
| **Adiabatic** | ΔQ = 0 | (P₁V₁ - P₂V₂) / (γ-1) |
| **Isobaric** | P = const | P(V₂ - V₁) |
| **Isochoric** | V = const | 0 |
| **First Law** | - | ΔQ = ΔU + ΔW |
| **Carnot η** | - | 1 - T₂/T₁ |`,
      },
      {
        id: "p11-9",
        title: "Mechanical Properties of Solids",
        summary: "Explores elasticity, stress, strain, Hooke's law, and Young's modulus.",
        content: `# Mechanical Properties of Solids

## Elasticity
- Property by which a body regains its original shape after deforming force is removed.

## Stress and Strain
- **Stress**: Restoring force per unit area (F/A).
- **Strain**: Fractional change in dimension (ΔL/L, ΔV/V).
- **Hooke's Law**: For small deformations, Stress ∝ Strain. Stress = E × Strain.

## Elastic Moduli
- **Young's Modulus (Y)**: Y = (F/A) / (ΔL/L). (For solids/wires).
- **Bulk Modulus (B)**: B = -ΔP / (ΔV/V). (For fluids/solids). **Compressibility** = 1/B.
- **Shear Modulus (G)**: G = (F/A) / θ.

## Elastic Potential Energy
- Energy stored in a stretched wire: U = ½ × Stress × Strain × Volume = ½ × F × ΔL.`,
        formulas: `### Elasticity Formula Sheet

| Concept | Formula | Description |
|:--------|:--------|:------------|
| **Young's Modulus** | Y = FL / AΔL | Longitudinal stress/strain |
| **Bulk Modulus** | B = -PV / ΔV | Volumetric stress/strain |
| **Shear Modulus** | G = F / Aθ | Tangential stress/strain |
| **Energy Density** | u = ½ × Stress × Strain | Energy per unit volume |
| **Poisson's Ratio** | σ = Lateral strain / Longitudinal strain | Dimensionless |`,
      },
      {
        id: "p11-10",
        title: "Mechanical Properties of Fluids",
        summary: "Discusses pressure, Pascal's law, viscosity, surface tension, and Bernoulli's principle.",
        content: `# Mechanical Properties of Fluids

## Pressure
- P = F/A. P = P_atm + hρg.
- **Pascal's Law**: Pressure applied to an enclosed fluid is transmitted undiminished to every portion of the fluid.

## Viscosity
- Internal friction in fluids.
- **Newton's Law**: F = -η A (dv/dx).
- **Stokes' Law**: F = 6πηrv (for a sphere falling in viscous medium).
- **Terminal Velocity**: v_t = 2r²(ρ - σ)g / 9η.

## Bernoulli's Principle
- P + ½ρv² + ρgh = Constant (for streamline flow of non-viscous, incompressible fluid).
- **Equation of Continuity**: A₁v₁ = A₂v₂.

## Surface Tension
- Force per unit length (T = F/l).
- **Surface Energy**: E = T × ΔA.
- **Excess Pressure**:
  - Liquid drop: ΔP = 2T/R.
  - Soap bubble: ΔP = 4T/R.
- **Capillary Rise**: h = 2T cosθ / rρg.`,
        formulas: `### Fluid Mechanics Formula Sheet

| Concept | Formula | Description |
|:--------|:--------|:------------|
| **Hydrostatic Pressure** | P = hρg | Pressure at depth h |
| **Continuity Eq** | Av = constant | Conservation of mass |
| **Bernoulli's Eq** | P + ½ρv² + ρgh = const | Conservation of energy |
| **Terminal Velocity** | v_t ∝ r² | For small spheres |
| **Excess Pressure** | ΔP = 4T/R | For soap bubble |
| **Ascent Formula** | h = 2Tcosθ/rρg | Capillary rise |`,
      },
      {
        id: "p11-11",
        title: "Oscillations",
        summary: "Covers periodic motion, simple harmonic motion (SHM), and the simple pendulum.",
        content: `# Oscillations

## Simple Harmonic Motion (SHM)
- Restoring force F = -kx.
- **Equation**: d²x/dt² + ω²x = 0, where ω = √(k/m).
- **Displacement**: x = A sin(ωt + φ).
- **Velocity**: v = ω√(A² - x²).
- **Acceleration**: a = -ω²x.

## Energy in SHM
- **Kinetic Energy**: K = ½mv² = ½mω²(A² - x²).
- **Potential Energy**: U = ½kx² = ½mω²x².
- **Total Energy**: E = K + U = ½mω²A² (Constant).

## Simple Pendulum
- T = 2π√(L/g).
- For a spring-mass system: T = 2π√(m/k).`,
        formulas: `### Oscillations Formula Sheet

| Concept | Formula | Description |
|:--------|:--------|:------------|
| **Angular Freq** | ω = 2πf = 2π/T | Rad/s |
| **SHM Velocity** | v_max = Aω | At mean position |
| **SHM Accel** | a_max = Aω² | At extreme position |
| **Pendulum Period** | T = 2π√(L/g) | Independent of mass |
| **Spring Period** | T = 2π√(m/k) | Independent of g |
| **Total Energy** | E = ½kA² | Proportional to A² |`,
      },
      {
        id: "p11-12",
        title: "Waves",
        summary: "Discusses types of waves, speed of sound, Doppler effect, and standing waves.",
        content: `# Waves

## Wave Equation
- y(x, t) = A sin(kx - ωt + φ).
- Wave number k = 2π/λ.
- Wave speed v = ω/k = νλ.

## Speed of Waves
- **Transverse wave on string**: v = √(T/μ).
- **Longitudinal wave (Sound)**:
  - In solids: v = √(Y/ρ).
  - In gases (Laplace correction): v = √(γP/ρ).

## Superposition and Standing Waves
- **Beats**: f_beat = |f₁ - f₂|.
- **Standing Waves in Strings**:
  - Both ends fixed: f_n = nv/2L.
- **Organ Pipes**:
  - Open at both ends: f_n = nv/2L.
  - Closed at one end: f_n = (2n-1)v/4L.

## Doppler Effect
- f_obs = f_src [ (v ± v_o) / (v ∓ v_s) ].`,
        formulas: `### Waves Formula Sheet

| Concept | Formula | Description |
|:--------|:--------|:------------|
| **Wave Speed** | v = νλ | Fundamental relation |
| **String Velocity** | v = √(T/μ) | T=tension, μ=linear density |
| **Sound in Gas** | v = √(γRT/M) | Laplace correction |
| **Beat Frequency** | f_b = f₁ - f₂ | Difference in frequencies |
| **Open Pipe** | f = v/2L | Fundamental frequency |
| **Closed Pipe** | f = v/4L | Fundamental frequency |`,
      },
    ],
    class12: [
      {
        id: "p12-1",
        title: "Electrostatics",
        summary: "Discusses electric charges, Coulomb's law, electric fields, Gauss's law, and the concept of electric potential and capacitance.",
        content: `# Electrostatics

## Coulomb's Law
- F = (1/4πε₀) * (q₁q₂/r²).
- k = 1/4πε₀ ≈ 9 × 10⁹ N m²/C².

## Electric Field (E)
- E = F/q.
- Due to point charge: E = kQ/r².
- **Electric Dipole**: Two equal and opposite charges separated by distance 2a. Dipole moment p = q × 2a.
  - Axial point: E = 2kp/r³.
  - Equatorial point: E = kp/r³.
- **Torque on Dipole**: τ = p × E = pE sinθ.

## Gauss's Law
- Total flux Φ = ∮ E · dA = q_enclosed / ε₀.
- **Applications**:
  - Field due to infinite wire: E = λ / 2πε₀r.
  - Field due to infinite sheet: E = σ / 2ε₀.
  - Field due to spherical shell: E = kQ/r² (outside), E = 0 (inside).

## Electric Potential (V)
- V = W/q.
- Due to point charge: V = kQ/r.
- Relation: E = -dV/dr.
- **Equipotential Surfaces**: Surfaces where potential is constant. E is always perpendicular to them.

## Capacitance (C)
- C = Q/V.
- Parallel Plate: C = ε₀A/d. With dielectric: C = Kε₀A/d.
- **Combination**:
  - Series: 1/C_s = 1/C₁ + 1/C₂.
  - Parallel: C_p = C₁ + C₂.
- **Energy Stored**: U = ½CV² = ½QV = Q²/2C.`,
        formulas: `### Electrostatics Formula Sheet

| Concept | Formula | Description |
|:--------|:--------|:------------|
| **Coulomb Force** | F = kq₁q₂/r² | k = 9×10⁹ |
| **Electric Field** | E = F/q | N/C or V/m |
| **Dipole Moment** | p = q(2a) | C m |
| **Axial Field** | E = 2kp/r³ | For r >> a |
| **Equatorial Field** | E = kp/r³ | For r >> a |
| **Potential** | V = kQ/r | Scalar quantity |
| **Capacitance** | C = ε₀A/d | Farad (F) |
| **Energy in Cap** | U = ½CV² | Joule (J) |`,
      },
      {
        id: "p12-4",
        title: "Current Electricity",
        summary: "Covers Ohm's law, resistance, Kirchhoff's laws, and electrical measuring instruments.",
        content: `# Current Electricity

## Electric Current
- I = dq/dt = neAv_d.
- **Drift Velocity (v_d)**: v_d = eEτ/m.

## Ohm's Law
- V = IR.
- **Resistance (R)**: R = ρL/A.
- **Resistivity (ρ)**: ρ = m / (ne²τ). Depends on material and temperature.
- **Temperature Dependence**: R_t = R₀(1 + αΔT).

## Kirchhoff's Laws
1. **Junction Law (KCL)**: ΣI = 0 (Conservation of Charge).
2. **Loop Law (KVL)**: ΣV = 0 (Conservation of Energy).

## Cells and Circuits
- **EMF (ε) and Internal Resistance (r)**: V = ε - Ir.
- **Combination of Cells**:
  - Series: ε_eq = Σε, r_eq = Σr.
  - Parallel (identical): ε_eq = ε, r_eq = r/n.

## Measuring Instruments
- **Wheatstone Bridge**: P/Q = R/S (at balance).
- **Meter Bridge**: S = R(100-l)/l.
- **Potentiometer**: V ∝ l. Used to compare EMFs (ε₁/ε₂ = l₁/l₂) and find internal resistance (r = R(l₁/l₂ - 1)).`,
        formulas: `### Current Electricity Formula Sheet

| Concept | Formula | Description |
|:--------|:--------|:------------|
| **Current** | I = V/R | Ohm's Law |
| **Resistance** | R = ρL/A | ρ = resistivity |
| **Drift Velocity** | v_d = eEτ/m | τ = relaxation time |
| **Power** | P = VI = I²R = V²/R | Watt (W) |
| **Series R** | R_s = R₁ + R₂ | Max resistance |
| **Parallel R** | 1/R_p = 1/R₁ + 1/R₂ | Min resistance |
| **Potentiometer** | ε₁/ε₂ = l₁/l₂ | Comparing EMFs |`,
      },
      {
        id: "p12-5",
        title: "Moving Charges and Magnetism",
        summary: "Discusses Biot-Savart law, Ampere's law, Lorentz force, and the cyclotron.",
        content: `# Moving Charges and Magnetism

## Magnetic Force
- **Lorentz Force**: F = q(E + v × B).
- **Magnetic Force on Wire**: F = I(L × B) = ILB sinθ.

## Biot-Savart Law
- dB = (μ₀/4π) * (I dl × r̂ / r²).
- **Applications**:
  - Circular Loop (center): B = μ₀I / 2R.
  - Straight Wire (infinite): B = μ₀I / 2πr.

## Ampere's Circuital Law
- ∮ B · dl = μ₀ I_enclosed.
- **Solenoid**: B = μ₀ni (n = turns per unit length).
- **Toroid**: B = μ₀NI / 2πr.

## Motion in Magnetic Field
- Circular path: r = mv/qB.
- **Cyclotron Frequency**: f = qB / 2πm.

## Moving Coil Galvanometer
- τ = NIAB sinθ.
- **Current Sensitivity**: θ/I = NAB/k.
- **Conversion**:
  - To Ammeter: Shunt S = I_g G / (I - I_g) in parallel.
  - To Voltmeter: Resistance R = (V/I_g) - G in series.`,
        formulas: `### Magnetism Formula Sheet

| Concept | Formula | Description |
|:--------|:--------|:------------|
| **Magnetic Force** | F = qvB sinθ | On moving charge |
| **B (Straight Wire)** | B = μ₀I / 2πr | Infinite wire |
| **B (Circular Loop)** | B = μ₀I / 2R | At center |
| **B (Solenoid)** | B = μ₀nI | n = N/L |
| **Cyclotron Radius** | r = mv/qB | Circular motion |
| **Magnetic Moment** | m = NIA | For a coil |
| **Torque** | τ = m × B | τ = mB sinθ |`,
      },
      {
        id: "p12-6",
        title: "Electromagnetic Induction",
        summary: "Covers Faraday's laws, Lenz's law, self and mutual induction, and AC generators.",
        content: `# Electromagnetic Induction

## Magnetic Flux
- Φ = B · A = BA cosθ.

## Faraday's Laws
- ε = -dΦ/dt.

## Lenz's Law
- The direction of induced current is such that it opposes the change in flux that produced it (Conservation of Energy).

## Motional EMF
- ε = Blv (for a rod moving in B).

## Inductance
- **Self Induction**: Φ = LI. ε = -L dI/dt.
  - Solenoid: L = μ₀n²Al.
- **Mutual Induction**: Φ₂ = MI₁. ε₂ = -M dI₁/dt.

## AC Generator
- ε = NBAω sin(ωt).`,
        formulas: `### EMI Formula Sheet

| Concept | Formula | Description |
|:--------|:--------|:------------|
| **Magnetic Flux** | Φ = BA cosθ | Weber (Wb) |
| **Induced EMF** | ε = -dΦ/dt | Faraday's Law |
| **Motional EMF** | ε = Blv | For moving conductor |
| **Self Inductance** | L = Φ/I | Henry (H) |
| **Energy in Inductor** | U = ½LI² | Joule (J) |
| **Mutual Inductance** | M = k√(L₁L₂) | k = coupling coeff |`,
      },
      {
        id: "p12-7",
        title: "Alternating Current",
        summary: "Discusses RMS values, LCR circuits, resonance, and transformers.",
        content: `# Alternating Current

## RMS and Average Values
- I_rms = I₀ / √2 ≈ 0.707 I₀.
- V_rms = V₀ / √2.
- I_avg (half cycle) = 2I₀ / π ≈ 0.637 I₀.

## Reactance and Impedance
- **Inductive Reactance**: X_L = ωL.
- **Capacitive Reactance**: X_C = 1/ωC.
- **Impedance (Z)**: Z = √[R² + (X_L - X_C)²].

## LCR Circuit and Resonance
- **Resonance**: X_L = X_C.
- **Resonant Frequency**: f_r = 1 / [2π√(LC)].
- **Quality Factor (Q)**: Q = ω_r L / R.

## Power in AC
- P_avg = V_rms I_rms cosφ.
- **Power Factor**: cosφ = R/Z.
- **Wattless Current**: I_rms sinφ (does no work).

## Transformer
- V_s / V_p = N_s / N_p = I_p / I_s.
- Efficiency η = P_out / P_in.`,
        formulas: `### AC Formula Sheet

| Concept | Formula | Description |
|:--------|:--------|:------------|
| **RMS Current** | I_rms = I₀/√2 | Effective value |
| **Inductive Reactance** | X_L = 2πfL | Opposes AC |
| **Capacitive Reactance** | X_C = 1/(2πfC) | Opposes AC |
| **Impedance** | Z = √[R²+(X_L-X_C)²] | Total opposition |
| **Resonant Freq** | f = 1/[2π√(LC)] | Max current |
| **Power Factor** | cosφ = R/Z | Efficiency of circuit |`,
      },
      {
        id: "p12-2",
        title: "Ray Optics",
        summary: "Covers reflection, refraction, total internal reflection, lenses, prisms, and optical instruments like microscopes and telescopes.",
        content: `# Ray Optics and Optical Instruments

## Reflection
- **Mirror Formula**: 1/v + 1/u = 1/f.
- **Magnification**: m = -v/u = h'/h.

## Refraction
- **Snell's Law**: n₁ sinθ₁ = n₂ sinθ₂.
- **Refractive Index**: n = c/v.
- **Total Internal Reflection (TIR)**: Occurs when light goes from denser to rarer medium and i > i_c. sin i_c = 1/n.

## Lenses
- **Lens Maker's Formula**: 1/f = (n - 1) [1/R₁ - 1/R₂].
- **Lens Formula**: 1/v - 1/u = 1/f.
- **Power**: P = 1/f (in meters). Unit: Dioptre (D).
- **Combination**: P_eq = P₁ + P₂.

## Prisms
- **Refractive Index**: n = sin[(A + δ_m)/2] / sin(A/2).
- **Angular Dispersion**: θ = δ_v - δ_r.
- **Dispersive Power**: ω = (δ_v - δ_r) / δ_y.

## Optical Instruments
- **Simple Microscope**: M = 1 + D/f.
- **Compound Microscope**: M = (v_o / u_o) * (1 + D/f_e).
- **Telescope**: M = f_o / f_e. Length L = f_o + f_e.`,
        formulas: `### Ray Optics Formula Sheet

| Concept | Formula | Description |
|:--------|:--------|:------------|
| **Mirror Formula** | 1/v + 1/u = 1/f | f = R/2 |
| **Snell's Law** | n₁ sin i = n₂ sin r | Refraction |
| **Critical Angle** | sin i_c = 1/n | For TIR |
| **Lens Formula** | 1/v - 1/u = 1/f | Thin lens |
| **Lens Power** | P = 1/f | In Dioptres |
| **Prism Formula** | n = sin(A+δ)/2 / sin(A/2) | At min deviation |
| **Telescope Mag** | M = f_o / f_e | For normal adjustment |`,
      },
      {
        id: "p12-8",
        title: "Wave Optics",
        summary: "Discusses Huygens principle, interference (Young's double slit experiment), and diffraction.",
        content: `# Wave Optics

## Huygens Principle
- Every point on a wavefront acts as a source of secondary wavelets.

## Interference
- **Coherent Sources**: Constant phase difference.
- **Young's Double Slit Experiment (YDSE)**:
  - Path difference Δx = d sinθ ≈ dy/D.
  - **Constructive**: Δx = nλ.
  - **Destructive**: Δx = (n + ½)λ.
  - **Fringe Width (β)**: β = λD/d.

## Diffraction
- Bending of light around corners.
- **Single Slit Diffraction**:
  - Minima: a sinθ = nλ.
  - Central Maxima Width: 2λD/a.

## Polarization
- **Brewster's Law**: n = tan i_p.
- **Malus' Law**: I = I₀ cos²θ.`,
        formulas: `### Wave Optics Formula Sheet

| Concept | Formula | Description |
|:--------|:--------|:------------|
| **Fringe Width** | β = λD/d | In YDSE |
| **Path Difference** | Δx = d sinθ | For interference |
| **Brewster's Law** | n = tan i_p | For polarization |
| **Malus' Law** | I = I₀ cos²θ | Intensity of light |
| **Central Max Width** | W = 2λD/a | In diffraction |`,
      },
      {
        id: "p12-3",
        title: "Dual Nature of Radiation",
        summary: "Covers the photoelectric effect, Einstein's equation, and de Broglie's hypothesis.",
        content: `# Dual Nature of Radiation and Matter

## Photoelectric Effect
- Emission of electrons when light falls on a metal surface.
- **Einstein's Equation**: hν = Φ₀ + K_max.
- **Work Function (Φ₀)**: Minimum energy required to eject an electron. Φ₀ = hν₀.
- **Stopping Potential (V₀)**: eV₀ = K_max.

## Matter Waves
- **de Broglie Hypothesis**: Every moving particle has a wave associated with it.
- **Wavelength (λ)**: λ = h/p = h/mv.
- **For Electron**: λ = 12.27 / √V Å (V in volts).

## Davisson-Germer Experiment
- Confirmed the wave nature of electrons.`,
        formulas: `### Dual Nature Formula Sheet

| Concept | Formula | Description |
|:--------|:--------|:------------|
| **Photon Energy** | E = hν = hc/λ | Quantum of light |
| **Einstein's Eq** | hν = Φ + eV₀ | Photoelectric effect |
| **Work Function** | Φ = hν₀ | Threshold frequency |
| **de Broglie λ** | λ = h/p | Matter waves |
| **λ (Electron)** | λ = 1.227/√V nm | Accelerated by V |
| **Momentum** | p = √(2mK) | Relation with KE |`,
      },
      {
        id: "p12-9",
        title: "Atoms and Nuclei",
        summary: "Discusses Rutherford and Bohr models of the atom, radioactivity, and nuclear energy.",
        content: `# Atoms and Nuclei

## Bohr Model of Hydrogen Atom
- **Postulates**:
  - Electrons revolve in stable orbits without radiating energy.
  - Angular momentum is quantized: L = n(h/2π).
  - Energy emitted/absorbed during transitions: ΔE = hν.
- **Radius**: r_n ∝ n²/Z.
- **Energy**: E_n = -13.6 Z²/n² eV.

## Atomic Spectra
- Lyman (UV), Balmer (Visible), Paschen, Brackett, Pfund (Infrared).
- **Rydberg Formula**: 1/λ = R [1/n₁² - 1/n₂²].

## Nuclei
- **Size**: R = R₀ A^(1/3).
- **Mass Defect (Δm)**: Δm = [Zm_p + (A-Z)m_n] - M_nucleus.
- **Binding Energy**: BE = Δm c².
- **Radioactivity**:
  - Law: N = N₀ e^(-λt).
  - Half-life: T_1/2 = 0.693 / λ.
  - Mean life: τ = 1/λ.`,
        formulas: `### Atoms & Nuclei Formula Sheet

| Concept | Formula | Description |
|:--------|:--------|:------------|
| **Bohr Radius** | r_n = 0.529 n²/Z Å | For H-like atoms |
| **Bohr Energy** | E_n = -13.6 Z²/n² eV | Total energy |
| **Rydberg Eq** | 1/λ = R(1/n₁² - 1/n₂²) | Spectral lines |
| **Nuclear Radius** | R = R₀ A^(1/3) | R₀ = 1.2 fm |
| **Half Life** | T_1/2 = 0.693/λ | Radioactivity |
| **Mass-Energy** | E = Δmc² | Einstein's relation |`,
      },
      {
        id: "p12-10",
        title: "Semiconductor Electronics",
        summary: "Covers energy bands, p-n junction diodes, transistors, and logic gates.",
        content: `# Semiconductor Electronics

## Energy Bands
- **Valence Band (VB)** and **Conduction Band (CB)**.
- **Insulators**: Large band gap (>3eV).
- **Semiconductors**: Small band gap (<3eV).
- **Conductors**: Overlapping bands.

## Intrinsic and Extrinsic Semiconductors
- **Intrinsic**: Pure (n_e = n_h).
- **Extrinsic**: Doped.
  - n-type: Doped with Pentavalent (e.g., P, As). n_e >> n_h.
  - p-type: Doped with Trivalent (e.g., B, Al). n_h >> n_e.

## P-N Junction Diode
- **Forward Bias**: p to +ve, n to -ve. Depletion layer narrows. Conducts.
- **Reverse Bias**: p to -ve, n to +ve. Depletion layer widens. Doesn't conduct (except for Zener breakdown).
- **Rectifier**: Converts AC to DC. Half-wave and Full-wave.

## Logic Gates
- OR, AND, NOT (Basic).
- NAND, NOR (Universal).
- XOR, XNOR.`,
        formulas: `### Semiconductors Formula Sheet

| Gate | Logic | Boolean |
|:-----|:------|:--------|
| **OR** | High if any input high | Y = A + B |
| **AND** | High if all inputs high | Y = A · B |
| **NOT** | Inverts input | Y = Ā |
| **NAND** | Inverse of AND | Y = ¬(A·B) |
| **NOR** | Inverse of OR | Y = ¬(A+B) |
| **Diode Current** | I = I₀(e^(eV/kT) - 1) | Ideal diode eq |`,
      },
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
| Dilution Law | M₁V₁ = M₂V₂ | For same solute |`,
      },
      {
        id: "c11-4",
        title: "Structure of Atom",
        summary: "Covers subatomic particles, atomic models, quantum numbers, and electronic configuration.",
        content: `# Structure of Atom

## Subatomic Particles
- **Electron**: Discovered by J.J. Thomson (Cathode ray experiment).
- **Proton**: Discovered by Goldstein (Anode ray experiment).
- **Neutron**: Discovered by Chadwick.

## Atomic Models
- **Thomson Model**: Plum pudding model.
- **Rutherford Model**: α-particle scattering experiment. Nucleus discovered.
- **Bohr Model**: Electrons revolve in fixed energy orbits.

## Quantum Mechanical Model
- **Dual Nature (de Broglie)**: λ = h/mv.
- **Heisenberg Uncertainty Principle**: Δx · Δp ≥ h/4π.
- **Quantum Numbers**:
  - *Principal (n)*: Size and energy of shell.
  - *Azimuthal (l)*: Shape of orbital (s=0, p=1, d=2, f=3).
  - *Magnetic (m_l)*: Orientation of orbital (-l to +l).
  - *Spin (m_s)*: Spin of electron (+½ or -½).

## Electronic Configuration
- **Pauli Exclusion Principle**: No two electrons can have the same four quantum numbers.
- **Hund's Rule**: Pairing starts only after all orbitals are singly occupied.
- **Aufbau Principle**: Orbitals are filled in order of increasing energy (n+l rule).`,
        formulas: `### Atomic Structure Formula Sheet

| Concept | Formula | Description |
|:--------|:--------|:------------|
| **Energy of Photon** | E = hν = hc/λ | h = 6.626 × 10⁻³⁴ J s |
| **Bohr Radius** | r_n = 0.529 n²/Z Å | For H-like species |
| **Bohr Energy** | E_n = -13.6 Z²/n² eV | Total energy |
| **Rydberg Formula** | 1/λ = R Z² (1/n₁² - 1/n₂²) | R = 1.097 × 10⁷ m⁻¹ |
| **de Broglie λ** | λ = h/mv | Wave nature |
| **Uncertainty** | Δx Δp ≥ h/4π | Heisenberg |`,
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
- Formed by complete transfer of electrons.
- **Lattice Enthalpy**: Energy released when one mole of ionic compound is formed from gaseous ions.

## Covalent Bond
- Formed by sharing of electrons.
- **Formal Charge**: V - L - ½S.
- **VSEPR Theory**: Predicts shape based on repulsion between electron pairs (lp-lp > lp-bp > bp-bp).

## Hybridization
- Intermixing of atomic orbitals to form new hybrid orbitals.
- **sp**: Linear (180°).
- **sp2**: Trigonal planar (120°).
- **sp3**: Tetrahedral (109.5°).
- **sp3d**: Trigonal bipyramidal.
- **sp3d2**: Octahedral.

## Molecular Orbital Theory (MOT)
- Formation of Bonding and Antibonding MOs.
- **Bond Order**: ½ (N_b - N_a).
- **Magnetic Nature**: Paramagnetic (unpaired e-), Diamagnetic (paired e-).`,
        formulas: `### Chemical Bonding Formula Sheet

| Concept | Formula | Description |
|:--------|:--------|:------------|
| **Formal Charge** | V - L - ½S | V=valence, L=lone, S=shared |
| **Bond Order** | ½ (N_b - N_a) | Stability ∝ Bond Order |
| **Dipole Moment** | μ = q × d | Unit: Debye (D) |
| **% Ionic Character** | 16Δχ + 3.5Δχ² | Δχ = electronegativity diff |
| **Hybridization** | H = ½(V + M - C + A) | V=valence, M=monovalent |`,
      },
      {
        id: "c11-5",
        title: "Thermodynamics",
        summary: "Discusses laws of thermodynamics, enthalpy, entropy, and Gibbs free energy in chemical processes.",
        content: `# Chemical Thermodynamics

## Basic Terms
- **System**: Part of universe under study.
- **Surroundings**: Rest of the universe.
- **State Functions**: Depend only on initial and final states (P, V, T, U, H, S, G).

## First Law of Thermodynamics
- ΔU = q + w.
- **Work (w)**: w = -P_ext ΔV.
- **Enthalpy (H)**: H = U + PV. ΔH = ΔU + Δn_g RT.

## Thermochemistry
- **Hess's Law**: Total enthalpy change is the same whether the reaction occurs in one step or several steps.

## Spontaneity
- **Entropy (S)**: Measure of randomness. ΔS_total = ΔS_sys + ΔS_surr > 0 for spontaneous process.
- **Gibbs Free Energy (G)**: G = H - TS.
  - ΔG = ΔH - TΔS.
  - ΔG < 0: Spontaneous.
  - ΔG > 0: Non-spontaneous.
  - ΔG = 0: Equilibrium.`,
        formulas: `### Thermodynamics Formula Sheet

| Concept | Formula | Description |
|:--------|:--------|:------------|
| **First Law** | ΔU = q + w | Conservation of energy |
| **Work (Rev)** | w = -2.303 nRT log(V₂/V₁) | Isothermal reversible |
| **Enthalpy** | ΔH = ΔU + Δn_g RT | Relation |
| **Gibbs Eq** | ΔG = ΔH - TΔS | Spontaneity criterion |
| **ΔG° and K** | ΔG° = -2.303 RT log K | Equilibrium constant |
| **Entropy** | ΔS = q_rev / T | Definition |`,
      },
      {
        id: "c11-3",
        title: "Equilibrium",
        summary: "Covers physical and chemical equilibrium, Le Chatelier's principle, and ionic equilibrium including pH and buffer solutions.",
        content: `# Equilibrium

## Chemical Equilibrium
- **Law of Mass Action**: Rate ∝ product of active masses of reactants.
- **Equilibrium Constant (K)**: K_p = K_c (RT)^Δn_g.
- **Le Chatelier's Principle**: If a system at equilibrium is subjected to a change, the system shifts to counteract the change.
  - *Conc*: Add reactant → shifts forward.
  - *Pressure*: Increase P → shifts to side with fewer moles of gas.
  - *Temp*: Increase T → shifts in endothermic direction.

## Ionic Equilibrium
- **Ostwald's Dilution Law**: α = √(K_a / C) for weak electrolytes.
- **pH Scale**: pH = -log[H+]. pH + pOH = 14.
- **Buffer Solutions**: Resist change in pH.
  - Acidic: Weak acid + its salt with strong base.
  - Basic: Weak base + its salt with strong acid.
- **Solubility Product (K_sp)**: For A_x B_y ⇌ xA^y+ + yB^x-, K_sp = [A]^x [B]^y.`,
        formulas: `### Equilibrium Formula Sheet

| Concept | Formula | Description |
|:--------|:--------|:------------|
| **K_p and K_c** | K_p = K_c (RT)^Δn_g | Relation |
| **pH** | pH = -log[H⁺] | Acidity measure |
| **Henderson Eq** | pH = pK_a + log([Salt]/[Acid]) | For acidic buffer |
| **Solubility** | K_sp = (xs)ˣ (ys)ʸ | For AₓBᵧ type |
| **Ionic Product** | K_w = [H⁺][OH⁻] = 10⁻¹⁴ | At 298 K |`,
      },
      {
        id: "c11-6",
        title: "Redox Reactions",
        summary: "Discusses oxidation-reduction reactions, oxidation numbers, and balancing of redox equations.",
        content: `# Redox Reactions

## Oxidation and Reduction
- **Oxidation**: Loss of electrons, increase in oxidation number.
- **Reduction**: Gain of electrons, decrease in oxidation number.

## Oxidation Number
- Charge which an atom appears to have when all other atoms are removed as ions.
- **Rules**:
  - Free state: 0.
  - Alkali metals: +1.
  - Oxygen: -2 (except peroxides -1, superoxides -½, OF2 +2).
  - Hydrogen: +1 (except metal hydrides -1).

## Balancing Redox Reactions
1. **Oxidation Number Method**.
2. **Half-Reaction Method (Ion-Electron Method)**.

## Redox as Basis for Titrations
- Permanganate titrations, Dichromate titrations, Iodometric titrations.`,
        formulas: `### Redox Formula Sheet

| Concept | Formula | Description |
|:--------|:--------|:------------|
| **Oxidation No.** | Σ(O.N.) = Charge | For a molecule/ion |
| **Balancing (Acidic)** | Add H₂O for O, H⁺ for H | Ion-electron method |
| **Balancing (Basic)** | Add OH⁻ to neutralize H⁺ | Ion-electron method |
| **Equivalent Weight** | Molar Mass / n-factor | n = change in O.N. |`,
      },
      {
        id: "c11-7",
        title: "Hydrocarbons",
        summary: "Covers alkanes, alkenes, alkynes, and aromatic hydrocarbons including their preparation and properties.",
        content: `# Hydrocarbons

## Alkanes (Paraffins)
- **Preparation**: Wurtz reaction, Decarboxylation of carboxylic acids, Kolbe's electrolysis.
- **Properties**: Halogenation (Free radical substitution).

## Alkenes (Olefins)
- **Preparation**: Dehydration of alcohols, Dehydrohalogenation of alkyl halides.
- **Properties**:
  - **Markownikoff's Rule**: Negative part of addendum goes to C with fewer H atoms.
  - **Anti-Markownikoff (Peroxide Effect)**: Only for HBr.
  - **Ozonolysis**: Cleavage of C=C to form carbonyl compounds.

## Alkynes
- **Preparation**: From calcium carbide, Dehydrohalogenation of vicinal dihalides.
- **Properties**: Acidic nature of terminal alkynes.

## Aromatic Hydrocarbons (Benzene)
- **Structure**: Resonance hybrid, Planar, Huckel's Rule (4n+2)π electrons.
- **Electrophilic Substitution**: Nitration, Sulphonation, Halogenation, Friedel-Crafts Alkylation/Acylation.`,
        formulas: `### Hydrocarbons Formula Sheet

| Reaction | Reagents | Product |
|:---------|:---------|:--------|
| **Wurtz** | Na / Dry ether | Alkane (even C) |
| **Kolbe** | Electrolysis of RCOONa | Alkane at anode |
| **Ozonolysis** | O₃ followed by Zn/H₂O | Carbonyls |
| **Nitration** | Conc. HNO₃ + H₂SO₄ | Nitrobenzene |
| **F-C Alkylation** | R-Cl + Anhyd. AlCl₃ | Alkylbenzene |`,
      },
    ],
    class12: [
      {
        id: "c12-4",
        title: "Solutions",
        summary: "Covers types of solutions, solubility, Raoult's law, and colligative properties.",
        content: `# Solutions

## Types of Solutions
- Binary solutions: Solute + Solvent.

## Solubility
- **Henry's Law**: p = K_H x. Solubility of gas in liquid ∝ partial pressure.

## Raoult's Law
- For volatile liquids: p_A = p_A° x_A.
- **Ideal Solutions**: ΔH_mix = 0, ΔV_mix = 0. Obey Raoult's law.
- **Non-Ideal Solutions**: Show positive or negative deviations.

## Colligative Properties
- Depend only on number of solute particles.
1. **Relative Lowering of Vapour Pressure**: (p° - p)/p° = x_solute.
2. **Elevation of Boiling Point**: ΔT_b = K_b m.
3. **Depression of Freezing Point**: ΔT_f = K_f m.
4. **Osmotic Pressure**: π = CRT.

## Van't Hoff Factor (i)
- i = Observed colligative property / Calculated colligative property.
- i = 1 + (n-1)α (for dissociation).
- i = 1 + (1/n - 1)α (for association).`,
        formulas: `### Solutions Formula Sheet

| Concept | Formula | Description |
|:--------|:--------|:------------|
| **Henry's Law** | p = K_H x | Gas solubility |
| **Raoult's Law** | P_total = P_A°x_A + P_B°x_B | For ideal solutions |
| **Boiling Point** | ΔT_b = i K_b m | Elevation |
| **Freezing Point** | ΔT_f = i K_f m | Depression |
| **Osmotic Press** | π = i CRT | π = i (n/V)RT |
| **Van't Hoff i** | i = 1 + (n-1)α | For dissociation |`,
      },
      {
        id: "c12-5",
        title: "Electrochemistry",
        summary: "Discusses galvanic cells, Nernst equation, conductance, and electrolysis.",
        content: `# Electrochemistry

## Galvanic Cells
- Convert chemical energy to electrical energy.
- **Cell Potential**: E_cell = E_cathode - E_anode.
- **Nernst Equation**: E = E° - (0.059/n) log Q (at 298 K).

## Conductance
- **Resistance (R)**: R = ρ(l/A).
- **Conductivity (κ)**: κ = 1/ρ.
- **Molar Conductivity (Λ_m)**: Λ_m = κ × 1000 / C.
- **Kohlrausch's Law**: Λ_m° = Σλ°. Used to find Λ_m° for weak electrolytes.

## Electrolysis
- **Faraday's First Law**: w = ZIt.
- **Faraday's Second Law**: w₁/w₂ = E₁/E₂.

## Batteries and Corrosion
- Primary (Dry cell), Secondary (Lead storage battery).
- **Corrosion**: Electrochemical phenomenon (Rusting of iron).`,
        formulas: `### Electrochemistry Formula Sheet

| Concept | Formula | Description |
|:--------|:--------|:------------|
| **Cell Potential** | E_cell = E_red - E_ox | Standard conditions |
| **Nernst Eq** | E = E° - (RT/nF) ln Q | Non-standard |
| **Free Energy** | ΔG = -nFE_cell | Spontaneity |
| **Conductivity** | κ = G * (l/A) | G = conductance |
| **Molar Cond.** | Λ_m = κ/C | Unit: S cm² mol⁻¹ |
| **Faraday's Law** | m = (M/nF) It | Electrolysis mass |`,
      },
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
        formulas: `### Chemical Kinetics Formula Sheet

| Concept | Formula | Description |
|:--------|:--------|:--------|
| Rate Law | Rate = k[A]^x [B]^y | x+y = Order |
| Zero Order t½ | t½ = [A]₀ / 2k | Linear with [A]₀ |
| First Order k | k = (2.303/t) log([A]₀/[A]) | k in s⁻¹ |
| First Order t½ | t½ = 0.693 / k | Independent of [A]₀ |
| Arrhenius Eq. | log(k₂/k₁) = Ea/2.303R [1/T₁ - 1/T₂] | T in Kelvin |`,
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
        formulas: `### Coordination Formula Sheet

| Concept | Formula | Details |
|:--------|:--------|:--------|
| EAN | Z - (O.S.) + 2(C.N.) | Z=Atomic number |
| Magnetic Moment | μ = √[n(n+2)] BM | n=unpaired electrons |
| CFSE (Oct) | [-0.4n(t2g) + 0.6n(eg)]Δ₀ | n=number of electrons |
| Spin Only μ | 1.73 (1e), 2.83 (2e), 3.87 (3e) | In Bohr Magnetons |`,
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
| Base Strength | +I/+M increases, -I/-M decreases |`,
      },
      {
        id: "c12-6",
        title: "Haloalkanes and Haloarenes",
        summary: "Covers preparation, properties, and nucleophilic substitution reactions (SN1 and SN2).",
        content: `# Haloalkanes and Haloarenes

## Preparation
- From alcohols (using PCl5, SOCl2, HCl/ZnCl2).
- From hydrocarbons (Free radical halogenation, Electrophilic substitution).
- **Finkelstein Reaction**: R-X + NaI → R-I + NaX.
- **Swarts Reaction**: R-X + AgF → R-F + AgX.

## Nucleophilic Substitution
- **SN1**: Two steps, Carbocation intermediate, Racemization. Stability: 3° > 2° > 1°.
- **SN2**: One step, Transition state, Inversion of configuration (Walden Inversion). Stability: 1° > 2° > 3°.

## Haloarenes
- Less reactive towards nucleophilic substitution due to resonance and sp2 hybridization.
- **Wurtz-Fittig Reaction**: R-X + Ar-X + 2Na → Ar-R + 2NaX.
- **Fittig Reaction**: Ar-X + Ar-X + 2Na → Ar-Ar + 2NaX.`,
        formulas: `### Haloalkanes Formula Sheet

| Reaction | Reagents | Product |
|:---------|:---------|:--------|
| **SN1** | Polar protic solvent | Racemic mixture |
| **SN2** | Polar aprotic solvent | Inverted product |
| **Finkelstein** | NaI / Acetone | Alkyl Iodide |
| **Swarts** | AgF or Hg₂F₂ | Alkyl Fluoride |
| **Elimination** | Alc. KOH | Alkene (Saytzeff) |`,
      },
      {
        id: "c12-7",
        title: "Alcohols, Phenols and Ethers",
        summary: "Discusses preparation, properties, and chemical reactions of alcohols, phenols, and ethers.",
        content: `# Alcohols, Phenols and Ethers

## Alcohols
- **Preparation**: Hydration of alkenes, Hydroboration-oxidation, Reduction of carbonyls.
- **Properties**: Acidic nature (1° > 2° > 3°).
- **Lucas Test**: Distinguishes 1°, 2°, 3° alcohols (3° gives turbidity immediately).

## Phenols
- **Preparation**: From chlorobenzene (Dow's process), From cumene.
- **Properties**: More acidic than alcohols.
- **Reactions**: Reimer-Tiemann (Salicylaldehyde), Kolbe's reaction (Salicylic acid).

## Ethers
- **Preparation**: Williamson synthesis (R-X + R'-ONa → R-O-R' + NaX).
- **Properties**: Cleavage by HI.`,
        formulas: `### Alcohols & Phenols Formula Sheet

| Test/Reaction | Reagents | Observation |
|:--------------|:---------|:------------|
| **Lucas Test** | Conc. HCl + ZnCl₂ | 3° (fast), 2° (5 min) |
| **Reimer-Tiemann** | CHCl₃ + NaOH | Salicylaldehyde |
| **Kolbe's** | CO₂ + NaOH | Salicylic acid |
| **Williamson** | R-X + R'-ONa | Ether formation |
| **Acidic Strength** | Phenol > Water > Alcohol | Due to resonance |`,
      },
      {
        id: "c12-8",
        title: "Aldehydes and Ketones",
        summary: "Covers nucleophilic addition reactions, oxidation, reduction, and name reactions like Aldol and Cannizzaro.",
        content: `# Aldehydes, Ketones and Carboxylic Acids

## Preparation
- **Rosenmund Reduction**: RCOCl + H2/Pd-BaSO4 → RCHO.
- **Stephen Reaction**: RCN + SnCl2/HCl → RCHO.
- **Etard Reaction**: Toluene + CrO2Cl2 → Benzaldehyde.

## Chemical Reactions
- **Nucleophilic Addition**: HCN, NaHSO3, Grignard reagent.
- **Aldol Condensation**: For aldehydes/ketones with α-H.
- **Cannizzaro Reaction**: For aldehydes with NO α-H.
- **Tests**: Tollen's test (Silver mirror), Fehling's test (Red ppt).

## Carboxylic Acids
- **Preparation**: Oxidation of 1° alcohols/aldehydes, Hydrolysis of nitriles.
- **Reactions**: HVZ reaction (α-halogenation).`,
        formulas: `### Carbonyls Formula Sheet

| Reaction | Reagents | Product |
|:---------|:---------|:--------|
| **Aldol** | Dil. NaOH | β-hydroxy carbonyl |
| **Cannizzaro** | Conc. NaOH | Alcohol + Salt |
| **Clemmensen** | Zn-Hg / HCl | Alkane |
| **Wolf-Kishner** | NH₂NH₂ / KOH | Alkane |
| **HVZ** | X₂ / Red P | α-halo acid |`,
      },
      {
        id: "c12-9",
        title: "Amines",
        summary: "Discusses basicity of amines, preparation, and reactions including Hoffmann bromamide and Gabriel phthalimide synthesis.",
        content: `# Amines

## Preparation
- **Hoffmann Bromamide Degradation**: RCONH2 + Br2 + 4NaOH → RNH2 + Na2CO3 + 2NaBr + 2H2O. (One carbon less).
- **Gabriel Phthalimide Synthesis**: For 1° aliphatic amines.

## Properties
- **Basicity**: Aliphatic amines > Ammonia. In aqueous phase: 2° > 3° > 1° (for methyl).
- **Carbylamine Reaction**: RNH2 + CHCl3 + 3KOH → RNC (foul smell).

## Diazonium Salts
- **Sandmeyer Reaction**: Ar-N2+Cl- + CuCl/HCl → Ar-Cl.
- **Coupling Reactions**: Formation of azo dyes.`,
        formulas: `### Amines Formula Sheet

| Reaction | Reagents | Product |
|:---------|:---------|:--------|
| **Hoffmann Brom.** | Br₂ + NaOH | 1° Amine (C-1) |
| **Carbylamine** | CHCl₃ + KOH | Isocyanide (foul) |
| **Hinsberg Test** | C₆H₅SO₂Cl | Distinguish 1,2,3° |
| **Sandmeyer** | CuX / HX | Haloarene |
| **Basicity (Gas)** | 3° > 2° > 1° > NH₃ | Due to +I effect |`,
      },
      {
        id: "c12-10",
        title: "Biomolecules",
        summary: "Covers carbohydrates, proteins, nucleic acids, and vitamins.",
        content: `# Biomolecules

## Carbohydrates
- **Monosaccharides**: Glucose (Aldohexose), Fructose (Ketohexose).
- **Disaccharides**: Sucrose (Glucose + Fructose), Lactose (Glucose + Galactose), Maltose (Glucose + Glucose).
- **Polysaccharides**: Starch, Cellulose, Glycogen.

## Proteins
- **α-Amino Acids**: Building blocks. Zwitterion form.
- **Peptide Bond**: -CO-NH- linkage.
- **Structure**: Primary, Secondary (α-helix, β-pleated), Tertiary, Quaternary.
- **Denaturation**: Loss of biological activity due to change in T or pH.

## Nucleic Acids
- **Nucleotide**: Sugar + Base + Phosphate.
- **DNA**: Deoxyribose sugar, Bases (A, G, C, T). Double helix.
- **RNA**: Ribose sugar, Bases (A, G, C, U). Single stranded.`,
        formulas: `### Biomolecules Formula Sheet

| Molecule | Linkage | Components |
|:---------|:--------|:-----------|
| **Sucrose** | Glycosidic | Glu + Fru |
| **Proteins** | Peptide | Amino Acids |
| **Nucleic Acid** | Phosphodiester | Nucleotides |
| **DNA Bases** | H-bonds | A=T, G≡C |
| **Zwitterion** | Internal salt | NH₃⁺ and COO⁻ |`,
      },
    ],
  }
};
