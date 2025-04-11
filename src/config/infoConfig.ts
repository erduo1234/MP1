export * from './projects'
export * from './education'
export * from './career'

// personal info
export const name = 'Wick su'
export const headline = '苏炯源'
export const introduction =
  "我是东莞本地人，我从事影视后期这个行业已经三年"
export const email = 'erudok@163.com'
export const githubUsername = 'erduo1234'

// about page
export const aboutMeHeadline = 'Who i am and Why Should you Care?'
export const aboutParagraphs = [
  "我熟练的掌握各种影视技能，包括但不限于剪辑，调色，特效，3d特效.",
  '可以使用blender进行建模，特效制作.',
  "I started this blog to share the insights I learn every day. Most blogs focus on education in Artificial Intelligence and general computer science, while others share the life lessons I've learned.",
]

// blog
export const blogHeadLine = "What I've thinking about."
export const blogIntro =
  "I've written something about AI, programming and life."

// social links
export type SocialLinkType = {
  name: string
  ariaLabel?: string
  icon: string
  href: string
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'Tiktok',
    icon: 'tiktok',
    href: 'https://www.douyin.com/user/self?from_tab_name=main',
  },
  {
    name: 'Bilibili',
    icon: 'bilibili',
    href: 'https://space.bilibili.com/362036538',
  },
]

// https://simpleicons.org/
export const techIcons = [
  'typescript',
  'javascript',
  'supabase',
  'cloudflare',
  'java',
  'oracle',
  'mysql',
  'react',
  'nodedotjs',
  'nextdotjs',
  'prisma',
  'postgresql',
  'nginx',
  'vercel',
  'docker',
  'git',
  'github',
  'visualstudiocode',
  'androidstudio',
  'ios',
  'apple',
  'wechat',
]
