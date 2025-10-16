import { Card, Group, Image, Text, type ImageProps } from '@mantine/core';
import { RouterAnchor, type RouterAnchorProps } from './RouterAnchor';
import classes from '../styles/InfoCard.module.css';

type InfoCardProps = {
  imageSrc?: string;
  title?: string;
  description?: string;
  imageProps?: ImageProps;
  link?: string;
  anchorProps?: RouterAnchorProps;
};

export function InfoCard(props: InfoCardProps) {
  const { imageSrc, title, description, link, anchorProps } = props;

  return (
    <Card radius="md" p="md" className={classes.card} bg="grayBlue.9">
      <Card.Section h={70}>
        <Group justify="center" h="100%">
          <RouterAnchor to={link as any} fz="lg" fw={500} underline="always" {...anchorProps}>
            {title}
          </RouterAnchor>
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
