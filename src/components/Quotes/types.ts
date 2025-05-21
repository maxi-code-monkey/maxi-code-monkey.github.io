export interface Quote {
  name: string;
  quote: Array<string>;
  position: string;
  linkedinProfileUrl: string;
  image: string;
};

export interface QuoteProps extends Quote {};

export interface QuoteListProps {
  quotes: Array<Quote>;
};