import { Link } from 'react-router-dom';
import './assets/css/navigation.css'

const links = [
    {
        to: '/react-deploy-thunk',
        label: 'Users'
    },
    {
        to: '/addUser',
        label: 'AddUser'
    }
];

export const Navigation = () => (
    <nav className='navigation__nav'>
        <ul className='navigation__ul'>
            { links.map(link => (
                <li className='navigation__li' key={ link.to}>
                    <Link className='navigation__link' to={link.to}>{link.label}</Link>
                </li>
            ))}
        </ul>
    </nav>
);