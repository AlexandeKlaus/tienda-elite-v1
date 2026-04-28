import imageUrlBuilder from '@sanity/image-url'
import { dataset, projectId } from '../env'

const builder = imageUrlBuilder({
  projectId: projectId || '3dtr2iq8', // Aquí puse tu ID de proyecto que vi en la captura
  dataset: dataset || 'production',
})

export const urlFor = (source: any) => {
  return builder.image(source)
}