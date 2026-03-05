var QUESTIONS = [
  {topic:"Microbiology",q:"Which of the following best describes the structure of a peptidoglycan layer in Gram-positive bacteria?",opts:["A single thin layer outside the plasma membrane","A thick multilayered mesh surrounding the cell membrane","A double membrane with a thin peptidoglycan layer in between","A lipopolysaccharide outer layer with peptidoglycan beneath"],ans:1,exp:"Gram-positive bacteria have a thick multilayered peptidoglycan mesh directly outside their plasma membrane, which retains the crystal violet stain in the Gram staining procedure."},
  {topic:"Microbiology",q:"The Shine-Dalgarno sequence in prokaryotes is important for:",opts:["Transcription termination","Translation initiation by ribosome binding","Sigma factor recognition of the promoter","Regulation of the lac operon"],ans:1,exp:"The Shine-Dalgarno sequence is a purine-rich region 5-10 nt upstream of the start codon that base-pairs with the 16S rRNA of the 30S ribosomal subunit to position the ribosome at the correct start codon for translation."},
  {topic:"Microbiology",q:"Which enzyme is responsible for the synthesis of RNA from a DNA template?",opts:["DNA polymerase I","Primase","RNA polymerase","Reverse transcriptase"],ans:2,exp:"RNA polymerase catalyses the synthesis of RNA using a DNA template during transcription. It requires a promoter sequence and, in bacteria, a sigma factor for initiation."},
  {topic:"Microbiology",q:"Quorum sensing in bacteria primarily involves:",opts:["Response to UV-induced DNA damage","Detection of viral particle concentration","Cell-density-dependent gene regulation via signalling molecules","Horizontal gene transfer via conjugation"],ans:2,exp:"Quorum sensing allows bacteria to monitor population density through the accumulation of small signalling molecules called autoinducers. When a threshold concentration is reached, coordinated gene expression changes occur such as biofilm formation and virulence factor production."},
  {topic:"Microbiology",q:"A bacteriophage that integrates its genome into the host chromosome is called:",opts:["Lytic phage","Lysogenic phage (prophage)","Temperate phage during lytic cycle","Filamentous phage"],ans:1,exp:"A temperate bacteriophage can follow the lysogenic pathway, integrating as a prophage into the host chromosome. This state persists through many cell divisions until induction triggers the lytic cycle."},
  {topic:"Microbiology",q:"Which of the following is NOT a characteristic of Archaea?",opts:["Ether-linked membrane lipids","No membrane-bound nucleus","Peptidoglycan cell wall","Presence of histones"],ans:2,exp:"Archaea lack peptidoglycan in their cell walls, which is a feature of Bacteria. They have ether-linked lipids, no nuclear membrane, and use histone-like proteins to organise their DNA."},
  {topic:"Microbiology",q:"In binary fission, the FtsZ protein forms:",opts:["The nucleoid region","A Z-ring at mid-cell that constricts during division","The replication fork","Flagellar motor complexes"],ans:1,exp:"FtsZ is a GTPase homologous to eukaryotic tubulin. It polymerises into a Z-ring at the cell midpoint, recruits divisome components, and provides the constriction force during prokaryotic cell division."},
  {topic:"Microbiology",q:"Transformation in bacteria refers to:",opts:["Transfer of DNA via a phage vector","Uptake of naked exogenous DNA from the environment","Exchange of DNA through a pilus","Insertion of a transposon into the genome"],ans:1,exp:"Bacterial transformation involves the uptake and incorporation of naked DNA from the surrounding environment. Naturally competent bacteria such as Streptococcus pneumoniae have specific machinery for this process."},
  {topic:"Microbiology",q:"The TCA cycle produces which combination of electron carriers per acetyl-CoA?",opts:["2 NADH, 1 FADH2, 1 GTP","3 NADH, 1 FADH2, 1 GTP","3 NADH, 2 FADH2, 1 GTP","2 NADH, 2 FADH2, 2 GTP"],ans:1,exp:"One turn of the TCA cycle oxidises one acetyl-CoA and yields 3 NADH, 1 FADH2, and 1 GTP, along with the release of 2 CO2 molecules."},
  {topic:"Microbiology",q:"Which cellular structure is the site of fermentation in bacteria?",opts:["Mitochondria","Periplasmic space","Cytoplasm","Outer membrane"],ans:2,exp:"Bacteria lack mitochondria. Fermentation and the glycolytic reactions of anaerobic respiration occur in the cytoplasm. The electron transport chain is located in the plasma membrane."},
  {topic:"Microbiology",q:"Endospores produced by Bacillus and Clostridium are resistant to heat primarily because:",opts:["They contain large amounts of lipid","Dipicolinic acid chelates water and stabilises proteins","They lack peptidoglycan entirely","Their outer membrane is thicker than vegetative cells"],ans:1,exp:"Endospores accumulate dipicolinic acid (DPA) complexed with Ca2+, which replaces most core water and forms complexes with DNA and proteins, conferring extreme heat resistance."},
  {topic:"Microbiology",q:"Horizontal gene transfer via a sex pilus is called:",opts:["Transformation","Transduction","Conjugation","Recombination"],ans:2,exp:"Conjugation requires direct cell-to-cell contact mediated by a sex pilus encoded on the F plasmid. ssDNA is transferred from the donor to the recipient through the mating bridge."},
  {topic:"Microbiology",q:"Which type of RNA is the most abundant in a bacterial cell?",opts:["mRNA","tRNA","rRNA","snRNA"],ans:2,exp:"Ribosomal RNA (rRNA) constitutes about 80% of total cellular RNA. It is the structural and catalytic component of ribosomes. The three prokaryotic rRNA species are 5S, 16S, and 23S."},
  {topic:"Microbiology",q:"The 16S rRNA gene is used in microbial phylogenetics because:",opts:["It encodes a protein involved in cell wall synthesis","It is highly conserved yet contains variable regions useful for species identification","It is the largest gene in the bacterial genome","It is present only in pathogenic bacteria"],ans:1,exp:"The 16S rRNA gene has conserved regions used for universal PCR primers flanking hypervariable regions (V1-V9) that differ between species, making it ideal for phylogenetic classification and environmental surveys."},
  {topic:"Microbiology",q:"What is the mechanism of action of beta-lactam antibiotics?",opts:["Inhibition of protein synthesis at the 30S subunit","Inhibition of cell wall synthesis by blocking transpeptidases (PBPs)","Disruption of the outer membrane","Inhibition of DNA gyrase"],ans:1,exp:"Beta-lactams mimic the D-Ala-D-Ala terminus of peptidoglycan precursors and irreversibly acylate penicillin-binding proteins (PBPs), preventing cross-linking of peptidoglycan strands."},
  {topic:"Microbiology",q:"In nitrogen fixation, which enzyme catalyses the reduction of N2 to NH3?",opts:["Glutamine synthetase","Nitrogenase","Urease","Nitrate reductase"],ans:1,exp:"Nitrogenase catalyses the ATP-dependent reduction of N2 to NH3. It is extremely oxygen-sensitive and found in diazotrophs such as Rhizobium and Azotobacter."},
  {topic:"Microbiology",q:"Which of the following best describes a biofilm?",opts:["A suspension of planktonic bacteria in liquid medium","A structured community of bacteria embedded in a self-produced extracellular matrix","A single-species colony growing on solid agar","A layer of bacteria on the outer surface of red blood cells"],ans:1,exp:"Biofilms are structured communities of microorganisms irreversibly attached to a surface, embedded in an extracellular polymeric substance (EPS) matrix. They exhibit increased antibiotic resistance."},
  {topic:"Microbiology",q:"The lac operon is induced by:",opts:["Glucose","Lactose (via allolactose)","cAMP","Repressor protein directly"],ans:1,exp:"When lactose is present, it is converted to allolactose by residual beta-galactosidase. Allolactose acts as an inducer by binding the Lac repressor, causing it to dissociate from the operator and allowing transcription."},
  {topic:"Microbiology",q:"A mesosome is best described as:",opts:["An organelle present in archaea only","An invagination of the bacterial plasma membrane (largely a fixation artefact)","The nucleoid-associated protein complex","A flagellar basal body component"],ans:1,exp:"Mesosomes are membrane invaginations seen in electron microscopy of bacteria. Current evidence suggests they are largely fixation artefacts."},
  {topic:"Microbiology",q:"Which viral genome type is directly translated by host ribosomes upon entry?",opts:["Negative-sense ssRNA","dsDNA","Positive-sense ssRNA","dsRNA"],ans:2,exp:"Positive-sense ssRNA viruses such as poliovirus and SARS-CoV-2 have a genome that functions directly as mRNA and can be translated immediately by host ribosomes."},
  {topic:"Microbiology",q:"The CRISPR locus in bacteria primarily functions as:",opts:["A toxin-antitoxin system","An adaptive immune memory against previously encountered phages and plasmids","A quorum-sensing receptor array","Repetitive sequences for genome replication"],ans:1,exp:"CRISPR arrays store short sequences (spacers) from past phage or plasmid infections. Together with Cas proteins they form a guide-RNA-directed surveillance and cleavage system against re-invasion."},
  {topic:"Microbiology",q:"Which process describes the movement of bacteria toward or away from a chemical gradient?",opts:["Quorum sensing","Chemotaxis","Photokinesis","Magnetotaxis"],ans:1,exp:"Chemotaxis is the directed movement of bacteria in response to chemical gradients. Attractants suppress tumbling (CW flagellar rotation), resulting in smooth runs toward the attractant; repellents do the opposite."},
  {topic:"Biotechnology",q:"In recombinant DNA technology, restriction endonucleases are used primarily to:",opts:["Amplify DNA sequences","Cut DNA at specific recognition sequences","Ligate two DNA fragments together","Remove RNA primers from Okazaki fragments"],ans:1,exp:"Type II restriction endonucleases such as EcoRI and BamHI recognise specific palindromic sequences and cleave both strands, generating defined fragments with blunt or cohesive ends suitable for cloning."},
  {topic:"Biotechnology",q:"The polymerase chain reaction (PCR) requires which of the following?",opts:["RNA template, reverse transcriptase, and dNTPs","DNA template, two primers, thermostable DNA polymerase, and dNTPs","DNA template, one primer, and RNA polymerase","Restriction enzymes and ligase"],ans:1,exp:"Standard PCR requires a DNA template, a forward and reverse primer flanking the target, a heat-stable DNA polymerase such as Taq, dNTPs, and a buffer. Cycling through denaturation, annealing, and extension exponentially amplifies the target."},
  {topic:"Biotechnology",q:"Which method introduces DNA into mammalian cells via lipid vesicles?",opts:["Electroporation","Microinjection","Lipofection (liposome-mediated transfection)","Conjugation"],ans:2,exp:"Lipofection uses cationic liposomes that form complexes (lipoplexes) with negatively charged DNA. These fuse with the cell membrane and release DNA into the cytoplasm, enabling transfection of mammalian cells."},
  {topic:"Biotechnology",q:"A plasmid cloning vector must contain:",opts:["Origin of replication, selectable marker, and multiple cloning site (MCS)","Promoter, terminator, and ribosome-binding site only","Transposons and IS elements","Phage attachment sites and cos sequences"],ans:0,exp:"Cloning vectors require an origin of replication for autonomous replication, a selectable marker such as antibiotic resistance to identify transformed cells, and a multiple cloning site (MCS) for insert ligation."},
  {topic:"Biotechnology",q:"CRISPR-Cas9 genome editing requires:",opts:["A protein-only complex that scans DNA for PAM sequences","A guide RNA (sgRNA) complementary to the target and the Cas9 nuclease","Two separate Cas proteins and no RNA","Zinc finger nucleases fused to a transcription activator"],ans:1,exp:"CRISPR-Cas9 uses a single-guide RNA (sgRNA) that base-pairs with the target DNA sequence adjacent to a PAM (NGG for SpCas9). Cas9 then creates a blunt-ended double-strand break about 3 bp upstream of the PAM."},
  {topic:"Biotechnology",q:"In Southern blotting, the probe used is:",opts:["An antibody against the protein of interest","A labelled nucleic acid sequence complementary to the target DNA","A fluorescently labelled protein","A restriction enzyme that cleaves the target"],ans:1,exp:"Southern blotting detects specific DNA sequences. After gel electrophoresis and membrane transfer, a labelled single-stranded nucleic acid probe is hybridised to the immobilised target DNA."},
  {topic:"Biotechnology",q:"In a fed-batch fermentation process, substrate is:",opts:["Added continuously while product and cells are continuously removed","Added intermittently or continuously but nothing is removed during the run","Added all at once at the start with no further additions","Removed along with cells at set intervals"],ans:1,exp:"Fed-batch fermentation starts like a batch but substrate is fed in without simultaneous removal of broth. This avoids substrate inhibition, maintains optimal conditions, and increases cell density and product yield."},
  {topic:"Biotechnology",q:"Which technique separates proteins by isoelectric point and molecular weight in two dimensions?",opts:["Size-exclusion chromatography","Two-dimensional gel electrophoresis (2D-PAGE)","Western blotting","Affinity chromatography"],ans:1,exp:"2D-PAGE first separates proteins by isoelectric point via isoelectric focusing, then by molecular weight via SDS-PAGE in the second dimension, yielding a characteristic 2D protein map."},
  {topic:"Biotechnology",q:"Hybridoma technology is used to produce:",opts:["Recombinant proteins in E. coli","Monoclonal antibodies from fused B-cell/myeloma hybrids","Polyclonal antisera from immunised rabbits","Recombinant viral antigens for vaccines"],ans:1,exp:"Hybridoma technology fuses an antigen-specific B lymphocyte with an immortal myeloma cell. The resulting hybridoma proliferates indefinitely and secretes a single defined monoclonal antibody."},
  {topic:"Biotechnology",q:"The Ti plasmid of Agrobacterium tumefaciens is used in plant biotechnology to:",opts:["Introduce T-DNA containing foreign genes into plant nuclear genomes","Transform chloroplasts with herbicide resistance genes","Serve as a binary vector for bacterial expression only","Create somatic hybrids via protoplast fusion"],ans:0,exp:"The Agrobacterium Ti plasmid transfers its T-DNA region into plant cells where it integrates into the nuclear genome. Disarmed Ti plasmid-based binary vector systems are standard tools for stable plant transformation."},
  {topic:"Biotechnology",q:"A His-tag is used in protein purification because:",opts:["It increases protein solubility in E. coli","Six or more histidine residues coordinate Ni2+ ions on IMAC resin enabling selective binding","It acts as a signal peptide for secretion","It protects the protein from protease degradation"],ans:1,exp:"IMAC uses Ni2+ or Co2+ charged resin that binds the imidazole side chains of consecutive histidines. Bound His-tagged proteins are eluted with imidazole or low pH."},
  {topic:"Biotechnology",q:"In RT-PCR, what is the role of reverse transcriptase?",opts:["It amplifies DNA in the thermal cycler","It converts RNA into complementary DNA (cDNA)","It degrades the RNA template after transcription","It is the proofreading polymerase in the final PCR step"],ans:1,exp:"Reverse transcriptase is an RNA-dependent DNA polymerase that uses an RNA template and a primer to synthesise a complementary DNA (cDNA) strand. This cDNA then serves as the template for subsequent PCR amplification."},
  {topic:"Biotechnology",q:"A key advantage of Saccharomyces cerevisiae over E. coli as an expression host is:",opts:["Faster doubling time","Ability to perform eukaryotic post-translational modifications such as glycosylation","Simpler genetic manipulation","Higher plasmid copy number"],ans:1,exp:"S. cerevisiae is a eukaryote and can perform post-translational modifications such as N- and O-linked glycosylation, disulfide bond formation, and proper protein folding - modifications often absent in E. coli."},
  {topic:"Biotechnology",q:"In gel electrophoresis of DNA, smaller fragments migrate:",opts:["Slower than larger fragments","Faster than larger fragments","At the same speed regardless of size","Toward the positive electrode only at high voltage"],ans:1,exp:"In agarose gel electrophoresis, the gel matrix creates a sieve effect. Smaller DNA fragments experience less frictional resistance and migrate faster toward the positive electrode."},
  {topic:"Biotechnology",q:"A gene knockout in mice is most classically generated using:",opts:["Antisense RNA injection into oocytes","Homologous recombination in embryonic stem (ES) cells","TALEN-based cleavage in somatic cells","Random insertional mutagenesis via retroviruses"],ans:1,exp:"Classical gene knockout uses homologous recombination to replace the endogenous gene with a targeting construct in ES cells. Selected ES cells are injected into blastocysts; chimeric mice are bred to obtain germline transmission."},
  {topic:"Biotechnology",q:"Bioreactor dissolved oxygen (DO) is controlled primarily by:",opts:["Adjusting pH with acid/base pumps","Varying agitation speed and/or aeration rate","Changing fermentation temperature","Modifying carbon source feed rate"],ans:1,exp:"Dissolved oxygen is maintained at set-points by adjusting agitation (impeller speed increases oxygen mass transfer) and/or sparging rate (airflow)."},
  {topic:"Biotechnology",q:"Northern blotting detects:",opts:["Specific DNA sequences in a genomic digest","Specific RNA species (mRNA) in a total RNA sample","Proteins recognised by a specific antibody","Protein-DNA interactions"],ans:1,exp:"Northern blotting separates RNA by size on a denaturing agarose gel, transfers it to a membrane, and hybridises with a labelled probe to detect and quantify specific RNA molecules."},
  {topic:"Biotechnology",q:"The Cre-lox recombination system is used in research to:",opts:["Amplify specific genomic regions","Achieve site-specific DNA recombination enabling conditional gene deletion","Integrate plasmids into the bacterial chromosome","Perform base editing without double-strand breaks"],ans:1,exp:"The Cre recombinase catalyses recombination between two 34-bp loxP sites. When two loxP sites flank a gene segment, Cre expression leads to excision of the intervening sequence, used for conditional knockouts."},
  {topic:"Biotechnology",q:"Flow cytometry is primarily used to:",opts:["Separate proteins by size on a gel","Measure multiple physical and chemical characteristics of single cells in suspension","Sequence nucleic acids in real time","Visualise intracellular protein localisation in fixed tissue"],ans:1,exp:"Flow cytometry measures properties such as size, granularity, and fluorescence of individual cells passing through laser beams. It allows high-throughput cell counting, sorting, and phenotyping."},
  {topic:"Biotechnology",q:"In gene therapy, AAV vectors are favoured because:",opts:["They integrate efficiently into the host genome at high frequency","They have a large cargo capacity exceeding 20 kb","They cause minimal immune response and can transduce non-dividing cells","They replicate autonomously in the nucleus"],ans:2,exp:"AAV vectors are preferred in gene therapy due to their low immunogenicity, ability to transduce both dividing and non-dividing cells, and primarily episomal persistence in post-mitotic tissues. Their main limitation is a small packaging capacity of about 4.7 kb."},
  {topic:"Biotechnology",q:"Which of the following best describes RNA interference (RNAi)?",opts:["dsRNA triggers the degradation of complementary mRNA via the RISC complex","A method for inserting foreign DNA using RNA as an intermediate","The process by which ribosomes translate mRNA into protein","A repair mechanism for double-strand DNA breaks"],ans:0,exp:"RNAi is a gene-silencing pathway where double-stranded RNA is processed by Dicer into siRNAs of about 21 nt. siRNAs are loaded into the RISC complex, which uses the antisense strand to find and cleave complementary mRNA."},
  {topic:"Biotechnology",q:"Recombinant chymosin used in cheese production is an example of:",opts:["Traditional fermentation requiring no genetic engineering","Metabolic engineering of lactic acid bacteria","Production of a food enzyme via recombinant microorganism expression","Somatic cell nuclear transfer technology"],ans:2,exp:"Recombinant chymosin expressed in Aspergillus or Kluyveromyces was the first recombinant food enzyme approved. It replaces calf stomach rennet for milk coagulation in cheese manufacture."},
  {topic:"Biochemistry",q:"Which amino acid contains a thiol (-SH) group that can form disulfide bonds?",opts:["Serine","Threonine","Cysteine","Methionine"],ans:2,exp:"Cysteine contains a thiol (-SH) side chain. Two cysteine residues can be oxidised to form a covalent disulfide bond, which is critical for stabilising extracellular protein structures such as insulin and immunoglobulins."},
  {topic:"Biochemistry",q:"The Michaelis-Menten constant (Km) is defined as:",opts:["The maximum reaction velocity","The substrate concentration at which reaction velocity is half of Vmax","The dissociation constant of the enzyme-product complex","The inhibitor concentration that reduces velocity by 50%"],ans:1,exp:"Km is the substrate concentration at which the reaction rate equals Vmax/2. A low Km indicates high affinity, meaning less substrate is needed to reach the half-maximal rate."},
  {topic:"Biochemistry",q:"During oxidative phosphorylation, the proton gradient is used to:",opts:["Directly phosphorylate ADP to ATP in the matrix","Drive ATP synthase (Complex V) to produce ATP via the chemiosmotic mechanism","Reduce NAD+ to NADH","Activate Complex I of the electron transport chain"],ans:1,exp:"According to Mitchell's chemiosmotic theory, electron carriers in Complexes I, III, and IV pump H+ creating a proton-motive force. Proton re-entry through ATP synthase drives ATP synthesis."},
  {topic:"Biochemistry",q:"In glycolysis, which enzyme catalyses the conversion of PEP to pyruvate?",opts:["Phosphoglycerate kinase","Enolase","Pyruvate kinase","Phosphoglycerate mutase"],ans:2,exp:"Pyruvate kinase catalyses the final step of glycolysis: transfer of the phosphate group from PEP to ADP, generating pyruvate and ATP. This is an irreversible, highly regulated substrate-level phosphorylation step."},
  {topic:"Biochemistry",q:"Allosteric regulation of an enzyme involves:",opts:["Covalent modification of the active site residues","Binding of a regulatory molecule at a site other than the active site, altering enzyme activity","Competitive inhibition at the substrate-binding site","Irreversible inactivation by a suicide inhibitor"],ans:1,exp:"Allosteric regulation occurs when a ligand binds at an allosteric site distinct from the active site and induces conformational changes that alter catalytic activity, exemplified by ATCase regulation by CTP."},
  {topic:"Biochemistry",q:"The primary structure of a protein refers to:",opts:["The alpha-helices and beta-sheets formed by hydrogen bonding","The overall 3D folding of the polypeptide chain","The linear sequence of amino acids linked by peptide bonds","The quaternary arrangement of multiple polypeptide subunits"],ans:2,exp:"Primary structure is the linear sequence of amino acids covalently linked by peptide bonds. This sequence is encoded by the gene and determines all higher-order structures."},
  {topic:"Biochemistry",q:"Which vitamin serves as the precursor to the coenzyme NAD+?",opts:["Riboflavin (B2)","Niacin (B3)","Pyridoxal phosphate (B6)","Thiamine (B1)"],ans:1,exp:"Niacin (vitamin B3) is the precursor of NAD+ and NADP+. These coenzymes are essential hydride carriers in oxidative metabolism."},
  {topic:"Biochemistry",q:"What type of bond connects nucleotides in a DNA strand?",opts:["Hydrogen bond","N-glycosidic bond","3 to 5 prime phosphodiester bond","Ester bond between two deoxyribose sugars"],ans:2,exp:"Adjacent nucleotides in a polynucleotide chain are linked by phosphodiester bonds between the 3 prime OH of one sugar and the 5 prime phosphate of the next, forming the sugar-phosphate backbone."},
  {topic:"Biochemistry",q:"Fatty acid beta-oxidation occurs in which cellular compartment in eukaryotes?",opts:["Cytoplasm","Smooth endoplasmic reticulum","Mitochondrial matrix","Peroxisome exclusively"],ans:2,exp:"Beta-oxidation of most fatty acids takes place in the mitochondrial matrix. Long-chain fatty acids must be activated to acyl-CoA and transported via the carnitine shuttle. Very long-chain fatty acids are initially shortened in peroxisomes."},
  {topic:"Biochemistry",q:"The rate-limiting step of the urea cycle is catalysed by:",opts:["Arginase","Argininosuccinate synthetase","Carbamoyl phosphate synthetase I (CPS I)","Ornithine transcarbamoylase"],ans:2,exp:"CPS I catalyses the first committed step: condensation of NH3, CO2, and 2 ATP to form carbamoyl phosphate in the mitochondrial matrix. It is activated by N-acetylglutamate and is the rate-limiting step."},
  {topic:"Biochemistry",q:"Signal transduction via receptor tyrosine kinases (RTKs) typically involves:",opts:["Activation of adenylyl cyclase and production of cAMP","Ligand-induced dimerisation, autophosphorylation of tyrosine residues, and downstream kinase cascades","Direct entry of the ligand into the nucleus to act as a transcription factor","Opening of ion channels in the plasma membrane"],ans:1,exp:"RTK activation involves ligand binding inducing receptor dimerisation, trans-autophosphorylation of intracellular tyrosine residues, and docking of SH2-domain proteins that activate RAS/MAPK and PI3K/Akt pathways."},
  {topic:"Biochemistry",q:"Which enzyme catalyses the committed step of cholesterol biosynthesis?",opts:["Acetyl-CoA carboxylase","Squalene synthase","HMG-CoA reductase","Farnesyl pyrophosphate synthase"],ans:2,exp:"HMG-CoA reductase catalyses the reduction of HMG-CoA to mevalonate, the committed rate-limiting step of the cholesterol synthesis pathway. It is the target of statin drugs."},
  {topic:"Biochemistry",q:"Molecular chaperones (e.g., Hsp70) function by:",opts:["Providing the amino acid sequence information for correct folding","Preventing aggregation of unfolded polypeptides and assisting in correct folding","Cleaving misfolded proteins for degradation","Catalysing the formation of disulfide bonds"],ans:1,exp:"Hsp70 and Hsp40 co-chaperones bind exposed hydrophobic regions of unfolded polypeptides, preventing their aggregation. ATP-driven conformational cycling allows substrates to fold correctly or be handed to chaperonins."},
  {topic:"Biochemistry",q:"Insulin promotes glucose uptake in muscle and adipose tissue by:",opts:["Activating glucagon secretion from the pancreas","Triggering translocation of GLUT4 transporters to the plasma membrane","Directly activating glycogen phosphorylase","Inhibiting glucose-6-phosphatase in the liver"],ans:1,exp:"Insulin binding to its receptor tyrosine kinase activates the PI3K/Akt pathway, leading to translocation of GLUT4 storage vesicles to the cell surface, dramatically increasing glucose uptake."},
  {topic:"Biochemistry",q:"The Bohr effect describes:",opts:["The cooperative binding of oxygen to haemoglobin","The decreased oxygen affinity of haemoglobin at lower pH (higher CO2 and H+)","The effect of 2,3-BPG on carbon dioxide transport","The sigmoidal kinetics of allosteric enzymes"],ans:1,exp:"The Bohr effect: in actively metabolising tissues, elevated CO2 and H+ promote protonation of His146 on the beta-chains of haemoglobin, stabilising the T (deoxy) state and reducing O2 affinity, facilitating O2 release to tissues."},
  {topic:"Biochemistry",q:"Which lipids are the main structural components of cellular membranes?",opts:["Triglycerides and cholesterol esters","Glycerophospholipids and sphingolipids","Waxes and steroids","Free fatty acids and diacylglycerols"],ans:1,exp:"Cellular membranes are primarily composed of amphipathic glycerophospholipids and sphingolipids arranged in a bilayer. Cholesterol is also abundant in eukaryotic membranes, modulating fluidity."},
  {topic:"Biochemistry",q:"During DNA replication, which enzyme synthesises short RNA primers?",opts:["DNA polymerase I","DNA polymerase III","Primase","Helicase"],ans:2,exp:"Primase is a specialised RNA polymerase that synthesises short RNA primers that provide the 3 prime OH required by DNA polymerase to begin chain extension."},
  {topic:"Biochemistry",q:"The second messenger cAMP activates which kinase?",opts:["Protein kinase C (PKC)","Calcium/calmodulin-dependent kinase (CaMK)","Protein kinase A (PKA)","MAP kinase (MAPK)"],ans:2,exp:"cAMP produced by adenylyl cyclase binds the regulatory subunits of PKA, releasing the catalytic subunits. Active PKA phosphorylates target proteins on serine/threonine residues to mediate cellular responses."},
  {topic:"Biochemistry",q:"Which process marks a protein for proteasomal degradation?",opts:["SUMOylation","Ubiquitination (polyubiquitylation via K48 linkage)","Neddylation","Acetylation"],ans:1,exp:"Polyubiquitin chains linked through K48 of ubiquitin act as a degradation signal recognised by the 26S proteasome. The process involves E1 activating, E2 conjugating, and E3 ligase enzymes in a hierarchical cascade."},
  {topic:"Biochemistry",q:"In the pentose phosphate pathway (PPP), the main products of the oxidative phase are:",opts:["ATP, NADH, and lactate","NADPH, CO2, and ribose-5-phosphate","FADH2 and acetyl-CoA","GTP and oxaloacetate"],ans:1,exp:"The oxidative phase of the PPP yields 2 NADPH per glucose-6-phosphate, releasing CO2. Ribose-5-phosphate for nucleotide synthesis is generated in the subsequent non-oxidative phase."},
  {topic:"Biochemistry",q:"Which is the key regulatory enzyme of glycogen synthesis?",opts:["Glycogen phosphorylase","Phosphoglucomutase","Glycogen synthase","UDP-glucose pyrophosphorylase"],ans:2,exp:"Glycogen synthase catalyses the rate-limiting step of glycogen synthesis. It is activated by insulin via dephosphorylation and inhibited by glucagon and epinephrine."}
];

