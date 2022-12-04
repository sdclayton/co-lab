export class JobPosting {
  constructor(
    public category: string,

    // public company.name,
    // public levels[0].name,
    // public locations[0].name,
    // public refs.landing_page,

    public company: string,
    public level: string,
    public location: string,
    public refs: string
  ) {}
}


export interface jobPostingItem {
  contents:         string;
  name:             string;
  type:             string;
  publication_date: Date;
  short_name:       string;
  model_type:       string;
  id:               number;
  locations:        Category[];
  categories:       Category[];
  levels:           Level[];
  tags:             any[];
  refs:             Refs;
  company:          Company;
}

export interface Category {
  name: string;
}

export interface Company {
  id:         number;
  short_name: string;
  name:       string;
}

export interface Level {
  name:       string;
  short_name: string;
}

export interface Refs {
  landing_page: string;
}
