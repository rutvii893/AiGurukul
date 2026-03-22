/**
 * data.js — Knowledge Graph data for AI Gurukul
 * Provides nodes and edges for the interactive Knowledge Graph Explorer.
 */

export const graphNodes = [
  // Domains
  { id: 'philosophy', label: 'Philosophy', type: 'domain', description: 'The study of fundamental questions about existence, knowledge, values, reason, mind, and language.', period: 'Ancient – Present', contributions: 'Foundation of all Indian intellectual traditions including Vedanta, Nyaya, and Samkhya.' },
  { id: 'medicine', label: 'Medicine', type: 'domain', description: 'The science and practice of healing — Ayurveda is the oldest codified medical system in the world.', period: '~1500 BCE – Present', contributions: 'Surgical techniques (Sushruta Samhita), herbal pharmacology, three-dosha framework.' },
  { id: 'statecraft', label: 'Statecraft', type: 'domain', description: 'The art and science of governing — political theory, economics, military strategy, and diplomacy.', period: '~400 BCE – Present', contributions: 'Arthashastra — the most comprehensive ancient political treatise.' },
  { id: 'ethics', label: 'Ethics & Dharma', type: 'domain', description: 'The study of moral principles and right action — Dharma (duty), Karma (action), and Ahimsa (non-violence).', period: 'Vedic Age – Present', contributions: 'The Bhagavad Gita\'s Karma Yoga, Jain Ahimsa, Buddhist Eightfold Path.' },
  { id: 'mathematics', label: 'Mathematics', type: 'domain', description: 'Ancient Indian mathematics gave the world the decimal system, zero, algebra, and trigonometry.', period: '~800 BCE – 1200 CE', contributions: 'Zero, infinite series, trigonometric functions (Aryabhata), Pythagorean triples (Baudhayana).' },
  { id: 'linguistics', label: 'Linguistics', type: 'domain', description: 'The scientific study of language — Panini\'s Ashtadhyayi is the oldest formal grammar in human history.', period: '~400 BCE', contributions: 'Panini\'s Ashtadhyayi — 3,959 rules defining Sanskrit grammar with algebraic precision.' },

  // Texts
  { id: 'gita', label: 'Bhagavad Gita', type: 'text', description: 'A 700-verse dialogue between Arjuna and Krishna on the battlefield of Kurukshetra. Covers duty, action, devotion, and the nature of the self.', period: '~500 BCE – 200 BCE', contributions: '18 paths to liberation. Foundation of Vedanta philosophy. Quoted by Gandhi, Einstein, and Oppenheimer.' },
  { id: 'arthashastra', label: 'Arthashastra', type: 'text', description: 'Chanakya\'s complete treatise on statecraft, economics, military strategy, law, and governance. Lost for 1000 years, rediscovered in 1905.', period: '~300 BCE', contributions: '15 books, 6000 sutras. World\'s first systematic political science document.' },
  { id: 'panchatantra', label: 'Panchatantra', type: 'text', description: 'Five books of animal fables teaching practical wisdom — the world\'s most widely translated secular text after the Bible.', period: '~300 BCE', contributions: 'Translated into 50+ languages. Foundation of Aesop\'s Fables and Arabian Nights.' },
  { id: 'charaka', label: 'Charaka Samhita', type: 'text', description: 'The foundational text of Ayurvedic medicine — covers diagnosis, therapeutics, pharmacology, and medical ethics.', period: '~100 BCE – 100 CE', contributions: 'First systematic medical text. 8 branches of medicine. Clinical trial methodology.' },
  { id: 'sushruta', label: 'Sushruta Samhita', type: 'text', description: 'The oldest surgical text in the world — describes 300+ surgical procedures and 120+ surgical instruments.', period: '~600 BCE', contributions: 'Rhinoplasty, cataract surgery, cesarean section — 2600 years before modern medicine.' },
  { id: 'upanishads', label: 'Upanishads', type: 'text', description: 'The philosophical core of Hinduism — 108 texts exploring the nature of Brahman (ultimate reality) and Atman (self).', period: '~800 BCE – 200 BCE', contributions: 'Foundation of Vedanta. Concept of "Tat tvam asi" — You are That. Influenced Schopenhauer and Jung.' },
  { id: 'yoga_sutras', label: 'Yoga Sutras', type: 'text', description: 'Patanjali\'s 196 aphorisms defining the eight limbs of yoga and the nature of the mind.', period: '~400 CE', contributions: 'Foundation of all modern yoga. Psychological model of consciousness 1500 years before Freud.' },

  // Scholars
  { id: 'chanakya', label: 'Chanakya', type: 'scholar', description: 'Prime minister of the Mauryan Empire, professor at Taxila University, author of the Arthashastra. The original political realist.', period: '350 – 275 BCE', contributions: 'Founded the Maurya Empire (the first pan-Indian state). Arthashastra. "Chanakya Niti" — maxims still used in management schools.' },
  { id: 'aryabhata', label: 'Aryabhata', type: 'scholar', description: 'India\'s first great mathematician-astronomer. Proposed heliocentrism, calculated π accurately, and invented the place-value system.', period: '476 – 550 CE', contributions: 'π = 3.1416. Earth rotates on its axis. Sine and cosine tables. Algebraic equations.' },
  { id: 'patanjali', label: 'Patanjali', type: 'scholar', description: 'Compiler of the Yoga Sutras — the foundational text of yoga philosophy. Also authored Mahabhashya, the commentary on Panini\'s grammar.', period: '~2nd century BCE', contributions: 'Yoga Sutras. Ashtanga yoga. Eight limbs framework.' },
  { id: 'nagarjuna', label: 'Nagarjuna', type: 'scholar', description: 'Founder of the Madhyamaka school of Buddhist philosophy. The concept of Shunyata (emptiness) is his central contribution.', period: '~150 – 250 CE', contributions: 'Madhyamaka philosophy. Shunyata. Influenced Tibetan Buddhism, Zen, and modern quantum physicists.' },
  { id: 'panini', label: 'Panini', type: 'scholar', description: 'Linguist and grammarian who composed Ashtadhyayi — the world\'s first formal grammar. Influenced the development of computer science.', period: '~400 BCE', contributions: 'Ashtadhyayi — 3959 rules. First generative grammar. Influenced Chomsky and formal language theory.' },

  // Practices
  { id: 'meditation', label: 'Meditation', type: 'practice', description: 'Dhyana — the practice of focused attention and mindfulness. Foundation of both Hindu and Buddhist traditions.', period: 'Vedic Age – Present', contributions: 'Proven neurological benefits. 1 billion+ practitioners worldwide. Foundation of MBSR therapy.' },
  { id: 'yoga_practice', label: 'Yoga', type: 'practice', description: 'A system of physical postures (Asanas), breath control (Pranayama), and meditation for health and spiritual development.', period: '~5000 BCE – Present', contributions: '300 million global practitioners. WHO-endorsed for mental health. $80bn global industry.' },
  { id: 'ayurveda_practice', label: 'Ayurvedic Medicine', type: 'practice', description: 'The 5000-year-old Indian system of holistic medicine based on balancing Vata, Pitta, and Kapha doshas.', period: '~1500 BCE – Present', contributions: 'WHO-recognized traditional medicine. 600mn+ users in South Asia. Modern integrative medicine.' },
  { id: 'nonviolence', label: 'Ahimsa', type: 'practice', description: 'The principle of non-violence towards all living beings — central to Jainism, Buddhism, and Gandhi\'s independence movement.', period: 'Vedic Age – Present', contributions: 'Gandhi\'s Satyagraha. Martin Luther King Jr\'s civil rights movement. Foundation of animal rights ethics.' },
];

