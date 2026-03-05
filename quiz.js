var SETS = {

  1: [
    {topic:"Microbiology",q:"Which of the following best describes the peptidoglycan layer in Gram-positive bacteria?",opts:["A single thin layer outside the plasma membrane","A thick multilayered mesh surrounding the cell membrane","A double membrane with thin peptidoglycan in between","A lipopolysaccharide outer layer with peptidoglycan beneath"],ans:1,exp:"Gram-positive bacteria have a thick multilayered peptidoglycan mesh directly outside their plasma membrane, which retains crystal violet in Gram staining."},
    {topic:"Microbiology",q:"The Shine-Dalgarno sequence in prokaryotes is important for:",opts:["Transcription termination","Translation initiation by ribosome binding","Sigma factor recognition of the promoter","Regulation of the lac operon"],ans:1,exp:"The Shine-Dalgarno sequence is a purine-rich region 5-10 nt upstream of the start codon that base-pairs with the 16S rRNA of the 30S ribosomal subunit to position the ribosome at the correct start codon."},
    {topic:"Microbiology",q:"Which enzyme synthesises RNA from a DNA template?",opts:["DNA polymerase I","Primase","RNA polymerase","Reverse transcriptase"],ans:2,exp:"RNA polymerase catalyses transcription of RNA from a DNA template. It requires a promoter sequence and, in bacteria, a sigma factor for initiation."},
    {topic:"Microbiology",q:"Quorum sensing in bacteria primarily involves:",opts:["Response to UV-induced DNA damage","Detection of viral particle concentration","Cell-density-dependent gene regulation via autoinducers","Horizontal gene transfer via conjugation"],ans:2,exp:"Quorum sensing allows bacteria to monitor population density through accumulation of autoinducer molecules. At threshold concentration, coordinated gene expression changes occur such as biofilm formation and virulence factor production."},
    {topic:"Microbiology",q:"A bacteriophage that integrates its genome into the host chromosome is called:",opts:["Lytic phage","Lysogenic phage (prophage)","Temperate phage in the lytic cycle","Filamentous phage"],ans:1,exp:"A temperate bacteriophage can follow the lysogenic pathway, integrating as a prophage into the host chromosome. This persists through cell divisions until induction triggers the lytic cycle."},
    {topic:"Microbiology",q:"Which feature is NOT characteristic of Archaea?",opts:["Ether-linked membrane lipids","No membrane-bound nucleus","Peptidoglycan cell wall","Histone-like proteins"],ans:2,exp:"Archaea lack peptidoglycan (a bacterial feature). They possess ether-linked lipids, no nuclear membrane, and histone-like proteins to organise their DNA."},
    {topic:"Microbiology",q:"In binary fission, the FtsZ protein forms:",opts:["The nucleoid region","A Z-ring at mid-cell that constricts during division","The replication fork","Flagellar motor complexes"],ans:1,exp:"FtsZ is a GTPase homologous to eukaryotic tubulin. It polymerises into a Z-ring at the cell midpoint, recruits the divisome, and provides constriction force during prokaryotic cell division."},
    {topic:"Microbiology",q:"Bacterial transformation refers to:",opts:["Transfer of DNA via a phage vector","Uptake of naked exogenous DNA from the environment","Exchange of DNA through a pilus","Insertion of a transposon into the genome"],ans:1,exp:"Bacterial transformation involves uptake and incorporation of naked environmental DNA. Naturally competent bacteria such as Streptococcus pneumoniae have specific machinery for this process."},
    {topic:"Microbiology",q:"The TCA cycle yields which combination of electron carriers per acetyl-CoA?",opts:["2 NADH, 1 FADH2, 1 GTP","3 NADH, 1 FADH2, 1 GTP","3 NADH, 2 FADH2, 1 GTP","2 NADH, 2 FADH2, 2 GTP"],ans:1,exp:"One turn of the TCA cycle yields 3 NADH, 1 FADH2, and 1 GTP, along with release of 2 CO2 molecules per acetyl-CoA oxidised."},
   { topic:"Transcription", 
q:"What is the main function of RNA polymerase during transcription?",
opts:[
"Translate mRNA into protein",
"Synthesize RNA using DNA as a template",
"Break down RNA molecules",
"Attach amino acids to tRNA"
],
ans:1,
exp:"RNA polymerase reads the DNA template strand and synthesizes a complementary RNA strand."
},

{ topic:"RNA Types",
q:"Which RNA molecule carries amino acids to the ribosome during protein synthesis?",
opts:[
"mRNA",
"rRNA",
"tRNA",
"snRNA"
],
ans:2,
exp:"Transfer RNA (tRNA) transports specific amino acids to the ribosome during translation."
},

{ topic:"Central Dogma",
q:"The central dogma of molecular biology describes the flow of genetic information as:",
opts:[
"DNA → Protein → RNA",
"RNA → DNA → Protein",
"DNA → RNA → Protein",
"Protein → RNA → DNA"
],
ans:2,
exp:"Genetic information flows from DNA to RNA (transcription) and RNA to protein (translation)."
},

{ topic:"Translation",
q:"Where does translation occur in the cell?",
opts:[
"Nucleus",
"Ribosome",
"Mitochondria",
"Golgi apparatus"
],
ans:1,
exp:"Protein synthesis occurs at ribosomes in the cytoplasm."
},

{ topic:"RNA Structure",
q:"Which nitrogenous base is found in RNA but not in DNA?",
opts:[
"Adenine",
"Guanine",
"Uracil",
"Cytosine"
],
ans:2,
exp:"Uracil replaces thymine in RNA."
},

{ topic:"Codons",
q:"A codon consists of how many nucleotides?",
opts:[
1",
2",
3",
4"
],
ans:2,
exp:"Each codon is a triplet of nucleotides that codes for one amino acid."
},

{ topic:"Protein Synthesis",
q:"Which molecule contains the instructions for assembling amino acids into proteins?",
opts:[
"mRNA",
"tRNA",
"rRNA",
"DNA polymerase"
],
ans:0,
exp:"Messenger RNA carries genetic instructions from DNA to the ribosome."
},

{ topic:"Protein Types",
q:"Which type of protein primarily speeds up biochemical reactions?",
opts:[
"Structural proteins",
"Transport proteins",
"Enzymes",
"Antibodies"
],
ans:2,
exp:"Enzymes act as biological catalysts."
},

{ topic:"Ribosomes",
q:"Ribosomes are mainly composed of:",
opts:[
"DNA and lipids",
"RNA and proteins",
"Carbohydrates",
"Phospholipids"
],
ans:1,
exp:"Ribosomes consist primarily of ribosomal RNA (rRNA) and proteins."
},

{ topic:"Gene Expression",
q:"Which process converts RNA information into a sequence of amino acids?",
opts:[
"Replication",
"Transcription",
"Translation",
"Mutation"
],
ans:2,
exp:"Translation converts mRNA codons into a chain of amino acids."
},
    {topic:"Microbiology",q:"Chemotaxis in bacteria refers to:",opts:["Quorum sensing response to density","Directed movement along chemical gradients","Light-dependent swimming","Movement along magnetic field lines"],ans:1,exp:"Chemotaxis is the directed movement of bacteria in response to chemical gradients. Attractants suppress tumbling, resulting in smooth runs toward them; repellents increase tumbling."},
    {topic:"Biotechnology",q:"Restriction endonucleases are used in recombinant DNA technology to:",opts:["Amplify DNA sequences","Cut DNA at specific palindromic sequences","Join DNA fragments","Remove RNA primers"],ans:1,exp:"Type II restriction endonucleases recognise specific palindromic sequences and cleave both strands, generating defined fragments with blunt or cohesive ends suitable for cloning."},
    {topic:"Biotechnology",q:"PCR requires which set of components?",opts:["RNA template, reverse transcriptase, dNTPs","DNA template, two primers, thermostable polymerase, dNTPs","DNA template, one primer, RNA polymerase","Restriction enzymes and ligase"],ans:1,exp:"Standard PCR requires a DNA template, a forward and reverse primer, a thermostable polymerase (e.g. Taq), dNTPs, and buffer. Cycling through denaturation, annealing, and extension amplifies the target exponentially."},
    {topic:"Biotechnology",q:"Lipofection introduces DNA into cells via:",opts:["Electrical pulses","Glass needles","Cationic liposomes","Bacterial conjugation"],ans:2,exp:"Lipofection uses cationic liposomes that form lipoplexes with negatively charged DNA. These fuse with the cell membrane and release DNA into the cytoplasm for transfection of mammalian cells."},
    {topic:"Biotechnology",q:"A cloning plasmid vector must contain:",opts:["Origin of replication, selectable marker, and multiple cloning site","Promoter, terminator, and RBS only","Transposons and IS elements","Phage attachment sites and cos sequences"],ans:0,exp:"Cloning vectors require an origin of replication for autonomous replication, a selectable marker for identifying transformants, and a multiple cloning site (MCS) for insert ligation."},
    {topic:"Biotechnology",q:"CRISPR-Cas9 uses which components to cut DNA?",opts:["Protein complex only, scanning for PAM","sgRNA complementary to the target plus Cas9 nuclease","Two Cas proteins without RNA","Zinc finger nucleases with transcription activators"],ans:1,exp:"CRISPR-Cas9 uses an sgRNA that base-pairs with target DNA adjacent to a PAM sequence (NGG for SpCas9). Cas9 then creates a blunt-ended double-strand break ~3 bp upstream of the PAM."},
    {topic:"Biotechnology",q:"In Southern blotting, the detection probe is:",opts:["An antibody","A labelled complementary nucleic acid","A fluorescent protein","A restriction enzyme"],ans:1,exp:"After gel electrophoresis, size separation, and membrane transfer, a labelled single-stranded nucleic acid probe is hybridised to the immobilised target DNA to detect specific sequences."},
    {topic:"Biotechnology",q:"In fed-batch fermentation, substrate is:",opts:["Continuously added and product continuously removed","Added incrementally but broth is not removed during the run","Added entirely at the start","Removed with cells at set intervals"],ans:1,exp:"Fed-batch fermentation feeds substrate in without simultaneous broth removal. This avoids substrate inhibition, maintains optimal conditions, and increases cell density and product yield."},
    {topic:"Biotechnology",q:"2D-PAGE separates proteins by:",opts:["Size only","Isoelectric point in the first dimension and molecular weight in the second","Charge only","Hydrophobicity then size"],ans:1,exp:"2D-PAGE combines isoelectric focusing (IEF) in the first dimension and SDS-PAGE in the second, separating proteins by pI and molecular weight to yield a characteristic 2D protein map."},
    {topic:"Biotechnology",q:"Hybridoma technology produces:",opts:["Recombinant proteins in E. coli","Monoclonal antibodies from B-cell/myeloma fusions","Polyclonal antisera from immunised animals","Recombinant viral antigens"],ans:1,exp:"Hybridoma technology fuses an antigen-specific B lymphocyte with an immortal myeloma cell, creating a hybridoma that proliferates indefinitely and secretes a single defined monoclonal antibody."},
    {topic:"Biotechnology",q:"Agrobacterium tumefaciens Ti plasmid transfers which DNA into plants?",opts:["The entire Ti plasmid","T-DNA containing genes of interest into the plant nucleus","Only the vir genes","Chloroplast targeting sequences"],ans:1,exp:"The Ti plasmid transfers its T-DNA region into plant cells where it integrates into the nuclear genome. Disarmed Ti plasmid-based binary vectors are standard tools for stable plant transformation."},
    {topic:"Biotechnology",q:"A polyhistidine (His) tag enables protein purification by:",opts:["Increasing protein solubility","Coordinating Ni2+ ions on IMAC resin for selective binding","Acting as a secretion signal","Protecting from proteases"],ans:1,exp:"IMAC uses Ni2+ or Co2+ charged resin that binds the imidazole side chains of consecutive histidines. His-tagged proteins are selectively bound and eluted with imidazole or low pH."},
    {topic:"Biotechnology",q:"In RT-PCR, reverse transcriptase:",opts:["Amplifies DNA in the thermocycler","Converts RNA into complementary DNA (cDNA)","Degrades RNA after transcription","Proofreads the final PCR product"],ans:1,exp:"Reverse transcriptase is an RNA-dependent DNA polymerase that synthesises cDNA from an RNA template using an oligo-dT or random primer. This cDNA then serves as the PCR template."},
    {topic:"Biotechnology",q:"Saccharomyces cerevisiae is preferred over E. coli for some recombinant proteins because:",opts:["It grows faster","It performs eukaryotic post-translational modifications such as glycosylation","It has simpler genetics","It has higher plasmid copy number"],ans:1,exp:"S. cerevisiae performs N- and O-linked glycosylation, disulfide bond formation, and proper eukaryotic protein folding via chaperones — modifications often absent or incorrect in E. coli."},
    {topic:"Biotechnology",q:"Smaller DNA fragments migrate faster in agarose gel electrophoresis because:",opts:["They carry more charge","They experience less friction in the gel matrix","They are denser","They travel to the negative electrode"],ans:1,exp:"The agarose matrix creates a sieve effect. Smaller DNA fragments experience less frictional resistance and migrate faster toward the positive electrode; size is determined relative to a DNA ladder."},
    {topic:"Biotechnology",q:"Classical mouse gene knockouts use:",opts:["Antisense RNA into oocytes","Homologous recombination in embryonic stem (ES) cells","TALENs in somatic cells","Retroviral insertional mutagenesis"],ans:1,exp:"Classical knockouts use homologous recombination to replace the endogenous gene in ES cells. Selected ES cells are injected into blastocysts; chimeric mice are bred to obtain germline transmission of the knockout allele."},
    {topic:"Biotechnology",q:"Bioreactor dissolved oxygen is primarily controlled by:",opts:["pH adjustment","Varying agitation speed and/or aeration rate","Temperature change","Carbon source feed rate"],ans:1,exp:"Dissolved oxygen is maintained by adjusting agitation (impeller speed increases oxygen mass transfer) and/or sparging rate (airflow). Advanced strategies cascade these with back-pressure and oxygen enrichment."},
    {topic:"Biotechnology",q:"Northern blotting is used to detect:",opts:["Specific DNA sequences","Specific RNA species in a total RNA sample","Proteins recognised by an antibody","Protein-DNA interactions"],ans:1,exp:"Northern blotting separates RNA by size on a denaturing agarose gel, transfers it to a membrane, and hybridises with a labelled probe to detect and quantify specific RNA molecules such as mRNA."},
    {topic:"Biotechnology",q:"The Cre-lox system achieves:",opts:["Genomic DNA amplification","Site-specific recombination enabling conditional gene deletion","Plasmid integration into the chromosome","Base editing without double-strand breaks"],ans:1,exp:"Cre recombinase catalyses recombination between two 34-bp loxP sites. When loxP sites flank a gene segment, Cre expression excises it — used for conditional and tissue-specific knockouts."},
    {topic:"Biotechnology",q:"Flow cytometry measures:",opts:["Protein size on a gel","Multiple physical and chemical properties of individual cells in suspension","Real-time nucleic acid sequencing","Intracellular protein localisation in fixed tissue"],ans:1,exp:"Flow cytometry measures properties such as size, granularity, and fluorescence of individual cells passing laser beams, enabling high-throughput cell counting, sorting, and phenotyping."},
    {topic:"Biotechnology",q:"AAV vectors are preferred for gene therapy because:",opts:["They efficiently integrate into the host genome","They have cargo capacity exceeding 20 kb","They have low immunogenicity and transduce non-dividing cells","They replicate autonomously"],ans:2,exp:"AAV vectors are preferred due to low immunogenicity, ability to transduce both dividing and non-dividing cells, and primarily episomal persistence in post-mitotic tissues. Their main limit is a ~4.7 kb packaging capacity."},
    {topic:"Biotechnology",q:"RNA interference (RNAi) silences genes via:",opts:["dsRNA processed by Dicer into siRNAs that guide RISC to cleave complementary mRNA","Insertion of foreign DNA using RNA intermediates","Ribosomal translation of mRNA","Repair of double-strand DNA breaks"],ans:0,exp:"RNAi: dsRNA is processed by Dicer into ~21-nt siRNAs that are loaded into RISC. The antisense strand guides RISC to complementary mRNA, which is then cleaved and degraded."},
    {topic:"Biotechnology",q:"Recombinant chymosin in cheese making is an example of:",opts:["Traditional fermentation","Lactic acid bacteria metabolic engineering","A food enzyme produced by recombinant microorganisms","Somatic cell nuclear transfer"],ans:2,exp:"Recombinant chymosin (bovine prochymosin expressed in Aspergillus or Kluyveromyces) was the first approved recombinant food enzyme, replacing calf rennet for milk coagulation in cheese manufacture."},
    {topic:"Biochemistry",q:"Which amino acid forms disulfide bonds via its thiol (-SH) group?",opts:["Serine","Threonine","Cysteine","Methionine"],ans:2,exp:"Cysteine contains a thiol (-SH) side chain. Oxidation of two cysteine residues forms a covalent disulfide bond (-S-S-), stabilising extracellular protein structures such as insulin and immunoglobulins."},
    {topic:"Biochemistry",q:"The Michaelis constant (Km) equals:",opts:["Maximum reaction velocity","Substrate concentration giving half-maximal velocity","Enzyme-product dissociation constant","IC50 of an inhibitor"],ans:1,exp:"Km is the substrate concentration at which reaction velocity equals Vmax/2. A low Km indicates high substrate affinity; a high Km indicates low affinity."},
    {topic:"Biochemistry",q:"During oxidative phosphorylation, the proton gradient drives:",opts:["Direct phosphorylation of ADP in the matrix","ATP synthase (Complex V) via the chemiosmotic mechanism","Reduction of NAD+","Activation of Complex I"],ans:1,exp:"Mitchell's chemiosmotic theory: Complexes I, III, and IV pump H+ from matrix to intermembrane space creating a proton-motive force. H+ re-entry through ATP synthase drives ATP synthesis."},
    {topic:"Biochemistry",q:"Pyruvate kinase catalyses which step of glycolysis?",opts:["Fructose-6-phosphate to fructose-1,6-bisphosphate","2-phosphoglycerate to PEP","PEP to pyruvate with ATP generation","Pyruvate to acetyl-CoA"],ans:2,exp:"Pyruvate kinase transfers the phosphate group from PEP to ADP, generating pyruvate and ATP. This irreversible, regulated substrate-level phosphorylation is the final step of glycolysis."},
    {topic:"Biochemistry",q:"Allosteric enzyme regulation involves:",opts:["Covalent modification of the active site","Regulatory molecule binding at a site distinct from the active site, altering activity","Competitive inhibition at the substrate-binding site","Irreversible suicide inhibition"],ans:1,exp:"Allosteric regulation occurs when a ligand binds an allosteric site, inducing conformational changes that alter catalytic activity — exemplified by ATCase regulation by CTP and ATP."},
    {topic:"Biochemistry",q:"Protein primary structure is:",opts:["Alpha-helices and beta-sheets formed by hydrogen bonds","Overall 3D fold of the polypeptide","The linear sequence of amino acids linked by peptide bonds","Quaternary arrangement of subunits"],ans:2,exp:"Primary structure is the linear sequence of amino acids covalently linked by peptide bonds, encoded by the gene. This sequence determines all higher-order structures."},
    {topic:"Biochemistry",q:"NAD+ is synthesised from which vitamin precursor?",opts:["Riboflavin (B2)","Niacin (B3)","Pyridoxal phosphate (B6)","Thiamine (B1)"],ans:1,exp:"Niacin (vitamin B3, nicotinamide/nicotinic acid) is the precursor of NAD+ and NADP+, essential hydride carriers in oxidative metabolism."},
    {topic:"Biochemistry",q:"Adjacent nucleotides in DNA are linked by:",opts:["Hydrogen bonds","N-glycosidic bonds","3 to 5 prime phosphodiester bonds","Ester bonds between deoxyribose sugars"],ans:2,exp:"The sugar-phosphate backbone of DNA is formed by phosphodiester bonds between the 3 prime OH of one deoxyribose and the 5 prime phosphate of the next nucleotide."},
    {topic:"Biochemistry",q:"Beta-oxidation of fatty acids occurs in:",opts:["Cytoplasm","Smooth ER","Mitochondrial matrix","Peroxisomes exclusively"],ans:2,exp:"Beta-oxidation of most fatty acids occurs in the mitochondrial matrix. Long-chain fatty acids enter via the carnitine shuttle. Very long-chain fatty acids are first shortened in peroxisomes."},
    {topic:"Biochemistry",q:"The rate-limiting enzyme of the urea cycle is:",opts:["Arginase","Argininosuccinate synthetase","Carbamoyl phosphate synthetase I (CPS I)","Ornithine transcarbamoylase"],ans:2,exp:"CPS I catalyses the first committed step: NH3 + CO2 + 2 ATP to carbamoyl phosphate in the mitochondrial matrix. It is activated by N-acetylglutamate and is rate-limiting for the cycle."},
    {topic:"Biochemistry",q:"Receptor tyrosine kinase (RTK) signalling involves:",opts:["Adenylyl cyclase activation and cAMP production","Ligand-induced dimerisation, tyrosine autophosphorylation, and downstream kinase cascades","Ligand entry into the nucleus as transcription factor","Ion channel opening"],ans:1,exp:"RTK activation: ligand binding induces receptor dimerisation, trans-autophosphorylation of intracellular tyrosines, docking of SH2-domain proteins, and activation of RAS/MAPK and PI3K/Akt pathways."},
    {topic:"Biochemistry",q:"HMG-CoA reductase is significant because it:",opts:["Is rate-limiting for fatty acid synthesis","Is the committed rate-limiting step of cholesterol biosynthesis","Catalyses mevalonate to squalene","Is inhibited by bile acids directly"],ans:1,exp:"HMG-CoA reductase catalyses HMG-CoA to mevalonate — the committed, rate-limiting step of cholesterol synthesis. Statins competitively inhibit this enzyme to lower blood cholesterol."},
    {topic:"Biochemistry",q:"Hsp70 chaperones function by:",opts:["Supplying the amino acid sequence","Binding exposed hydrophobic regions of unfolded proteins to prevent aggregation","Cleaving misfolded proteins","Forming disulfide bonds"],ans:1,exp:"Hsp70 and Hsp40 co-chaperones bind hydrophobic regions of unfolded polypeptides, preventing aggregation. ATP-driven cycling releases substrates to fold correctly or to be passed to chaperonins."},
    {topic:"Biochemistry",q:"Insulin stimulates glucose uptake in muscle and fat by:",opts:["Activating glucagon secretion","Translocating GLUT4 to the plasma membrane via PI3K/Akt signalling","Directly activating glycogen phosphorylase","Inhibiting hepatic glucose-6-phosphatase"],ans:1,exp:"Insulin activates PI3K/Akt, phosphorylating AS160, which triggers GLUT4 storage vesicle translocation to the cell surface, dramatically increasing glucose uptake in muscle and adipose tissue."},
    {topic:"Biochemistry",q:"The Bohr effect describes:",opts:["Cooperative O2 binding to haemoglobin","Decreased O2 affinity of haemoglobin at lower pH and higher CO2","Effect of 2,3-BPG on CO2 transport","Sigmoidal kinetics of allosteric enzymes"],ans:1,exp:"The Bohr effect: elevated CO2 and H+ in metabolically active tissues promote protonation of His146 on Hb beta-chains, stabilising the T (deoxy) state, reducing O2 affinity and facilitating O2 release."},
    {topic:"Biochemistry",q:"The main structural lipids of cellular membranes are:",opts:["Triglycerides and cholesterol esters","Glycerophospholipids and sphingolipids","Waxes and steroids","Free fatty acids and diacylglycerols"],ans:1,exp:"Cellular membranes are primarily composed of amphipathic glycerophospholipids (e.g. phosphatidylcholine) and sphingolipids arranged in a bilayer. Cholesterol is abundant in eukaryotic membranes, modulating fluidity."},
    {topic:"Biochemistry",q:"Which enzyme synthesises RNA primers during DNA replication?",opts:["DNA polymerase I","DNA polymerase III","Primase","Helicase"],ans:2,exp:"Primase is a specialised RNA polymerase that synthesises short RNA primers, providing the 3 prime OH required by DNA polymerase to begin chain extension at origins and Okazaki fragment starts."},
    {topic:"Biochemistry",q:"cAMP activates which downstream kinase?",opts:["Protein kinase C","CaM kinase","Protein kinase A (PKA)","MAP kinase"],ans:2,exp:"cAMP produced by adenylyl cyclase binds the regulatory subunits of PKA, releasing the active catalytic subunits that phosphorylate serine/threonine residues on target proteins."}
  ],

  2: [
    {topic:"Microbiology",q:"Gram-negative bacteria differ from Gram-positive bacteria in having:",opts:["A thicker peptidoglycan layer","A thin peptidoglycan layer with an outer lipopolysaccharide membrane","No cell wall at all","Teichoic acids embedded in the cell wall"],ans:1,exp:"Gram-negative bacteria have a thin peptidoglycan layer between the inner and outer membranes. The outer membrane contains lipopolysaccharide (LPS), which is responsible for endotoxin activity."},
    {topic:"Microbiology",q:"The catalytic activity of RNA is demonstrated by:",opts:["tRNA aminoacylation","Ribozymes such as the peptidyl transferase activity of the ribosome","mRNA secondary structure","Sigma factor activity"],ans:1,exp:"Ribozymes are catalytic RNA molecules. The peptidyl transferase centre of the ribosome, which catalyses peptide bond formation, is composed of rRNA — a classic example of RNA catalysis."},
    {topic:"Microbiology",q:"What is the function of topoisomerase II (DNA gyrase) in bacteria?",opts:["Synthesising RNA primers","Removing positive supercoils ahead of the replication fork","Ligating Okazaki fragments","Unwinding RNA secondary structure"],ans:1,exp:"DNA gyrase (type II topoisomerase) relieves positive supercoiling that accumulates ahead of the replication fork by introducing transient double-strand breaks and passing DNA through them. It is the target of fluoroquinolone antibiotics."},
    {topic:"Microbiology",q:"SOS response in bacteria is triggered by:",opts:["Nutrient starvation","Extensive single-stranded DNA from replication fork stalling","Low pH","Antibiotic exposure alone"],ans:1,exp:"The SOS response is triggered by accumulation of single-stranded DNA (due to DNA damage or replication fork stalling), which activates RecA. Activated RecA promotes autocleavage of the LexA repressor, inducing SOS genes."},
    {topic:"Microbiology",q:"Transduction involves gene transfer via:",opts:["Naked DNA uptake","A bacteriophage as a vector","A sex pilus","Transposon jumping"],ans:1,exp:"In transduction, a bacteriophage accidentally packages host DNA and transfers it to a new host upon infection. Generalised transduction uses any DNA; specialised transduction transfers genes adjacent to the phage integration site."},
    {topic:"Microbiology",q:"In the stationary phase of bacterial growth:",opts:["Cell numbers increase exponentially","Cell division rate equals the death rate","All cells are dead","Cells are adapting to new nutrients"],ans:1,exp:"In the stationary phase, nutrient depletion and waste accumulation cause the growth rate to equal the death rate, resulting in no net increase in cell number. Cells often activate stress response genes."},
    {topic:"Microbiology",q:"The obligate intracellular bacterium Chlamydia has two developmental forms:",opts:["Spore and vegetative cell","Elementary body (infectious) and reticulate body (replicating)","Biofilm and planktonic forms","Trophozoite and cyst"],ans:1,exp:"Chlamydia alternates between the infectious, metabolically inactive elementary body (EB) that infects host cells and the metabolically active reticulate body (RB) that replicates intracellularly."},
    {topic:"Microbiology",q:"Which of the following is an example of catabolite repression?",opts:["Induction of the lac operon by allolactose","Inhibition of lac operon transcription when glucose is present (low cAMP-CRP)","Attenuation of the trp operon","Sigma factor competition"],ans:1,exp:"Catabolite repression: when glucose is present, adenylyl cyclase is inhibited, cAMP levels fall, and cAMP-CRP complex does not form. Without CRP binding the lac promoter, full transcription cannot occur even with inducer present."},
    {topic:"Microbiology",q:"Which structure allows bacteria to adhere to surfaces and resist desiccation?",opts:["Flagella","Capsule (glycocalyx)","Pili","Outer membrane vesicles"],ans:1,exp:"The polysaccharide capsule surrounding many bacteria promotes adhesion to surfaces, resistance to phagocytosis, and protection against desiccation and antibiotics. It is a key virulence factor in pathogens."},
    {topic:"Microbiology",q:"Mycoplasmas are unique among bacteria because they:",opts:["Lack DNA","Have no ribosome","Lack a cell wall","Have two plasma membranes"],ans:2,exp:"Mycoplasmas are the smallest self-replicating bacteria and uniquely lack a cell wall. This makes them inherently resistant to beta-lactam and glycopeptide antibiotics and accounts for their pleomorphic shape."},
    {topic:"Microbiology",q:"In the electron transport chain, Complex I (NADH dehydrogenase):",opts:["Reduces oxygen to water","Transfers electrons from NADH to ubiquinone, pumping 4 H+ per pair","Catalyses ATP synthesis","Oxidises succinate to fumarate"],ans:1,exp:"Complex I oxidises NADH and reduces ubiquinone (CoQ), transferring 2 electrons. For each NADH oxidised, 4 H+ are pumped from the mitochondrial matrix to the intermembrane space, contributing to the proton-motive force."},
    {topic:"Microbiology",q:"A temperate phage can be induced to enter the lytic cycle by:",opts:["Adding more host bacteria","DNA-damaging agents that activate the SOS response","Temperature reduction","Nutrient excess"],ans:1,exp:"DNA-damaging agents (UV light, mitomycin C) trigger the SOS response, activating RecA. Activated RecA stimulates autocleavage of the phage CI repressor, derepressing lytic genes and initiating the lytic cycle."},
    {topic:"Microbiology",q:"Microbial mats in hot springs are dominated by:",opts:["Obligate anaerobes","Thermophilic bacteria and archaea","Mesophilic fungi","Psychrophilic eukaryotes"],ans:1,exp:"Hot spring microbial mats are dominated by thermophilic microorganisms, including bacteria such as Thermus aquaticus and hyperthermophilic archaea such as Sulfolobus, adapted to high temperatures (>45 degrees C)."},
    {topic:"Microbiology",q:"The virulence factor that prevents phagolysosome fusion in Mycobacterium tuberculosis is:",opts:["Lipid A","Lipoarabinomannan (LAM)","Protein A","M protein"],ans:1,exp:"Lipoarabinomannan (LAM) and other mycobacterial cell wall components inhibit phagolysosome maturation by blocking PI3P signalling and recruiting tryptophan aspartate-containing coat protein (TACO), allowing survival within macrophages."},
    {topic:"Microbiology",q:"Which experimental technique directly measures bacterial cell viability?",opts:["OD600 spectrophotometry","Flow cytometry with live/dead staining","Total protein assay","Gel electrophoresis of lysates"],ans:1,exp:"Flow cytometry with fluorescent live/dead stains (e.g. SYTO 9 / propidium iodide) distinguishes live cells (intact membranes) from dead cells (compromised membranes), directly measuring viability at the single-cell level."},
    {topic:"Microbiology",q:"Attenuation regulates the trp operon by:",opts:["Repressor binding to the operator","Ribosome stalling at Trp codons coupling transcription and translation to terminate transcription early when Trp is abundant","cAMP-CRP activation","Sigma factor replacement"],ans:1,exp:"When tryptophan is abundant, the ribosome translates the leader peptide (containing Trp codons) rapidly, causing the mRNA to fold into a terminator stem-loop that prematurely terminates transcription before the structural genes."},
    {topic:"Microbiology",q:"Archaea that produce methane from H2 and CO2 are called:",opts:["Halophiles","Thermoacidophiles","Methanogens","Acetogens"],ans:2,exp:"Methanogens are archaea that use H2 and CO2 (or other substrates) to produce methane via methanogenesis. They are strict anaerobes and important in anaerobic digestion and the global carbon cycle."},
    {topic:"Microbiology",q:"The primary receptor for HIV on helper T cells is:",opts:["CD8 and CXCR4","CD4 and CCR5 or CXCR4","MHC class I and CD28","TLR4 and CD14"],ans:1,exp:"HIV gp120 binds CD4 on helper T cells and macrophages. The co-receptor (CCR5 for M-tropic strains; CXCR4 for T-tropic strains) then mediates fusion of the viral and host cell membranes."},
    {topic:"Microbiology",q:"R-plasmids in bacteria confer:",opts:["Virulence genes only","Resistance to multiple antibiotics","Ability to fix nitrogen","Bacteriocin production"],ans:1,exp:"R (resistance) plasmids carry multiple antibiotic resistance genes, often on transposons that can jump between plasmids and chromosomes. They are a major mechanism of multi-drug resistance spread."},
    {topic:"Microbiology",q:"The antimicrobial mechanism of tetracyclines is:",opts:["Cell wall synthesis inhibition","Inhibition of the 30S ribosomal subunit, blocking aminoacyl-tRNA entry","DNA gyrase inhibition","Membrane disruption"],ans:1,exp:"Tetracyclines bind reversibly to the 30S ribosomal subunit, specifically blocking the A-site and preventing aminoacyl-tRNA from entering during translation elongation, thereby halting protein synthesis."},
    {topic:"Biotechnology",q:"The lac Z reporter gene encodes:",opts:["Luciferase","Beta-galactosidase","Green fluorescent protein","Chloramphenicol acetyltransferase"],ans:1,exp:"LacZ encodes beta-galactosidase, which hydrolyses the chromogenic substrate X-gal to produce a blue colour. It is used in blue-white colony selection to identify clones with inserts disrupting the lacZ gene."},
    {topic:"Biotechnology",q:"Site-directed mutagenesis allows researchers to:",opts:["Randomly mutate the entire genome","Introduce specific nucleotide changes at a defined location in a gene","Amplify only mutant alleles","Delete entire chromosomes"],ans:1,exp:"Site-directed mutagenesis uses synthetic oligonucleotide primers containing the desired mutation to introduce specific base changes, insertions, or deletions at a precise location in cloned DNA."},
    {topic:"Biotechnology",q:"The purpose of a His-tag TEV protease cleavage site is to:",opts:["Enhance protein expression","Allow removal of the affinity tag after purification","Prevent protein aggregation","Direct the protein to secretion"],ans:1,exp:"A TEV protease site between the His-tag and the target protein allows clean removal of the tag after IMAC purification, yielding a near-native protein sequence for downstream structural or functional studies."},
    {topic:"Biotechnology",q:"Protein refolding from inclusion bodies in E. coli requires:",opts:["Direct use of the insoluble pellet","Solubilisation in a denaturant (e.g. urea or guanidinium) followed by gradual denaturant removal","Only pH adjustment","High-pressure homogenisation only"],ans:1,exp:"Inclusion bodies are insoluble misfolded protein aggregates. Refolding requires solubilisation in 6-8 M urea or guanidinium chloride, followed by gradual removal of denaturant (dialysis or dilution) and addition of redox buffers for disulfide bond formation."},
    {topic:"Biotechnology",q:"Western blotting detects specific proteins by:",opts:["Hybridisation with a complementary nucleic acid probe","Antibody binding after SDS-PAGE and membrane transfer","Direct mass spectrometry","Fluorescent protein tagging only"],ans:1,exp:"Western blotting separates proteins by SDS-PAGE, transfers them to a membrane, and uses primary and secondary antibody detection (often with HRP/ECL chemiluminescence) to identify and quantify specific proteins."},
    {topic:"Biotechnology",q:"Electroporation introduces DNA into cells by:",opts:["Lipid vesicle fusion","Brief high-voltage electrical pulses that transiently permeabilise the cell membrane","Microinjection with a glass needle","Viral transduction"],ans:1,exp:"Electroporation applies brief high-voltage electrical pulses that create transient pores in cell membranes, through which DNA molecules can enter the cytoplasm. It is applicable to many cell types including bacteria and mammalian cells."},
    {topic:"Biotechnology",q:"The backbone vector in a two-plasmid CRISPR system contains:",opts:["Only the sgRNA expression cassette","Only the Cas9 gene","Both Cas9 and sgRNA in separate cassettes","Only the selection marker"],ans:2,exp:"In many two-plasmid CRISPR systems, one plasmid expresses Cas9 (under a constitutive or inducible promoter with a selection marker) and the other expresses the sgRNA (with a separate marker), allowing independent expression and selection."},
    {topic:"Biotechnology",q:"Surface plasmon resonance (SPR) is used to measure:",opts:["Protein size","Real-time binding kinetics (kon, koff, KD) between molecules","Gene expression levels","Enzymatic reaction rates"],ans:1,exp:"SPR measures changes in refractive index at a sensor surface as molecules bind and dissociate, allowing real-time determination of binding kinetics (on-rate, off-rate) and equilibrium dissociation constants (KD) without labelling."},
    {topic:"Biotechnology",q:"SELEX is a technique for:",opts:["Selecting antibiotic-resistant mutants","Selecting high-affinity nucleic acid aptamers against a target molecule","Sequencing genomes","Silencing genes by siRNA"],ans:1,exp:"SELEX (Systematic Evolution of Ligands by EXponential enrichment) iteratively selects high-affinity RNA or DNA aptamers from large random libraries by binding to a target, partitioning bound sequences, and amplifying them."},
    {topic:"Biotechnology",q:"Next-generation sequencing (NGS) differs from Sanger sequencing in:",opts:["Using dideoxy terminators","Massively parallel sequencing of millions of DNA fragments simultaneously","Reading only one DNA strand","Requiring no PCR amplification"],ans:1,exp:"NGS platforms (Illumina, PacBio, Nanopore) sequence millions of fragments simultaneously, generating vastly higher throughput at much lower cost per base than Sanger sequencing, enabling whole-genome and transcriptome analyses."},
    {topic:"Biotechnology",q:"The purpose of the kanamycin resistance gene in a cloning vector is:",opts:["To kill host bacteria","To serve as a selectable marker to identify transformed bacteria","To regulate gene expression","To assist with homologous recombination"],ans:1,exp:"Antibiotic resistance genes (e.g. kanamycin, ampicillin) on vectors serve as selectable markers — only bacteria that have taken up the vector can grow on antibiotic-containing medium, simplifying identification of transformants."},
    {topic:"Biotechnology",q:"RNAseq is used to:",opts:["Sequence the entire genome","Quantify and characterise all RNA transcripts in a sample (transcriptomics)","Detect protein-DNA interactions","Measure protein translation rates directly"],ans:1,exp:"RNA-seq converts total RNA to cDNA, sequences it by NGS, and maps reads to a reference genome to quantify transcript abundance, identify splice variants, and detect novel transcripts across the transcriptome."},
    {topic:"Biotechnology",q:"Gateway cloning differs from traditional restriction cloning in:",opts:["Using restriction enzymes and ligase","Using site-specific recombination (attB x attP) to transfer inserts between vectors without restriction enzymes","Requiring no vector backbone","Using only blunt-end ligation"],ans:1,exp:"Gateway cloning uses bacteriophage lambda att site recombination (attB x attP to give attL x attR) catalysed by Clonase enzymes, allowing efficient directional transfer of inserts between any compatible vectors without restriction enzymes."},
    {topic:"Biotechnology",q:"ChIP-seq is used to identify:",opts:["Protein-protein interactions","Genomic regions bound by a specific protein (e.g. transcription factor or histone modification) in vivo","Alternatively spliced transcripts","Protein structural motifs"],ans:1,exp:"ChIP-seq (Chromatin ImmunoPrecipitation followed by sequencing) crosslinks proteins to DNA in living cells, immunoprecipitates the protein of interest, and sequences associated DNA fragments to map genome-wide binding sites."},
    {topic:"Biotechnology",q:"Metabolic engineering aims to:",opts:["Randomly mutate metabolic pathways","Redirect or optimise metabolic fluxes in an organism to overproduce a desired compound","Engineer immune responses","Only reduce toxic by-products"],ans:1,exp:"Metabolic engineering rationally modifies metabolic pathways by overexpressing, deleting, or introducing genes to redirect carbon flux toward the production of desired chemicals, fuels, or pharmaceuticals."},
    {topic:"Biotechnology",q:"Directed evolution mimics natural selection in the lab by:",opts:["Introducing a single planned mutation","Iterating random mutagenesis and high-throughput screening/selection to evolve proteins with improved properties","Synthesising proteins from scratch","Predicting mutations computationally only"],ans:1,exp:"Directed evolution creates libraries of randomly mutated gene variants (by error-prone PCR or DNA shuffling), then screens or selects for improved function, iterating the process to accumulate beneficial mutations."},
    {topic:"Biotechnology",q:"The purpose of a T7 promoter in an expression vector is:",opts:["To allow constitutive expression in any organism","To drive high-level transcription specifically by T7 RNA polymerase in hosts expressing T7 RNAP (e.g. BL21(DE3))","To terminate transcription","To encode the T7 tag for detection"],ans:1,exp:"The T7 promoter is recognised exclusively by T7 RNA polymerase, not by E. coli RNAP. In BL21(DE3) strains, IPTG induces the chromosomal T7 RNAP gene, which then drives extremely high-level transcription from the T7 promoter vector."},
    {topic:"Biotechnology",q:"FISH (fluorescence in situ hybridisation) is used to:",opts:["Measure gene expression by qPCR","Visualise specific DNA or RNA sequences in cells or chromosomes using fluorescent probes","Detect protein modifications","Sequence nucleic acids"],ans:1,exp:"FISH uses fluorescently labelled nucleic acid probes that hybridise to complementary sequences in fixed cells or on chromosomes, allowing visualisation of specific genes, chromosomal regions, or RNA species by fluorescence microscopy."},
    {topic:"Biotechnology",q:"An inducible promoter system such as Tet-on allows:",opts:["Constitutive gene expression","Controlled gene expression activated by doxycycline addition","Tissue-specific expression only","Gene deletion"],ans:1,exp:"The Tet-on system uses a reverse tetracycline transactivator (rtTA) that binds the TRE (tetracycline response element) promoter and activates transcription only in the presence of doxycycline, enabling precise temporal control of gene expression."},
    {topic:"Biotechnology",q:"What does ELISA measure?",opts:["Nucleic acid sequence","Concentration of a specific protein or antigen using enzyme-linked antibodies","Cell viability","mRNA splicing patterns"],ans:1,exp:"ELISA (Enzyme-Linked ImmunoSorbent Assay) uses antibodies to capture and detect a specific antigen. An enzyme-linked secondary antibody produces a colorimetric signal proportional to antigen concentration."},
    {topic:"Biotechnology",q:"TALEN (Transcription Activator-Like Effector Nuclease) genome editing uses:",opts:["RNA guides to direct a nuclease","Engineered DNA-binding domains fused to FokI nuclease to create targeted double-strand breaks","Random insertional mutagenesis","RNA interference"],ans:1,exp:"TALENs consist of TALE DNA-binding domains (engineered using a simple code where each repeat recognises one base) fused to the FokI nuclease domain. Dimerisation of two TALENs at adjacent sites creates a targeted DSB."},
    {topic:"Biochemistry",q:"The regulation of phosphofructokinase-1 (PFK-1) in glycolysis:",opts:["Is activated by ATP and inhibited by AMP","Is activated by AMP and fructose-2,6-bisphosphate; inhibited by ATP and citrate","Requires no allosteric regulation","Is solely regulated by glucose-6-phosphate"],ans:1,exp:"PFK-1 is the key regulatory step of glycolysis. AMP and fructose-2,6-bisphosphate (F2,6BP) are potent activators. High ATP and citrate (indicating energy and biosynthetic precursor sufficiency) inhibit PFK-1."},
    {topic:"Biochemistry",q:"What is the role of ubiquinone (CoQ) in the electron transport chain?",opts:["It donates protons to Complex IV","It shuttles electrons from Complexes I and II to Complex III","It directly synthesises ATP","It binds O2 to form water"],ans:1,exp:"Ubiquinone (CoQ) is a lipid-soluble electron carrier in the inner mitochondrial membrane. It accepts electrons from Complexes I (from NADH) and II (from FADH2) and donates them to Complex III (cytochrome bc1)."},
    {topic:"Biochemistry",q:"Gluconeogenesis is activated when:",opts:["Blood glucose is high","Insulin levels are high","Glucagon is elevated and AMP/NAD+ ratios are high","Fructose-2,6-bisphosphate is elevated"],ans:2,exp:"Gluconeogenesis is activated during fasting/hypoglycaemia when glucagon rises, cAMP increases, and the energy charge is low (high AMP/ADP, high NAD+/NADH). Glucagon phosphorylates and inactivates PFK-2, reducing F2,6BP and relieving inhibition of PEPCK and FBPase."},
    {topic:"Biochemistry",q:"What is the Warburg effect?",opts:["Increased oxidative phosphorylation in cancer cells","Preferential use of aerobic glycolysis over oxidative phosphorylation in cancer cells even in the presence of oxygen","Inhibition of the TCA cycle by high ATP","Increased fatty acid oxidation in tumours"],ans:1,exp:"The Warburg effect describes the observation that cancer cells preferentially use aerobic glycolysis (glucose to lactate) even when oxygen is available, producing less ATP per glucose but providing biosynthetic intermediates for rapid proliferation."},
    {topic:"Biochemistry",q:"Protein N-glycosylation in eukaryotes begins in:",opts:["The cytoplasm on free ribosomes","The endoplasmic reticulum (ER) lumen co-translationally","The Golgi apparatus","The nucleus"],ans:1,exp:"N-glycosylation begins co-translationally in the ER lumen, where an oligosaccharyltransferase (OST) transfers a pre-assembled 14-sugar oligosaccharide (Glc3Man9GlcNAc2) en bloc from dolichol-PP to Asn residues in N-X-S/T sequons."},
   { topic:"Electron Transfer",
q:"Oxidation is defined as:",
opts:[
"Gain of electrons",
"Loss of electrons",
"Gain of protons",
"Loss of neutrons"
],
ans:1,
exp:"Oxidation involves the loss of electrons."
},

{ topic:"Electron Transfer",
q:"Reduction is defined as:",
opts:[
"Loss of electrons",
"Gain of electrons",
"Loss of atoms",
"Gain of energy"
],
ans:1,
exp:"Reduction involves gaining electrons."
},

{ topic:"Chemical Bonds",
q:"Which bond involves the sharing of electrons between atoms?",
opts:[
"Ionic bond",
"Covalent bond",
"Hydrogen bond",
"Van der Waals interaction"
],
ans:1,
exp:"Covalent bonds form when atoms share electron pairs."
},

{ topic:"Ionic Interaction",
q:"An ionic bond is formed when:",
opts:[
"Atoms share electrons equally",
"Electrons are transferred from one atom to another",
"Atoms share protons",
"Neutrons move between atoms"
],
ans:1,
exp:"Ionic bonds form through electron transfer creating charged ions."
},

{ topic:"Hydrogen Bonds",
q:"Hydrogen bonds commonly occur between hydrogen and which atom?",
opts:[
"Carbon",
"Oxygen",
"Sodium",
"Iron"
],
ans:1,
exp:"Hydrogen bonds form between hydrogen and electronegative atoms like oxygen or nitrogen."
},

{ topic:"Electronegativity",
q:"Electronegativity refers to:",
opts:[
"An atom's ability to attract electrons",
"An atom's mass",
"The number of protons",
"The number of neutrons"
],
ans:0,
exp:"Electronegativity measures how strongly an atom attracts electrons in a bond."
},

{ topic:"ATP",
q:"ATP stores energy mainly in:",
opts:[
"Ionic bonds",
"Hydrogen bonds",
"Phosphate bonds",
"Peptide bonds"
],
ans:2,
exp:"Energy is stored in the high-energy phosphate bonds of ATP."
},

{ topic:"pH Chemistry",
q:"A solution with pH 3 is considered:",
opts:[
"Neutral",
"Basic",
"Acidic",
"Alkaline buffer"
],
ans:2,
exp:"pH values below 7 indicate acidic solutions."
},

{ topic:"Molecular Interaction",
q:"Van der Waals forces are best described as:",
opts:[
"Strong covalent bonds",
"Weak attractions between molecules",
"Electron transfer reactions",
"Permanent ionic interactions"
],
ans:1,
exp:"Van der Waals forces are weak intermolecular attractions."
},

{ topic:"Redox Reactions",
q:"In a redox reaction, the substance that gains electrons is:",
opts:[
"Oxidized",
"Reduced",
"Neutralized",
"Ionized"
],
ans:1,
exp:"Reduction means gaining electrons."
},
    {topic:"Biochemistry",q:"Type I collagen is stabilised by:",opts:["Disulfide bonds between alpha chains","Covalent lysine/hydroxylysine-derived cross-links and extensive hydrogen bonding in the triple helix","Ionic interactions between Gly residues","Only hydrophobic interactions in the fibril"],ans:1,exp:"Type I collagen triple helix stability comes from the Gly-X-Y repeat (where X is often Pro and Y is often hydroxyPro), extensive inter-chain hydrogen bonds, and covalent cross-links formed by lysyl oxidase-mediated oxidation of Lys/HylLys residues."},
    {topic:"Biochemistry",q:"Protein degradation by the 26S proteasome is triggered by:",opts:["SUMOylation","K48-linked polyubiquitylation","Neddylation","Acetylation"],ans:1,exp:"K48-linked polyubiquitin chains act as a degradation signal recognised by the 26S proteasome. The E1-E2-E3 ubiquitin-ligase cascade covalently attaches ubiquitin to target lysines."},
    {topic:"Biochemistry",q:"The oxidative phase of the pentose phosphate pathway produces:",opts:["ATP, NADH, and lactate","NADPH, CO2, and ribose-5-phosphate","FADH2 and acetyl-CoA","GTP and oxaloacetate"],ans:1,exp:"The oxidative PPP phase converts glucose-6-phosphate to ribulose-5-phosphate, generating 2 NADPH and CO2. Ribose-5-phosphate for nucleotide synthesis is generated in the non-oxidative phase."},
    {topic:"Biochemistry",q:"Glycogen synthase activity is:",opts:["Increased by glucagon-induced phosphorylation","Increased by insulin-induced dephosphorylation","Unaffected by hormonal signals","Activated by AMP"],ans:1,exp:"Insulin activates protein phosphatase 1 (PP1), which dephosphorylates and activates glycogen synthase, promoting glycogen synthesis. Glucagon and epinephrine phosphorylate and inhibit it."}
  ],

  3: [
    {topic:"Microbiology",q:"Which of the following correctly describes a key difference between prokaryotic and eukaryotic ribosomes?",opts:["Prokaryotes have 80S ribosomes; eukaryotes have 70S","Prokaryotes have 70S (50S+30S); eukaryotes have 80S (60S+40S)","Both have identical ribosomal subunits","Eukaryotes lack small ribosomal subunits"],ans:1,exp:"Prokaryotic ribosomes are 70S (50S large + 30S small subunits), while eukaryotic cytoplasmic ribosomes are 80S (60S large + 40S small subunits). This difference underlies the selectivity of many antibiotics targeting prokaryotic ribosomes."},
    {topic:"Microbiology",q:"The two-component signal transduction system in bacteria consists of:",opts:["Two transcription factors","A sensor histidine kinase and a response regulator","Two sigma factors","An operon and its repressor"],ans:1,exp:"Two-component systems consist of a membrane-bound sensor histidine kinase that autophosphorylates in response to a stimulus and transfers the phosphate to a cognate response regulator, which then modulates gene expression."},
    {topic:"Microbiology",q:"During sporulation in Bacillus, the forespore sigma factor sigma F is activated by:",opts:["Nutrient abundance","Release from inhibition by SpoIIAB after SpoIIE dephosphorylates SpoIIAA","Temperature increase","Direct proteolysis by SpoIVFB"],ans:1,exp:"Sigma F activation in the forespore occurs after SpoIIE phosphatase dephosphorylates anti-anti-sigma SpoIIAA, which then sequesters the anti-sigma SpoIIAB, freeing sigma F to direct forespore-specific transcription."},
    {topic:"Microbiology",q:"The CRISPR spacer acquisition step (adaptation) requires:",opts:["Cas9 only","Cas1 and Cas2 proteins that integrate new protospacer DNA into the CRISPR array","The entire Cas effector complex","Only the tracrRNA"],ans:1,exp:"CRISPR adaptation requires Cas1 and Cas2, which form a complex that integrates new 20-30 nt spacer sequences (from foreign DNA) into the CRISPR array at the leader-proximal end, providing immunological memory."},
    {topic:"Microbiology",q:"Lipid A is the bioactive component of LPS responsible for:",opts:["Adhesion to host cells","Endotoxin (septic shock) activity via TLR4 activation","Capsule formation","Peptidoglycan cross-linking"],ans:1,exp:"Lipid A is the hydrophobic anchor of LPS and is recognised by TLR4/MD-2 on innate immune cells, triggering NF-kB signalling and release of pro-inflammatory cytokines, which can lead to septic shock in gram-negative infections."},
    {topic:"Microbiology",q:"In the Baltimore classification, retroviruses are Group:",opts:["I (dsDNA)","II (ssDNA)","VI (ssRNA-RT)","IV (positive ssRNA)"],ans:2,exp:"Retroviruses (Group VI) have a positive-sense ssRNA genome that is reverse transcribed into dsDNA by reverse transcriptase, which then integrates into the host genome as a provirus. HIV is the most clinically important retrovirus."},
    {topic:"Microbiology",q:"The mechanism by which aminoglycoside antibiotics kill bacteria is:",opts:["Cell wall inhibition","Binding to the 30S subunit and causing misreading of mRNA leading to mistranslation and membrane disruption","Inhibition of RNA polymerase","Inhibition of DNA gyrase"],ans:1,exp:"Aminoglycosides (e.g. gentamicin, streptomycin) bind the 16S rRNA of the 30S subunit, causing misreading of the genetic code. Mistranslated proteins insert into the membrane, increasing permeability and allowing more drug entry in a bactericidal cycle."},
    {topic:"Microbiology",q:"The RecA protein is essential for:",opts:["RNA polymerase sigma factor function","Homologous recombination and SOS response induction","Replication fork unwinding","tRNA aminoacylation"],ans:1,exp:"RecA coats ssDNA and catalyses strand invasion and exchange during homologous recombination. Activated RecA also stimulates autocleavage of LexA repressor (inducing SOS) and phage CI repressors."},
    {topic:"Microbiology",q:"Horizontal gene transfer in bacteria occurs via three main mechanisms. The acquisition of antibiotic resistance from free environmental DNA would be classified as:",opts:["Transduction","Conjugation","Transformation","Transposition"],ans:2,exp:"Transformation is the uptake and integration of naked DNA from the environment. Naturally competent bacteria (Bacillus, Streptococcus, Haemophilus) can take up free DNA including resistance genes from lysed bacteria in their environment."},
    {topic:"Microbiology",q:"Viable but non-culturable (VBNC) bacteria are significant because:",opts:["They are all dead","They can persist in the environment and regain virulence upon resuscitation","They never cause infection","They are easily detected by standard culture methods"],ans:1,exp:"VBNC bacteria are metabolically active but unable to grow on standard culture media. They can persist in adverse conditions (e.g. disinfectant exposure) and resuscitate when conditions improve, resuming virulence and infectivity."},
    {topic:"Microbiology",q:"The T3SS (type III secretion system) in Gram-negative pathogens:",opts:["Secretes proteins into the periplasm only","Acts as a molecular syringe injecting virulence effector proteins directly into host cells","Transports lipopolysaccharide to the outer membrane","Mediates conjugation"],ans:1,exp:"The T3SS is a needle-like apparatus spanning both bacterial membranes that directly injects bacterial effector proteins (virulence factors) into the cytoplasm of eukaryotic host cells, hijacking host cell signalling."},
    {topic:"Microbiology",q:"Restriction-modification (R-M) systems protect bacteria from foreign DNA by:",opts:["Using CRISPR arrays","Methylating host DNA (protection) and cleaving unmethylated foreign DNA (restriction)","Producing bacteriocins","Encoding type IV secretion systems"],ans:1,exp:"R-M systems consist of a methyltransferase that methylates specific sequences in the host's own DNA, and a restriction endonuclease that cuts unmethylated (foreign) DNA at those same sequences, providing innate defence against phage infection."},
    {topic:"Microbiology",q:"Prions cause disease by:",opts:["Encoding novel viral proteins","Inducing normal PrPC protein to misfold into the pathological PrPSc conformation, which aggregates and is protease-resistant","Integrating into the host genome","Producing toxins that lyse neurons"],ans:1,exp:"Prions are infectious misfolded proteins (PrPSc) that act as templates, inducing normal cellular PrPC to adopt the beta-sheet-rich PrPSc conformation. PrPSc aggregates into amyloid fibrils resistant to proteases, causing progressive neurodegeneration."},
    {topic:"Microbiology",q:"Which statement about bacteriocins is correct?",opts:["They are produced by viruses to kill bacteria","They are antimicrobial peptides produced by bacteria to kill related strains","They are host immune proteins","They are the same as endotoxins"],ans:1,exp:"Bacteriocins are proteinaceous toxins produced by bacteria to inhibit or kill closely related bacterial strains in competition. Nisin (produced by Lactococcus lactis) is the most widely studied bacteriocin, used as a food preservative."},
    {topic:"Microbiology",q:"The primary target of chloramphenicol is:",opts:["DNA gyrase","The 50S ribosomal subunit peptidyl transferase centre","Cell wall transpeptidases","The 30S ribosomal subunit A-site"],ans:1,exp:"Chloramphenicol binds the 23S rRNA of the 50S subunit at the peptidyl transferase centre, blocking the entry of the aminoacyl-tRNA CCA end and preventing peptide bond formation."},
    {topic:"Microbiology",q:"The mechanism of fluoroquinolone resistance most commonly involves:",opts:["Beta-lactamase production","Mutations in gyrA or parC genes altering the quinolone binding site, or efflux pump upregulation","Modification of 30S ribosomal proteins","Plasmid-encoded methyltransferases"],ans:1,exp:"Fluoroquinolone resistance most commonly arises from mutations in gyrA (DNA gyrase) and parC (topoisomerase IV) that reduce drug binding. Efflux pump upregulation (e.g. AcrAB-TolC) and plasmid-mediated resistance (PMQR genes) also contribute."},
    {topic:"Microbiology",q:"The complement system's membrane attack complex (MAC) kills bacteria by:",opts:["Opsonising them for phagocytosis","Inserting a pore (C5b-9) into the bacterial outer membrane, causing lysis","Activating T cells directly","Blocking bacterial adhesion"],ans:1,exp:"The MAC is assembled from C5b, C6, C7, C8, and multiple C9 molecules. It inserts into the outer membrane of Gram-negative bacteria and forms a transmembrane pore that disrupts membrane integrity, causing osmotic lysis."},
    {topic:"Microbiology",q:"Magnetotactic bacteria synthesise magnetosomes for:",opts:["Energy production","Navigating along geomagnetic field lines (magnetotaxis) toward micro-oxic zones","Storing iron for metabolic use only","Secreting iron as a siderophore"],ans:1,exp:"Magnetosomes are membrane-enclosed magnetic iron mineral particles (magnetite Fe3O4 or greigite Fe3S4) arranged in a chain. They function as a compass needle, enabling magnetotactic bacteria to swim along geomagnetic field lines toward preferred low-oxygen zones."},
    {topic:"Microbiology",q:"The function of siderophores in bacteria is to:",opts:["Secrete toxins","Scavenge iron from the environment by high-affinity chelation","Form the flagellar filament","Cross-link peptidoglycan"],ans:1,exp:"Siderophores are small, high-affinity iron chelators secreted by bacteria (and fungi) to solubilise and scavenge iron from the environment. The iron-siderophore complex is then recognised by specific outer membrane receptors and transported into the cell."},
    {topic:"Microbiology",q:"Which property distinguishes obligate anaerobes from aerotolerant anaerobes?",opts:["Obligate anaerobes grow better with oxygen","Obligate anaerobes are killed by oxygen; aerotolerant anaerobes survive but do not use it","Both are equally sensitive to oxygen","Aerotolerant anaerobes require catalase; obligate anaerobes do not"],ans:1,exp:"Obligate anaerobes (e.g. Clostridium) lack superoxide dismutase and catalase, so reactive oxygen species generated in the presence of O2 are lethal. Aerotolerant anaerobes (e.g. Lactobacillus) possess these enzymes and tolerate O2 without using it for respiration."},
    {topic:"Microbiology",q:"Bacterial type IV secretion systems (T4SS) are involved in:",opts:["Flagellar biosynthesis only","DNA conjugation and effector protein translocation into host cells","Protein secretion into the periplasm","Outer membrane vesicle formation"],ans:1,exp:"T4SS are ancestrally related to the conjugation machinery and can translocate both DNA (conjugative plasmids) and protein effectors across multiple membranes into recipient bacteria or into eukaryotic host cells (e.g. Agrobacterium, Helicobacter pylori CagA)."},
    {topic:"Biotechnology",q:"The principle behind isothermal amplification methods such as LAMP is:",opts:["They require a thermocycler like PCR","They amplify DNA at constant temperature using strand-displacing polymerase and multiple primers forming a loop structure","They use RNA polymerase exclusively","They only amplify RNA templates"],ans:1,exp:"LAMP (Loop-Mediated Isothermal Amplification) uses Bst polymerase (strand-displacing) and 4-6 primers (including loop primers) that create self-looping structures. Amplification occurs at constant ~65 degrees C, making it suitable for field diagnostics without a thermocycler."},
    {topic:"Biotechnology",q:"Prime editing (PE) differs from base editing in that it:",opts:["Requires donor DNA template","Uses a pegRNA and reverse transcriptase domain to write new sequences directly, enabling all 12 base-to-base conversions and small indels","Only corrects C to T mutations","Creates only double-strand breaks"],ans:1,exp:"Prime editing uses a prime editing guide RNA (pegRNA) that both directs Cas9 nickase to the target and contains the desired edit as a template. A reverse transcriptase domain copies the new sequence from the pegRNA into the nicked site, enabling precise edits without DSBs or donor templates."},
    {topic:"Biotechnology",q:"In cell-free protein synthesis (CFPS), gene expression occurs:",opts:["Inside living cells","In a cell-free extract containing transcription and translation machinery, outside a living cell","Only in prokaryotic in vitro systems","After mRNA is purified from cells"],ans:1,exp:"CFPS (cell-free protein synthesis) uses cell lysates containing ribosomes, polymerases, tRNAs, aminoacyl-tRNA synthetases, and energy sources to transcribe and translate a DNA or mRNA template outside living cells, enabling rapid protein production and incorporation of non-natural amino acids."},
    {topic:"Biotechnology",q:"The FRET (Forster Resonance Energy Transfer) technique is used to:",opts:["Amplify DNA sequences","Measure distances between fluorescent labels in real-time, reporting on molecular interactions and conformational changes","Sequence proteins","Separate nucleic acids"],ans:1,exp:"FRET occurs when a donor fluorophore and acceptor fluorophore are within ~1-10 nm. Energy is non-radiatively transferred from donor to acceptor, producing a measurable signal change that reports on molecular proximity, interactions, and conformational dynamics."},
    {topic:"Biotechnology",q:"Synthetic biology uses standardised genetic 'parts' called BioBricks, which are characterised by:",opts:["Random sequences cloned into any vector","Standardised flanking restriction sites (EcoRI, XbaI, SpeI, PstI) enabling modular assembly of genetic devices","CRISPR-based editing only","Direct DNA synthesis without assembly"],ans:1,exp:"BioBricks are standardised biological parts with defined flanking restriction sites (EcoRI/XbaI at one end; SpeI/PstI at the other) that allow modular, hierarchical assembly of promoters, coding sequences, and terminators into genetic circuits via a standard assembly method."},
    {topic:"Biotechnology",q:"What is the purpose of a Kozak sequence in eukaryotic expression vectors?",opts:["To act as a transcription terminator","To optimise ribosome recognition and initiation at the AUG start codon in eukaryotes","To encode a signal peptide","To serve as an IRES element"],ans:1,exp:"The Kozak sequence (consensus: GCCACC/GCCRCCAUGG) flanks the AUG start codon in eukaryotic mRNAs. An optimal Kozak context strongly promotes ribosomal recognition of the start codon, maximising translation initiation efficiency."},
    {topic:"Biotechnology",q:"Nanobodies differ from conventional antibodies in being:",opts:["Larger with four chains","Single-domain antibodies (VHH) derived from camelid heavy-chain-only antibodies, providing small size and high stability","Made of RNA","Only applicable as therapeutics"],ans:1,exp:"Nanobodies are ~12-15 kDa single variable domains (VHH) from camelid heavy-chain-only antibodies. Their small size allows access to cryptic epitopes, they are highly stable, easily produced in bacteria, and are valuable research tools and therapeutic scaffolds."},
    {topic:"Biotechnology",q:"Organoid technology involves:",opts:["Growing bacteria in 3D culture","Self-organising 3D miniature organ-like structures grown from stem cells in vitro that recapitulate organ architecture and function","Organ transplantation from model organisms","2D cell culture with organ-specific media"],ans:1,exp:"Organoids are 3D self-organising structures derived from pluripotent or adult stem cells that recapitulate tissue architecture and function. They are grown in extracellular matrix scaffolds with appropriate growth factors and are used for disease modelling and drug screening."},
    {topic:"Biotechnology",q:"ATAC-seq is used to map:",opts:["mRNA expression levels","Open chromatin regions (nucleosome-depleted accessible regions) across the genome","Protein-DNA binding","DNA methylation patterns"],ans:1,exp:"ATAC-seq (Assay for Transposase-Accessible Chromatin by sequencing) uses a hyperactive Tn5 transposase to insert sequencing adapters preferentially into nucleosome-depleted, open chromatin regions, mapping accessible regulatory elements genome-wide."},
    {topic:"Biotechnology",q:"The purpose of codon optimisation in heterologous protein expression is:",opts:["To change the protein sequence","To adapt the codon usage of a foreign gene to match the preferred codons of the expression host, improving translation efficiency","To add a signal peptide","To remove introns"],ans:1,exp:"Codon optimisation replaces rare codons (which are translated slowly due to limiting cognate tRNAs) with synonymous preferred codons of the host organism. This improves ribosome speed and processivity, increasing protein yield without altering the amino acid sequence."},
    {topic:"Biotechnology",q:"In protein X-ray crystallography, the phase problem refers to:",opts:["The inability to crystallise proteins","The loss of phase information when recording diffraction intensities, which must be recovered to calculate the electron density map","Radiation damage to crystals","Difficulties in data collection"],ans:1,exp:"X-ray diffraction records the amplitude (intensity) of diffracted waves but loses phase information. Phases are essential for Fourier transformation to yield an electron density map. Phases are recovered by methods such as molecular replacement, MAD/SAD (anomalous dispersion), or isomorphous replacement."},
    {topic:"Biotechnology",q:"The key innovation of single-molecule real-time (SMRT) sequencing (PacBio) is:",opts:["High-throughput short-read sequencing","Direct observation of DNA synthesis by a single DNA polymerase in a zero-mode waveguide, enabling long reads","RNA sequencing without reverse transcription","Sequencing by hybridisation"],ans:1,exp:"PacBio SMRT sequencing immobilises a single DNA polymerase at the bottom of a zero-mode waveguide (ZMW). Fluorescently labelled nucleotides are detected as they are incorporated, providing real-time sequence information with very long reads (>10 kb average)."},
    {topic:"Biotechnology",q:"An internal ribosome entry site (IRES) allows:",opts:["Cap-dependent translation only","Cap-independent translation initiation by directly recruiting ribosomes to an internal mRNA sequence","Transcription termination","Post-translational modification"],ans:1,exp:"IRES elements are RNA structures in the 5'UTR or coding sequence of certain viral and cellular mRNAs that directly recruit the 40S ribosomal subunit in a cap-independent manner. They are used in bicistronic expression vectors to drive translation of a second ORF."},
    {topic:"Biotechnology",q:"The purpose of bridge amplification in Illumina sequencing is:",opts:["To amplify the target gene before sequencing","To generate clonal clusters of identical DNA fragments on the flow cell surface for signal amplification","To repair damaged DNA","To remove adapters"],ans:1,exp:"In Illumina library preparation, bridge amplification generates clonal clusters: adapter-ligated fragments bind to the flow cell surface, are amplified by bending over to form bridges that prime off immobilised oligos, creating ~1000 identical copies per cluster for sequencing-by-synthesis."},
    {topic:"Biotechnology",q:"GFP (green fluorescent protein) is used as a reporter because:",opts:["It enhances protein stability","It emits green fluorescence upon excitation without requiring exogenous substrates or cofactors in most organisms","It promotes protein secretion","It binds DNA specifically"],ans:1,exp:"GFP (from Aequorea victoria) forms a chromophore autocatalytically from its own amino acids (Ser65-Tyr66-Gly67), requiring no cofactors or substrates. When excited at ~488 nm, it emits green light (~507 nm), making it a versatile, genetically encodable fluorescent marker."},
    {topic:"Biotechnology",q:"Mass spectrometry in proteomics identifies proteins by:",opts:["Size on SDS-PAGE","Measuring the mass-to-charge (m/z) ratio of peptide fragments after protease digestion, matched against protein databases","Antibody recognition","RNA sequencing"],ans:1,exp:"In shotgun proteomics, proteins are digested (typically by trypsin), and resulting peptides are separated by LC and analysed by MS/MS. Fragment ion masses (m/z) are compared to in silico peptide databases to identify proteins and quantify their abundance."},
    {topic:"Biotechnology",q:"Alphafold2 revolutionised structural biology by:",opts:["Solving protein structures by X-ray crystallography more quickly","Accurately predicting 3D protein structures from amino acid sequence alone using deep learning","Developing new crystallisation methods","Improving NMR spectroscopy resolution"],ans:1,exp:"AlphaFold2 (DeepMind, 2020) uses deep learning on evolutionary and structural databases to predict protein 3D structures from sequence alone with accuracy rivalling experimental methods, enabling structural prediction for virtually all known proteins."},
    {topic:"Biotechnology",q:"The role of a scaffold protein in a metabolic engineering context is:",opts:["To provide structural support to the cell","To co-localise multiple enzymes of a pathway by binding them to a common scaffold, increasing local substrate concentration and pathway efficiency","To degrade misfolded enzymes","To provide a cloning backbone"],ans:1,exp:"Scaffold proteins (natural or synthetic) co-recruit multiple pathway enzymes via protein-protein interaction domains. This co-localisation increases effective local substrate concentrations, reduces diffusion distances, and minimises loss of intermediates to competing pathways."},
    {topic:"Biochemistry",q:"The mechanism of action of metformin in type 2 diabetes primarily involves:",opts:["Stimulating insulin secretion from beta cells","Activating AMPK (indirectly via Complex I inhibition), leading to reduced hepatic gluconeogenesis","Blocking glucagon receptors","Increasing insulin receptor expression"],ans:1,exp:"Metformin inhibits mitochondrial Complex I, mildly reducing ATP production and raising AMP/ATP ratio, which activates AMPK. AMPK phosphorylates and inhibits TORC2, reducing CREB-driven transcription of gluconeogenic genes (PEPCK, G6Pase) in the liver."},
    {topic:"Biochemistry",q:"Ceramide is synthesised by:",opts:["Addition of phosphocholine to sphingosine","Condensation of palmitoyl-CoA and serine to form sphinganine, followed by ceramide synthase addition of a fatty acyl chain and desaturation","Hydrolysis of sphingomyelin only","Direct conversion of cholesterol"],ans:1,exp:"De novo ceramide synthesis begins with condensation of palmitoyl-CoA and serine by serine palmitoyl transferase, forming sphinganine. Ceramide synthase adds a N-acyl chain; dihydroceramide desaturase introduces the 4,5-trans double bond to form ceramide."},
    {topic:"Biochemistry",q:"The catecholamine biosynthesis pathway from tyrosine proceeds via:",opts:["Tyrosine to dopamine to L-DOPA to noradrenaline to adrenaline","Tyrosine to L-DOPA to dopamine to noradrenaline to adrenaline","Tyrosine to adrenaline directly","Tyrosine to serotonin to melatonin"],ans:1,exp:"Catecholamine synthesis: Tyrosine is hydroxylated to L-DOPA by tyrosine hydroxylase (rate-limiting), decarboxylated to dopamine by DOPA decarboxylase, beta-hydroxylated to noradrenaline by dopamine beta-hydroxylase, and N-methylated to adrenaline by PNMT."},
    {topic:"Biochemistry",q:"The principle of enzyme-linked immunosorbent assay (ELISA) relies on:",opts:["Direct nucleic acid hybridisation","Specific antibody-antigen binding coupled to an enzymatic reporter that generates a measurable colorimetric or fluorescent signal","SDS-PAGE separation","Mass spectrometry identification"],ans:1,exp:"ELISA uses antibodies that capture a specific antigen, followed by a secondary antibody conjugated to an enzyme (e.g. HRP). Addition of a substrate produces a colour change proportional to antigen concentration, enabling quantification."},
    {topic:"Biochemistry",q:"Acetyl-CoA carboxylase (ACC) is regulated by:",opts:["Phosphorylation by AMPK (inhibiting) and dephosphorylation by insulin signalling (activating); also allosteric activation by citrate","Phosphorylation by PKA only","Allosteric inhibition by malonyl-CoA only","Proteolytic cleavage"],ans:0,exp:"ACC is the rate-limiting enzyme of fatty acid synthesis. It is activated allosterically by citrate (indicating energy surplus) and by insulin-driven dephosphorylation. AMPK phosphorylation inhibits ACC under low-energy conditions, preventing futile cycles when fatty acid oxidation is needed."},
    {topic:"Biochemistry",q:"The Fenton reaction is significant in cell biology because:",opts:["It generates NADPH for biosynthesis","It produces highly reactive hydroxyl radicals (OH.) from H2O2 and Fe2+, causing oxidative damage to DNA, proteins, and lipids","It detoxifies hydrogen peroxide to water and oxygen","It catalyses ATP synthesis"],ans:1,exp:"The Fenton reaction: Fe2+ + H2O2 -> Fe3+ + OH- + OH.. The hydroxyl radical (OH.) is the most reactive oxygen species, indiscriminately damaging DNA (strand breaks, base oxidation), proteins (carbonylation), and lipids (peroxidation)."},
    {topic:"Biochemistry",q:"N-terminal methionine excision in newly synthesised proteins is performed by:",opts:["Signal peptidase","Methionine aminopeptidase (MAP)","Ubiquitin ligase","Initiator methionyl-tRNA synthetase"],ans:1,exp:"Methionine aminopeptidase (MAP) co-translationally removes the initiator methionine from newly synthesised proteins when the second residue is small (Ala, Cys, Gly, Pro, Ser, Thr, Val). This is important for protein stability and downstream N-terminal modifications."},
    {topic:"Biochemistry",q:"The conversion of prepropeptides to active neuropeptides involves:",opts:["Ribosomal editing","Proteolytic cleavage by prohormone convertases and carboxypeptidase E in secretory vesicles","Cytoplasmic synthesis without post-translational processing","Direct transcription of the mature peptide"],ans:1,exp:"Neuropeptides are synthesised as large prepropeptides. Signal peptide removal (signal peptidase) occurs in the ER. Prohormone convertases (PC1/3, PC2) cleave at paired basic residues in secretory vesicles; carboxypeptidase E removes C-terminal basic residues to generate the mature peptide."},
    {topic:"Biochemistry",q:"The rate of an enzyme-catalysed reaction at saturating substrate concentrations equals:",opts:["Km","Vmax/Km (catalytic efficiency)","Vmax","kcat/Km"],ans:2,exp:"At saturating substrate concentrations, virtually all enzyme molecules are in the ES complex, and the reaction rate approaches its theoretical maximum, Vmax. Vmax = kcat x [E]total, where kcat is the turnover number."},
    {topic:"Biochemistry",q:"The non-shivering thermogenesis in brown adipose tissue involves:",opts:["Increased ATP synthesis","Uncoupling protein 1 (UCP1) dissipating the proton gradient as heat without ATP synthesis","Increased fatty acid oxidation to CO2 only","Futile cycles of glucose oxidation and synthesis"],ans:1,exp:"UCP1 (thermogenin) in the inner mitochondrial membrane of brown adipocytes acts as a proton channel, allowing H+ to flow down its electrochemical gradient without passing through ATP synthase. The energy is dissipated as heat, mediating non-shivering thermogenesis."},
    {topic:"Biochemistry",q:"Glycosylphosphatidylinositol (GPI) anchors attach proteins to the outer leaflet of the plasma membrane by:",opts:["Transmembrane alpha-helices","A glycolipid anchor: ethanolamine phosphate - Man3 - GlcN - PI embedded in the outer leaflet","Direct covalent bonds to cholesterol","N-myristoylation at the C-terminus"],ans:1,exp:"GPI anchors consist of phosphatidylinositol embedded in the outer membrane leaflet, connected via glucosamine and three mannoses to ethanolamine phosphate, which is amide-linked to the protein C-terminus. They target proteins to lipid rafts and can be cleaved by GPI-PLD."},
    {topic:"Biochemistry",q:"In the unfolded protein response (UPR), IRE1alpha signals by:",opts:["Phosphorylating eIF2alpha directly","Splicing XBP1 mRNA to generate active XBP1s transcription factor, which induces ER chaperones","Cleaving ATF6","Directly binding misfolded proteins"],ans:1,exp:"IRE1alpha is an ER transmembrane kinase/endoribonuclease. When activated by ER stress, its endonuclease domain splices a 26-nt intron from XBP1 mRNA, creating XBP1s, a potent transcription factor that upregulates ER biogenesis, protein folding, and ERAD genes."},
    {topic:"Biochemistry",q:"The Krebs urea cycle and TCA cycle are linked through:",opts:["Shared NADH electron carrier","Fumarate, which is produced by the urea cycle and enters the TCA cycle as a substrate","Shared acetyl-CoA","GTP produced by both cycles"],ans:1,exp:"Argininosuccinate lyase in the urea cycle cleaves argininosuccinate to arginine + fumarate. This fumarate enters the TCA cycle (converted to malate, then oxaloacetate), directly linking nitrogen disposal with central carbon metabolism."},
    {topic:"Biochemistry",q:"Which coenzyme acts as a carrier of acyl groups in fatty acid synthesis?",opts:["NAD+","Coenzyme A (CoA)","FAD","Biotin"],ans:1,exp:"Coenzyme A (CoA) carries acyl groups as thioester bonds (e.g. acetyl-CoA, malonyl-CoA). In fatty acid synthesis, malonyl-CoA is the 2-carbon donor and the growing acyl chain is also carried on CoA or the acyl carrier protein (ACP)."},
    {topic:"Biochemistry",q:"Pyruvate dehydrogenase complex is inhibited by:",opts:["High AMP and low NADH","Acetyl-CoA, NADH, and ATP (products); activated by CoA, NAD+, and AMP","Low glucose concentration","High citrate only"],ans:1,exp:"Pyruvate dehydrogenase complex (PDC) is product-inhibited by acetyl-CoA and NADH and by phosphorylation via PDK (activated by acetyl-CoA/NADH). It is activated by dephosphorylation (PDP, activated by Ca2+) and by its substrates CoA, NAD+, and pyruvate."},
    {topic:"Biochemistry",q:"The enzyme that catalyses the committed step of purine nucleotide synthesis is:",opts:["Adenylate kinase","PRPP amidotransferase","IMP dehydrogenase","Adenylosuccinate lyase"],ans:1,exp:"PRPP amidotransferase catalyses the first committed step of de novo purine synthesis: transfer of the amide group of glutamine to PRPP, displacing pyrophosphate to form 5-phosphoribosylamine. It is feedback-inhibited by AMP, GMP, and IMP."},
    {topic:"Microbiology",q:"Which of the following correctly describes sigma factor function in bacteria?",opts:["It catalyses peptide bond formation","It confers promoter specificity to RNA polymerase holoenzyme for transcription initiation","It assists in ribosome assembly","It unwinds the DNA double helix at the replication fork"],ans:1,exp:"Sigma factors associate with the RNA polymerase core enzyme (alpha2-beta-beta-omega) to form the holoenzyme. The sigma factor recognises and binds the -10 and -35 promoter elements, enabling specific transcription initiation. Different sigma factors allow global reprogramming of gene expression."},
    {topic:"Microbiology",q:"Bacterial persister cells differ from antibiotic-resistant mutants in that they:",opts:["Carry resistance genes on plasmids","Are phenotypic variants that are transiently tolerant due to metabolic dormancy, not genetic resistance","Have modified target sites","Produce beta-lactamases"],ans:1,exp:"Persisters are a small subpopulation of genetically susceptible bacteria that survive antibiotic treatment by entering a metabolically dormant, slow-growing state. Upon removal of the antibiotic, they regrow and regenerate the original (antibiotic-sensitive) population. They are phenotypic, not genetic, variants."},
    {topic:"Microbiology",q:"The function of DnaA in bacterial DNA replication initiation is:",opts:["Unwinding the replication fork as a helicase","Recognising and binding the oriC sequence to initiate strand opening","Synthesising RNA primers","Ligating Okazaki fragments"],ans:1,exp:"DnaA is the initiator protein that binds multiple DnaA boxes in the chromosomal origin (oriC), oligomerises, and wraps the DNA around itself, inducing strand opening of the AT-rich DNA unwinding element (DUE). DnaB helicase is then loaded to begin bidirectional replication."},
    {topic:"Biotechnology",q:"The purpose of a split-intein system in protein engineering is:",opts:["To add glycans to a target protein","To achieve protein trans-splicing, joining two protein fragments in vivo or in vitro without cellular machinery","To direct protein secretion","To mark proteins for degradation"],ans:1,exp:"Split inteins are self-splicing protein elements that can be divided into two halves (IntN and IntC). When the two halves associate, they splice themselves out and ligate the flanking extein sequences (exteins) with a native peptide bond, enabling in vivo or cell-free protein ligation."},
    {topic:"Biotechnology",q:"The principle of proximity ligation assay (PLA) is to detect:",opts:["mRNA expression levels","Protein-protein interactions in situ by generating a rolling-circle amplification signal only when two antibody-conjugated oligonucleotides are in close proximity","DNA methylation","Genomic copy number variations"],ans:1,exp:"PLA uses two antibodies (each conjugated to an oligonucleotide probe) targeting proteins of interest. Only when both targets are in close proximity (within ~40 nm) do the oligonucleotides hybridise with a connector oligo, allowing ligation and rolling-circle amplification to produce a detectable fluorescent signal."}
  ]

};

