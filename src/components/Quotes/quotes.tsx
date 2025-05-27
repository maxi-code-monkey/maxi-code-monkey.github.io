import { Quote } from "./types";
import FerminImg from '../../assets/img/quotes-fermin-molinuevo.jpeg';
import MartinImg from '../../assets/img/quotes-martin-villalba.jpeg';
import PabloImg from '../../assets/img/quotes-pablo-bonillo.jpeg';

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
  {
    name: 'Pablo Bonillo',
    quote: [
      "Working with Maxi is easy, and I think that's the best thing that you can expect from a colleague",
      "He has both great technical and communication skills, he answers fast and delivers precise and efficient solutions and he also provides great feedback to other teammates ideas, he is both a great team player and a great teacher.",
      "I actually learned many things working with him, he is definitely a great addition to any serious development team"
    ],
    image: PabloImg,
    linkedinProfileUrl: 'https://www.linkedin.com/in/pablo-andr%C3%A9s-bonillo-a07a05187/',
    position: '~ SR Frontend Developer (React)',
  },
  {
    name: 'Martin Villalba',
    quote: [
      '~ This referral has been requested and is being worked on ~'
    ],
    image: MartinImg,
    linkedinProfileUrl: 'https://www.linkedin.com/in/14tinchov/',
    position: 'SR Backend Developer (Ruby)',
  },
];

export { ReferenceQuotes };