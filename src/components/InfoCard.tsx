import { Card, Group, Image, Text, type ImageProps, type TextProps } from '@mantine/core';
import { AttributionBox } from './AttributionBox';
import { RouterAnchor, type RouterAnchorProps } from './RouterAnchor';
import classes from '../styles/InfoCard.module.css';

type InfoCardProps = {
  imageSrc?: string;
  title?: string;
  description?: string;
  imageProps?: ImageProps;
  link?: string;
  anchorProps?: RouterAnchorProps;
  author?: string;
  authorTextProps?: TextProps;
};

export function InfoCard(props: InfoCardProps) {
  const { imageSrc, title, description, link, anchorProps, author, authorTextProps } = props;

  return (
    <Card radius="md" p="md" className={classes.card} bg="noir.9" withBorder shadow="xs">
      <Card.Section h={70}>
        <Group justify="center" h="100%">
          <RouterAnchor to={link as any} fz="lg" fw={500} underline="always" {...anchorProps}>
            {title}
          </RouterAnchor>
        </Group>
      </Card.Section>
      <Card.Section pos="relative">
        <Image src={imageSrc} alt={title} height={250} {...props.imageProps} />
        {author && <AttributionBox author={author} authorTextProps={authorTextProps} />}
      </Card.Section>

      <Card.Section className={classes.section} mt="md">
        <Text fz="sm">{description}</Text>
      </Card.Section>
    </Card>
  );
}
