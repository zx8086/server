import { createSchema } from 'graphql-yoga'
import resolvers from './resolvers'
 
export const schema = createSchema({
  typeDefs: `

  type Todo {
      id: ID!
      title: String!
    }
  
    type Query {
      todos: [Todo!]!
    }
  
    type Option {
      id: String
      channels: [String]
      color: String
      colorDescription1: String
      colorDescription2: String
      countryOfOrigin: String
      deliveryDate: String
      deliveryDates: [String]
      description: String
      dimensions: String
      divisionCode: String
      documentType: String
      fabric: String
      fashionability: String
      fashionabilityCode: String
      fit: String
      hasSustainableMaterials: Boolean
      images: String
      isAvailable: Boolean
      isCancelled: Boolean
      isNew: Boolean
      isSoldOut: Boolean
      isUpdated: Boolean
      llo: String
      merchandisingHierarchy: String
      optionType: String
      priceBySize: Boolean
      salesOrganizationCode: String
      styleDescription: String
      styleDescription1: String
      styleNumber: String
      styleSeasonCode: String
      sustainableAttribute: String
      sustainableFiber: String
      theme: String
      wash: String
    }
  
    type Query {
    todos: [Todo!]!
    todos(from: Int!, limit: Int!): [Todo!]!
    options: [Option]
    optionsByDivisionCode(divisionCode: String!): [Option]
    optionsPage(from: Int!, limit: Int!): [Option]
  }
  `,
  resolvers: resolvers
})