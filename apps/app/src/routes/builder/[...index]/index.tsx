import { component$ } from '@builder.io/qwik'
import { DocumentHead, routeLoader$ } from '@builder.io/qwik-city'
import {
  getBuilderSearchParams,
  getContent,
  RegisteredComponent,
  RenderContent,
} from '@builder.io/sdk-qwik'
import { AccordionBuilder, FragmentBuilder } from '@edution-monorepo/builder'

export const apiKey = 'fc8c4845012a4bc1b1ad5def62ae864f'
export const model = 'page'

export const CUSTOM_COMPONENTS: RegisteredComponent[] = [
  AccordionBuilder,
  FragmentBuilder,
]

export const useBuilderContentLoader = routeLoader$(async ({ url, error }) => {
  const data = await getContent({
    model,
    apiKey,
    apiVersion: 'v3',
    options: {
      ...getBuilderSearchParams(url.searchParams),
      cachebust: true,
    },
    userAttributes: {
      urlPath: url.pathname.replace('/builder', '') || '/',
    },
  })

  if (!data) {
    throw error(404, 'page not found')
  }

  console.log(data)

  return data
})

export default component$(() => {
  const content = useBuilderContentLoader()

  if (content === null) {
    return <h1>Page not found</h1>
  }

  return (
    <RenderContent
      apiVersion="v3"
      model="page"
      content={content.value}
      apiKey={apiKey}
      customComponents={CUSTOM_COMPONENTS}
    />
  )
})

export const head: DocumentHead = {
  title: 'Edution page defined in Builder.io',
}