var current = 0;
var answers = new Array(QUESTIONS.length).fill(null);

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('btn-start').addEventListener('click', startQuiz);
  document.getElementById('btn-prev').addEventListener('click', function() { goTo(current - 1); });
  document.getElementById('btn-next').addEventListener('click', nextOrFinish);
  document.getElementById('btn-retry').addEventListener('click', startQuiz);
  document.getElementById('btn-home').addEventListener('click', goToStart);
});

function startQuiz() {
  current = 0;
  answers = new Array(QUESTIONS.length).fill(null);
  showScreen('quiz-screen');
  document.getElementById('quiz-header').style.display = 'flex';
  renderQuestion();
}

function goToStart() {
  showScreen('start-screen');
  document.getElementById('quiz-header').style.display = 'none';
}

function showScreen(id) {
  var screens = document.querySelectorAll('.screen');
  for (var i = 0; i < screens.length; i++) {
    screens[i].classList.remove('active');
  }
  document.getElementById(id).classList.add('active');
}

function renderQuestion() {
  var q = QUESTIONS[current];
  document.getElementById('q-tag').textContent = q.topic;
  document.getElementById('q-num').textContent = 'Question ' + (current + 1) + ' of ' + QUESTIONS.length;
  document.getElementById('q-text').textContent = q.q;

  var optsEl = document.getElementById('options');
  optsEl.innerHTML = '';
  var letters = ['A', 'B', 'C', 'D'];

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
  btnNext.textContent = (current < QUESTIONS.length - 1) ? 'Next' : 'See Results';

  document.getElementById('btn-prev').disabled = (current === 0);

  if (answers[current] !== null) {
    applyAnswerState(answers[current]);
  }

  updateProgress();
}