export const graphEdges = [
  // Philosophy connections
  { source: 'philosophy', target: 'gita', label: 'expressed in' },
  { source: 'philosophy', target: 'upanishads', label: 'rooted in' },
  { source: 'philosophy', target: 'yoga_sutras', label: 'systematised by' },
  { source: 'philosophy', target: 'nagarjuna', label: 'advanced by' },

  // Ethics connections
  { source: 'ethics', target: 'gita', label: 'defined in' },
  { source: 'ethics', target: 'nonviolence', label: 'expressed as' },
  { source: 'ethics', target: 'panchatantra', label: 'illustrated by' },

  // Medicine connections
  { source: 'medicine', target: 'charaka', label: 'codified in' },
  { source: 'medicine', target: 'sushruta', label: 'codified in' },
  { source: 'medicine', target: 'ayurveda_practice', label: 'applied as' },

  // Statecraft connections
  { source: 'statecraft', target: 'arthashastra', label: 'defined in' },
  { source: 'statecraft', target: 'chanakya', label: 'mastered by' },

  // Linguistics connections
  { source: 'linguistics', target: 'panini', label: 'founded by' },

  // Mathematics connections
  { source: 'mathematics', target: 'aryabhata', label: 'advanced by' },

  // Scholar – text connections
  { source: 'chanakya', target: 'arthashastra', label: 'authored' },
  { source: 'patanjali', target: 'yoga_sutras', label: 'authored' },
  { source: 'panini', target: 'linguistics', label: 'founded' },

  // Practice connections
  { source: 'yoga_sutras', target: 'yoga_practice', label: 'defines' },
  { source: 'yoga_sutras', target: 'meditation', label: 'includes' },
  { source: 'meditation', target: 'philosophy', label: 'leads to' },
  { source: 'nonviolence', target: 'ethics', label: 'expresses' },

  // Cross-domain
  { source: 'gita', target: 'ethics', label: 'shapes' },
  { source: 'upanishads', target: 'philosophy', label: 'forms' },
  { source: 'panchatantra', target: 'statecraft', label: 'illustrates' },
  { source: 'charaka', target: 'ayurveda_practice', label: 'guides' },
  { source: 'aryabhata', target: 'mathematics', label: 'advanced' },
  { source: 'nagarjuna', target: 'meditation', label: 'deepened' },
];
