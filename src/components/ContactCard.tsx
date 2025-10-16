import { Button, Card, Center, Group, Text, Title } from '@mantine/core';
import classes from '../styles/ContactCard.module.css';

type ContactCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

export function ContactCard(props: ContactCardProps) {
  return (
    <Card padding="lg" radius="md" className={classes.card} bg="grayBlue.9">
      <Card.Section my="sm">
        <Center>{props.icon}</Center>
      </Card.Section>

      <Group justify="center" mt="lg">
        <Title className={classes.title}>{props.title}</Title>
      </Group>
      <Text mt="lg" mb="md" c="dimmed" fz="sm">
        {props.description}
      </Text>
      <Card.Section className={classes.footer}>
        <Button variant="gradient" w="100%" gradient={{ from: 'cyan.7', to: 'blue.6' }}>
          Join
        </Button>
      </Card.Section>
    </Card>
  );
}
