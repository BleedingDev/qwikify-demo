import { Fragment, component$ } from '@builder.io/qwik'
import { RegisteredComponent } from '@builder.io/sdk-qwik'

export const FragmentAlt = component$((props) => {
  return <Fragment {...props} />
})

export const FragmentBuilder: RegisteredComponent = {
  component: FragmentAlt,
  name: 'Core:Fragment',
  canHaveChildren: true,
}