// ─── RUNTIME STATE ────────────────────────────────────────────────────────────

var QUESTIONS = [];
var current = 0;
var answers = [];
var timerInterval = null;
var timeLeft = 3600;
var quizFinished = false;

function shuffle(arr) {
  var a = arr.slice();
  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
  }
  return a;
}

function pad(n) { return n < 10 ? '0' + n : '' + n; }

function formatTime(s) {
  var h = Math.floor(s / 3600);
  var m = Math.floor((s % 3600) / 60);
  var sec = s % 60;
  return pad(h) + ':' + pad(m) + ':' + pad(sec);
}

function startTimer() {
  timeLeft = 3600;
  quizFinished = false;
  document.getElementById('timer').textContent = formatTime(timeLeft);
  document.getElementById('timer').style.color = 'var(--accent)';
  clearInterval(timerInterval);
  timerInterval = setInterval(function() {
    if (quizFinished) { clearInterval(timerInterval); return; }
    timeLeft--;
    document.getElementById('timer').textContent = formatTime(timeLeft);
    if (timeLeft <= 300) document.getElementById('timer').style.color = 'var(--warn)';
    if (timeLeft <= 60) document.getElementById('timer').style.color = 'var(--danger)';
    if (timeLeft <= 0) { clearInterval(timerInterval); showResults(true); }
  }, 1000);
}

