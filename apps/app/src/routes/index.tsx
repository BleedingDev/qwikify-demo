import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import { Accordion } from '@edution-monorepo/qwik-ui'

export default component$(() => {
  return (
    <div>
      <Accordion
        items={[
          { title: 'Test', content: 'This is testing accordion content' },
        ]}
      />
    </div>
  )
})

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
}
