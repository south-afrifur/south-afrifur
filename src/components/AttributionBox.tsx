import { IconCamera } from '@tabler/icons-react';
import { alpha, Group, Paper, Text, ThemeIcon } from '@mantine/core';

type AttributionBoxProps = {
  author: string;
  authorTextProps?: React.ComponentProps<typeof Text>;
};

const AttributionBox = ({ author, authorTextProps }: AttributionBoxProps) => {
  return (
    <Paper pos="absolute" bottom={5} left={5} bg={alpha('gray', 0.6)} p={3}>
      <Group pl={2} gap={4}>
        <ThemeIcon size="xs" variant="transparent" color="white">
          <IconCamera />
        </ThemeIcon>
        <Text c="white" fz="xs" fw={500} {...authorTextProps}>
          {author}
        </Text>
      </Group>
    </Paper>
  );
};

export { AttributionBox };
