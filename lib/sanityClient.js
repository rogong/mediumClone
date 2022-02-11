import sanityClient from '@sanity/client';

export const client = sanityClient({
    projectId: '993hy7k1',
    dataset: 'production',
    apiVersion: '2021-03-25',
    useCdn: false,
    token: 'skQBs8ScHZ4g3SvHvpSMqHUD7BFbeBb0UtbiIKBm25K0kg38CsAwvkRInMPpVWiHulJgxHt6BAJSO2eCyslubMgDJIGE1iPYPJ0bouF6w5R0P5foHOxn2iDjJdMZsApIRTtsC79U4A5Hkj3hpq8SlfILI1S6xUzpehOKETFiMaIWcpbspO1k'
})