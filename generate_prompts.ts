import fs from 'fs';

const imagePromptsBase = [
  {
    title: "The {Role} Portrait",
    description: "Profile photos, personal branding, editorial content. High-converting image format.",
    template: `A [AGE]-year-old [ETHNICITY] {Role} in a [COLOUR] {Garment},
[EXPRESSION].
Photographed in their glass-walled modern office at [TIME].
Warm amber key light from camera right at 45 degrees, cool blue fill from the window behind,
soft rim lighting separating shoulders from the background.
Tight medium shot, shot on Hasselblad X2D, 85mm lens at f/1.8, shallow depth of field,
ultra-sharp focus on the eyes, natural skin texture with visible pores.
{Style}
--ar 4:5 --v 7`,
    tags: ["Portraits", "Professional", "Midjourney"],
    rules: ["Front-load the subject", "Use real photography vocabulary", "Specify lighting direction"]
  },
  {
    title: "The {Action} Hero",
    description: "Cinematic shot focused on action and environment.",
    template: `A [AGE]-year-old [ETHNICITY] {Action}, wearing [DETAILED OUTFIT with texture],
standing at the edge of a rooftop at golden hour with [CITY] skyline behind them.
Expression: calm, powerful, contemplative.
Warm amber backlight wrapping around the silhouette, soft natural fill on the face from a bounce board.
{Style}
Shot on Phase One IQ4, 85mm f/1.4, shallow depth of field.
--ar 3:4 --v 7 --stylize 200`,
    tags: ["Portraits", "Hero", "Cinematic"]
  },
  {
    title: "Luxury {Item} Product Shot",
    description: "E-commerce hero shots, luxury listings, ad creatives.",
    template: `A hero product photograph of a luxury {Item} 
with a [DETAIL], resting on polished Carrara white marble.
Primary colour: [PRIMARY COLOR HEX] for the {Item}.
Metallic accent [ACCENT COLOR HEX].
Camera: 85mm macro lens at f/2.8, 30-degree angled overhead perspective.
Lighting: single soft key light from upper left at 45°, subtle bounce card on the right fills shadow.
Shallow reflection across the marble surface. {Style}
No props or decorative elements. 4K photorealistic output, --ar 1:1.`,
    tags: ["Product", "E-commerce", "FLUX 2"]
  },
  {
    title: "The {Theme} Architecture",
    description: "Interior design and architectural visualization.",
    template: `A wide-angle interior shot of a {Theme} living space.
Featuring {AccentFurniture} in the foreground, floor-to-ceiling windows revealing a [LANDSCAPE] vista.
Natural light flooding in at sweeping angles, creating dramatic shadows.
Shot on 35mm lens, f/8 for maximum depth of field, architectural photography.
{Style}
--ar 16:9 --v 7`,
    tags: ["Architecture", "Interior Design", "Cinematic"]
  },
  {
    title: "{Food} flat lay",
    description: "Boutique food photography for menus and social media.",
    template: `An overhead flat-lay photograph of {Food} on a rustic wooden table.
Surrounded by scattered [INGREDIENTS] and a [DRINK].
Soft window light from the left side, diffused by sheer curtains.
Shot with a 50mm lens at f/5.6. High color contrast, extremely detailed, appetizing.
{Style}
--ar 4:5 --v 6.0`,
    tags: ["Food Imagery", "Photography", "Social Media"]
  }
];

const imageRoles = ["Founder", "Creator", "Developer", "Designer", "CEO", "Strategist", "Artist", "Writer", "Architect", "Chef"];
const imageActions = ["Runner", "Explorer", "Hiker", "Climber", "Skater", "Dancer", "Boxer", "Yogi", "Surfer", "Pilot"];
const imageItems = ["Perfume", "Watch", "Handbag", "Sneaker", "Headphone", "Wallet", "Camera", "Smartphone", "Serum", "Lipstick"];
const imageThemes = ["Minimalist", "Cyberpunk", "Mid-Century Modern", "Bohemian", "Industrial", "Scandinavian", "Art Deco", "Wabi-Sabi", "Brutalist", "Gothic"];
const imageFoods = ["Artisan Pizza", "Sushi Platter", "Charcuterie Board", "Craft Burger", "Ramen Bowl", "Tapas", "Espresso", "Gelato", "Avocado Toast", "Acai Bowl"];

