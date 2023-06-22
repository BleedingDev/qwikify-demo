import { RegisteredComponent } from '@builder.io/sdk-qwik'
import { iconUriList } from '../iconDataUri'
import { Accordion } from '@edution-monorepo/qwik-ui'

export const AccordionBuilder: RegisteredComponent = {
  component: Accordion,
  name: 'Accordion',
  inputs: [
    {
      name: 'items',
      type: 'list',
      subFields: [
        { name: 'title', type: 'text' },
        { name: 'content', type: 'text' },
      ],
    },
  ],
  image: iconUriList.Accordion,
}
