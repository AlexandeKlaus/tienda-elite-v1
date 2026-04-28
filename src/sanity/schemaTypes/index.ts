import { type SchemaTypeDefinition } from 'sanity'
import { productType } from './product'
import category from './category'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productType],
}