function handleOptionClick(e) {
  var btn = e.currentTarget;
  var idx = parseInt(btn.getAttribute('data-index'), 10);
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
    if (i === q.ans) {
      opts[i].classList.add('correct');
    } else if (i === chosen && chosen !== q.ans) {
      opts[i].classList.add('wrong');
    }
  }
  var expEl = document.getElementById('explanation');
  var resultText = (chosen === q.ans) ? 'Correct!' : 'Incorrect.';
  expEl.innerHTML = '<strong>' + resultText + '</strong> ' + q.exp;
  expEl.classList.add('show');
  document.getElementById('btn-next').classList.add('show');
}

function nextOrFinish() {
  if (current < QUESTIONS.length - 1) {
    current++;
    renderQuestion();
  } else {
    showResults();
  }
}

function goTo(n) {
  if (n < 0 || n >= QUESTIONS.length) return;
  current = n;
  renderQuestion();
}

function updateProgress() {
  var answered = 0;
  for (var i = 0; i < answers.length; i++) {
    if (answers[i] !== null) answered++;
  }
  var pct = (answered / QUESTIONS.length) * 100;
  document.getElementById('progress-bar').style.width = pct + '%';
  document.getElementById('progress-label').textContent = answered + ' / ' + QUESTIONS.length;
}

