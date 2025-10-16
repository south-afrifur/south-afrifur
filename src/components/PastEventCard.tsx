import { Text, Title } from '@mantine/core';
import classes from '../styles/PastEventCard.module.css';

type PastEventCardProps = {
  mediaComponent?: React.ReactNode;
  title?: string;
  descriptionLines?: string[];
};

export function PastEventCard(props: PastEventCardProps) {
  return (
    <div className={classes.wrapper}>
      <div className={classes.body}>
        <Title className={classes.title}>{props.title}</Title>
        {props.descriptionLines?.map((line, index) => (
          <Text key={index} fw={500} fz="md" mb={30}>
            {line}
          </Text>
        ))}
      </div>
      <div className={classes.mediaComponent}>{props.mediaComponent}</div>
    </div>
  );
}
