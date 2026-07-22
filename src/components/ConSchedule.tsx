import dayjs from 'dayjs';
import { useState } from 'react';
import {
  Badge,
  Box,
  Button,
  Container,
  Group,
  List,
  Modal,
  SegmentedControl,
  Stack,
  Text,
  ThemeIcon,
  Title,
  UnstyledButton,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { AgendaView, ResourcesDayView, type ScheduleEventData } from '@mantine/schedule';
import { CON_DATES, events, resources } from '../utils/schedule-data';
import classes from '../styles/ConSchedule.module.css';

const DAYS = [
  { label: 'Fri 7', value: CON_DATES.friday },
  { label: 'Sat 8', value: CON_DATES.saturday },
  { label: 'Sun 9', value: CON_DATES.sunday },
];

const VIEWMODES = [
  { label: 'Calendar', value: 'calendar' },
  { label: 'Agenda', value: 'agenda' },
];

const eventRunning = (event: ScheduleEventData) => {
  const currentTimeAndDate = dayjs();
  const eventStart = dayjs(event.start);
  const eventEnd = dayjs(event.end);

  return currentTimeAndDate.isAfter(eventStart) && currentTimeAndDate.isBefore(eventEnd);
};

export function ConSchedule() {
  const isPhone = useMediaQuery('(max-width: 768px)');
  const [date, setDate] = useState<string>(CON_DATES.friday);
  const [selected, setSelected] = useState<ScheduleEventData | null>(null);
  const [viewMode, setViewMode] = useState<string>('calendar');

  const openEvent = (event: ScheduleEventData) => setSelected(event);

  const DAY_WINDOW = {
    '2026-08-07': { startTime: '08:00:00', endTime: '23:59:00', startScrollTime: '14:00:00' },
    '2026-08-08': { startTime: '08:00:00', endTime: '23:59:00', startScrollTime: '08:00:00' },
    '2026-08-09': { startTime: '08:00:00', endTime: '23:59:00', startScrollTime: '08:00:00' },
  }[date];

  return (
    <Stack gap="sm" w="100%" align="center">
      <Stack gap="sm" w={isPhone ? '100%' : 500}>
        <SegmentedControl
          fullWidth={isPhone}
          data={DAYS}
          value={date}
          onChange={setDate}
          mx="lg"
          classNames={{
            label: classes.segment,
          }}
        />
        {!isPhone && (
          <SegmentedControl
            data={VIEWMODES}
            value={viewMode}
            onChange={setViewMode}
            maw={600}
            classNames={{
              label: classes.segment,
            }}
          />
        )}
      </Stack>

      {isPhone || viewMode === 'agenda' ? (
        <AgendaView
          rangeStart={date}
          miw={isPhone ? '100%' : 600}
          rangeEnd={date}
          events={events}
          styles={{
            agendaViewHeader: {
              display: 'none',
            },
          }}
          onEventClick={openEvent}
          renderEvent={(event, props) => {
            return (
              <UnstyledButton {...props}>
                <Box
                  style={{
                    display: 'flex',
                    gap: 'var(--mantine-spacing-sm)',
                    padding: 'var(--mantine-spacing-xs) var(--mantine-spacing-sm)',
                  }}
                >
                  <Box
                    style={{
                      width: 4,
                      borderRadius: 2,
                      flexShrink: 0,
                      backgroundColor: `var(--mantine-color-${event.color}-filled)`,
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <Group justify="space-between" wrap="nowrap">
                      <Text size="sm" fw={500}>
                        {event.title}
                      </Text>
                      <Badge size="xs" variant="light" color={event.color}>
                        {event.payload?.category}
                      </Badge>
                    </Group>
                    <Text size="xs" c="dimmed">
                      {dayjs(event.start).format('HH:mm')} – {dayjs(event.end).format('HH:mm')}
                    </Text>
                    {event.payload?.room && (
                      <Text size="xs" c="dimmed" mt={2}>
                        📍 {event.payload.room}
                      </Text>
                    )}
                    {event.payload?.adult && (
                      <Text size="xs" c="red" mt={2}>
                        Adults only (18+)
                      </Text>
                    )}
                    {eventRunning(event) && (
                      <Text size="xs" c="green" mt={2}>
                        Running
                      </Text>
                    )}
                  </div>
                </Box>
              </UnstyledButton>
            );
          }}
        />
      ) : (
        <Container miw={'80%'}>
          <ResourcesDayView
            date={date}
            w="auto"
            onDateChange={setDate}
            resources={resources}
            events={events}
            slotWidth={120}
            rowHeight={50}
            onEventClick={openEvent}
            withCurrentTimeIndicator
            withCurrentTimeBubble
            renderResourceLabel={(event) => {
              return (
                <Text size="sm" fw={500} style={{ textAlign: 'center' }}>
                  {event.label}
                </Text>
              );
            }}
            {...DAY_WINDOW}
            withHeader={false}
            renderEventBody={(event) =>
              event.payload?.adult ? (
                <UnstyledButton onClick={() => openEvent(event)}>
                  <Stack gap={6}>
                    <Text size="xs" fw={600} truncate>
                      {event.title}
                    </Text>
                    <Badge size="xs" color="red">
                      18+
                    </Badge>
                  </Stack>
                </UnstyledButton>
              ) : (
                <UnstyledButton onClick={() => openEvent(event)}>
                  <Stack>
                    <Group gap={4} wrap="nowrap">
                      <Text size="xs" fw={600} truncate>
                        {event.title}
                      </Text>
                    </Group>
                  </Stack>
                </UnstyledButton>
              )
            }
          />
        </Container>
      )}

      <Button c="#ffecb3" variant="subtle" color="dark">
        Download PDF of Schedule (coming soon)
      </Button>

      <Title order={3} mt="md" mb="xs" c="#ffecb3">
        Legend
      </Title>

      <List>
        <List.Item icon={<ThemeIcon color="grape" size={12} radius="xs"></ThemeIcon>}>
          Headline
        </List.Item>
        <List.Item icon={<ThemeIcon color="orange" size={12} radius="xs"></ThemeIcon>}>
          Featured
        </List.Item>
        <List.Item icon={<ThemeIcon color="blue" size={12} radius="xs"></ThemeIcon>}>
          Panel / Activity
        </List.Item>
        <List.Item icon={<ThemeIcon color="teal" size={12} radius="xs"></ThemeIcon>}>
          Drop-in
        </List.Item>
        <List.Item icon={<ThemeIcon color="green" size={12} radius="xs"></ThemeIcon>}>
          Dealers / Sales
        </List.Item>
        <List.Item icon={<ThemeIcon color="yellow" size={12} radius="xs"></ThemeIcon>}>
          Meals
        </List.Item>
      </List>

      <EventModal event={selected} onClose={() => setSelected(null)} />
    </Stack>
  );
}

function EventModal({ event, onClose }: { event: ScheduleEventData | null; onClose: () => void }) {
  const room = event ? resources.find((r) => r.id === event.resourceId)?.label : undefined;
  const host = event ? event.payload?.host : undefined;
  return (
    <Modal
      opened={event !== null}
      onClose={onClose}
      title={event?.title}
      centered
      styles={{ title: { fontWeight: 600 } }}
    >
      {event && (
        <Stack gap="xs">
          {event?.payload?.description && (
            <Text size="sm" mb="xs">
              {event.payload.description}
            </Text>
          )}
          <Group gap="xs">
            <Badge color={event.color}>{event.payload?.category}</Badge>
            {event.payload?.adult && <Badge color="red">18+ · Adult content</Badge>}
          </Group>
          <Text size="sm" fw={500}>
            {dayjs(event.start).format('dddd D MMM, HH:mm')} – {dayjs(event.end).format('HH:mm')}
          </Text>
          <Stack gap={0}>
            {room && <Text size="sm">Where: {room}</Text>}
            {host && <Text size="sm">Host: {host}</Text>}
          </Stack>
        </Stack>
      )}
    </Modal>
  );
}
