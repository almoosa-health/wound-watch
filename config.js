/* ─────────────────────────────────────────────────────────────
   WOUND WATCH — configuration
   This is the ONLY file you need to edit.
   1) Paste your Apps Script Web app URL (ends in /exec)
   2) Paste your API token (must match API_TOKEN in Code.gs)
   Lists below (facilities, units, sites…) can be edited any time —
   the pages read them live, no other code changes needed.
   ───────────────────────────────────────────────────────────── */

const WW_CONFIG = {
  API_URL: "https://script.google.com/macros/s/AKfycbzAGsE6i0HLdtA9JXoVRUAS7jvZMKxLlnivy1mjF01OctBLQQ5blxaU8lxnfxJi0TvH/exec",
  API_TOKEN: "98FG81fmlvLbm8BBcNcalgEL5IPUvkhXylLmm2Hq",

  /* Microsoft Entra (Azure AD) sign-in */
  AZURE: {
    CLIENT_ID: "219fd90f-4c4b-474d-ae7d-a17f71ecc511",
    TENANT_ID: "1bbc68f6-abcf-4283-92d7-5bb0a7c3c84b",
  },

  /* Accounts from these domains may sign in */
  ALLOWED_DOMAINS: ["almoosahospital.com.sa", "almoosahealth.com.sa"],

  APP_NAME: "Wound Care Referral",
  TAGLINE: "Scan · Snap · Send — under 60 seconds",

  FACILITIES: ["ASH", "ARH"],

  UNITS_BY_FACILITY: {
    ASH: [
      "SICU", "MICU", "CCU",
      "Medical Oncology – 9th floor NT",
      "Orthopedics – 10th floor NT",
      "Bariatric unit – 11th floor NT",
      "General Medical unit – 12th floor NT",
      "General Medical Surgical unit – 13th floor NT",
      "General Medical Surgical unit – 14th floor NT",
      "General Medical Surgical unit – 15th floor NT",
      "Pediatrics unit", "PICU", "NICU", "Other",
    ],
    ARH: [
      "RICU",
      "LTC Level 3", "LTC Level 5", "LTC Level 6", "LTC Level 7", "LTC Level 8",
      "Medical unit – 9th floor",
      "Mental Health unit",
      "PLTC",
      "Adult Rehabilitation unit – 13th floor",
      "Adult Rehabilitation unit – 14th floor",
      "Other",
    ],
  },

  LOCATIONS: [
    "Sacrum", "Coccyx", "Ischium (L)", "Ischium (R)",
    "Trochanter (L)", "Trochanter (R)", "Heel (L)", "Heel (R)",
    "Malleolus (L)", "Malleolus (R)", "Occiput",
    "Ear (L)", "Ear (R)",
    "Elbow (L)", "Elbow (R)", "Scapula", "Spine",
    "Knee (L)", "Knee (R)", "Foot (L)", "Foot (R)",
    "Buttock (L)", "Buttock (R)",
  ],

  STAGES: ["Stage 1", "Stage 2", "Stage 3", "Stage 4", "Unstageable", "DTI", "Not sure"],

  REASONS: [
    "New admission",
    "Transfer from another unit/facility",
    "New skin issue",
    "Deteriorated skin issue",
    "Dressing advice",
    "Other",
  ],

  STAGE_TIPS: {
    "Stage 1": {
      title: "Stage 1 — intact red skin",
      steps: [
        "Apply a barrier / skin protectant spray every 24–72 hours as per tip sheet.",
        "Offload the area and reposition every 2 hours.",
        "Keep skin clean and dry — treat any incontinence promptly.",
      ],
    },
    "Stage 2": {
      title: "Stage 2 — partial-thickness / open blister",
      steps: [
        "Clean gently with normal saline.",
        "Apply a plant-sterol based wound cream, cover with a paraffin / non-adherent contact layer.",
        "Cover with a transparent film or a light foam / hypafix; leave in place 24–48 hours.",
      ],
    },
    "Stage 3": {
      title: "Stage 3 — full-thickness, fat visible",
      steps: [
        "Clean with normal saline.",
        "If clean: honey-based or plant-sterol cream + paraffin contact layer.",
        "If sloughy / infected-looking: silver alginate or antimicrobial cream + paraffin.",
        "Cover with an absorbent secondary dressing based on drainage; change BID or as needed.",
      ],
    },
    "Stage 4": {
      title: "Stage 4 — muscle / bone / tendon visible",
      steps: [
        "Clean with normal saline; do NOT probe deep tissue.",
        "Loosely pack any cavity with saline / antimicrobial-moistened gauze — never tightly.",
        "Cover with an absorbent secondary dressing; keep peri-wound skin protected.",
        "Escalate: wound care nurse will assess for debridement / MDT referral.",
      ],
    },
    "Unstageable": {
      title: "Unstageable — wound base obscured by slough / eschar",
      steps: [
        "Do NOT remove eschar at bedside.",
        "On heels with dry, stable eschar: paint with an antiseptic 1–2 times daily and keep dry — avoid occlusive dressings.",
        "Elsewhere or if soft / draining: cover with an antimicrobial dressing and keep peri-wound skin protected.",
      ],
    },
    "DTI": {
      title: "Deep Tissue Injury (DTPI) — purple / maroon intact or blistered skin",
      steps: [
        "Offload immediately and reposition every 2 hours.",
        "Apply a plant-sterol or honey-based cream to the intact area; cover with a soft silicone / foam dressing.",
        "Monitor closely — DTPI can evolve rapidly.",
      ],
    },
    "Not sure": {
      title: "Not sure of the stage",
      steps: [
        "Clean gently with normal saline and cover with a non-adherent dressing until the wound care nurse assesses.",
        "Take a photo (per unit policy) so the nurse can review.",
      ],
    },
  },

  MEASUREMENT_REMINDER:
    "Don't forget to take measurements: length, width, depth, tunneling and undermining if present.",
};
