export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-08-04'

export const hookSecret = 
    process.env.NEXT_PUBLIC_SANITY_HOOK_SECRET || ''

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const useCdn = false