function startQuiz(setNum) {
  QUESTIONS = shuffle(SETS[setNum]);
  current = 0;
  answers = new Array(60).fill(null);
  quizFinished = false;
  showScreen('quiz-screen');
  document.getElementById('quiz-header').style.display = 'flex';
  document.getElementById('set-badge').textContent = 'Set ' + setNum;
  startTimer();
  renderQuestion();
}

function goToStart() {
  clearInterval(timerInterval);
  quizFinished = true;
  showScreen('start-screen');
  document.getElementById('quiz-header').style.display = 'none';
}

function showScreen(id) {
  var screens = document.querySelectorAll('.screen');
  for (var i = 0; i < screens.length; i++) screens[i].classList.remove('active');
  document.getElementById(id).classList.add('active');
}

function renderQuestion() {
  var q = QUESTIONS[current];
  document.getElementById('q-tag').textContent = q.topic;
  document.getElementById('q-num').textContent = 'Question ' + (current + 1) + ' of 60';
  document.getElementById('q-text').textContent = q.q;

  var optsEl = document.getElementById('options');
  optsEl.innerHTML = '';
  var letters = ['A','B','C','D'];
  for (var i = 0; i < q.opts.length; i++) {
    var btn = document.createElement('button');
    btn.className = 'opt';
    btn.innerHTML = '<span class="letter">' + letters[i] + '</span><span>' + q.opts[i] + '</span>';
    btn.setAttribute('data-index', i);
    btn.addEventListener('click', handleOptionClick);
    optsEl.appendChild(btn);
  }

  var expEl = document.getElementById('explanation');
  expEl.classList.remove('show');
  expEl.innerHTML = '';

  var btnNext = document.getElementById('btn-next');
  btnNext.classList.remove('show');
  btnNext.textContent = (current < 59) ? 'Next' : 'Finish & See Results';

  document.getElementById('btn-prev').disabled = (current === 0);

  if (answers[current] !== null) applyAnswerState(answers[current]);
  updateProgress();
}

