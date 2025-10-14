import { Anchor, Card, Group, Image, Text, type ImageProps } from '@mantine/core';
import classes from '../styles/InfoCard.module.css';

type InfoCardProps = {
  imageSrc?: string;
  title?: string;
  description?: string;
  imageProps?: ImageProps;
};

export function InfoCard(props: InfoCardProps) {
  const { imageSrc, title, description } = props;

  return (
    <Card withBorder radius="md" p="md" className={classes.card} bg="grayBlue.9">
      <Card.Section h={70}>
        <Group justify="center" h="100%">
          <Anchor fz="lg" fw={500} underline="always">
            {title}
          </Anchor>
        </Group>
      </Card.Section>
      <Card.Section>
        <Image src={imageSrc} alt={title} height={250} {...props.imageProps} />
      </Card.Section>

      <Card.Section className={classes.section} mt="md">
        <Text fz="sm">{description}</Text>
      </Card.Section>
    </Card>
  );
}
