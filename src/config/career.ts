// career
export type CareerItemType = {
    company: string
    title: string
    image?: string
    logo: string
    start: string
    end: string
  }
  
export const careerList: Array<CareerItemType> = [
    {
      company: '颖川世家',
      title: '影视后期',
      logo: 'college',
      start: '2024-04-01',
      end: 'Present'
    },
    {
      company: '龙炎传媒',
      title: '影视后期',
      logo: 'coffee',
      start: '2023-04-01',
      end: '2024-03-31'
    },
  ]