function handleOptionClick(e) {
  var idx = parseInt(e.currentTarget.getAttribute('data-index'), 10);
  selectAnswer(idx);
}

function selectAnswer(i) {
  if (answers[current] !== null) return;
  answers[current] = i;
  applyAnswerState(i);
}

function applyAnswerState(chosen) {
  var q = QUESTIONS[current];
  var opts = document.querySelectorAll('.opt');
  for (var i = 0; i < opts.length; i++) {
    opts[i].setAttribute('disabled', 'disabled');
    if (i === q.ans) opts[i].classList.add('correct');
    else if (i === chosen && chosen !== q.ans) opts[i].classList.add('wrong');
  }
  var expEl = document.getElementById('explanation');
  expEl.innerHTML = '<strong>' + (chosen === q.ans ? 'Correct!' : 'Incorrect.') + '</strong> ' + q.exp;
  expEl.classList.add('show');
  document.getElementById('btn-next').classList.add('show');
}

function nextOrFinish() {
  if (current < 59) { current++; renderQuestion(); }
  else showResults(false);
}

function goTo(n) {
  if (n < 0 || n >= 60) return;
  current = n;
  renderQuestion();
}

function updateProgress() {
  var answered = 0;
  for (var i = 0; i < answers.length; i++) if (answers[i] !== null) answered++;
  document.getElementById('progress-bar').style.width = ((answered / 60) * 100) + '%';
  document.getElementById('progress-label').textContent = answered + ' / 60';
}

