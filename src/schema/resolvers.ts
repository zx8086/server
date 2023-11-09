type Option = {
  id: string;
  channels: string[] | null;
  color: string;
  colorDescription1: string;
  colorDescription2: string;
  countryOfOrigin: string;
  deliveryDate: string | null;
  deliveryDates: string[] | null;
  description: string;
  dimensions: string | null;
  divisionCode: string;
  documentType: string;
  fabric: string;
  fashionability: string;
  fashionabilityCode: string;
  fit: string;
  hasSustainableMaterials: boolean;
  images: string;
  isAvailable: boolean;
  isCancelled: boolean;
  isNew: boolean;
  isSoldOut: boolean;
  isUpdated: boolean;
  llo: string;
  merchandisingHierarchy: string | null;
  optionType: string;
  priceBySize: boolean;
  salesOrganizationCode: string;
  styleDescription: string | null;
  styleDescription1: string | null;
  styleNumber: string;
  styleSeasonCode: string;
  sustainableAttribute: string | null;
  sustainableFiber: string | null;
  theme: string | null;
  wash: string | null;
};

const resolvers = {
  Query: {
    options: (): Option[] => [
      createDivisionData('TH', '01', '0887893568905', 'ARMADA INDIGO', 'DENIM', 'TN', 'Fashion'),
    ],
  },
};

function createDivisionData(
  brand: string,
  divisionCode: string,
  styleNumber: string,
  colorDescription1: string,
  colorDescription2: string,
  countryOfOrigin: string,
  optionType: string
): Option {
  return {
    id: `OPTION_${brand}_${divisionCode}_${styleNumber}${colorDescription1.substring(0, 3)}`,
    channels: null,
    color: colorDescription1.substring(0, 3),
    colorDescription1: colorDescription1,
    colorDescription2: colorDescription2,
    countryOfOrigin: countryOfOrigin,
    deliveryDate: null,
    deliveryDates: null,
    description: `MERCER ${colorDescription1}`,
    dimensions: null,
    divisionCode: divisionCode,
    documentType: "option",
    fabric: "LIC-EUR DENIM 11.8 OZ",
    fashionability: "SEASONAL FASHION / DIRECTIONAL",
    fashionabilityCode: "003",
    fit: "003",
    hasSustainableMaterials: false,
    images: `IMAGE_01_B61_${styleNumber}${colorDescription1.substring(0, 3)}`,
    isAvailable: true,
    isCancelled: false,
    isNew: false,
    isSoldOut: false,
    isUpdated: false,
    llo: "7690",
    merchandisingHierarchy: null,
    optionType: optionType,
    priceBySize: false,
    salesOrganizationCode: "THE1",
    styleDescription: null,
    styleDescription1: null,
    styleNumber: styleNumber,
    styleSeasonCode: "B61",
    sustainableAttribute: null,
    sustainableFiber: null,
    theme: null,
    wash: null
  };
}


export default resolvers;
