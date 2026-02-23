import { Divider, Grid, Text, Title } from '@mantine/core';
import { AttributionBox } from './AttributionBox';
import classes from '../styles/PastEventCard.module.css';

type PastEventCardProps = {
  mediaComponent?: React.ReactNode;
  title?: string;
  descriptionLines?: string[];
  mediaAuthor?: string;
  statistics?: { label: string; value: string }[];
  subTitle?: string;
};

export function PastEventCard(props: PastEventCardProps) {
  const items = props.statistics?.map((stat) => (
    <Grid.Col
      span={{
        base: 6,
        md: 3,
      }}
    >
      <div key={stat.label}>
        <Text size="xs" c="dimmed">
          {stat.label}
        </Text>
        <Text fw={500} size="sm">
          {stat.value}
        </Text>
      </div>
    </Grid.Col>
  ));

  return (
    <div className={classes.wrapper}>
      <div className={classes.body}>
        <Title className={classes.title} c="#ffecb3">
          {props.title}
        </Title>
        {props.subTitle && (
          <Title order={4} className={classes.subTitle} mt={-15}>
            {props.subTitle}
          </Title>
        )}
        {props.descriptionLines?.map((line, index) => (
          <Text key={index} fw={500} fz="md" mb={30}>
            {line}
          </Text>
        ))}
        {!!items && (
          <>
            <Divider mb={15} />
            <Grid pb={0} mb={0} justify="space-between">
              {items}
            </Grid>
          </>
        )}
      </div>
      <div className={classes.mediaComponent}>
        {props.mediaComponent}
        {props.mediaAuthor && <AttributionBox author={props.mediaAuthor} />}
      </div>
    </div>
  );
}
