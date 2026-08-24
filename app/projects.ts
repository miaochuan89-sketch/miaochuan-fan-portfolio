export const projects = [
  { slug: 'real-time-environment', number: '01', mark: 'RT', title: 'Real-time Environment', discipline: 'Unreal · Worldbuilding', summary: 'A cinematic environment built from spatial narrative, modular systems and real-time light.' },
  { slug: 'ucla-spatial-research', number: '02', mark: 'UX', title: 'UCLA Spatial Research', discipline: 'Research · Experience', summary: 'Design research translated into an inhabitable system, sequence and atmosphere.' },
  { slug: 'modular-energy-landscape', number: '03', mark: 'ME', title: 'Modular Energy Landscape', discipline: 'Architecture · Systems', summary: 'Infrastructure reframed as a rule-based kit for architecture and digital worldbuilding.' },
  { slug: 'agence-ter', number: '04', mark: 'AT', title: 'Agence TER', discipline: 'Professional Work', summary: 'Selected professional contributions across landscape, modeling and visual development.' },
  { slug: 'ai-visual-development', number: '05', mark: 'AI', title: 'AI Visual Development', discipline: 'Workflow · Narrative', summary: 'Controlled image workflows connecting spatial models, iteration and human design decisions.' },
  { slug: 'urban-narrative', number: '06', mark: 'UN', title: 'Urban Narrative', discipline: 'Project placeholder', summary: 'Reserved for a future project exploring urban sequence, storytelling and public space.' },
  { slug: 'material-study', number: '07', mark: 'MS', title: 'Material Study', discipline: 'Project placeholder', summary: 'Reserved for a future project focused on material systems, atmosphere and representation.' },
  { slug: 'adaptive-housing', number: '08', mark: 'AH', title: 'Adaptive Housing', discipline: 'Project placeholder', summary: 'Reserved for a future housing project connecting adaptable systems with everyday life.' },
  { slug: 'experimental-archive', number: '09', mark: 'EA', title: 'Experimental Archive', discipline: 'Project placeholder', summary: 'Reserved for experiments, process work and emerging spatial media.' },
] as const;

export type Project = (typeof projects)[number];
