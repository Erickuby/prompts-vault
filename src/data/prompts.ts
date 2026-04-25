export type PromptItem = {
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

export const promptData: PromptCategory[] = [
  {
    "id": "image-playbook",
    "name": "AI Image Director's Playbook",
    "description": "Built for creators, marketers, and agencies who want gallery-quality AI images.",
    "icon": "Image",
    "prompts": [
      {
        "id": "img-1",
        "title": "The Creator Portrait",
        "description": "Premium AI image prompt.",
        "template": "A [AGE]-year-old [ETHNICITY] content creator seated in a sun-drenched modern studio workspace. They wear a relaxed [COLOUR] linen blazer over a clean white tee, expression: quietly confident, slight forward lean, eyes holding the lens with intention.\nBackground: softly blurred shelves of books, a large plant, and a ring light reflecting in the far background.\nLighting: warm amber key light at 45 degrees camera right, diffused cooler fill from a large north-facing window camera left, ultra-thin rim light separating the subject from the background.\nCamera: Hasselblad X2D, 85mm lens f/1.6, shallow depth of field, ultra-sharp eye focus, natural skin texture, visible pores, micro hair detail.\nGrade: warm editorial, muted highlights, lifted shadows, skin tones preserved.\n--ar 4:5 --v 7 --stylize 180",
        "tags": [
          "Image",
          "Director"
        ],
        "rules": [
          "Front-load the subject",
          "Use real photography vocabulary",
          "Specify lighting direction"
        ]
      },
      {
        "id": "img-2",
        "title": "The Designer Portrait",
        "description": "Premium AI image prompt.",
        "template": "A [AGE]-year-old [ETHNICITY] creative director standing at a large architect's desk covered in flat lay brand materials and open Pantone books. They wear an oversized [COLOUR] structured coat, arms loosely crossed, expression: measured, intelligent, direct.\nEnvironment: converted East London warehouse studio, exposed brick behind them, single large industrial skylight above pouring directional natural light.\nLighting: high-contrast Rembrandt setup, strong key light from upper left creating a triangular shadow catch on the far cheek, deep rich shadows on the opposite side, no fill card.\nCamera: Phase One IQ4, 75mm f/2.0, tight medium shot, waist up, crisp fabric texture, sharp collar detail.\nGrade: monochromatic desaturated, dark rich blacks, cool grey tones, single warm skin pop.\n--ar 4:5 --v 7 --stylize 220",
        "tags": [
          "Image",
          "Director"
        ],
        "rules": [
          "Front-load the subject",
          "Use real photography vocabulary",
          "Specify lighting direction"
        ]
      },
      {
        "id": "img-3",
        "title": "The Strategist Portrait",
        "description": "Premium AI image prompt.",
        "template": "A [AGE]-year-old [ETHNICITY] business strategist standing in a floor-to-ceiling glass meeting room overlooking a city skyline. They wear a sharp [COLOUR] tailored double-breasted suit, one hand in pocket, expression: calm authority, slight jaw set, eyes forward.\nBackground: blurred city lights through glass, a board with strategic frameworks partially visible.\nLighting: cool daylight from behind through glass creates dramatic backlight, soft diffused key light from a beauty dish camera right, natural and controlled.\nCamera: Sony A1, 85mm f/1.4 G Master, medium full-body shot, sharp lapel and pocket square detail, slight depth compression.\nGrade: gritty desaturated documentary, cool tones, deep contrast, muted greens, no blown highlights.\n--ar 4:5 --v 7 --stylize 160",
        "tags": [
          "Image",
          "Director"
        ],
        "rules": [
          "Front-load the subject",
          "Use real photography vocabulary",
          "Specify lighting direction"
        ]
      },
      {
        "id": "img-4",
        "title": "The Writer Portrait",
        "description": "Premium AI image prompt.",
        "template": "A [AGE]-year-old [ETHNICITY] author seated in a dimly lit private library. They wear a relaxed [COLOUR] roll-neck jumper, one hand resting on a closed hardback book, expression: contemplative, slightly distant, as if mid-thought.\nEnvironment: floor-to-ceiling bookshelves, warm reading lamp to the left, vintage leather armchair, single shaft of late afternoon window light cutting across the foreground floor.\nLighting: practicals-led, warm amber table lamp as key, cool blue daylight from a far window as counter-fill, deep atmospheric shadows.\nCamera: Leica Q3, 28mm f/1.7, medium close-up, slight environmental context visible.\nGrade: moody warm-dark editorial, deep shadows, golden skin tones, rich dark browns in the books and chair.\n--ar 4:5 --v 7 --stylize 200",
        "tags": [
          "Image",
          "Director"
        ],
        "rules": [
          "Front-load the subject",
          "Use real photography vocabulary",
          "Specify lighting direction"
        ]
      },
      {
        "id": "img-5",
        "title": "The Chef Portrait",
        "description": "Premium AI image prompt.",
        "template": "A [AGE]-year-old [ETHNICITY] executive chef standing in a professional kitchen during a quiet moment before service. They wear a pristine white double-breasted chef's jacket with [COLOUR] detailing, arms loosely at sides, expression: composed, proud, serene.\nEnvironment: stainless steel surfaces behind them, copper pans hanging slightly out of focus, a chopped herb board on the counter.\nLighting: overhead kitchen practicals create dramatic top-down key light, soft fill bouncing off stainless steel, subtle warm rim from an oven glow.\nCamera: Canon EOS R5, 85mm f/1.8 L, medium shot from chest up, sharp jacket texture, knife rack in soft bokeh.\nGrade: ethereal clean whites, high key, soft dreamy highlights, lifted warm skin tones, clean and aspirational.\n--ar 4:5 --v 7 --stylize 150",
        "tags": [
          "Image",
          "Director"
        ],
        "rules": [
          "Front-load the subject",
          "Use real photography vocabulary",
          "Specify lighting direction"
        ]
      },
      {
        "id": "img-6",
        "title": "The Explorer Hero",
        "description": "Premium AI image prompt.",
        "template": "A [AGE]-year-old [ETHNICITY] explorer standing at the very edge of a cliff overlooking a vast untouched wilderness valley at golden hour. Wear [DETAILED OUTFIT]. Expression and body language must match the subject's purpose.\nEnvironment: cinematic location with strong environmental storytelling and visible scale.\nLighting: motivated cinematic light with clear key, fill, and rim relationship.\nCamera: premium medium-to-wide composition, subject dominant, professional lensing and depth.\nGrade: editorial cinematic colour treatment matching the mood.\n--ar 3:4 --v 7 --stylize 220",
        "tags": [
          "Image",
          "Director"
        ]
      },
      {
        "id": "img-7",
        "title": "The Climber Hero",
        "description": "Premium AI image prompt.",
        "template": "A [AGE]-year-old [ETHNICITY] free climber gripping a rock face high above a mountain valley. Wear [DETAILED OUTFIT]. Expression and body language must match the subject's purpose.\nEnvironment: cinematic location with strong environmental storytelling and visible scale.\nLighting: motivated cinematic light with clear key, fill, and rim relationship.\nCamera: premium medium-to-wide composition, subject dominant, professional lensing and depth.\nGrade: editorial cinematic colour treatment matching the mood.\n--ar 3:4 --v 7 --stylize 200",
        "tags": [
          "Image",
          "Director"
        ]
      },
      {
        "id": "img-8",
        "title": "The Dancer Hero",
        "description": "Premium AI image prompt.",
        "template": "A [AGE]-year-old [ETHNICITY] contemporary dancer caught mid-leap above a rooftop in a major city at blue hour. Wear [DETAILED OUTFIT]. Expression and body language must match the subject's purpose.\nEnvironment: cinematic location with strong environmental storytelling and visible scale.\nLighting: motivated cinematic light with clear key, fill, and rim relationship.\nCamera: premium medium-to-wide composition, subject dominant, professional lensing and depth.\nGrade: editorial cinematic colour treatment matching the mood.\n--ar 3:4 --v 7 --stylize 200",
        "tags": [
          "Image",
          "Director"
        ]
      },
      {
        "id": "img-9",
        "title": "The Yogi Hero",
        "description": "Premium AI image prompt.",
        "template": "A [AGE]-year-old [ETHNICITY] yogi holding a perfect warrior pose on the edge of a cliff overlooking the sea at sunrise. Wear [DETAILED OUTFIT]. Expression and body language must match the subject's purpose.\nEnvironment: cinematic location with strong environmental storytelling and visible scale.\nLighting: motivated cinematic light with clear key, fill, and rim relationship.\nCamera: premium medium-to-wide composition, subject dominant, professional lensing and depth.\nGrade: editorial cinematic colour treatment matching the mood.\n--ar 3:4 --v 7 --stylize 180",
        "tags": [
          "Image",
          "Director"
        ]
      },
      {
        "id": "img-10",
        "title": "The Pilot Hero",
        "description": "Premium AI image prompt.",
        "template": "A [AGE]-year-old [ETHNICITY] pilot standing beside their aircraft on a remote tarmac at dusk. Wear [DETAILED OUTFIT]. Expression and body language must match the subject's purpose.\nEnvironment: cinematic location with strong environmental storytelling and visible scale.\nLighting: motivated cinematic light with clear key, fill, and rim relationship.\nCamera: premium medium-to-wide composition, subject dominant, professional lensing and depth.\nGrade: editorial cinematic colour treatment matching the mood.\n--ar 3:4 --v 7 --stylize 180",
        "tags": [
          "Image",
          "Director"
        ]
      },
      {
        "id": "img-11",
        "title": "Luxury Watch Product Shot",
        "description": "Premium AI image prompt.",
        "template": "Hero product photograph of a luxury watch for a high-end campaign.\nProduct specifications: define material, colour, detail, finish, and premium accents.\nPlacement: composed as a studio hero shot with one restrained supporting prop and a premium surface.\nLighting: single directional key light creating precise specular highlights, controlled fill, and deep shadow detail.\nCamera: high-end macro lens, premium commercial angle, ultra-sharp product texture.\nGrade: luxury muted tones, clean highlights, no distortion.\n4K photorealistic output. --ar 1:1",
        "tags": [
          "Image",
          "Director"
        ]
      },
      {
        "id": "img-12",
        "title": "Luxury Sneaker Product Shot",
        "description": "Premium AI image prompt.",
        "template": "Hero product photograph of a luxury sneaker for a high-end campaign.\nProduct specifications: define material, colour, detail, finish, and premium accents.\nPlacement: composed as a studio hero shot with one restrained supporting prop and a premium surface.\nLighting: single directional key light creating precise specular highlights, controlled fill, and deep shadow detail.\nCamera: high-end macro lens, premium commercial angle, ultra-sharp product texture.\nGrade: luxury muted tones, clean highlights, no distortion.\n4K photorealistic output. --ar 1:1",
        "tags": [
          "Image",
          "Director"
        ]
      },
      {
        "id": "img-13",
        "title": "Luxury Wallet Product Shot",
        "description": "Premium AI image prompt.",
        "template": "Hero product photograph of a luxury wallet for a high-end campaign.\nProduct specifications: define material, colour, detail, finish, and premium accents.\nPlacement: composed as a studio hero shot with one restrained supporting prop and a premium surface.\nLighting: single directional key light creating precise specular highlights, controlled fill, and deep shadow detail.\nCamera: high-end macro lens, premium commercial angle, ultra-sharp product texture.\nGrade: luxury muted tones, clean highlights, no distortion.\n4K photorealistic output. --ar 1:1",
        "tags": [
          "Image",
          "Director"
        ]
      },
      {
        "id": "img-14",
        "title": "Luxury Smartphone Product Shot",
        "description": "Premium AI image prompt.",
        "template": "Hero product photograph of a luxury smartphone for a high-end campaign.\nProduct specifications: define material, colour, detail, finish, and premium accents.\nPlacement: composed as a studio hero shot with one restrained supporting prop and a premium surface.\nLighting: single directional key light creating precise specular highlights, controlled fill, and deep shadow detail.\nCamera: high-end macro lens, premium commercial angle, ultra-sharp product texture.\nGrade: luxury muted tones, clean highlights, no distortion.\n4K photorealistic output. --ar 1:1",
        "tags": [
          "Image",
          "Director"
        ]
      },
      {
        "id": "img-15",
        "title": "Luxury Lipstick Product Shot",
        "description": "Premium AI image prompt.",
        "template": "Hero product photograph of a luxury lipstick for a high-end campaign.\nProduct specifications: define material, colour, detail, finish, and premium accents.\nPlacement: composed as a studio hero shot with one restrained supporting prop and a premium surface.\nLighting: single directional key light creating precise specular highlights, controlled fill, and deep shadow detail.\nCamera: high-end macro lens, premium commercial angle, ultra-sharp product texture.\nGrade: luxury muted tones, clean highlights, no distortion.\n4K photorealistic output. --ar 1:1",
        "tags": [
          "Image",
          "Director"
        ]
      },
      {
        "id": "img-16",
        "title": "Cyberpunk Interior",
        "description": "Premium AI image prompt.",
        "template": "Wide-angle interior photograph of a Cyberpunk-inspired luxury penthouse apartment in a near-future megacity.\nSpace: richly described architecture with clear foreground, mid-ground, and background depth.\nKey furniture: [ACCENT FURNITURE] positioned as the compositional anchor.\nSurfaces: material palette, walls, floor, ceiling, and one memorable feature detail.\nLighting: motivated natural or practical lighting that defines the room's character.\nCamera: architectural wide angle, deep focus, balanced composition.\nGrade: cinematic interior grade matched to the style.\n--ar 16:9 --v 7",
        "tags": [
          "Image",
          "Director"
        ]
      },
      {
        "id": "img-17",
        "title": "Bohemian Interior",
        "description": "Premium AI image prompt.",
        "template": "Wide-angle interior photograph of a sun-drenched Bohemian creative studio in a converted Victorian townhouse.\nSpace: richly described architecture with clear foreground, mid-ground, and background depth.\nKey furniture: [ACCENT FURNITURE] positioned as the compositional anchor.\nSurfaces: material palette, walls, floor, ceiling, and one memorable feature detail.\nLighting: motivated natural or practical lighting that defines the room's character.\nCamera: architectural wide angle, deep focus, balanced composition.\nGrade: cinematic interior grade matched to the style.\n--ar 16:9 --v 7",
        "tags": [
          "Image",
          "Director"
        ]
      },
      {
        "id": "img-18",
        "title": "Scandinavian Interior",
        "description": "Premium AI image prompt.",
        "template": "Wide-angle interior photograph of a pure Scandinavian minimalist living space in a countryside villa outside Stockholm.\nSpace: richly described architecture with clear foreground, mid-ground, and background depth.\nKey furniture: [ACCENT FURNITURE] positioned as the compositional anchor.\nSurfaces: material palette, walls, floor, ceiling, and one memorable feature detail.\nLighting: motivated natural or practical lighting that defines the room's character.\nCamera: architectural wide angle, deep focus, balanced composition.\nGrade: cinematic interior grade matched to the style.\n--ar 16:9 --v 7",
        "tags": [
          "Image",
          "Director"
        ]
      },
      {
        "id": "img-19",
        "title": "Wabi-Sabi Interior",
        "description": "Premium AI image prompt.",
        "template": "Wide-angle interior photograph of a Wabi-Sabi sanctuary home interior in rural Kyoto, Japan.\nSpace: richly described architecture with clear foreground, mid-ground, and background depth.\nKey furniture: [ACCENT FURNITURE] positioned as the compositional anchor.\nSurfaces: material palette, walls, floor, ceiling, and one memorable feature detail.\nLighting: motivated natural or practical lighting that defines the room's character.\nCamera: architectural wide angle, deep focus, balanced composition.\nGrade: cinematic interior grade matched to the style.\n--ar 16:9 --v 7",
        "tags": [
          "Image",
          "Director"
        ]
      },
      {
        "id": "img-20",
        "title": "Gothic Interior",
        "description": "Premium AI image prompt.",
        "template": "Wide-angle interior photograph of a dark Gothic mansion library in a Scottish Highland estate.\nSpace: richly described architecture with clear foreground, mid-ground, and background depth.\nKey furniture: [ACCENT FURNITURE] positioned as the compositional anchor.\nSurfaces: material palette, walls, floor, ceiling, and one memorable feature detail.\nLighting: motivated natural or practical lighting that defines the room's character.\nCamera: architectural wide angle, deep focus, balanced composition.\nGrade: cinematic interior grade matched to the style.\n--ar 16:9 --v 7",
        "tags": [
          "Image",
          "Director"
        ]
      },
      {
        "id": "img-21",
        "title": "Sushi Platter Flat Lay",
        "description": "Premium AI image prompt.",
        "template": "Overhead flat-lay food photograph of a premium omakase sushi platter for a Michelin-starred Japanese restaurant.\nPrimary dish: describe exact ingredients, arrangement, colour, and texture.\nSupporting elements: scattered [INGREDIENTS], garnish, tableware, and [DRINK] chosen for the cuisine.\nSurface: premium tactile surface with visible material character.\nLighting: directional window light, diffused and controlled, with appetising shadow structure.\nCamera: top-down food editorial composition, sharp detail.\nGrade: cuisine-specific editorial colour grade.\n--ar 4:5 --v 6.0",
        "tags": [
          "Image",
          "Director"
        ]
      },
      {
        "id": "img-22",
        "title": "Craft Burger Flat Lay",
        "description": "Premium AI image prompt.",
        "template": "Overhead flat-lay food photograph of a precision-crafted smash burger for an upscale street food brand.\nPrimary dish: describe exact ingredients, arrangement, colour, and texture.\nSupporting elements: scattered [INGREDIENTS], garnish, tableware, and [DRINK] chosen for the cuisine.\nSurface: premium tactile surface with visible material character.\nLighting: directional window light, diffused and controlled, with appetising shadow structure.\nCamera: top-down food editorial composition, sharp detail.\nGrade: cuisine-specific editorial colour grade.\n--ar 4:5 --v 6.0",
        "tags": [
          "Image",
          "Director"
        ]
      },
      {
        "id": "img-23",
        "title": "Tapas Flat Lay",
        "description": "Premium AI image prompt.",
        "template": "Overhead flat-lay food photograph of a curated selection of modern Spanish tapas for a Barcelona restaurant menu.\nPrimary dish: describe exact ingredients, arrangement, colour, and texture.\nSupporting elements: scattered [INGREDIENTS], garnish, tableware, and [DRINK] chosen for the cuisine.\nSurface: premium tactile surface with visible material character.\nLighting: directional window light, diffused and controlled, with appetising shadow structure.\nCamera: top-down food editorial composition, sharp detail.\nGrade: cuisine-specific editorial colour grade.\n--ar 4:5 --v 6.0",
        "tags": [
          "Image",
          "Director"
        ]
      },
      {
        "id": "img-24",
        "title": "Gelato Flat Lay",
        "description": "Premium AI image prompt.",
        "template": "Overhead flat-lay food photograph of artisan gelato scoops for an Italian gelateria summer campaign.\nPrimary dish: describe exact ingredients, arrangement, colour, and texture.\nSupporting elements: scattered [INGREDIENTS], garnish, tableware, and [DRINK] chosen for the cuisine.\nSurface: premium tactile surface with visible material character.\nLighting: directional window light, diffused and controlled, with appetising shadow structure.\nCamera: top-down food editorial composition, sharp detail.\nGrade: cuisine-specific editorial colour grade.\n--ar 4:5 --v 6.0",
        "tags": [
          "Image",
          "Director"
        ]
      },
      {
        "id": "img-25",
        "title": "Acai Bowl Flat Lay",
        "description": "Premium AI image prompt.",
        "template": "Overhead flat-lay food photograph of a premium acai bowl for a London wellness cafe brand.\nPrimary dish: describe exact ingredients, arrangement, colour, and texture.\nSupporting elements: scattered [INGREDIENTS], garnish, tableware, and [DRINK] chosen for the cuisine.\nSurface: premium tactile surface with visible material character.\nLighting: directional window light, diffused and controlled, with appetising shadow structure.\nCamera: top-down food editorial composition, sharp detail.\nGrade: cuisine-specific editorial colour grade.\n--ar 4:5 --v 6.0",
        "tags": [
          "Image",
          "Director"
        ]
      }
    ]
  },
  {
    "id": "prompt-engineer",
    "name": "The Prompt Engineer's Playbook",
    "description": "Professional systems for communicating with AI models at expert level.",
    "icon": "TerminalSquare",
    "prompts": [
      {
        "id": "pe-1",
        "title": "Product Launch Press Release",
        "description": "Professional prompt engineering use case.",
        "template": "CONTEXT: I am the founder of a UK-based health tech startup called \"ClearMind\" launching a wearable stress-monitoring device that reads cortisol levels through sweat. We are announcing a £2.3M seed funding round alongside the product launch. Target press: TechCrunch UK, Wired, The Guardian Tech section.\nROLE: Act as a Senior PR Director at a top London communications agency with 12 years of tech startup press experience.\nACTION: Write a press release for this announcement.\nFORMAT: Headline, sub-headline, lead paragraph, founder quote, investor quote, product details, boilerplate, press contact placeholder.\nTONE: Authoritative but human.\nCONSTRAINTS: Under 500 words, no jargon without explanation, no passive voice, every sentence earns its place.",
        "tags": [
          "Prompt Engineering"
        ]
      },
      {
        "id": "pe-2",
        "title": "User Interview Script - SaaS Product",
        "description": "Professional prompt engineering use case.",
        "template": "CONTEXT: I am a UX researcher at \"FlowDesk\", a B2B SaaS project management tool for remote creative agencies. We are redesigning onboarding because 62% of free trial users drop off before setup. I will interview 6 customers who completed onboarding successfully.\nROLE: Act as a Senior UX Research Lead with 10+ years of B2B SaaS research and usability testing experience.\nACTION: Design a complete 45-minute user interview script.\nFORMAT: Opening script, warm-up questions, 8 core exploration questions, 2 probes per core question, closing questions, closing script.\nTONE: Warm, curious, non-leading.\nCONSTRAINTS: No compound questions, no leading language, include silence prompts.",
        "tags": [
          "Prompt Engineering"
        ]
      },
      {
        "id": "pe-3",
        "title": "90-Day Content Calendar - Personal Brand",
        "description": "Professional prompt engineering use case.",
        "template": "CONTEXT: I am a Black British woman, age 31, building a LinkedIn thought-leadership brand in AI and career development. I post on LinkedIn, Instagram Reels, and a weekly WhatsApp broadcast. I have 4,200 LinkedIn followers and want 10,000 in 90 days.\nROLE: Act as a Senior Content Strategist with 8 years of personal brand and social growth experience.\nACTION: Plan a complete 90-day content calendar.\nFORMAT: Week 1 through Week 13 with weekly theme, LinkedIn post, Instagram Reel, WhatsApp broadcast, pillar post, and a 3-month content arc narrative.\nTONE: Direct, strategic, no filler.\nCONSTRAINTS: Only the three platforms specified. No tips/facts posts; use story, experience, or opinion-led content.",
        "tags": [
          "Prompt Engineering"
        ]
      },
      {
        "id": "pe-4",
        "title": "AI Market Trend Analysis - UK Businesses",
        "description": "Professional prompt engineering use case.",
        "template": "CONTEXT: I run a consultancy helping UK SMEs adopt AI tools to cut operational costs. I need a market briefing for sceptical clients in logistics, estate agency, and restaurant groups.\nROLE: Act as a Senior Business Technology Analyst specialising in AI adoption for UK SMEs.\nACTION: Analyse current AI market trends relevant to these industries.\nFORMAT: Executive summary, section per industry, adoption rate, top 3 tools, UK ROI case example, risk of not adopting, outlook, recommended first step.\nTONE: Analytical but accessible.\nCONSTRAINTS: No statistics older than 2024, no developer-only tools, no hype language.",
        "tags": [
          "Prompt Engineering"
        ]
      },
      {
        "id": "pe-5",
        "title": "GDPR Compliance Guidelines - Small Business",
        "description": "Professional prompt engineering use case.",
        "template": "CONTEXT: I run a UK online coaching business with 1,200 email subscribers, 340 WhatsApp broadcast contacts, and 89 paying customers. I collect name, email, phone, and payment information. An ICO audit letter has arrived.\nROLE: Act as a Senior Data Protection Solicitor specialising in UK GDPR compliance for small businesses and sole traders.\nACTION: Draft practical compliance guidelines I can implement immediately.\nFORMAT: Priority 7-day action list, data audit template, privacy policy clauses, Subject Access Request process, breach notification protocol.\nTONE: Urgent, clear, plain English.\nCONSTRAINTS: UK GDPR and Data Protection Act 2018 only. Explain legal jargon immediately. Flag the 3 highest-risk items first.",
        "tags": [
          "Prompt Engineering"
        ]
      },
      {
        "id": "pe-6",
        "title": "Product Manager - Feature Launch Strategy",
        "description": "Professional prompt engineering use case.",
        "template": "Outline a complete go-to-market and adoption strategy for a UK fintech bill-splitting feature, including beta, launch day, 30-day adoption tactics, success metrics, risks, and a one-page summary table.",
        "tags": [
          "Prompt Engineering"
        ]
      },
      {
        "id": "pe-7",
        "title": "UX Researcher - Redesign Strategy",
        "description": "Professional prompt engineering use case.",
        "template": "Outline a complete 8-week research and redesign strategy for an e-commerce fashion app payment-screen drop-off problem, including methods, synthesis, design sprint, testing, budget, and contradiction risk.",
        "tags": [
          "Prompt Engineering"
        ]
      },
      {
        "id": "pe-8",
        "title": "SEO Expert - Organic Growth Strategy",
        "description": "Professional prompt engineering use case.",
        "template": "Outline a 12-month organic SEO growth strategy for a UK personal finance education platform moving from 4,200 to 25,000 organic visits/month without paid ads.",
        "tags": [
          "Prompt Engineering"
        ]
      },
      {
        "id": "pe-9",
        "title": "Financial Advisor - Business Cash Flow Strategy",
        "description": "Professional prompt engineering use case.",
        "template": "Create a cash flow stabilisation and growth strategy for a UK creative agency with seasonal payment crashes, overdue invoices, reserve planning, client payment wording, and a 12-month model.",
        "tags": [
          "Prompt Engineering"
        ]
      },
      {
        "id": "pe-10",
        "title": "Legal Expert - Freelance Contract Strategy",
        "description": "Professional prompt engineering use case.",
        "template": "Create a UK freelance legal protection strategy with 7 essential clauses, non-payment dispute timeline, meeting-the-brief wording, IP ownership, and kill fee structure.",
        "tags": [
          "Prompt Engineering"
        ]
      },
      {
        "id": "pe-11",
        "title": "Product Manager - Low User Retention",
        "description": "Professional prompt engineering use case.",
        "template": "Diagnose day-30 retention at 9% for a professional habit-tracking app and provide root cause analysis plus a 3-step solution from quick win to structural change.",
        "tags": [
          "Prompt Engineering"
        ]
      },
      {
        "id": "pe-12",
        "title": "UX Researcher - High Bounce Rate On Key Page",
        "description": "Professional prompt engineering use case.",
        "template": "Diagnose a £297 course landing page with 78% bounce, 23 seconds average time, and poor hero scroll depth; provide root cause analysis and a 3-step fix.",
        "tags": [
          "Prompt Engineering"
        ]
      },
      {
        "id": "pe-13",
        "title": "SEO - Traffic Dropped 60% Overnight",
        "description": "Professional prompt engineering use case.",
        "template": "Diagnose a 60% organic traffic drop after a Google core update and provide a 7-day, 30-day, and long-term recovery plan focused on EEAT and content quality.",
        "tags": [
          "Prompt Engineering"
        ]
      },
      {
        "id": "pe-14",
        "title": "Financial Advisor - Startup Runway Crisis",
        "description": "Professional prompt engineering use case.",
        "template": "Assess a SaaS startup with £67,000 cash, £19,000 burn, £4,200 MRR, and 3.5 months runway; provide urgent survival, revenue, and investor prep plan.",
        "tags": [
          "Prompt Engineering"
        ]
      },
      {
        "id": "pe-15",
        "title": "Legal - Business Partner Dispute",
        "description": "Professional prompt engineering use case.",
        "template": "Analyse a 50/50 UK limited company dispute with no shareholders agreement and provide a 48-hour, exit negotiation, and client relationship protection plan.",
        "tags": [
          "Prompt Engineering"
        ]
      },
      {
        "id": "pe-16",
        "title": "Rapid CV Rewriter - Career Changer",
        "description": "Professional prompt engineering use case.",
        "template": "Rewrite a retail banking CV experience section for a junior fintech Product Manager role using product-native language and Google XYZ bullets.",
        "tags": [
          "Prompt Engineering"
        ]
      },
      {
        "id": "pe-17",
        "title": "Rapid Business Pitch - Investor Meeting",
        "description": "Professional prompt engineering use case.",
        "template": "Generate a complete 10-minute verbal pitch script for GrainFree, a UK gluten-free meal-kit subscription with £18,000 MRR and 94% retention.",
        "tags": [
          "Prompt Engineering"
        ]
      },
      {
        "id": "pe-18",
        "title": "Rapid Social Media Content Plan",
        "description": "Professional prompt engineering use case.",
        "template": "Generate a 30-day Instagram content plan for a Manchester personal trainer booking 5 new 1:1 clients among women over 35 without ads.",
        "tags": [
          "Prompt Engineering"
        ]
      },
      {
        "id": "pe-19",
        "title": "Rapid Market Entry Analysis",
        "description": "Professional prompt engineering use case.",
        "template": "Generate a UK-to-Nigeria HR consulting market entry analysis and 18-month roadmap with risks, regulation, relationships, and £30,000 budget use.",
        "tags": [
          "Prompt Engineering"
        ]
      },
      {
        "id": "pe-20",
        "title": "Rapid Compliance Guidelines - Food Business",
        "description": "Professional prompt engineering use case.",
        "template": "Generate UK compliance guidelines for a home-based fermented hot sauce business selling on Etsy, markets, and eventually wholesale.",
        "tags": [
          "Prompt Engineering"
        ]
      },
      {
        "id": "pe-21",
        "title": "Product Manager - Evaluate A Feature Brief",
        "description": "Professional prompt engineering use case.",
        "template": "Review a pasted junior PM feature brief for dark mode with strengths, critical gaps, rewrite, and ready-to-present verdict.",
        "tags": [
          "Prompt Engineering"
        ]
      },
      {
        "id": "pe-22",
        "title": "UX Researcher - Evaluate A Usability Test Report",
        "description": "Professional prompt engineering use case.",
        "template": "Review a pasted mobile checkout usability report with strengths, evidence gaps, recommendation quality, and presentation coaching.",
        "tags": [
          "Prompt Engineering"
        ]
      },
      {
        "id": "pe-23",
        "title": "SEO - Evaluate A Content Brief",
        "description": "Professional prompt engineering use case.",
        "template": "Review a content brief targeting \"best budgeting apps for UK students\" with ranking strengths, risks, structural rewrite, and ranking probability.",
        "tags": [
          "Prompt Engineering"
        ]
      },
      {
        "id": "pe-24",
        "title": "Financial Advisor - Evaluate A Business Plan Financial Model",
        "description": "Professional prompt engineering use case.",
        "template": "Stress-test a 3-year financial model for investor presentation with strengths, red flags, hardest investor question, and bankable verdict.",
        "tags": [
          "Prompt Engineering"
        ]
      },
      {
        "id": "pe-25",
        "title": "Legal - Evaluate A Client Contract",
        "description": "Professional prompt engineering use case.",
        "template": "CONTEXT: A new corporate client has sent me their standard supplier contract to sign. It is 12 pages long. I am a freelance consultant charging £800/day and I do not have a solicitor. The contract covers a 3-month engagement worth £28,800.\n[PASTE THE FULL CONTRACT TEXT HERE]\nROLE: Act as a Senior UK Commercial Solicitor specialising in freelance and independent contractor agreements.\nACTION: Review this contract and give me a plain-English risk assessment and negotiation guide.\nFORMAT: Red flags with replacement wording, amber flags with negotiation leverage, 5 clauses to check, negotiation email script, sign or walk verdict.\nTONE: Plain English throughout.\nCONSTRAINTS: UK law only, English and Welsh jurisdiction, sole trader context.",
        "tags": [
          "Prompt Engineering"
        ]
      }
    ]
  },
  {
    "id": "prompt-codes",
    "name": "The Ultimate Prompt Codes Guide",
    "description": "Reusable prompt codes for repeatable workflows.",
    "icon": "Code",
    "prompts": [
      {
        "id": "pc-1",
        "title": "Blueprint: Launch Your First Digital Product",
        "description": "Blueprint prompt code for complete action plans.",
        "template": "BLUEPRINT: LAUNCH YOUR FIRST DIGITAL PRODUCT\n\nBLUEPRINT: Build a complete practical plan for this scenario: 60-day launch blueprint.\n\nInclude: starting position, phases, weekly actions, risk points, milestones, and pivot triggers.\n\nRequired structure:\n- Starting assumptions to confirm\n- Step-by-step roadmap\n- Timeline with weekly or monthly milestones\n- Exact actions, not vague advice\n- Resource or budget constraints\n- Success metrics\n- One avoid-this-mistake warning per phase\n\nTone: direct, operational, no motivational filler.",
        "tags": [
          "Blueprint",
          "Prompt Codes"
        ]
      },
      {
        "id": "pc-2",
        "title": "Blueprint: Build Your Freelance Brand Design Business",
        "description": "Blueprint prompt code for complete action plans.",
        "template": "BLUEPRINT: BUILD YOUR FREELANCE BRAND DESIGN BUSINESS\n\nBLUEPRINT: Build a complete practical plan for this scenario: 6-month freelance transition blueprint.\n\nInclude: portfolio gaps, first-client acquisition, pricing, retainers, resignation threshold, and first-week operating plan.\n\nRequired structure:\n- Starting assumptions to confirm\n- Step-by-step roadmap\n- Timeline with weekly or monthly milestones\n- Exact actions, not vague advice\n- Resource or budget constraints\n- Success metrics\n- One avoid-this-mistake warning per phase\n\nTone: direct, operational, no motivational filler.",
        "tags": [
          "Blueprint",
          "Prompt Codes"
        ]
      },
      {
        "id": "pc-3",
        "title": "Blueprint: Grow A Newsletter To 5,000 Subscribers",
        "description": "Blueprint prompt code for complete action plans.",
        "template": "BLUEPRINT: GROW A NEWSLETTER TO 5,000 SUBSCRIBERS\n\nBLUEPRINT: Build a complete practical plan for this scenario: 12-month newsletter growth blueprint.\n\nInclude: platform choice, first 100 subscribers, content structure, partnerships, referral loop, monetisation, and health metrics.\n\nRequired structure:\n- Starting assumptions to confirm\n- Step-by-step roadmap\n- Timeline with weekly or monthly milestones\n- Exact actions, not vague advice\n- Resource or budget constraints\n- Success metrics\n- One avoid-this-mistake warning per phase\n\nTone: direct, operational, no motivational filler.",
        "tags": [
          "Blueprint",
          "Prompt Codes"
        ]
      },
      {
        "id": "pc-4",
        "title": "Blueprint: Launch An Online Coaching Business",
        "description": "Blueprint prompt code for complete action plans.",
        "template": "BLUEPRINT: LAUNCH AN ONLINE COACHING BUSINESS\n\nBLUEPRINT: Build a complete practical plan for this scenario: 90-day coaching business launch blueprint.\n\nInclude: positioning, offer design, proof building, visibility, discovery calls, first sales, and objection handling.\n\nRequired structure:\n- Starting assumptions to confirm\n- Step-by-step roadmap\n- Timeline with weekly or monthly milestones\n- Exact actions, not vague advice\n- Resource or budget constraints\n- Success metrics\n- One avoid-this-mistake warning per phase\n\nTone: direct, operational, no motivational filler.",
        "tags": [
          "Blueprint",
          "Prompt Codes"
        ]
      },
      {
        "id": "pc-5",
        "title": "Blueprint: Build A Profitable AI Automation Agency",
        "description": "Blueprint prompt code for complete action plans.",
        "template": "BLUEPRINT: BUILD A PROFITABLE AI AUTOMATION AGENCY\n\nBLUEPRINT: Build a complete practical plan for this scenario: 90-day AI automation agency blueprint.\n\nInclude: niche use cases, productised service design, case studies, paid audits, outreach, retainers, pricing, and delivery systems.\n\nRequired structure:\n- Starting assumptions to confirm\n- Step-by-step roadmap\n- Timeline with weekly or monthly milestones\n- Exact actions, not vague advice\n- Resource or budget constraints\n- Success metrics\n- One avoid-this-mistake warning per phase\n\nTone: direct, operational, no motivational filler.",
        "tags": [
          "Blueprint",
          "Prompt Codes"
        ]
      },
      {
        "id": "pc-6",
        "title": "Simulate: Investor Q&A Pressure Test",
        "description": "Simulation prompt code for realistic live practice.",
        "template": "SIMULATE: INVESTOR Q&A PRESSURE TEST\n\nSIMULATE: Run a realistic live role-play for this situation: investor Q&A pressure test.\n\nThe simulation must include: opening questions, numbers, market assumptions, founder quality, second-meeting verdict, and what nearly won or lost the investor.\n\nRules:\n- Stay in character until the debrief\n- Ask or respond one exchange at a time\n- Push back realistically, not theatrically\n- After the agreed number of exchanges, break character\n- Debrief what worked, what failed, what to say differently, and the final outcome\n\nStart the simulation now.",
        "tags": [
          "Simulate",
          "Prompt Codes"
        ]
      },
      {
        "id": "pc-7",
        "title": "Simulate: Difficult Client Negotiation",
        "description": "Simulation prompt code for realistic live practice.",
        "template": "SIMULATE: DIFFICULT CLIENT NEGOTIATION\n\nSIMULATE: Run a realistic live role-play for this situation: difficult client retainer negotiation.\n\nThe simulation must include: disappointment, fee reduction pressure, six realistic exchanges, concessions, recovery sentences, and retention verdict.\n\nRules:\n- Stay in character until the debrief\n- Ask or respond one exchange at a time\n- Push back realistically, not theatrically\n- After the agreed number of exchanges, break character\n- Debrief what worked, what failed, what to say differently, and the final outcome\n\nStart the simulation now.",
        "tags": [
          "Simulate",
          "Prompt Codes"
        ]
      },
      {
        "id": "pc-8",
        "title": "Simulate: Job Interview - Senior Marketing Role",
        "description": "Simulation prompt code for realistic live practice.",
        "template": "SIMULATE: JOB INTERVIEW - SENIOR MARKETING ROLE\n\nSIMULATE: Run a realistic live role-play for this situation: senior marketing job interview.\n\nThe simulation must include: competency questions, situational judgement, reverse questions, scoring, model answers, and progression verdict.\n\nRules:\n- Stay in character until the debrief\n- Ask or respond one exchange at a time\n- Push back realistically, not theatrically\n- After the agreed number of exchanges, break character\n- Debrief what worked, what failed, what to say differently, and the final outcome\n\nStart the simulation now.",
        "tags": [
          "Simulate",
          "Prompt Codes"
        ]
      },
      {
        "id": "pc-9",
        "title": "Simulate: Difficult Team Conversation",
        "description": "Simulation prompt code for realistic live practice.",
        "template": "SIMULATE: DIFFICULT TEAM CONVERSATION\n\nSIMULATE: Run a realistic live role-play for this situation: difficult team performance conversation.\n\nThe simulation must include: guarded employee responses, trust building, missed questions, support vs managed-out diagnosis, and manager coaching.\n\nRules:\n- Stay in character until the debrief\n- Ask or respond one exchange at a time\n- Push back realistically, not theatrically\n- After the agreed number of exchanges, break character\n- Debrief what worked, what failed, what to say differently, and the final outcome\n\nStart the simulation now.",
        "tags": [
          "Simulate",
          "Prompt Codes"
        ]
      },
      {
        "id": "pc-10",
        "title": "Simulate: Sales Discovery Call",
        "description": "Simulation prompt code for realistic live practice.",
        "template": "SIMULATE: SALES DISCOVERY CALL\n\nSIMULATE: Run a realistic live role-play for this situation: AI automation sales discovery call.\n\nThe simulation must include: guarded prospect, trust signals, practical objections, next-meeting decision, and what made the prospect feel understood.\n\nRules:\n- Stay in character until the debrief\n- Ask or respond one exchange at a time\n- Push back realistically, not theatrically\n- After the agreed number of exchanges, break character\n- Debrief what worked, what failed, what to say differently, and the final outcome\n\nStart the simulation now.",
        "tags": [
          "Simulate",
          "Prompt Codes"
        ]
      },
      {
        "id": "pc-11",
        "title": "Deconstruct: How Luxury Brands Command Premium Prices",
        "description": "Deconstruction prompt code for strategic analysis.",
        "template": "DECONSTRUCT: HOW LUXURY BRANDS COMMAND PREMIUM PRICES\n\nDECONSTRUCT: Break down luxury pricing mechanics across five useful lenses.\n\nCover: psychology, brand architecture, social signalling, destructive luxury behaviours, and small-business application.\n\nFor each lens include:\n- What is really happening\n- Why most people misunderstand it\n- A concrete example\n- One anti-pattern or warning sign\n- A final takeaway sentence\n\nTone: analytical, specific, and commercially useful. No generic advice.",
        "tags": [
          "Deconstruct",
          "Prompt Codes"
        ]
      },
      {
        "id": "pc-12",
        "title": "Deconstruct: Why Most Small Businesses Fail In Year 3",
        "description": "Deconstruction prompt code for strategic analysis.",
        "template": "DECONSTRUCT: WHY MOST SMALL BUSINESSES FAIL IN YEAR 3\n\nDECONSTRUCT: Break down Year 3 small-business failure across five useful lenses.\n\nCover: survival trap, cash flow, team shift, market assumptions, founder identity, and warning signs.\n\nFor each lens include:\n- What is really happening\n- Why most people misunderstand it\n- A concrete example\n- One anti-pattern or warning sign\n- A final takeaway sentence\n\nTone: analytical, specific, and commercially useful. No generic advice.",
        "tags": [
          "Deconstruct",
          "Prompt Codes"
        ]
      },
      {
        "id": "pc-13",
        "title": "Deconstruct: How Viral Content Actually Works",
        "description": "Deconstruction prompt code for strategic analysis.",
        "template": "DECONSTRUCT: HOW VIRAL CONTENT ACTUALLY WORKS\n\nDECONSTRUCT: Break down viral content mechanics across five useful lenses.\n\nCover: emotion, identity, structure, timing, creator process, and anti-patterns in each section.\n\nFor each lens include:\n- What is really happening\n- Why most people misunderstand it\n- A concrete example\n- One anti-pattern or warning sign\n- A final takeaway sentence\n\nTone: analytical, specific, and commercially useful. No generic advice.",
        "tags": [
          "Deconstruct",
          "Prompt Codes"
        ]
      },
      {
        "id": "pc-14",
        "title": "Deconstruct: The Psychology Of Negotiation",
        "description": "Deconstruction prompt code for strategic analysis.",
        "template": "DECONSTRUCT: THE PSYCHOLOGY OF NEGOTIATION\n\nDECONSTRUCT: Break down negotiation psychology across five useful lenses.\n\nCover: preparation, anchoring, silence, concession design, power imbalance, and next-negotiation actions.\n\nFor each lens include:\n- What is really happening\n- Why most people misunderstand it\n- A concrete example\n- One anti-pattern or warning sign\n- A final takeaway sentence\n\nTone: analytical, specific, and commercially useful. No generic advice.",
        "tags": [
          "Deconstruct",
          "Prompt Codes"
        ]
      },
      {
        "id": "pc-15",
        "title": "Deconstruct: Why Most Personal Brands Stay Small",
        "description": "Deconstruction prompt code for strategic analysis.",
        "template": "DECONSTRUCT: WHY MOST PERSONAL BRANDS STAY SMALL\n\nDECONSTRUCT: Break down personal brand growth ceiling across five useful lenses.\n\nCover: content reach, positioning, trust transfer, consistency, conversion quality, and self-diagnostic questions.\n\nFor each lens include:\n- What is really happening\n- Why most people misunderstand it\n- A concrete example\n- One anti-pattern or warning sign\n- A final takeaway sentence\n\nTone: analytical, specific, and commercially useful. No generic advice.",
        "tags": [
          "Deconstruct",
          "Prompt Codes"
        ]
      },
      {
        "id": "pc-16",
        "title": "Architect: A High-Ticket Coaching Programme",
        "description": "Architect prompt code for building systems from scratch.",
        "template": "ARCHITECT: A HIGH-TICKET COACHING PROGRAMME\n\nARCHITECT: Build a complete system for high-ticket coaching programme.\n\nThe system must include: promise, 12-week journey, client experience, sales system, outcomes, and testimonial capture.\n\nRequired sections:\n- The promise or outcome\n- The structure\n- The operating rhythm\n- Templates or scripts needed\n- Delivery or implementation workflow\n- Measurement system\n- Risks and how to prevent them\n\nTone: specific, premium, practical. Every section needs a next action.",
        "tags": [
          "Architect",
          "Prompt Codes"
        ]
      },
      {
        "id": "pc-17",
        "title": "Architect: A Productised Service For A Freelancer",
        "description": "Architect prompt code for building systems from scratch.",
        "template": "ARCHITECT: A PRODUCTISED SERVICE FOR A FREELANCER\n\nARCHITECT: Build a complete system for productised freelancer services.\n\nThe system must include: entry offer, core offer, premium offer, deliverables, pricing, risk reversal, and sales page structure.\n\nRequired sections:\n- The promise or outcome\n- The structure\n- The operating rhythm\n- Templates or scripts needed\n- Delivery or implementation workflow\n- Measurement system\n- Risks and how to prevent them\n\nTone: specific, premium, practical. Every section needs a next action.",
        "tags": [
          "Architect",
          "Prompt Codes"
        ]
      },
      {
        "id": "pc-18",
        "title": "Architect: A Membership Community",
        "description": "Architect prompt code for building systems from scratch.",
        "template": "ARCHITECT: A MEMBERSHIP COMMUNITY\n\nARCHITECT: Build a complete system for membership community.\n\nThe system must include: promise, rooms, onboarding, value calendar, engagement engine, growth loop, referral mechanism, and welcome pack.\n\nRequired sections:\n- The promise or outcome\n- The structure\n- The operating rhythm\n- Templates or scripts needed\n- Delivery or implementation workflow\n- Measurement system\n- Risks and how to prevent them\n\nTone: specific, premium, practical. Every section needs a next action.",
        "tags": [
          "Architect",
          "Prompt Codes"
        ]
      },
      {
        "id": "pc-19",
        "title": "Architect: A 90-Day Client Onboarding System",
        "description": "Architect prompt code for building systems from scratch.",
        "template": "ARCHITECT: A 90-DAY CLIENT ONBOARDING SYSTEM\n\nARCHITECT: Build a complete system for 90-day client onboarding system.\n\nThe system must include: pre-start sequence, first week, strategy month, trust building, reporting, Day 60 question, and 90-day checkpoint.\n\nRequired sections:\n- The promise or outcome\n- The structure\n- The operating rhythm\n- Templates or scripts needed\n- Delivery or implementation workflow\n- Measurement system\n- Risks and how to prevent them\n\nTone: specific, premium, practical. Every section needs a next action.",
        "tags": [
          "Architect",
          "Prompt Codes"
        ]
      },
      {
        "id": "pc-20",
        "title": "Architect: A Personal Brand Content System",
        "description": "Architect prompt code for building systems from scratch.",
        "template": "ARCHITECT: A PERSONAL BRAND CONTENT SYSTEM\n\nARCHITECT: Build a complete system for LinkedIn personal brand content system.\n\nThe system must include: pillars, weekly rhythm, hook formulas, engagement architecture, soft CTAs, and lead conversion.\n\nRequired sections:\n- The promise or outcome\n- The structure\n- The operating rhythm\n- Templates or scripts needed\n- Delivery or implementation workflow\n- Measurement system\n- Risks and how to prevent them\n\nTone: specific, premium, practical. Every section needs a next action.",
        "tags": [
          "Architect",
          "Prompt Codes"
        ]
      },
      {
        "id": "pc-21",
        "title": "Contrast: Weak Vs Strong LinkedIn Profile - Freelance Designer",
        "description": "Contrast prompt code for weak vs strong execution.",
        "template": "CONTRAST: WEAK VS STRONG LINKEDIN PROFILE - FREELANCE DESIGNER\n\nCONTRAST: Show the difference between weak and strong execution for LinkedIn profile contrast.\n\nInclude: weak profile, strong profile, annotations, featured section, skills strategy, and 30-day inbound actions.\n\nRequired structure:\nVERSION A - WEAK:\n- Write the weak version as people commonly do it\n- Annotate exactly why each part fails\n\nVERSION B - STRONG:\n- Rewrite the same asset at a professional standard\n- Annotate exactly why each choice works\n\nEnd with the single highest-leverage improvement someone can make immediately.",
        "tags": [
          "Contrast",
          "Prompt Codes"
        ]
      },
      {
        "id": "pc-22",
        "title": "Contrast: Weak Vs Strong Sales Page - Online Course",
        "description": "Contrast prompt code for weak vs strong execution.",
        "template": "CONTRAST: WEAK VS STRONG SALES PAGE - ONLINE COURSE\n\nCONTRAST: Show the difference between weak and strong execution for course sales page contrast.\n\nInclude: weak vs strong headline, subheadline, description, benefits, CTA, conversion psychology, and quick fix.\n\nRequired structure:\nVERSION A - WEAK:\n- Write the weak version as people commonly do it\n- Annotate exactly why each part fails\n\nVERSION B - STRONG:\n- Rewrite the same asset at a professional standard\n- Annotate exactly why each choice works\n\nEnd with the single highest-leverage improvement someone can make immediately.",
        "tags": [
          "Contrast",
          "Prompt Codes"
        ]
      },
      {
        "id": "pc-23",
        "title": "Contrast: Weak Vs Strong Client Proposal - Agency",
        "description": "Contrast prompt code for weak vs strong execution.",
        "template": "CONTRAST: WEAK VS STRONG CLIENT PROPOSAL - AGENCY\n\nCONTRAST: Show the difference between weak and strong execution for agency proposal contrast.\n\nInclude: weak vs strong cover, executive summary, scope, pricing, closing, client reactions, and why proposals lose.\n\nRequired structure:\nVERSION A - WEAK:\n- Write the weak version as people commonly do it\n- Annotate exactly why each part fails\n\nVERSION B - STRONG:\n- Rewrite the same asset at a professional standard\n- Annotate exactly why each choice works\n\nEnd with the single highest-leverage improvement someone can make immediately.",
        "tags": [
          "Contrast",
          "Prompt Codes"
        ]
      },
      {
        "id": "pc-24",
        "title": "Contrast: Weak Vs Strong Cold Outreach - B2B",
        "description": "Contrast prompt code for weak vs strong execution.",
        "template": "CONTRAST: WEAK VS STRONG COLD OUTREACH - B2B\n\nCONTRAST: Show the difference between weak and strong execution for cold outreach contrast.\n\nInclude: weak vs strong LinkedIn DM, opener, pitch, CTA, reply psychology, three opening lines, and banned word.\n\nRequired structure:\nVERSION A - WEAK:\n- Write the weak version as people commonly do it\n- Annotate exactly why each part fails\n\nVERSION B - STRONG:\n- Rewrite the same asset at a professional standard\n- Annotate exactly why each choice works\n\nEnd with the single highest-leverage improvement someone can make immediately.",
        "tags": [
          "Contrast",
          "Prompt Codes"
        ]
      },
      {
        "id": "pc-25",
        "title": "Contrast: Weak Vs Strong Discovery Call - Consultant",
        "description": "Contrast prompt code for weak vs strong execution.",
        "template": "CONTRAST: WEAK VS STRONG DISCOVERY CALL - CONSULTANT\n\nCONTRAST: Show the difference between weak and strong execution for discovery call contrast.\n\nInclude: weak vs expert consultant call, diagnostic questions, logo objection, price framing, exact close, and hidden close-rate question.\n\nRequired structure:\nVERSION A - WEAK:\n- Write the weak version as people commonly do it\n- Annotate exactly why each part fails\n\nVERSION B - STRONG:\n- Rewrite the same asset at a professional standard\n- Annotate exactly why each choice works\n\nEnd with the single highest-leverage improvement someone can make immediately.",
        "tags": [
          "Contrast",
          "Prompt Codes"
        ]
      }
    ]
  },
  {
    "id": "video-playbook",
    "name": "Seedance 2.0 Director's Playbook",
    "description": "Cinematic AI video direction prompts for short-form and brand storytelling.",
    "icon": "Video",
    "prompts": [
      {
        "id": "vid-1",
        "title": "Luxury Skincare Brand Commercial",
        "description": "Brand commercial video prompt.",
        "template": "Cinematic luxury skincare commercial. 15 seconds. No dialogue. No text overlays.\n\nSubject: [Describe the person/product/place with age, ethnicity where relevant, wardrobe, mood, and setting.]\n\nShot 1 (0-4s): Establish the opening beat with precise framing and motivated light. Key moment: fingertips entering cream serum.\nShot 2 (4-8s): Develop the story with controlled camera movement. Key moment: cheekbone application.\nShot 3 (8-12s): Move into the defining detail or emotional turn. Key moment: radiant eye contact.\nShot 4 (12-15s): Resolve with a memorable final image. Key moment: product jar rotating on marble.\n\nStyle: Chanel / La Mer skin-first beauty film.\nGrade: Specific colour palette matched to the scene, with controlled highlights and intentional shadows.\nAudio: Natural ambience plus one restrained sound-design accent; use silence where it increases emotion.\nQuality: 4K, stable motion, no distortion.",
        "tags": [
          "Seedance",
          "Brand Commercial"
        ]
      },
      {
        "id": "vid-2",
        "title": "Street Fashion Brand Launch Video",
        "description": "Brand commercial video prompt.",
        "template": "Cinematic street fashion brand launch. 15 seconds. No dialogue. No text overlays.\n\nSubject: [Describe the person/product/place with age, ethnicity where relevant, wardrobe, mood, and setting.]\n\nShot 1 (0-4s): Establish the opening beat with precise framing and motivated light. Key moment: rain-wet sneaker walk.\nShot 2 (4-8s): Develop the story with controlled camera movement. Key moment: East London market tracking shot.\nShot 3 (8-12s): Move into the defining detail or emotional turn. Key moment: 180-degree orbit.\nShot 4 (12-15s): Resolve with a memorable final image. Key moment: overhead drone pull-away.\n\nStyle: Nike / Palace streetwear editorial.\nGrade: Specific colour palette matched to the scene, with controlled highlights and intentional shadows.\nAudio: Natural ambience plus one restrained sound-design accent; use silence where it increases emotion.\nQuality: 4K, stable motion, no distortion.",
        "tags": [
          "Seedance",
          "Brand Commercial"
        ]
      },
      {
        "id": "vid-3",
        "title": "Premium Gym Equipment Commercial",
        "description": "Brand commercial video prompt.",
        "template": "Cinematic premium gym equipment commercial. 15 seconds. No dialogue. No text overlays.\n\nSubject: [Describe the person/product/place with age, ethnicity where relevant, wardrobe, mood, and setting.]\n\nShot 1 (0-4s): Establish the opening beat with precise framing and motivated light. Key moment: spotlit equipment reveal.\nShot 2 (4-8s): Develop the story with controlled camera movement. Key moment: athlete entering light.\nShot 3 (8-12s): Move into the defining detail or emotional turn. Key moment: perfect rep in slow motion.\nShot 4 (12-15s): Resolve with a memorable final image. Key moment: respectful machine-focused ending.\n\nStyle: Rogue Fitness dark industrial campaign.\nGrade: Specific colour palette matched to the scene, with controlled highlights and intentional shadows.\nAudio: Natural ambience plus one restrained sound-design accent; use silence where it increases emotion.\nQuality: 4K, stable motion, no distortion.",
        "tags": [
          "Seedance",
          "Brand Commercial"
        ]
      },
      {
        "id": "vid-4",
        "title": "Tech Startup Product Demo Video",
        "description": "Brand commercial video prompt.",
        "template": "Cinematic B2B tech product demo. 15 seconds. No dialogue. No text overlays.\n\nSubject: [Describe the person/product/place with age, ethnicity where relevant, wardrobe, mood, and setting.]\n\nShot 1 (0-4s): Establish the opening beat with precise framing and motivated light. Key moment: cluttered problem moment.\nShot 2 (4-8s): Develop the story with controlled camera movement. Key moment: clean UI discovery.\nShot 3 (8-12s): Move into the defining detail or emotional turn. Key moment: feature-speed transformation.\nShot 4 (12-15s): Resolve with a memorable final image. Key moment: calm tidy outcome.\n\nStyle: Notion / Linear / Stripe product marketing.\nGrade: Specific colour palette matched to the scene, with controlled highlights and intentional shadows.\nAudio: Natural ambience plus one restrained sound-design accent; use silence where it increases emotion.\nQuality: 4K, stable motion, no distortion.",
        "tags": [
          "Seedance",
          "Brand Commercial"
        ]
      },
      {
        "id": "vid-5",
        "title": "Luxury Hotel Brand Video",
        "description": "Brand commercial video prompt.",
        "template": "Cinematic luxury hotel brand film. 15 seconds. No dialogue. No text overlays.\n\nSubject: [Describe the person/product/place with age, ethnicity where relevant, wardrobe, mood, and setting.]\n\nShot 1 (0-4s): Establish the opening beat with precise framing and motivated light. Key moment: aerial sunrise reveal.\nShot 2 (4-8s): Develop the story with controlled camera movement. Key moment: still pool guest.\nShot 3 (8-12s): Move into the defining detail or emotional turn. Key moment: suite drift-through.\nShot 4 (12-15s): Resolve with a memorable final image. Key moment: horizon-only ending.\n\nStyle: Aman / Six Senses slow luxury.\nGrade: Specific colour palette matched to the scene, with controlled highlights and intentional shadows.\nAudio: Natural ambience plus one restrained sound-design accent; use silence where it increases emotion.\nQuality: 4K, stable motion, no distortion.",
        "tags": [
          "Seedance",
          "Brand Commercial"
        ]
      },
      {
        "id": "vid-6",
        "title": "Hip-Hop Artist - Statement Visual",
        "description": "Music artist visual prompt.",
        "template": "Cinematic hip-hop artist statement visual. 15 seconds. No dialogue. No text overlays.\n\nSubject: [Describe the person/product/place with age, ethnicity where relevant, wardrobe, mood, and setting.]\n\nShot 1 (0-4s): Establish the opening beat with precise framing and motivated light. Key moment: 3am car arrival.\nShot 2 (4-8s): Develop the story with controlled camera movement. Key moment: rain orbit.\nShot 3 (8-12s): Move into the defining detail or emotional turn. Key moment: five-second lens stare.\nShot 4 (12-15s): Resolve with a memorable final image. Key moment: hard cut to black.\n\nStyle: Drake / Travis Scott presence visual.\nGrade: Specific colour palette matched to the scene, with controlled highlights and intentional shadows.\nAudio: Natural ambience plus one restrained sound-design accent; use silence where it increases emotion.\nQuality: 4K, stable motion, no distortion.",
        "tags": [
          "Seedance",
          "Music Visual"
        ]
      },
      {
        "id": "vid-7",
        "title": "Afrobeats Artist - Golden Hour Visual",
        "description": "Music artist visual prompt.",
        "template": "Cinematic Afrobeats golden-hour visual. 15 seconds. No dialogue. No text overlays.\n\nSubject: [Describe the person/product/place with age, ethnicity where relevant, wardrobe, mood, and setting.]\n\nShot 1 (0-4s): Establish the opening beat with precise framing and motivated light. Key moment: Lagos rooftop stillness.\nShot 2 (4-8s): Develop the story with controlled camera movement. Key moment: private dance.\nShot 3 (8-12s): Move into the defining detail or emotional turn. Key moment: fabric and jewellery slow motion.\nShot 4 (12-15s): Resolve with a memorable final image. Key moment: genuine smile.\n\nStyle: Burna Boy / Wizkid warm human visual.\nGrade: Specific colour palette matched to the scene, with controlled highlights and intentional shadows.\nAudio: Natural ambience plus one restrained sound-design accent; use silence where it increases emotion.\nQuality: 4K, stable motion, no distortion.",
        "tags": [
          "Seedance",
          "Music Visual"
        ]
      },
      {
        "id": "vid-8",
        "title": "R&B Artist - Studio Intimate Visual",
        "description": "Music artist visual prompt.",
        "template": "Cinematic R&B studio intimate visual. 15 seconds. No dialogue. No text overlays.\n\nSubject: [Describe the person/product/place with age, ethnicity where relevant, wardrobe, mood, and setting.]\n\nShot 1 (0-4s): Establish the opening beat with precise framing and motivated light. Key moment: mic close-up.\nShot 2 (4-8s): Develop the story with controlled camera movement. Key moment: pullback through control-room glass.\nShot 3 (8-12s): Move into the defining detail or emotional turn. Key moment: headphone removal.\nShot 4 (12-15s): Resolve with a memorable final image. Key moment: waveform pulse.\n\nStyle: SZA / H.E.R. private studio intimacy.\nGrade: Specific colour palette matched to the scene, with controlled highlights and intentional shadows.\nAudio: Natural ambience plus one restrained sound-design accent; use silence where it increases emotion.\nQuality: 4K, stable motion, no distortion.",
        "tags": [
          "Seedance",
          "Music Visual"
        ]
      },
      {
        "id": "vid-9",
        "title": "Electronic Artist - Abstract Visual",
        "description": "Music artist visual prompt.",
        "template": "Cinematic electronic abstract visual. 15 seconds. No dialogue. No text overlays.\n\nSubject: [Describe the person/product/place with age, ethnicity where relevant, wardrobe, mood, and setting.]\n\nShot 1 (0-4s): Establish the opening beat with precise framing and motivated light. Key moment: empty warehouse beam.\nShot 2 (4-8s): Develop the story with controlled camera movement. Key moment: laser fracture.\nShot 3 (8-12s): Move into the defining detail or emotional turn. Key moment: smoke silhouette.\nShot 4 (12-15s): Resolve with a memorable final image. Key moment: blinding convergence.\n\nStyle: Four Tet / Aphex Twin non-literal space.\nGrade: Specific colour palette matched to the scene, with controlled highlights and intentional shadows.\nAudio: Natural ambience plus one restrained sound-design accent; use silence where it increases emotion.\nQuality: 4K, stable motion, no distortion.",
        "tags": [
          "Seedance",
          "Music Visual"
        ]
      },
      {
        "id": "vid-10",
        "title": "Gospel Artist - Spiritual Visual",
        "description": "Music artist visual prompt.",
        "template": "Cinematic gospel spiritual visual. 15 seconds. No dialogue. No text overlays.\n\nSubject: [Describe the person/product/place with age, ethnicity where relevant, wardrobe, mood, and setting.]\n\nShot 1 (0-4s): Establish the opening beat with precise framing and motivated light. Key moment: stone church scale.\nShot 2 (4-8s): Develop the story with controlled camera movement. Key moment: private raised hands.\nShot 3 (8-12s): Move into the defining detail or emotional turn. Key moment: single tear.\nShot 4 (12-15s): Resolve with a memorable final image. Key moment: backlit luminous fade.\n\nStyle: Maverick City reverent sacred film.\nGrade: Specific colour palette matched to the scene, with controlled highlights and intentional shadows.\nAudio: Natural ambience plus one restrained sound-design accent; use silence where it increases emotion.\nQuality: 4K, stable motion, no distortion.",
        "tags": [
          "Seedance",
          "Music Visual"
        ]
      },
      {
        "id": "vid-11",
        "title": "Small Business Owner - Brand Story Short",
        "description": "Social media content video prompt.",
        "template": "Cinematic small business brand story. 15 seconds. No dialogue. No text overlays.\n\nSubject: [Describe the person/product/place with age, ethnicity where relevant, wardrobe, mood, and setting.]\n\nShot 1 (0-4s): Establish the opening beat with precise framing and motivated light. Key moment: 4am hands at work.\nShot 2 (4-8s): Develop the story with controlled camera movement. Key moment: product pride.\nShot 3 (8-12s): Move into the defining detail or emotional turn. Key moment: first customer joy.\nShot 4 (12-15s): Resolve with a memorable final image. Key moment: cycle begins again.\n\nStyle: warm micro-documentary.\nGrade: Specific colour palette matched to the scene, with controlled highlights and intentional shadows.\nAudio: Natural ambience plus one restrained sound-design accent; use silence where it increases emotion.\nQuality: 4K, stable motion, no distortion.",
        "tags": [
          "Seedance",
          "Social Video"
        ]
      },
      {
        "id": "vid-12",
        "title": "Personal Trainer - Client Transformation Short",
        "description": "Social media content video prompt.",
        "template": "Cinematic personal trainer client transformation. 15 seconds. No dialogue. No text overlays.\n\nSubject: [Describe the person/product/place with age, ethnicity where relevant, wardrobe, mood, and setting.]\n\nShot 1 (0-4s): Establish the opening beat with precise framing and motivated light. Key moment: uncertain arrival.\nShot 2 (4-8s): Develop the story with controlled camera movement. Key moment: honest effort montage.\nShot 3 (8-12s): Move into the defining detail or emotional turn. Key moment: one perfect rep.\nShot 4 (12-15s): Resolve with a memorable final image. Key moment: resolved bench moment.\n\nStyle: Nike Training documentary realism.\nGrade: Specific colour palette matched to the scene, with controlled highlights and intentional shadows.\nAudio: Natural ambience plus one restrained sound-design accent; use silence where it increases emotion.\nQuality: 4K, stable motion, no distortion.",
        "tags": [
          "Seedance",
          "Social Video"
        ]
      },
      {
        "id": "vid-13",
        "title": "Beauty Business Owner - Product Reveal Short",
        "description": "Social media content video prompt.",
        "template": "Cinematic beauty founder product reveal. 15 seconds. No dialogue. No text overlays.\n\nSubject: [Describe the person/product/place with age, ethnicity where relevant, wardrobe, mood, and setting.]\n\nShot 1 (0-4s): Establish the opening beat with precise framing and motivated light. Key moment: marble product push-in.\nShot 2 (4-8s): Develop the story with controlled camera movement. Key moment: founder smelling product.\nShot 3 (8-12s): Move into the defining detail or emotional turn. Key moment: careful arrangement.\nShot 4 (12-15s): Resolve with a memorable final image. Key moment: product-only pullback.\n\nStyle: Aesop / Byredo product-as-character film.\nGrade: Specific colour palette matched to the scene, with controlled highlights and intentional shadows.\nAudio: Natural ambience plus one restrained sound-design accent; use silence where it increases emotion.\nQuality: 4K, stable motion, no distortion.",
        "tags": [
          "Seedance",
          "Social Video"
        ]
      },
      {
        "id": "vid-14",
        "title": "Motivational Speaker - Personal Brand Short",
        "description": "Social media content video prompt.",
        "template": "Cinematic motivational speaker personal brand. 15 seconds. No dialogue. No text overlays.\n\nSubject: [Describe the person/product/place with age, ethnicity where relevant, wardrobe, mood, and setting.]\n\nShot 1 (0-4s): Establish the opening beat with precise framing and motivated light. Key moment: backstage breath.\nShot 2 (4-8s): Develop the story with controlled camera movement. Key moment: walk into stage light.\nShot 3 (8-12s): Move into the defining detail or emotional turn. Key moment: silent wide stage.\nShot 4 (12-15s): Resolve with a memorable final image. Key moment: eye contact with one audience member.\n\nStyle: presence-focused speaker film.\nGrade: Specific colour palette matched to the scene, with controlled highlights and intentional shadows.\nAudio: Natural ambience plus one restrained sound-design accent; use silence where it increases emotion.\nQuality: 4K, stable motion, no distortion.",
        "tags": [
          "Seedance",
          "Social Video"
        ]
      },
      {
        "id": "vid-15",
        "title": "Real Estate Agent - Property Listing Short",
        "description": "Social media content video prompt.",
        "template": "Cinematic premium property listing. 15 seconds. No dialogue. No text overlays.\n\nSubject: [Describe the person/product/place with age, ethnicity where relevant, wardrobe, mood, and setting.]\n\nShot 1 (0-4s): Establish the opening beat with precise framing and motivated light. Key moment: drone facade reveal.\nShot 2 (4-8s): Develop the story with controlled camera movement. Key moment: kitchen slider.\nShot 3 (8-12s): Move into the defining detail or emotional turn. Key moment: garden life detail.\nShot 4 (12-15s): Resolve with a memorable final image. Key moment: warm facade ending.\n\nStyle: Knight Frank / Savills listing film.\nGrade: Specific colour palette matched to the scene, with controlled highlights and intentional shadows.\nAudio: Natural ambience plus one restrained sound-design accent; use silence where it increases emotion.\nQuality: 4K, stable motion, no distortion.",
        "tags": [
          "Seedance",
          "Social Video"
        ]
      },
      {
        "id": "vid-16",
        "title": "The Early Morning Ritual",
        "description": "Cinematic short story prompt.",
        "template": "Cinematic early morning ritual. 15 seconds. No dialogue. No text overlays.\n\nSubject: [Describe the person/product/place with age, ethnicity where relevant, wardrobe, mood, and setting.]\n\nShot 1 (0-4s): Establish the opening beat with precise framing and motivated light. Key moment: 5:30 alarm.\nShot 2 (4-8s): Develop the story with controlled camera movement. Key moment: sitting on bed deciding.\nShot 3 (8-12s): Move into the defining detail or emotional turn. Key moment: espresso close-up.\nShot 4 (12-15s): Resolve with a memorable final image. Key moment: city window resolve.\n\nStyle: quiet pre-dawn short film.\nGrade: Specific colour palette matched to the scene, with controlled highlights and intentional shadows.\nAudio: Natural ambience plus one restrained sound-design accent; use silence where it increases emotion.\nQuality: 4K, stable motion, no distortion.",
        "tags": [
          "Seedance",
          "Short Story"
        ]
      },
      {
        "id": "vid-17",
        "title": "The Last Day In The City",
        "description": "Cinematic short story prompt.",
        "template": "Cinematic last day in the city. 15 seconds. No dialogue. No text overlays.\n\nSubject: [Describe the person/product/place with age, ethnicity where relevant, wardrobe, mood, and setting.]\n\nShot 1 (0-4s): Establish the opening beat with precise framing and motivated light. Key moment: bridge at dawn.\nShot 2 (4-8s): Develop the story with controlled camera movement. Key moment: hand on brick wall.\nShot 3 (8-12s): Move into the defining detail or emotional turn. Key moment: final coffee shop visit.\nShot 4 (12-15s): Resolve with a memorable final image. Key moment: walk to station.\n\nStyle: Wong Kar-wai farewell mood.\nGrade: Specific colour palette matched to the scene, with controlled highlights and intentional shadows.\nAudio: Natural ambience plus one restrained sound-design accent; use silence where it increases emotion.\nQuality: 4K, stable motion, no distortion.",
        "tags": [
          "Seedance",
          "Short Story"
        ]
      },
      {
        "id": "vid-18",
        "title": "The Artist And The Work",
        "description": "Cinematic short story prompt.",
        "template": "Cinematic artist breakthrough. 15 seconds. No dialogue. No text overlays.\n\nSubject: [Describe the person/product/place with age, ethnicity where relevant, wardrobe, mood, and setting.]\n\nShot 1 (0-4s): Establish the opening beat with precise framing and motivated light. Key moment: unfinished canvas stare.\nShot 2 (4-8s): Develop the story with controlled camera movement. Key moment: posture shift.\nShot 3 (8-12s): Move into the defining detail or emotional turn. Key moment: bold brush stroke macro.\nShot 4 (12-15s): Resolve with a memorable final image. Key moment: final exhale.\n\nStyle: raw artist documentary.\nGrade: Specific colour palette matched to the scene, with controlled highlights and intentional shadows.\nAudio: Natural ambience plus one restrained sound-design accent; use silence where it increases emotion.\nQuality: 4K, stable motion, no distortion.",
        "tags": [
          "Seedance",
          "Short Story"
        ]
      },
      {
        "id": "vid-19",
        "title": "The Business Pitch",
        "description": "Cinematic short story prompt.",
        "template": "Cinematic business pitch. 15 seconds. No dialogue. No text overlays.\n\nSubject: [Describe the person/product/place with age, ethnicity where relevant, wardrobe, mood, and setting.]\n\nShot 1 (0-4s): Establish the opening beat with precise framing and motivated light. Key moment: corridor note cards.\nShot 2 (4-8s): Develop the story with controlled camera movement. Key moment: boardroom entry.\nShot 3 (8-12s): Move into the defining detail or emotional turn. Key moment: conviction mid-pitch.\nShot 4 (12-15s): Resolve with a memorable final image. Key moment: investor leans forward.\n\nStyle: startup narrative tension.\nGrade: Specific colour palette matched to the scene, with controlled highlights and intentional shadows.\nAudio: Natural ambience plus one restrained sound-design accent; use silence where it increases emotion.\nQuality: 4K, stable motion, no distortion.",
        "tags": [
          "Seedance",
          "Short Story"
        ]
      },
      {
        "id": "vid-20",
        "title": "The Homecoming",
        "description": "Cinematic short story prompt.",
        "template": "Cinematic homecoming. 15 seconds. No dialogue. No text overlays.\n\nSubject: [Describe the person/product/place with age, ethnicity where relevant, wardrobe, mood, and setting.]\n\nShot 1 (0-4s): Establish the opening beat with precise framing and motivated light. Key moment: train-window face.\nShot 2 (4-8s): Develop the story with controlled camera movement. Key moment: known house at night.\nShot 3 (8-12s): Move into the defining detail or emotional turn. Key moment: gate opening.\nShot 4 (12-15s): Resolve with a memorable final image. Key moment: door opens into warmth.\n\nStyle: quiet emotional homecoming.\nGrade: Specific colour palette matched to the scene, with controlled highlights and intentional shadows.\nAudio: Natural ambience plus one restrained sound-design accent; use silence where it increases emotion.\nQuality: 4K, stable motion, no distortion.",
        "tags": [
          "Seedance",
          "Short Story"
        ]
      },
      {
        "id": "vid-21",
        "title": "The Market Trader",
        "description": "Documentary-style video prompt.",
        "template": "Cinematic market trader documentary. 15 seconds. No dialogue. No text overlays.\n\nSubject: [Describe the person/product/place with age, ethnicity where relevant, wardrobe, mood, and setting.]\n\nShot 1 (0-4s): Establish the opening beat with precise framing and motivated light. Key moment: 5am setup.\nShot 2 (4-8s): Develop the story with controlled camera movement. Key moment: market opens.\nShot 3 (8-12s): Move into the defining detail or emotional turn. Key moment: quiet stall moment.\nShot 4 (12-15s): Resolve with a memorable final image. Key moment: expert customer care.\n\nStyle: BBC Storyworks market realism.\nGrade: Specific colour palette matched to the scene, with controlled highlights and intentional shadows.\nAudio: Natural ambience plus one restrained sound-design accent; use silence where it increases emotion.\nQuality: 4K, stable motion, no distortion.",
        "tags": [
          "Seedance",
          "Documentary"
        ]
      },
      {
        "id": "vid-22",
        "title": "Nurse End Of Shift",
        "description": "Documentary-style video prompt.",
        "template": "Cinematic nurse end of shift. 15 seconds. No dialogue. No text overlays.\n\nSubject: [Describe the person/product/place with age, ethnicity where relevant, wardrobe, mood, and setting.]\n\nShot 1 (0-4s): Establish the opening beat with precise framing and motivated light. Key moment: gloves removed.\nShot 2 (4-8s): Develop the story with controlled camera movement. Key moment: locker family photo.\nShot 3 (8-12s): Move into the defining detail or emotional turn. Key moment: first outdoor breath.\nShot 4 (12-15s): Resolve with a memorable final image. Key moment: bus stop at dawn.\n\nStyle: observational healthcare documentary.\nGrade: Specific colour palette matched to the scene, with controlled highlights and intentional shadows.\nAudio: Natural ambience plus one restrained sound-design accent; use silence where it increases emotion.\nQuality: 4K, stable motion, no distortion.",
        "tags": [
          "Seedance",
          "Documentary"
        ]
      },
      {
        "id": "vid-23",
        "title": "Independent Bookshop Owner",
        "description": "Documentary-style video prompt.",
        "template": "Cinematic independent bookshop owner. 15 seconds. No dialogue. No text overlays.\n\nSubject: [Describe the person/product/place with age, ethnicity where relevant, wardrobe, mood, and setting.]\n\nShot 1 (0-4s): Establish the opening beat with precise framing and motivated light. Key moment: door key turning.\nShot 2 (4-8s): Develop the story with controlled camera movement. Key moment: staff-pick card.\nShot 3 (8-12s): Move into the defining detail or emotional turn. Key moment: first recommendation.\nShot 4 (12-15s): Resolve with a memorable final image. Key moment: warm window ending.\n\nStyle: literary micro-documentary.\nGrade: Specific colour palette matched to the scene, with controlled highlights and intentional shadows.\nAudio: Natural ambience plus one restrained sound-design accent; use silence where it increases emotion.\nQuality: 4K, stable motion, no distortion.",
        "tags": [
          "Seedance",
          "Documentary"
        ]
      },
      {
        "id": "vid-24",
        "title": "Night Security Guard",
        "description": "Documentary-style video prompt.",
        "template": "Cinematic night security guard. 15 seconds. No dialogue. No text overlays.\n\nSubject: [Describe the person/product/place with age, ethnicity where relevant, wardrobe, mood, and setting.]\n\nShot 1 (0-4s): Establish the opening beat with precise framing and motivated light. Key moment: torch in empty lobby.\nShot 2 (4-8s): Develop the story with controlled camera movement. Key moment: CCTV glow.\nShot 3 (8-12s): Move into the defining detail or emotional turn. Key moment: rooftop city pause.\nShot 4 (12-15s): Resolve with a memorable final image. Key moment: locked-door patrol.\n\nStyle: lonely urban documentary.\nGrade: Specific colour palette matched to the scene, with controlled highlights and intentional shadows.\nAudio: Natural ambience plus one restrained sound-design accent; use silence where it increases emotion.\nQuality: 4K, stable motion, no distortion.",
        "tags": [
          "Seedance",
          "Documentary"
        ]
      },
      {
        "id": "vid-25",
        "title": "First-Generation University Graduate",
        "description": "Documentary-style video prompt.",
        "template": "Cinematic first-generation university graduate. 15 seconds. No dialogue. No text overlays.\n\nSubject: [Describe the person/product/place with age, ethnicity where relevant, wardrobe, mood, and setting.]\n\nShot 1 (0-4s): Establish the opening beat with precise framing and motivated light. Key moment: gown adjusted by parent.\nShot 2 (4-8s): Develop the story with controlled camera movement. Key moment: campus walk.\nShot 3 (8-12s): Move into the defining detail or emotional turn. Key moment: family spotted.\nShot 4 (12-15s): Resolve with a memorable final image. Key moment: certificate photo.\n\nStyle: warm graduation documentary.\nGrade: Specific colour palette matched to the scene, with controlled highlights and intentional shadows.\nAudio: Natural ambience plus one restrained sound-design accent; use silence where it increases emotion.\nQuality: 4K, stable motion, no distortion.",
        "tags": [
          "Seedance",
          "Documentary"
        ]
      }
    ]
  }
];
