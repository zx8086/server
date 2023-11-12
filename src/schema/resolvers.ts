type Option = {
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

// Placeholder function for creating an Option object with random values
function createDivisionData(
  brand: string,
  styleNumber: string,
  colorDescription1: string,
  optionType: string
): Option {
  // Define division codes based on the brand
  const divisions = brand === 'TH'
    ? ['01', '02', '03', '04', '05', '07', '08', '09', '10', '11', '18']
    : ['61', '62', '63', '64', '65', '67', '68', '69', '70', '71', '77'];

  const randomDivision = divisions[Math.floor(Math.random() * divisions.length)];

  // Define possible sales channels
  const possibleSalesChannels = ['B2B', 'SELLIN'];

  // Randomly select a subset of sales channels (can be both, either, or neither)
  const selectedSalesChannels = possibleSalesChannels.filter(() => Math.random() < 0.5);

  // Create the Option object with random values
  const document: Option = {
    channels: null,
    color: colorDescription1,
    colorDescription1,
    colorDescription2: 'Dark Blue', // You can set a default value or modify this logic
    countryOfOrigin: 'North America', // You can set a default value or modify this logic
    deliveryDate: null,
    deliveryDates: null,
    description: 'MERCER JEAN SLIM FIT',
    dimensions: null,
    divisionCode: randomDivision,
    documentType: 'option',
    fabric: 'LIC-EUR DENIM 11.8 OZ',
    fashionability: 'SEASONAL FASHION / DIRECTIONAL',
    fashionabilityCode: '003',
    fit: '003',
    hasSustainableMaterials: Math.random() < 0.5, // Random true/false
    images: '', // You can add images logic here
    isAvailable: Math.random() < 0.5, // Random true/false
    isCancelled: Math.random() < 0.5, // Random true/false
    isNew: Math.random() < 0.5, // Random true/false
    isSoldOut: Math.random() < 0.5, // Random true/false
    isUpdated: Math.random() < 0.5, // Random true/false
    llo: '7690',
    merchandisingHierarchy: null,
    optionType,
    priceBySize: false,
    salesOrganizationCode: 'THE1',
    styleDescription: null,
    styleDescription1: null,
    styleNumber,
    styleSeasonCode: 'B61', // You can set a default value or modify this logic
    sustainableAttribute: null,
    sustainableFiber: null,
    theme: null,
    wash: null,
    salesChannels: selectedSalesChannels.length > 0 ? selectedSalesChannels : [],
  };

  return document;
}

// Mock data generation function
function createMockOptions() {
  const createdDocuments = [];

  // Define brands
  const brands = ['TH', 'CK'];

  for (let i = 1; i <= 200; i++) {
    const brand = brands[Math.floor(Math.random() * brands.length)];
    const styleNumber = `MW0MW177700CJ`; // Unique style number for each document.
    const colorDescription1 = `000`; // Unique color description for each document.
    const optionType = 'OptionType'; // Replace with the desired option type.

    const document = createDivisionData(
      brand,
      styleNumber,
      colorDescription1,
      optionType
    );

    createdDocuments.push(document);
  }

  return createdDocuments;
}

const todos = [
  { id: '1', title: 'Buy groceries' },
  { id: '2', title: 'Walk the dog' },
  { id: '3', title: 'Do laundry' },
  { id: '4', title: 'Wash dishes' },
  { id: '5', title: 'Clean room' },
  { id: '6', title: 'Mow lawn' },
  { id: '7', title: 'Take out trash' },
];

// Call the createMockOptions function to generate mock data
const mockOptions = createMockOptions();

// Print the generated mock options
console.log(mockOptions);
console.log(todos)

function fetchOptionsByDivisionCode(divisionCode) {
  // Simulate fetching options based on the provided divisionCode
  return mockOptionsDataSource.filter((option) => option.divisionCode === divisionCode);
}


const resolvers = {
  Query: {
    // slow: async () => {
    //   await new Promise(resolve => setTimeout(resolve, 5000))
    //   return 'I am slow.'
    // },
    options: (): Option[] => {
      // Return the generated mock options
      return mockOptions;
    },
    optionsByDivisionCode: (_: any, { divisionCode }: { divisionCode: string }) => {
      // Filter mock options based on divisionCode
      return mockOptions.filter(option => option.divisionCode === divisionCode);
    },
    fetchOptionsByDivisionCode: (_: any, { divisionCode }: { divisionCode: string }) => {
      // Filter mock options based on divisionCode
      return mockOptions.filter((option) => option.divisionCode === divisionCode);
    },

    optionCounts: async (_: any, { divisionCode, salesChannels }: { divisionCode: string, salesChannels: string[] }) => {
      // Filter options based on divisionCode and salesChannels
      const options = mockOptions.filter((option) => {
        return option.divisionCode === divisionCode && salesChannels.some((channel) => option.salesChannels.includes(channel));
      });
      
      // Calculate counts for each attribute
      const isAvailableCount = options.filter((option) => option.isAvailable).length;
      const isCancelledCount = options.filter((option) => option.isCancelled).length;
      const isNewCount = options.filter((option) => option.isNew).length;
      const isSoldOutCount = options.filter((option) => option.isSoldOut).length;
      const isUpdatedCount = options.filter((option) => option.isUpdated).length;

      // Calculate the totalCount
      const totalCount = options.length;

      // Return the counts as an object
      return {
        isAvailableCount,
        isCancelledCount,
        isNewCount,
        isSoldOutCount,
        isUpdatedCount,
        totalCount,  // Include the totalCount field
      };
    },
    todos: () => todos,
  },
  Subscription: {
    countdown: {
      // This will return the value on every 1 sec until it reaches 0
      subscribe: async function* (_, { from }) {
        for (let i = from; i >= 0; i--) {
          await new Promise(resolve => setTimeout(resolve, 1000))
          yield { countdown: i }
        }
      }
    }
  },
};

export default resolvers;
