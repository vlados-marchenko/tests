import { BiCloud,  } from 'react-icons/bi';

const courses = [
    {
        title: 'Английский язык',
        duration: '1 hour',
        icon: <BiCloud />
    }, 
    {
        title: 'Испанский язык',
        duration: '1 hour',
        icon: <BiCloud />
    },
    {
        title: 'Немецкий язык',
        duration: '1 hour',
        icon: <BiCloud />
    }
];

const Card = () => {
    return (
        <div className="card--container">
            {
                courses.map( (item) => (
                    <div className="card">
                        <div className="card--cover">{item.icon}</div>
                        <div className="card--title">
                        <h2>{item.title}</h2>
                        {/* <h5>{item.duration}</h5> */}
                    </div>
                    </div>
                )
                )

            }
        </div>
    )
};

export default Card;