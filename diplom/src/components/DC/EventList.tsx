const EventList = ({ events }) => {
    return (
        <ul> {events.map((event) => (
            <li key={event}>{event}</li>))
            
        }</ul>
    );
};

export default EventList;