function showResults() {
  showScreen('result-screen');
  document.getElementById('quiz-header').style.display = 'none';

  var correct = 0, wrong = 0, skip = 0;
  for (var i = 0; i < QUESTIONS.length; i++) {
    if (answers[i] === null) {
      skip++;
    } else if (answers[i] === QUESTIONS[i].ans) {
      correct++;
    } else {
      wrong++;
    }
  }

  var pct = Math.round((correct / QUESTIONS.length) * 100);
  document.getElementById('score-pct').textContent = pct + '%';
  document.getElementById('res-correct').textContent = correct;
  document.getElementById('res-wrong').textContent = wrong;
  document.getElementById('res-skip').textContent = skip;

  var title = pct >= 70 ? 'Well Done!' : pct >= 50 ? 'Good Effort' : 'Keep Practising';
  document.getElementById('result-title').textContent = title;

  var verdict;
  if (pct >= 80) { verdict = 'Outstanding - you are well prepared for Gottingen.'; }
  else if (pct >= 65) { verdict = 'Solid performance. Review your weak areas and you will be ready.'; }
  else if (pct >= 50) { verdict = 'A decent start. Focus on the topics where you missed questions.'; }
  else { verdict = 'Do not worry - use the explanations to guide your revision.'; }
  document.getElementById('verdict').textContent = verdict;

  var circ = 2 * Math.PI * 65;
  var offset = circ * (1 - pct / 100);
  setTimeout(function() {
    var ring = document.getElementById('ring-fill');
    ring.style.strokeDashoffset = offset;
    ring.style.stroke = pct >= 70 ? 'var(--accent2)' : pct >= 50 ? 'var(--warn)' : 'var(--danger)';
  }, 100);

  var topics = [];
  for (var i = 0; i < QUESTIONS.length; i++) {
    if (topics.indexOf(QUESTIONS[i].topic) === -1) topics.push(QUESTIONS[i].topic);
  }

  var html = '<h3>Performance by Topic</h3>';
  for (var t = 0; t < topics.length; t++) {
    var topicName = topics[t];
    var tot = 0, cor = 0;
    for (var i = 0; i < QUESTIONS.length; i++) {
      if (QUESTIONS[i].topic === topicName) {
        tot++;
        if (answers[i] === QUESTIONS[i].ans) cor++;
      }
    }
    var frac = tot > 0 ? cor / tot : 0;
    var barColor = frac >= 0.7 ? 'var(--accent2)' : frac >= 0.5 ? 'var(--warn)' : 'var(--danger)';
    html += '<div class="tb-row"><div class="tb-name">' + topicName + '</div><div class="tb-bar-outer"><div class="tb-bar-inner" style="width:' + (frac * 100) + '%;background:' + barColor + '"></div></div><div class="tb-frac">' + cor + '/' + tot + '</div></div>';
  }
  document.getElementById('topic-breakdown').innerHTML = html;
}