function showResults(timedOut) {
  clearInterval(timerInterval);
  quizFinished = true;
  showScreen('result-screen');
  document.getElementById('quiz-header').style.display = 'none';

  var correct = 0, wrong = 0, skip = 0;
  for (var i = 0; i < 60; i++) {
    if (answers[i] === null) skip++;
    else if (answers[i] === QUESTIONS[i].ans) correct++;
    else wrong++;
  }

  var pct = Math.round((correct / 60) * 100);
  document.getElementById('score-pct').textContent = pct + '%';
  document.getElementById('res-correct').textContent = correct;
  document.getElementById('res-wrong').textContent = wrong;
  document.getElementById('res-skip').textContent = skip;

  var title = timedOut ? 'Time Up!' : (pct >= 70 ? 'Well Done!' : pct >= 50 ? 'Good Effort' : 'Keep Practising');
  document.getElementById('result-title').textContent = title;

  var verdict;
  if (timedOut) verdict = 'Time ran out. Review your answers below and work on your speed.';
  else if (pct >= 80) verdict = 'Outstanding - you are well prepared for Gottingen.';
  else if (pct >= 65) verdict = 'Solid performance. Review your weak areas and you will be ready.';
  else if (pct >= 50) verdict = 'A decent start. Focus on the topics where you missed questions.';
  else verdict = 'Do not worry - use the explanations below to guide your revision.';
  document.getElementById('verdict').textContent = verdict;

  var circ = 2 * Math.PI * 55;
  var offset = circ * (1 - pct / 100);
  setTimeout(function() {
    var ring = document.getElementById('ring-fill');
    ring.style.strokeDashoffset = offset;
    ring.style.stroke = pct >= 70 ? 'var(--accent2)' : pct >= 50 ? 'var(--warn)' : 'var(--danger)';
  }, 100);

  // Topic breakdown
  var topics = [];
  for (var i = 0; i < QUESTIONS.length; i++) {
    if (topics.indexOf(QUESTIONS[i].topic) === -1) topics.push(QUESTIONS[i].topic);
  }
  var tbHtml = '<h3>Performance by Topic</h3>';
  for (var t = 0; t < topics.length; t++) {
    var tot = 0, cor = 0;
    for (var i = 0; i < QUESTIONS.length; i++) {
      if (QUESTIONS[i].topic === topics[t]) { tot++; if (answers[i] === QUESTIONS[i].ans) cor++; }
    }
    var frac = tot > 0 ? cor / tot : 0;
    var bc = frac >= 0.7 ? 'var(--accent2)' : frac >= 0.5 ? 'var(--warn)' : 'var(--danger)';
    tbHtml += '<div class="tb-row"><div class="tb-name">' + topics[t] + '</div><div class="tb-bar-outer"><div class="tb-bar-inner" style="width:' + (frac*100) + '%;background:' + bc + '"></div></div><div class="tb-frac">' + cor + '/' + tot + '</div></div>';
  }
  document.getElementById('topic-breakdown').innerHTML = tbHtml;

  // Full review
  var letters = ['A','B','C','D'];
  var revHtml = '<h3>Full Question Review</h3>';
  for (var i = 0; i < 60; i++) {
    var q = QUESTIONS[i];
    var ua = answers[i];
    var ok = (ua === q.ans);
    var sk = (ua === null);
    var sc = sk ? 'review-skip' : (ok ? 'review-correct' : 'review-wrong');
    var sl = sk ? 'Skipped' : (ok ? 'Correct' : 'Wrong');
    revHtml += '<div class="review-item ' + sc + '">';
    revHtml += '<div class="review-header"><span class="review-qnum">Q' + (i+1) + ' &bull; ' + q.topic + '</span><span class="review-status">' + sl + '</span></div>';
    revHtml += '<div class="review-question">' + q.q + '</div><div class="review-opts">';
    for (var j = 0; j < q.opts.length; j++) {
      var oc = (j === q.ans) ? 'rev-opt-correct' : ((j === ua && !ok) ? 'rev-opt-wrong' : '');
      revHtml += '<div class="rev-opt ' + oc + '"><span class="rev-letter">' + letters[j] + '</span>' + q.opts[j] + '</div>';
    }
    revHtml += '</div><div class="review-exp">' + q.exp + '</div></div>';
  }
  document.getElementById('review-section').innerHTML = revHtml;
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('btn-set1').addEventListener('click', function() { startQuiz(1); });
  document.getElementById('btn-set2').addEventListener('click', function() { startQuiz(2); });
  document.getElementById('btn-set3').addEventListener('click', function() { startQuiz(3); });
  document.getElementById('btn-prev').addEventListener('click', function() { goTo(current - 1); });
  document.getElementById('btn-next').addEventListener('click', nextOrFinish);
  document.getElementById('btn-home').addEventListener('click', goToStart);
});

