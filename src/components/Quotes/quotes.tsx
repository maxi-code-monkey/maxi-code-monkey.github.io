import { Quote } from "./types";
import FerminImg from '../../assets/img/quotes-fermin-molinuevo.jpeg';
// import MartinImg from '../../assets/img/quotes-martin-villalba.jpeg';

const ReferenceQuotes: Array<Quote> = [
  {
    name: 'Fermin Molinuevo',
    quote: [
      'I had the pleasure of working with Maxi on the AMEXeception team, where he contributed as a front-end developer. -',
      'He is an outstanding professional, proactive, responsible, and highly independent. Maxi consistently keeps the business context in mind and delivers thoughtful, strategic solutions. A true asset to any team.'
    ],
    image: FerminImg,
    linkedinProfileUrl: 'https://www.linkedin.com/in/ferm%C3%ADn-molinuevo-76023b67/',
    position: '~ SR Elixir Developer / Tech Lead',
  },
  // {
  //   name: 'Pablo Bonillo',
  //   quote: [
  //     'Some Random Quote'
  //   ],
  //   image: FerminImg,
  //   linkedinProfileUrl: '',
  //   position: 'SR Frontend Developer (React)',
  // },
  // {
  //   name: 'Martin Villalba',
  //   quote: [
  //     'Aguante la birrrrraaa!!'
  //   ],
  //   image: MartinImg,
  //   linkedinProfileUrl: '',
  //   position: 'SR Backend Developer (Ruby)',
  // },
];

export { ReferenceQuotes };