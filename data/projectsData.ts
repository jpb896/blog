interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  
  {
    title: 'jpbROM/hueOS',
    description: `An open source Android-based custom firmware. Available for the AVD and select Pixels.`,
    imgSrc: '/static/images/jpb.jpg',
    href: '/blog/hueos-intro',
  },
  {
    title: 'UTE UWP',
    description: `A modern, lightweight text editor built to help you get things done.`,
    imgSrc: '/static/images/jpb.jpb',
    href: 'https://www.github.com/errortek/UltraTextEdit-UWP',
  },
]

export default projectsData