const imageStylesMap = [
  "Contemporary editorial grade, warm cinematic tone.",
  "High fashion hyper-realistic aesthetic, muted tones.",
  "Neon-lit, vaporwave inspired, high contrast.",
  "Monochromatic with deep shadows, intense contrast.",
  "Airy, bright, and delicate pastel coloring.",
  "Gritty documentarian style, desaturated colors.",
  "Hyper-saturated commercial pop-art style.",
  "Moody and dark atmospheric grading.",
  "Vintage 90s film aesthetic, slight grain.",
  "Ethereal and dreamy, soft focus edges."
];

const peTemplates = [
  {
    title: "The {Task} CRAFT Framework",
    description: "Universally applicable framework tailored for {Task}.",
    template: `CONTEXT: [Insert current project context]
ROLE: Act as a Senior {Role} with 15 years of industry experience.
ACTION: {Task}
FORMAT: [Insert preferred output structure, e.g. bulleted list, table]
TONE: {Tone}`,
    tags: ["Framework", "Universal"]
  },
  {
    title: "{Role} Strategy Builder",
    description: "Generate a comprehensive strategy from the perspective of a {Role}.",
    template: `CONTEXT: We are launching a new initiative and need strategic direction.
ROLE: {Role}
ACTION: Outline a step-by-step strategy for [Goal].
Include identifying risks and proposing mitigation tactics.
FORMAT: Markdown document with headers.
TONE: {Tone}`,
    tags: ["Strategy", "Planning"]
  },
  {
    title: "{Role} Problem Solver",
    description: "Diagnose and resolve issues efficiently as a {Role}.",
    template: `CONTEXT: We are facing [Issue/Problem Description] and need absolute clarity on how to fix it.
ROLE: Expert {Role}
ACTION: Break down the root cause of [Issue], then formulate a 3-step solution to resolve it.
FORMAT: Root cause analysis followed by an action plan table.
TONE: {Tone}`,
    tags: ["Problem Solving", "Analysis"]
  },
  {
    title: "The {Task} Generator",
    description: "Create rapid drafts for {Task}.",
    template: `CONTEXT: We have tight deadlines and require immediate output for [Topic].
ROLE: {Role}
ACTION: Generate a draft for {Task} based on the following parameters: [Insert parameters].
FORMAT: Clear, concise paragraphs.
TONE: {Tone}`,
    tags: ["Drafting", "Fast Output"]
  },
  {
    title: "{Role} Evaluator",
    description: "Review and critique work with the eye of a {Role}.",
    template: `CONTEXT: We need feedback on [Current Work/Document].
ROLE: {Role}
ACTION: Review the provided material and provide constructive criticism. Highlight 3 strengths and 3 areas for improvement.
FORMAT: Constructive feedback list.
TONE: {Tone}`,
    tags: ["Review", "Critique"]
  }
];

const peRoles = ["Copywriter", "Product Manager", "Data Analyst", "UX Researcher", "Brand Strategist", "SEO Expert", "Sales Director", "Financial Advisor", "HR Consultant", "Legal Expert"];
const peTasks = ["Draft a 3-part email sequence", "Write a press release", "Create a product roadmap", "Design a user interview script", "Develop a brand identity guide", "Plan a content calendar", "Formulate a sales pitch", "Analyze market trends", "Write a job description", "Draft compliance guidelines"];
const peTones = ["Direct, professional, warm.", "Authoritative, analytical, precise.", "Empathetic, engaging, conversational.", "Bold, persuasive, actionable.", "Academic, rigorous, detailed.", "Concise, objective, neutral.", "Inspirational, visionary, uplifting.", "Witty, creative, punchy.", "Formal, respectful, diplomatic.", "Urgent, clear, decisive."];

