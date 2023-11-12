const typeDefs = /* GraphQL */`
  type Todo {
    id: ID!
    title: String!
  }

  type Dimensions {
    heelHeight: Float
    height: Float
    length: Float
    shaftHeight: Float
    width: Float
  }

  type Inseam {
    index: Int
    name: String
    sizes: [Size]
  }

  type Size {
    name: String
    index: Int
    pimVariantKeyNo: String
    EAN: String
    sapVariant: String
    status: Status
  }

  type Status {
    isAvailable: Boolean
    isCancelled: Boolean
    code: String
    isClosed: Boolean
    isSoldOut: Boolean
    description: String
    isInvalid: Boolean
  }

  type MerchandisingHierarchy {
    business: String
    category: String
    code: String
    gender: String
    lifestyle: String
    productgroup: String
    productsubgroup: String
    world: String
  }

  type PimDeliveryDates {
    additionalDeliveryDate: String
    adjustedDeliveryDate: String
    dropDate: Float
    modifiedOn: String
  }

  type Theme {
    name: String
  }

  type Option {
    activeOption: Boolean
    brand: String
    brandCode: String
    certificationStyles: [String]
    channels: [String]
    closure: String
    collar: String
    collection: String
    collectionStructure: String
    color: String
    colorDescription1: String
    colorDescription2: String
    consumerAssortment: String
    consumerAssortmentCode: String
    copiedFromOption: String
    countryOfOrigin: String
    ctpMonth: String
    description: String
    dimensions: Dimensions
    distribution: String
    divisionCode: String
    documentType: String
    effectiveHeelHeightCM: Float
    fabric: String
    fashionability: String
    fashionabilityCode: String
    fit: String
    fitForBottoms: String
    fitForTops: String
    fmsCollectionCode: String
    fmsMainSeasonCode: String
    garmentLength: String
    hasSustainableMaterials: Boolean
    hexCode: String
    images: String
    innovation: Boolean
    innovationAttributes: String
    inseams: Inseam
    insockComposition: String
    internalStyleName: String
    internal_id: String
    isAvailable: Boolean
    isCancelled: Boolean
    isClosed: Boolean
    isInvalid: Boolean
    isLicensed: Boolean
    isNew: Boolean
    isSoldOut: Boolean
    isUpdated: Boolean
    keyLook: String
    label: String
    liningComposition: String
    llo: Int
    mainSeason: String
    merchandisingHierarchy: MerchandisingHierarchy
    neckline: String
    openForEcom: Boolean
    optionCode: String
    optionType: String
    originatingProductLine: String
    originatingProductLineCode: String
    packingType: String
    paddingComposition: String
    pimDeliveryDates: PimDeliveryDates
    pimOptionKeyNo: String
    pimProductKeyNo: String
    plannedWashOption: String
    platformHeightCM: Float
    prepackSizeOffer: String
    priceBySize: Boolean
    productStory: String
    program: String
    referenceOptionNumber: String
    referenceStyleNumber: String
    rise: String
    salesChannels: [String]
    salesComments: String
    salesOrganizationCode: String
    seasonYear: String
    shape: String
    shoeOutsoleComposition: String
    sizeCode: String
    sizeRange: String
    sizeRangeOption: String
    sleeveLength: String
    styleDescription: String
    styleDescriptions: [String]
    styleNumber: String
    styleSeasonCode: String
    sustainableAttribute: String
    sustainableFiber: String
    sustainableFibers: [String]
    swatchBookNumber: String
    theme: Theme
    upperComposition: String
    wash: String
  }

  type OptionCounts {
    isAvailableCount: Int
    isCancelledCount: Int
    isNewCount: Int
    isSoldOutCount: Int
    isUpdatedCount: Int
    totalCount: Int   # Include the totalCount field
  }

  type Query {
    todos: [Todo!]!
    todosPage(from: Int!, limit: Int!): [Todo!]!
    options: [Option]
    optionCounts(divisionCode: String!, salesChannels: [String!]): OptionCounts  # Include salesChannels input
    optionsPage(from: Int!, limit: Int!): [Option]
    optionsByDivisionAndChannels(divisionCode: String!, salesChannels: [String!]!): [Option]
    optionsByDivisionCode(divisionCode: String!): [Option]
    fetchOptionsByDivisionCode(divisionCode: String!): [Option]
  }

  type Subscription {
    countdown(from: Int!): Int!
  }
`;


export default typeDefs;
    