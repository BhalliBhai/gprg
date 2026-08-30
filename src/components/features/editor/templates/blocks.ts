import { SKILL_LABELS, SKILL_ICONS,} from '../data/skills';
import { getBrandColor, getContrastingLogoColor } from '../data/brand-colors';

export const escapeHtml = (value: string) =>
  value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');

export const escapeBadgeLabel = (value: string) =>
  encodeURIComponent(value.replaceAll('-', '--').replaceAll('_', '__'));

export const stripLeadingAt = (value: string) => value.trim().replace(/^@+/, '');
export const sanitizeGithubUsername = (value: string) => stripLeadingAt(value).replace(/[^a-zA-Z0-9-]/g, '');

const normalizeWebsite = (value: string) => {
  const trimmed = value.trim();
  if (!trimmed) return '';
  return trimmed.startsWith('http') ? trimmed : `https://${trimmed}`;
};

const ensureSegment = (value: string, removePrefix: string) => {
  const trimmed = value.trim();
  return trimmed.startsWith(removePrefix) ? trimmed.slice(removePrefix.length) : trimmed;
};

const staticBadge = (label: string, logo: string, value: string) => {
  if (!value) return '';
  return `<img src="https://img.shields.io/badge/${escapeBadgeLabel(label)}-102216?style=for-the-badge&logo=${logo}&logoColor=11d452" alt="${escapeHtml(label)}"/>`;
};

const socialBadge = (label: string, logo: string, href: string) => {
  if (!href) return '';
  return `[<img src="https://img.shields.io/badge/${escapeBadgeLabel(label)}-102216?style=for-the-badge&logo=${logo}&logoColor=11d452"/>](${href})`;
};

export const buildSocialLinks = (state: import('../types').EditorState) => {
  const website = normalizeWebsite(state.profile.website);
  const github = sanitizeGithubUsername(state.profile.github);
  const linkedin = ensureSegment(stripLeadingAt(state.profile.linkedin), 'in/');
  const twitter = stripLeadingAt(state.profile.twitter);
  const instagram = stripLeadingAt(state.profile.instagram);
  const threads = stripLeadingAt(state.profile.threads);
  const youtube = stripLeadingAt(state.profile.youtube);
  const twitch = stripLeadingAt(state.profile.twitch);
  const email = state.profile.email.trim();
  const discord = stripLeadingAt(state.profile.discord);


  return [
    socialBadge('Website', 'aboutdotme', website),
    socialBadge('GitHub', 'github', github ? `https://github.com/${github}` : ''),
    socialBadge('LinkedIn', 'linkedin', linkedin ? `https://linkedin.com/in/${linkedin}` : ''),
    socialBadge('Twitter', 'x', twitter ? `https://twitter.com/${twitter}` : ''),
    socialBadge('Email', 'gmail', email ? `mailto:${email}` : ''),
    socialBadge('Instagram', 'instagram', instagram ? `https://instagram.com/${instagram}` : ''),
    socialBadge('Threads', 'threads', threads ? `https://threads.net/@${threads}` : ''),
    socialBadge('YouTube', 'youtube', youtube ? `https://youtube.com/@${youtube}` : ''),
    socialBadge('Twitch', 'twitch', twitch ? `https://twitch.tv/${twitch}` : ''),
    staticBadge('Discord', 'discord', discord),
  ].filter(Boolean);
};

const FALLBACK_BADGE_COLOR = '102216';
const FALLBACK_LOGO_COLOR = '11d452';

export const buildSkillBadges = (skills: string[]) =>
  skills.map((skillId) => {
    const label = SKILL_LABELS[skillId] || skillId;
    const icon = SKILL_ICONS[skillId] || skillId;
    const brandColor = getBrandColor(icon);
    const badgeColor = brandColor ?? FALLBACK_BADGE_COLOR;
    const logoColor = brandColor ? getContrastingLogoColor(brandColor) : FALLBACK_LOGO_COLOR;
    return `  <img src="https://img.shields.io/badge/${escapeBadgeLabel(label)}-${badgeColor}?style=for-the-badge&logo=${encodeURIComponent(icon)}&logoColor=${logoColor}" alt="${escapeHtml(label)}"/>`;
  });

const themeParam = (theme: string) =>
  theme !== 'transparent' && theme !== 'default'
    ? `&theme=${theme}`
    : '&bg_color=00000000&hide_border=true&title_color=11d452&icon_color=11d452';

export const statsWidget = (user: string, theme: string) =>
  `<img src="https://github-readme-stats-eight-theta.vercel.app/api?username=${user}&show_icons=true${themeParam(theme)}" alt="GitHub Stats" />`;

export const langsWidget = (user: string, theme: string) =>
  `<img src="https://github-readme-stats-eight-theta.vercel.app/api/top-langs/?username=${user}&layout=compact${themeParam(theme)}" alt="Top Languages" />`;

export const streakWidget = (user: string, theme: string) =>
  `<img src="https://github-readme-streak-stats.herokuapp.com/?user=${user}${themeParam(theme)}" alt="GitHub Streak" />`;

export const graphWidget = (user: string) =>
  `<img src="https://github-readme-activity-graph.vercel.app/graph?username=${user}&bg_color=102216&color=11d452&line=11d452&point=11d452&area=true&hide_border=true" alt="Activity Graph" />`;

export const trophiesWidget = (user: string, theme: string) =>
  `<img src="https://github-profile-trophy-mu.vercel.app/?username=${user}&theme=${theme === 'transparent' ? 'radical' : theme}&no-frame=true&no-bg=true&margin-w=15" alt="GitHub Trophies" />`;

export const visitorBadge = (user: string) =>
  `<img src="https://komarev.com/ghpvc/?username=${user}&color=11d452&style=for-the-badge" alt="Visitor Badge" />`;

// Animated gradient banner header - capsule-render is a widely used, actively
// maintained free service (hosted on Vercel), same category of dependency as
// the stats widgets above.
export const capsuleBanner = (text: string, opts: { type?: string; height?: number; fontColor?: string } = {}) => {
  const { type = 'waving', height = 200, fontColor = 'ffffff' } = opts;
  return `<img src="https://capsule-render.vercel.app/api?type=${type}&color=0:11d452,100:0d1117&height=${height}&section=header&text=${encodeURIComponent(text)}&fontSize=40&fontColor=${fontColor}&animation=fadeIn" width="100%" alt="banner" />`;
};

// Animated typing tagline - readme-typing-svg, also a widely used free service.
export const typingSvg = (lines: string[], opts: { width?: number } = {}) => {
  const { width = 480 } = opts;
  const encodedLines = lines.map(encodeURIComponent).join(';');
  return `<img src="https://readme-typing-svg.demolab.com/?font=Fira+Code&size=22&pause=1000&color=11D452&center=true&vCenter=true&width=${width}&lines=${encodedLines}" alt="Typing SVG" />`;
};