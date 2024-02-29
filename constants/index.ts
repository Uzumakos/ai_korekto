export const navLinks = [
  {
    label: "Akèy",
    route: "/",
    icon: "/assets/icons/home.svg",
  },
  {
    label: "Restore Imaj",
    route: "/transformations/add/restore",
    icon: "/assets/icons/image.svg",
  },
  {
    label: "Generative Fill",
    route: "/transformations/add/fill",
    icon: "/assets/icons/stars.svg",
  },
  {
    label: "Retire objè",
    route: "/transformations/add/remove",
    icon: "/assets/icons/scan.svg",
  },
  {
    label: "Chanje koulè",
    route: "/transformations/add/recolor",
    icon: "/assets/icons/filter.svg",
  },
  {
    label: "Retire fon imaj",
    route: "/transformations/add/removeBackground",
    icon: "/assets/icons/camera.svg",
  },
  {
    label: "Pwofil",
    route: "/profile",
    icon: "/assets/icons/profile.svg",
  },
  {
    label: "Achte kredi",
    route: "/credits",
    icon: "/assets/icons/bag.svg",
  },
];

export const plans = [
  {
    _id: 1,
    name: "Gratis",
    icon: "/assets/icons/free-plan.svg",
    price: 0,
    credits: 20,
    inclusions: [
      {
        label: "20 kredi",
        isIncluded: true,
      },
      {
        label: "Aksè ak sèvis",
        isIncluded: true,
      },
      {
        label: "Priryorite nan sèvis kliyantèl",
        isIncluded: false,
      },
      {
        label: "Priryorite nan mizajou",
        isIncluded: false,
      },
    ],
  },
  {
    _id: 2,
    name: "Pwofesyonèl",
    icon: "/assets/icons/free-plan.svg",
    price: 100,
    credits: 120,
    inclusions: [
      {
        label: "120 Kredi",
        isIncluded: true,
      },
      {
        label: "Aksè konplè ak sèvis",
        isIncluded: true,
      },
      {
        label: "Priryorite nan sèvis kliyantèl",
        isIncluded: true,
      },
      {
        label: "Priryorite nan mizajou",
        isIncluded: false,
      },
    ],
  },
  {
    _id: 3,
    name: "VIP",
    icon: "/assets/icons/free-plan.svg",
    price: 200,
    credits: 2000,
    inclusions: [
      {
        label: "2000 Kredi",
        isIncluded: true,
      },
      {
        label: "Aksè konplè ak sèvis",
        isIncluded: true,
      },
      {
        label: "Priryorite nan sèvis kliyantèl",
        isIncluded: true,
      },
      {
        label: "Priryorite nan mizajou",
        isIncluded: true,
      },
    ],
  },
];

export const transformationTypes = {
  restore: {
    type: "restore",
    title: "Restore Imaj",
    subTitle: "Rafine imaj nan retire flou ak enpèfeksyon",
    config: { restore: true },
    icon: "image.svg",
  },
  removeBackground: {
    type: "removeBackground",
    title: "Elimine/efase fon nan imaj",
    subTitle: "Retire fon nan imaj ak Entèlijans Atifisyèl",
    config: { removeBackground: true },
    icon: "camera.svg",
  },
  fill: {
    type: "fill",
    title: "Ranplisaj Jenerativ",
    subTitle: "Chanje dimansyon yon imaj ak Entèlijans Atifisyèl",
    config: { fillBackground: true },
    icon: "stars.svg",
  },
  remove: {
    type: "remove",
    title: "Object Remove",
    subTitle: "Idantifye epi elimine yon bagay ki nan imaj",
    config: {
      remove: { prompt: "", removeShadow: true, multiple: true },
    },
    icon: "scan.svg",
  },
  recolor: {
    type: "recolor",
    title: "Object Recolor",
    subTitle: "Idantifye epi chanje koulè ",
    config: {
      recolor: { prompt: "", to: "", multiple: true },
    },
    icon: "filter.svg",
  },
};

export const aspectRatioOptions = {
  "1:1": {
    aspectRatio: "1:1",
    label: "Kare (1:1)",
    width: 1000,
    height: 1000,
  },
  "3:4": {
    aspectRatio: "3:4",
    label: "Fòma Estanda (3:4)",
    width: 1000,
    height: 1334,
  },
  "9:16": {
    aspectRatio: "9:16",
    label: "Fòma telefònm  (9:16)",
    width: 1000,
    height: 1778,
  },
};

export const defaultValues = {
  title: "",
  aspectRatio: "",
  color: "",
  prompt: "",
  publicId: "",
};

export const creditFee = -1;