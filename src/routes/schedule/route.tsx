import { createFileRoute } from '@tanstack/react-router'
import { ConSchedule } from '../../components/ConSchedule'
import {  Container } from '@mantine/core'

export const Route = createFileRoute('/schedule')({
  component: RouteComponent,
})

function RouteComponent() {
  return   <Container mt={'xl'} miw='80%'><ConSchedule/></Container>
}
