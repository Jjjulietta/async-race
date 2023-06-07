type ParamType = HTMLElement | null;
/* function identifier(param:ParamType): void {
  param;
  if(param instanceof HTMLElement) {
    param;
  }
} */
type ParamLi = HTMLLIElement | null;
type Sourse = {
    [key: string]: string;
};

type DataNews = {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: Sourse;
    title: string;
    url: string;
    urlToImage: string;
};

export { ParamType, ParamLi, DataNews };
