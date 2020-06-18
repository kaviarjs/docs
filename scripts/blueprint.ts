export interface IElement {
  id: string;
  title: string;
  package?: string;
}

export interface ElementMap {
  [key: string]: IElement[];
}

export const map: ElementMap = {
  Framework: [
    {
      id: "introduction",
      title: "Introduction",
    },
    {
      id: "core",
      title: "Core",
      package: "core",
    },
    {
      id: "database",
      title: "Database",
      package: "mongo-bundle",
    },
  ],
};
