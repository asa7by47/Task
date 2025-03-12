export default function useHandleScheduleCardActions() {
  const ACTIONS = {
    BOOK_NOW: "BOOK_NOW",
    JOIN_WAITLIST: "JOIN_WAITLIST",
    LEAVE_WAITLIST: "LEAVE_WAITLIST",
  } as const;

  type Action = keyof typeof ACTIONS;

  const bookNow = (id: number) => {
    // call here action of booking
    console.log(`Booking for id: ${id}`);
  };

  const joinWaitList = (id: number) => {
    // call here action of join wait list
    console.log(`Joining waitlist for id: ${id}`);
  };

  const leaveWaitList = (id: number) => {
    // call here action of leave wait list
    console.log(`Leaving waitlist for id: ${id}`);
  };

  const actionMap: Record<Action, (id: number) => void> = {
    [ACTIONS.BOOK_NOW]: bookNow,
    [ACTIONS.JOIN_WAITLIST]: joinWaitList,
    [ACTIONS.LEAVE_WAITLIST]: leaveWaitList,
  };

  const handleAction = (action: string, id: number) => {
    const actionFunction = actionMap[action as Action];
    if (actionFunction) {
      actionFunction(id);
    }
  };

  return { handleAction };
}