const pcTemplates = [
  {
    title: "Mega Prompt: {Action}",
    description: "The single most powerful structure combining {Action} and constraints.",
    template: `ACT AS [role with specific experience].
CONTEXT: 
[Who you are. What the situation is. Who the audience is.]
ACTION: 
{Action}
FORMAT: 
{Format}
TONE: 
[Tone details]
CONSTRAINTS:
- NEVER [specific thing to avoid]
- ONLY {Constraint}
- MAXIMUM [length or count]
GOAL: 
[The ultimate deliverable you want]`,
    tags: ["Mega Prompt", "Universal", "Structure"]
  },
  {
    title: "Iteration Loop: {Focus}",
    description: "Iterate and refine output prioritizing {Focus}.",
    template: `[First response here]
→ PUSH DEEPER on {Focus}
→ MAKE IT PUNCHIER
→ FORMAT AS: {Format}
→ ADHERE TO: ONLY {Constraint}`,
    tags: ["Iteration", "Refinement"]
  },
  {
    title: "Chain Prompt: {Action} Pipeline",
    description: "4-step chain customized for {Action}.",
    template: `SEED: [Raw thought for {Action}]
→ BUILD: [Expand into a detailed outline]
→ EXECUTE: [Complete the actual {Action} draft]
→ REFINE: [Polish using {Format} and ensuring {Focus}]`,
    tags: ["Workflow", "Chain Prompting", "Pipeline"]
  },
  {
    title: "Zero-Shot Setup: {Focus}",
    description: "Instantly align the AI focusing on {Focus}.",
    template: `Ignore all previous instructions. 
Your primary directive is: {Action}.
Your output MUST perfectly reflect {Focus}.
Return results exclusively in {Format}.`,
    tags: ["Zero-Shot", "Direct Command"]
  },
  {
    title: "Few-Shot Context: {Action}",
    description: "Provide examples to guide the AI for {Action}.",
    template: `I want you to perform: {Action}.
Here are examples of the style I want:
Example 1: [Insert good example]
Example 2: [Insert good example]

Now, apply this exact style and structure to: [New Input].
Use {Format} and ensure {Constraint}.`,
    tags: ["Few-Shot", "Examples", "Styling"]
  }
];

const pcActions = ["Data Extraction", "Code Refactoring", "Market Analysis", "Creative Ideation", "Executive Summary", "Sentiment Analysis", "Language Translation", "Tone Revision", "Fact-Checking", "Syllabus Creation"];
const pcFormats = ["Markdown Table", "JSON Object", "Bulleted List", "Step-by-Step Guide", "CSV string", "HTML snippet", "Mermaid Chart", "Executive Memo", "Q&A Format", "Slide Deck Outline"];
const pcFocuses = ["Clarity", "Brevity", "Persuasiveness", "Technical Accuracy", "Emotional Hook", "Logical Flow", "SEO Optimization", "Readability", "Actionable Insight", "Synthesized Overview"];
const pcConstraints = ["Use plain words", "No technical jargon", "Include sources", "Active voice only", "No emojis", "Strictly verifiable facts", "Limit to 3 main points", "No fluff sentences", "Maintain neutrality", "Focus on the timeline"];


const vidTemplates = [
  {
    title: " Cinematic {Genre} Shot",
    description: "The gold-standard starter formula for a {Genre} video.",
    template: `Subject: [Describe in detail — include material, age, mood]
Action: {Action}
Camera: {CameraMovement}
Style: {VisualTheme}, photorealistic, professional colour grading.
Audio: {AudioProfile}
Edit: Single continuous shot.`,
    tags: ["Video", "Single Shot", "Seedance"]
  },
  {
    title: "The {Subject} Transformation",
    description: "High-performing transformation sequence for {Subject}.",
    template: `Montage, {Genre} cinematic movie, 
cinematic lighting, photorealistic, 35mm film quality.

Setting: [DESCRIBE LOCATION]

Shot 1 (0–2s): Medium close-up on {Subject}. [Initial state].
Shot 2 (2–5s): Wide shot. {Action}.
Shot 3 (5–8s): {CameraMovement}. The {Subject} begins their transformation.
Shot 4 (8–11s): {CameraMovement}. [Transformation climax].
Shot 5 (11–15s): Medium shot. [Resolution state].

Style: {VisualTheme}.`,
    tags: ["Montage", "Transformation", "Action"]
  },
  {
    title: "{Genre} Viral Timeline",
    description: "Structured timeline perfect for pacing {Genre} videos.",
    template: `VISUAL STYLE: {VisualTheme}. {Genre} aesthetic.
CHARACTERS: {Subject} mapping to [SPECIFIC DESCRIPTIONS].
ENVIRONMENT: [Detailed setting].
EMOTIONAL TARGET: [Starting mood] to [Ending mood].
TIMELINE:
00:00.0–00:02.0: HOOK — {Action} starts. 
Camera: {CameraMovement}. Audio: {AudioProfile}.
00:02.0–00:10.0: BUILDUP — [Main choreo].
00:10.0–END: PAYOFF — [Meaning shift].`,
    tags: ["Timeline", "Viral", "Pacing"]
  },
  {
    title: "Drone Flythrough: {Subject}",
    description: "Expansive environmental storytelling.",
    template: `Drone FPV shot flying through [ENVIRONMENT].
Subject: {Subject} situated in the environment, {Action}.
Camera: Continuous forward motion, soaring {CameraMovement}.
Style: {VisualTheme}, breathtaking scale, 8K, extreme detail.
Audio: {AudioProfile}`,
    tags: ["Drone", "Environment", "Motion"]
  },
  {
    title: "Macro Detail: {Subject}",
    description: "Extreme close-up conveying texture and intimacy.",
    template: `Extreme macro shot of {Subject}.
Action: Slow-motion {Action}.
Camera: {CameraMovement}, extremely shallow depth of field, focused on [SPECIFIC DETAIL].
Style: {VisualTheme}, high contrast, tactile textures.
Audio: {AudioProfile}`,
    tags: ["Macro", "Details", "Slow-Mo"]
  }
];

