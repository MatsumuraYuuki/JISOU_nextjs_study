export type QiitaResponse = {
  id: string;
  url: string;
  title: string;
  image: string;
}

type MicroCMSContent = {
  id: string;
  title: string;
  eyecatch: {
    url: string;
  }
}

export type MicroCMSResponse = {
  contents: MicroCMSContent[];
}