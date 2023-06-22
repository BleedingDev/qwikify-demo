import { Accordion as ReactAccordion } from '@edution-monorepo/react-ui'
import { qwikify$ } from '@builder.io/qwik-react'

export const Accordion = qwikify$(ReactAccordion, { eagerness: 'hover' })