const vidGenres = ["Sci-Fi", "Fantasy", "Cyberpunk", "Historical Drama", "Modern Action", "Horror", "Documentary", "Romance", "Surreal Thriller", "Western"];
const vidSubjects = ["A lone warrior", "An ancient artifact", "A futuristic vehicle", "A neon-lit cityscape", "A colossal monster", "A delicate blooming flower", "An intricate clockwork mechanism", "A diverse crowd of protesters", "A weathered astronaut", "A mystical creature"];
const vidActions = ["sprinting through the rain", "slowly disintegrating into dust", "igniting with bright blue energy", "colliding with intense force", "drifting weightlessly", "unfolding gracefully", "morphing into a new shape", "pulsing with rhythmic light", "surveying the chaotic scene", "shattering into a thousand pieces"];
const vidCameras = ["Slow pan left from a low angle", "Dynamic tracking shot following from behind", "Swift whip-pan landing on a close-up", "Steady push-in to an extreme close-up", "Sweeping crane shot moving upward", "Handheld shaky cam for intensity", "Smooth circular orbital shot", "Static wide shot with a deep focus", "Overhead bird’s-eye view dropping straight down", "Dutch angle tilting slowly"];
const vidThemes = ["Neon bathed noir", "Sun-drenched anamorphic", "Gritty desaturated realism", "Ethereal high-key lighting", "High-contrast chiaroscuro", "Vibrant highly saturated pop", "Bleach-bypassed grimy look", "Soft romantic vintage film", "Crisp hyper-real IMAX quality", "Atmospheric fog-heavy gloom"];
const vidAudios = ["Heavy sub-bass pulse with orchestral strings", "Synthwave beat dropping into silence", "Eerie ambient wind with distant chimes", "Frantic percussion and rising strings", "Complete silence shifting into a massive explosion", "Soft piano melody over rain sounds", "Distorted electronic glitches and hums", "A sweeping orchestral crescendo", "Rhythmic ticking resembling a clock", "Muffled underwater acoustics slowly clearing"];

const allCategories = [];

const imagePrompts = [];
let imgCounter = 1;
for (let i = 0; i < 5; i++) {
  const baseTemplate = imagePromptsBase[i];
  for (let j = 0; j < 20; j++) {
      const role = imageRoles[(imgCounter + j) % imageRoles.length];
      const action = imageActions[(imgCounter + j) % imageActions.length];
      const item = imageItems[(imgCounter + j) % imageItems.length];
      const theme = imageThemes[(imgCounter + j) % imageThemes.length];
      const food = imageFoods[(imgCounter + j) % imageFoods.length];
      const style = imageStylesMap[(imgCounter + j) % imageStylesMap.length];
      
      const title = baseTemplate.title
          .replace("{Role}", role).replace("{Action}", action).replace("{Item}", item).replace("{Theme}", theme).replace("{Food}", food);

      const template = baseTemplate.template
          .replace("{Role}", role).replace("{Action}", action).replace("{Item}", item).replace("{Theme}", theme).replace("{Food}", food)
          .replace("{Garment}", "suit/attire")
          .replace("{Style}", style);

      imagePrompts.push({
          id: `img-${imgCounter++}`,
          title,
          description: baseTemplate.description,
          template,
          tags: baseTemplate.tags,
          rules: baseTemplate.rules
      });
  }
}
allCategories.push({
  id: "image-playbook",
  name: "AI Image Director's Playbook",
  description: "Built for creators, marketers, and agencies who want gallery-quality AI images.",
  icon: "Image",
  prompts: imagePrompts
});

