import {
  BookOpen, PawPrint, BarChart3, TrendingUp, Link2, Egg, Tent, Users, MapPin, Newspaper,
  Sparkles, Rocket, ShieldCheck, Layers,
  type LucideIcon,
} from 'lucide-react';

export interface StatConfig {
  val: string;
  labelKey: string;
}

export interface ModuleCardConfig {
  key: string;
  labelKey: string;
  titleKey: string;
  descKey: string;
  href: string;
  stats: StatConfig[];
  icon: LucideIcon;
  ctaKey?: string;
}

export interface GameFeatureConfig {
  titleKey: string;
  descKey: string;
  icon: LucideIcon;
}

export interface StartHereStepConfig {
  titleKey: string;
  descKey: string;
  href: string;
}

export interface HeroCtaConfig {
  labelKey: string;
  href: string;
  style: 'primary' | 'secondary';
}

export const HOME_CONFIG = {
  hero: {
    // Official Aniimo launch trailer — verified in research_report.md §2 (JOuWSb2S_Eg, author Aniimo)
    videoId: 'JOuWSb2S_Eg',
    badgeKeys: [
      'home_hero_badge_free',
      'home_hero_badge_launch',
      'home_hero_badge_world',
      'home_hero_badge_collect',
      'home_hero_badge_crossplay',
    ],
    ctas: [
      { labelKey: 'home_hero_cta_guides', href: '/guides', style: 'primary' as const },
      { labelKey: 'home_hero_cta_twine', href: '/twine', style: 'secondary' as const },
      { labelKey: 'home_hero_cta_eggHeist', href: '/egg-heist', style: 'secondary' as const },
    ],
  },

  moduleCards: [
    { key: 'guides', labelKey: 'home_module_guides', titleKey: 'home_module_guides_title', descKey: 'home_module_guides_desc', href: '/guides', stats: [{ val: '__guideCount', labelKey: 'home_module_guides_stat1' }, { val: 'F2P', labelKey: 'home_module_guides_stat2' }], icon: BookOpen, ctaKey: 'home_module_guides_cta' },
    { key: 'creatures', labelKey: 'home_module_creatures', titleKey: 'home_module_creatures_title', descKey: 'home_module_creatures_desc', href: '/creatures', stats: [{ val: '100+', labelKey: 'home_module_creatures_stat1' }, { val: 'Idyll', labelKey: 'home_module_creatures_stat2' }], icon: PawPrint, ctaKey: 'home_module_creatures_cta' },
    { key: 'tier-list', labelKey: 'home_module_tierList', titleKey: 'home_module_tierList_title', descKey: 'home_module_tierList_desc', href: '/tier-list', stats: [{ val: 'S-A', labelKey: 'home_module_tierList_stat1' }, { val: 'Meta', labelKey: 'home_module_tierList_stat2' }], icon: BarChart3, ctaKey: 'home_module_tierList_cta' },
    { key: 'evolution', labelKey: 'home_module_evolution', titleKey: 'home_module_evolution_title', descKey: 'home_module_evolution_desc', href: '/evolution', stats: [{ val: 'Many', labelKey: 'home_module_evolution_stat1' }, { val: 'Evolve', labelKey: 'home_module_evolution_stat2' }], icon: TrendingUp, ctaKey: 'home_module_evolution_cta' },
    { key: 'twine', labelKey: 'home_module_twine', titleKey: 'home_module_twine_title', descKey: 'home_module_twine_desc', href: '/twine', stats: [{ val: 'Any', labelKey: 'home_module_twine_stat1' }, { val: 'Form', labelKey: 'home_module_twine_stat2' }], icon: Link2, ctaKey: 'home_module_twine_cta' },
    { key: 'egg-heist', labelKey: 'home_module_eggHeist', titleKey: 'home_module_eggHeist_title', descKey: 'home_module_eggHeist_desc', href: '/egg-heist', stats: [{ val: '3v3', labelKey: 'home_module_eggHeist_stat1' }, { val: 'PvEvP', labelKey: 'home_module_eggHeist_stat2' }], icon: Egg, ctaKey: 'home_module_eggHeist_cta' },
    { key: 'homeland', labelKey: 'home_module_homeland', titleKey: 'home_module_homeland_title', descKey: 'home_module_homeland_desc', href: '/homeland', stats: [{ val: 'RV', labelKey: 'home_module_homeland_stat1' }, { val: 'Crops', labelKey: 'home_module_homeland_stat2' }], icon: Tent, ctaKey: 'home_module_homeland_cta' },
    { key: 'multiplayer', labelKey: 'home_module_multiplayer', titleKey: 'home_module_multiplayer_title', descKey: 'home_module_multiplayer_desc', href: '/multiplayer', stats: [{ val: 'Co-op', labelKey: 'home_module_multiplayer_stat1' }, { val: 'PvP', labelKey: 'home_module_multiplayer_stat2' }], icon: Users, ctaKey: 'home_module_multiplayer_cta' },
    { key: 'locations', labelKey: 'home_module_locations', titleKey: 'home_module_locations_title', descKey: 'home_module_locations_desc', href: '/locations', stats: [{ val: 'Idyll', labelKey: 'home_module_locations_stat1' }, { val: 'Isles', labelKey: 'home_module_locations_stat2' }], icon: MapPin, ctaKey: 'home_module_locations_cta' },
    { key: 'updates', labelKey: 'home_module_updates', titleKey: 'home_module_updates_title', descKey: 'home_module_updates_desc', href: '/updates', stats: [{ val: 'Sep 15', labelKey: 'home_module_updates_stat1' }, { val: 'Launch', labelKey: 'home_module_updates_stat2' }], icon: Newspaper, ctaKey: 'home_module_updates_cta' },
  ] as ModuleCardConfig[],

  gameFeatures: [
    { titleKey: 'home_feature_twine', descKey: 'home_feature_twine_desc', icon: Link2 },
    { titleKey: 'home_feature_catching', descKey: 'home_feature_catching_desc', icon: Sparkles },
    { titleKey: 'home_feature_eggHeist', descKey: 'home_feature_eggHeist_desc', icon: ShieldCheck },
    { titleKey: 'home_feature_homeland', descKey: 'home_feature_homeland_desc', icon: Rocket },
  ] as GameFeatureConfig[],

  startHereSteps: [
    { titleKey: 'home_start_1_title', descKey: 'home_start_1_desc', href: '/guides' },
    { titleKey: 'home_start_2_title', descKey: 'home_start_2_desc', href: '/creatures' },
    { titleKey: 'home_start_3_title', descKey: 'home_start_3_desc', href: '/twine' },
    { titleKey: 'home_start_4_title', descKey: 'home_start_4_desc', href: '/evolution' },
    { titleKey: 'home_start_5_title', descKey: 'home_start_5_desc', href: '/egg-heist' },
  ] as StartHereStepConfig[],

  gameOverview: {
    infoItems: ['developer', 'publisher', 'genre', 'platform', 'price', 'release', 'modes', 'signature'],
    cta: {
      guideLabelKey: 'home_about_cta',
      guideHref: '/guides',
      externalLabelKey: 'home_cta_website',
      externalLinkKey: 'website',
    },
  },

  faq: {
    keys: ['twine', 'catching', 'evolution', 'eggHeist', 'platforms', 'f2p'],
  },

  bottomCta: {
    guideHref: '/guides',
    guideLabelKey: 'home_cta_guide',
    externalLinkKey: 'website',
    externalLabelKey: 'home_cta_website',
  },
};