// quiz-app runtime (expects SETS to be defined earlier in the file)
(function () {
  // Utility: Fisher-Yates shuffle
  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // Shuffle options of a single question and remap the correct answer index
  function shuffleQuestionOptions(q) {
    // create pairs [optText, originalIndex]
    const pairs = q.opts.map((text, idx) => ({ text, idx }));
    shuffleArray(pairs);
    // build new opts array and find new index of original answer
    q.opts = pairs.map(p => p.text);
    const newAnsIndex = pairs.findIndex(p => p.idx === q.ans);
    q.ans = newAnsIndex;
    return q;
  }

  // Shuffle question order and options for the entire set
  function prepareQuestions(setArray) {
    const copy = JSON.parse(JSON.stringify(setArray)); // deep copy to avoid mutating original SETS
    shuffleArray(copy);
    copy.forEach(q => shuffleQuestionOptions(q));
    return copy;
  }

  // DOM references
  const qTag = document.getElementById('q-tag');
  const qNum = document.getElementById('q-num');
  const qText = document.getElementById('q-text');
  const optionsWrap = document.getElementById('options');
  const explanationEl = document.getElementById('explanation');
  const btnPrev = document.getElementById('btn-prev');
  const btnNext = document.getElementById('btn-next');
  const btnSkip = document.getElementById('btn-skip');
  const progressBar = document.getElementById('progress-bar');
  const progressLabel = document.getElementById('progress-label');

  // App state
  let currentSetId = null;
  let questions = [];
  let curIndex = 0;
  let responses = []; // { selected: number|null, status: 'answered'|'skipped'|'unseen' }

  // Start a set (call this where you originally call start)
  function startSet(setId) {
    currentSetId = setId;
    const raw = SETS[setId];
    questions = prepareQuestions(raw);
    curIndex = 0;
    responses = Array(questions.length).fill(null).map(() => ({ selected: null, status: 'unseen' }));
    renderQuestion();
    updateNav();
    // show quiz header if hidden
    const quizHeader = document.getElementById('quiz-header');
    if (quizHeader) quizHeader.style.display = '';
    // show quiz screen (if your UI needs)
    document.getElementById('start-screen').classList.remove('active');
    document.getElementById('quiz-screen').classList.add('active');
  }

  // Render the current question
  function renderQuestion() {
    const q = questions[curIndex];
    qTag.textContent = q.topic || 'Topic';
    qNum.textContent = `Question ${curIndex + 1} of ${questions.length}`;
    qText.textContent = q.q;
    explanationEl.textContent = q.exp || '';
    explanationEl.classList.remove('show');

    // Build options
    optionsWrap.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
    q.opts.forEach((optText, i) => {
      const btn = document.createElement('button');
      btn.className = 'opt';
      btn.type = 'button';
      btn.dataset.index = i;
      btn.innerHTML = `<span class="letter">${letters[i] || String.fromCharCode(65 + i)}</span><div class="opt-text">${optText}</div>`;
      btn.addEventListener('click', () => onSelectOption(i));
      optionsWrap.appendChild(btn);
    });

    // If this question was previously answered/skipped, reflect that:
    const resp = responses[curIndex];
    if (resp && resp.status === 'answered' && resp.selected !== null) {
      revealAnswerUI(resp.selected, true); // show previously selected result
    } else if (resp && resp.status === 'skipped') {
      // mark visually as skipped (no option highlighted)
      explanationEl.classList.add('show'); // optionally show explanation for skipped: remove if undesired
    }

    updateProgress();
    updateNav();
  }

  // On selecting an option
  function onSelectOption(selectedIndex) {
    const q = questions[curIndex];
    responses[curIndex] = { selected: selectedIndex, status: 'answered' };

    revealAnswerUI(selectedIndex, false);
    updateProgress();
    updateNav();
  }

  // Reveal correct/wrong styling and show explanation
  function revealAnswerUI(selectedIndex, fromHistory) {
    const q = questions[curIndex];
    const opts = Array.from(optionsWrap.querySelectorAll('.opt'));
    opts.forEach((el, i) => {
      el.classList.remove('correct', 'wrong');
      el.disabled = true;
      if (i === q.ans) {
        el.classList.add('correct');
      } else if (i === selectedIndex && i !== q.ans) {
        el.classList.add('wrong');
      }
    });
    explanationEl.classList.add('show');

    // show Next button (it may already be visible)
    btnNext.classList.add('show');
  }

  // Skip current question (mark skipped and move on)
  function onSkip() {
    responses[curIndex] = { selected: null, status: 'skipped' };
    // optionally show explanation for skipped questions:
    explanationEl.classList.add('show');
    goToQuestion(curIndex + 1);
  }

  // Navigation: go to question index
  function goToQuestion(index) {
    if (index < 0) index = 0;
    if (index >= questions.length) {
      // reached end — submit / show results
      finishQuiz();
      return;
    }
    curIndex = index;
    renderQuestion();
  }

  function onNext() {
    goToQuestion(curIndex + 1);
  }
  function onPrev() {
    goToQuestion(curIndex - 1);
  }

  // Finish quiz (placeholder — wire to your existing result logic)
  function finishQuiz() {
    // hide quiz screen and show result screen or call existing results function
    // For integration, call your existing submission handler here.
    console.log('Quiz finished. Responses:', responses);
    // Example: show result screen if exists:
    document.getElementById('quiz-screen').classList.remove('active');
    document.getElementById('result-screen').classList.add('active');
    // You may need to call any existing scoring/rendering function after this.
  }

  // Update navigation buttons state
  function updateNav() {
    btnPrev.disabled = (curIndex === 0);
    // Next should always be available to move forward (even if unanswered), but we only highlight when there's an answer.
    if (curIndex < questions.length - 1) {
      btnNext.textContent = 'Next';
    } else {
      btnNext.textContent = 'Submit';
    }

    // Optionally show/hide Next visual class based on answered state:
    const resp = responses[curIndex];
    if (resp && resp.status === 'answered') {
      btnNext.classList.add('show');
    } else {
      // still allow next, but not styled as primary until answered
      btnNext.classList.remove('show');
    }
  }

  // Update progress bar and label
  function updateProgress() {
    const answeredCount = responses.filter(r => r && r.status === 'answered').length;
    const total = questions.length || 1;
    const pct = Math.round(((curIndex) / total) * 100);
    progressBar.style.width = `${Math.round((answeredCount / total) * 100)}%`;
    progressLabel.textContent = `${answeredCount} / ${total}`;
  }

  // Attach button listeners
  if (btnNext) btnNext.addEventListener('click', onNext);
  if (btnPrev) btnPrev.addEventListener('click', onPrev);
  if (btnSkip) btnSkip.addEventListener('click', onSkip);

  // Expose startSet globally if other code calls it
  window.startSet = startSet;

  // Optionally auto-bind existing Start buttons that have ids like btn-set1
  document.querySelectorAll('.btn-set').forEach(btn => {
    btn.addEventListener('click', (e) => {
      // derive set id from button id if pattern btn-set{n} used
      const idMatch = btn.id.match(/btn-set(\d+)/);
      const sid = idMatch ? parseInt(idMatch[1], 10) : 1;
      startSet(sid);
    });
  });

})();
