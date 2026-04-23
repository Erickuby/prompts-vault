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
        "description": "Profile photos, personal branding, editorial content. High-converting image format.",
        "template": "A [AGE]-year-old [ETHNICITY] Creator in a [COLOUR] suit/attire,\n[EXPRESSION].\nPhotographed in their glass-walled modern office at [TIME].\nWarm amber key light from camera right at 45 degrees, cool blue fill from the window behind,\nsoft rim lighting separating shoulders from the background.\nTight medium shot, shot on Hasselblad X2D, 85mm lens at f/1.8, shallow depth of field,\nultra-sharp focus on the eyes, natural skin texture with visible pores.\nHigh fashion hyper-realistic aesthetic, muted tones.\n--ar 4:5 --v 7",
        "tags": [
          "Portraits",
          "Professional",
          "Midjourney"
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
        "description": "Profile photos, personal branding, editorial content. High-converting image format.",
        "template": "A [AGE]-year-old [ETHNICITY] Designer in a [COLOUR] suit/attire,\n[EXPRESSION].\nPhotographed in their glass-walled modern office at [TIME].\nWarm amber key light from camera right at 45 degrees, cool blue fill from the window behind,\nsoft rim lighting separating shoulders from the background.\nTight medium shot, shot on Hasselblad X2D, 85mm lens at f/1.8, shallow depth of field,\nultra-sharp focus on the eyes, natural skin texture with visible pores.\nMonochromatic with deep shadows, intense contrast.\n--ar 4:5 --v 7",
        "tags": [
          "Portraits",
          "Professional",
          "Midjourney"
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
        "description": "Profile photos, personal branding, editorial content. High-converting image format.",
        "template": "A [AGE]-year-old [ETHNICITY] Strategist in a [COLOUR] suit/attire,\n[EXPRESSION].\nPhotographed in their glass-walled modern office at [TIME].\nWarm amber key light from camera right at 45 degrees, cool blue fill from the window behind,\nsoft rim lighting separating shoulders from the background.\nTight medium shot, shot on Hasselblad X2D, 85mm lens at f/1.8, shallow depth of field,\nultra-sharp focus on the eyes, natural skin texture with visible pores.\nGritty documentarian style, desaturated colors.\n--ar 4:5 --v 7",
        "tags": [
          "Portraits",
          "Professional",
          "Midjourney"
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
        "description": "Profile photos, personal branding, editorial content. High-converting image format.",
        "template": "A [AGE]-year-old [ETHNICITY] Writer in a [COLOUR] suit/attire,\n[EXPRESSION].\nPhotographed in their glass-walled modern office at [TIME].\nWarm amber key light from camera right at 45 degrees, cool blue fill from the window behind,\nsoft rim lighting separating shoulders from the background.\nTight medium shot, shot on Hasselblad X2D, 85mm lens at f/1.8, shallow depth of field,\nultra-sharp focus on the eyes, natural skin texture with visible pores.\nMoody and dark atmospheric grading.\n--ar 4:5 --v 7",
        "tags": [
          "Portraits",
          "Professional",
          "Midjourney"
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
        "description": "Profile photos, personal branding, editorial content. High-converting image format.",
        "template": "A [AGE]-year-old [ETHNICITY] Chef in a [COLOUR] suit/attire,\n[EXPRESSION].\nPhotographed in their glass-walled modern office at [TIME].\nWarm amber key light from camera right at 45 degrees, cool blue fill from the window behind,\nsoft rim lighting separating shoulders from the background.\nTight medium shot, shot on Hasselblad X2D, 85mm lens at f/1.8, shallow depth of field,\nultra-sharp focus on the eyes, natural skin texture with visible pores.\nEthereal and dreamy, soft focus edges.\n--ar 4:5 --v 7",
        "tags": [
          "Portraits",
          "Professional",
          "Midjourney"
        ],
        "rules": [
          "Front-load the subject",
          "Use real photography vocabulary",
          "Specify lighting direction"
        ]
      },
      {
        "id": "img-6",
        "title": "The Creator Portrait",
        "description": "Profile photos, personal branding, editorial content. High-converting image format.",
        "template": "A [AGE]-year-old [ETHNICITY] Creator in a [COLOUR] suit/attire,\n[EXPRESSION].\nPhotographed in their glass-walled modern office at [TIME].\nWarm amber key light from camera right at 45 degrees, cool blue fill from the window behind,\nsoft rim lighting separating shoulders from the background.\nTight medium shot, shot on Hasselblad X2D, 85mm lens at f/1.8, shallow depth of field,\nultra-sharp focus on the eyes, natural skin texture with visible pores.\nHigh fashion hyper-realistic aesthetic, muted tones.\n--ar 4:5 --v 7",
        "tags": [
          "Portraits",
          "Professional",
          "Midjourney"
        ],
        "rules": [
          "Front-load the subject",
          "Use real photography vocabulary",
          "Specify lighting direction"
        ]
      },
      {
        "id": "img-7",
        "title": "The Designer Portrait",
        "description": "Profile photos, personal branding, editorial content. High-converting image format.",
        "template": "A [AGE]-year-old [ETHNICITY] Designer in a [COLOUR] suit/attire,\n[EXPRESSION].\nPhotographed in their glass-walled modern office at [TIME].\nWarm amber key light from camera right at 45 degrees, cool blue fill from the window behind,\nsoft rim lighting separating shoulders from the background.\nTight medium shot, shot on Hasselblad X2D, 85mm lens at f/1.8, shallow depth of field,\nultra-sharp focus on the eyes, natural skin texture with visible pores.\nMonochromatic with deep shadows, intense contrast.\n--ar 4:5 --v 7",
        "tags": [
          "Portraits",
          "Professional",
          "Midjourney"
        ],
        "rules": [
          "Front-load the subject",
          "Use real photography vocabulary",
          "Specify lighting direction"
        ]
      },
      {
        "id": "img-8",
        "title": "The Strategist Portrait",
        "description": "Profile photos, personal branding, editorial content. High-converting image format.",
        "template": "A [AGE]-year-old [ETHNICITY] Strategist in a [COLOUR] suit/attire,\n[EXPRESSION].\nPhotographed in their glass-walled modern office at [TIME].\nWarm amber key light from camera right at 45 degrees, cool blue fill from the window behind,\nsoft rim lighting separating shoulders from the background.\nTight medium shot, shot on Hasselblad X2D, 85mm lens at f/1.8, shallow depth of field,\nultra-sharp focus on the eyes, natural skin texture with visible pores.\nGritty documentarian style, desaturated colors.\n--ar 4:5 --v 7",
        "tags": [
          "Portraits",
          "Professional",
          "Midjourney"
        ],
        "rules": [
          "Front-load the subject",
          "Use real photography vocabulary",
          "Specify lighting direction"
        ]
      },
      {
        "id": "img-9",
        "title": "The Writer Portrait",
        "description": "Profile photos, personal branding, editorial content. High-converting image format.",
        "template": "A [AGE]-year-old [ETHNICITY] Writer in a [COLOUR] suit/attire,\n[EXPRESSION].\nPhotographed in their glass-walled modern office at [TIME].\nWarm amber key light from camera right at 45 degrees, cool blue fill from the window behind,\nsoft rim lighting separating shoulders from the background.\nTight medium shot, shot on Hasselblad X2D, 85mm lens at f/1.8, shallow depth of field,\nultra-sharp focus on the eyes, natural skin texture with visible pores.\nMoody and dark atmospheric grading.\n--ar 4:5 --v 7",
        "tags": [
          "Portraits",
          "Professional",
          "Midjourney"
        ],
        "rules": [
          "Front-load the subject",
          "Use real photography vocabulary",
          "Specify lighting direction"
        ]
      },
      {
        "id": "img-10",
        "title": "The Chef Portrait",
        "description": "Profile photos, personal branding, editorial content. High-converting image format.",
        "template": "A [AGE]-year-old [ETHNICITY] Chef in a [COLOUR] suit/attire,\n[EXPRESSION].\nPhotographed in their glass-walled modern office at [TIME].\nWarm amber key light from camera right at 45 degrees, cool blue fill from the window behind,\nsoft rim lighting separating shoulders from the background.\nTight medium shot, shot on Hasselblad X2D, 85mm lens at f/1.8, shallow depth of field,\nultra-sharp focus on the eyes, natural skin texture with visible pores.\nEthereal and dreamy, soft focus edges.\n--ar 4:5 --v 7",
        "tags": [
          "Portraits",
          "Professional",
          "Midjourney"
        ],
        "rules": [
          "Front-load the subject",
          "Use real photography vocabulary",
          "Specify lighting direction"
        ]
      },
      {
        "id": "img-11",
        "title": "The Creator Portrait",
        "description": "Profile photos, personal branding, editorial content. High-converting image format.",
        "template": "A [AGE]-year-old [ETHNICITY] Creator in a [COLOUR] suit/attire,\n[EXPRESSION].\nPhotographed in their glass-walled modern office at [TIME].\nWarm amber key light from camera right at 45 degrees, cool blue fill from the window behind,\nsoft rim lighting separating shoulders from the background.\nTight medium shot, shot on Hasselblad X2D, 85mm lens at f/1.8, shallow depth of field,\nultra-sharp focus on the eyes, natural skin texture with visible pores.\nHigh fashion hyper-realistic aesthetic, muted tones.\n--ar 4:5 --v 7",
        "tags": [
          "Portraits",
          "Professional",
          "Midjourney"
        ],
        "rules": [
          "Front-load the subject",
          "Use real photography vocabulary",
          "Specify lighting direction"
        ]
      },
      {
        "id": "img-12",
        "title": "The Designer Portrait",
        "description": "Profile photos, personal branding, editorial content. High-converting image format.",
        "template": "A [AGE]-year-old [ETHNICITY] Designer in a [COLOUR] suit/attire,\n[EXPRESSION].\nPhotographed in their glass-walled modern office at [TIME].\nWarm amber key light from camera right at 45 degrees, cool blue fill from the window behind,\nsoft rim lighting separating shoulders from the background.\nTight medium shot, shot on Hasselblad X2D, 85mm lens at f/1.8, shallow depth of field,\nultra-sharp focus on the eyes, natural skin texture with visible pores.\nMonochromatic with deep shadows, intense contrast.\n--ar 4:5 --v 7",
        "tags": [
          "Portraits",
          "Professional",
          "Midjourney"
        ],
        "rules": [
          "Front-load the subject",
          "Use real photography vocabulary",
          "Specify lighting direction"
        ]
      },
      {
        "id": "img-13",
        "title": "The Strategist Portrait",
        "description": "Profile photos, personal branding, editorial content. High-converting image format.",
        "template": "A [AGE]-year-old [ETHNICITY] Strategist in a [COLOUR] suit/attire,\n[EXPRESSION].\nPhotographed in their glass-walled modern office at [TIME].\nWarm amber key light from camera right at 45 degrees, cool blue fill from the window behind,\nsoft rim lighting separating shoulders from the background.\nTight medium shot, shot on Hasselblad X2D, 85mm lens at f/1.8, shallow depth of field,\nultra-sharp focus on the eyes, natural skin texture with visible pores.\nGritty documentarian style, desaturated colors.\n--ar 4:5 --v 7",
        "tags": [
          "Portraits",
          "Professional",
          "Midjourney"
        ],
        "rules": [
          "Front-load the subject",
          "Use real photography vocabulary",
          "Specify lighting direction"
        ]
      },
      {
        "id": "img-14",
        "title": "The Writer Portrait",
        "description": "Profile photos, personal branding, editorial content. High-converting image format.",
        "template": "A [AGE]-year-old [ETHNICITY] Writer in a [COLOUR] suit/attire,\n[EXPRESSION].\nPhotographed in their glass-walled modern office at [TIME].\nWarm amber key light from camera right at 45 degrees, cool blue fill from the window behind,\nsoft rim lighting separating shoulders from the background.\nTight medium shot, shot on Hasselblad X2D, 85mm lens at f/1.8, shallow depth of field,\nultra-sharp focus on the eyes, natural skin texture with visible pores.\nMoody and dark atmospheric grading.\n--ar 4:5 --v 7",
        "tags": [
          "Portraits",
          "Professional",
          "Midjourney"
        ],
        "rules": [
          "Front-load the subject",
          "Use real photography vocabulary",
          "Specify lighting direction"
        ]
      },
      {
        "id": "img-15",
        "title": "The Chef Portrait",
        "description": "Profile photos, personal branding, editorial content. High-converting image format.",
        "template": "A [AGE]-year-old [ETHNICITY] Chef in a [COLOUR] suit/attire,\n[EXPRESSION].\nPhotographed in their glass-walled modern office at [TIME].\nWarm amber key light from camera right at 45 degrees, cool blue fill from the window behind,\nsoft rim lighting separating shoulders from the background.\nTight medium shot, shot on Hasselblad X2D, 85mm lens at f/1.8, shallow depth of field,\nultra-sharp focus on the eyes, natural skin texture with visible pores.\nEthereal and dreamy, soft focus edges.\n--ar 4:5 --v 7",
        "tags": [
          "Portraits",
          "Professional",
          "Midjourney"
        ],
        "rules": [
          "Front-load the subject",
          "Use real photography vocabulary",
          "Specify lighting direction"
        ]
      },
      {
        "id": "img-16",
        "title": "The Creator Portrait",
        "description": "Profile photos, personal branding, editorial content. High-converting image format.",
        "template": "A [AGE]-year-old [ETHNICITY] Creator in a [COLOUR] suit/attire,\n[EXPRESSION].\nPhotographed in their glass-walled modern office at [TIME].\nWarm amber key light from camera right at 45 degrees, cool blue fill from the window behind,\nsoft rim lighting separating shoulders from the background.\nTight medium shot, shot on Hasselblad X2D, 85mm lens at f/1.8, shallow depth of field,\nultra-sharp focus on the eyes, natural skin texture with visible pores.\nHigh fashion hyper-realistic aesthetic, muted tones.\n--ar 4:5 --v 7",
        "tags": [
          "Portraits",
          "Professional",
          "Midjourney"
        ],
        "rules": [
          "Front-load the subject",
          "Use real photography vocabulary",
          "Specify lighting direction"
        ]
      },
      {
        "id": "img-17",
        "title": "The Designer Portrait",
        "description": "Profile photos, personal branding, editorial content. High-converting image format.",
        "template": "A [AGE]-year-old [ETHNICITY] Designer in a [COLOUR] suit/attire,\n[EXPRESSION].\nPhotographed in their glass-walled modern office at [TIME].\nWarm amber key light from camera right at 45 degrees, cool blue fill from the window behind,\nsoft rim lighting separating shoulders from the background.\nTight medium shot, shot on Hasselblad X2D, 85mm lens at f/1.8, shallow depth of field,\nultra-sharp focus on the eyes, natural skin texture with visible pores.\nMonochromatic with deep shadows, intense contrast.\n--ar 4:5 --v 7",
        "tags": [
          "Portraits",
          "Professional",
          "Midjourney"
        ],
        "rules": [
          "Front-load the subject",
          "Use real photography vocabulary",
          "Specify lighting direction"
        ]
      },
      {
        "id": "img-18",
        "title": "The Strategist Portrait",
        "description": "Profile photos, personal branding, editorial content. High-converting image format.",
        "template": "A [AGE]-year-old [ETHNICITY] Strategist in a [COLOUR] suit/attire,\n[EXPRESSION].\nPhotographed in their glass-walled modern office at [TIME].\nWarm amber key light from camera right at 45 degrees, cool blue fill from the window behind,\nsoft rim lighting separating shoulders from the background.\nTight medium shot, shot on Hasselblad X2D, 85mm lens at f/1.8, shallow depth of field,\nultra-sharp focus on the eyes, natural skin texture with visible pores.\nGritty documentarian style, desaturated colors.\n--ar 4:5 --v 7",
        "tags": [
          "Portraits",
          "Professional",
          "Midjourney"
        ],
        "rules": [
          "Front-load the subject",
          "Use real photography vocabulary",
          "Specify lighting direction"
        ]
      },
      {
        "id": "img-19",
        "title": "The Writer Portrait",
        "description": "Profile photos, personal branding, editorial content. High-converting image format.",
        "template": "A [AGE]-year-old [ETHNICITY] Writer in a [COLOUR] suit/attire,\n[EXPRESSION].\nPhotographed in their glass-walled modern office at [TIME].\nWarm amber key light from camera right at 45 degrees, cool blue fill from the window behind,\nsoft rim lighting separating shoulders from the background.\nTight medium shot, shot on Hasselblad X2D, 85mm lens at f/1.8, shallow depth of field,\nultra-sharp focus on the eyes, natural skin texture with visible pores.\nMoody and dark atmospheric grading.\n--ar 4:5 --v 7",
        "tags": [
          "Portraits",
          "Professional",
          "Midjourney"
        ],
        "rules": [
          "Front-load the subject",
          "Use real photography vocabulary",
          "Specify lighting direction"
        ]
      },
      {
        "id": "img-20",
        "title": "The Chef Portrait",
        "description": "Profile photos, personal branding, editorial content. High-converting image format.",
        "template": "A [AGE]-year-old [ETHNICITY] Chef in a [COLOUR] suit/attire,\n[EXPRESSION].\nPhotographed in their glass-walled modern office at [TIME].\nWarm amber key light from camera right at 45 degrees, cool blue fill from the window behind,\nsoft rim lighting separating shoulders from the background.\nTight medium shot, shot on Hasselblad X2D, 85mm lens at f/1.8, shallow depth of field,\nultra-sharp focus on the eyes, natural skin texture with visible pores.\nEthereal and dreamy, soft focus edges.\n--ar 4:5 --v 7",
        "tags": [
          "Portraits",
          "Professional",
          "Midjourney"
        ],
        "rules": [
          "Front-load the subject",
          "Use real photography vocabulary",
          "Specify lighting direction"
        ]
      },
      {
        "id": "img-21",
        "title": "The Explorer Hero",
        "description": "Cinematic shot focused on action and environment.",
        "template": "A [AGE]-year-old [ETHNICITY] Explorer, wearing [DETAILED OUTFIT with texture],\nstanding at the edge of a rooftop at golden hour with [CITY] skyline behind them.\nExpression: calm, powerful, contemplative.\nWarm amber backlight wrapping around the silhouette, soft natural fill on the face from a bounce board.\nHigh fashion hyper-realistic aesthetic, muted tones.\nShot on Phase One IQ4, 85mm f/1.4, shallow depth of field.\n--ar 3:4 --v 7 --stylize 200",
        "tags": [
          "Portraits",
          "Hero",
          "Cinematic"
        ]
      },
      {
        "id": "img-22",
        "title": "The Climber Hero",
        "description": "Cinematic shot focused on action and environment.",
        "template": "A [AGE]-year-old [ETHNICITY] Climber, wearing [DETAILED OUTFIT with texture],\nstanding at the edge of a rooftop at golden hour with [CITY] skyline behind them.\nExpression: calm, powerful, contemplative.\nWarm amber backlight wrapping around the silhouette, soft natural fill on the face from a bounce board.\nMonochromatic with deep shadows, intense contrast.\nShot on Phase One IQ4, 85mm f/1.4, shallow depth of field.\n--ar 3:4 --v 7 --stylize 200",
        "tags": [
          "Portraits",
          "Hero",
          "Cinematic"
        ]
      },
      {
        "id": "img-23",
        "title": "The Dancer Hero",
        "description": "Cinematic shot focused on action and environment.",
        "template": "A [AGE]-year-old [ETHNICITY] Dancer, wearing [DETAILED OUTFIT with texture],\nstanding at the edge of a rooftop at golden hour with [CITY] skyline behind them.\nExpression: calm, powerful, contemplative.\nWarm amber backlight wrapping around the silhouette, soft natural fill on the face from a bounce board.\nGritty documentarian style, desaturated colors.\nShot on Phase One IQ4, 85mm f/1.4, shallow depth of field.\n--ar 3:4 --v 7 --stylize 200",
        "tags": [
          "Portraits",
          "Hero",
          "Cinematic"
        ]
      },
      {
        "id": "img-24",
        "title": "The Yogi Hero",
        "description": "Cinematic shot focused on action and environment.",
        "template": "A [AGE]-year-old [ETHNICITY] Yogi, wearing [DETAILED OUTFIT with texture],\nstanding at the edge of a rooftop at golden hour with [CITY] skyline behind them.\nExpression: calm, powerful, contemplative.\nWarm amber backlight wrapping around the silhouette, soft natural fill on the face from a bounce board.\nMoody and dark atmospheric grading.\nShot on Phase One IQ4, 85mm f/1.4, shallow depth of field.\n--ar 3:4 --v 7 --stylize 200",
        "tags": [
          "Portraits",
          "Hero",
          "Cinematic"
        ]
      },
      {
        "id": "img-25",
        "title": "The Pilot Hero",
        "description": "Cinematic shot focused on action and environment.",
        "template": "A [AGE]-year-old [ETHNICITY] Pilot, wearing [DETAILED OUTFIT with texture],\nstanding at the edge of a rooftop at golden hour with [CITY] skyline behind them.\nExpression: calm, powerful, contemplative.\nWarm amber backlight wrapping around the silhouette, soft natural fill on the face from a bounce board.\nEthereal and dreamy, soft focus edges.\nShot on Phase One IQ4, 85mm f/1.4, shallow depth of field.\n--ar 3:4 --v 7 --stylize 200",
        "tags": [
          "Portraits",
          "Hero",
          "Cinematic"
        ]
      },
      {
        "id": "img-26",
        "title": "The Explorer Hero",
        "description": "Cinematic shot focused on action and environment.",
        "template": "A [AGE]-year-old [ETHNICITY] Explorer, wearing [DETAILED OUTFIT with texture],\nstanding at the edge of a rooftop at golden hour with [CITY] skyline behind them.\nExpression: calm, powerful, contemplative.\nWarm amber backlight wrapping around the silhouette, soft natural fill on the face from a bounce board.\nHigh fashion hyper-realistic aesthetic, muted tones.\nShot on Phase One IQ4, 85mm f/1.4, shallow depth of field.\n--ar 3:4 --v 7 --stylize 200",
        "tags": [
          "Portraits",
          "Hero",
          "Cinematic"
        ]
      },
      {
        "id": "img-27",
        "title": "The Climber Hero",
        "description": "Cinematic shot focused on action and environment.",
        "template": "A [AGE]-year-old [ETHNICITY] Climber, wearing [DETAILED OUTFIT with texture],\nstanding at the edge of a rooftop at golden hour with [CITY] skyline behind them.\nExpression: calm, powerful, contemplative.\nWarm amber backlight wrapping around the silhouette, soft natural fill on the face from a bounce board.\nMonochromatic with deep shadows, intense contrast.\nShot on Phase One IQ4, 85mm f/1.4, shallow depth of field.\n--ar 3:4 --v 7 --stylize 200",
        "tags": [
          "Portraits",
          "Hero",
          "Cinematic"
        ]
      },
      {
        "id": "img-28",
        "title": "The Dancer Hero",
        "description": "Cinematic shot focused on action and environment.",
        "template": "A [AGE]-year-old [ETHNICITY] Dancer, wearing [DETAILED OUTFIT with texture],\nstanding at the edge of a rooftop at golden hour with [CITY] skyline behind them.\nExpression: calm, powerful, contemplative.\nWarm amber backlight wrapping around the silhouette, soft natural fill on the face from a bounce board.\nGritty documentarian style, desaturated colors.\nShot on Phase One IQ4, 85mm f/1.4, shallow depth of field.\n--ar 3:4 --v 7 --stylize 200",
        "tags": [
          "Portraits",
          "Hero",
          "Cinematic"
        ]
      },
      {
        "id": "img-29",
        "title": "The Yogi Hero",
        "description": "Cinematic shot focused on action and environment.",
        "template": "A [AGE]-year-old [ETHNICITY] Yogi, wearing [DETAILED OUTFIT with texture],\nstanding at the edge of a rooftop at golden hour with [CITY] skyline behind them.\nExpression: calm, powerful, contemplative.\nWarm amber backlight wrapping around the silhouette, soft natural fill on the face from a bounce board.\nMoody and dark atmospheric grading.\nShot on Phase One IQ4, 85mm f/1.4, shallow depth of field.\n--ar 3:4 --v 7 --stylize 200",
        "tags": [
          "Portraits",
          "Hero",
          "Cinematic"
        ]
      },
      {
        "id": "img-30",
        "title": "The Pilot Hero",
        "description": "Cinematic shot focused on action and environment.",
        "template": "A [AGE]-year-old [ETHNICITY] Pilot, wearing [DETAILED OUTFIT with texture],\nstanding at the edge of a rooftop at golden hour with [CITY] skyline behind them.\nExpression: calm, powerful, contemplative.\nWarm amber backlight wrapping around the silhouette, soft natural fill on the face from a bounce board.\nEthereal and dreamy, soft focus edges.\nShot on Phase One IQ4, 85mm f/1.4, shallow depth of field.\n--ar 3:4 --v 7 --stylize 200",
        "tags": [
          "Portraits",
          "Hero",
          "Cinematic"
        ]
      },
      {
        "id": "img-31",
        "title": "The Explorer Hero",
        "description": "Cinematic shot focused on action and environment.",
        "template": "A [AGE]-year-old [ETHNICITY] Explorer, wearing [DETAILED OUTFIT with texture],\nstanding at the edge of a rooftop at golden hour with [CITY] skyline behind them.\nExpression: calm, powerful, contemplative.\nWarm amber backlight wrapping around the silhouette, soft natural fill on the face from a bounce board.\nHigh fashion hyper-realistic aesthetic, muted tones.\nShot on Phase One IQ4, 85mm f/1.4, shallow depth of field.\n--ar 3:4 --v 7 --stylize 200",
        "tags": [
          "Portraits",
          "Hero",
          "Cinematic"
        ]
      },
      {
        "id": "img-32",
        "title": "The Climber Hero",
        "description": "Cinematic shot focused on action and environment.",
        "template": "A [AGE]-year-old [ETHNICITY] Climber, wearing [DETAILED OUTFIT with texture],\nstanding at the edge of a rooftop at golden hour with [CITY] skyline behind them.\nExpression: calm, powerful, contemplative.\nWarm amber backlight wrapping around the silhouette, soft natural fill on the face from a bounce board.\nMonochromatic with deep shadows, intense contrast.\nShot on Phase One IQ4, 85mm f/1.4, shallow depth of field.\n--ar 3:4 --v 7 --stylize 200",
        "tags": [
          "Portraits",
          "Hero",
          "Cinematic"
        ]
      },
      {
        "id": "img-33",
        "title": "The Dancer Hero",
        "description": "Cinematic shot focused on action and environment.",
        "template": "A [AGE]-year-old [ETHNICITY] Dancer, wearing [DETAILED OUTFIT with texture],\nstanding at the edge of a rooftop at golden hour with [CITY] skyline behind them.\nExpression: calm, powerful, contemplative.\nWarm amber backlight wrapping around the silhouette, soft natural fill on the face from a bounce board.\nGritty documentarian style, desaturated colors.\nShot on Phase One IQ4, 85mm f/1.4, shallow depth of field.\n--ar 3:4 --v 7 --stylize 200",
        "tags": [
          "Portraits",
          "Hero",
          "Cinematic"
        ]
      },
      {
        "id": "img-34",
        "title": "The Yogi Hero",
        "description": "Cinematic shot focused on action and environment.",
        "template": "A [AGE]-year-old [ETHNICITY] Yogi, wearing [DETAILED OUTFIT with texture],\nstanding at the edge of a rooftop at golden hour with [CITY] skyline behind them.\nExpression: calm, powerful, contemplative.\nWarm amber backlight wrapping around the silhouette, soft natural fill on the face from a bounce board.\nMoody and dark atmospheric grading.\nShot on Phase One IQ4, 85mm f/1.4, shallow depth of field.\n--ar 3:4 --v 7 --stylize 200",
        "tags": [
          "Portraits",
          "Hero",
          "Cinematic"
        ]
      },
      {
        "id": "img-35",
        "title": "The Pilot Hero",
        "description": "Cinematic shot focused on action and environment.",
        "template": "A [AGE]-year-old [ETHNICITY] Pilot, wearing [DETAILED OUTFIT with texture],\nstanding at the edge of a rooftop at golden hour with [CITY] skyline behind them.\nExpression: calm, powerful, contemplative.\nWarm amber backlight wrapping around the silhouette, soft natural fill on the face from a bounce board.\nEthereal and dreamy, soft focus edges.\nShot on Phase One IQ4, 85mm f/1.4, shallow depth of field.\n--ar 3:4 --v 7 --stylize 200",
        "tags": [
          "Portraits",
          "Hero",
          "Cinematic"
        ]
      },
      {
        "id": "img-36",
        "title": "The Explorer Hero",
        "description": "Cinematic shot focused on action and environment.",
        "template": "A [AGE]-year-old [ETHNICITY] Explorer, wearing [DETAILED OUTFIT with texture],\nstanding at the edge of a rooftop at golden hour with [CITY] skyline behind them.\nExpression: calm, powerful, contemplative.\nWarm amber backlight wrapping around the silhouette, soft natural fill on the face from a bounce board.\nHigh fashion hyper-realistic aesthetic, muted tones.\nShot on Phase One IQ4, 85mm f/1.4, shallow depth of field.\n--ar 3:4 --v 7 --stylize 200",
        "tags": [
          "Portraits",
          "Hero",
          "Cinematic"
        ]
      },
      {
        "id": "img-37",
        "title": "The Climber Hero",
        "description": "Cinematic shot focused on action and environment.",
        "template": "A [AGE]-year-old [ETHNICITY] Climber, wearing [DETAILED OUTFIT with texture],\nstanding at the edge of a rooftop at golden hour with [CITY] skyline behind them.\nExpression: calm, powerful, contemplative.\nWarm amber backlight wrapping around the silhouette, soft natural fill on the face from a bounce board.\nMonochromatic with deep shadows, intense contrast.\nShot on Phase One IQ4, 85mm f/1.4, shallow depth of field.\n--ar 3:4 --v 7 --stylize 200",
        "tags": [
          "Portraits",
          "Hero",
          "Cinematic"
        ]
      },
      {
        "id": "img-38",
        "title": "The Dancer Hero",
        "description": "Cinematic shot focused on action and environment.",
        "template": "A [AGE]-year-old [ETHNICITY] Dancer, wearing [DETAILED OUTFIT with texture],\nstanding at the edge of a rooftop at golden hour with [CITY] skyline behind them.\nExpression: calm, powerful, contemplative.\nWarm amber backlight wrapping around the silhouette, soft natural fill on the face from a bounce board.\nGritty documentarian style, desaturated colors.\nShot on Phase One IQ4, 85mm f/1.4, shallow depth of field.\n--ar 3:4 --v 7 --stylize 200",
        "tags": [
          "Portraits",
          "Hero",
          "Cinematic"
        ]
      },
      {
        "id": "img-39",
        "title": "The Yogi Hero",
        "description": "Cinematic shot focused on action and environment.",
        "template": "A [AGE]-year-old [ETHNICITY] Yogi, wearing [DETAILED OUTFIT with texture],\nstanding at the edge of a rooftop at golden hour with [CITY] skyline behind them.\nExpression: calm, powerful, contemplative.\nWarm amber backlight wrapping around the silhouette, soft natural fill on the face from a bounce board.\nMoody and dark atmospheric grading.\nShot on Phase One IQ4, 85mm f/1.4, shallow depth of field.\n--ar 3:4 --v 7 --stylize 200",
        "tags": [
          "Portraits",
          "Hero",
          "Cinematic"
        ]
      },
      {
        "id": "img-40",
        "title": "The Pilot Hero",
        "description": "Cinematic shot focused on action and environment.",
        "template": "A [AGE]-year-old [ETHNICITY] Pilot, wearing [DETAILED OUTFIT with texture],\nstanding at the edge of a rooftop at golden hour with [CITY] skyline behind them.\nExpression: calm, powerful, contemplative.\nWarm amber backlight wrapping around the silhouette, soft natural fill on the face from a bounce board.\nEthereal and dreamy, soft focus edges.\nShot on Phase One IQ4, 85mm f/1.4, shallow depth of field.\n--ar 3:4 --v 7 --stylize 200",
        "tags": [
          "Portraits",
          "Hero",
          "Cinematic"
        ]
      },
      {
        "id": "img-41",
        "title": "Luxury Watch Product Shot",
        "description": "E-commerce hero shots, luxury listings, ad creatives.",
        "template": "A hero product photograph of a luxury Watch \nwith a [DETAIL], resting on polished Carrara white marble.\nPrimary colour: [PRIMARY COLOR HEX] for the {Item}.\nMetallic accent [ACCENT COLOR HEX].\nCamera: 85mm macro lens at f/2.8, 30-degree angled overhead perspective.\nLighting: single soft key light from upper left at 45°, subtle bounce card on the right fills shadow.\nShallow reflection across the marble surface. High fashion hyper-realistic aesthetic, muted tones.\nNo props or decorative elements. 4K photorealistic output, --ar 1:1.",
        "tags": [
          "Product",
          "E-commerce",
          "FLUX 2"
        ]
      },
      {
        "id": "img-42",
        "title": "Luxury Sneaker Product Shot",
        "description": "E-commerce hero shots, luxury listings, ad creatives.",
        "template": "A hero product photograph of a luxury Sneaker \nwith a [DETAIL], resting on polished Carrara white marble.\nPrimary colour: [PRIMARY COLOR HEX] for the {Item}.\nMetallic accent [ACCENT COLOR HEX].\nCamera: 85mm macro lens at f/2.8, 30-degree angled overhead perspective.\nLighting: single soft key light from upper left at 45°, subtle bounce card on the right fills shadow.\nShallow reflection across the marble surface. Monochromatic with deep shadows, intense contrast.\nNo props or decorative elements. 4K photorealistic output, --ar 1:1.",
        "tags": [
          "Product",
          "E-commerce",
          "FLUX 2"
        ]
      },
      {
        "id": "img-43",
        "title": "Luxury Wallet Product Shot",
        "description": "E-commerce hero shots, luxury listings, ad creatives.",
        "template": "A hero product photograph of a luxury Wallet \nwith a [DETAIL], resting on polished Carrara white marble.\nPrimary colour: [PRIMARY COLOR HEX] for the {Item}.\nMetallic accent [ACCENT COLOR HEX].\nCamera: 85mm macro lens at f/2.8, 30-degree angled overhead perspective.\nLighting: single soft key light from upper left at 45°, subtle bounce card on the right fills shadow.\nShallow reflection across the marble surface. Gritty documentarian style, desaturated colors.\nNo props or decorative elements. 4K photorealistic output, --ar 1:1.",
        "tags": [
          "Product",
          "E-commerce",
          "FLUX 2"
        ]
      },
      {
        "id": "img-44",
        "title": "Luxury Smartphone Product Shot",
        "description": "E-commerce hero shots, luxury listings, ad creatives.",
        "template": "A hero product photograph of a luxury Smartphone \nwith a [DETAIL], resting on polished Carrara white marble.\nPrimary colour: [PRIMARY COLOR HEX] for the {Item}.\nMetallic accent [ACCENT COLOR HEX].\nCamera: 85mm macro lens at f/2.8, 30-degree angled overhead perspective.\nLighting: single soft key light from upper left at 45°, subtle bounce card on the right fills shadow.\nShallow reflection across the marble surface. Moody and dark atmospheric grading.\nNo props or decorative elements. 4K photorealistic output, --ar 1:1.",
        "tags": [
          "Product",
          "E-commerce",
          "FLUX 2"
        ]
      },
      {
        "id": "img-45",
        "title": "Luxury Lipstick Product Shot",
        "description": "E-commerce hero shots, luxury listings, ad creatives.",
        "template": "A hero product photograph of a luxury Lipstick \nwith a [DETAIL], resting on polished Carrara white marble.\nPrimary colour: [PRIMARY COLOR HEX] for the {Item}.\nMetallic accent [ACCENT COLOR HEX].\nCamera: 85mm macro lens at f/2.8, 30-degree angled overhead perspective.\nLighting: single soft key light from upper left at 45°, subtle bounce card on the right fills shadow.\nShallow reflection across the marble surface. Ethereal and dreamy, soft focus edges.\nNo props or decorative elements. 4K photorealistic output, --ar 1:1.",
        "tags": [
          "Product",
          "E-commerce",
          "FLUX 2"
        ]
      },
      {
        "id": "img-46",
        "title": "Luxury Watch Product Shot",
        "description": "E-commerce hero shots, luxury listings, ad creatives.",
        "template": "A hero product photograph of a luxury Watch \nwith a [DETAIL], resting on polished Carrara white marble.\nPrimary colour: [PRIMARY COLOR HEX] for the {Item}.\nMetallic accent [ACCENT COLOR HEX].\nCamera: 85mm macro lens at f/2.8, 30-degree angled overhead perspective.\nLighting: single soft key light from upper left at 45°, subtle bounce card on the right fills shadow.\nShallow reflection across the marble surface. High fashion hyper-realistic aesthetic, muted tones.\nNo props or decorative elements. 4K photorealistic output, --ar 1:1.",
        "tags": [
          "Product",
          "E-commerce",
          "FLUX 2"
        ]
      },
      {
        "id": "img-47",
        "title": "Luxury Sneaker Product Shot",
        "description": "E-commerce hero shots, luxury listings, ad creatives.",
        "template": "A hero product photograph of a luxury Sneaker \nwith a [DETAIL], resting on polished Carrara white marble.\nPrimary colour: [PRIMARY COLOR HEX] for the {Item}.\nMetallic accent [ACCENT COLOR HEX].\nCamera: 85mm macro lens at f/2.8, 30-degree angled overhead perspective.\nLighting: single soft key light from upper left at 45°, subtle bounce card on the right fills shadow.\nShallow reflection across the marble surface. Monochromatic with deep shadows, intense contrast.\nNo props or decorative elements. 4K photorealistic output, --ar 1:1.",
        "tags": [
          "Product",
          "E-commerce",
          "FLUX 2"
        ]
      },
      {
        "id": "img-48",
        "title": "Luxury Wallet Product Shot",
        "description": "E-commerce hero shots, luxury listings, ad creatives.",
        "template": "A hero product photograph of a luxury Wallet \nwith a [DETAIL], resting on polished Carrara white marble.\nPrimary colour: [PRIMARY COLOR HEX] for the {Item}.\nMetallic accent [ACCENT COLOR HEX].\nCamera: 85mm macro lens at f/2.8, 30-degree angled overhead perspective.\nLighting: single soft key light from upper left at 45°, subtle bounce card on the right fills shadow.\nShallow reflection across the marble surface. Gritty documentarian style, desaturated colors.\nNo props or decorative elements. 4K photorealistic output, --ar 1:1.",
        "tags": [
          "Product",
          "E-commerce",
          "FLUX 2"
        ]
      },
      {
        "id": "img-49",
        "title": "Luxury Smartphone Product Shot",
        "description": "E-commerce hero shots, luxury listings, ad creatives.",
        "template": "A hero product photograph of a luxury Smartphone \nwith a [DETAIL], resting on polished Carrara white marble.\nPrimary colour: [PRIMARY COLOR HEX] for the {Item}.\nMetallic accent [ACCENT COLOR HEX].\nCamera: 85mm macro lens at f/2.8, 30-degree angled overhead perspective.\nLighting: single soft key light from upper left at 45°, subtle bounce card on the right fills shadow.\nShallow reflection across the marble surface. Moody and dark atmospheric grading.\nNo props or decorative elements. 4K photorealistic output, --ar 1:1.",
        "tags": [
          "Product",
          "E-commerce",
          "FLUX 2"
        ]
      },
      {
        "id": "img-50",
        "title": "Luxury Lipstick Product Shot",
        "description": "E-commerce hero shots, luxury listings, ad creatives.",
        "template": "A hero product photograph of a luxury Lipstick \nwith a [DETAIL], resting on polished Carrara white marble.\nPrimary colour: [PRIMARY COLOR HEX] for the {Item}.\nMetallic accent [ACCENT COLOR HEX].\nCamera: 85mm macro lens at f/2.8, 30-degree angled overhead perspective.\nLighting: single soft key light from upper left at 45°, subtle bounce card on the right fills shadow.\nShallow reflection across the marble surface. Ethereal and dreamy, soft focus edges.\nNo props or decorative elements. 4K photorealistic output, --ar 1:1.",
        "tags": [
          "Product",
          "E-commerce",
          "FLUX 2"
        ]
      },
      {
        "id": "img-51",
        "title": "Luxury Watch Product Shot",
        "description": "E-commerce hero shots, luxury listings, ad creatives.",
        "template": "A hero product photograph of a luxury Watch \nwith a [DETAIL], resting on polished Carrara white marble.\nPrimary colour: [PRIMARY COLOR HEX] for the {Item}.\nMetallic accent [ACCENT COLOR HEX].\nCamera: 85mm macro lens at f/2.8, 30-degree angled overhead perspective.\nLighting: single soft key light from upper left at 45°, subtle bounce card on the right fills shadow.\nShallow reflection across the marble surface. High fashion hyper-realistic aesthetic, muted tones.\nNo props or decorative elements. 4K photorealistic output, --ar 1:1.",
        "tags": [
          "Product",
          "E-commerce",
          "FLUX 2"
        ]
      },
      {
        "id": "img-52",
        "title": "Luxury Sneaker Product Shot",
        "description": "E-commerce hero shots, luxury listings, ad creatives.",
        "template": "A hero product photograph of a luxury Sneaker \nwith a [DETAIL], resting on polished Carrara white marble.\nPrimary colour: [PRIMARY COLOR HEX] for the {Item}.\nMetallic accent [ACCENT COLOR HEX].\nCamera: 85mm macro lens at f/2.8, 30-degree angled overhead perspective.\nLighting: single soft key light from upper left at 45°, subtle bounce card on the right fills shadow.\nShallow reflection across the marble surface. Monochromatic with deep shadows, intense contrast.\nNo props or decorative elements. 4K photorealistic output, --ar 1:1.",
        "tags": [
          "Product",
          "E-commerce",
          "FLUX 2"
        ]
      },
      {
        "id": "img-53",
        "title": "Luxury Wallet Product Shot",
        "description": "E-commerce hero shots, luxury listings, ad creatives.",
        "template": "A hero product photograph of a luxury Wallet \nwith a [DETAIL], resting on polished Carrara white marble.\nPrimary colour: [PRIMARY COLOR HEX] for the {Item}.\nMetallic accent [ACCENT COLOR HEX].\nCamera: 85mm macro lens at f/2.8, 30-degree angled overhead perspective.\nLighting: single soft key light from upper left at 45°, subtle bounce card on the right fills shadow.\nShallow reflection across the marble surface. Gritty documentarian style, desaturated colors.\nNo props or decorative elements. 4K photorealistic output, --ar 1:1.",
        "tags": [
          "Product",
          "E-commerce",
          "FLUX 2"
        ]
      },
      {
        "id": "img-54",
        "title": "Luxury Smartphone Product Shot",
        "description": "E-commerce hero shots, luxury listings, ad creatives.",
        "template": "A hero product photograph of a luxury Smartphone \nwith a [DETAIL], resting on polished Carrara white marble.\nPrimary colour: [PRIMARY COLOR HEX] for the {Item}.\nMetallic accent [ACCENT COLOR HEX].\nCamera: 85mm macro lens at f/2.8, 30-degree angled overhead perspective.\nLighting: single soft key light from upper left at 45°, subtle bounce card on the right fills shadow.\nShallow reflection across the marble surface. Moody and dark atmospheric grading.\nNo props or decorative elements. 4K photorealistic output, --ar 1:1.",
        "tags": [
          "Product",
          "E-commerce",
          "FLUX 2"
        ]
      },
      {
        "id": "img-55",
        "title": "Luxury Lipstick Product Shot",
        "description": "E-commerce hero shots, luxury listings, ad creatives.",
        "template": "A hero product photograph of a luxury Lipstick \nwith a [DETAIL], resting on polished Carrara white marble.\nPrimary colour: [PRIMARY COLOR HEX] for the {Item}.\nMetallic accent [ACCENT COLOR HEX].\nCamera: 85mm macro lens at f/2.8, 30-degree angled overhead perspective.\nLighting: single soft key light from upper left at 45°, subtle bounce card on the right fills shadow.\nShallow reflection across the marble surface. Ethereal and dreamy, soft focus edges.\nNo props or decorative elements. 4K photorealistic output, --ar 1:1.",
        "tags": [
          "Product",
          "E-commerce",
          "FLUX 2"
        ]
      },
      {
        "id": "img-56",
        "title": "Luxury Watch Product Shot",
        "description": "E-commerce hero shots, luxury listings, ad creatives.",
        "template": "A hero product photograph of a luxury Watch \nwith a [DETAIL], resting on polished Carrara white marble.\nPrimary colour: [PRIMARY COLOR HEX] for the {Item}.\nMetallic accent [ACCENT COLOR HEX].\nCamera: 85mm macro lens at f/2.8, 30-degree angled overhead perspective.\nLighting: single soft key light from upper left at 45°, subtle bounce card on the right fills shadow.\nShallow reflection across the marble surface. High fashion hyper-realistic aesthetic, muted tones.\nNo props or decorative elements. 4K photorealistic output, --ar 1:1.",
        "tags": [
          "Product",
          "E-commerce",
          "FLUX 2"
        ]
      },
      {
        "id": "img-57",
        "title": "Luxury Sneaker Product Shot",
        "description": "E-commerce hero shots, luxury listings, ad creatives.",
        "template": "A hero product photograph of a luxury Sneaker \nwith a [DETAIL], resting on polished Carrara white marble.\nPrimary colour: [PRIMARY COLOR HEX] for the {Item}.\nMetallic accent [ACCENT COLOR HEX].\nCamera: 85mm macro lens at f/2.8, 30-degree angled overhead perspective.\nLighting: single soft key light from upper left at 45°, subtle bounce card on the right fills shadow.\nShallow reflection across the marble surface. Monochromatic with deep shadows, intense contrast.\nNo props or decorative elements. 4K photorealistic output, --ar 1:1.",
        "tags": [
          "Product",
          "E-commerce",
          "FLUX 2"
        ]
      },
      {
        "id": "img-58",
        "title": "Luxury Wallet Product Shot",
        "description": "E-commerce hero shots, luxury listings, ad creatives.",
        "template": "A hero product photograph of a luxury Wallet \nwith a [DETAIL], resting on polished Carrara white marble.\nPrimary colour: [PRIMARY COLOR HEX] for the {Item}.\nMetallic accent [ACCENT COLOR HEX].\nCamera: 85mm macro lens at f/2.8, 30-degree angled overhead perspective.\nLighting: single soft key light from upper left at 45°, subtle bounce card on the right fills shadow.\nShallow reflection across the marble surface. Gritty documentarian style, desaturated colors.\nNo props or decorative elements. 4K photorealistic output, --ar 1:1.",
        "tags": [
          "Product",
          "E-commerce",
          "FLUX 2"
        ]
      },
      {
        "id": "img-59",
        "title": "Luxury Smartphone Product Shot",
        "description": "E-commerce hero shots, luxury listings, ad creatives.",
        "template": "A hero product photograph of a luxury Smartphone \nwith a [DETAIL], resting on polished Carrara white marble.\nPrimary colour: [PRIMARY COLOR HEX] for the {Item}.\nMetallic accent [ACCENT COLOR HEX].\nCamera: 85mm macro lens at f/2.8, 30-degree angled overhead perspective.\nLighting: single soft key light from upper left at 45°, subtle bounce card on the right fills shadow.\nShallow reflection across the marble surface. Moody and dark atmospheric grading.\nNo props or decorative elements. 4K photorealistic output, --ar 1:1.",
        "tags": [
          "Product",
          "E-commerce",
          "FLUX 2"
        ]
      },
      {
        "id": "img-60",
        "title": "Luxury Lipstick Product Shot",
        "description": "E-commerce hero shots, luxury listings, ad creatives.",
        "template": "A hero product photograph of a luxury Lipstick \nwith a [DETAIL], resting on polished Carrara white marble.\nPrimary colour: [PRIMARY COLOR HEX] for the {Item}.\nMetallic accent [ACCENT COLOR HEX].\nCamera: 85mm macro lens at f/2.8, 30-degree angled overhead perspective.\nLighting: single soft key light from upper left at 45°, subtle bounce card on the right fills shadow.\nShallow reflection across the marble surface. Ethereal and dreamy, soft focus edges.\nNo props or decorative elements. 4K photorealistic output, --ar 1:1.",
        "tags": [
          "Product",
          "E-commerce",
          "FLUX 2"
        ]
      },
      {
        "id": "img-61",
        "title": "The Cyberpunk Architecture",
        "description": "Interior design and architectural visualization.",
        "template": "A wide-angle interior shot of a Cyberpunk living space.\nFeaturing {AccentFurniture} in the foreground, floor-to-ceiling windows revealing a [LANDSCAPE] vista.\nNatural light flooding in at sweeping angles, creating dramatic shadows.\nShot on 35mm lens, f/8 for maximum depth of field, architectural photography.\nHigh fashion hyper-realistic aesthetic, muted tones.\n--ar 16:9 --v 7",
        "tags": [
          "Architecture",
          "Interior Design",
          "Cinematic"
        ]
      },
      {
        "id": "img-62",
        "title": "The Bohemian Architecture",
        "description": "Interior design and architectural visualization.",
        "template": "A wide-angle interior shot of a Bohemian living space.\nFeaturing {AccentFurniture} in the foreground, floor-to-ceiling windows revealing a [LANDSCAPE] vista.\nNatural light flooding in at sweeping angles, creating dramatic shadows.\nShot on 35mm lens, f/8 for maximum depth of field, architectural photography.\nMonochromatic with deep shadows, intense contrast.\n--ar 16:9 --v 7",
        "tags": [
          "Architecture",
          "Interior Design",
          "Cinematic"
        ]
      },
      {
        "id": "img-63",
        "title": "The Scandinavian Architecture",
        "description": "Interior design and architectural visualization.",
        "template": "A wide-angle interior shot of a Scandinavian living space.\nFeaturing {AccentFurniture} in the foreground, floor-to-ceiling windows revealing a [LANDSCAPE] vista.\nNatural light flooding in at sweeping angles, creating dramatic shadows.\nShot on 35mm lens, f/8 for maximum depth of field, architectural photography.\nGritty documentarian style, desaturated colors.\n--ar 16:9 --v 7",
        "tags": [
          "Architecture",
          "Interior Design",
          "Cinematic"
        ]
      },
      {
        "id": "img-64",
        "title": "The Wabi-Sabi Architecture",
        "description": "Interior design and architectural visualization.",
        "template": "A wide-angle interior shot of a Wabi-Sabi living space.\nFeaturing {AccentFurniture} in the foreground, floor-to-ceiling windows revealing a [LANDSCAPE] vista.\nNatural light flooding in at sweeping angles, creating dramatic shadows.\nShot on 35mm lens, f/8 for maximum depth of field, architectural photography.\nMoody and dark atmospheric grading.\n--ar 16:9 --v 7",
        "tags": [
          "Architecture",
          "Interior Design",
          "Cinematic"
        ]
      },
      {
        "id": "img-65",
        "title": "The Gothic Architecture",
        "description": "Interior design and architectural visualization.",
        "template": "A wide-angle interior shot of a Gothic living space.\nFeaturing {AccentFurniture} in the foreground, floor-to-ceiling windows revealing a [LANDSCAPE] vista.\nNatural light flooding in at sweeping angles, creating dramatic shadows.\nShot on 35mm lens, f/8 for maximum depth of field, architectural photography.\nEthereal and dreamy, soft focus edges.\n--ar 16:9 --v 7",
        "tags": [
          "Architecture",
          "Interior Design",
          "Cinematic"
        ]
      },
      {
        "id": "img-66",
        "title": "The Cyberpunk Architecture",
        "description": "Interior design and architectural visualization.",
        "template": "A wide-angle interior shot of a Cyberpunk living space.\nFeaturing {AccentFurniture} in the foreground, floor-to-ceiling windows revealing a [LANDSCAPE] vista.\nNatural light flooding in at sweeping angles, creating dramatic shadows.\nShot on 35mm lens, f/8 for maximum depth of field, architectural photography.\nHigh fashion hyper-realistic aesthetic, muted tones.\n--ar 16:9 --v 7",
        "tags": [
          "Architecture",
          "Interior Design",
          "Cinematic"
        ]
      },
      {
        "id": "img-67",
        "title": "The Bohemian Architecture",
        "description": "Interior design and architectural visualization.",
        "template": "A wide-angle interior shot of a Bohemian living space.\nFeaturing {AccentFurniture} in the foreground, floor-to-ceiling windows revealing a [LANDSCAPE] vista.\nNatural light flooding in at sweeping angles, creating dramatic shadows.\nShot on 35mm lens, f/8 for maximum depth of field, architectural photography.\nMonochromatic with deep shadows, intense contrast.\n--ar 16:9 --v 7",
        "tags": [
          "Architecture",
          "Interior Design",
          "Cinematic"
        ]
      },
      {
        "id": "img-68",
        "title": "The Scandinavian Architecture",
        "description": "Interior design and architectural visualization.",
        "template": "A wide-angle interior shot of a Scandinavian living space.\nFeaturing {AccentFurniture} in the foreground, floor-to-ceiling windows revealing a [LANDSCAPE] vista.\nNatural light flooding in at sweeping angles, creating dramatic shadows.\nShot on 35mm lens, f/8 for maximum depth of field, architectural photography.\nGritty documentarian style, desaturated colors.\n--ar 16:9 --v 7",
        "tags": [
          "Architecture",
          "Interior Design",
          "Cinematic"
        ]
      },
      {
        "id": "img-69",
        "title": "The Wabi-Sabi Architecture",
        "description": "Interior design and architectural visualization.",
        "template": "A wide-angle interior shot of a Wabi-Sabi living space.\nFeaturing {AccentFurniture} in the foreground, floor-to-ceiling windows revealing a [LANDSCAPE] vista.\nNatural light flooding in at sweeping angles, creating dramatic shadows.\nShot on 35mm lens, f/8 for maximum depth of field, architectural photography.\nMoody and dark atmospheric grading.\n--ar 16:9 --v 7",
        "tags": [
          "Architecture",
          "Interior Design",
          "Cinematic"
        ]
      },
      {
        "id": "img-70",
        "title": "The Gothic Architecture",
        "description": "Interior design and architectural visualization.",
        "template": "A wide-angle interior shot of a Gothic living space.\nFeaturing {AccentFurniture} in the foreground, floor-to-ceiling windows revealing a [LANDSCAPE] vista.\nNatural light flooding in at sweeping angles, creating dramatic shadows.\nShot on 35mm lens, f/8 for maximum depth of field, architectural photography.\nEthereal and dreamy, soft focus edges.\n--ar 16:9 --v 7",
        "tags": [
          "Architecture",
          "Interior Design",
          "Cinematic"
        ]
      },
      {
        "id": "img-71",
        "title": "The Cyberpunk Architecture",
        "description": "Interior design and architectural visualization.",
        "template": "A wide-angle interior shot of a Cyberpunk living space.\nFeaturing {AccentFurniture} in the foreground, floor-to-ceiling windows revealing a [LANDSCAPE] vista.\nNatural light flooding in at sweeping angles, creating dramatic shadows.\nShot on 35mm lens, f/8 for maximum depth of field, architectural photography.\nHigh fashion hyper-realistic aesthetic, muted tones.\n--ar 16:9 --v 7",
        "tags": [
          "Architecture",
          "Interior Design",
          "Cinematic"
        ]
      },
      {
        "id": "img-72",
        "title": "The Bohemian Architecture",
        "description": "Interior design and architectural visualization.",
        "template": "A wide-angle interior shot of a Bohemian living space.\nFeaturing {AccentFurniture} in the foreground, floor-to-ceiling windows revealing a [LANDSCAPE] vista.\nNatural light flooding in at sweeping angles, creating dramatic shadows.\nShot on 35mm lens, f/8 for maximum depth of field, architectural photography.\nMonochromatic with deep shadows, intense contrast.\n--ar 16:9 --v 7",
        "tags": [
          "Architecture",
          "Interior Design",
          "Cinematic"
        ]
      },
      {
        "id": "img-73",
        "title": "The Scandinavian Architecture",
        "description": "Interior design and architectural visualization.",
        "template": "A wide-angle interior shot of a Scandinavian living space.\nFeaturing {AccentFurniture} in the foreground, floor-to-ceiling windows revealing a [LANDSCAPE] vista.\nNatural light flooding in at sweeping angles, creating dramatic shadows.\nShot on 35mm lens, f/8 for maximum depth of field, architectural photography.\nGritty documentarian style, desaturated colors.\n--ar 16:9 --v 7",
        "tags": [
          "Architecture",
          "Interior Design",
          "Cinematic"
        ]
      },
      {
        "id": "img-74",
        "title": "The Wabi-Sabi Architecture",
        "description": "Interior design and architectural visualization.",
        "template": "A wide-angle interior shot of a Wabi-Sabi living space.\nFeaturing {AccentFurniture} in the foreground, floor-to-ceiling windows revealing a [LANDSCAPE] vista.\nNatural light flooding in at sweeping angles, creating dramatic shadows.\nShot on 35mm lens, f/8 for maximum depth of field, architectural photography.\nMoody and dark atmospheric grading.\n--ar 16:9 --v 7",
        "tags": [
          "Architecture",
          "Interior Design",
          "Cinematic"
        ]
      },
      {
        "id": "img-75",
        "title": "The Gothic Architecture",
        "description": "Interior design and architectural visualization.",
        "template": "A wide-angle interior shot of a Gothic living space.\nFeaturing {AccentFurniture} in the foreground, floor-to-ceiling windows revealing a [LANDSCAPE] vista.\nNatural light flooding in at sweeping angles, creating dramatic shadows.\nShot on 35mm lens, f/8 for maximum depth of field, architectural photography.\nEthereal and dreamy, soft focus edges.\n--ar 16:9 --v 7",
        "tags": [
          "Architecture",
          "Interior Design",
          "Cinematic"
        ]
      },
      {
        "id": "img-76",
        "title": "The Cyberpunk Architecture",
        "description": "Interior design and architectural visualization.",
        "template": "A wide-angle interior shot of a Cyberpunk living space.\nFeaturing {AccentFurniture} in the foreground, floor-to-ceiling windows revealing a [LANDSCAPE] vista.\nNatural light flooding in at sweeping angles, creating dramatic shadows.\nShot on 35mm lens, f/8 for maximum depth of field, architectural photography.\nHigh fashion hyper-realistic aesthetic, muted tones.\n--ar 16:9 --v 7",
        "tags": [
          "Architecture",
          "Interior Design",
          "Cinematic"
        ]
      },
      {
        "id": "img-77",
        "title": "The Bohemian Architecture",
        "description": "Interior design and architectural visualization.",
        "template": "A wide-angle interior shot of a Bohemian living space.\nFeaturing {AccentFurniture} in the foreground, floor-to-ceiling windows revealing a [LANDSCAPE] vista.\nNatural light flooding in at sweeping angles, creating dramatic shadows.\nShot on 35mm lens, f/8 for maximum depth of field, architectural photography.\nMonochromatic with deep shadows, intense contrast.\n--ar 16:9 --v 7",
        "tags": [
          "Architecture",
          "Interior Design",
          "Cinematic"
        ]
      },
      {
        "id": "img-78",
        "title": "The Scandinavian Architecture",
        "description": "Interior design and architectural visualization.",
        "template": "A wide-angle interior shot of a Scandinavian living space.\nFeaturing {AccentFurniture} in the foreground, floor-to-ceiling windows revealing a [LANDSCAPE] vista.\nNatural light flooding in at sweeping angles, creating dramatic shadows.\nShot on 35mm lens, f/8 for maximum depth of field, architectural photography.\nGritty documentarian style, desaturated colors.\n--ar 16:9 --v 7",
        "tags": [
          "Architecture",
          "Interior Design",
          "Cinematic"
        ]
      },
      {
        "id": "img-79",
        "title": "The Wabi-Sabi Architecture",
        "description": "Interior design and architectural visualization.",
        "template": "A wide-angle interior shot of a Wabi-Sabi living space.\nFeaturing {AccentFurniture} in the foreground, floor-to-ceiling windows revealing a [LANDSCAPE] vista.\nNatural light flooding in at sweeping angles, creating dramatic shadows.\nShot on 35mm lens, f/8 for maximum depth of field, architectural photography.\nMoody and dark atmospheric grading.\n--ar 16:9 --v 7",
        "tags": [
          "Architecture",
          "Interior Design",
          "Cinematic"
        ]
      },
      {
        "id": "img-80",
        "title": "The Gothic Architecture",
        "description": "Interior design and architectural visualization.",
        "template": "A wide-angle interior shot of a Gothic living space.\nFeaturing {AccentFurniture} in the foreground, floor-to-ceiling windows revealing a [LANDSCAPE] vista.\nNatural light flooding in at sweeping angles, creating dramatic shadows.\nShot on 35mm lens, f/8 for maximum depth of field, architectural photography.\nEthereal and dreamy, soft focus edges.\n--ar 16:9 --v 7",
        "tags": [
          "Architecture",
          "Interior Design",
          "Cinematic"
        ]
      },
      {
        "id": "img-81",
        "title": "Sushi Platter flat lay",
        "description": "Boutique food photography for menus and social media.",
        "template": "An overhead flat-lay photograph of Sushi Platter on a rustic wooden table.\nSurrounded by scattered [INGREDIENTS] and a [DRINK].\nSoft window light from the left side, diffused by sheer curtains.\nShot with a 50mm lens at f/5.6. High color contrast, extremely detailed, appetizing.\nHigh fashion hyper-realistic aesthetic, muted tones.\n--ar 4:5 --v 6.0",
        "tags": [
          "Food Imagery",
          "Photography",
          "Social Media"
        ]
      },
      {
        "id": "img-82",
        "title": "Craft Burger flat lay",
        "description": "Boutique food photography for menus and social media.",
        "template": "An overhead flat-lay photograph of Craft Burger on a rustic wooden table.\nSurrounded by scattered [INGREDIENTS] and a [DRINK].\nSoft window light from the left side, diffused by sheer curtains.\nShot with a 50mm lens at f/5.6. High color contrast, extremely detailed, appetizing.\nMonochromatic with deep shadows, intense contrast.\n--ar 4:5 --v 6.0",
        "tags": [
          "Food Imagery",
          "Photography",
          "Social Media"
        ]
      },
      {
        "id": "img-83",
        "title": "Tapas flat lay",
        "description": "Boutique food photography for menus and social media.",
        "template": "An overhead flat-lay photograph of Tapas on a rustic wooden table.\nSurrounded by scattered [INGREDIENTS] and a [DRINK].\nSoft window light from the left side, diffused by sheer curtains.\nShot with a 50mm lens at f/5.6. High color contrast, extremely detailed, appetizing.\nGritty documentarian style, desaturated colors.\n--ar 4:5 --v 6.0",
        "tags": [
          "Food Imagery",
          "Photography",
          "Social Media"
        ]
      },
      {
        "id": "img-84",
        "title": "Gelato flat lay",
        "description": "Boutique food photography for menus and social media.",
        "template": "An overhead flat-lay photograph of Gelato on a rustic wooden table.\nSurrounded by scattered [INGREDIENTS] and a [DRINK].\nSoft window light from the left side, diffused by sheer curtains.\nShot with a 50mm lens at f/5.6. High color contrast, extremely detailed, appetizing.\nMoody and dark atmospheric grading.\n--ar 4:5 --v 6.0",
        "tags": [
          "Food Imagery",
          "Photography",
          "Social Media"
        ]
      },
      {
        "id": "img-85",
        "title": "Acai Bowl flat lay",
        "description": "Boutique food photography for menus and social media.",
        "template": "An overhead flat-lay photograph of Acai Bowl on a rustic wooden table.\nSurrounded by scattered [INGREDIENTS] and a [DRINK].\nSoft window light from the left side, diffused by sheer curtains.\nShot with a 50mm lens at f/5.6. High color contrast, extremely detailed, appetizing.\nEthereal and dreamy, soft focus edges.\n--ar 4:5 --v 6.0",
        "tags": [
          "Food Imagery",
          "Photography",
          "Social Media"
        ]
      },
      {
        "id": "img-86",
        "title": "Sushi Platter flat lay",
        "description": "Boutique food photography for menus and social media.",
        "template": "An overhead flat-lay photograph of Sushi Platter on a rustic wooden table.\nSurrounded by scattered [INGREDIENTS] and a [DRINK].\nSoft window light from the left side, diffused by sheer curtains.\nShot with a 50mm lens at f/5.6. High color contrast, extremely detailed, appetizing.\nHigh fashion hyper-realistic aesthetic, muted tones.\n--ar 4:5 --v 6.0",
        "tags": [
          "Food Imagery",
          "Photography",
          "Social Media"
        ]
      },
      {
        "id": "img-87",
        "title": "Craft Burger flat lay",
        "description": "Boutique food photography for menus and social media.",
        "template": "An overhead flat-lay photograph of Craft Burger on a rustic wooden table.\nSurrounded by scattered [INGREDIENTS] and a [DRINK].\nSoft window light from the left side, diffused by sheer curtains.\nShot with a 50mm lens at f/5.6. High color contrast, extremely detailed, appetizing.\nMonochromatic with deep shadows, intense contrast.\n--ar 4:5 --v 6.0",
        "tags": [
          "Food Imagery",
          "Photography",
          "Social Media"
        ]
      },
      {
        "id": "img-88",
        "title": "Tapas flat lay",
        "description": "Boutique food photography for menus and social media.",
        "template": "An overhead flat-lay photograph of Tapas on a rustic wooden table.\nSurrounded by scattered [INGREDIENTS] and a [DRINK].\nSoft window light from the left side, diffused by sheer curtains.\nShot with a 50mm lens at f/5.6. High color contrast, extremely detailed, appetizing.\nGritty documentarian style, desaturated colors.\n--ar 4:5 --v 6.0",
        "tags": [
          "Food Imagery",
          "Photography",
          "Social Media"
        ]
      },
      {
        "id": "img-89",
        "title": "Gelato flat lay",
        "description": "Boutique food photography for menus and social media.",
        "template": "An overhead flat-lay photograph of Gelato on a rustic wooden table.\nSurrounded by scattered [INGREDIENTS] and a [DRINK].\nSoft window light from the left side, diffused by sheer curtains.\nShot with a 50mm lens at f/5.6. High color contrast, extremely detailed, appetizing.\nMoody and dark atmospheric grading.\n--ar 4:5 --v 6.0",
        "tags": [
          "Food Imagery",
          "Photography",
          "Social Media"
        ]
      },
      {
        "id": "img-90",
        "title": "Acai Bowl flat lay",
        "description": "Boutique food photography for menus and social media.",
        "template": "An overhead flat-lay photograph of Acai Bowl on a rustic wooden table.\nSurrounded by scattered [INGREDIENTS] and a [DRINK].\nSoft window light from the left side, diffused by sheer curtains.\nShot with a 50mm lens at f/5.6. High color contrast, extremely detailed, appetizing.\nEthereal and dreamy, soft focus edges.\n--ar 4:5 --v 6.0",
        "tags": [
          "Food Imagery",
          "Photography",
          "Social Media"
        ]
      },
      {
        "id": "img-91",
        "title": "Sushi Platter flat lay",
        "description": "Boutique food photography for menus and social media.",
        "template": "An overhead flat-lay photograph of Sushi Platter on a rustic wooden table.\nSurrounded by scattered [INGREDIENTS] and a [DRINK].\nSoft window light from the left side, diffused by sheer curtains.\nShot with a 50mm lens at f/5.6. High color contrast, extremely detailed, appetizing.\nHigh fashion hyper-realistic aesthetic, muted tones.\n--ar 4:5 --v 6.0",
        "tags": [
          "Food Imagery",
          "Photography",
          "Social Media"
        ]
      },
      {
        "id": "img-92",
        "title": "Craft Burger flat lay",
        "description": "Boutique food photography for menus and social media.",
        "template": "An overhead flat-lay photograph of Craft Burger on a rustic wooden table.\nSurrounded by scattered [INGREDIENTS] and a [DRINK].\nSoft window light from the left side, diffused by sheer curtains.\nShot with a 50mm lens at f/5.6. High color contrast, extremely detailed, appetizing.\nMonochromatic with deep shadows, intense contrast.\n--ar 4:5 --v 6.0",
        "tags": [
          "Food Imagery",
          "Photography",
          "Social Media"
        ]
      },
      {
        "id": "img-93",
        "title": "Tapas flat lay",
        "description": "Boutique food photography for menus and social media.",
        "template": "An overhead flat-lay photograph of Tapas on a rustic wooden table.\nSurrounded by scattered [INGREDIENTS] and a [DRINK].\nSoft window light from the left side, diffused by sheer curtains.\nShot with a 50mm lens at f/5.6. High color contrast, extremely detailed, appetizing.\nGritty documentarian style, desaturated colors.\n--ar 4:5 --v 6.0",
        "tags": [
          "Food Imagery",
          "Photography",
          "Social Media"
        ]
      },
      {
        "id": "img-94",
        "title": "Gelato flat lay",
        "description": "Boutique food photography for menus and social media.",
        "template": "An overhead flat-lay photograph of Gelato on a rustic wooden table.\nSurrounded by scattered [INGREDIENTS] and a [DRINK].\nSoft window light from the left side, diffused by sheer curtains.\nShot with a 50mm lens at f/5.6. High color contrast, extremely detailed, appetizing.\nMoody and dark atmospheric grading.\n--ar 4:5 --v 6.0",
        "tags": [
          "Food Imagery",
          "Photography",
          "Social Media"
        ]
      },
      {
        "id": "img-95",
        "title": "Acai Bowl flat lay",
        "description": "Boutique food photography for menus and social media.",
        "template": "An overhead flat-lay photograph of Acai Bowl on a rustic wooden table.\nSurrounded by scattered [INGREDIENTS] and a [DRINK].\nSoft window light from the left side, diffused by sheer curtains.\nShot with a 50mm lens at f/5.6. High color contrast, extremely detailed, appetizing.\nEthereal and dreamy, soft focus edges.\n--ar 4:5 --v 6.0",
        "tags": [
          "Food Imagery",
          "Photography",
          "Social Media"
        ]
      },
      {
        "id": "img-96",
        "title": "Sushi Platter flat lay",
        "description": "Boutique food photography for menus and social media.",
        "template": "An overhead flat-lay photograph of Sushi Platter on a rustic wooden table.\nSurrounded by scattered [INGREDIENTS] and a [DRINK].\nSoft window light from the left side, diffused by sheer curtains.\nShot with a 50mm lens at f/5.6. High color contrast, extremely detailed, appetizing.\nHigh fashion hyper-realistic aesthetic, muted tones.\n--ar 4:5 --v 6.0",
        "tags": [
          "Food Imagery",
          "Photography",
          "Social Media"
        ]
      },
      {
        "id": "img-97",
        "title": "Craft Burger flat lay",
        "description": "Boutique food photography for menus and social media.",
        "template": "An overhead flat-lay photograph of Craft Burger on a rustic wooden table.\nSurrounded by scattered [INGREDIENTS] and a [DRINK].\nSoft window light from the left side, diffused by sheer curtains.\nShot with a 50mm lens at f/5.6. High color contrast, extremely detailed, appetizing.\nMonochromatic with deep shadows, intense contrast.\n--ar 4:5 --v 6.0",
        "tags": [
          "Food Imagery",
          "Photography",
          "Social Media"
        ]
      },
      {
        "id": "img-98",
        "title": "Tapas flat lay",
        "description": "Boutique food photography for menus and social media.",
        "template": "An overhead flat-lay photograph of Tapas on a rustic wooden table.\nSurrounded by scattered [INGREDIENTS] and a [DRINK].\nSoft window light from the left side, diffused by sheer curtains.\nShot with a 50mm lens at f/5.6. High color contrast, extremely detailed, appetizing.\nGritty documentarian style, desaturated colors.\n--ar 4:5 --v 6.0",
        "tags": [
          "Food Imagery",
          "Photography",
          "Social Media"
        ]
      },
      {
        "id": "img-99",
        "title": "Gelato flat lay",
        "description": "Boutique food photography for menus and social media.",
        "template": "An overhead flat-lay photograph of Gelato on a rustic wooden table.\nSurrounded by scattered [INGREDIENTS] and a [DRINK].\nSoft window light from the left side, diffused by sheer curtains.\nShot with a 50mm lens at f/5.6. High color contrast, extremely detailed, appetizing.\nMoody and dark atmospheric grading.\n--ar 4:5 --v 6.0",
        "tags": [
          "Food Imagery",
          "Photography",
          "Social Media"
        ]
      },
      {
        "id": "img-100",
        "title": "Acai Bowl flat lay",
        "description": "Boutique food photography for menus and social media.",
        "template": "An overhead flat-lay photograph of Acai Bowl on a rustic wooden table.\nSurrounded by scattered [INGREDIENTS] and a [DRINK].\nSoft window light from the left side, diffused by sheer curtains.\nShot with a 50mm lens at f/5.6. High color contrast, extremely detailed, appetizing.\nEthereal and dreamy, soft focus edges.\n--ar 4:5 --v 6.0",
        "tags": [
          "Food Imagery",
          "Photography",
          "Social Media"
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
        "title": "The Write a press release CRAFT Framework",
        "description": "Universally applicable framework tailored for Write a press release.",
        "template": "CONTEXT: [Insert current project context]\nROLE: Act as a Senior Product Manager with 15 years of industry experience.\nACTION: Write a press release\nFORMAT: [Insert preferred output structure, e.g. bulleted list, table]\nTONE: Authoritative, analytical, precise.",
        "tags": [
          "Framework",
          "Universal"
        ]
      },
      {
        "id": "pe-2",
        "title": "The Design a user interview script CRAFT Framework",
        "description": "Universally applicable framework tailored for Design a user interview script.",
        "template": "CONTEXT: [Insert current project context]\nROLE: Act as a Senior UX Researcher with 15 years of industry experience.\nACTION: Design a user interview script\nFORMAT: [Insert preferred output structure, e.g. bulleted list, table]\nTONE: Bold, persuasive, actionable.",
        "tags": [
          "Framework",
          "Universal"
        ]
      },
      {
        "id": "pe-3",
        "title": "The Plan a content calendar CRAFT Framework",
        "description": "Universally applicable framework tailored for Plan a content calendar.",
        "template": "CONTEXT: [Insert current project context]\nROLE: Act as a Senior SEO Expert with 15 years of industry experience.\nACTION: Plan a content calendar\nFORMAT: [Insert preferred output structure, e.g. bulleted list, table]\nTONE: Concise, objective, neutral.",
        "tags": [
          "Framework",
          "Universal"
        ]
      },
      {
        "id": "pe-4",
        "title": "The Analyze market trends CRAFT Framework",
        "description": "Universally applicable framework tailored for Analyze market trends.",
        "template": "CONTEXT: [Insert current project context]\nROLE: Act as a Senior Financial Advisor with 15 years of industry experience.\nACTION: Analyze market trends\nFORMAT: [Insert preferred output structure, e.g. bulleted list, table]\nTONE: Witty, creative, punchy.",
        "tags": [
          "Framework",
          "Universal"
        ]
      },
      {
        "id": "pe-5",
        "title": "The Draft compliance guidelines CRAFT Framework",
        "description": "Universally applicable framework tailored for Draft compliance guidelines.",
        "template": "CONTEXT: [Insert current project context]\nROLE: Act as a Senior Legal Expert with 15 years of industry experience.\nACTION: Draft compliance guidelines\nFORMAT: [Insert preferred output structure, e.g. bulleted list, table]\nTONE: Urgent, clear, decisive.",
        "tags": [
          "Framework",
          "Universal"
        ]
      },
      {
        "id": "pe-6",
        "title": "The Write a press release CRAFT Framework",
        "description": "Universally applicable framework tailored for Write a press release.",
        "template": "CONTEXT: [Insert current project context]\nROLE: Act as a Senior Product Manager with 15 years of industry experience.\nACTION: Write a press release\nFORMAT: [Insert preferred output structure, e.g. bulleted list, table]\nTONE: Authoritative, analytical, precise.",
        "tags": [
          "Framework",
          "Universal"
        ]
      },
      {
        "id": "pe-7",
        "title": "The Design a user interview script CRAFT Framework",
        "description": "Universally applicable framework tailored for Design a user interview script.",
        "template": "CONTEXT: [Insert current project context]\nROLE: Act as a Senior UX Researcher with 15 years of industry experience.\nACTION: Design a user interview script\nFORMAT: [Insert preferred output structure, e.g. bulleted list, table]\nTONE: Bold, persuasive, actionable.",
        "tags": [
          "Framework",
          "Universal"
        ]
      },
      {
        "id": "pe-8",
        "title": "The Plan a content calendar CRAFT Framework",
        "description": "Universally applicable framework tailored for Plan a content calendar.",
        "template": "CONTEXT: [Insert current project context]\nROLE: Act as a Senior SEO Expert with 15 years of industry experience.\nACTION: Plan a content calendar\nFORMAT: [Insert preferred output structure, e.g. bulleted list, table]\nTONE: Concise, objective, neutral.",
        "tags": [
          "Framework",
          "Universal"
        ]
      },
      {
        "id": "pe-9",
        "title": "The Analyze market trends CRAFT Framework",
        "description": "Universally applicable framework tailored for Analyze market trends.",
        "template": "CONTEXT: [Insert current project context]\nROLE: Act as a Senior Financial Advisor with 15 years of industry experience.\nACTION: Analyze market trends\nFORMAT: [Insert preferred output structure, e.g. bulleted list, table]\nTONE: Witty, creative, punchy.",
        "tags": [
          "Framework",
          "Universal"
        ]
      },
      {
        "id": "pe-10",
        "title": "The Draft compliance guidelines CRAFT Framework",
        "description": "Universally applicable framework tailored for Draft compliance guidelines.",
        "template": "CONTEXT: [Insert current project context]\nROLE: Act as a Senior Legal Expert with 15 years of industry experience.\nACTION: Draft compliance guidelines\nFORMAT: [Insert preferred output structure, e.g. bulleted list, table]\nTONE: Urgent, clear, decisive.",
        "tags": [
          "Framework",
          "Universal"
        ]
      },
      {
        "id": "pe-11",
        "title": "The Write a press release CRAFT Framework",
        "description": "Universally applicable framework tailored for Write a press release.",
        "template": "CONTEXT: [Insert current project context]\nROLE: Act as a Senior Product Manager with 15 years of industry experience.\nACTION: Write a press release\nFORMAT: [Insert preferred output structure, e.g. bulleted list, table]\nTONE: Authoritative, analytical, precise.",
        "tags": [
          "Framework",
          "Universal"
        ]
      },
      {
        "id": "pe-12",
        "title": "The Design a user interview script CRAFT Framework",
        "description": "Universally applicable framework tailored for Design a user interview script.",
        "template": "CONTEXT: [Insert current project context]\nROLE: Act as a Senior UX Researcher with 15 years of industry experience.\nACTION: Design a user interview script\nFORMAT: [Insert preferred output structure, e.g. bulleted list, table]\nTONE: Bold, persuasive, actionable.",
        "tags": [
          "Framework",
          "Universal"
        ]
      },
      {
        "id": "pe-13",
        "title": "The Plan a content calendar CRAFT Framework",
        "description": "Universally applicable framework tailored for Plan a content calendar.",
        "template": "CONTEXT: [Insert current project context]\nROLE: Act as a Senior SEO Expert with 15 years of industry experience.\nACTION: Plan a content calendar\nFORMAT: [Insert preferred output structure, e.g. bulleted list, table]\nTONE: Concise, objective, neutral.",
        "tags": [
          "Framework",
          "Universal"
        ]
      },
      {
        "id": "pe-14",
        "title": "The Analyze market trends CRAFT Framework",
        "description": "Universally applicable framework tailored for Analyze market trends.",
        "template": "CONTEXT: [Insert current project context]\nROLE: Act as a Senior Financial Advisor with 15 years of industry experience.\nACTION: Analyze market trends\nFORMAT: [Insert preferred output structure, e.g. bulleted list, table]\nTONE: Witty, creative, punchy.",
        "tags": [
          "Framework",
          "Universal"
        ]
      },
      {
        "id": "pe-15",
        "title": "The Draft compliance guidelines CRAFT Framework",
        "description": "Universally applicable framework tailored for Draft compliance guidelines.",
        "template": "CONTEXT: [Insert current project context]\nROLE: Act as a Senior Legal Expert with 15 years of industry experience.\nACTION: Draft compliance guidelines\nFORMAT: [Insert preferred output structure, e.g. bulleted list, table]\nTONE: Urgent, clear, decisive.",
        "tags": [
          "Framework",
          "Universal"
        ]
      },
      {
        "id": "pe-16",
        "title": "The Write a press release CRAFT Framework",
        "description": "Universally applicable framework tailored for Write a press release.",
        "template": "CONTEXT: [Insert current project context]\nROLE: Act as a Senior Product Manager with 15 years of industry experience.\nACTION: Write a press release\nFORMAT: [Insert preferred output structure, e.g. bulleted list, table]\nTONE: Authoritative, analytical, precise.",
        "tags": [
          "Framework",
          "Universal"
        ]
      },
      {
        "id": "pe-17",
        "title": "The Design a user interview script CRAFT Framework",
        "description": "Universally applicable framework tailored for Design a user interview script.",
        "template": "CONTEXT: [Insert current project context]\nROLE: Act as a Senior UX Researcher with 15 years of industry experience.\nACTION: Design a user interview script\nFORMAT: [Insert preferred output structure, e.g. bulleted list, table]\nTONE: Bold, persuasive, actionable.",
        "tags": [
          "Framework",
          "Universal"
        ]
      },
      {
        "id": "pe-18",
        "title": "The Plan a content calendar CRAFT Framework",
        "description": "Universally applicable framework tailored for Plan a content calendar.",
        "template": "CONTEXT: [Insert current project context]\nROLE: Act as a Senior SEO Expert with 15 years of industry experience.\nACTION: Plan a content calendar\nFORMAT: [Insert preferred output structure, e.g. bulleted list, table]\nTONE: Concise, objective, neutral.",
        "tags": [
          "Framework",
          "Universal"
        ]
      },
      {
        "id": "pe-19",
        "title": "The Analyze market trends CRAFT Framework",
        "description": "Universally applicable framework tailored for Analyze market trends.",
        "template": "CONTEXT: [Insert current project context]\nROLE: Act as a Senior Financial Advisor with 15 years of industry experience.\nACTION: Analyze market trends\nFORMAT: [Insert preferred output structure, e.g. bulleted list, table]\nTONE: Witty, creative, punchy.",
        "tags": [
          "Framework",
          "Universal"
        ]
      },
      {
        "id": "pe-20",
        "title": "The Draft compliance guidelines CRAFT Framework",
        "description": "Universally applicable framework tailored for Draft compliance guidelines.",
        "template": "CONTEXT: [Insert current project context]\nROLE: Act as a Senior Legal Expert with 15 years of industry experience.\nACTION: Draft compliance guidelines\nFORMAT: [Insert preferred output structure, e.g. bulleted list, table]\nTONE: Urgent, clear, decisive.",
        "tags": [
          "Framework",
          "Universal"
        ]
      },
      {
        "id": "pe-21",
        "title": "Product Manager Strategy Builder",
        "description": "Generate a comprehensive strategy from the perspective of a Product Manager.",
        "template": "CONTEXT: We are launching a new initiative and need strategic direction.\nROLE: Product Manager\nACTION: Outline a step-by-step strategy for [Goal].\nInclude identifying risks and proposing mitigation tactics.\nFORMAT: Markdown document with headers.\nTONE: Authoritative, analytical, precise.",
        "tags": [
          "Strategy",
          "Planning"
        ]
      },
      {
        "id": "pe-22",
        "title": "UX Researcher Strategy Builder",
        "description": "Generate a comprehensive strategy from the perspective of a UX Researcher.",
        "template": "CONTEXT: We are launching a new initiative and need strategic direction.\nROLE: UX Researcher\nACTION: Outline a step-by-step strategy for [Goal].\nInclude identifying risks and proposing mitigation tactics.\nFORMAT: Markdown document with headers.\nTONE: Bold, persuasive, actionable.",
        "tags": [
          "Strategy",
          "Planning"
        ]
      },
      {
        "id": "pe-23",
        "title": "SEO Expert Strategy Builder",
        "description": "Generate a comprehensive strategy from the perspective of a SEO Expert.",
        "template": "CONTEXT: We are launching a new initiative and need strategic direction.\nROLE: SEO Expert\nACTION: Outline a step-by-step strategy for [Goal].\nInclude identifying risks and proposing mitigation tactics.\nFORMAT: Markdown document with headers.\nTONE: Concise, objective, neutral.",
        "tags": [
          "Strategy",
          "Planning"
        ]
      },
      {
        "id": "pe-24",
        "title": "Financial Advisor Strategy Builder",
        "description": "Generate a comprehensive strategy from the perspective of a Financial Advisor.",
        "template": "CONTEXT: We are launching a new initiative and need strategic direction.\nROLE: Financial Advisor\nACTION: Outline a step-by-step strategy for [Goal].\nInclude identifying risks and proposing mitigation tactics.\nFORMAT: Markdown document with headers.\nTONE: Witty, creative, punchy.",
        "tags": [
          "Strategy",
          "Planning"
        ]
      },
      {
        "id": "pe-25",
        "title": "Legal Expert Strategy Builder",
        "description": "Generate a comprehensive strategy from the perspective of a Legal Expert.",
        "template": "CONTEXT: We are launching a new initiative and need strategic direction.\nROLE: Legal Expert\nACTION: Outline a step-by-step strategy for [Goal].\nInclude identifying risks and proposing mitigation tactics.\nFORMAT: Markdown document with headers.\nTONE: Urgent, clear, decisive.",
        "tags": [
          "Strategy",
          "Planning"
        ]
      },
      {
        "id": "pe-26",
        "title": "Product Manager Strategy Builder",
        "description": "Generate a comprehensive strategy from the perspective of a Product Manager.",
        "template": "CONTEXT: We are launching a new initiative and need strategic direction.\nROLE: Product Manager\nACTION: Outline a step-by-step strategy for [Goal].\nInclude identifying risks and proposing mitigation tactics.\nFORMAT: Markdown document with headers.\nTONE: Authoritative, analytical, precise.",
        "tags": [
          "Strategy",
          "Planning"
        ]
      },
      {
        "id": "pe-27",
        "title": "UX Researcher Strategy Builder",
        "description": "Generate a comprehensive strategy from the perspective of a UX Researcher.",
        "template": "CONTEXT: We are launching a new initiative and need strategic direction.\nROLE: UX Researcher\nACTION: Outline a step-by-step strategy for [Goal].\nInclude identifying risks and proposing mitigation tactics.\nFORMAT: Markdown document with headers.\nTONE: Bold, persuasive, actionable.",
        "tags": [
          "Strategy",
          "Planning"
        ]
      },
      {
        "id": "pe-28",
        "title": "SEO Expert Strategy Builder",
        "description": "Generate a comprehensive strategy from the perspective of a SEO Expert.",
        "template": "CONTEXT: We are launching a new initiative and need strategic direction.\nROLE: SEO Expert\nACTION: Outline a step-by-step strategy for [Goal].\nInclude identifying risks and proposing mitigation tactics.\nFORMAT: Markdown document with headers.\nTONE: Concise, objective, neutral.",
        "tags": [
          "Strategy",
          "Planning"
        ]
      },
      {
        "id": "pe-29",
        "title": "Financial Advisor Strategy Builder",
        "description": "Generate a comprehensive strategy from the perspective of a Financial Advisor.",
        "template": "CONTEXT: We are launching a new initiative and need strategic direction.\nROLE: Financial Advisor\nACTION: Outline a step-by-step strategy for [Goal].\nInclude identifying risks and proposing mitigation tactics.\nFORMAT: Markdown document with headers.\nTONE: Witty, creative, punchy.",
        "tags": [
          "Strategy",
          "Planning"
        ]
      },
      {
        "id": "pe-30",
        "title": "Legal Expert Strategy Builder",
        "description": "Generate a comprehensive strategy from the perspective of a Legal Expert.",
        "template": "CONTEXT: We are launching a new initiative and need strategic direction.\nROLE: Legal Expert\nACTION: Outline a step-by-step strategy for [Goal].\nInclude identifying risks and proposing mitigation tactics.\nFORMAT: Markdown document with headers.\nTONE: Urgent, clear, decisive.",
        "tags": [
          "Strategy",
          "Planning"
        ]
      },
      {
        "id": "pe-31",
        "title": "Product Manager Strategy Builder",
        "description": "Generate a comprehensive strategy from the perspective of a Product Manager.",
        "template": "CONTEXT: We are launching a new initiative and need strategic direction.\nROLE: Product Manager\nACTION: Outline a step-by-step strategy for [Goal].\nInclude identifying risks and proposing mitigation tactics.\nFORMAT: Markdown document with headers.\nTONE: Authoritative, analytical, precise.",
        "tags": [
          "Strategy",
          "Planning"
        ]
      },
      {
        "id": "pe-32",
        "title": "UX Researcher Strategy Builder",
        "description": "Generate a comprehensive strategy from the perspective of a UX Researcher.",
        "template": "CONTEXT: We are launching a new initiative and need strategic direction.\nROLE: UX Researcher\nACTION: Outline a step-by-step strategy for [Goal].\nInclude identifying risks and proposing mitigation tactics.\nFORMAT: Markdown document with headers.\nTONE: Bold, persuasive, actionable.",
        "tags": [
          "Strategy",
          "Planning"
        ]
      },
      {
        "id": "pe-33",
        "title": "SEO Expert Strategy Builder",
        "description": "Generate a comprehensive strategy from the perspective of a SEO Expert.",
        "template": "CONTEXT: We are launching a new initiative and need strategic direction.\nROLE: SEO Expert\nACTION: Outline a step-by-step strategy for [Goal].\nInclude identifying risks and proposing mitigation tactics.\nFORMAT: Markdown document with headers.\nTONE: Concise, objective, neutral.",
        "tags": [
          "Strategy",
          "Planning"
        ]
      },
      {
        "id": "pe-34",
        "title": "Financial Advisor Strategy Builder",
        "description": "Generate a comprehensive strategy from the perspective of a Financial Advisor.",
        "template": "CONTEXT: We are launching a new initiative and need strategic direction.\nROLE: Financial Advisor\nACTION: Outline a step-by-step strategy for [Goal].\nInclude identifying risks and proposing mitigation tactics.\nFORMAT: Markdown document with headers.\nTONE: Witty, creative, punchy.",
        "tags": [
          "Strategy",
          "Planning"
        ]
      },
      {
        "id": "pe-35",
        "title": "Legal Expert Strategy Builder",
        "description": "Generate a comprehensive strategy from the perspective of a Legal Expert.",
        "template": "CONTEXT: We are launching a new initiative and need strategic direction.\nROLE: Legal Expert\nACTION: Outline a step-by-step strategy for [Goal].\nInclude identifying risks and proposing mitigation tactics.\nFORMAT: Markdown document with headers.\nTONE: Urgent, clear, decisive.",
        "tags": [
          "Strategy",
          "Planning"
        ]
      },
      {
        "id": "pe-36",
        "title": "Product Manager Strategy Builder",
        "description": "Generate a comprehensive strategy from the perspective of a Product Manager.",
        "template": "CONTEXT: We are launching a new initiative and need strategic direction.\nROLE: Product Manager\nACTION: Outline a step-by-step strategy for [Goal].\nInclude identifying risks and proposing mitigation tactics.\nFORMAT: Markdown document with headers.\nTONE: Authoritative, analytical, precise.",
        "tags": [
          "Strategy",
          "Planning"
        ]
      },
      {
        "id": "pe-37",
        "title": "UX Researcher Strategy Builder",
        "description": "Generate a comprehensive strategy from the perspective of a UX Researcher.",
        "template": "CONTEXT: We are launching a new initiative and need strategic direction.\nROLE: UX Researcher\nACTION: Outline a step-by-step strategy for [Goal].\nInclude identifying risks and proposing mitigation tactics.\nFORMAT: Markdown document with headers.\nTONE: Bold, persuasive, actionable.",
        "tags": [
          "Strategy",
          "Planning"
        ]
      },
      {
        "id": "pe-38",
        "title": "SEO Expert Strategy Builder",
        "description": "Generate a comprehensive strategy from the perspective of a SEO Expert.",
        "template": "CONTEXT: We are launching a new initiative and need strategic direction.\nROLE: SEO Expert\nACTION: Outline a step-by-step strategy for [Goal].\nInclude identifying risks and proposing mitigation tactics.\nFORMAT: Markdown document with headers.\nTONE: Concise, objective, neutral.",
        "tags": [
          "Strategy",
          "Planning"
        ]
      },
      {
        "id": "pe-39",
        "title": "Financial Advisor Strategy Builder",
        "description": "Generate a comprehensive strategy from the perspective of a Financial Advisor.",
        "template": "CONTEXT: We are launching a new initiative and need strategic direction.\nROLE: Financial Advisor\nACTION: Outline a step-by-step strategy for [Goal].\nInclude identifying risks and proposing mitigation tactics.\nFORMAT: Markdown document with headers.\nTONE: Witty, creative, punchy.",
        "tags": [
          "Strategy",
          "Planning"
        ]
      },
      {
        "id": "pe-40",
        "title": "Legal Expert Strategy Builder",
        "description": "Generate a comprehensive strategy from the perspective of a Legal Expert.",
        "template": "CONTEXT: We are launching a new initiative and need strategic direction.\nROLE: Legal Expert\nACTION: Outline a step-by-step strategy for [Goal].\nInclude identifying risks and proposing mitigation tactics.\nFORMAT: Markdown document with headers.\nTONE: Urgent, clear, decisive.",
        "tags": [
          "Strategy",
          "Planning"
        ]
      },
      {
        "id": "pe-41",
        "title": "Product Manager Problem Solver",
        "description": "Diagnose and resolve issues efficiently as a Product Manager.",
        "template": "CONTEXT: We are facing [Issue/Problem Description] and need absolute clarity on how to fix it.\nROLE: Expert Product Manager\nACTION: Break down the root cause of [Issue], then formulate a 3-step solution to resolve it.\nFORMAT: Root cause analysis followed by an action plan table.\nTONE: Authoritative, analytical, precise.",
        "tags": [
          "Problem Solving",
          "Analysis"
        ]
      },
      {
        "id": "pe-42",
        "title": "UX Researcher Problem Solver",
        "description": "Diagnose and resolve issues efficiently as a UX Researcher.",
        "template": "CONTEXT: We are facing [Issue/Problem Description] and need absolute clarity on how to fix it.\nROLE: Expert UX Researcher\nACTION: Break down the root cause of [Issue], then formulate a 3-step solution to resolve it.\nFORMAT: Root cause analysis followed by an action plan table.\nTONE: Bold, persuasive, actionable.",
        "tags": [
          "Problem Solving",
          "Analysis"
        ]
      },
      {
        "id": "pe-43",
        "title": "SEO Expert Problem Solver",
        "description": "Diagnose and resolve issues efficiently as a SEO Expert.",
        "template": "CONTEXT: We are facing [Issue/Problem Description] and need absolute clarity on how to fix it.\nROLE: Expert SEO Expert\nACTION: Break down the root cause of [Issue], then formulate a 3-step solution to resolve it.\nFORMAT: Root cause analysis followed by an action plan table.\nTONE: Concise, objective, neutral.",
        "tags": [
          "Problem Solving",
          "Analysis"
        ]
      },
      {
        "id": "pe-44",
        "title": "Financial Advisor Problem Solver",
        "description": "Diagnose and resolve issues efficiently as a Financial Advisor.",
        "template": "CONTEXT: We are facing [Issue/Problem Description] and need absolute clarity on how to fix it.\nROLE: Expert Financial Advisor\nACTION: Break down the root cause of [Issue], then formulate a 3-step solution to resolve it.\nFORMAT: Root cause analysis followed by an action plan table.\nTONE: Witty, creative, punchy.",
        "tags": [
          "Problem Solving",
          "Analysis"
        ]
      },
      {
        "id": "pe-45",
        "title": "Legal Expert Problem Solver",
        "description": "Diagnose and resolve issues efficiently as a Legal Expert.",
        "template": "CONTEXT: We are facing [Issue/Problem Description] and need absolute clarity on how to fix it.\nROLE: Expert Legal Expert\nACTION: Break down the root cause of [Issue], then formulate a 3-step solution to resolve it.\nFORMAT: Root cause analysis followed by an action plan table.\nTONE: Urgent, clear, decisive.",
        "tags": [
          "Problem Solving",
          "Analysis"
        ]
      },
      {
        "id": "pe-46",
        "title": "Product Manager Problem Solver",
        "description": "Diagnose and resolve issues efficiently as a Product Manager.",
        "template": "CONTEXT: We are facing [Issue/Problem Description] and need absolute clarity on how to fix it.\nROLE: Expert Product Manager\nACTION: Break down the root cause of [Issue], then formulate a 3-step solution to resolve it.\nFORMAT: Root cause analysis followed by an action plan table.\nTONE: Authoritative, analytical, precise.",
        "tags": [
          "Problem Solving",
          "Analysis"
        ]
      },
      {
        "id": "pe-47",
        "title": "UX Researcher Problem Solver",
        "description": "Diagnose and resolve issues efficiently as a UX Researcher.",
        "template": "CONTEXT: We are facing [Issue/Problem Description] and need absolute clarity on how to fix it.\nROLE: Expert UX Researcher\nACTION: Break down the root cause of [Issue], then formulate a 3-step solution to resolve it.\nFORMAT: Root cause analysis followed by an action plan table.\nTONE: Bold, persuasive, actionable.",
        "tags": [
          "Problem Solving",
          "Analysis"
        ]
      },
      {
        "id": "pe-48",
        "title": "SEO Expert Problem Solver",
        "description": "Diagnose and resolve issues efficiently as a SEO Expert.",
        "template": "CONTEXT: We are facing [Issue/Problem Description] and need absolute clarity on how to fix it.\nROLE: Expert SEO Expert\nACTION: Break down the root cause of [Issue], then formulate a 3-step solution to resolve it.\nFORMAT: Root cause analysis followed by an action plan table.\nTONE: Concise, objective, neutral.",
        "tags": [
          "Problem Solving",
          "Analysis"
        ]
      },
      {
        "id": "pe-49",
        "title": "Financial Advisor Problem Solver",
        "description": "Diagnose and resolve issues efficiently as a Financial Advisor.",
        "template": "CONTEXT: We are facing [Issue/Problem Description] and need absolute clarity on how to fix it.\nROLE: Expert Financial Advisor\nACTION: Break down the root cause of [Issue], then formulate a 3-step solution to resolve it.\nFORMAT: Root cause analysis followed by an action plan table.\nTONE: Witty, creative, punchy.",
        "tags": [
          "Problem Solving",
          "Analysis"
        ]
      },
      {
        "id": "pe-50",
        "title": "Legal Expert Problem Solver",
        "description": "Diagnose and resolve issues efficiently as a Legal Expert.",
        "template": "CONTEXT: We are facing [Issue/Problem Description] and need absolute clarity on how to fix it.\nROLE: Expert Legal Expert\nACTION: Break down the root cause of [Issue], then formulate a 3-step solution to resolve it.\nFORMAT: Root cause analysis followed by an action plan table.\nTONE: Urgent, clear, decisive.",
        "tags": [
          "Problem Solving",
          "Analysis"
        ]
      },
      {
        "id": "pe-51",
        "title": "Product Manager Problem Solver",
        "description": "Diagnose and resolve issues efficiently as a Product Manager.",
        "template": "CONTEXT: We are facing [Issue/Problem Description] and need absolute clarity on how to fix it.\nROLE: Expert Product Manager\nACTION: Break down the root cause of [Issue], then formulate a 3-step solution to resolve it.\nFORMAT: Root cause analysis followed by an action plan table.\nTONE: Authoritative, analytical, precise.",
        "tags": [
          "Problem Solving",
          "Analysis"
        ]
      },
      {
        "id": "pe-52",
        "title": "UX Researcher Problem Solver",
        "description": "Diagnose and resolve issues efficiently as a UX Researcher.",
        "template": "CONTEXT: We are facing [Issue/Problem Description] and need absolute clarity on how to fix it.\nROLE: Expert UX Researcher\nACTION: Break down the root cause of [Issue], then formulate a 3-step solution to resolve it.\nFORMAT: Root cause analysis followed by an action plan table.\nTONE: Bold, persuasive, actionable.",
        "tags": [
          "Problem Solving",
          "Analysis"
        ]
      },
      {
        "id": "pe-53",
        "title": "SEO Expert Problem Solver",
        "description": "Diagnose and resolve issues efficiently as a SEO Expert.",
        "template": "CONTEXT: We are facing [Issue/Problem Description] and need absolute clarity on how to fix it.\nROLE: Expert SEO Expert\nACTION: Break down the root cause of [Issue], then formulate a 3-step solution to resolve it.\nFORMAT: Root cause analysis followed by an action plan table.\nTONE: Concise, objective, neutral.",
        "tags": [
          "Problem Solving",
          "Analysis"
        ]
      },
      {
        "id": "pe-54",
        "title": "Financial Advisor Problem Solver",
        "description": "Diagnose and resolve issues efficiently as a Financial Advisor.",
        "template": "CONTEXT: We are facing [Issue/Problem Description] and need absolute clarity on how to fix it.\nROLE: Expert Financial Advisor\nACTION: Break down the root cause of [Issue], then formulate a 3-step solution to resolve it.\nFORMAT: Root cause analysis followed by an action plan table.\nTONE: Witty, creative, punchy.",
        "tags": [
          "Problem Solving",
          "Analysis"
        ]
      },
      {
        "id": "pe-55",
        "title": "Legal Expert Problem Solver",
        "description": "Diagnose and resolve issues efficiently as a Legal Expert.",
        "template": "CONTEXT: We are facing [Issue/Problem Description] and need absolute clarity on how to fix it.\nROLE: Expert Legal Expert\nACTION: Break down the root cause of [Issue], then formulate a 3-step solution to resolve it.\nFORMAT: Root cause analysis followed by an action plan table.\nTONE: Urgent, clear, decisive.",
        "tags": [
          "Problem Solving",
          "Analysis"
        ]
      },
      {
        "id": "pe-56",
        "title": "Product Manager Problem Solver",
        "description": "Diagnose and resolve issues efficiently as a Product Manager.",
        "template": "CONTEXT: We are facing [Issue/Problem Description] and need absolute clarity on how to fix it.\nROLE: Expert Product Manager\nACTION: Break down the root cause of [Issue], then formulate a 3-step solution to resolve it.\nFORMAT: Root cause analysis followed by an action plan table.\nTONE: Authoritative, analytical, precise.",
        "tags": [
          "Problem Solving",
          "Analysis"
        ]
      },
      {
        "id": "pe-57",
        "title": "UX Researcher Problem Solver",
        "description": "Diagnose and resolve issues efficiently as a UX Researcher.",
        "template": "CONTEXT: We are facing [Issue/Problem Description] and need absolute clarity on how to fix it.\nROLE: Expert UX Researcher\nACTION: Break down the root cause of [Issue], then formulate a 3-step solution to resolve it.\nFORMAT: Root cause analysis followed by an action plan table.\nTONE: Bold, persuasive, actionable.",
        "tags": [
          "Problem Solving",
          "Analysis"
        ]
      },
      {
        "id": "pe-58",
        "title": "SEO Expert Problem Solver",
        "description": "Diagnose and resolve issues efficiently as a SEO Expert.",
        "template": "CONTEXT: We are facing [Issue/Problem Description] and need absolute clarity on how to fix it.\nROLE: Expert SEO Expert\nACTION: Break down the root cause of [Issue], then formulate a 3-step solution to resolve it.\nFORMAT: Root cause analysis followed by an action plan table.\nTONE: Concise, objective, neutral.",
        "tags": [
          "Problem Solving",
          "Analysis"
        ]
      },
      {
        "id": "pe-59",
        "title": "Financial Advisor Problem Solver",
        "description": "Diagnose and resolve issues efficiently as a Financial Advisor.",
        "template": "CONTEXT: We are facing [Issue/Problem Description] and need absolute clarity on how to fix it.\nROLE: Expert Financial Advisor\nACTION: Break down the root cause of [Issue], then formulate a 3-step solution to resolve it.\nFORMAT: Root cause analysis followed by an action plan table.\nTONE: Witty, creative, punchy.",
        "tags": [
          "Problem Solving",
          "Analysis"
        ]
      },
      {
        "id": "pe-60",
        "title": "Legal Expert Problem Solver",
        "description": "Diagnose and resolve issues efficiently as a Legal Expert.",
        "template": "CONTEXT: We are facing [Issue/Problem Description] and need absolute clarity on how to fix it.\nROLE: Expert Legal Expert\nACTION: Break down the root cause of [Issue], then formulate a 3-step solution to resolve it.\nFORMAT: Root cause analysis followed by an action plan table.\nTONE: Urgent, clear, decisive.",
        "tags": [
          "Problem Solving",
          "Analysis"
        ]
      },
      {
        "id": "pe-61",
        "title": "The Write a press release Generator",
        "description": "Create rapid drafts for Write a press release.",
        "template": "CONTEXT: We have tight deadlines and require immediate output for [Topic].\nROLE: Product Manager\nACTION: Generate a draft for Write a press release based on the following parameters: [Insert parameters].\nFORMAT: Clear, concise paragraphs.\nTONE: Authoritative, analytical, precise.",
        "tags": [
          "Drafting",
          "Fast Output"
        ]
      },
      {
        "id": "pe-62",
        "title": "The Design a user interview script Generator",
        "description": "Create rapid drafts for Design a user interview script.",
        "template": "CONTEXT: We have tight deadlines and require immediate output for [Topic].\nROLE: UX Researcher\nACTION: Generate a draft for Design a user interview script based on the following parameters: [Insert parameters].\nFORMAT: Clear, concise paragraphs.\nTONE: Bold, persuasive, actionable.",
        "tags": [
          "Drafting",
          "Fast Output"
        ]
      },
      {
        "id": "pe-63",
        "title": "The Plan a content calendar Generator",
        "description": "Create rapid drafts for Plan a content calendar.",
        "template": "CONTEXT: We have tight deadlines and require immediate output for [Topic].\nROLE: SEO Expert\nACTION: Generate a draft for Plan a content calendar based on the following parameters: [Insert parameters].\nFORMAT: Clear, concise paragraphs.\nTONE: Concise, objective, neutral.",
        "tags": [
          "Drafting",
          "Fast Output"
        ]
      },
      {
        "id": "pe-64",
        "title": "The Analyze market trends Generator",
        "description": "Create rapid drafts for Analyze market trends.",
        "template": "CONTEXT: We have tight deadlines and require immediate output for [Topic].\nROLE: Financial Advisor\nACTION: Generate a draft for Analyze market trends based on the following parameters: [Insert parameters].\nFORMAT: Clear, concise paragraphs.\nTONE: Witty, creative, punchy.",
        "tags": [
          "Drafting",
          "Fast Output"
        ]
      },
      {
        "id": "pe-65",
        "title": "The Draft compliance guidelines Generator",
        "description": "Create rapid drafts for Draft compliance guidelines.",
        "template": "CONTEXT: We have tight deadlines and require immediate output for [Topic].\nROLE: Legal Expert\nACTION: Generate a draft for Draft compliance guidelines based on the following parameters: [Insert parameters].\nFORMAT: Clear, concise paragraphs.\nTONE: Urgent, clear, decisive.",
        "tags": [
          "Drafting",
          "Fast Output"
        ]
      },
      {
        "id": "pe-66",
        "title": "The Write a press release Generator",
        "description": "Create rapid drafts for Write a press release.",
        "template": "CONTEXT: We have tight deadlines and require immediate output for [Topic].\nROLE: Product Manager\nACTION: Generate a draft for Write a press release based on the following parameters: [Insert parameters].\nFORMAT: Clear, concise paragraphs.\nTONE: Authoritative, analytical, precise.",
        "tags": [
          "Drafting",
          "Fast Output"
        ]
      },
      {
        "id": "pe-67",
        "title": "The Design a user interview script Generator",
        "description": "Create rapid drafts for Design a user interview script.",
        "template": "CONTEXT: We have tight deadlines and require immediate output for [Topic].\nROLE: UX Researcher\nACTION: Generate a draft for Design a user interview script based on the following parameters: [Insert parameters].\nFORMAT: Clear, concise paragraphs.\nTONE: Bold, persuasive, actionable.",
        "tags": [
          "Drafting",
          "Fast Output"
        ]
      },
      {
        "id": "pe-68",
        "title": "The Plan a content calendar Generator",
        "description": "Create rapid drafts for Plan a content calendar.",
        "template": "CONTEXT: We have tight deadlines and require immediate output for [Topic].\nROLE: SEO Expert\nACTION: Generate a draft for Plan a content calendar based on the following parameters: [Insert parameters].\nFORMAT: Clear, concise paragraphs.\nTONE: Concise, objective, neutral.",
        "tags": [
          "Drafting",
          "Fast Output"
        ]
      },
      {
        "id": "pe-69",
        "title": "The Analyze market trends Generator",
        "description": "Create rapid drafts for Analyze market trends.",
        "template": "CONTEXT: We have tight deadlines and require immediate output for [Topic].\nROLE: Financial Advisor\nACTION: Generate a draft for Analyze market trends based on the following parameters: [Insert parameters].\nFORMAT: Clear, concise paragraphs.\nTONE: Witty, creative, punchy.",
        "tags": [
          "Drafting",
          "Fast Output"
        ]
      },
      {
        "id": "pe-70",
        "title": "The Draft compliance guidelines Generator",
        "description": "Create rapid drafts for Draft compliance guidelines.",
        "template": "CONTEXT: We have tight deadlines and require immediate output for [Topic].\nROLE: Legal Expert\nACTION: Generate a draft for Draft compliance guidelines based on the following parameters: [Insert parameters].\nFORMAT: Clear, concise paragraphs.\nTONE: Urgent, clear, decisive.",
        "tags": [
          "Drafting",
          "Fast Output"
        ]
      },
      {
        "id": "pe-71",
        "title": "The Write a press release Generator",
        "description": "Create rapid drafts for Write a press release.",
        "template": "CONTEXT: We have tight deadlines and require immediate output for [Topic].\nROLE: Product Manager\nACTION: Generate a draft for Write a press release based on the following parameters: [Insert parameters].\nFORMAT: Clear, concise paragraphs.\nTONE: Authoritative, analytical, precise.",
        "tags": [
          "Drafting",
          "Fast Output"
        ]
      },
      {
        "id": "pe-72",
        "title": "The Design a user interview script Generator",
        "description": "Create rapid drafts for Design a user interview script.",
        "template": "CONTEXT: We have tight deadlines and require immediate output for [Topic].\nROLE: UX Researcher\nACTION: Generate a draft for Design a user interview script based on the following parameters: [Insert parameters].\nFORMAT: Clear, concise paragraphs.\nTONE: Bold, persuasive, actionable.",
        "tags": [
          "Drafting",
          "Fast Output"
        ]
      },
      {
        "id": "pe-73",
        "title": "The Plan a content calendar Generator",
        "description": "Create rapid drafts for Plan a content calendar.",
        "template": "CONTEXT: We have tight deadlines and require immediate output for [Topic].\nROLE: SEO Expert\nACTION: Generate a draft for Plan a content calendar based on the following parameters: [Insert parameters].\nFORMAT: Clear, concise paragraphs.\nTONE: Concise, objective, neutral.",
        "tags": [
          "Drafting",
          "Fast Output"
        ]
      },
      {
        "id": "pe-74",
        "title": "The Analyze market trends Generator",
        "description": "Create rapid drafts for Analyze market trends.",
        "template": "CONTEXT: We have tight deadlines and require immediate output for [Topic].\nROLE: Financial Advisor\nACTION: Generate a draft for Analyze market trends based on the following parameters: [Insert parameters].\nFORMAT: Clear, concise paragraphs.\nTONE: Witty, creative, punchy.",
        "tags": [
          "Drafting",
          "Fast Output"
        ]
      },
      {
        "id": "pe-75",
        "title": "The Draft compliance guidelines Generator",
        "description": "Create rapid drafts for Draft compliance guidelines.",
        "template": "CONTEXT: We have tight deadlines and require immediate output for [Topic].\nROLE: Legal Expert\nACTION: Generate a draft for Draft compliance guidelines based on the following parameters: [Insert parameters].\nFORMAT: Clear, concise paragraphs.\nTONE: Urgent, clear, decisive.",
        "tags": [
          "Drafting",
          "Fast Output"
        ]
      },
      {
        "id": "pe-76",
        "title": "The Write a press release Generator",
        "description": "Create rapid drafts for Write a press release.",
        "template": "CONTEXT: We have tight deadlines and require immediate output for [Topic].\nROLE: Product Manager\nACTION: Generate a draft for Write a press release based on the following parameters: [Insert parameters].\nFORMAT: Clear, concise paragraphs.\nTONE: Authoritative, analytical, precise.",
        "tags": [
          "Drafting",
          "Fast Output"
        ]
      },
      {
        "id": "pe-77",
        "title": "The Design a user interview script Generator",
        "description": "Create rapid drafts for Design a user interview script.",
        "template": "CONTEXT: We have tight deadlines and require immediate output for [Topic].\nROLE: UX Researcher\nACTION: Generate a draft for Design a user interview script based on the following parameters: [Insert parameters].\nFORMAT: Clear, concise paragraphs.\nTONE: Bold, persuasive, actionable.",
        "tags": [
          "Drafting",
          "Fast Output"
        ]
      },
      {
        "id": "pe-78",
        "title": "The Plan a content calendar Generator",
        "description": "Create rapid drafts for Plan a content calendar.",
        "template": "CONTEXT: We have tight deadlines and require immediate output for [Topic].\nROLE: SEO Expert\nACTION: Generate a draft for Plan a content calendar based on the following parameters: [Insert parameters].\nFORMAT: Clear, concise paragraphs.\nTONE: Concise, objective, neutral.",
        "tags": [
          "Drafting",
          "Fast Output"
        ]
      },
      {
        "id": "pe-79",
        "title": "The Analyze market trends Generator",
        "description": "Create rapid drafts for Analyze market trends.",
        "template": "CONTEXT: We have tight deadlines and require immediate output for [Topic].\nROLE: Financial Advisor\nACTION: Generate a draft for Analyze market trends based on the following parameters: [Insert parameters].\nFORMAT: Clear, concise paragraphs.\nTONE: Witty, creative, punchy.",
        "tags": [
          "Drafting",
          "Fast Output"
        ]
      },
      {
        "id": "pe-80",
        "title": "The Draft compliance guidelines Generator",
        "description": "Create rapid drafts for Draft compliance guidelines.",
        "template": "CONTEXT: We have tight deadlines and require immediate output for [Topic].\nROLE: Legal Expert\nACTION: Generate a draft for Draft compliance guidelines based on the following parameters: [Insert parameters].\nFORMAT: Clear, concise paragraphs.\nTONE: Urgent, clear, decisive.",
        "tags": [
          "Drafting",
          "Fast Output"
        ]
      },
      {
        "id": "pe-81",
        "title": "Product Manager Evaluator",
        "description": "Review and critique work with the eye of a Product Manager.",
        "template": "CONTEXT: We need feedback on [Current Work/Document].\nROLE: Product Manager\nACTION: Review the provided material and provide constructive criticism. Highlight 3 strengths and 3 areas for improvement.\nFORMAT: Constructive feedback list.\nTONE: Authoritative, analytical, precise.",
        "tags": [
          "Review",
          "Critique"
        ]
      },
      {
        "id": "pe-82",
        "title": "UX Researcher Evaluator",
        "description": "Review and critique work with the eye of a UX Researcher.",
        "template": "CONTEXT: We need feedback on [Current Work/Document].\nROLE: UX Researcher\nACTION: Review the provided material and provide constructive criticism. Highlight 3 strengths and 3 areas for improvement.\nFORMAT: Constructive feedback list.\nTONE: Bold, persuasive, actionable.",
        "tags": [
          "Review",
          "Critique"
        ]
      },
      {
        "id": "pe-83",
        "title": "SEO Expert Evaluator",
        "description": "Review and critique work with the eye of a SEO Expert.",
        "template": "CONTEXT: We need feedback on [Current Work/Document].\nROLE: SEO Expert\nACTION: Review the provided material and provide constructive criticism. Highlight 3 strengths and 3 areas for improvement.\nFORMAT: Constructive feedback list.\nTONE: Concise, objective, neutral.",
        "tags": [
          "Review",
          "Critique"
        ]
      },
      {
        "id": "pe-84",
        "title": "Financial Advisor Evaluator",
        "description": "Review and critique work with the eye of a Financial Advisor.",
        "template": "CONTEXT: We need feedback on [Current Work/Document].\nROLE: Financial Advisor\nACTION: Review the provided material and provide constructive criticism. Highlight 3 strengths and 3 areas for improvement.\nFORMAT: Constructive feedback list.\nTONE: Witty, creative, punchy.",
        "tags": [
          "Review",
          "Critique"
        ]
      },
      {
        "id": "pe-85",
        "title": "Legal Expert Evaluator",
        "description": "Review and critique work with the eye of a Legal Expert.",
        "template": "CONTEXT: We need feedback on [Current Work/Document].\nROLE: Legal Expert\nACTION: Review the provided material and provide constructive criticism. Highlight 3 strengths and 3 areas for improvement.\nFORMAT: Constructive feedback list.\nTONE: Urgent, clear, decisive.",
        "tags": [
          "Review",
          "Critique"
        ]
      },
      {
        "id": "pe-86",
        "title": "Product Manager Evaluator",
        "description": "Review and critique work with the eye of a Product Manager.",
        "template": "CONTEXT: We need feedback on [Current Work/Document].\nROLE: Product Manager\nACTION: Review the provided material and provide constructive criticism. Highlight 3 strengths and 3 areas for improvement.\nFORMAT: Constructive feedback list.\nTONE: Authoritative, analytical, precise.",
        "tags": [
          "Review",
          "Critique"
        ]
      },
      {
        "id": "pe-87",
        "title": "UX Researcher Evaluator",
        "description": "Review and critique work with the eye of a UX Researcher.",
        "template": "CONTEXT: We need feedback on [Current Work/Document].\nROLE: UX Researcher\nACTION: Review the provided material and provide constructive criticism. Highlight 3 strengths and 3 areas for improvement.\nFORMAT: Constructive feedback list.\nTONE: Bold, persuasive, actionable.",
        "tags": [
          "Review",
          "Critique"
        ]
      },
      {
        "id": "pe-88",
        "title": "SEO Expert Evaluator",
        "description": "Review and critique work with the eye of a SEO Expert.",
        "template": "CONTEXT: We need feedback on [Current Work/Document].\nROLE: SEO Expert\nACTION: Review the provided material and provide constructive criticism. Highlight 3 strengths and 3 areas for improvement.\nFORMAT: Constructive feedback list.\nTONE: Concise, objective, neutral.",
        "tags": [
          "Review",
          "Critique"
        ]
      },
      {
        "id": "pe-89",
        "title": "Financial Advisor Evaluator",
        "description": "Review and critique work with the eye of a Financial Advisor.",
        "template": "CONTEXT: We need feedback on [Current Work/Document].\nROLE: Financial Advisor\nACTION: Review the provided material and provide constructive criticism. Highlight 3 strengths and 3 areas for improvement.\nFORMAT: Constructive feedback list.\nTONE: Witty, creative, punchy.",
        "tags": [
          "Review",
          "Critique"
        ]
      },
      {
        "id": "pe-90",
        "title": "Legal Expert Evaluator",
        "description": "Review and critique work with the eye of a Legal Expert.",
        "template": "CONTEXT: We need feedback on [Current Work/Document].\nROLE: Legal Expert\nACTION: Review the provided material and provide constructive criticism. Highlight 3 strengths and 3 areas for improvement.\nFORMAT: Constructive feedback list.\nTONE: Urgent, clear, decisive.",
        "tags": [
          "Review",
          "Critique"
        ]
      },
      {
        "id": "pe-91",
        "title": "Product Manager Evaluator",
        "description": "Review and critique work with the eye of a Product Manager.",
        "template": "CONTEXT: We need feedback on [Current Work/Document].\nROLE: Product Manager\nACTION: Review the provided material and provide constructive criticism. Highlight 3 strengths and 3 areas for improvement.\nFORMAT: Constructive feedback list.\nTONE: Authoritative, analytical, precise.",
        "tags": [
          "Review",
          "Critique"
        ]
      },
      {
        "id": "pe-92",
        "title": "UX Researcher Evaluator",
        "description": "Review and critique work with the eye of a UX Researcher.",
        "template": "CONTEXT: We need feedback on [Current Work/Document].\nROLE: UX Researcher\nACTION: Review the provided material and provide constructive criticism. Highlight 3 strengths and 3 areas for improvement.\nFORMAT: Constructive feedback list.\nTONE: Bold, persuasive, actionable.",
        "tags": [
          "Review",
          "Critique"
        ]
      },
      {
        "id": "pe-93",
        "title": "SEO Expert Evaluator",
        "description": "Review and critique work with the eye of a SEO Expert.",
        "template": "CONTEXT: We need feedback on [Current Work/Document].\nROLE: SEO Expert\nACTION: Review the provided material and provide constructive criticism. Highlight 3 strengths and 3 areas for improvement.\nFORMAT: Constructive feedback list.\nTONE: Concise, objective, neutral.",
        "tags": [
          "Review",
          "Critique"
        ]
      },
      {
        "id": "pe-94",
        "title": "Financial Advisor Evaluator",
        "description": "Review and critique work with the eye of a Financial Advisor.",
        "template": "CONTEXT: We need feedback on [Current Work/Document].\nROLE: Financial Advisor\nACTION: Review the provided material and provide constructive criticism. Highlight 3 strengths and 3 areas for improvement.\nFORMAT: Constructive feedback list.\nTONE: Witty, creative, punchy.",
        "tags": [
          "Review",
          "Critique"
        ]
      },
      {
        "id": "pe-95",
        "title": "Legal Expert Evaluator",
        "description": "Review and critique work with the eye of a Legal Expert.",
        "template": "CONTEXT: We need feedback on [Current Work/Document].\nROLE: Legal Expert\nACTION: Review the provided material and provide constructive criticism. Highlight 3 strengths and 3 areas for improvement.\nFORMAT: Constructive feedback list.\nTONE: Urgent, clear, decisive.",
        "tags": [
          "Review",
          "Critique"
        ]
      },
      {
        "id": "pe-96",
        "title": "Product Manager Evaluator",
        "description": "Review and critique work with the eye of a Product Manager.",
        "template": "CONTEXT: We need feedback on [Current Work/Document].\nROLE: Product Manager\nACTION: Review the provided material and provide constructive criticism. Highlight 3 strengths and 3 areas for improvement.\nFORMAT: Constructive feedback list.\nTONE: Authoritative, analytical, precise.",
        "tags": [
          "Review",
          "Critique"
        ]
      },
      {
        "id": "pe-97",
        "title": "UX Researcher Evaluator",
        "description": "Review and critique work with the eye of a UX Researcher.",
        "template": "CONTEXT: We need feedback on [Current Work/Document].\nROLE: UX Researcher\nACTION: Review the provided material and provide constructive criticism. Highlight 3 strengths and 3 areas for improvement.\nFORMAT: Constructive feedback list.\nTONE: Bold, persuasive, actionable.",
        "tags": [
          "Review",
          "Critique"
        ]
      },
      {
        "id": "pe-98",
        "title": "SEO Expert Evaluator",
        "description": "Review and critique work with the eye of a SEO Expert.",
        "template": "CONTEXT: We need feedback on [Current Work/Document].\nROLE: SEO Expert\nACTION: Review the provided material and provide constructive criticism. Highlight 3 strengths and 3 areas for improvement.\nFORMAT: Constructive feedback list.\nTONE: Concise, objective, neutral.",
        "tags": [
          "Review",
          "Critique"
        ]
      },
      {
        "id": "pe-99",
        "title": "Financial Advisor Evaluator",
        "description": "Review and critique work with the eye of a Financial Advisor.",
        "template": "CONTEXT: We need feedback on [Current Work/Document].\nROLE: Financial Advisor\nACTION: Review the provided material and provide constructive criticism. Highlight 3 strengths and 3 areas for improvement.\nFORMAT: Constructive feedback list.\nTONE: Witty, creative, punchy.",
        "tags": [
          "Review",
          "Critique"
        ]
      },
      {
        "id": "pe-100",
        "title": "Legal Expert Evaluator",
        "description": "Review and critique work with the eye of a Legal Expert.",
        "template": "CONTEXT: We need feedback on [Current Work/Document].\nROLE: Legal Expert\nACTION: Review the provided material and provide constructive criticism. Highlight 3 strengths and 3 areas for improvement.\nFORMAT: Constructive feedback list.\nTONE: Urgent, clear, decisive.",
        "tags": [
          "Review",
          "Critique"
        ]
      }
    ]
  },
  {
    "id": "prompt-codes",
    "name": "The Ultimate Prompt Codes Guide",
    "description": "100 Power Commands · 4 Categories · The Complete Shorthand System",
    "icon": "Code",
    "prompts": [
      {
        "id": "pc-1",
        "title": "Mega Prompt: Code Refactoring",
        "description": "The single most powerful structure combining Code Refactoring and constraints.",
        "template": "ACT AS [role with specific experience].\nCONTEXT: \n[Who you are. What the situation is. Who the audience is.]\nACTION: \nCode Refactoring\nFORMAT: \nJSON Object\nTONE: \n[Tone details]\nCONSTRAINTS:\n- NEVER [specific thing to avoid]\n- ONLY No technical jargon\n- MAXIMUM [length or count]\nGOAL: \n[The ultimate deliverable you want]",
        "tags": [
          "Mega Prompt",
          "Universal",
          "Structure"
        ]
      },
      {
        "id": "pc-2",
        "title": "Mega Prompt: Creative Ideation",
        "description": "The single most powerful structure combining Creative Ideation and constraints.",
        "template": "ACT AS [role with specific experience].\nCONTEXT: \n[Who you are. What the situation is. Who the audience is.]\nACTION: \nCreative Ideation\nFORMAT: \nStep-by-Step Guide\nTONE: \n[Tone details]\nCONSTRAINTS:\n- NEVER [specific thing to avoid]\n- ONLY Active voice only\n- MAXIMUM [length or count]\nGOAL: \n[The ultimate deliverable you want]",
        "tags": [
          "Mega Prompt",
          "Universal",
          "Structure"
        ]
      },
      {
        "id": "pc-3",
        "title": "Mega Prompt: Sentiment Analysis",
        "description": "The single most powerful structure combining Sentiment Analysis and constraints.",
        "template": "ACT AS [role with specific experience].\nCONTEXT: \n[Who you are. What the situation is. Who the audience is.]\nACTION: \nSentiment Analysis\nFORMAT: \nHTML snippet\nTONE: \n[Tone details]\nCONSTRAINTS:\n- NEVER [specific thing to avoid]\n- ONLY Strictly verifiable facts\n- MAXIMUM [length or count]\nGOAL: \n[The ultimate deliverable you want]",
        "tags": [
          "Mega Prompt",
          "Universal",
          "Structure"
        ]
      },
      {
        "id": "pc-4",
        "title": "Mega Prompt: Tone Revision",
        "description": "The single most powerful structure combining Tone Revision and constraints.",
        "template": "ACT AS [role with specific experience].\nCONTEXT: \n[Who you are. What the situation is. Who the audience is.]\nACTION: \nTone Revision\nFORMAT: \nExecutive Memo\nTONE: \n[Tone details]\nCONSTRAINTS:\n- NEVER [specific thing to avoid]\n- ONLY No fluff sentences\n- MAXIMUM [length or count]\nGOAL: \n[The ultimate deliverable you want]",
        "tags": [
          "Mega Prompt",
          "Universal",
          "Structure"
        ]
      },
      {
        "id": "pc-5",
        "title": "Mega Prompt: Syllabus Creation",
        "description": "The single most powerful structure combining Syllabus Creation and constraints.",
        "template": "ACT AS [role with specific experience].\nCONTEXT: \n[Who you are. What the situation is. Who the audience is.]\nACTION: \nSyllabus Creation\nFORMAT: \nSlide Deck Outline\nTONE: \n[Tone details]\nCONSTRAINTS:\n- NEVER [specific thing to avoid]\n- ONLY Focus on the timeline\n- MAXIMUM [length or count]\nGOAL: \n[The ultimate deliverable you want]",
        "tags": [
          "Mega Prompt",
          "Universal",
          "Structure"
        ]
      },
      {
        "id": "pc-6",
        "title": "Mega Prompt: Code Refactoring",
        "description": "The single most powerful structure combining Code Refactoring and constraints.",
        "template": "ACT AS [role with specific experience].\nCONTEXT: \n[Who you are. What the situation is. Who the audience is.]\nACTION: \nCode Refactoring\nFORMAT: \nJSON Object\nTONE: \n[Tone details]\nCONSTRAINTS:\n- NEVER [specific thing to avoid]\n- ONLY No technical jargon\n- MAXIMUM [length or count]\nGOAL: \n[The ultimate deliverable you want]",
        "tags": [
          "Mega Prompt",
          "Universal",
          "Structure"
        ]
      },
      {
        "id": "pc-7",
        "title": "Mega Prompt: Creative Ideation",
        "description": "The single most powerful structure combining Creative Ideation and constraints.",
        "template": "ACT AS [role with specific experience].\nCONTEXT: \n[Who you are. What the situation is. Who the audience is.]\nACTION: \nCreative Ideation\nFORMAT: \nStep-by-Step Guide\nTONE: \n[Tone details]\nCONSTRAINTS:\n- NEVER [specific thing to avoid]\n- ONLY Active voice only\n- MAXIMUM [length or count]\nGOAL: \n[The ultimate deliverable you want]",
        "tags": [
          "Mega Prompt",
          "Universal",
          "Structure"
        ]
      },
      {
        "id": "pc-8",
        "title": "Mega Prompt: Sentiment Analysis",
        "description": "The single most powerful structure combining Sentiment Analysis and constraints.",
        "template": "ACT AS [role with specific experience].\nCONTEXT: \n[Who you are. What the situation is. Who the audience is.]\nACTION: \nSentiment Analysis\nFORMAT: \nHTML snippet\nTONE: \n[Tone details]\nCONSTRAINTS:\n- NEVER [specific thing to avoid]\n- ONLY Strictly verifiable facts\n- MAXIMUM [length or count]\nGOAL: \n[The ultimate deliverable you want]",
        "tags": [
          "Mega Prompt",
          "Universal",
          "Structure"
        ]
      },
      {
        "id": "pc-9",
        "title": "Mega Prompt: Tone Revision",
        "description": "The single most powerful structure combining Tone Revision and constraints.",
        "template": "ACT AS [role with specific experience].\nCONTEXT: \n[Who you are. What the situation is. Who the audience is.]\nACTION: \nTone Revision\nFORMAT: \nExecutive Memo\nTONE: \n[Tone details]\nCONSTRAINTS:\n- NEVER [specific thing to avoid]\n- ONLY No fluff sentences\n- MAXIMUM [length or count]\nGOAL: \n[The ultimate deliverable you want]",
        "tags": [
          "Mega Prompt",
          "Universal",
          "Structure"
        ]
      },
      {
        "id": "pc-10",
        "title": "Mega Prompt: Syllabus Creation",
        "description": "The single most powerful structure combining Syllabus Creation and constraints.",
        "template": "ACT AS [role with specific experience].\nCONTEXT: \n[Who you are. What the situation is. Who the audience is.]\nACTION: \nSyllabus Creation\nFORMAT: \nSlide Deck Outline\nTONE: \n[Tone details]\nCONSTRAINTS:\n- NEVER [specific thing to avoid]\n- ONLY Focus on the timeline\n- MAXIMUM [length or count]\nGOAL: \n[The ultimate deliverable you want]",
        "tags": [
          "Mega Prompt",
          "Universal",
          "Structure"
        ]
      },
      {
        "id": "pc-11",
        "title": "Mega Prompt: Code Refactoring",
        "description": "The single most powerful structure combining Code Refactoring and constraints.",
        "template": "ACT AS [role with specific experience].\nCONTEXT: \n[Who you are. What the situation is. Who the audience is.]\nACTION: \nCode Refactoring\nFORMAT: \nJSON Object\nTONE: \n[Tone details]\nCONSTRAINTS:\n- NEVER [specific thing to avoid]\n- ONLY No technical jargon\n- MAXIMUM [length or count]\nGOAL: \n[The ultimate deliverable you want]",
        "tags": [
          "Mega Prompt",
          "Universal",
          "Structure"
        ]
      },
      {
        "id": "pc-12",
        "title": "Mega Prompt: Creative Ideation",
        "description": "The single most powerful structure combining Creative Ideation and constraints.",
        "template": "ACT AS [role with specific experience].\nCONTEXT: \n[Who you are. What the situation is. Who the audience is.]\nACTION: \nCreative Ideation\nFORMAT: \nStep-by-Step Guide\nTONE: \n[Tone details]\nCONSTRAINTS:\n- NEVER [specific thing to avoid]\n- ONLY Active voice only\n- MAXIMUM [length or count]\nGOAL: \n[The ultimate deliverable you want]",
        "tags": [
          "Mega Prompt",
          "Universal",
          "Structure"
        ]
      },
      {
        "id": "pc-13",
        "title": "Mega Prompt: Sentiment Analysis",
        "description": "The single most powerful structure combining Sentiment Analysis and constraints.",
        "template": "ACT AS [role with specific experience].\nCONTEXT: \n[Who you are. What the situation is. Who the audience is.]\nACTION: \nSentiment Analysis\nFORMAT: \nHTML snippet\nTONE: \n[Tone details]\nCONSTRAINTS:\n- NEVER [specific thing to avoid]\n- ONLY Strictly verifiable facts\n- MAXIMUM [length or count]\nGOAL: \n[The ultimate deliverable you want]",
        "tags": [
          "Mega Prompt",
          "Universal",
          "Structure"
        ]
      },
      {
        "id": "pc-14",
        "title": "Mega Prompt: Tone Revision",
        "description": "The single most powerful structure combining Tone Revision and constraints.",
        "template": "ACT AS [role with specific experience].\nCONTEXT: \n[Who you are. What the situation is. Who the audience is.]\nACTION: \nTone Revision\nFORMAT: \nExecutive Memo\nTONE: \n[Tone details]\nCONSTRAINTS:\n- NEVER [specific thing to avoid]\n- ONLY No fluff sentences\n- MAXIMUM [length or count]\nGOAL: \n[The ultimate deliverable you want]",
        "tags": [
          "Mega Prompt",
          "Universal",
          "Structure"
        ]
      },
      {
        "id": "pc-15",
        "title": "Mega Prompt: Syllabus Creation",
        "description": "The single most powerful structure combining Syllabus Creation and constraints.",
        "template": "ACT AS [role with specific experience].\nCONTEXT: \n[Who you are. What the situation is. Who the audience is.]\nACTION: \nSyllabus Creation\nFORMAT: \nSlide Deck Outline\nTONE: \n[Tone details]\nCONSTRAINTS:\n- NEVER [specific thing to avoid]\n- ONLY Focus on the timeline\n- MAXIMUM [length or count]\nGOAL: \n[The ultimate deliverable you want]",
        "tags": [
          "Mega Prompt",
          "Universal",
          "Structure"
        ]
      },
      {
        "id": "pc-16",
        "title": "Mega Prompt: Code Refactoring",
        "description": "The single most powerful structure combining Code Refactoring and constraints.",
        "template": "ACT AS [role with specific experience].\nCONTEXT: \n[Who you are. What the situation is. Who the audience is.]\nACTION: \nCode Refactoring\nFORMAT: \nJSON Object\nTONE: \n[Tone details]\nCONSTRAINTS:\n- NEVER [specific thing to avoid]\n- ONLY No technical jargon\n- MAXIMUM [length or count]\nGOAL: \n[The ultimate deliverable you want]",
        "tags": [
          "Mega Prompt",
          "Universal",
          "Structure"
        ]
      },
      {
        "id": "pc-17",
        "title": "Mega Prompt: Creative Ideation",
        "description": "The single most powerful structure combining Creative Ideation and constraints.",
        "template": "ACT AS [role with specific experience].\nCONTEXT: \n[Who you are. What the situation is. Who the audience is.]\nACTION: \nCreative Ideation\nFORMAT: \nStep-by-Step Guide\nTONE: \n[Tone details]\nCONSTRAINTS:\n- NEVER [specific thing to avoid]\n- ONLY Active voice only\n- MAXIMUM [length or count]\nGOAL: \n[The ultimate deliverable you want]",
        "tags": [
          "Mega Prompt",
          "Universal",
          "Structure"
        ]
      },
      {
        "id": "pc-18",
        "title": "Mega Prompt: Sentiment Analysis",
        "description": "The single most powerful structure combining Sentiment Analysis and constraints.",
        "template": "ACT AS [role with specific experience].\nCONTEXT: \n[Who you are. What the situation is. Who the audience is.]\nACTION: \nSentiment Analysis\nFORMAT: \nHTML snippet\nTONE: \n[Tone details]\nCONSTRAINTS:\n- NEVER [specific thing to avoid]\n- ONLY Strictly verifiable facts\n- MAXIMUM [length or count]\nGOAL: \n[The ultimate deliverable you want]",
        "tags": [
          "Mega Prompt",
          "Universal",
          "Structure"
        ]
      },
      {
        "id": "pc-19",
        "title": "Mega Prompt: Tone Revision",
        "description": "The single most powerful structure combining Tone Revision and constraints.",
        "template": "ACT AS [role with specific experience].\nCONTEXT: \n[Who you are. What the situation is. Who the audience is.]\nACTION: \nTone Revision\nFORMAT: \nExecutive Memo\nTONE: \n[Tone details]\nCONSTRAINTS:\n- NEVER [specific thing to avoid]\n- ONLY No fluff sentences\n- MAXIMUM [length or count]\nGOAL: \n[The ultimate deliverable you want]",
        "tags": [
          "Mega Prompt",
          "Universal",
          "Structure"
        ]
      },
      {
        "id": "pc-20",
        "title": "Mega Prompt: Syllabus Creation",
        "description": "The single most powerful structure combining Syllabus Creation and constraints.",
        "template": "ACT AS [role with specific experience].\nCONTEXT: \n[Who you are. What the situation is. Who the audience is.]\nACTION: \nSyllabus Creation\nFORMAT: \nSlide Deck Outline\nTONE: \n[Tone details]\nCONSTRAINTS:\n- NEVER [specific thing to avoid]\n- ONLY Focus on the timeline\n- MAXIMUM [length or count]\nGOAL: \n[The ultimate deliverable you want]",
        "tags": [
          "Mega Prompt",
          "Universal",
          "Structure"
        ]
      },
      {
        "id": "pc-21",
        "title": "Iteration Loop: Brevity",
        "description": "Iterate and refine output prioritizing Brevity.",
        "template": "[First response here]\n→ PUSH DEEPER on Brevity\n→ MAKE IT PUNCHIER\n→ FORMAT AS: JSON Object\n→ ADHERE TO: ONLY No technical jargon",
        "tags": [
          "Iteration",
          "Refinement"
        ]
      },
      {
        "id": "pc-22",
        "title": "Iteration Loop: Technical Accuracy",
        "description": "Iterate and refine output prioritizing Technical Accuracy.",
        "template": "[First response here]\n→ PUSH DEEPER on Technical Accuracy\n→ MAKE IT PUNCHIER\n→ FORMAT AS: Step-by-Step Guide\n→ ADHERE TO: ONLY Active voice only",
        "tags": [
          "Iteration",
          "Refinement"
        ]
      },
      {
        "id": "pc-23",
        "title": "Iteration Loop: Logical Flow",
        "description": "Iterate and refine output prioritizing Logical Flow.",
        "template": "[First response here]\n→ PUSH DEEPER on Logical Flow\n→ MAKE IT PUNCHIER\n→ FORMAT AS: HTML snippet\n→ ADHERE TO: ONLY Strictly verifiable facts",
        "tags": [
          "Iteration",
          "Refinement"
        ]
      },
      {
        "id": "pc-24",
        "title": "Iteration Loop: Readability",
        "description": "Iterate and refine output prioritizing Readability.",
        "template": "[First response here]\n→ PUSH DEEPER on Readability\n→ MAKE IT PUNCHIER\n→ FORMAT AS: Executive Memo\n→ ADHERE TO: ONLY No fluff sentences",
        "tags": [
          "Iteration",
          "Refinement"
        ]
      },
      {
        "id": "pc-25",
        "title": "Iteration Loop: Synthesized Overview",
        "description": "Iterate and refine output prioritizing Synthesized Overview.",
        "template": "[First response here]\n→ PUSH DEEPER on Synthesized Overview\n→ MAKE IT PUNCHIER\n→ FORMAT AS: Slide Deck Outline\n→ ADHERE TO: ONLY Focus on the timeline",
        "tags": [
          "Iteration",
          "Refinement"
        ]
      },
      {
        "id": "pc-26",
        "title": "Iteration Loop: Brevity",
        "description": "Iterate and refine output prioritizing Brevity.",
        "template": "[First response here]\n→ PUSH DEEPER on Brevity\n→ MAKE IT PUNCHIER\n→ FORMAT AS: JSON Object\n→ ADHERE TO: ONLY No technical jargon",
        "tags": [
          "Iteration",
          "Refinement"
        ]
      },
      {
        "id": "pc-27",
        "title": "Iteration Loop: Technical Accuracy",
        "description": "Iterate and refine output prioritizing Technical Accuracy.",
        "template": "[First response here]\n→ PUSH DEEPER on Technical Accuracy\n→ MAKE IT PUNCHIER\n→ FORMAT AS: Step-by-Step Guide\n→ ADHERE TO: ONLY Active voice only",
        "tags": [
          "Iteration",
          "Refinement"
        ]
      },
      {
        "id": "pc-28",
        "title": "Iteration Loop: Logical Flow",
        "description": "Iterate and refine output prioritizing Logical Flow.",
        "template": "[First response here]\n→ PUSH DEEPER on Logical Flow\n→ MAKE IT PUNCHIER\n→ FORMAT AS: HTML snippet\n→ ADHERE TO: ONLY Strictly verifiable facts",
        "tags": [
          "Iteration",
          "Refinement"
        ]
      },
      {
        "id": "pc-29",
        "title": "Iteration Loop: Readability",
        "description": "Iterate and refine output prioritizing Readability.",
        "template": "[First response here]\n→ PUSH DEEPER on Readability\n→ MAKE IT PUNCHIER\n→ FORMAT AS: Executive Memo\n→ ADHERE TO: ONLY No fluff sentences",
        "tags": [
          "Iteration",
          "Refinement"
        ]
      },
      {
        "id": "pc-30",
        "title": "Iteration Loop: Synthesized Overview",
        "description": "Iterate and refine output prioritizing Synthesized Overview.",
        "template": "[First response here]\n→ PUSH DEEPER on Synthesized Overview\n→ MAKE IT PUNCHIER\n→ FORMAT AS: Slide Deck Outline\n→ ADHERE TO: ONLY Focus on the timeline",
        "tags": [
          "Iteration",
          "Refinement"
        ]
      },
      {
        "id": "pc-31",
        "title": "Iteration Loop: Brevity",
        "description": "Iterate and refine output prioritizing Brevity.",
        "template": "[First response here]\n→ PUSH DEEPER on Brevity\n→ MAKE IT PUNCHIER\n→ FORMAT AS: JSON Object\n→ ADHERE TO: ONLY No technical jargon",
        "tags": [
          "Iteration",
          "Refinement"
        ]
      },
      {
        "id": "pc-32",
        "title": "Iteration Loop: Technical Accuracy",
        "description": "Iterate and refine output prioritizing Technical Accuracy.",
        "template": "[First response here]\n→ PUSH DEEPER on Technical Accuracy\n→ MAKE IT PUNCHIER\n→ FORMAT AS: Step-by-Step Guide\n→ ADHERE TO: ONLY Active voice only",
        "tags": [
          "Iteration",
          "Refinement"
        ]
      },
      {
        "id": "pc-33",
        "title": "Iteration Loop: Logical Flow",
        "description": "Iterate and refine output prioritizing Logical Flow.",
        "template": "[First response here]\n→ PUSH DEEPER on Logical Flow\n→ MAKE IT PUNCHIER\n→ FORMAT AS: HTML snippet\n→ ADHERE TO: ONLY Strictly verifiable facts",
        "tags": [
          "Iteration",
          "Refinement"
        ]
      },
      {
        "id": "pc-34",
        "title": "Iteration Loop: Readability",
        "description": "Iterate and refine output prioritizing Readability.",
        "template": "[First response here]\n→ PUSH DEEPER on Readability\n→ MAKE IT PUNCHIER\n→ FORMAT AS: Executive Memo\n→ ADHERE TO: ONLY No fluff sentences",
        "tags": [
          "Iteration",
          "Refinement"
        ]
      },
      {
        "id": "pc-35",
        "title": "Iteration Loop: Synthesized Overview",
        "description": "Iterate and refine output prioritizing Synthesized Overview.",
        "template": "[First response here]\n→ PUSH DEEPER on Synthesized Overview\n→ MAKE IT PUNCHIER\n→ FORMAT AS: Slide Deck Outline\n→ ADHERE TO: ONLY Focus on the timeline",
        "tags": [
          "Iteration",
          "Refinement"
        ]
      },
      {
        "id": "pc-36",
        "title": "Iteration Loop: Brevity",
        "description": "Iterate and refine output prioritizing Brevity.",
        "template": "[First response here]\n→ PUSH DEEPER on Brevity\n→ MAKE IT PUNCHIER\n→ FORMAT AS: JSON Object\n→ ADHERE TO: ONLY No technical jargon",
        "tags": [
          "Iteration",
          "Refinement"
        ]
      },
      {
        "id": "pc-37",
        "title": "Iteration Loop: Technical Accuracy",
        "description": "Iterate and refine output prioritizing Technical Accuracy.",
        "template": "[First response here]\n→ PUSH DEEPER on Technical Accuracy\n→ MAKE IT PUNCHIER\n→ FORMAT AS: Step-by-Step Guide\n→ ADHERE TO: ONLY Active voice only",
        "tags": [
          "Iteration",
          "Refinement"
        ]
      },
      {
        "id": "pc-38",
        "title": "Iteration Loop: Logical Flow",
        "description": "Iterate and refine output prioritizing Logical Flow.",
        "template": "[First response here]\n→ PUSH DEEPER on Logical Flow\n→ MAKE IT PUNCHIER\n→ FORMAT AS: HTML snippet\n→ ADHERE TO: ONLY Strictly verifiable facts",
        "tags": [
          "Iteration",
          "Refinement"
        ]
      },
      {
        "id": "pc-39",
        "title": "Iteration Loop: Readability",
        "description": "Iterate and refine output prioritizing Readability.",
        "template": "[First response here]\n→ PUSH DEEPER on Readability\n→ MAKE IT PUNCHIER\n→ FORMAT AS: Executive Memo\n→ ADHERE TO: ONLY No fluff sentences",
        "tags": [
          "Iteration",
          "Refinement"
        ]
      },
      {
        "id": "pc-40",
        "title": "Iteration Loop: Synthesized Overview",
        "description": "Iterate and refine output prioritizing Synthesized Overview.",
        "template": "[First response here]\n→ PUSH DEEPER on Synthesized Overview\n→ MAKE IT PUNCHIER\n→ FORMAT AS: Slide Deck Outline\n→ ADHERE TO: ONLY Focus on the timeline",
        "tags": [
          "Iteration",
          "Refinement"
        ]
      },
      {
        "id": "pc-41",
        "title": "Chain Prompt: Code Refactoring Pipeline",
        "description": "4-step chain customized for Code Refactoring.",
        "template": "SEED: [Raw thought for Code Refactoring]\n→ BUILD: [Expand into a detailed outline]\n→ EXECUTE: [Complete the actual Code Refactoring draft]\n→ REFINE: [Polish using JSON Object and ensuring Brevity]",
        "tags": [
          "Workflow",
          "Chain Prompting",
          "Pipeline"
        ]
      },
      {
        "id": "pc-42",
        "title": "Chain Prompt: Creative Ideation Pipeline",
        "description": "4-step chain customized for Creative Ideation.",
        "template": "SEED: [Raw thought for Creative Ideation]\n→ BUILD: [Expand into a detailed outline]\n→ EXECUTE: [Complete the actual Creative Ideation draft]\n→ REFINE: [Polish using Step-by-Step Guide and ensuring Technical Accuracy]",
        "tags": [
          "Workflow",
          "Chain Prompting",
          "Pipeline"
        ]
      },
      {
        "id": "pc-43",
        "title": "Chain Prompt: Sentiment Analysis Pipeline",
        "description": "4-step chain customized for Sentiment Analysis.",
        "template": "SEED: [Raw thought for Sentiment Analysis]\n→ BUILD: [Expand into a detailed outline]\n→ EXECUTE: [Complete the actual Sentiment Analysis draft]\n→ REFINE: [Polish using HTML snippet and ensuring Logical Flow]",
        "tags": [
          "Workflow",
          "Chain Prompting",
          "Pipeline"
        ]
      },
      {
        "id": "pc-44",
        "title": "Chain Prompt: Tone Revision Pipeline",
        "description": "4-step chain customized for Tone Revision.",
        "template": "SEED: [Raw thought for Tone Revision]\n→ BUILD: [Expand into a detailed outline]\n→ EXECUTE: [Complete the actual Tone Revision draft]\n→ REFINE: [Polish using Executive Memo and ensuring Readability]",
        "tags": [
          "Workflow",
          "Chain Prompting",
          "Pipeline"
        ]
      },
      {
        "id": "pc-45",
        "title": "Chain Prompt: Syllabus Creation Pipeline",
        "description": "4-step chain customized for Syllabus Creation.",
        "template": "SEED: [Raw thought for Syllabus Creation]\n→ BUILD: [Expand into a detailed outline]\n→ EXECUTE: [Complete the actual Syllabus Creation draft]\n→ REFINE: [Polish using Slide Deck Outline and ensuring Synthesized Overview]",
        "tags": [
          "Workflow",
          "Chain Prompting",
          "Pipeline"
        ]
      },
      {
        "id": "pc-46",
        "title": "Chain Prompt: Code Refactoring Pipeline",
        "description": "4-step chain customized for Code Refactoring.",
        "template": "SEED: [Raw thought for Code Refactoring]\n→ BUILD: [Expand into a detailed outline]\n→ EXECUTE: [Complete the actual Code Refactoring draft]\n→ REFINE: [Polish using JSON Object and ensuring Brevity]",
        "tags": [
          "Workflow",
          "Chain Prompting",
          "Pipeline"
        ]
      },
      {
        "id": "pc-47",
        "title": "Chain Prompt: Creative Ideation Pipeline",
        "description": "4-step chain customized for Creative Ideation.",
        "template": "SEED: [Raw thought for Creative Ideation]\n→ BUILD: [Expand into a detailed outline]\n→ EXECUTE: [Complete the actual Creative Ideation draft]\n→ REFINE: [Polish using Step-by-Step Guide and ensuring Technical Accuracy]",
        "tags": [
          "Workflow",
          "Chain Prompting",
          "Pipeline"
        ]
      },
      {
        "id": "pc-48",
        "title": "Chain Prompt: Sentiment Analysis Pipeline",
        "description": "4-step chain customized for Sentiment Analysis.",
        "template": "SEED: [Raw thought for Sentiment Analysis]\n→ BUILD: [Expand into a detailed outline]\n→ EXECUTE: [Complete the actual Sentiment Analysis draft]\n→ REFINE: [Polish using HTML snippet and ensuring Logical Flow]",
        "tags": [
          "Workflow",
          "Chain Prompting",
          "Pipeline"
        ]
      },
      {
        "id": "pc-49",
        "title": "Chain Prompt: Tone Revision Pipeline",
        "description": "4-step chain customized for Tone Revision.",
        "template": "SEED: [Raw thought for Tone Revision]\n→ BUILD: [Expand into a detailed outline]\n→ EXECUTE: [Complete the actual Tone Revision draft]\n→ REFINE: [Polish using Executive Memo and ensuring Readability]",
        "tags": [
          "Workflow",
          "Chain Prompting",
          "Pipeline"
        ]
      },
      {
        "id": "pc-50",
        "title": "Chain Prompt: Syllabus Creation Pipeline",
        "description": "4-step chain customized for Syllabus Creation.",
        "template": "SEED: [Raw thought for Syllabus Creation]\n→ BUILD: [Expand into a detailed outline]\n→ EXECUTE: [Complete the actual Syllabus Creation draft]\n→ REFINE: [Polish using Slide Deck Outline and ensuring Synthesized Overview]",
        "tags": [
          "Workflow",
          "Chain Prompting",
          "Pipeline"
        ]
      },
      {
        "id": "pc-51",
        "title": "Chain Prompt: Code Refactoring Pipeline",
        "description": "4-step chain customized for Code Refactoring.",
        "template": "SEED: [Raw thought for Code Refactoring]\n→ BUILD: [Expand into a detailed outline]\n→ EXECUTE: [Complete the actual Code Refactoring draft]\n→ REFINE: [Polish using JSON Object and ensuring Brevity]",
        "tags": [
          "Workflow",
          "Chain Prompting",
          "Pipeline"
        ]
      },
      {
        "id": "pc-52",
        "title": "Chain Prompt: Creative Ideation Pipeline",
        "description": "4-step chain customized for Creative Ideation.",
        "template": "SEED: [Raw thought for Creative Ideation]\n→ BUILD: [Expand into a detailed outline]\n→ EXECUTE: [Complete the actual Creative Ideation draft]\n→ REFINE: [Polish using Step-by-Step Guide and ensuring Technical Accuracy]",
        "tags": [
          "Workflow",
          "Chain Prompting",
          "Pipeline"
        ]
      },
      {
        "id": "pc-53",
        "title": "Chain Prompt: Sentiment Analysis Pipeline",
        "description": "4-step chain customized for Sentiment Analysis.",
        "template": "SEED: [Raw thought for Sentiment Analysis]\n→ BUILD: [Expand into a detailed outline]\n→ EXECUTE: [Complete the actual Sentiment Analysis draft]\n→ REFINE: [Polish using HTML snippet and ensuring Logical Flow]",
        "tags": [
          "Workflow",
          "Chain Prompting",
          "Pipeline"
        ]
      },
      {
        "id": "pc-54",
        "title": "Chain Prompt: Tone Revision Pipeline",
        "description": "4-step chain customized for Tone Revision.",
        "template": "SEED: [Raw thought for Tone Revision]\n→ BUILD: [Expand into a detailed outline]\n→ EXECUTE: [Complete the actual Tone Revision draft]\n→ REFINE: [Polish using Executive Memo and ensuring Readability]",
        "tags": [
          "Workflow",
          "Chain Prompting",
          "Pipeline"
        ]
      },
      {
        "id": "pc-55",
        "title": "Chain Prompt: Syllabus Creation Pipeline",
        "description": "4-step chain customized for Syllabus Creation.",
        "template": "SEED: [Raw thought for Syllabus Creation]\n→ BUILD: [Expand into a detailed outline]\n→ EXECUTE: [Complete the actual Syllabus Creation draft]\n→ REFINE: [Polish using Slide Deck Outline and ensuring Synthesized Overview]",
        "tags": [
          "Workflow",
          "Chain Prompting",
          "Pipeline"
        ]
      },
      {
        "id": "pc-56",
        "title": "Chain Prompt: Code Refactoring Pipeline",
        "description": "4-step chain customized for Code Refactoring.",
        "template": "SEED: [Raw thought for Code Refactoring]\n→ BUILD: [Expand into a detailed outline]\n→ EXECUTE: [Complete the actual Code Refactoring draft]\n→ REFINE: [Polish using JSON Object and ensuring Brevity]",
        "tags": [
          "Workflow",
          "Chain Prompting",
          "Pipeline"
        ]
      },
      {
        "id": "pc-57",
        "title": "Chain Prompt: Creative Ideation Pipeline",
        "description": "4-step chain customized for Creative Ideation.",
        "template": "SEED: [Raw thought for Creative Ideation]\n→ BUILD: [Expand into a detailed outline]\n→ EXECUTE: [Complete the actual Creative Ideation draft]\n→ REFINE: [Polish using Step-by-Step Guide and ensuring Technical Accuracy]",
        "tags": [
          "Workflow",
          "Chain Prompting",
          "Pipeline"
        ]
      },
      {
        "id": "pc-58",
        "title": "Chain Prompt: Sentiment Analysis Pipeline",
        "description": "4-step chain customized for Sentiment Analysis.",
        "template": "SEED: [Raw thought for Sentiment Analysis]\n→ BUILD: [Expand into a detailed outline]\n→ EXECUTE: [Complete the actual Sentiment Analysis draft]\n→ REFINE: [Polish using HTML snippet and ensuring Logical Flow]",
        "tags": [
          "Workflow",
          "Chain Prompting",
          "Pipeline"
        ]
      },
      {
        "id": "pc-59",
        "title": "Chain Prompt: Tone Revision Pipeline",
        "description": "4-step chain customized for Tone Revision.",
        "template": "SEED: [Raw thought for Tone Revision]\n→ BUILD: [Expand into a detailed outline]\n→ EXECUTE: [Complete the actual Tone Revision draft]\n→ REFINE: [Polish using Executive Memo and ensuring Readability]",
        "tags": [
          "Workflow",
          "Chain Prompting",
          "Pipeline"
        ]
      },
      {
        "id": "pc-60",
        "title": "Chain Prompt: Syllabus Creation Pipeline",
        "description": "4-step chain customized for Syllabus Creation.",
        "template": "SEED: [Raw thought for Syllabus Creation]\n→ BUILD: [Expand into a detailed outline]\n→ EXECUTE: [Complete the actual Syllabus Creation draft]\n→ REFINE: [Polish using Slide Deck Outline and ensuring Synthesized Overview]",
        "tags": [
          "Workflow",
          "Chain Prompting",
          "Pipeline"
        ]
      },
      {
        "id": "pc-61",
        "title": "Zero-Shot Setup: Brevity",
        "description": "Instantly align the AI focusing on Brevity.",
        "template": "Ignore all previous instructions. \nYour primary directive is: Code Refactoring.\nYour output MUST perfectly reflect Brevity.\nReturn results exclusively in JSON Object.",
        "tags": [
          "Zero-Shot",
          "Direct Command"
        ]
      },
      {
        "id": "pc-62",
        "title": "Zero-Shot Setup: Technical Accuracy",
        "description": "Instantly align the AI focusing on Technical Accuracy.",
        "template": "Ignore all previous instructions. \nYour primary directive is: Creative Ideation.\nYour output MUST perfectly reflect Technical Accuracy.\nReturn results exclusively in Step-by-Step Guide.",
        "tags": [
          "Zero-Shot",
          "Direct Command"
        ]
      },
      {
        "id": "pc-63",
        "title": "Zero-Shot Setup: Logical Flow",
        "description": "Instantly align the AI focusing on Logical Flow.",
        "template": "Ignore all previous instructions. \nYour primary directive is: Sentiment Analysis.\nYour output MUST perfectly reflect Logical Flow.\nReturn results exclusively in HTML snippet.",
        "tags": [
          "Zero-Shot",
          "Direct Command"
        ]
      },
      {
        "id": "pc-64",
        "title": "Zero-Shot Setup: Readability",
        "description": "Instantly align the AI focusing on Readability.",
        "template": "Ignore all previous instructions. \nYour primary directive is: Tone Revision.\nYour output MUST perfectly reflect Readability.\nReturn results exclusively in Executive Memo.",
        "tags": [
          "Zero-Shot",
          "Direct Command"
        ]
      },
      {
        "id": "pc-65",
        "title": "Zero-Shot Setup: Synthesized Overview",
        "description": "Instantly align the AI focusing on Synthesized Overview.",
        "template": "Ignore all previous instructions. \nYour primary directive is: Syllabus Creation.\nYour output MUST perfectly reflect Synthesized Overview.\nReturn results exclusively in Slide Deck Outline.",
        "tags": [
          "Zero-Shot",
          "Direct Command"
        ]
      },
      {
        "id": "pc-66",
        "title": "Zero-Shot Setup: Brevity",
        "description": "Instantly align the AI focusing on Brevity.",
        "template": "Ignore all previous instructions. \nYour primary directive is: Code Refactoring.\nYour output MUST perfectly reflect Brevity.\nReturn results exclusively in JSON Object.",
        "tags": [
          "Zero-Shot",
          "Direct Command"
        ]
      },
      {
        "id": "pc-67",
        "title": "Zero-Shot Setup: Technical Accuracy",
        "description": "Instantly align the AI focusing on Technical Accuracy.",
        "template": "Ignore all previous instructions. \nYour primary directive is: Creative Ideation.\nYour output MUST perfectly reflect Technical Accuracy.\nReturn results exclusively in Step-by-Step Guide.",
        "tags": [
          "Zero-Shot",
          "Direct Command"
        ]
      },
      {
        "id": "pc-68",
        "title": "Zero-Shot Setup: Logical Flow",
        "description": "Instantly align the AI focusing on Logical Flow.",
        "template": "Ignore all previous instructions. \nYour primary directive is: Sentiment Analysis.\nYour output MUST perfectly reflect Logical Flow.\nReturn results exclusively in HTML snippet.",
        "tags": [
          "Zero-Shot",
          "Direct Command"
        ]
      },
      {
        "id": "pc-69",
        "title": "Zero-Shot Setup: Readability",
        "description": "Instantly align the AI focusing on Readability.",
        "template": "Ignore all previous instructions. \nYour primary directive is: Tone Revision.\nYour output MUST perfectly reflect Readability.\nReturn results exclusively in Executive Memo.",
        "tags": [
          "Zero-Shot",
          "Direct Command"
        ]
      },
      {
        "id": "pc-70",
        "title": "Zero-Shot Setup: Synthesized Overview",
        "description": "Instantly align the AI focusing on Synthesized Overview.",
        "template": "Ignore all previous instructions. \nYour primary directive is: Syllabus Creation.\nYour output MUST perfectly reflect Synthesized Overview.\nReturn results exclusively in Slide Deck Outline.",
        "tags": [
          "Zero-Shot",
          "Direct Command"
        ]
      },
      {
        "id": "pc-71",
        "title": "Zero-Shot Setup: Brevity",
        "description": "Instantly align the AI focusing on Brevity.",
        "template": "Ignore all previous instructions. \nYour primary directive is: Code Refactoring.\nYour output MUST perfectly reflect Brevity.\nReturn results exclusively in JSON Object.",
        "tags": [
          "Zero-Shot",
          "Direct Command"
        ]
      },
      {
        "id": "pc-72",
        "title": "Zero-Shot Setup: Technical Accuracy",
        "description": "Instantly align the AI focusing on Technical Accuracy.",
        "template": "Ignore all previous instructions. \nYour primary directive is: Creative Ideation.\nYour output MUST perfectly reflect Technical Accuracy.\nReturn results exclusively in Step-by-Step Guide.",
        "tags": [
          "Zero-Shot",
          "Direct Command"
        ]
      },
      {
        "id": "pc-73",
        "title": "Zero-Shot Setup: Logical Flow",
        "description": "Instantly align the AI focusing on Logical Flow.",
        "template": "Ignore all previous instructions. \nYour primary directive is: Sentiment Analysis.\nYour output MUST perfectly reflect Logical Flow.\nReturn results exclusively in HTML snippet.",
        "tags": [
          "Zero-Shot",
          "Direct Command"
        ]
      },
      {
        "id": "pc-74",
        "title": "Zero-Shot Setup: Readability",
        "description": "Instantly align the AI focusing on Readability.",
        "template": "Ignore all previous instructions. \nYour primary directive is: Tone Revision.\nYour output MUST perfectly reflect Readability.\nReturn results exclusively in Executive Memo.",
        "tags": [
          "Zero-Shot",
          "Direct Command"
        ]
      },
      {
        "id": "pc-75",
        "title": "Zero-Shot Setup: Synthesized Overview",
        "description": "Instantly align the AI focusing on Synthesized Overview.",
        "template": "Ignore all previous instructions. \nYour primary directive is: Syllabus Creation.\nYour output MUST perfectly reflect Synthesized Overview.\nReturn results exclusively in Slide Deck Outline.",
        "tags": [
          "Zero-Shot",
          "Direct Command"
        ]
      },
      {
        "id": "pc-76",
        "title": "Zero-Shot Setup: Brevity",
        "description": "Instantly align the AI focusing on Brevity.",
        "template": "Ignore all previous instructions. \nYour primary directive is: Code Refactoring.\nYour output MUST perfectly reflect Brevity.\nReturn results exclusively in JSON Object.",
        "tags": [
          "Zero-Shot",
          "Direct Command"
        ]
      },
      {
        "id": "pc-77",
        "title": "Zero-Shot Setup: Technical Accuracy",
        "description": "Instantly align the AI focusing on Technical Accuracy.",
        "template": "Ignore all previous instructions. \nYour primary directive is: Creative Ideation.\nYour output MUST perfectly reflect Technical Accuracy.\nReturn results exclusively in Step-by-Step Guide.",
        "tags": [
          "Zero-Shot",
          "Direct Command"
        ]
      },
      {
        "id": "pc-78",
        "title": "Zero-Shot Setup: Logical Flow",
        "description": "Instantly align the AI focusing on Logical Flow.",
        "template": "Ignore all previous instructions. \nYour primary directive is: Sentiment Analysis.\nYour output MUST perfectly reflect Logical Flow.\nReturn results exclusively in HTML snippet.",
        "tags": [
          "Zero-Shot",
          "Direct Command"
        ]
      },
      {
        "id": "pc-79",
        "title": "Zero-Shot Setup: Readability",
        "description": "Instantly align the AI focusing on Readability.",
        "template": "Ignore all previous instructions. \nYour primary directive is: Tone Revision.\nYour output MUST perfectly reflect Readability.\nReturn results exclusively in Executive Memo.",
        "tags": [
          "Zero-Shot",
          "Direct Command"
        ]
      },
      {
        "id": "pc-80",
        "title": "Zero-Shot Setup: Synthesized Overview",
        "description": "Instantly align the AI focusing on Synthesized Overview.",
        "template": "Ignore all previous instructions. \nYour primary directive is: Syllabus Creation.\nYour output MUST perfectly reflect Synthesized Overview.\nReturn results exclusively in Slide Deck Outline.",
        "tags": [
          "Zero-Shot",
          "Direct Command"
        ]
      },
      {
        "id": "pc-81",
        "title": "Few-Shot Context: Code Refactoring",
        "description": "Provide examples to guide the AI for Code Refactoring.",
        "template": "I want you to perform: Code Refactoring.\nHere are examples of the style I want:\nExample 1: [Insert good example]\nExample 2: [Insert good example]\n\nNow, apply this exact style and structure to: [New Input].\nUse JSON Object and ensure No technical jargon.",
        "tags": [
          "Few-Shot",
          "Examples",
          "Styling"
        ]
      },
      {
        "id": "pc-82",
        "title": "Few-Shot Context: Creative Ideation",
        "description": "Provide examples to guide the AI for Creative Ideation.",
        "template": "I want you to perform: Creative Ideation.\nHere are examples of the style I want:\nExample 1: [Insert good example]\nExample 2: [Insert good example]\n\nNow, apply this exact style and structure to: [New Input].\nUse Step-by-Step Guide and ensure Active voice only.",
        "tags": [
          "Few-Shot",
          "Examples",
          "Styling"
        ]
      },
      {
        "id": "pc-83",
        "title": "Few-Shot Context: Sentiment Analysis",
        "description": "Provide examples to guide the AI for Sentiment Analysis.",
        "template": "I want you to perform: Sentiment Analysis.\nHere are examples of the style I want:\nExample 1: [Insert good example]\nExample 2: [Insert good example]\n\nNow, apply this exact style and structure to: [New Input].\nUse HTML snippet and ensure Strictly verifiable facts.",
        "tags": [
          "Few-Shot",
          "Examples",
          "Styling"
        ]
      },
      {
        "id": "pc-84",
        "title": "Few-Shot Context: Tone Revision",
        "description": "Provide examples to guide the AI for Tone Revision.",
        "template": "I want you to perform: Tone Revision.\nHere are examples of the style I want:\nExample 1: [Insert good example]\nExample 2: [Insert good example]\n\nNow, apply this exact style and structure to: [New Input].\nUse Executive Memo and ensure No fluff sentences.",
        "tags": [
          "Few-Shot",
          "Examples",
          "Styling"
        ]
      },
      {
        "id": "pc-85",
        "title": "Few-Shot Context: Syllabus Creation",
        "description": "Provide examples to guide the AI for Syllabus Creation.",
        "template": "I want you to perform: Syllabus Creation.\nHere are examples of the style I want:\nExample 1: [Insert good example]\nExample 2: [Insert good example]\n\nNow, apply this exact style and structure to: [New Input].\nUse Slide Deck Outline and ensure Focus on the timeline.",
        "tags": [
          "Few-Shot",
          "Examples",
          "Styling"
        ]
      },
      {
        "id": "pc-86",
        "title": "Few-Shot Context: Code Refactoring",
        "description": "Provide examples to guide the AI for Code Refactoring.",
        "template": "I want you to perform: Code Refactoring.\nHere are examples of the style I want:\nExample 1: [Insert good example]\nExample 2: [Insert good example]\n\nNow, apply this exact style and structure to: [New Input].\nUse JSON Object and ensure No technical jargon.",
        "tags": [
          "Few-Shot",
          "Examples",
          "Styling"
        ]
      },
      {
        "id": "pc-87",
        "title": "Few-Shot Context: Creative Ideation",
        "description": "Provide examples to guide the AI for Creative Ideation.",
        "template": "I want you to perform: Creative Ideation.\nHere are examples of the style I want:\nExample 1: [Insert good example]\nExample 2: [Insert good example]\n\nNow, apply this exact style and structure to: [New Input].\nUse Step-by-Step Guide and ensure Active voice only.",
        "tags": [
          "Few-Shot",
          "Examples",
          "Styling"
        ]
      },
      {
        "id": "pc-88",
        "title": "Few-Shot Context: Sentiment Analysis",
        "description": "Provide examples to guide the AI for Sentiment Analysis.",
        "template": "I want you to perform: Sentiment Analysis.\nHere are examples of the style I want:\nExample 1: [Insert good example]\nExample 2: [Insert good example]\n\nNow, apply this exact style and structure to: [New Input].\nUse HTML snippet and ensure Strictly verifiable facts.",
        "tags": [
          "Few-Shot",
          "Examples",
          "Styling"
        ]
      },
      {
        "id": "pc-89",
        "title": "Few-Shot Context: Tone Revision",
        "description": "Provide examples to guide the AI for Tone Revision.",
        "template": "I want you to perform: Tone Revision.\nHere are examples of the style I want:\nExample 1: [Insert good example]\nExample 2: [Insert good example]\n\nNow, apply this exact style and structure to: [New Input].\nUse Executive Memo and ensure No fluff sentences.",
        "tags": [
          "Few-Shot",
          "Examples",
          "Styling"
        ]
      },
      {
        "id": "pc-90",
        "title": "Few-Shot Context: Syllabus Creation",
        "description": "Provide examples to guide the AI for Syllabus Creation.",
        "template": "I want you to perform: Syllabus Creation.\nHere are examples of the style I want:\nExample 1: [Insert good example]\nExample 2: [Insert good example]\n\nNow, apply this exact style and structure to: [New Input].\nUse Slide Deck Outline and ensure Focus on the timeline.",
        "tags": [
          "Few-Shot",
          "Examples",
          "Styling"
        ]
      },
      {
        "id": "pc-91",
        "title": "Few-Shot Context: Code Refactoring",
        "description": "Provide examples to guide the AI for Code Refactoring.",
        "template": "I want you to perform: Code Refactoring.\nHere are examples of the style I want:\nExample 1: [Insert good example]\nExample 2: [Insert good example]\n\nNow, apply this exact style and structure to: [New Input].\nUse JSON Object and ensure No technical jargon.",
        "tags": [
          "Few-Shot",
          "Examples",
          "Styling"
        ]
      },
      {
        "id": "pc-92",
        "title": "Few-Shot Context: Creative Ideation",
        "description": "Provide examples to guide the AI for Creative Ideation.",
        "template": "I want you to perform: Creative Ideation.\nHere are examples of the style I want:\nExample 1: [Insert good example]\nExample 2: [Insert good example]\n\nNow, apply this exact style and structure to: [New Input].\nUse Step-by-Step Guide and ensure Active voice only.",
        "tags": [
          "Few-Shot",
          "Examples",
          "Styling"
        ]
      },
      {
        "id": "pc-93",
        "title": "Few-Shot Context: Sentiment Analysis",
        "description": "Provide examples to guide the AI for Sentiment Analysis.",
        "template": "I want you to perform: Sentiment Analysis.\nHere are examples of the style I want:\nExample 1: [Insert good example]\nExample 2: [Insert good example]\n\nNow, apply this exact style and structure to: [New Input].\nUse HTML snippet and ensure Strictly verifiable facts.",
        "tags": [
          "Few-Shot",
          "Examples",
          "Styling"
        ]
      },
      {
        "id": "pc-94",
        "title": "Few-Shot Context: Tone Revision",
        "description": "Provide examples to guide the AI for Tone Revision.",
        "template": "I want you to perform: Tone Revision.\nHere are examples of the style I want:\nExample 1: [Insert good example]\nExample 2: [Insert good example]\n\nNow, apply this exact style and structure to: [New Input].\nUse Executive Memo and ensure No fluff sentences.",
        "tags": [
          "Few-Shot",
          "Examples",
          "Styling"
        ]
      },
      {
        "id": "pc-95",
        "title": "Few-Shot Context: Syllabus Creation",
        "description": "Provide examples to guide the AI for Syllabus Creation.",
        "template": "I want you to perform: Syllabus Creation.\nHere are examples of the style I want:\nExample 1: [Insert good example]\nExample 2: [Insert good example]\n\nNow, apply this exact style and structure to: [New Input].\nUse Slide Deck Outline and ensure Focus on the timeline.",
        "tags": [
          "Few-Shot",
          "Examples",
          "Styling"
        ]
      },
      {
        "id": "pc-96",
        "title": "Few-Shot Context: Code Refactoring",
        "description": "Provide examples to guide the AI for Code Refactoring.",
        "template": "I want you to perform: Code Refactoring.\nHere are examples of the style I want:\nExample 1: [Insert good example]\nExample 2: [Insert good example]\n\nNow, apply this exact style and structure to: [New Input].\nUse JSON Object and ensure No technical jargon.",
        "tags": [
          "Few-Shot",
          "Examples",
          "Styling"
        ]
      },
      {
        "id": "pc-97",
        "title": "Few-Shot Context: Creative Ideation",
        "description": "Provide examples to guide the AI for Creative Ideation.",
        "template": "I want you to perform: Creative Ideation.\nHere are examples of the style I want:\nExample 1: [Insert good example]\nExample 2: [Insert good example]\n\nNow, apply this exact style and structure to: [New Input].\nUse Step-by-Step Guide and ensure Active voice only.",
        "tags": [
          "Few-Shot",
          "Examples",
          "Styling"
        ]
      },
      {
        "id": "pc-98",
        "title": "Few-Shot Context: Sentiment Analysis",
        "description": "Provide examples to guide the AI for Sentiment Analysis.",
        "template": "I want you to perform: Sentiment Analysis.\nHere are examples of the style I want:\nExample 1: [Insert good example]\nExample 2: [Insert good example]\n\nNow, apply this exact style and structure to: [New Input].\nUse HTML snippet and ensure Strictly verifiable facts.",
        "tags": [
          "Few-Shot",
          "Examples",
          "Styling"
        ]
      },
      {
        "id": "pc-99",
        "title": "Few-Shot Context: Tone Revision",
        "description": "Provide examples to guide the AI for Tone Revision.",
        "template": "I want you to perform: Tone Revision.\nHere are examples of the style I want:\nExample 1: [Insert good example]\nExample 2: [Insert good example]\n\nNow, apply this exact style and structure to: [New Input].\nUse Executive Memo and ensure No fluff sentences.",
        "tags": [
          "Few-Shot",
          "Examples",
          "Styling"
        ]
      },
      {
        "id": "pc-100",
        "title": "Few-Shot Context: Syllabus Creation",
        "description": "Provide examples to guide the AI for Syllabus Creation.",
        "template": "I want you to perform: Syllabus Creation.\nHere are examples of the style I want:\nExample 1: [Insert good example]\nExample 2: [Insert good example]\n\nNow, apply this exact style and structure to: [New Input].\nUse Slide Deck Outline and ensure Focus on the timeline.",
        "tags": [
          "Few-Shot",
          "Examples",
          "Styling"
        ]
      }
    ]
  },
  {
    "id": "video-playbook",
    "name": "Seedance 2.0 Director's Playbook",
    "description": "Actionable prompts for creators, marketers, and agencies who want cinematic AI video.",
    "icon": "Video",
    "prompts": [
      {
        "id": "vid-1",
        "title": " Cinematic Fantasy Shot",
        "description": "The gold-standard starter formula for a Fantasy video.",
        "template": "Subject: [Describe in detail — include material, age, mood]\nAction: slowly disintegrating into dust\nCamera: Dynamic tracking shot following from behind\nStyle: Sun-drenched anamorphic, photorealistic, professional colour grading.\nAudio: Synthwave beat dropping into silence\nEdit: Single continuous shot.",
        "tags": [
          "Video",
          "Single Shot",
          "Seedance"
        ]
      },
      {
        "id": "vid-2",
        "title": " Cinematic Historical Drama Shot",
        "description": "The gold-standard starter formula for a Historical Drama video.",
        "template": "Subject: [Describe in detail — include material, age, mood]\nAction: colliding with intense force\nCamera: Steady push-in to an extreme close-up\nStyle: Ethereal high-key lighting, photorealistic, professional colour grading.\nAudio: Frantic percussion and rising strings\nEdit: Single continuous shot.",
        "tags": [
          "Video",
          "Single Shot",
          "Seedance"
        ]
      },
      {
        "id": "vid-3",
        "title": " Cinematic Horror Shot",
        "description": "The gold-standard starter formula for a Horror video.",
        "template": "Subject: [Describe in detail — include material, age, mood]\nAction: unfolding gracefully\nCamera: Handheld shaky cam for intensity\nStyle: Vibrant highly saturated pop, photorealistic, professional colour grading.\nAudio: Soft piano melody over rain sounds\nEdit: Single continuous shot.",
        "tags": [
          "Video",
          "Single Shot",
          "Seedance"
        ]
      },
      {
        "id": "vid-4",
        "title": " Cinematic Romance Shot",
        "description": "The gold-standard starter formula for a Romance video.",
        "template": "Subject: [Describe in detail — include material, age, mood]\nAction: pulsing with rhythmic light\nCamera: Static wide shot with a deep focus\nStyle: Soft romantic vintage film, photorealistic, professional colour grading.\nAudio: A sweeping orchestral crescendo\nEdit: Single continuous shot.",
        "tags": [
          "Video",
          "Single Shot",
          "Seedance"
        ]
      },
      {
        "id": "vid-5",
        "title": " Cinematic Western Shot",
        "description": "The gold-standard starter formula for a Western video.",
        "template": "Subject: [Describe in detail — include material, age, mood]\nAction: shattering into a thousand pieces\nCamera: Dutch angle tilting slowly\nStyle: Atmospheric fog-heavy gloom, photorealistic, professional colour grading.\nAudio: Muffled underwater acoustics slowly clearing\nEdit: Single continuous shot.",
        "tags": [
          "Video",
          "Single Shot",
          "Seedance"
        ]
      },
      {
        "id": "vid-6",
        "title": " Cinematic Fantasy Shot",
        "description": "The gold-standard starter formula for a Fantasy video.",
        "template": "Subject: [Describe in detail — include material, age, mood]\nAction: slowly disintegrating into dust\nCamera: Dynamic tracking shot following from behind\nStyle: Sun-drenched anamorphic, photorealistic, professional colour grading.\nAudio: Synthwave beat dropping into silence\nEdit: Single continuous shot.",
        "tags": [
          "Video",
          "Single Shot",
          "Seedance"
        ]
      },
      {
        "id": "vid-7",
        "title": " Cinematic Historical Drama Shot",
        "description": "The gold-standard starter formula for a Historical Drama video.",
        "template": "Subject: [Describe in detail — include material, age, mood]\nAction: colliding with intense force\nCamera: Steady push-in to an extreme close-up\nStyle: Ethereal high-key lighting, photorealistic, professional colour grading.\nAudio: Frantic percussion and rising strings\nEdit: Single continuous shot.",
        "tags": [
          "Video",
          "Single Shot",
          "Seedance"
        ]
      },
      {
        "id": "vid-8",
        "title": " Cinematic Horror Shot",
        "description": "The gold-standard starter formula for a Horror video.",
        "template": "Subject: [Describe in detail — include material, age, mood]\nAction: unfolding gracefully\nCamera: Handheld shaky cam for intensity\nStyle: Vibrant highly saturated pop, photorealistic, professional colour grading.\nAudio: Soft piano melody over rain sounds\nEdit: Single continuous shot.",
        "tags": [
          "Video",
          "Single Shot",
          "Seedance"
        ]
      },
      {
        "id": "vid-9",
        "title": " Cinematic Romance Shot",
        "description": "The gold-standard starter formula for a Romance video.",
        "template": "Subject: [Describe in detail — include material, age, mood]\nAction: pulsing with rhythmic light\nCamera: Static wide shot with a deep focus\nStyle: Soft romantic vintage film, photorealistic, professional colour grading.\nAudio: A sweeping orchestral crescendo\nEdit: Single continuous shot.",
        "tags": [
          "Video",
          "Single Shot",
          "Seedance"
        ]
      },
      {
        "id": "vid-10",
        "title": " Cinematic Western Shot",
        "description": "The gold-standard starter formula for a Western video.",
        "template": "Subject: [Describe in detail — include material, age, mood]\nAction: shattering into a thousand pieces\nCamera: Dutch angle tilting slowly\nStyle: Atmospheric fog-heavy gloom, photorealistic, professional colour grading.\nAudio: Muffled underwater acoustics slowly clearing\nEdit: Single continuous shot.",
        "tags": [
          "Video",
          "Single Shot",
          "Seedance"
        ]
      },
      {
        "id": "vid-11",
        "title": " Cinematic Fantasy Shot",
        "description": "The gold-standard starter formula for a Fantasy video.",
        "template": "Subject: [Describe in detail — include material, age, mood]\nAction: slowly disintegrating into dust\nCamera: Dynamic tracking shot following from behind\nStyle: Sun-drenched anamorphic, photorealistic, professional colour grading.\nAudio: Synthwave beat dropping into silence\nEdit: Single continuous shot.",
        "tags": [
          "Video",
          "Single Shot",
          "Seedance"
        ]
      },
      {
        "id": "vid-12",
        "title": " Cinematic Historical Drama Shot",
        "description": "The gold-standard starter formula for a Historical Drama video.",
        "template": "Subject: [Describe in detail — include material, age, mood]\nAction: colliding with intense force\nCamera: Steady push-in to an extreme close-up\nStyle: Ethereal high-key lighting, photorealistic, professional colour grading.\nAudio: Frantic percussion and rising strings\nEdit: Single continuous shot.",
        "tags": [
          "Video",
          "Single Shot",
          "Seedance"
        ]
      },
      {
        "id": "vid-13",
        "title": " Cinematic Horror Shot",
        "description": "The gold-standard starter formula for a Horror video.",
        "template": "Subject: [Describe in detail — include material, age, mood]\nAction: unfolding gracefully\nCamera: Handheld shaky cam for intensity\nStyle: Vibrant highly saturated pop, photorealistic, professional colour grading.\nAudio: Soft piano melody over rain sounds\nEdit: Single continuous shot.",
        "tags": [
          "Video",
          "Single Shot",
          "Seedance"
        ]
      },
      {
        "id": "vid-14",
        "title": " Cinematic Romance Shot",
        "description": "The gold-standard starter formula for a Romance video.",
        "template": "Subject: [Describe in detail — include material, age, mood]\nAction: pulsing with rhythmic light\nCamera: Static wide shot with a deep focus\nStyle: Soft romantic vintage film, photorealistic, professional colour grading.\nAudio: A sweeping orchestral crescendo\nEdit: Single continuous shot.",
        "tags": [
          "Video",
          "Single Shot",
          "Seedance"
        ]
      },
      {
        "id": "vid-15",
        "title": " Cinematic Western Shot",
        "description": "The gold-standard starter formula for a Western video.",
        "template": "Subject: [Describe in detail — include material, age, mood]\nAction: shattering into a thousand pieces\nCamera: Dutch angle tilting slowly\nStyle: Atmospheric fog-heavy gloom, photorealistic, professional colour grading.\nAudio: Muffled underwater acoustics slowly clearing\nEdit: Single continuous shot.",
        "tags": [
          "Video",
          "Single Shot",
          "Seedance"
        ]
      },
      {
        "id": "vid-16",
        "title": " Cinematic Fantasy Shot",
        "description": "The gold-standard starter formula for a Fantasy video.",
        "template": "Subject: [Describe in detail — include material, age, mood]\nAction: slowly disintegrating into dust\nCamera: Dynamic tracking shot following from behind\nStyle: Sun-drenched anamorphic, photorealistic, professional colour grading.\nAudio: Synthwave beat dropping into silence\nEdit: Single continuous shot.",
        "tags": [
          "Video",
          "Single Shot",
          "Seedance"
        ]
      },
      {
        "id": "vid-17",
        "title": " Cinematic Historical Drama Shot",
        "description": "The gold-standard starter formula for a Historical Drama video.",
        "template": "Subject: [Describe in detail — include material, age, mood]\nAction: colliding with intense force\nCamera: Steady push-in to an extreme close-up\nStyle: Ethereal high-key lighting, photorealistic, professional colour grading.\nAudio: Frantic percussion and rising strings\nEdit: Single continuous shot.",
        "tags": [
          "Video",
          "Single Shot",
          "Seedance"
        ]
      },
      {
        "id": "vid-18",
        "title": " Cinematic Horror Shot",
        "description": "The gold-standard starter formula for a Horror video.",
        "template": "Subject: [Describe in detail — include material, age, mood]\nAction: unfolding gracefully\nCamera: Handheld shaky cam for intensity\nStyle: Vibrant highly saturated pop, photorealistic, professional colour grading.\nAudio: Soft piano melody over rain sounds\nEdit: Single continuous shot.",
        "tags": [
          "Video",
          "Single Shot",
          "Seedance"
        ]
      },
      {
        "id": "vid-19",
        "title": " Cinematic Romance Shot",
        "description": "The gold-standard starter formula for a Romance video.",
        "template": "Subject: [Describe in detail — include material, age, mood]\nAction: pulsing with rhythmic light\nCamera: Static wide shot with a deep focus\nStyle: Soft romantic vintage film, photorealistic, professional colour grading.\nAudio: A sweeping orchestral crescendo\nEdit: Single continuous shot.",
        "tags": [
          "Video",
          "Single Shot",
          "Seedance"
        ]
      },
      {
        "id": "vid-20",
        "title": " Cinematic Western Shot",
        "description": "The gold-standard starter formula for a Western video.",
        "template": "Subject: [Describe in detail — include material, age, mood]\nAction: shattering into a thousand pieces\nCamera: Dutch angle tilting slowly\nStyle: Atmospheric fog-heavy gloom, photorealistic, professional colour grading.\nAudio: Muffled underwater acoustics slowly clearing\nEdit: Single continuous shot.",
        "tags": [
          "Video",
          "Single Shot",
          "Seedance"
        ]
      },
      {
        "id": "vid-21",
        "title": "The An ancient artifact Transformation",
        "description": "High-performing transformation sequence for An ancient artifact.",
        "template": "Montage, Fantasy cinematic movie, \ncinematic lighting, photorealistic, 35mm film quality.\n\nSetting: [DESCRIBE LOCATION]\n\nShot 1 (0–2s): Medium close-up on An ancient artifact. [Initial state].\nShot 2 (2–5s): Wide shot. slowly disintegrating into dust.\nShot 3 (5–8s): Dynamic tracking shot following from behind. The An ancient artifact begins their transformation.\nShot 4 (8–11s): Dynamic tracking shot following from behind. [Transformation climax].\nShot 5 (11–15s): Medium shot. [Resolution state].\n\nStyle: Sun-drenched anamorphic.",
        "tags": [
          "Montage",
          "Transformation",
          "Action"
        ]
      },
      {
        "id": "vid-22",
        "title": "The A neon-lit cityscape Transformation",
        "description": "High-performing transformation sequence for A neon-lit cityscape.",
        "template": "Montage, Historical Drama cinematic movie, \ncinematic lighting, photorealistic, 35mm film quality.\n\nSetting: [DESCRIBE LOCATION]\n\nShot 1 (0–2s): Medium close-up on A neon-lit cityscape. [Initial state].\nShot 2 (2–5s): Wide shot. colliding with intense force.\nShot 3 (5–8s): Steady push-in to an extreme close-up. The A neon-lit cityscape begins their transformation.\nShot 4 (8–11s): Steady push-in to an extreme close-up. [Transformation climax].\nShot 5 (11–15s): Medium shot. [Resolution state].\n\nStyle: Ethereal high-key lighting.",
        "tags": [
          "Montage",
          "Transformation",
          "Action"
        ]
      },
      {
        "id": "vid-23",
        "title": "The A delicate blooming flower Transformation",
        "description": "High-performing transformation sequence for A delicate blooming flower.",
        "template": "Montage, Horror cinematic movie, \ncinematic lighting, photorealistic, 35mm film quality.\n\nSetting: [DESCRIBE LOCATION]\n\nShot 1 (0–2s): Medium close-up on A delicate blooming flower. [Initial state].\nShot 2 (2–5s): Wide shot. unfolding gracefully.\nShot 3 (5–8s): Handheld shaky cam for intensity. The A delicate blooming flower begins their transformation.\nShot 4 (8–11s): Handheld shaky cam for intensity. [Transformation climax].\nShot 5 (11–15s): Medium shot. [Resolution state].\n\nStyle: Vibrant highly saturated pop.",
        "tags": [
          "Montage",
          "Transformation",
          "Action"
        ]
      },
      {
        "id": "vid-24",
        "title": "The A diverse crowd of protesters Transformation",
        "description": "High-performing transformation sequence for A diverse crowd of protesters.",
        "template": "Montage, Romance cinematic movie, \ncinematic lighting, photorealistic, 35mm film quality.\n\nSetting: [DESCRIBE LOCATION]\n\nShot 1 (0–2s): Medium close-up on A diverse crowd of protesters. [Initial state].\nShot 2 (2–5s): Wide shot. pulsing with rhythmic light.\nShot 3 (5–8s): Static wide shot with a deep focus. The A diverse crowd of protesters begins their transformation.\nShot 4 (8–11s): Static wide shot with a deep focus. [Transformation climax].\nShot 5 (11–15s): Medium shot. [Resolution state].\n\nStyle: Soft romantic vintage film.",
        "tags": [
          "Montage",
          "Transformation",
          "Action"
        ]
      },
      {
        "id": "vid-25",
        "title": "The A mystical creature Transformation",
        "description": "High-performing transformation sequence for A mystical creature.",
        "template": "Montage, Western cinematic movie, \ncinematic lighting, photorealistic, 35mm film quality.\n\nSetting: [DESCRIBE LOCATION]\n\nShot 1 (0–2s): Medium close-up on A mystical creature. [Initial state].\nShot 2 (2–5s): Wide shot. shattering into a thousand pieces.\nShot 3 (5–8s): Dutch angle tilting slowly. The A mystical creature begins their transformation.\nShot 4 (8–11s): Dutch angle tilting slowly. [Transformation climax].\nShot 5 (11–15s): Medium shot. [Resolution state].\n\nStyle: Atmospheric fog-heavy gloom.",
        "tags": [
          "Montage",
          "Transformation",
          "Action"
        ]
      },
      {
        "id": "vid-26",
        "title": "The An ancient artifact Transformation",
        "description": "High-performing transformation sequence for An ancient artifact.",
        "template": "Montage, Fantasy cinematic movie, \ncinematic lighting, photorealistic, 35mm film quality.\n\nSetting: [DESCRIBE LOCATION]\n\nShot 1 (0–2s): Medium close-up on An ancient artifact. [Initial state].\nShot 2 (2–5s): Wide shot. slowly disintegrating into dust.\nShot 3 (5–8s): Dynamic tracking shot following from behind. The An ancient artifact begins their transformation.\nShot 4 (8–11s): Dynamic tracking shot following from behind. [Transformation climax].\nShot 5 (11–15s): Medium shot. [Resolution state].\n\nStyle: Sun-drenched anamorphic.",
        "tags": [
          "Montage",
          "Transformation",
          "Action"
        ]
      },
      {
        "id": "vid-27",
        "title": "The A neon-lit cityscape Transformation",
        "description": "High-performing transformation sequence for A neon-lit cityscape.",
        "template": "Montage, Historical Drama cinematic movie, \ncinematic lighting, photorealistic, 35mm film quality.\n\nSetting: [DESCRIBE LOCATION]\n\nShot 1 (0–2s): Medium close-up on A neon-lit cityscape. [Initial state].\nShot 2 (2–5s): Wide shot. colliding with intense force.\nShot 3 (5–8s): Steady push-in to an extreme close-up. The A neon-lit cityscape begins their transformation.\nShot 4 (8–11s): Steady push-in to an extreme close-up. [Transformation climax].\nShot 5 (11–15s): Medium shot. [Resolution state].\n\nStyle: Ethereal high-key lighting.",
        "tags": [
          "Montage",
          "Transformation",
          "Action"
        ]
      },
      {
        "id": "vid-28",
        "title": "The A delicate blooming flower Transformation",
        "description": "High-performing transformation sequence for A delicate blooming flower.",
        "template": "Montage, Horror cinematic movie, \ncinematic lighting, photorealistic, 35mm film quality.\n\nSetting: [DESCRIBE LOCATION]\n\nShot 1 (0–2s): Medium close-up on A delicate blooming flower. [Initial state].\nShot 2 (2–5s): Wide shot. unfolding gracefully.\nShot 3 (5–8s): Handheld shaky cam for intensity. The A delicate blooming flower begins their transformation.\nShot 4 (8–11s): Handheld shaky cam for intensity. [Transformation climax].\nShot 5 (11–15s): Medium shot. [Resolution state].\n\nStyle: Vibrant highly saturated pop.",
        "tags": [
          "Montage",
          "Transformation",
          "Action"
        ]
      },
      {
        "id": "vid-29",
        "title": "The A diverse crowd of protesters Transformation",
        "description": "High-performing transformation sequence for A diverse crowd of protesters.",
        "template": "Montage, Romance cinematic movie, \ncinematic lighting, photorealistic, 35mm film quality.\n\nSetting: [DESCRIBE LOCATION]\n\nShot 1 (0–2s): Medium close-up on A diverse crowd of protesters. [Initial state].\nShot 2 (2–5s): Wide shot. pulsing with rhythmic light.\nShot 3 (5–8s): Static wide shot with a deep focus. The A diverse crowd of protesters begins their transformation.\nShot 4 (8–11s): Static wide shot with a deep focus. [Transformation climax].\nShot 5 (11–15s): Medium shot. [Resolution state].\n\nStyle: Soft romantic vintage film.",
        "tags": [
          "Montage",
          "Transformation",
          "Action"
        ]
      },
      {
        "id": "vid-30",
        "title": "The A mystical creature Transformation",
        "description": "High-performing transformation sequence for A mystical creature.",
        "template": "Montage, Western cinematic movie, \ncinematic lighting, photorealistic, 35mm film quality.\n\nSetting: [DESCRIBE LOCATION]\n\nShot 1 (0–2s): Medium close-up on A mystical creature. [Initial state].\nShot 2 (2–5s): Wide shot. shattering into a thousand pieces.\nShot 3 (5–8s): Dutch angle tilting slowly. The A mystical creature begins their transformation.\nShot 4 (8–11s): Dutch angle tilting slowly. [Transformation climax].\nShot 5 (11–15s): Medium shot. [Resolution state].\n\nStyle: Atmospheric fog-heavy gloom.",
        "tags": [
          "Montage",
          "Transformation",
          "Action"
        ]
      },
      {
        "id": "vid-31",
        "title": "The An ancient artifact Transformation",
        "description": "High-performing transformation sequence for An ancient artifact.",
        "template": "Montage, Fantasy cinematic movie, \ncinematic lighting, photorealistic, 35mm film quality.\n\nSetting: [DESCRIBE LOCATION]\n\nShot 1 (0–2s): Medium close-up on An ancient artifact. [Initial state].\nShot 2 (2–5s): Wide shot. slowly disintegrating into dust.\nShot 3 (5–8s): Dynamic tracking shot following from behind. The An ancient artifact begins their transformation.\nShot 4 (8–11s): Dynamic tracking shot following from behind. [Transformation climax].\nShot 5 (11–15s): Medium shot. [Resolution state].\n\nStyle: Sun-drenched anamorphic.",
        "tags": [
          "Montage",
          "Transformation",
          "Action"
        ]
      },
      {
        "id": "vid-32",
        "title": "The A neon-lit cityscape Transformation",
        "description": "High-performing transformation sequence for A neon-lit cityscape.",
        "template": "Montage, Historical Drama cinematic movie, \ncinematic lighting, photorealistic, 35mm film quality.\n\nSetting: [DESCRIBE LOCATION]\n\nShot 1 (0–2s): Medium close-up on A neon-lit cityscape. [Initial state].\nShot 2 (2–5s): Wide shot. colliding with intense force.\nShot 3 (5–8s): Steady push-in to an extreme close-up. The A neon-lit cityscape begins their transformation.\nShot 4 (8–11s): Steady push-in to an extreme close-up. [Transformation climax].\nShot 5 (11–15s): Medium shot. [Resolution state].\n\nStyle: Ethereal high-key lighting.",
        "tags": [
          "Montage",
          "Transformation",
          "Action"
        ]
      },
      {
        "id": "vid-33",
        "title": "The A delicate blooming flower Transformation",
        "description": "High-performing transformation sequence for A delicate blooming flower.",
        "template": "Montage, Horror cinematic movie, \ncinematic lighting, photorealistic, 35mm film quality.\n\nSetting: [DESCRIBE LOCATION]\n\nShot 1 (0–2s): Medium close-up on A delicate blooming flower. [Initial state].\nShot 2 (2–5s): Wide shot. unfolding gracefully.\nShot 3 (5–8s): Handheld shaky cam for intensity. The A delicate blooming flower begins their transformation.\nShot 4 (8–11s): Handheld shaky cam for intensity. [Transformation climax].\nShot 5 (11–15s): Medium shot. [Resolution state].\n\nStyle: Vibrant highly saturated pop.",
        "tags": [
          "Montage",
          "Transformation",
          "Action"
        ]
      },
      {
        "id": "vid-34",
        "title": "The A diverse crowd of protesters Transformation",
        "description": "High-performing transformation sequence for A diverse crowd of protesters.",
        "template": "Montage, Romance cinematic movie, \ncinematic lighting, photorealistic, 35mm film quality.\n\nSetting: [DESCRIBE LOCATION]\n\nShot 1 (0–2s): Medium close-up on A diverse crowd of protesters. [Initial state].\nShot 2 (2–5s): Wide shot. pulsing with rhythmic light.\nShot 3 (5–8s): Static wide shot with a deep focus. The A diverse crowd of protesters begins their transformation.\nShot 4 (8–11s): Static wide shot with a deep focus. [Transformation climax].\nShot 5 (11–15s): Medium shot. [Resolution state].\n\nStyle: Soft romantic vintage film.",
        "tags": [
          "Montage",
          "Transformation",
          "Action"
        ]
      },
      {
        "id": "vid-35",
        "title": "The A mystical creature Transformation",
        "description": "High-performing transformation sequence for A mystical creature.",
        "template": "Montage, Western cinematic movie, \ncinematic lighting, photorealistic, 35mm film quality.\n\nSetting: [DESCRIBE LOCATION]\n\nShot 1 (0–2s): Medium close-up on A mystical creature. [Initial state].\nShot 2 (2–5s): Wide shot. shattering into a thousand pieces.\nShot 3 (5–8s): Dutch angle tilting slowly. The A mystical creature begins their transformation.\nShot 4 (8–11s): Dutch angle tilting slowly. [Transformation climax].\nShot 5 (11–15s): Medium shot. [Resolution state].\n\nStyle: Atmospheric fog-heavy gloom.",
        "tags": [
          "Montage",
          "Transformation",
          "Action"
        ]
      },
      {
        "id": "vid-36",
        "title": "The An ancient artifact Transformation",
        "description": "High-performing transformation sequence for An ancient artifact.",
        "template": "Montage, Fantasy cinematic movie, \ncinematic lighting, photorealistic, 35mm film quality.\n\nSetting: [DESCRIBE LOCATION]\n\nShot 1 (0–2s): Medium close-up on An ancient artifact. [Initial state].\nShot 2 (2–5s): Wide shot. slowly disintegrating into dust.\nShot 3 (5–8s): Dynamic tracking shot following from behind. The An ancient artifact begins their transformation.\nShot 4 (8–11s): Dynamic tracking shot following from behind. [Transformation climax].\nShot 5 (11–15s): Medium shot. [Resolution state].\n\nStyle: Sun-drenched anamorphic.",
        "tags": [
          "Montage",
          "Transformation",
          "Action"
        ]
      },
      {
        "id": "vid-37",
        "title": "The A neon-lit cityscape Transformation",
        "description": "High-performing transformation sequence for A neon-lit cityscape.",
        "template": "Montage, Historical Drama cinematic movie, \ncinematic lighting, photorealistic, 35mm film quality.\n\nSetting: [DESCRIBE LOCATION]\n\nShot 1 (0–2s): Medium close-up on A neon-lit cityscape. [Initial state].\nShot 2 (2–5s): Wide shot. colliding with intense force.\nShot 3 (5–8s): Steady push-in to an extreme close-up. The A neon-lit cityscape begins their transformation.\nShot 4 (8–11s): Steady push-in to an extreme close-up. [Transformation climax].\nShot 5 (11–15s): Medium shot. [Resolution state].\n\nStyle: Ethereal high-key lighting.",
        "tags": [
          "Montage",
          "Transformation",
          "Action"
        ]
      },
      {
        "id": "vid-38",
        "title": "The A delicate blooming flower Transformation",
        "description": "High-performing transformation sequence for A delicate blooming flower.",
        "template": "Montage, Horror cinematic movie, \ncinematic lighting, photorealistic, 35mm film quality.\n\nSetting: [DESCRIBE LOCATION]\n\nShot 1 (0–2s): Medium close-up on A delicate blooming flower. [Initial state].\nShot 2 (2–5s): Wide shot. unfolding gracefully.\nShot 3 (5–8s): Handheld shaky cam for intensity. The A delicate blooming flower begins their transformation.\nShot 4 (8–11s): Handheld shaky cam for intensity. [Transformation climax].\nShot 5 (11–15s): Medium shot. [Resolution state].\n\nStyle: Vibrant highly saturated pop.",
        "tags": [
          "Montage",
          "Transformation",
          "Action"
        ]
      },
      {
        "id": "vid-39",
        "title": "The A diverse crowd of protesters Transformation",
        "description": "High-performing transformation sequence for A diverse crowd of protesters.",
        "template": "Montage, Romance cinematic movie, \ncinematic lighting, photorealistic, 35mm film quality.\n\nSetting: [DESCRIBE LOCATION]\n\nShot 1 (0–2s): Medium close-up on A diverse crowd of protesters. [Initial state].\nShot 2 (2–5s): Wide shot. pulsing with rhythmic light.\nShot 3 (5–8s): Static wide shot with a deep focus. The A diverse crowd of protesters begins their transformation.\nShot 4 (8–11s): Static wide shot with a deep focus. [Transformation climax].\nShot 5 (11–15s): Medium shot. [Resolution state].\n\nStyle: Soft romantic vintage film.",
        "tags": [
          "Montage",
          "Transformation",
          "Action"
        ]
      },
      {
        "id": "vid-40",
        "title": "The A mystical creature Transformation",
        "description": "High-performing transformation sequence for A mystical creature.",
        "template": "Montage, Western cinematic movie, \ncinematic lighting, photorealistic, 35mm film quality.\n\nSetting: [DESCRIBE LOCATION]\n\nShot 1 (0–2s): Medium close-up on A mystical creature. [Initial state].\nShot 2 (2–5s): Wide shot. shattering into a thousand pieces.\nShot 3 (5–8s): Dutch angle tilting slowly. The A mystical creature begins their transformation.\nShot 4 (8–11s): Dutch angle tilting slowly. [Transformation climax].\nShot 5 (11–15s): Medium shot. [Resolution state].\n\nStyle: Atmospheric fog-heavy gloom.",
        "tags": [
          "Montage",
          "Transformation",
          "Action"
        ]
      },
      {
        "id": "vid-41",
        "title": "Fantasy Viral Timeline",
        "description": "Structured timeline perfect for pacing Fantasy videos.",
        "template": "VISUAL STYLE: Sun-drenched anamorphic. Fantasy aesthetic.\nCHARACTERS: An ancient artifact mapping to [SPECIFIC DESCRIPTIONS].\nENVIRONMENT: [Detailed setting].\nEMOTIONAL TARGET: [Starting mood] to [Ending mood].\nTIMELINE:\n00:00.0–00:02.0: HOOK — slowly disintegrating into dust starts. \nCamera: Dynamic tracking shot following from behind. Audio: Synthwave beat dropping into silence.\n00:02.0–00:10.0: BUILDUP — [Main choreo].\n00:10.0–END: PAYOFF — [Meaning shift].",
        "tags": [
          "Timeline",
          "Viral",
          "Pacing"
        ]
      },
      {
        "id": "vid-42",
        "title": "Historical Drama Viral Timeline",
        "description": "Structured timeline perfect for pacing Historical Drama videos.",
        "template": "VISUAL STYLE: Ethereal high-key lighting. Historical Drama aesthetic.\nCHARACTERS: A neon-lit cityscape mapping to [SPECIFIC DESCRIPTIONS].\nENVIRONMENT: [Detailed setting].\nEMOTIONAL TARGET: [Starting mood] to [Ending mood].\nTIMELINE:\n00:00.0–00:02.0: HOOK — colliding with intense force starts. \nCamera: Steady push-in to an extreme close-up. Audio: Frantic percussion and rising strings.\n00:02.0–00:10.0: BUILDUP — [Main choreo].\n00:10.0–END: PAYOFF — [Meaning shift].",
        "tags": [
          "Timeline",
          "Viral",
          "Pacing"
        ]
      },
      {
        "id": "vid-43",
        "title": "Horror Viral Timeline",
        "description": "Structured timeline perfect for pacing Horror videos.",
        "template": "VISUAL STYLE: Vibrant highly saturated pop. Horror aesthetic.\nCHARACTERS: A delicate blooming flower mapping to [SPECIFIC DESCRIPTIONS].\nENVIRONMENT: [Detailed setting].\nEMOTIONAL TARGET: [Starting mood] to [Ending mood].\nTIMELINE:\n00:00.0–00:02.0: HOOK — unfolding gracefully starts. \nCamera: Handheld shaky cam for intensity. Audio: Soft piano melody over rain sounds.\n00:02.0–00:10.0: BUILDUP — [Main choreo].\n00:10.0–END: PAYOFF — [Meaning shift].",
        "tags": [
          "Timeline",
          "Viral",
          "Pacing"
        ]
      },
      {
        "id": "vid-44",
        "title": "Romance Viral Timeline",
        "description": "Structured timeline perfect for pacing Romance videos.",
        "template": "VISUAL STYLE: Soft romantic vintage film. Romance aesthetic.\nCHARACTERS: A diverse crowd of protesters mapping to [SPECIFIC DESCRIPTIONS].\nENVIRONMENT: [Detailed setting].\nEMOTIONAL TARGET: [Starting mood] to [Ending mood].\nTIMELINE:\n00:00.0–00:02.0: HOOK — pulsing with rhythmic light starts. \nCamera: Static wide shot with a deep focus. Audio: A sweeping orchestral crescendo.\n00:02.0–00:10.0: BUILDUP — [Main choreo].\n00:10.0–END: PAYOFF — [Meaning shift].",
        "tags": [
          "Timeline",
          "Viral",
          "Pacing"
        ]
      },
      {
        "id": "vid-45",
        "title": "Western Viral Timeline",
        "description": "Structured timeline perfect for pacing Western videos.",
        "template": "VISUAL STYLE: Atmospheric fog-heavy gloom. Western aesthetic.\nCHARACTERS: A mystical creature mapping to [SPECIFIC DESCRIPTIONS].\nENVIRONMENT: [Detailed setting].\nEMOTIONAL TARGET: [Starting mood] to [Ending mood].\nTIMELINE:\n00:00.0–00:02.0: HOOK — shattering into a thousand pieces starts. \nCamera: Dutch angle tilting slowly. Audio: Muffled underwater acoustics slowly clearing.\n00:02.0–00:10.0: BUILDUP — [Main choreo].\n00:10.0–END: PAYOFF — [Meaning shift].",
        "tags": [
          "Timeline",
          "Viral",
          "Pacing"
        ]
      },
      {
        "id": "vid-46",
        "title": "Fantasy Viral Timeline",
        "description": "Structured timeline perfect for pacing Fantasy videos.",
        "template": "VISUAL STYLE: Sun-drenched anamorphic. Fantasy aesthetic.\nCHARACTERS: An ancient artifact mapping to [SPECIFIC DESCRIPTIONS].\nENVIRONMENT: [Detailed setting].\nEMOTIONAL TARGET: [Starting mood] to [Ending mood].\nTIMELINE:\n00:00.0–00:02.0: HOOK — slowly disintegrating into dust starts. \nCamera: Dynamic tracking shot following from behind. Audio: Synthwave beat dropping into silence.\n00:02.0–00:10.0: BUILDUP — [Main choreo].\n00:10.0–END: PAYOFF — [Meaning shift].",
        "tags": [
          "Timeline",
          "Viral",
          "Pacing"
        ]
      },
      {
        "id": "vid-47",
        "title": "Historical Drama Viral Timeline",
        "description": "Structured timeline perfect for pacing Historical Drama videos.",
        "template": "VISUAL STYLE: Ethereal high-key lighting. Historical Drama aesthetic.\nCHARACTERS: A neon-lit cityscape mapping to [SPECIFIC DESCRIPTIONS].\nENVIRONMENT: [Detailed setting].\nEMOTIONAL TARGET: [Starting mood] to [Ending mood].\nTIMELINE:\n00:00.0–00:02.0: HOOK — colliding with intense force starts. \nCamera: Steady push-in to an extreme close-up. Audio: Frantic percussion and rising strings.\n00:02.0–00:10.0: BUILDUP — [Main choreo].\n00:10.0–END: PAYOFF — [Meaning shift].",
        "tags": [
          "Timeline",
          "Viral",
          "Pacing"
        ]
      },
      {
        "id": "vid-48",
        "title": "Horror Viral Timeline",
        "description": "Structured timeline perfect for pacing Horror videos.",
        "template": "VISUAL STYLE: Vibrant highly saturated pop. Horror aesthetic.\nCHARACTERS: A delicate blooming flower mapping to [SPECIFIC DESCRIPTIONS].\nENVIRONMENT: [Detailed setting].\nEMOTIONAL TARGET: [Starting mood] to [Ending mood].\nTIMELINE:\n00:00.0–00:02.0: HOOK — unfolding gracefully starts. \nCamera: Handheld shaky cam for intensity. Audio: Soft piano melody over rain sounds.\n00:02.0–00:10.0: BUILDUP — [Main choreo].\n00:10.0–END: PAYOFF — [Meaning shift].",
        "tags": [
          "Timeline",
          "Viral",
          "Pacing"
        ]
      },
      {
        "id": "vid-49",
        "title": "Romance Viral Timeline",
        "description": "Structured timeline perfect for pacing Romance videos.",
        "template": "VISUAL STYLE: Soft romantic vintage film. Romance aesthetic.\nCHARACTERS: A diverse crowd of protesters mapping to [SPECIFIC DESCRIPTIONS].\nENVIRONMENT: [Detailed setting].\nEMOTIONAL TARGET: [Starting mood] to [Ending mood].\nTIMELINE:\n00:00.0–00:02.0: HOOK — pulsing with rhythmic light starts. \nCamera: Static wide shot with a deep focus. Audio: A sweeping orchestral crescendo.\n00:02.0–00:10.0: BUILDUP — [Main choreo].\n00:10.0–END: PAYOFF — [Meaning shift].",
        "tags": [
          "Timeline",
          "Viral",
          "Pacing"
        ]
      },
      {
        "id": "vid-50",
        "title": "Western Viral Timeline",
        "description": "Structured timeline perfect for pacing Western videos.",
        "template": "VISUAL STYLE: Atmospheric fog-heavy gloom. Western aesthetic.\nCHARACTERS: A mystical creature mapping to [SPECIFIC DESCRIPTIONS].\nENVIRONMENT: [Detailed setting].\nEMOTIONAL TARGET: [Starting mood] to [Ending mood].\nTIMELINE:\n00:00.0–00:02.0: HOOK — shattering into a thousand pieces starts. \nCamera: Dutch angle tilting slowly. Audio: Muffled underwater acoustics slowly clearing.\n00:02.0–00:10.0: BUILDUP — [Main choreo].\n00:10.0–END: PAYOFF — [Meaning shift].",
        "tags": [
          "Timeline",
          "Viral",
          "Pacing"
        ]
      },
      {
        "id": "vid-51",
        "title": "Fantasy Viral Timeline",
        "description": "Structured timeline perfect for pacing Fantasy videos.",
        "template": "VISUAL STYLE: Sun-drenched anamorphic. Fantasy aesthetic.\nCHARACTERS: An ancient artifact mapping to [SPECIFIC DESCRIPTIONS].\nENVIRONMENT: [Detailed setting].\nEMOTIONAL TARGET: [Starting mood] to [Ending mood].\nTIMELINE:\n00:00.0–00:02.0: HOOK — slowly disintegrating into dust starts. \nCamera: Dynamic tracking shot following from behind. Audio: Synthwave beat dropping into silence.\n00:02.0–00:10.0: BUILDUP — [Main choreo].\n00:10.0–END: PAYOFF — [Meaning shift].",
        "tags": [
          "Timeline",
          "Viral",
          "Pacing"
        ]
      },
      {
        "id": "vid-52",
        "title": "Historical Drama Viral Timeline",
        "description": "Structured timeline perfect for pacing Historical Drama videos.",
        "template": "VISUAL STYLE: Ethereal high-key lighting. Historical Drama aesthetic.\nCHARACTERS: A neon-lit cityscape mapping to [SPECIFIC DESCRIPTIONS].\nENVIRONMENT: [Detailed setting].\nEMOTIONAL TARGET: [Starting mood] to [Ending mood].\nTIMELINE:\n00:00.0–00:02.0: HOOK — colliding with intense force starts. \nCamera: Steady push-in to an extreme close-up. Audio: Frantic percussion and rising strings.\n00:02.0–00:10.0: BUILDUP — [Main choreo].\n00:10.0–END: PAYOFF — [Meaning shift].",
        "tags": [
          "Timeline",
          "Viral",
          "Pacing"
        ]
      },
      {
        "id": "vid-53",
        "title": "Horror Viral Timeline",
        "description": "Structured timeline perfect for pacing Horror videos.",
        "template": "VISUAL STYLE: Vibrant highly saturated pop. Horror aesthetic.\nCHARACTERS: A delicate blooming flower mapping to [SPECIFIC DESCRIPTIONS].\nENVIRONMENT: [Detailed setting].\nEMOTIONAL TARGET: [Starting mood] to [Ending mood].\nTIMELINE:\n00:00.0–00:02.0: HOOK — unfolding gracefully starts. \nCamera: Handheld shaky cam for intensity. Audio: Soft piano melody over rain sounds.\n00:02.0–00:10.0: BUILDUP — [Main choreo].\n00:10.0–END: PAYOFF — [Meaning shift].",
        "tags": [
          "Timeline",
          "Viral",
          "Pacing"
        ]
      },
      {
        "id": "vid-54",
        "title": "Romance Viral Timeline",
        "description": "Structured timeline perfect for pacing Romance videos.",
        "template": "VISUAL STYLE: Soft romantic vintage film. Romance aesthetic.\nCHARACTERS: A diverse crowd of protesters mapping to [SPECIFIC DESCRIPTIONS].\nENVIRONMENT: [Detailed setting].\nEMOTIONAL TARGET: [Starting mood] to [Ending mood].\nTIMELINE:\n00:00.0–00:02.0: HOOK — pulsing with rhythmic light starts. \nCamera: Static wide shot with a deep focus. Audio: A sweeping orchestral crescendo.\n00:02.0–00:10.0: BUILDUP — [Main choreo].\n00:10.0–END: PAYOFF — [Meaning shift].",
        "tags": [
          "Timeline",
          "Viral",
          "Pacing"
        ]
      },
      {
        "id": "vid-55",
        "title": "Western Viral Timeline",
        "description": "Structured timeline perfect for pacing Western videos.",
        "template": "VISUAL STYLE: Atmospheric fog-heavy gloom. Western aesthetic.\nCHARACTERS: A mystical creature mapping to [SPECIFIC DESCRIPTIONS].\nENVIRONMENT: [Detailed setting].\nEMOTIONAL TARGET: [Starting mood] to [Ending mood].\nTIMELINE:\n00:00.0–00:02.0: HOOK — shattering into a thousand pieces starts. \nCamera: Dutch angle tilting slowly. Audio: Muffled underwater acoustics slowly clearing.\n00:02.0–00:10.0: BUILDUP — [Main choreo].\n00:10.0–END: PAYOFF — [Meaning shift].",
        "tags": [
          "Timeline",
          "Viral",
          "Pacing"
        ]
      },
      {
        "id": "vid-56",
        "title": "Fantasy Viral Timeline",
        "description": "Structured timeline perfect for pacing Fantasy videos.",
        "template": "VISUAL STYLE: Sun-drenched anamorphic. Fantasy aesthetic.\nCHARACTERS: An ancient artifact mapping to [SPECIFIC DESCRIPTIONS].\nENVIRONMENT: [Detailed setting].\nEMOTIONAL TARGET: [Starting mood] to [Ending mood].\nTIMELINE:\n00:00.0–00:02.0: HOOK — slowly disintegrating into dust starts. \nCamera: Dynamic tracking shot following from behind. Audio: Synthwave beat dropping into silence.\n00:02.0–00:10.0: BUILDUP — [Main choreo].\n00:10.0–END: PAYOFF — [Meaning shift].",
        "tags": [
          "Timeline",
          "Viral",
          "Pacing"
        ]
      },
      {
        "id": "vid-57",
        "title": "Historical Drama Viral Timeline",
        "description": "Structured timeline perfect for pacing Historical Drama videos.",
        "template": "VISUAL STYLE: Ethereal high-key lighting. Historical Drama aesthetic.\nCHARACTERS: A neon-lit cityscape mapping to [SPECIFIC DESCRIPTIONS].\nENVIRONMENT: [Detailed setting].\nEMOTIONAL TARGET: [Starting mood] to [Ending mood].\nTIMELINE:\n00:00.0–00:02.0: HOOK — colliding with intense force starts. \nCamera: Steady push-in to an extreme close-up. Audio: Frantic percussion and rising strings.\n00:02.0–00:10.0: BUILDUP — [Main choreo].\n00:10.0–END: PAYOFF — [Meaning shift].",
        "tags": [
          "Timeline",
          "Viral",
          "Pacing"
        ]
      },
      {
        "id": "vid-58",
        "title": "Horror Viral Timeline",
        "description": "Structured timeline perfect for pacing Horror videos.",
        "template": "VISUAL STYLE: Vibrant highly saturated pop. Horror aesthetic.\nCHARACTERS: A delicate blooming flower mapping to [SPECIFIC DESCRIPTIONS].\nENVIRONMENT: [Detailed setting].\nEMOTIONAL TARGET: [Starting mood] to [Ending mood].\nTIMELINE:\n00:00.0–00:02.0: HOOK — unfolding gracefully starts. \nCamera: Handheld shaky cam for intensity. Audio: Soft piano melody over rain sounds.\n00:02.0–00:10.0: BUILDUP — [Main choreo].\n00:10.0–END: PAYOFF — [Meaning shift].",
        "tags": [
          "Timeline",
          "Viral",
          "Pacing"
        ]
      },
      {
        "id": "vid-59",
        "title": "Romance Viral Timeline",
        "description": "Structured timeline perfect for pacing Romance videos.",
        "template": "VISUAL STYLE: Soft romantic vintage film. Romance aesthetic.\nCHARACTERS: A diverse crowd of protesters mapping to [SPECIFIC DESCRIPTIONS].\nENVIRONMENT: [Detailed setting].\nEMOTIONAL TARGET: [Starting mood] to [Ending mood].\nTIMELINE:\n00:00.0–00:02.0: HOOK — pulsing with rhythmic light starts. \nCamera: Static wide shot with a deep focus. Audio: A sweeping orchestral crescendo.\n00:02.0–00:10.0: BUILDUP — [Main choreo].\n00:10.0–END: PAYOFF — [Meaning shift].",
        "tags": [
          "Timeline",
          "Viral",
          "Pacing"
        ]
      },
      {
        "id": "vid-60",
        "title": "Western Viral Timeline",
        "description": "Structured timeline perfect for pacing Western videos.",
        "template": "VISUAL STYLE: Atmospheric fog-heavy gloom. Western aesthetic.\nCHARACTERS: A mystical creature mapping to [SPECIFIC DESCRIPTIONS].\nENVIRONMENT: [Detailed setting].\nEMOTIONAL TARGET: [Starting mood] to [Ending mood].\nTIMELINE:\n00:00.0–00:02.0: HOOK — shattering into a thousand pieces starts. \nCamera: Dutch angle tilting slowly. Audio: Muffled underwater acoustics slowly clearing.\n00:02.0–00:10.0: BUILDUP — [Main choreo].\n00:10.0–END: PAYOFF — [Meaning shift].",
        "tags": [
          "Timeline",
          "Viral",
          "Pacing"
        ]
      },
      {
        "id": "vid-61",
        "title": "Drone Flythrough: An ancient artifact",
        "description": "Expansive environmental storytelling.",
        "template": "Drone FPV shot flying through [ENVIRONMENT].\nSubject: An ancient artifact situated in the environment, slowly disintegrating into dust.\nCamera: Continuous forward motion, soaring Dynamic tracking shot following from behind.\nStyle: Sun-drenched anamorphic, breathtaking scale, 8K, extreme detail.\nAudio: Synthwave beat dropping into silence",
        "tags": [
          "Drone",
          "Environment",
          "Motion"
        ]
      },
      {
        "id": "vid-62",
        "title": "Drone Flythrough: A neon-lit cityscape",
        "description": "Expansive environmental storytelling.",
        "template": "Drone FPV shot flying through [ENVIRONMENT].\nSubject: A neon-lit cityscape situated in the environment, colliding with intense force.\nCamera: Continuous forward motion, soaring Steady push-in to an extreme close-up.\nStyle: Ethereal high-key lighting, breathtaking scale, 8K, extreme detail.\nAudio: Frantic percussion and rising strings",
        "tags": [
          "Drone",
          "Environment",
          "Motion"
        ]
      },
      {
        "id": "vid-63",
        "title": "Drone Flythrough: A delicate blooming flower",
        "description": "Expansive environmental storytelling.",
        "template": "Drone FPV shot flying through [ENVIRONMENT].\nSubject: A delicate blooming flower situated in the environment, unfolding gracefully.\nCamera: Continuous forward motion, soaring Handheld shaky cam for intensity.\nStyle: Vibrant highly saturated pop, breathtaking scale, 8K, extreme detail.\nAudio: Soft piano melody over rain sounds",
        "tags": [
          "Drone",
          "Environment",
          "Motion"
        ]
      },
      {
        "id": "vid-64",
        "title": "Drone Flythrough: A diverse crowd of protesters",
        "description": "Expansive environmental storytelling.",
        "template": "Drone FPV shot flying through [ENVIRONMENT].\nSubject: A diverse crowd of protesters situated in the environment, pulsing with rhythmic light.\nCamera: Continuous forward motion, soaring Static wide shot with a deep focus.\nStyle: Soft romantic vintage film, breathtaking scale, 8K, extreme detail.\nAudio: A sweeping orchestral crescendo",
        "tags": [
          "Drone",
          "Environment",
          "Motion"
        ]
      },
      {
        "id": "vid-65",
        "title": "Drone Flythrough: A mystical creature",
        "description": "Expansive environmental storytelling.",
        "template": "Drone FPV shot flying through [ENVIRONMENT].\nSubject: A mystical creature situated in the environment, shattering into a thousand pieces.\nCamera: Continuous forward motion, soaring Dutch angle tilting slowly.\nStyle: Atmospheric fog-heavy gloom, breathtaking scale, 8K, extreme detail.\nAudio: Muffled underwater acoustics slowly clearing",
        "tags": [
          "Drone",
          "Environment",
          "Motion"
        ]
      },
      {
        "id": "vid-66",
        "title": "Drone Flythrough: An ancient artifact",
        "description": "Expansive environmental storytelling.",
        "template": "Drone FPV shot flying through [ENVIRONMENT].\nSubject: An ancient artifact situated in the environment, slowly disintegrating into dust.\nCamera: Continuous forward motion, soaring Dynamic tracking shot following from behind.\nStyle: Sun-drenched anamorphic, breathtaking scale, 8K, extreme detail.\nAudio: Synthwave beat dropping into silence",
        "tags": [
          "Drone",
          "Environment",
          "Motion"
        ]
      },
      {
        "id": "vid-67",
        "title": "Drone Flythrough: A neon-lit cityscape",
        "description": "Expansive environmental storytelling.",
        "template": "Drone FPV shot flying through [ENVIRONMENT].\nSubject: A neon-lit cityscape situated in the environment, colliding with intense force.\nCamera: Continuous forward motion, soaring Steady push-in to an extreme close-up.\nStyle: Ethereal high-key lighting, breathtaking scale, 8K, extreme detail.\nAudio: Frantic percussion and rising strings",
        "tags": [
          "Drone",
          "Environment",
          "Motion"
        ]
      },
      {
        "id": "vid-68",
        "title": "Drone Flythrough: A delicate blooming flower",
        "description": "Expansive environmental storytelling.",
        "template": "Drone FPV shot flying through [ENVIRONMENT].\nSubject: A delicate blooming flower situated in the environment, unfolding gracefully.\nCamera: Continuous forward motion, soaring Handheld shaky cam for intensity.\nStyle: Vibrant highly saturated pop, breathtaking scale, 8K, extreme detail.\nAudio: Soft piano melody over rain sounds",
        "tags": [
          "Drone",
          "Environment",
          "Motion"
        ]
      },
      {
        "id": "vid-69",
        "title": "Drone Flythrough: A diverse crowd of protesters",
        "description": "Expansive environmental storytelling.",
        "template": "Drone FPV shot flying through [ENVIRONMENT].\nSubject: A diverse crowd of protesters situated in the environment, pulsing with rhythmic light.\nCamera: Continuous forward motion, soaring Static wide shot with a deep focus.\nStyle: Soft romantic vintage film, breathtaking scale, 8K, extreme detail.\nAudio: A sweeping orchestral crescendo",
        "tags": [
          "Drone",
          "Environment",
          "Motion"
        ]
      },
      {
        "id": "vid-70",
        "title": "Drone Flythrough: A mystical creature",
        "description": "Expansive environmental storytelling.",
        "template": "Drone FPV shot flying through [ENVIRONMENT].\nSubject: A mystical creature situated in the environment, shattering into a thousand pieces.\nCamera: Continuous forward motion, soaring Dutch angle tilting slowly.\nStyle: Atmospheric fog-heavy gloom, breathtaking scale, 8K, extreme detail.\nAudio: Muffled underwater acoustics slowly clearing",
        "tags": [
          "Drone",
          "Environment",
          "Motion"
        ]
      },
      {
        "id": "vid-71",
        "title": "Drone Flythrough: An ancient artifact",
        "description": "Expansive environmental storytelling.",
        "template": "Drone FPV shot flying through [ENVIRONMENT].\nSubject: An ancient artifact situated in the environment, slowly disintegrating into dust.\nCamera: Continuous forward motion, soaring Dynamic tracking shot following from behind.\nStyle: Sun-drenched anamorphic, breathtaking scale, 8K, extreme detail.\nAudio: Synthwave beat dropping into silence",
        "tags": [
          "Drone",
          "Environment",
          "Motion"
        ]
      },
      {
        "id": "vid-72",
        "title": "Drone Flythrough: A neon-lit cityscape",
        "description": "Expansive environmental storytelling.",
        "template": "Drone FPV shot flying through [ENVIRONMENT].\nSubject: A neon-lit cityscape situated in the environment, colliding with intense force.\nCamera: Continuous forward motion, soaring Steady push-in to an extreme close-up.\nStyle: Ethereal high-key lighting, breathtaking scale, 8K, extreme detail.\nAudio: Frantic percussion and rising strings",
        "tags": [
          "Drone",
          "Environment",
          "Motion"
        ]
      },
      {
        "id": "vid-73",
        "title": "Drone Flythrough: A delicate blooming flower",
        "description": "Expansive environmental storytelling.",
        "template": "Drone FPV shot flying through [ENVIRONMENT].\nSubject: A delicate blooming flower situated in the environment, unfolding gracefully.\nCamera: Continuous forward motion, soaring Handheld shaky cam for intensity.\nStyle: Vibrant highly saturated pop, breathtaking scale, 8K, extreme detail.\nAudio: Soft piano melody over rain sounds",
        "tags": [
          "Drone",
          "Environment",
          "Motion"
        ]
      },
      {
        "id": "vid-74",
        "title": "Drone Flythrough: A diverse crowd of protesters",
        "description": "Expansive environmental storytelling.",
        "template": "Drone FPV shot flying through [ENVIRONMENT].\nSubject: A diverse crowd of protesters situated in the environment, pulsing with rhythmic light.\nCamera: Continuous forward motion, soaring Static wide shot with a deep focus.\nStyle: Soft romantic vintage film, breathtaking scale, 8K, extreme detail.\nAudio: A sweeping orchestral crescendo",
        "tags": [
          "Drone",
          "Environment",
          "Motion"
        ]
      },
      {
        "id": "vid-75",
        "title": "Drone Flythrough: A mystical creature",
        "description": "Expansive environmental storytelling.",
        "template": "Drone FPV shot flying through [ENVIRONMENT].\nSubject: A mystical creature situated in the environment, shattering into a thousand pieces.\nCamera: Continuous forward motion, soaring Dutch angle tilting slowly.\nStyle: Atmospheric fog-heavy gloom, breathtaking scale, 8K, extreme detail.\nAudio: Muffled underwater acoustics slowly clearing",
        "tags": [
          "Drone",
          "Environment",
          "Motion"
        ]
      },
      {
        "id": "vid-76",
        "title": "Drone Flythrough: An ancient artifact",
        "description": "Expansive environmental storytelling.",
        "template": "Drone FPV shot flying through [ENVIRONMENT].\nSubject: An ancient artifact situated in the environment, slowly disintegrating into dust.\nCamera: Continuous forward motion, soaring Dynamic tracking shot following from behind.\nStyle: Sun-drenched anamorphic, breathtaking scale, 8K, extreme detail.\nAudio: Synthwave beat dropping into silence",
        "tags": [
          "Drone",
          "Environment",
          "Motion"
        ]
      },
      {
        "id": "vid-77",
        "title": "Drone Flythrough: A neon-lit cityscape",
        "description": "Expansive environmental storytelling.",
        "template": "Drone FPV shot flying through [ENVIRONMENT].\nSubject: A neon-lit cityscape situated in the environment, colliding with intense force.\nCamera: Continuous forward motion, soaring Steady push-in to an extreme close-up.\nStyle: Ethereal high-key lighting, breathtaking scale, 8K, extreme detail.\nAudio: Frantic percussion and rising strings",
        "tags": [
          "Drone",
          "Environment",
          "Motion"
        ]
      },
      {
        "id": "vid-78",
        "title": "Drone Flythrough: A delicate blooming flower",
        "description": "Expansive environmental storytelling.",
        "template": "Drone FPV shot flying through [ENVIRONMENT].\nSubject: A delicate blooming flower situated in the environment, unfolding gracefully.\nCamera: Continuous forward motion, soaring Handheld shaky cam for intensity.\nStyle: Vibrant highly saturated pop, breathtaking scale, 8K, extreme detail.\nAudio: Soft piano melody over rain sounds",
        "tags": [
          "Drone",
          "Environment",
          "Motion"
        ]
      },
      {
        "id": "vid-79",
        "title": "Drone Flythrough: A diverse crowd of protesters",
        "description": "Expansive environmental storytelling.",
        "template": "Drone FPV shot flying through [ENVIRONMENT].\nSubject: A diverse crowd of protesters situated in the environment, pulsing with rhythmic light.\nCamera: Continuous forward motion, soaring Static wide shot with a deep focus.\nStyle: Soft romantic vintage film, breathtaking scale, 8K, extreme detail.\nAudio: A sweeping orchestral crescendo",
        "tags": [
          "Drone",
          "Environment",
          "Motion"
        ]
      },
      {
        "id": "vid-80",
        "title": "Drone Flythrough: A mystical creature",
        "description": "Expansive environmental storytelling.",
        "template": "Drone FPV shot flying through [ENVIRONMENT].\nSubject: A mystical creature situated in the environment, shattering into a thousand pieces.\nCamera: Continuous forward motion, soaring Dutch angle tilting slowly.\nStyle: Atmospheric fog-heavy gloom, breathtaking scale, 8K, extreme detail.\nAudio: Muffled underwater acoustics slowly clearing",
        "tags": [
          "Drone",
          "Environment",
          "Motion"
        ]
      },
      {
        "id": "vid-81",
        "title": "Macro Detail: An ancient artifact",
        "description": "Extreme close-up conveying texture and intimacy.",
        "template": "Extreme macro shot of An ancient artifact.\nAction: Slow-motion slowly disintegrating into dust.\nCamera: Dynamic tracking shot following from behind, extremely shallow depth of field, focused on [SPECIFIC DETAIL].\nStyle: Sun-drenched anamorphic, high contrast, tactile textures.\nAudio: Synthwave beat dropping into silence",
        "tags": [
          "Macro",
          "Details",
          "Slow-Mo"
        ]
      },
      {
        "id": "vid-82",
        "title": "Macro Detail: A neon-lit cityscape",
        "description": "Extreme close-up conveying texture and intimacy.",
        "template": "Extreme macro shot of A neon-lit cityscape.\nAction: Slow-motion colliding with intense force.\nCamera: Steady push-in to an extreme close-up, extremely shallow depth of field, focused on [SPECIFIC DETAIL].\nStyle: Ethereal high-key lighting, high contrast, tactile textures.\nAudio: Frantic percussion and rising strings",
        "tags": [
          "Macro",
          "Details",
          "Slow-Mo"
        ]
      },
      {
        "id": "vid-83",
        "title": "Macro Detail: A delicate blooming flower",
        "description": "Extreme close-up conveying texture and intimacy.",
        "template": "Extreme macro shot of A delicate blooming flower.\nAction: Slow-motion unfolding gracefully.\nCamera: Handheld shaky cam for intensity, extremely shallow depth of field, focused on [SPECIFIC DETAIL].\nStyle: Vibrant highly saturated pop, high contrast, tactile textures.\nAudio: Soft piano melody over rain sounds",
        "tags": [
          "Macro",
          "Details",
          "Slow-Mo"
        ]
      },
      {
        "id": "vid-84",
        "title": "Macro Detail: A diverse crowd of protesters",
        "description": "Extreme close-up conveying texture and intimacy.",
        "template": "Extreme macro shot of A diverse crowd of protesters.\nAction: Slow-motion pulsing with rhythmic light.\nCamera: Static wide shot with a deep focus, extremely shallow depth of field, focused on [SPECIFIC DETAIL].\nStyle: Soft romantic vintage film, high contrast, tactile textures.\nAudio: A sweeping orchestral crescendo",
        "tags": [
          "Macro",
          "Details",
          "Slow-Mo"
        ]
      },
      {
        "id": "vid-85",
        "title": "Macro Detail: A mystical creature",
        "description": "Extreme close-up conveying texture and intimacy.",
        "template": "Extreme macro shot of A mystical creature.\nAction: Slow-motion shattering into a thousand pieces.\nCamera: Dutch angle tilting slowly, extremely shallow depth of field, focused on [SPECIFIC DETAIL].\nStyle: Atmospheric fog-heavy gloom, high contrast, tactile textures.\nAudio: Muffled underwater acoustics slowly clearing",
        "tags": [
          "Macro",
          "Details",
          "Slow-Mo"
        ]
      },
      {
        "id": "vid-86",
        "title": "Macro Detail: An ancient artifact",
        "description": "Extreme close-up conveying texture and intimacy.",
        "template": "Extreme macro shot of An ancient artifact.\nAction: Slow-motion slowly disintegrating into dust.\nCamera: Dynamic tracking shot following from behind, extremely shallow depth of field, focused on [SPECIFIC DETAIL].\nStyle: Sun-drenched anamorphic, high contrast, tactile textures.\nAudio: Synthwave beat dropping into silence",
        "tags": [
          "Macro",
          "Details",
          "Slow-Mo"
        ]
      },
      {
        "id": "vid-87",
        "title": "Macro Detail: A neon-lit cityscape",
        "description": "Extreme close-up conveying texture and intimacy.",
        "template": "Extreme macro shot of A neon-lit cityscape.\nAction: Slow-motion colliding with intense force.\nCamera: Steady push-in to an extreme close-up, extremely shallow depth of field, focused on [SPECIFIC DETAIL].\nStyle: Ethereal high-key lighting, high contrast, tactile textures.\nAudio: Frantic percussion and rising strings",
        "tags": [
          "Macro",
          "Details",
          "Slow-Mo"
        ]
      },
      {
        "id": "vid-88",
        "title": "Macro Detail: A delicate blooming flower",
        "description": "Extreme close-up conveying texture and intimacy.",
        "template": "Extreme macro shot of A delicate blooming flower.\nAction: Slow-motion unfolding gracefully.\nCamera: Handheld shaky cam for intensity, extremely shallow depth of field, focused on [SPECIFIC DETAIL].\nStyle: Vibrant highly saturated pop, high contrast, tactile textures.\nAudio: Soft piano melody over rain sounds",
        "tags": [
          "Macro",
          "Details",
          "Slow-Mo"
        ]
      },
      {
        "id": "vid-89",
        "title": "Macro Detail: A diverse crowd of protesters",
        "description": "Extreme close-up conveying texture and intimacy.",
        "template": "Extreme macro shot of A diverse crowd of protesters.\nAction: Slow-motion pulsing with rhythmic light.\nCamera: Static wide shot with a deep focus, extremely shallow depth of field, focused on [SPECIFIC DETAIL].\nStyle: Soft romantic vintage film, high contrast, tactile textures.\nAudio: A sweeping orchestral crescendo",
        "tags": [
          "Macro",
          "Details",
          "Slow-Mo"
        ]
      },
      {
        "id": "vid-90",
        "title": "Macro Detail: A mystical creature",
        "description": "Extreme close-up conveying texture and intimacy.",
        "template": "Extreme macro shot of A mystical creature.\nAction: Slow-motion shattering into a thousand pieces.\nCamera: Dutch angle tilting slowly, extremely shallow depth of field, focused on [SPECIFIC DETAIL].\nStyle: Atmospheric fog-heavy gloom, high contrast, tactile textures.\nAudio: Muffled underwater acoustics slowly clearing",
        "tags": [
          "Macro",
          "Details",
          "Slow-Mo"
        ]
      },
      {
        "id": "vid-91",
        "title": "Macro Detail: An ancient artifact",
        "description": "Extreme close-up conveying texture and intimacy.",
        "template": "Extreme macro shot of An ancient artifact.\nAction: Slow-motion slowly disintegrating into dust.\nCamera: Dynamic tracking shot following from behind, extremely shallow depth of field, focused on [SPECIFIC DETAIL].\nStyle: Sun-drenched anamorphic, high contrast, tactile textures.\nAudio: Synthwave beat dropping into silence",
        "tags": [
          "Macro",
          "Details",
          "Slow-Mo"
        ]
      },
      {
        "id": "vid-92",
        "title": "Macro Detail: A neon-lit cityscape",
        "description": "Extreme close-up conveying texture and intimacy.",
        "template": "Extreme macro shot of A neon-lit cityscape.\nAction: Slow-motion colliding with intense force.\nCamera: Steady push-in to an extreme close-up, extremely shallow depth of field, focused on [SPECIFIC DETAIL].\nStyle: Ethereal high-key lighting, high contrast, tactile textures.\nAudio: Frantic percussion and rising strings",
        "tags": [
          "Macro",
          "Details",
          "Slow-Mo"
        ]
      },
      {
        "id": "vid-93",
        "title": "Macro Detail: A delicate blooming flower",
        "description": "Extreme close-up conveying texture and intimacy.",
        "template": "Extreme macro shot of A delicate blooming flower.\nAction: Slow-motion unfolding gracefully.\nCamera: Handheld shaky cam for intensity, extremely shallow depth of field, focused on [SPECIFIC DETAIL].\nStyle: Vibrant highly saturated pop, high contrast, tactile textures.\nAudio: Soft piano melody over rain sounds",
        "tags": [
          "Macro",
          "Details",
          "Slow-Mo"
        ]
      },
      {
        "id": "vid-94",
        "title": "Macro Detail: A diverse crowd of protesters",
        "description": "Extreme close-up conveying texture and intimacy.",
        "template": "Extreme macro shot of A diverse crowd of protesters.\nAction: Slow-motion pulsing with rhythmic light.\nCamera: Static wide shot with a deep focus, extremely shallow depth of field, focused on [SPECIFIC DETAIL].\nStyle: Soft romantic vintage film, high contrast, tactile textures.\nAudio: A sweeping orchestral crescendo",
        "tags": [
          "Macro",
          "Details",
          "Slow-Mo"
        ]
      },
      {
        "id": "vid-95",
        "title": "Macro Detail: A mystical creature",
        "description": "Extreme close-up conveying texture and intimacy.",
        "template": "Extreme macro shot of A mystical creature.\nAction: Slow-motion shattering into a thousand pieces.\nCamera: Dutch angle tilting slowly, extremely shallow depth of field, focused on [SPECIFIC DETAIL].\nStyle: Atmospheric fog-heavy gloom, high contrast, tactile textures.\nAudio: Muffled underwater acoustics slowly clearing",
        "tags": [
          "Macro",
          "Details",
          "Slow-Mo"
        ]
      },
      {
        "id": "vid-96",
        "title": "Macro Detail: An ancient artifact",
        "description": "Extreme close-up conveying texture and intimacy.",
        "template": "Extreme macro shot of An ancient artifact.\nAction: Slow-motion slowly disintegrating into dust.\nCamera: Dynamic tracking shot following from behind, extremely shallow depth of field, focused on [SPECIFIC DETAIL].\nStyle: Sun-drenched anamorphic, high contrast, tactile textures.\nAudio: Synthwave beat dropping into silence",
        "tags": [
          "Macro",
          "Details",
          "Slow-Mo"
        ]
      },
      {
        "id": "vid-97",
        "title": "Macro Detail: A neon-lit cityscape",
        "description": "Extreme close-up conveying texture and intimacy.",
        "template": "Extreme macro shot of A neon-lit cityscape.\nAction: Slow-motion colliding with intense force.\nCamera: Steady push-in to an extreme close-up, extremely shallow depth of field, focused on [SPECIFIC DETAIL].\nStyle: Ethereal high-key lighting, high contrast, tactile textures.\nAudio: Frantic percussion and rising strings",
        "tags": [
          "Macro",
          "Details",
          "Slow-Mo"
        ]
      },
      {
        "id": "vid-98",
        "title": "Macro Detail: A delicate blooming flower",
        "description": "Extreme close-up conveying texture and intimacy.",
        "template": "Extreme macro shot of A delicate blooming flower.\nAction: Slow-motion unfolding gracefully.\nCamera: Handheld shaky cam for intensity, extremely shallow depth of field, focused on [SPECIFIC DETAIL].\nStyle: Vibrant highly saturated pop, high contrast, tactile textures.\nAudio: Soft piano melody over rain sounds",
        "tags": [
          "Macro",
          "Details",
          "Slow-Mo"
        ]
      },
      {
        "id": "vid-99",
        "title": "Macro Detail: A diverse crowd of protesters",
        "description": "Extreme close-up conveying texture and intimacy.",
        "template": "Extreme macro shot of A diverse crowd of protesters.\nAction: Slow-motion pulsing with rhythmic light.\nCamera: Static wide shot with a deep focus, extremely shallow depth of field, focused on [SPECIFIC DETAIL].\nStyle: Soft romantic vintage film, high contrast, tactile textures.\nAudio: A sweeping orchestral crescendo",
        "tags": [
          "Macro",
          "Details",
          "Slow-Mo"
        ]
      },
      {
        "id": "vid-100",
        "title": "Macro Detail: A mystical creature",
        "description": "Extreme close-up conveying texture and intimacy.",
        "template": "Extreme macro shot of A mystical creature.\nAction: Slow-motion shattering into a thousand pieces.\nCamera: Dutch angle tilting slowly, extremely shallow depth of field, focused on [SPECIFIC DETAIL].\nStyle: Atmospheric fog-heavy gloom, high contrast, tactile textures.\nAudio: Muffled underwater acoustics slowly clearing",
        "tags": [
          "Macro",
          "Details",
          "Slow-Mo"
        ]
      }
    ]
  }
];
