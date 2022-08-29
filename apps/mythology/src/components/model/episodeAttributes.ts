export type EpisodeAttributes = {
  Capa?: any | undefined;
  Descricao: string;
  Participantes: Array<any> | undefined;
  Titulo: string;
  Transcricao: string;
  audio: any | undefined;
  createdAt: any;
  publisheddAt: any;
  spotify: string;
  updatedAt: any;
  youtube: string;
  NumeroEpisodio: string;

  links: Link[];
};

export interface Link {
  url: string;
  text: string;
}
