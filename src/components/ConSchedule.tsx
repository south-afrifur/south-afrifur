import dayjs from 'dayjs';
import { useState } from 'react';
import { Badge, Group, Modal, SegmentedControl, Stack, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { AgendaView, ResourcesDayView, type ScheduleEventData } from '@mantine/schedule';
import { CON_DATES, events, resources } from '../utils/schedule-data';

const DAYS = [
  { label: 'Fri 7', value: CON_DATES.friday },
  { label: 'Sat 8', value: CON_DATES.saturday },
  { label: 'Sun 9', value: CON_DATES.sunday },
];

const DAY_WINDOW = { startTime: '08:00:00', endTime: '23:59:00', startScrollTime: '10:00:00' };

export function ConSchedule() {
  const isPhone = useMediaQuery('(max-width: 48em)');
  const [date, setDate] = useState<string>(CON_DATES.friday);
  const [selected, setSelected] = useState<ScheduleEventData | null>(null);

  const openEvent = (event: ScheduleEventData) => setSelected(event);

  return (
    <Stack gap="sm">
      <SegmentedControl fullWidth={isPhone} data={DAYS} value={date} onChange={setDate} />

      {isPhone ? (
        <AgendaView
          rangeStart={date}
          rangeEnd={date}
          events={events}
          onEventClick={openEvent}
          renderEvent={(event, props) => {
            const adult = event.payload?.adult;
            const room = resources.find((r) => r.id === event.resourceId)?.label;
            return (
              <div {...(props as any)}>
                <Group justify="space-between" wrap="nowrap" gap="xs" p="xs">
                  <div style={{ minWidth: 0 }}>
                    <Group gap={6} wrap="nowrap">
                      <Text size="sm" fw={600} truncate>
                        {event.title}
                      </Text>
                      {adult && (
                        <Badge size="xs" color="red">
                          18+
                        </Badge>
                      )}
                    </Group>
                    <Text size="xs" c="dimmed">
                      {dayjs(event.start).format('HH:mm')}–{dayjs(event.end).format('HH:mm')}
                      {room ? ` · ${room}` : ''}
                    </Text>
                  </div>
                </Group>
              </div>
            );
          }}
        />
      ) : (
        <ResourcesDayView
          date={date}
          onDateChange={setDate}
          mode="static"
          resources={resources}
          events={events}
          onEventClick={openEvent}
          {...DAY_WINDOW}
          renderEventBody={(event) =>
            event.payload?.adult ? (
              <Group gap={4} wrap="nowrap">
                <Text size="xs" fw={600} truncate>
                  {event.title}
                </Text>
                <Badge size="xs" color="red">
                  18+
                </Badge>
              </Group>
            ) : (
              <Text size="xs" fw={600} truncate>
                {event.title}
              </Text>
            )
          }
        />
      )}

      <EventModal event={selected} onClose={() => setSelected(null)} />
    </Stack>
  );
}

function EventModal({ event, onClose }: { event: ScheduleEventData | null; onClose: () => void }) {
  const room = event ? resources.find((r) => r.id === event.resourceId)?.label : undefined;

  return (
    <Modal opened={event !== null} onClose={onClose} title={event?.title} centered>
      {event && (
        <Stack gap="xs">
          <Group gap="xs">
            <Badge color={event.color}>{event.payload?.category}</Badge>
            {event.payload?.adult && <Badge color="red">18+ · Adult content</Badge>}
          </Group>
          <Text size="sm">
            {dayjs(event.start).format('dddd D MMM, HH:mm')} – {dayjs(event.end).format('HH:mm')}
          </Text>
          {room && (
            <Text size="sm" c="dimmed">
              Where: {room}
            </Text>
          )}
        </Stack>
      )}
    </Modal>
  );
}