const pePromptsList = [];
let peCounter = 1;
for (let i = 0; i < 5; i++) {
  const baseTemplate = peTemplates[i];
  for (let j = 0; j < 20; j++) {
      const role = peRoles[(peCounter + j) % peRoles.length];
      const task = peTasks[(peCounter + j) % peTasks.length];
      const tone = peTones[(peCounter + j) % peTones.length];
      
      const title = baseTemplate.title.replace("{Role}", role).replace("{Task}", task);
      const template = baseTemplate.template.replace(/{Role}/g, role).replace(/{Task}/g, task).replace(/{Tone}/g, tone);

      pePromptsList.push({
          id: `pe-${peCounter++}`,
          title,
          description: baseTemplate.description.replace("{Role}", role).replace("{Task}", task),
          template,
          tags: baseTemplate.tags
      });
  }
}
allCategories.push({
  id: "prompt-engineer",
  name: "The Prompt Engineer's Playbook",
  description: "Professional systems for communicating with AI models at expert level.",
  icon: "TerminalSquare",
  prompts: pePromptsList
});

const pcPromptsList = [];
let pcCounter = 1;
for (let i = 0; i < 5; i++) {
  const baseTemplate = pcTemplates[i];
  for (let j = 0; j < 20; j++) {
      const action = pcActions[(pcCounter + j) % pcActions.length];
      const format = pcFormats[(pcCounter + j) % pcFormats.length];
      const focus = pcFocuses[(pcCounter + j) % pcFocuses.length];
      const constraint = pcConstraints[(pcCounter + j) % pcConstraints.length];
      
      const title = baseTemplate.title.replace("{Action}", action).replace("{Focus}", focus);
      const template = baseTemplate.template.replace(/{Action}/g, action).replace(/{Format}/g, format).replace(/{Focus}/g, focus).replace(/{Constraint}/g, constraint);

      pcPromptsList.push({
          id: `pc-${pcCounter++}`,
          title,
          description: baseTemplate.description.replace("{Action}", action).replace("{Focus}", focus),
          template,
          tags: baseTemplate.tags
      });
  }
}
allCategories.push({
  id: "prompt-codes",
  name: "The Ultimate Prompt Codes Guide",
  description: "100 Power Commands · 4 Categories · The Complete Shorthand System",
  icon: "Code",
  prompts: pcPromptsList
});

const vidPromptsList = [];
let vidCounter = 1;

for (let i = 0; i < 5; i++) {
  const baseTemplate = vidTemplates[i];
  for (let j = 0; j < 20; j++) {
      const genre = vidGenres[(vidCounter + j) % vidGenres.length];
      const subject = vidSubjects[(vidCounter + j) % vidSubjects.length];
      const action = vidActions[(vidCounter + j) % vidActions.length];
      const camera = vidCameras[(vidCounter + j) % vidCameras.length];
      const theme = vidThemes[(vidCounter + j) % vidThemes.length];
      const audio = vidAudios[(vidCounter + j) % vidAudios.length];
      
      const title = baseTemplate.title.replace("{Genre}", genre).replace("{Subject}", subject);
      const desc = baseTemplate.description.replace("{Genre}", genre).replace("{Subject}", subject);
      const template = baseTemplate.template
          .replace(/{Genre}/g, genre).replace(/{Subject}/g, subject).replace(/{Action}/g, action)
          .replace(/{CameraMovement}/g, camera).replace(/{VisualTheme}/g, theme).replace(/{AudioProfile}/g, audio);

      vidPromptsList.push({
          id: `vid-${vidCounter++}`,
          title,
          description: desc,
          template,
          tags: baseTemplate.tags
      });
  }
}
allCategories.push({
  id: "video-playbook",
  name: "Seedance 2.0 Director's Playbook",
  description: "Actionable prompts for creators, marketers, and agencies who want cinematic AI video.",
  icon: "Video",
  prompts: vidPromptsList
});

const fileContent = `export type PromptItem = {
  id: string;
  title: string;
  description?: string;
  template: string;
  example?: string;
  tags?: string[];
  rules?: string[];
};

export type PromptCategory = {
  id: string;
  name: string;
  description: string;
  icon: string;
  prompts: PromptItem[];
};

export const promptData: PromptCategory[] = ${JSON.stringify(allCategories, null, 2)};
`;

fs.writeFileSync('src/data/prompts.ts', fileContent);
console.log('Successfully generated prompts.ts with 400 total items.');
