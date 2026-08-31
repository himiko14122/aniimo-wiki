// Game-specific data for Aniimo
// Color maps, entity structures, and tier utilities

/* ──────────────── Color Maps ──────────────── */
export const TIER_COLOR_MAP: Record<string, string> = {
  S: 'var(--color-tier-s)',
  A: 'var(--color-tier-a)',
  B: 'var(--color-tier-b)',
  C: 'var(--color-tier-c)',
};
export const TIER_COLOR_DEFAULT = 'var(--color-tier-c)';

export function tierColor(tier: string): string {
  return TIER_COLOR_MAP[tier] ?? TIER_COLOR_DEFAULT;
}

/* ──────────────── Creature Types (homepage Table 1) ──────────────── */
export interface UnitEntry {
  id: string;
  nameKey: string;
  roleKey: string;
  elementKey: string;
  trendKey: string;
  tier: string;
}

export const UNITS: UnitEntry[] = [
  { id: 'meadow', nameKey: 'unit_0_name', roleKey: 'unit_0_role', elementKey: 'unit_0_element', trendKey: 'unit_0_trend', tier: 'C' },
  { id: 'forest', nameKey: 'unit_1_name', roleKey: 'unit_1_role', elementKey: 'unit_1_element', trendKey: 'unit_1_trend', tier: 'B' },
  { id: 'peak', nameKey: 'unit_2_name', roleKey: 'unit_2_role', elementKey: 'unit_2_element', trendKey: 'unit_2_trend', tier: 'A' },
  { id: 'legend', nameKey: 'unit_3_name', roleKey: 'unit_3_role', elementKey: 'unit_3_element', trendKey: 'unit_3_trend', tier: 'S' },
];

/* ──────────────── Twine Forms (homepage Cards 1) ──────────────── */
export interface TraitEntry {
  id: string;
  nameKey: string;
  rarityKey: string;
  effectKey: string;
  bestKey: string;
  tier: string;
}

export const TRAITS: TraitEntry[] = [
  { id: 'glide', nameKey: 'trait_0_name', rarityKey: 'trait_0_rarity', effectKey: 'trait_0_effect', bestKey: 'trait_0_best', tier: 'A' },
  { id: 'dive', nameKey: 'trait_1_name', rarityKey: 'trait_1_rarity', effectKey: 'trait_1_effect', bestKey: 'trait_1_best', tier: 'A' },
  { id: 'burrow', nameKey: 'trait_2_name', rarityKey: 'trait_2_rarity', effectKey: 'trait_2_effect', bestKey: 'trait_2_best', tier: 'B' },
  { id: 'combat', nameKey: 'trait_3_name', rarityKey: 'trait_3_rarity', effectKey: 'trait_3_effect', bestKey: 'trait_3_best', tier: 'S' },
];

/* ──────────────── Multiplayer Modes (homepage Table 2) ──────────────── */
export interface ModeEntry {
  id: string;
  nameKey: string;
  focusKey: string;
  bestKey: string;
  tier: string;
}

export const MODES: ModeEntry[] = [
  { id: 'coop', nameKey: 'mode_0_name', focusKey: 'mode_0_focus', bestKey: 'mode_0_best', tier: 'S' },
  { id: 'pvp', nameKey: 'mode_1_name', focusKey: 'mode_1_focus', bestKey: 'mode_1_best', tier: 'A' },
  { id: 'eggheist', nameKey: 'mode_2_name', focusKey: 'mode_2_focus', bestKey: 'mode_2_best', tier: 'S' },
  { id: 'trading', nameKey: 'mode_3_name', focusKey: 'mode_3_focus', bestKey: 'mode_3_best', tier: 'B' },
];

/* ──────────────── Evolution Paths (homepage Cards 2) ──────────────── */
export interface EvolutionEntry {
  id: string;
  nameKey: string;
  sourceKey: string;
  useKey: string;
  tier: string;
}

export const EVOLUTIONS: EvolutionEntry[] = [
  { id: 'level', nameKey: 'evo_0_name', sourceKey: 'evo_0_source', useKey: 'evo_0_use', tier: 'A' },
  { id: 'item', nameKey: 'evo_1_name', sourceKey: 'evo_1_source', useKey: 'evo_1_use', tier: 'S' },
  { id: 'conditional', nameKey: 'evo_2_name', sourceKey: 'evo_2_source', useKey: 'evo_2_use', tier: 'B' },
  { id: 'trade', nameKey: 'evo_3_name', sourceKey: 'evo_3_source', useKey: 'evo_3_use', tier: 'B' },
];

/* ──────────────── Sidebar Codes ──────────────── */
export interface SidebarCode {
  code: string;
  reward: string;
}

// Aniimo has no code redemption system (base_info.mdx sidebarCodes placeholder).
export const SIDEBAR_CODES: SidebarCode[] = [
  { code: 'None', reward: 'No active codes yet. Check back soon!' },
];

/* ──────────────── Footer Data ──────────────── */
export const FOOTER_DATA = {
  officialDiscordUrl: 'https://discord.com/invite/aniimo',
  officialYoutubeUrl: 'https://www.youtube.com/@Aniimo_EN',
  communityTool: { label: 'Community', href: '' },
} as const;
